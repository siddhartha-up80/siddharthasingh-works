import { NextRequest, NextResponse } from "next/server";
import { CMS_AUTH_COOKIE, isValidCmsCookie } from "@/lib/cms-auth";

const WINDOW_MS = 60 * 1000;
const requestStore = new Map<string, { count: number; resetAt: number }>();

const BOT_USER_AGENTS = [
  /python-requests/i,
  /curl\//i,
  /wget\//i,
  /sqlmap/i,
  /nikto/i,
  /masscan/i,
  /zgrab/i,
  /go-http-client/i,
];

const getIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
};

const shouldBlockUserAgent = (request: NextRequest) => {
  const userAgent = request.headers.get("user-agent") || "";
  return BOT_USER_AGENTS.some((pattern) => pattern.test(userAgent));
};

const pruneRequestStore = () => {
  const now = Date.now();

  requestStore.forEach((value, key) => {
    if (value.resetAt < now) {
      requestStore.delete(key);
    }
  });

  // Safety guard to avoid unbounded growth in long-running instances.
  if (requestStore.size > 10000) {
    const overflow = requestStore.size - 8000;
    let removed = 0;
    requestStore.forEach((_, key) => {
      if (removed >= overflow) return;
      requestStore.delete(key);
      removed += 1;
    });
  }
};

const isRateLimited = (key: string, maxRequests: number) => {
  const now = Date.now();
  const entry = requestStore.get(key);

  if (!entry || now > entry.resetAt) {
    requestStore.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > maxRequests;
};

const isAuthenticated = (request: NextRequest) => {
  const authCookie = request.cookies.get(CMS_AUTH_COOKIE)?.value;
  return isValidCmsCookie(authCookie);
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getIp(request);

  pruneRequestStore();

  if (shouldBlockUserAgent(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const isServerActionPost =
    request.method === "POST" && request.headers.has("next-action");

  // Protect server actions (contact / appointment forms) from brute-force spam.
  if (isServerActionPost) {
    if (isRateLimited(`server-action:${ip}:${pathname}`, 20)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  // CMS route protection
  if (pathname.startsWith("/cms")) {
    const authenticated = isAuthenticated(request);

    if (pathname === "/cms" && authenticated) {
      return NextResponse.redirect(new URL("/cms/projects", request.url));
    }

    if (pathname !== "/cms" && !authenticated) {
      return NextResponse.redirect(new URL("/cms", request.url));
    }

    if (isRateLimited(`cms:${ip}`, 120)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  // Protect write operations
  if (pathname.startsWith("/api/upload")) {
    if (!isAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (isRateLimited(`upload:${ip}`, 20)) {
      return NextResponse.json(
        { error: "Too many upload requests" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  if (pathname.startsWith("/api/projects")) {
    const isWriteMethod = request.method !== "GET";

    if (isWriteMethod && !isAuthenticated(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (
      isRateLimited(
        `projects:${ip}:${request.method}`,
        isWriteMethod ? 30 : 240,
      )
    ) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/", "/portfolio/:path*", "/cms/:path*", "/api/:path*"],
};
