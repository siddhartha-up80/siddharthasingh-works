import QuickLinks from "@/components/portfolio/QuickLinks";
import { AboutImageIntro } from "@/components/portfolioAbout/AboutImageIntro";
import AboutSetup from "@/components/portfolioAbout/AboutSetup";
import AboutSkills from "@/components/portfolioAbout/AboutSkills";
import { AboutTimeline } from "@/components/portfolioAbout/AboutTimeline";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siddhartha Singh | About Me | Next.js Developer | Inators Portfolio",
  description:
    "Graduated from vit (vellore institute of technology) in 2024, I am a Next.js full-stack web developer with a strong inclination towards challenging projects, designing and developing web applications. My primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

const Page = () => {
  return (
    <div className="space-y-5 w-full">
      <AboutImageIntro />
      <AboutSkills />
      <AboutTimeline />
      <AboutSetup />
      <QuickLinks
        forwardLink={`/portfolio/projects`}
        forwardLinkText="View my Projects"
      />
    </div>
  );
};

export default Page;
