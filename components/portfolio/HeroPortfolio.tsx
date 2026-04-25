"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const HeroPortfolio = () => {
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
              <button className="w-full sm:w-auto group relative inline-flex h-12 md:h-14 items-center justify-center gap-3 rounded-full px-8 bg-blue-600/90 hover:bg-blue-600 text-white font-medium transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-900/20 backdrop-blur-sm border border-white/10">
                <span>Contact Me</span>
                <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroPortfolio;
