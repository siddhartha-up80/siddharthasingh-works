"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import Image from "next/image";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function HeroContent() {
  return (
    <section className="">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl flex-col flex md:gap-4 gap-2 text-center mx-auto"
      >
        <motion.div
          className="flex items-center justify-center h-max"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            height={1000}
            width={1000}
            src="/images/siddharthacircle.png"
            alt="Portfolio Image"
            className="object-contain w-[25vh] "
          />
        </motion.div>
        <span className="leading-relaxed md:text-2xl text-xl lg:leading-loose font-normal">
          Hi! This is Siddhartha Singh
        </span>
        <Highlight className="text-black dark:text-white text-2xl md:text-4xl lg:text-5xl md:px-5">
          <span className="leading-relaxed lg:leading-relaxed">
            Crafting Engaging Interfaces
          </span>
        </Highlight>{" "}
        <span className="text-xl !leading-normal font-normal">
          <TextGenerateEffect
            words={`Explore my work and social profiles and get out of the matrix`}
            filter={false}
            duration={3}
          />
        </span>
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="flex flex-col gap-10 justify-center mt-8 max-w-4xl mx-auto"
      >
        <div className="md:gap-10 gap-6 justify-center items-center flex flex-col md:flex-row">
          <Link href={`/portfolio/contact`}>
            <button className="group relative inline-flex h-[calc(48px+8px)] w-[210px] bg-gradient-to-r dark:from-[#070e41] dark:to-[#141d57] from-[#c0c7ff] to-[#4c64ff] border-2 border-[#656fe2] items-center justify-center rounded-full  py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2">Contact Profiles</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#5052e7] bg-[#2b2da0] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>

          <Link href={`/portfolio`}>
            <button className="group relative inline-flex h-[calc(48px+8px)] w-[200px] bg-gradient-to-r dark:from-[#410707] dark:to-[#571414] from-[#ffc0c0] to-[#ff4c4c] border-2 border-[#e26565] items-center justify-center rounded-full  py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2">Explore Work</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#e75050] bg-[#a02b2b] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>
        </div>{" "}
        <div className="md:hidden">
          <ul className="flex justify-center items-center flex-row flex-wrap gap-8 dark:text-white">
            {[
              {
                href: "https://www.instagram.com/sid_up80",
                icon: <InstagramIcon size={50} />,
              },
              {
                href: "https://github.com/siddhartha-up80",
                icon: <GithubIcon size={50} />,
              },
              {
                href: "https://twitter.com/siddhartha_up80",
                icon: <TwitterIcon size={50} />,
              },

              {
                href: "https://www.linkedin.com/in/siddhartha-singh-work",
                icon: <LinkedinIcon size={50} />,
              },
            ].map((link, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 10, -10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                className="social-icons"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-3xl flex gap-1 flex-col items-center"
                >
                  {link.icon}
                  {link.href.includes("instagram") ? (
                    <span className="text-sm">Instagram</span>
                  ) : link.href.includes("github") ? (
                    <span className="text-sm">Github</span>
                  ) : link.href.includes("twitter") ? (
                    <span className="text-sm">Twitter</span>
                  ) : (
                    <span className="text-sm">Linkedin</span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
