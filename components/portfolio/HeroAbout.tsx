"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.4, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  return (
    <div>
      <>
        <section
          ref={ref}
          className="flex justify-between items-center flex-col md:flex-row md:max-w-[90vw] mx-auto overflow-hidden"
        >
          <motion.div
            className="min-w-[45vw] flex flex-col font-light gap-8 p-10 flex-wrap text-lg md:text-xl leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-[10px] md:text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
              About Me
            </span>

            <motion.p variants={containerVariants} className="font-light">
              A Next.js developer, with a strong inclination towards challenging
              projects, designing and developing web applications. My Primary
              tech stack includes{" "}
              <span className="text-red-900 dark:text-red-200 font-normal">
                Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.
              </span>
            </motion.p>

            <motion.p variants={containerVariants} className="font-light">
              Graduated from
              <span className="text-red-900 dark:text-red-200 mx-1 font-normal">
                Vellore Institute of Technology, Bhopal
              </span>
              with Bachelor of Technology in ECE.
            </motion.p>

            {/* <Link href={`/portfolio/about`} className="w-full">
              <motion.button
                className="group relative inline-flex h-12 px-8 items-center justify-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-light text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              >
                <span>View More About Me</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link> */}
          </motion.div>
        </section>
      </>
    </div>
  );
};

export default About;
