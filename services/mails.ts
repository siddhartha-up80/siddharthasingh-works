"use server";
import { AddMail } from "@/database/mailsDatabse";
import { headers } from "next/headers";
import nodemailer from "nodemailer";

const MAIL_WINDOW_MS = 5 * 60 * 1000;
const MAX_MAILS_PER_WINDOW = 3;
const mailRateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>();

const isRateLimited = async () => {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const key = `mail:${ip}`;
  const now = Date.now();
  const record = mailRateLimitStore.get(key);

  if (!record || now > record.resetAt) {
    mailRateLimitStore.set(key, { count: 1, resetAt: now + MAIL_WINDOW_MS });
    return false;
  }

  record.count += 1;
  return record.count > MAX_MAILS_PER_WINDOW;
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

async function sendEmail({
  sentByEmail,
  body,
}: {
  sentByEmail: string;
  body: string;
}) {
  if (!isValidEmail(sentByEmail)) {
    return { data: null, error: "Invalid email address" };
  }

  const trimmedBody = body?.trim() || "";
  if (trimmedBody.length < 10 || trimmedBody.length > 2000) {
    return { data: null, error: "Message length is invalid" };
  }

  if (await isRateLimited()) {
    return { data: null, error: "Too many requests. Please try again later." };
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
      subject: "Contact form message from" + sentByEmail,
      text: trimmedBody,
      replyTo: process.env.EMAIL_USER,
    };

    await transporter.sendMail(mailOptions);

    try {
      await AddMail({
        subject: "Contact form message from: " + sentByEmail,
        content: trimmedBody,
        sentBy: sentByEmail,
      });
    } catch (error) {
      console.log(error);
    }

    return { data: "Email sent", error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

export { sendEmail };
