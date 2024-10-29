"use client";

import { motion } from "framer-motion";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { WobbleCard } from "../ui/wobble-card";
import { ReactLenis } from "@studio-freight/react-lenis";

export function AboutTimeline() {
  const data = [
    {
      title: "2024 - Next.js Developer, Tecnod8",
      content: (
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 md:max-h-full max-h-[50vh] md:h-full bg-pink-800 text-white w-full shadow-xl hover:bg-pink-600 transition duration-500 ease-in-out transform hover:scale-105">
          <div className="flex justify-center items-center w-full">
            {" "}
            <Image
              src={`/images/tecnod8.png`}
              width={500}
              height={500}
              alt="tecnod8"
              className="rounded-md"
            />
          </div>
          <p className="mt-4 text-center text-xs md:text-base">
            Implementation of Next.js in an existing ReactJS project, adding
            features, optimizing performance and scalability. Integrated OpenAI
            APIs, enhancing generative AI functionality for dynamic responses.
          </p>
        </WobbleCard>
      ),
    },

    {
      title:
        "2020-2024 - Bachelor of Technology, Vellore Institute of Technology",
      content: (
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 md:max-h-full max-h-[50vh] md:h-full bg-blue-700 text-white shadow-xl hover:bg-blue-500 transition duration-500 ease-in-out transform hover:scale-105 w-full justify-center items-center flex">
          <div className="flex justify-center items-center w-full">
            {" "}
            <Image
              src={`/images/vit.jpg`}
              width={500}
              height={500}
              alt="VIT Bhopal"
              className="rounded-md"
            />
          </div>

          <p className="mt-4 text-center text-xs md:text-base">
            B.Tech in Electronics and Communication Engineering from Vellore
            Institute of Technology, Bhopal, Madhya Pradesh
          </p>
        </WobbleCard>
      ),
    },
    {
      title: "2019 - Class 12, Vijaya International School",
      content: (
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 md:max-h-full max-h-[50vh] md:h-full bg-yellow-600 text-black lg:min-h-[300px] shadow-xl hover:bg-yellow-400 transition duration-500 ease-in-out transform hover:scale-105">
          <div className="flex justify-center items-center w-full text-white">
            {" "}
            <Image
              src={`/images/vijaya.jpg`}
              width={500}
              height={500}
              alt="Vijaya International School"
              className="rounded-md"
            />
          </div>
          <p className="mt-4 text-center text-white text-xs md:text-base">
            Completed Class 12 under the Central Board of Secondary Education
            (CBSE) from Vijaya International School, Agra, Uttar Pradesh
          </p>
        </WobbleCard>
      ),
    },
    {
      title: "2017 - Class 10, Kendriya Vidyalaya No. 3",
      content: (
        <WobbleCard containerClassName="col-span-1 lg:col-span-2  md:max-h-full max-h-[50vh] md:h-full bg-red-600 text-white min-h-[500px] lg:min-h-[300px] shadow-xl hover:bg-red-400 transition duration-500 ease-in-out transform hover:scale-105">
          <div className="flex justify-center items-center w-full">
            {" "}
            <Image
              src={`/images/kv3.png`}
              width={300}
              height={300}
              alt="VIT Bhopal"
              className="rounded-md"
            />
          </div>
          <p className="mt-4 text-center text-xs md:text-base">
            Completed Class 10 under the Central Board of Secondary Education
            (CBSE) from Kendriya Vidyalaya No.3 Agra Cantt, Uttar Pradesh
          </p>
        </WobbleCard>
      ),
    },
  ];

  return (
    <ReactLenis root>
      <motion.div
        className="relative z-0 py-8"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Timeline data={data} />
      </motion.div>
    </ReactLenis>
  );
}
