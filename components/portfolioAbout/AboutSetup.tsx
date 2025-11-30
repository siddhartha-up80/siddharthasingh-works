"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Setup {
  type: string;
  items: SetupItem[];
}

interface SetupItem {
  name: string;
  link: string | null;
}

const setupItems: Setup[] = [
  {
    type: "Main Machine",
    items: [
      {
        name: "Lenovo Yoga 7",
        link: "https://www.lenovo.com/us/en/yoga/?cid=flash_redirect_2p3o1i",
      },
    ],
  },
  {
    type: "Backup Laptop",
    items: [
      {
        name: "Dell Vostro 3000 Series",
        link: "https://www.dell.com/en-in/work/shop/business-laptop-notebook-computers/sr/laptops/vostro-laptops",
      },
    ],
  },
  {
    type: "CPU",
    items: [
      {
        name: "Intel Core i7 EVO 1165G7",
        link: "https://www.intel.com/content/www/us/en/products/sku/213827/intel-core-i71165g7-processor-12m-cache-up-to-4-70-ghz/specifications.html",
      },
    ],
  },
  {
    type: "GPU",
    items: [
      {
        name: "Integrated Intel Iris Xe 96EU",
        link: "https://www.intel.com/content/www/us/en/products/sku/213827/intel-core-i71165g7-processor-12m-cache-up-to-4-70-ghz/specifications.html",
      },
    ],
  },
  {
    type: "Memory",
    items: [
      {
        name: "16GB DDR4",
        link: "https://www.kingston.com/en/memory/ddr4",
      },
    ],
  },
  {
    type: "Display",
    items: [
      {
        name: "14-inch Full HD",
        link: "https://www.lenovo.com/us/en/laptops/yoga/yoga-7-series/Yoga-7i-14/p/88YGC701565",
      },
    ],
  },
  {
    type: "Speaker",
    items: [
      {
        name: "Dolby Atmos Inbuilt Speaker System",
        link: "https://www.dolby.com/technologies/dolby-atmos/",
      },
    ],
  },
  {
    type: "External Mouse",
    items: [
      {
        name: "Portronics Toad One",
        link: "https://www.portronics.com/products/toad-one",
      },
    ],
  },
  {
    type: "Audio",
    items: [
      {
        name: "Realme Wireless 3",
        link: "https://www.realme.com/in/realme-buds-wireless-3",
      },
    ],
  },
  {
    type: "IDE",
    items: [
      {
        name: "Microsoft Visual Studio Code",
        link: "https://code.visualstudio.com",
      },
    ],
  },
  {
    type: "Top Websites",
    items: [
      {
        name: "1337x.to Torrent Search Engine",
        link: "https://1337x.to",
      },
      {
        name: "FileCR",
        link: "https://filecr.com",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 70,
    },
  }),
};

export default function AboutSetup() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-32 container mx-auto flex justify-center items-center w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-700 dark:via-purple-700 max-w-7xl rounded-lg dark:to-pink-700"
    >
      <SetupTable />
    </motion.section>
  );
}

function SetupTable() {
  return (
    <Card className={cn("w-full max-w-3xl")} id="setup">
      <CardHeader className="relative overflow-hidden">
        <CardTitle className="mb-3 text-2xl md:text-3xl font-light tracking-tight text-center">
          My Potato Setup
        </CardTitle>
        <CardDescription className="text-center text-sm font-light">
          The stuff that I use for my work
        </CardDescription>
      </CardHeader>
      <CardContent className={cn("p-0")}>
        {setupItems.map((setup, index) => (
          <SetupTableRow key={index} setup={setup} index={index} />
        ))}
      </CardContent>
    </Card>
  );
}

function SetupTableRow({ setup, index }: { setup: Setup; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className={cn(
        "px-6 py-4 md:grid md:grid-cols-3 items-center",
        index % 2 == 0 ? "bg-muted dark:bg-white/[0.08]" : "bg-transparent"
      )}
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <p className="font-light text-sm md:col-span-1 xl:text-base">
        {setup.type}
      </p>
      <div className="flex flex-col text-sm md:col-span-2 xl:text-base font-light">
        {setup.items.map((item, i) => (
          <React.Fragment key={i}>
            {item.link ? (
              <Link href={item.link} className="dark:!text-white text-black">
                <motion.span
                  whileHover={{ scale: 1.1, color: "#f43f5e" }}
                  className="hover:text-primary/80  cursor-pointer"
                >
                  {item.name}
                </motion.span>
              </Link>
            ) : (
              <motion.span whileHover={{ scale: 1.1 }}>{item.name}</motion.span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}
