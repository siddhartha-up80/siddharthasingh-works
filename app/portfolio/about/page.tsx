import QuickLinks from "@/components/portfolio/QuickLinks";
import { AboutImageIntro } from "@/components/portfolioAbout/AboutImageIntro";
import AboutSkills from "@/components/portfolioAbout/AboutSkills";
import { AboutTimeline } from "@/components/portfolioAbout/AboutTimeline";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-5 w-full">
      <AboutImageIntro />
      <AboutSkills />
      <AboutTimeline />
      <QuickLinks
        forwardLink={`/portfolio/projects`}
        forwardLinkText="View my Projects"
      />
    </div>
  );
};

export default Page;
