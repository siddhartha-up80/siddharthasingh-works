"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkPreview } from "../ui/link-preview";

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
  return (
    <main>
      <section className="text-white w-full py-10">
        <h1 className="text-center mb-10 text-black dark:text-white text-2xl md:text-4xl font-light tracking-tight">
          Work Samples
        </h1>

        <div className="flex flex-col gap-4 pb-20">
          {projects.map((project, i) => {
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project?.link}
                src={project?.img}
                title={project?.title}
                color={project?.color || "#000000"}
                description={project?.description}
              />
            );
          })}
        </div>
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
}

const COLOR_GRADIENT_CLASS_MAP: Record<string, string> = {
  "#ec4889": "bg-gradient-to-br from-[#ec4889] to-[#be185d]",
  "#1b0a02": "bg-gradient-to-br from-[#1b0a02] to-[#3b1f0f]",
  "#1a80da": "bg-gradient-to-br from-[#1a80da] to-[#0f4f87]",
  "#0e1929": "bg-gradient-to-br from-[#0e1929] to-[#1e293b]",
  "#e11d48": "bg-gradient-to-br from-[#e11d48] to-[#9f1239]",
  "#fa9614": "bg-gradient-to-br from-[#fa9614] to-[#c2410c]",
};

const FALLBACK_GRADIENT_CLASSES = [
  "bg-gradient-to-br from-slate-900 to-slate-700",
  "bg-gradient-to-br from-blue-900 to-slate-700",
  "bg-gradient-to-br from-rose-900 to-slate-800",
  "bg-gradient-to-br from-emerald-900 to-slate-800",
  "bg-gradient-to-br from-orange-900 to-slate-800",
];

const getCardGradientClass = (color: string, index: number): string => {
  const normalizedColor = color.trim().toLowerCase();
  const mappedGradient = COLOR_GRADIENT_CLASS_MAP[normalizedColor];

  if (mappedGradient) {
    return mappedGradient;
  }

  return FALLBACK_GRADIENT_CLASSES[index % FALLBACK_GRADIENT_CLASSES.length];
};

export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  url,
  color,
}) => {
  const gradientClass = getCardGradientClass(color, i);

  return (
    <div className="flex items-center justify-center my-8 md:my-12">
      <div
        className={cn(
          "flex flex-col relative md:h-auto h-max w-[90%] rounded-3xl md:p-12 p-6 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden",
        )}
      >
        {/* Background gradient overlay */}
        <div
          className={cn("absolute inset-0 opacity-90 -z-10", gradientClass)}
        />

        <div
          className={`flex w-full md:flex-row flex-col-reverse gap-6 md:gap-8 items-center`}
        >
          <div className={`md:w-[40%] flex flex-col w-full`}>
            <h2 className="text-xl md:text-3xl font-light tracking-tight leading-tight mb-1 text-white">
              {title.split(":")[0]}
            </h2>
            <p className="text-xs md:text-sm font-light text-white/80 mb-4">
              {title.includes(":") ? title.split(":")[1].trim() : ""}
            </p>

            <p className="text-xs md:text-sm font-light leading-relaxed text-white/90">
              {description}
            </p>

            <span className="flex items-center gap-2 mt-6">
              <LinkPreview url={url} className="no-underline group">
                <button
                  className={cn(
                    "relative flex gap-2 items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-light bg-white/95 text-black backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
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
            className={`relative md:w-[60%] w-[100%] rounded-xl overflow-hidden shadow-xl ring-1 ring-white/20 flex items-center justify-center bg-white/5 p-2 md:p-6`}
          >
            <Image
              src={src}
              alt="image"
              width={1200}
              height={800}
              className="object-cover w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
