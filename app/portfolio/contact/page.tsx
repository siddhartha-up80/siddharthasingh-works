import Contact from "@/components/portfolioContact/Contact";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Siddhartha Singh | Contact Me | Next.js Developer | Inators Portfolio",
  description:
    "Contact Siddhartha Singh for any queries or collaborations. I am a Next.js full-stack web developer with a strong inclination towards challenging projects, designing and developing web applications. My primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

const Page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default Page;
