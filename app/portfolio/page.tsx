import Footer from "@/components/main/footer";
import About from "@/components/portfolio/HeroAbout";
import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import QuickLinks from "@/components/portfolio/QuickLinks";
import QuickProjects from "@/components/portfolio/QuickProjects";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Siddhartha Singh | Work Portfolio | Next.js Developer | Inators Portfolio",
  description:
    "Graduated from vit (vellore institute of technology) in 2024, I am a Next.js full-stack web developer with a strong inclination towards challenging projects, designing and developing web applications. My primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

const Page = () => {
  return (
    <div className="space-y-5">
      <HeroPortfolio />
      <About />
      <QuickProjects />
      <QuickLinks
        forwardLink={`/portfolio/about`}
        forwardLinkText="View More About Me"
      />
    </div>
  );
};

export default Page;
