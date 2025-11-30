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
      <section className="container flex flex-col-reverse h-screen justify-center mx-auto lg:flex-row lg:justify-between">
        <motion.div
          className="flex flex-col justify-center text-center rounded-sm lg:text-left lg:mt-14 mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-3xl font-semibold !leading-snug sm:text-5xl">
            Siddhartha Singh
            <br />
            <span className="">
              <TextGenerateEffect
                words={`Next.js Enthusiast, Crafting Engaging Interfaces`}
                filter={false}
                duration={3}
                className=""
              />
            </span>
          </div>
          <motion.p
            className="mt-6 mb-8 text-lg sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Scroll down and check out my work, or contact me
          </motion.p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/portfolio/contact">
              <motion.button
                className="group relative inline-flex h-[calc(48px+8px)] min-w-[200px] bg-gradient-to-r dark:from-[#410707] dark:to-[#571414] from-[#ffc0c0] to-[#ff4c4c] border-2 border-[#e26565] items-center justify-center rounded-full py-1 pl-6 pr-14 font-medium text-neutral-50"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              >
                <span className="z-10 pr-2">Contact Me</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#e75050] bg-[#a02b2b] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
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
