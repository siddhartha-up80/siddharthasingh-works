"use client";

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const QuickLinks = ({
  forwardLink,
  forwardLinkText,
}: {
  forwardLink: string;
  forwardLinkText: string;
}) => {
  const router = useRouter();

  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="h-max relative w-full overflow-hidden   p-4 md:px-6 bg-slate-900 dark:bg-slate-100 dark:text-black flex flex-row items-center justify-between rounded-lg text-white"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <button
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r dark:from-[#410707] dark:to-[#812626] from-[#ffc0c0] to-[#ff4c4c] font-medium text-neutral-200 border-2 border-[#e26565] transition-all duration-300 hover:w-60"
            onClick={() => {
              router.back();
            }}
          >
            <motion.div
              className="absolute left-3"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <ArrowLeft />
            </motion.div>
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Go Back
            </div>
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link href={forwardLink}>
            <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r dark:from-[#410707] dark:to-[#812626] from-[#ffc0c0] to-[#ff4c4c] font-medium text-neutral-200 border-2 border-[#e26565] transition-all duration-300 hover:w-60">
              <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200  group-hover:opacity-100">
                {forwardLinkText}
              </div>
              <motion.div
                className="absolute right-3"
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <ArrowRight />
              </motion.div>
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="justify-center items-center w-max mx-auto flex bottom-16 relative z-[100] dark:text-black text-white">
        <ul className="flex justify-center items-center flex-row flex-wrap md:gap-8 gap-4 mt-2">
          {[
            {
              href: "https://github.com/siddhartha-up80",
              icon: <GithubIcon size={30} />,
            },
            {
              href: "https://twitter.com/siddhartha_up80",
              icon: <TwitterIcon size={30} />,
            },
            {
              href: "https://www.linkedin.com/in/siddhartha-singh-work",
              icon: <LinkedinIcon size={30} />,
            },
            {
              href: "https://www.instagram.com/sid_up80",
              icon: <InstagramIcon size={30} />,
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
                className="icon-colour text-3xl"
              >
                {link.icon}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuickLinks;
