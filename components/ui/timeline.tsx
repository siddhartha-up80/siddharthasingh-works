"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="mt-6 w-full font-sans md:px-6 lg:px-10" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
        <h2 className="mb-2 max-w-4xl text-base font-medium tracking-tight text-black dark:text-white md:text-2xl">
          Changelog from my journey
        </h2>
        <p className="max-w-md text-xs font-light text-neutral-700 dark:text-neutral-300 md:text-sm">
          A timeline of my education and experiences
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 font-light md:gap-6 md:pt-14"
          >
            <div className="sticky top-24 z-40 flex max-w-[15rem] self-start items-center md:w-full md:flex-row">
              <div className="absolute left-2 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-black md:left-2">
                <div className="h-2.5 w-2.5 rounded-full border border-neutral-300 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="hidden text-sm font-medium leading-snug text-neutral-500 dark:text-neutral-500 md:block md:pl-12 md:text-lg">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-14 pr-2 md:pl-2">
              <h3 className="mb-3 block text-left text-base font-medium text-neutral-500 dark:text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-6"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
