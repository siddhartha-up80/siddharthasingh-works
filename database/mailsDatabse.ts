"use server";

import mails, { MailsT } from "@/models/mails";
import dbConnect from "./dbconnect";

export type MailResponse = {
  data: MailsT | null;
  error: string | null;
};

async function AddMail(mail: Partial<MailsT>): Promise<MailResponse> {
  try {
    await dbConnect();
    const newMail = await mails.create(mail);
    return { data: newMail, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
}

export { AddMail };
