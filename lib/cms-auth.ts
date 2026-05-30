export const CMS_AUTH_COOKIE = "cms_auth";
export const CMS_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 8;

const resolveCmsPassword = () =>
  process.env.CMS_PASSWORD || process.env.NEXT_PUBLIC_CMS_PASSWORD || "";

const resolveCmsAuthSecret = () =>
  process.env.CMS_AUTH_SECRET || resolveCmsPassword();

const textEncoder = new TextEncoder();

const timingSafeStringEqual = (a: string, b: string) => {
  let mismatch = a.length === b.length ? 0 : 1;
  const maxLength = Math.max(a.length, b.length);

  for (let index = 0; index < maxLength; index += 1) {
    const aCode = index < a.length ? a.charCodeAt(index) : 0;
    const bCode = index < b.length ? b.charCodeAt(index) : 0;
    mismatch |= aCode ^ bCode;
  }

  return mismatch === 0;
};

const toHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const signPayload = async (payload: string, secret: string) => {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    textEncoder.encode(payload),
  );

  return toHex(signature);
};

export const getCmsCookieValue = async () => {
  const password = resolveCmsPassword();
  const secret = resolveCmsAuthSecret();

  if (!password || !secret) return "";

  const issuedAt = Math.floor(Date.now() / 1000).toString();
  const signature = await signPayload(issuedAt, secret);

  return `${issuedAt}.${signature}`;
};

export const isValidCmsPassword = (password: string) => {
  const expectedPassword = resolveCmsPassword();
  const providedPassword = (password || "").trim();

  if (!expectedPassword || !providedPassword) return false;

  return timingSafeStringEqual(providedPassword, expectedPassword);
};

export const isValidCmsCookie = async (cookieValue?: string) => {
  if (!cookieValue) return false;

  const secret = resolveCmsAuthSecret();
  if (!secret) return false;

  const [issuedAt, signature] = cookieValue.split(".");
  if (!issuedAt || !signature) return false;

  const issuedAtSeconds = Number.parseInt(issuedAt, 10);
  if (!Number.isFinite(issuedAtSeconds)) return false;

  const nowSeconds = Math.floor(Date.now() / 1000);
  if (
    issuedAtSeconds > nowSeconds + 60 ||
    nowSeconds - issuedAtSeconds > CMS_COOKIE_MAX_AGE_SECONDS
  ) {
    return false;
  }

  const expectedSignature = await signPayload(issuedAt, secret);
  return timingSafeStringEqual(signature, expectedSignature);
};
