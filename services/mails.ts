"use server";
import { AddMail } from "@/database/mailsDatabse";
import nodemailer from "nodemailer";

async function sendEmail({
  sentByEmail,
  body,
}: {
  sentByEmail: string;
  body: string;
}) {
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
      text: body,
      replyTo: process.env.EMAIL_USER,
    };

    await transporter.sendMail(mailOptions);

    try {
      await AddMail({
        subject: "Contact form message from: " + sentByEmail,
        content: body.toString() || "",
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
