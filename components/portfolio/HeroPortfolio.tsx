"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, MoveRight, Minus, Square, X } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  img: string;
  color?: string;
  link: string;
}

const HybridCard = ({
  title,
  imgUrl,
  link,
}: {
  title: string;
  imgUrl: string;
  link: string;
}) => (
  <Link
    href={link || "#"}
    target="_blank"
    className="flex-shrink-0 w-[300px] h-44 rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-md border-2 border-white/20 hover:border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col mx-4 group cursor-pointer p-1 transition-colors duration-300"
  >
    {/* Body */}
    <div className="flex-1 relative w-full h-full overflow-hidden bg-black/40 rounded-lg">
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/50 text-sm">No Image</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  </Link>
);

const HeroPortfolio = ({ projects = [] }: { projects?: Project[] }) => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-start justify-start min-h-[85vh] md:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/windowsxp.jpg')" }}
    >
      {/* Light gradient overlay to ensure text is readable while keeping the XP vibrancy */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent pointer-events-none"></div>

      <section className="container relative z-10 flex flex-col justify-start items-start pt-32 md:pt-48 mx-auto px-6 md:px-12 lg:px-24 h-full">
        <motion.div
          className="flex flex-col items-start justify-center text-left max-w-2xl w-full"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-md">
            Siddhartha Singh
          </h1>

          {/* Role / Description */}
          <div className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl font-light mb-8 h-12 flex items-center justify-start font-sans tracking-wide drop-shadow-sm text-left">
            <TextGenerateEffect
              words="Prompt Crafter & Context Builder | Crafting Engaging Interfaces"
              filter={false}
              duration={1.5}
              className="!text-white font-light text-left"
            />
          </div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link href="/portfolio/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group relative inline-flex h-11 md:h-12 items-center justify-center gap-2.5 rounded-full px-6 bg-white hover:bg-white/95 text-blue-600 font-medium transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-900/20 backdrop-blur-sm border border-white/60">
                <span>Contact Me</span>
                <MoveRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Marquee Section */}
        {projects && projects.length > 0 && (
          <motion.div
            className="w-full md:w-[95%] lg:w-[98%] self-center mt-14 mb-16 overflow-hidden relative"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* We duplicate the array to create a seamless infinite scrolling loop */}
            <div
              className="flex animate-infinite-scroll hover:[animation-play-state:paused] w-max"
              style={{ animationDuration: "90s" }}
            >
              {[...projects, ...projects, ...projects].map((project, idx) => (
                <HybridCard
                  key={`${project._id}-${idx}`}
                  title={project.title}
                  imgUrl={project.img}
                  link={project.link}
                />
              ))}
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default HeroPortfolio;
