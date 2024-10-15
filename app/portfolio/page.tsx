import Footer from "@/components/main/footer";
import About from "@/components/portfolio/HeroAbout";
import HeroPortfolio from "@/components/portfolio/HeroPortfolio";
import QuickLinks from "@/components/portfolio/QuickLinks";
import QuickProjects from "@/components/portfolio/QuickProjects";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-5">
      <HeroPortfolio />
      <About />
      <QuickProjects />
      <QuickLinks />
    </div>
  );
};

export default Page;
