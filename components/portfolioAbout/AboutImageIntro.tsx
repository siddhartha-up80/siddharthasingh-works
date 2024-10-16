"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

// Variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2, // delay between elements
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, type: "spring", bounce: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: { yoyo: 5 }, // adds a bounce effect
  },
};

export function AboutImageIntro() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-full md:h-[60vh] relative w-full overflow-hidden bg-gradient-to-b from-purple-800 via-pink-500 to-red-400 flex flex-col items-center justify-center"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <motion.div
        className="flex items-center gap-10 max-w-4xl mx-auto justify-between w-full flex-col md:p-0 p-6 md:flex-row"
        variants={containerVariants}
      >
        <motion.div variants={textVariants}>
          <motion.h1
            className={cn(
              "md:text-4xl font-semibold text-xl text-white relative z-20"
            )}
          >
            <TextGenerateEffect
              duration={2}
              filter={false}
              className="md:text-4xl font-semibold text-xl text-white relative z-20"
              words={`Turning ideas into functional and visually appealing web apps`}
            />
          </motion.h1>
          <motion.p
            className="mt-6 font-medium text-neutral-300 relative z-20 text-start"
            variants={textVariants}
          >
            With a keen interest in development technologies, I have gained
            practical experience in designing and building web apps. I
            specialize in developing web applications using modern technologies
            such as React, Next.js, Tailwind CSS, and many more.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative z-20"
          variants={imageVariants}
          whileHover="hover"
        >
          <Image
            src={`/images/siddharthaconvocation.jpg`}
            alt="siddhartha singh convocation"
            width={800}
            height={800}
            className="rounded-md h-full w-full"
          />
          <div className="text-white text-xs text-center mt-1">
            Image from VIT Bhopal convocation 2024
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
