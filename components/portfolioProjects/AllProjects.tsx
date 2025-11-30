"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { LinkPreview } from "../ui/link-preview";
import { motion } from "framer-motion";

interface Project {
  _id: string;
  title: string;
  description: string;
  img: string;
  link: string;
  slug: string;
}

interface AllProjectsProps {
  projects: Project[];
}

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

const AllProjects = ({ projects }: AllProjectsProps) => {
  return (
    <>
      {/* Projects */}
      <div className="mx-auto my-10 w-full">
        <div className="flex h-full gap-3 flex-wrap justify-center items-center md:p-0 p-2">
          {projects.map((item, index) => (
            <motion.div
              key={item._id}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="w-full sm:w-[30rem]"
            >
              <CardContainer className="inter-var h-full" key={item._id}>
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
                    className="text-lg md:text-xl mt-4 font-light tracking-tight text-neutral-800 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 text-xs md:text-sm max-w-sm mt-2 dark:text-neutral-400 font-light leading-relaxed"
                  >
                    {item.description}
                  </CardItem>
                  <div className="flex justify-between items-center mt-20 w-full">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 w-full rounded-xl text-xs font-light dark:text-white"
                    >
                      <LinkPreview url={item.link} className="w-full">
                        <Button className="w-full rounded-full font-light text-sm hover:scale-105 transition-transform">
                          View Project
                        </Button>
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
