"use client";

import Link from "next/link";
import Image from "next/image";
import list from "@/app/portfolio/projects/list";
import { Button } from "../ui/button";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { LinkPreview } from "../ui/link-preview";
import { motion } from "framer-motion"; // Removed useInView and controls

// Animation variants for the card entrance
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.15, // Stagger effect
    },
  },
};

const AllProjects = () => {
  return (
    <>
      {/* Projects */}
      <div className="mx-auto my-10 w-full">
        <div className="flex h-full gap-3 flex-wrap justify-center items-center md:p-0 p-2">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants} // Apply animation variants directly
              className="w-full sm:w-[30rem]"
            >
              <CardContainer className="inter-var h-full" key={index}>
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
                  <Link href={`/portfolio/projects/${item.slug}`}>
                    <CardItem translateZ="100" className="w-full">
                      <Image
                        src={item.img}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </Link>
                  <CardItem
                    translateZ="50"
                    className="text-xl mt-4 font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {item.description}
                  </CardItem>
                  <div className="flex justify-between items-center mt-20 w-full">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 w-full rounded-xl text-xs font-normal dark:text-white"
                    >
                      <LinkPreview url={item.link} className="w-full">
                        <Button className="w-full">View</Button>
                      </LinkPreview>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Projects */}
    </>
  );
};

export default AllProjects;
