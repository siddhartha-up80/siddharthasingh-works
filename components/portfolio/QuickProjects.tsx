"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkPreview } from "../ui/link-preview";

const projects = [
  {
    title:
      "Designator: AI-Powered Product Photography & Marketing Content Platform",
    description:
      "Transform product images into professional model photos, ads, and marketing content in minutes with AI. Features virtual fashion modeling, product isolation & enhancement, and studio-quality photography without expensive photoshoots. Perfect for e-commerce, fashion brands, and content creators.",
    link: "/images/designator.png",
    color: "#EC4889",
    projectLink: "https://designator.siddharthasingh.co.in",
  },
  {
    title: "LOOV: AI-driven platform with customizable digital companions",
    description:
      "A highly scalable multi-user Next.js 14 application to create and interact with AI companions, incorporating OpenAI and  LangChain for dynamic, context-aware conversations. ",
    link: "/images/loov.png",
    color: "#1B0A02",
    projectLink: "https://loov.vercel.app",
  },
  {
    title: "VIRALTWEET: AI-Enhanced Twitter Content Management Platform",
    description:
      "A Next.js 15 SaaS product with automated tweet scheduling, and AI-powered content generation using OpenAI API and Twitter OAuth integration. ",
    link: "/images/viraltweet.png",
    color: "#1A80DA",
    projectLink: "https://viraltweet.co",
  },

  {
    title: "Inators UI: Next.js Components Library for Developers",
    description:
      "Inators UI is a frontend components library for developers and designers to make creating nextjs client side as well as server side interfaces easier. Based on Tailwind and Shadcn/ui for just copy and use, with more than 150+ components to choose from.",
    link: "/images/inatorsui.png",
    color: "#0E1929",
    projectLink: "https://inatorsui.vercel.app",
  },
  {
    title: "Next Inator: Custom Data AI Chat Web-App",
    description:
      "Next Inator is a web app built in Next.js 14, it is an open-ai based custom data based AI chat web-app, powered by open-ai api and pinecone vector database. Users can add their own data, and chat with the data, to get personalized responses. It is a great tool for content creators, marketers, students, and anyone who wants to get personalized responses from ai chatbots.",
    link: "/images/nextinator.png",
    color: "#E11D48",
    projectLink: "https://nextinator.vercel.app",
  },
  {
    title: "Ethnic Inator: Indian Ethnic Wear E-Commerce Web-App",
    description:
      "A feature-rich indian ethnic wear e-commerce website using Next.js 14, featuring functionalities like Add to Cart, Filtering, and Content Management System and payment system using stripe. With next.js server-side components from Next.js 14 app router, ensuring an optimal user experience and strong SEO performance.",
    link: "/images/ethnicinator.png",
    color: "#FA9614",
    projectLink: "https://ethnicinator.vercel.app",
  },
  {
    title: "Optiflow Inator: Code Optimization Community Web-App",
    description:
      "Optiflowinator is a Multiuser Next.js 14 app-directory based application, incorporating the Open-AI API to create, optimize and share code posts within a community feed. With a secure Google authentication using Next Auth, providing multiple login options.",
    link: "/images/optiflowinator.png",
    color: "#15A34A",
    projectLink: "https://optiflowinator.vercel.app",
  },
];

export default function index(): JSX.Element {
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
              url={project?.projectLink}
              src={project?.link}
              title={project?.title}
              color={project?.color}
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
