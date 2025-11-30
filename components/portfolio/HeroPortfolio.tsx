"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const HeroPortfolio = () => {
  return (
    <div>
      <section className="container flex flex-col-reverse md:h-screen h-[85vh] justify-center mx-auto lg:flex-row lg:justify-between ">
        <motion.div
          className="flex flex-col justify-center text-center rounded-sm lg:text-left lg:mt-14 mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
            Full Stack Developer
          </span>
          <div className="text-4xl font-light !leading-tight sm:text-6xl tracking-tight">
            Siddhartha Singh
            <br />
            <span className="text-2xl sm:text-3xl font-extralight text-gray-600 dark:text-gray-300">
              <TextGenerateEffect
                words={`Next.js Enthusiast, Crafting Engaging Interfaces`}
                filter={false}
                duration={3}
                className="font-extralight"
              />
            </span>
          </div>
          <motion.p
            className="mt-8 mb-10 text-sm sm:text-base font-light text-gray-600 dark:text-gray-400 leading-relaxed sm:mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Scroll down and check out my work, or contact me
          </motion.p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/portfolio/contact">
              <motion.button
                className="group relative inline-flex h-12 px-8 items-center justify-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-light text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:mt-8 h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            height={1000}
            width={1000}
            src="/images/siddharthacircle.png"
            alt="Portfolio Image"
            className="object-contain h-[50vh] "
          />
        </motion.div>
      </section>
    </div>
  );
};

export default HeroPortfolio;
