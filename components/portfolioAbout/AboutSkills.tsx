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
import { LinkPreview } from "../ui/link-preview";

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
          <LinkPreview url="https://www.typescriptlang.org/">
            <Circle ref={div1Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandTypescript size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>

          <LinkPreview url="https://tailwindcss.com/">
            <Circle ref={div5Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandTailwind size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>
        </div>

        <div className="flex flex-row items-center justify-between">
          <LinkPreview url="https://www.framer.com/motion/">
            <Circle ref={div2Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandFramerMotion size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>

          <Circle ref={div4Ref} className="h-max w-max md:p-4 p-2">
            <TerminalSquareIcon
              size={35}
              className="text-red-500 hidden md:block"
            />
            <TerminalSquareIcon
              size={20}
              className="text-red-500 md:hidden block"
            />
            <span className="md:text-2xl font-semibold text-black md:ml-1">
              Tech Stack
            </span>
          </Circle>

          <LinkPreview url="https://react.dev/">
            <Circle ref={div6Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandReact size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>
        </div>

        <div className="flex flex-row items-center justify-between">
          <LinkPreview url="https://nextjs.org/">
            <Circle ref={div3Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandNextjs size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>

          <LinkPreview url="https://www.javascript.com/">
            <Circle ref={div7Ref} className="md:h-max md:w-max md:p-4 p-2">
              <IconBrandJavascript size={65} className="text-red-500" />
            </Circle>
          </LinkPreview>
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
