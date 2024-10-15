import About from "@/components/portfolio/HeroAbout";
import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import QuickProjects from "@/components/portfolio/QuickProjects";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-5">
      <HeroPortfolio />
      <About />
      <QuickProjects />
    </div>
  );
};

export default Page;
