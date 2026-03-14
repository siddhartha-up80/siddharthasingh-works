import { NextRequest, NextResponse } from "next/server";
import {
  CMS_AUTH_COOKIE,
  getCmsCookieValue,
  isValidCmsPassword,
} from "@/lib/cms-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = body?.password;

    if (!isValidCmsPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const cookieValue = getCmsCookieValue();

    if (!cookieValue) {
      return NextResponse.json(
        { error: "CMS_PASSWORD is not configured" },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: CMS_AUTH_COOKIE,
      value: cookieValue,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
