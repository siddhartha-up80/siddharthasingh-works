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
          className="flex justify-between items-center min-h-[90vh] flex-col md:flex-row md:max-w-[80vw] mx-auto overflow-hidden"
        >
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src="/images/welcome.jpeg"
              alt="siddhartha"
              className="md:max-w-[30vw] p-10 object-cover rounded-lg"
              height={500}
              width={500}
            />
          </motion.div>

          <motion.div
            className="min-w-[45vw] flex flex-col gap-10 p-10 flex-wrap text-2xl leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={containerVariants}>
              A Next.js developer, with a strong inclination towards challenging
              projects, designing and developing web applications. My Primary
              tech stack includes{" "}
              <span className="text-red-900 dark:text-red-200">
                Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.
              </span>
            </motion.p>

            <motion.p variants={containerVariants}>
              Graduated from
              <span className="text-red-900 dark:text-red-200 mx-1">
                Vellore Institute of Technology, Bhopal
              </span>
              with Bachelor of Technology in ECE.
            </motion.p>

            <Link href={`/portfolio/about`} className="w-full">
              <motion.button
                className="group relative inline-flex h-[calc(48px+8px)] min-w-[200px] bg-gradient-to-r dark:from-[#410707] dark:to-[#571414] from-[#ffc0c0] to-[#ff4c4c] border-2 border-[#e26565] items-center justify-center rounded-full py-1 pl-6 pr-14 font-medium text-neutral-50"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              >
                <span className="z-10 pr-2 text-base">View More About Me</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#e75050] bg-[#a02b2b] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </>
    </div>
  );
};

export default About;
