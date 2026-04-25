import { NextRequest, NextResponse } from "next/server";
import {
  CMS_AUTH_COOKIE,
  getCmsCookieValue,
  isValidCmsPassword,
} from "@/lib/cms-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password =
      typeof body?.password === "string" ? body.password.trim() : "";

    if (!password || password.length > 256) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    if (!isValidCmsPassword(password)) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const cookieValue = await getCmsCookieValue();

    if (!cookieValue) {
      return NextResponse.json(
        { error: "CMS auth is not configured" },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ success: true });
    response.headers.set("Cache-Control", "no-store");
    response.cookies.set({
      name: CMS_AUTH_COOKIE,
      value: cookieValue,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
