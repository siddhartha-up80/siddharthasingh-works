"use client";

import Link from "next/link";
import Image from "next/image";
import list from "@/app/portfolio/projects/list";
import { Button } from "../ui/button";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { LinkPreview } from "../ui/link-preview";

// title: "Inators UI",
//     type: "Full Stack",
//     tech: "Next.js 14, React, Tailwind, Shadcn UI",
//     slug: "inators-ui",
//     img: "/images/inatorsui.png",
//     description:
//       "UI components library based on shadcn-ui and tailwind for developers and designers to make creating nextjs client side as well as server side interfaces easier.",
//     details:
//       "Inators UI is a comprehensive UI components library designed to streamline the process of creating interfaces using Next.js. Built upon shadcn-ui and Tailwind CSS, it offers a rich collection of components for both client-side and server-side rendering, catering to the needs of developers and designers alike. By leveraging the power of Next.js, it facilitates the seamless integration of these components into projects, enhancing efficiency and productivity. With its user-friendly interface and versatile features, Inators UI empowers teams to build dynamic and visually appealing web applications with ease.",
//     link: "https://inatorsui.vercel.app/",

const AllProjects = () => {
  return (
    <>
      {/* Projects */}
      <div className="mx-auto my-10 w-full">
        <div className="text-2xl text-center mt-10">ALL OF MY PROJECTS</div>
        <div className="flex h-full gap-3 flex-wrap justify-center items-center">
          {list.map((item, index) => (
            <CardContainer className="inter-var h-full" key={index}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
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
          ))}
        </div>
      </div>

      {/* Projects */}
    </>
  );
};

export default AllProjects;
