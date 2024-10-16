"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam, Circle } from "../ui/beam";
import {
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { TerminalIcon, TerminalSquareIcon } from "lucide-react";

export default function AboutSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-6xl mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="h-max w-max p-4">
            <IconBrandTypescript size={90} className="text-red-500" />
          </Circle>
          <Circle ref={div5Ref} className="h-max w-max  p-4">
            <IconBrandTailwind size={90} className="text-red-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} className="h-max w-max  p-4">
            <IconBrandFramerMotion size={90} className="text-red-500" />
          </Circle>
          <Circle ref={div4Ref} className="h-max w-max p-4">
            <TerminalSquareIcon size={50} className="text-red-500" />
            <span className="text-2xl font-semibold text-black">
              My Latest Skills
            </span>
          </Circle>
          <Circle ref={div6Ref} className="h-max w-max  p-4">
            <IconBrandReact size={90} className="text-red-500" />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="h-max w-max  p-4">
            <IconBrandNextjs size={90} className="text-red-500" />
          </Circle>
          <Circle ref={div7Ref} className="h-max w-max  p-4">
            <IconBrandJavascript size={90} className="text-red-500" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#ffba00"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
        dotted
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
        dotted
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
        dotted
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
        dotted
        gradientStartColor="#48b0d9"
        gradientStopColor="#67aeff"
      />
    </div>
  );
}
