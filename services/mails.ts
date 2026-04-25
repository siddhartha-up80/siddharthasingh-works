"use server";
import { AddMail } from "@/database/mailsDatabse";
import { headers } from "next/headers";
import nodemailer from "nodemailer";

const MAIL_WINDOW_MS = 5 * 60 * 1000;
const MAX_MAILS_PER_IP_WINDOW = 3;
const MAX_MAILS_PER_SENDER_WINDOW = 3;
const MAX_EMAIL_LENGTH = 254;
const mailRateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>();

const pruneRateLimitStore = () => {
  const now = Date.now();

  mailRateLimitStore.forEach((entry, key) => {
    if (entry.resetAt < now) {
      mailRateLimitStore.delete(key);
    }
  });

  if (mailRateLimitStore.size > 5000) {
    let removed = 0;
    const overflow = mailRateLimitStore.size - 4000;
    mailRateLimitStore.forEach((_, key) => {
      if (removed >= overflow) return;
      mailRateLimitStore.delete(key);
      removed += 1;
    });
  }
};

const getClientIp = (headerStore: Headers) => {
  const forwardedFor = headerStore.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return headerStore.get("x-real-ip") || "unknown";
};

const isTrustedRequestOrigin = (headerStore: Headers) => {
  const origin = headerStore.get("origin");
  if (!origin) return true;

  const host = headerStore.get("x-forwarded-host") || headerStore.get("host");
  if (!host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

const hitRateLimit = (key: string, maxRequests: number) => {
  const now = Date.now();
  const entry = mailRateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    mailRateLimitStore.set(key, { count: 1, resetAt: now + MAIL_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > maxRequests;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sanitizeEmail = (email: string) => email.trim().toLowerCase();

const sanitizeBody = (body: string) => body.replace(/\u0000/g, "").trim();

const hasHeaderInjectionChars = (value: string) => /[\r\n]/.test(value);

async function sendEmail({
  sentByEmail,
  body,
}: {
  sentByEmail: string;
  body: string;
}) {
  const headerStore = await headers();

  if (!isTrustedRequestOrigin(headerStore)) {
    return { data: null, error: "Forbidden origin" };
  }

  pruneRateLimitStore();

  const normalizedEmail = sanitizeEmail(sentByEmail || "");
  if (
    !isValidEmail(normalizedEmail) ||
    normalizedEmail.length > MAX_EMAIL_LENGTH ||
    hasHeaderInjectionChars(normalizedEmail)
  ) {
    return { data: null, error: "Invalid email address" };
  }

  const trimmedBody = sanitizeBody(body || "");
  if (trimmedBody.length < 10 || trimmedBody.length > 2000) {
    return { data: null, error: "Message length is invalid" };
  }

  const ip = getClientIp(headerStore);
  const exceededIpLimit = hitRateLimit(
    `mail:ip:${ip}`,
    MAX_MAILS_PER_IP_WINDOW,
  );
  const exceededSenderLimit = hitRateLimit(
    `mail:sender:${normalizedEmail}`,
    MAX_MAILS_PER_SENDER_WINDOW,
  );

  if (exceededIpLimit || exceededSenderLimit) {
    return { data: null, error: "Too many requests. Please try again later." };
  }

  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASSWORD ||
    !process.env.EMAIL_PERSONAL
  ) {
    return { data: null, error: "Email service is not configured" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      bcc: process.env.EMAIL_PERSONAL,
      subject: "Contact form message from: " + normalizedEmail,
      text: trimmedBody,
      replyTo: normalizedEmail,
    };

    await transporter.sendMail(mailOptions);

    try {
      await AddMail({
        subject: "Contact form message from: " + normalizedEmail,
        content: trimmedBody,
        sentBy: normalizedEmail,
      });
    } catch (error) {
      console.log(error);
    }

    return { data: "Email sent", error: null };
  } catch {
    return {
      data: null,
      error: "Failed to send message. Please try again later.",
    };
  }
}

export { sendEmail };
