import About from "@/components/portfolio/HeroAbout";
import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import QuickLinks from "@/components/portfolio/QuickLinks";
import QuickProjects from "@/components/portfolio/QuickProjects";
import React from "react";

import type { Metadata } from "next";
import AboutSkills from "@/components/portfolioAbout/AboutSkills";
import { AboutTimeline } from "@/components/portfolioAbout/AboutTimeline";
import AboutSetup from "@/components/portfolioAbout/AboutSetup";
import AllProjects from "@/components/portfolioProjects/AllProjects";
import Contact from "@/components/portfolioContact/Contact";

export const metadata: Metadata = {
  title:
    "Siddhartha Singh | Work Portfolio | Next.js Developer | Inators Portfolio",
  description:
    "Siddhartha Singh Graduated from vit (vellore institute of technology) in 2024, I am a Next.js web developer with a strong inclination towards challenging projects, designing and developing web applications. My primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

const Page = () => {
  return (
    <div className="space-y-5">
      <HeroPortfolio />
      <About />
      <QuickProjects />
      <AboutSkills />
      <AboutTimeline />
      <AboutSetup />
      <AllProjects />
      <Contact />
      <QuickLinks
        forwardLink={`/portfolio/about`}
        forwardLinkText="View More About Me"
      />
    </div>
  );
};

export default Page;
