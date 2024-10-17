import QuickLinks from "@/components/portfolio/QuickLinks";
import AllProjects from "@/components/portfolioProjects/AllProjects";
import ProjectsHero from "@/components/portfolioProjects/ProjectsHero";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-10">
      <ProjectsHero />
      <AllProjects />

      <QuickLinks
        forwardLink="/portfolio/contact"
        forwardLinkText="Contact Me"
      />
    </div>
  );
};

export default Page;
