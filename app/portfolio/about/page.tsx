import QuickLinks from "@/components/portfolio/QuickLinks";
import { AboutImageIntro } from "@/components/portfolioAbout/AboutImageIntro";
import AboutSetup from "@/components/portfolioAbout/AboutSetup";
import AboutSkills from "@/components/portfolioAbout/AboutSkills";
import { AboutTimeline } from "@/components/portfolioAbout/AboutTimeline";
import React from "react";

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
