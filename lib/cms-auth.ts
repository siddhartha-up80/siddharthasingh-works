export const CMS_AUTH_COOKIE = "cms_auth";

const resolveCmsPassword = () =>
  process.env.CMS_PASSWORD || process.env.NEXT_PUBLIC_CMS_PASSWORD || "";

export const getCmsCookieValue = () => {
  const password = resolveCmsPassword();
  if (!password) return "";
  return password;
};

export const isValidCmsPassword = (password: string) => {
  const expectedPassword = resolveCmsPassword();
  if (!expectedPassword || !password) return false;
  return password === expectedPassword;
};

export const isValidCmsCookie = (cookieValue?: string) => {
  if (!cookieValue) return false;
  const expectedCookieValue = getCmsCookieValue();
  if (!expectedCookieValue) return false;
  return cookieValue === expectedCookieValue;
};
