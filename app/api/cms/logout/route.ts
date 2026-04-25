import { NextResponse } from "next/server";
import { CMS_AUTH_COOKIE } from "@/lib/cms-auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.headers.set("Cache-Control", "no-store");
  response.cookies.set({
    name: CMS_AUTH_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return response;
}
