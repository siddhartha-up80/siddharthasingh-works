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
        className="h-max relative w-full overflow-hidden p-6 md:px-8 bg-slate-900 dark:bg-slate-100 dark:text-black flex flex-row items-center justify-between rounded-3xl text-white shadow-xl"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <button
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm font-light text-white dark:text-black transition-all duration-300 hover:w-40 border border-white/20 dark:border-black/20"
            onClick={() => {
              router.back();
            }}
          >
            <motion.div
              className="absolute left-3.5"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.div>
            <div className="hidden md:inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:opacity-100">
              Go Back
            </div>
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link href={forwardLink}>
            <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm font-light text-white dark:text-black transition-all duration-300 hover:w-60 border border-white/20 dark:border-black/20">
              <div className="hidden md:inline-flex whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:opacity-100">
                {forwardLinkText}
              </div>
              <motion.div
                className="absolute right-3.5"
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <ArrowRight className="w-5 h-5" />
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
              icon: <GithubIcon size={28} />,
            },
            {
              href: "https://twitter.com/siddhartha_up80",
              icon: <TwitterIcon size={28} />,
            },
            {
              href: "https://www.linkedin.com/in/siddhartha-singh-work",
              icon: <LinkedinIcon size={28} />,
            },
            {
              href: "https://www.instagram.com/sid_up80",
              icon: <InstagramIcon size={28} />,
            },
          ].map((link, index) => (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.2,
                rotate: [0, 5, -5, 0],
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
                className="icon-colour opacity-70 hover:opacity-100 transition-opacity"
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
