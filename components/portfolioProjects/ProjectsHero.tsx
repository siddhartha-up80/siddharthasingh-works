"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FlipWords } from "../ui/flip-words";

const ProjectsHero = () => {
  const words = [
    "Next.js: Because who needs sleep when you have server-side rendering?",
    "React: Turning spaghetti code into lasagna since 2013",
    "TypeScript: Making JavaScript developers feel like they have superpowers",
    "JavaScript: The duct tape of the internet",
    "Framer Motion: For when your website needs to dance",
    "Vercel: Deploying so fast, you'll think it's magic",
  ];

  return (
    <div>
      <div className="h-[40vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-3xl">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-white/70 mb-4 relative z-20">
          Portfolio
        </span>
        <h1
          className={cn(
            "text-3xl md:text-5xl font-light tracking-tight text-white relative z-20"
          )}
        >
          Projects Showcase
        </h1>
        <div className="text-center mt-2 text-sm text-neutral-400 relative z-20 font-light">
          {/* <FlipWords words={words} /> <br /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
