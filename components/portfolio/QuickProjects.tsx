"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkPreview } from "../ui/link-preview";
import { getQuickProjects } from "@/services/projects";

interface QuickProjectsProps {
  projects: Array<{
    _id: string;
    title: string;
    description: string;
    img: string;
    color?: string;
    link: string;
  }>;
}

export default function index({ projects }: QuickProjectsProps): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main className="" ref={container}>
      <section className="text-white w-full">
        <h1 className="text-center text-black dark:text-white relative top-10 text-2xl md:text-5xl font-light tracking-tight">
          Quick Projects
        </h1>

        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project?.link}
              src={project?.img}
              title={project?.title}
              color={project?.color || "#000000"}
              description={project?.description}
              progress={scrollYProgress}
              range={[i * 0.14, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] md:h-[70%] h-max w-[90%] rounded-3xl md:p-12 p-6 origin-center backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden`}
      >
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 opacity-90 -z-10"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
          }}
        />

        {/* Eyebrow text */}
        <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-white/70 mb-3">
          Project {String(i + 1).padStart(2, "0")}
        </span>

        <h2 className="text-xl md:text-3xl font-light tracking-tight leading-tight mb-1 text-white">
          {title.split(":")[0]}
        </h2>
        <p className="text-xs md:text-sm font-light text-white/80 mb-6">
          {title.includes(":") ? title.split(":")[1].trim() : ""}
        </p>

        <div
          className={`flex h-full md:flex-row flex-col-reverse gap-6 md:gap-8`}
        >
          <div className={`md:w-[40%] flex flex-col`}>
            <p className="text-xs md:text-sm font-light leading-relaxed text-white/90">
              {description}
            </p>

            <span className="flex items-center gap-2 mt-6">
              <LinkPreview url={url} className="no-underline group">
                <button
                  className={cn(
                    "relative flex gap-2 items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-light bg-white/95 text-black backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
                  )}
                  type="button"
                >
                  Visit Project
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </LinkPreview>
            </span>
          </div>

          <div
            className={`relative md:w-[60%] w-[100%] rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 flex items-center justify-center bg-white/5 p-2 md:p-6 lg:bottom-20`}
          >
            <Image
              src={src}
              alt="image"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
