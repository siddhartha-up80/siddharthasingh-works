import QuickLinks from "@/components/portfolio/QuickLinks";
import AllProjects from "@/components/portfolioProjects/AllProjects";
import ProjectsHero from "@/components/portfolioProjects/ProjectsHero";
import React from "react";

import type { Metadata } from "next";
import { getAllProjects } from "@/services/projects";

export const metadata: Metadata = {
  title:
    "Siddhartha Singh | Projects | Next.js Developer | Full Stack Developer | Inators Portfolio",
  description:
    "Check out all the projects by Siddhartha Singh. I am a Next.js full-stack web developer with a strong inclination towards challenging projects, designing and developing web applications. My primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

const Page = async () => {
  const allProjects = await getAllProjects();

  return (
    <div className="space-y-10">
      <ProjectsHero />
      <AllProjects projects={allProjects} />

      <QuickLinks
        forwardLink="/portfolio/contact"
        forwardLinkText="Contact Me"
      />
    </div>
  );
};

export default Page;
