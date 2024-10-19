"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { links } from "./dock-footer";
import { getUnsplashPhotos } from "@/services/pexels";

export default function Footer() {
  const controls = useAnimation();
  const footerRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1515865404355-ddb5b0910878?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  useEffect(() => {
    const fetchImages = async () => {
      const photos = await getUnsplashPhotos("cute", 5);
      if (photos.length) {
        setBackgroundImage(photos[0].urls.regular);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    const footerElement = footerRef.current;
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div ref={footerRef}>
      <div>
        <div
          className="w-full bg-gray-600 shadow-md h-[50vh]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <motion.div
            className="flex justify-center flex-col h-full items-center mx-auto text-white"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div
              className="text-center my-10 mt-20 leading-loose"
              variants={itemVariants}
            >
              <h1 className="text-3xl font-bold">CONNECT WITH ME</h1>
              <p className="dark:text-purple-200">
                Feel free to connect with me
              </p>

              <motion.ul
                className="flex justify-center items-center flex-row flex-wrap gap-4 mt-4"
                initial="hidden"
                animate={controls}
                variants={containerVariants}
              >
                {links.map((link, index) => (
                  <motion.li
                    className="social-icons"
                    variants={itemVariants}
                    key={index}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link.href}
                      rel="noreferrer"
                      className="icon-colour text-4xl"
                    >
                      {link.icon}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="text-white body-font bg-black">
        <div className="px-3 pr-5 py-3 mx-auto flex items-center justify-between sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center"
          >
            <span className="text-sm">
              Made by Siddhartha Singh with ❤️ and Next.js
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
