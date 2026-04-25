import { NextRequest, NextResponse } from "next/server";
import { CMS_AUTH_COOKIE, isValidCmsCookie } from "@/lib/cms-auth";

const WINDOW_MS = 60 * 1000;
const MAX_API_BODY_BYTES = 1024 * 1024;
const WRITE_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);
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

const isTrustedOrigin = (request: NextRequest) => {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).host === request.nextUrl.host;
  } catch {
    return false;
  }
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

const isAuthenticated = async (request: NextRequest) => {
  const authCookie = request.cookies.get(CMS_AUTH_COOKIE)?.value;
  return isValidCmsCookie(authCookie);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getIp(request);

  pruneRequestStore();

  if (shouldBlockUserAgent(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (pathname.startsWith("/api/")) {
    const isWriteMethod = WRITE_METHODS.has(request.method);

    if (isWriteMethod && !isTrustedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden origin" }, { status: 403 });
    }

    const contentLength = request.headers.get("content-length");
    if (contentLength) {
      const bodySize = Number.parseInt(contentLength, 10);
      if (Number.isFinite(bodySize) && bodySize > MAX_API_BODY_BYTES) {
        return NextResponse.json(
          { error: "Payload too large" },
          { status: 413 },
        );
      }
    }

    if (isRateLimited(`api:${ip}:${request.method}`, 300)) {
      return NextResponse.json(
        { error: "Too many API requests" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  if (pathname === "/api/cms/login") {
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 },
      );
    }

    if (isRateLimited(`cms-login:${ip}`, 8)) {
      return NextResponse.json(
        { error: "Too many login attempts" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }
  }

  if (pathname === "/api/cms/logout" && request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  // CMS route protection
  if (pathname.startsWith("/cms")) {
    const authenticated = await isAuthenticated(request);

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
    if (!(await isAuthenticated(request))) {
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
    const isWriteMethod = WRITE_METHODS.has(request.method);

    if (isWriteMethod && !(await isAuthenticated(request))) {
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
  const scriptSrc =
    process.env.NODE_ENV === "production"
      ? "script-src 'self' 'unsafe-inline'"
      : "script-src 'self' 'unsafe-inline' 'unsafe-eval'";

  const contentSecurityPolicy = [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    scriptSrc,
    "connect-src 'self' https:",
  ].join("; ");

  response.headers.set("Content-Security-Policy", contentSecurityPolicy);
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }

  return response;
}

export const config = {
  matcher: ["/cms/:path*", "/api/:path*"],
};
