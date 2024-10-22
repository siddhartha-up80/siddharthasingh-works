"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkPreview } from "../ui/link-preview";

const projects = [
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
  {
    title: "Inators UI 2.0 (Upcoming): Framer-motion based Animated Next.js Components Library",
    description:
      "Inators UI 2.0 is an upcoming version of the Inators UI library, featuring modern animated components built with Framer Motion for enhanced interactivity and user experience.",
    link: "/images/inatorsui.png",
    color: "#0E1929",
    projectLink: "https://inatorsui.vercel.app",
  },
];

export default function index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="" ref={container}>
        <section className="text-white w-full">
          <h1 className="text-center text-black dark:text-white relative top-10 text-2xl md:text-3xl font-medium uppercase">
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
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] md:h-[70%] h-max w-[90%] rounded-md md:p-10 p-4 origin-top`}
      >
        <h2 className="text-2xl text-center font-semibold uppercase">
          {title}
        </h2>
        <div className={`flex h-full md:flex-row flex-col-reverse mt-5 gap-10`}>
          <div
            className={`md:w-[40%] relative md:top-[10%] text-justify md:text-left`}
          >
            <p className="text-base md:text-lg">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <LinkPreview
                url={url}
                className="no-underline hover:underline hover:underline-offset-4 cursor-pointer mt-4"
              >
                <button
                  className={cn(
                    "relative flex gap-1 items-center overflow-hidden rounded-sm  px-4 py-2 text-sm  transition-colors duration-700 ease-out before:absolute before:-left-10 before:top-0 before:z-[-1] before:h-full before:w-[0%] before:skew-x-[45deg]  before:transition-all before:delay-75 before:duration-700 before:content-[''] hover:before:w-[150%] focus:outline-none  focus:ring-offset-1 focus:ring-offset-white focus:before:w-[150%] focus-visible:ring-2  dark:before:bg-black dark:focus:ring-blackdark:focus:ring-offset-black hover:text-white text-black bg-white hover:bg-transparent",
                    "before:bg-black focus:ring-black"
                  )}
                  type="button"
                >
                  Visit {title} <ArrowRight className="mt-1 ml-1" />
                </button>
              </LinkPreview>
            </span>
          </div>

          <div
            className={`relative md:w-[80%] w-[100%] md:aspect-auto aspect-video md:h-full h-max rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt="image"
                className="object-cover md:aspect-auto aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
