import Image from "next/image";
import React from "react";
import list from "../list";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

// const list = [
//   {
//     title: "Inators UI",
//     type: "Full Stack",
//     tech: "Next.js 14, React, Tailwind, Shadcn UI",
//     slug: "inators-ui",
//     img: "/images/inatorsui.png",
//     description:
//       "UI components library based on shadcn-ui and tailwind for developers and designers to make creating nextjs client side as well as server side interfaces easier.",
//     details:
//       "Inators UI is a comprehensive UI components library designed to streamline the process of creating interfaces using Next.js. Built upon shadcn-ui and Tailwind CSS, it offers a rich collection of components for both client-side and server-side rendering, catering to the needs of developers and designers alike. By leveraging the power of Next.js, it facilitates the seamless integration of these components into projects, enhancing efficiency and productivity. With its user-friendly interface and versatile features, Inators UI empowers teams to build dynamic and visually appealing web applications with ease.",
//     link: "https://inatorsui.vercel.app/",
//   },

export const generateMetadata = ({ params }: any): Metadata => {
  const info = list.find((inator) => inator.slug === params.projects);
  return {
    title:
      "Siddhartha Singh Projects | " + info?.title ||
      "Project Details" + " | Portfolio Next.js Developer",
    description:
      info?.description ||
      "Project details" +
        " | This is Siddhartha Singh A Next.js Full-Stack web developer, with a strong inclination towards challenging projects",
    openGraph: {
      title: info?.title || "Project",
      description:
        info?.description ||
        "Project details" +
          " | This is Siddhartha Singh A Next.js Full-Stack web developer, with a strong inclination towards challenging projects",
      images: [
        {
          url:
            info?.img ||
            "https://www.siddharthasingh.me/_next/image?url=%2Fimages%2Fsiddharthacircle.png&w=1080&q=75",
          width: 800,
          height: 500,
          alt: info?.title || "Project Image",
        },
      ],
    },
  };
};

const Page = ({ params, searchParams }: any) => {
  const info = list.find((inator) => inator.slug === params.projects);

  //   console.log(info);

  return (
    <div className="mx-auto py-5">
      <section className="body-font overflow-hidden mx-auto w-full">
        <div className="px-5 md:py-24 mx-auto">
          <div className="lg:w-full mx-auto flex md:flex-row flex-col">
            <Link
              href={info?.link || "/projects"}
              className="flex justify-center items-center"
            >
              <Image
                height={900}
                width={900}
                alt="ecommerce"
                className="md:min-w-[40vw] md:max-w-[50vw] object-fill object-top rounded aspect-video"
                src={
                  info?.img ||
                  "https://source.unsplash.com/random/800x500/?project"
                }
              />
            </Link>

            <div className="lg:w-1/2 w-full lg:pl-10 mt-6 md:mt-0">
              <h2 className="text-sm title-font  tracking-widest">
                {info?.type}
              </h2>
              <h1 className=" text-3xl title-font font-medium mb-1">
                {info?.title}
              </h1>

              <p className="leading-relaxed mt-5">{info?.details}</p>

              <div className="flex mt-5">
                <span className="font-semibold text-xl ">{info?.tech}</span>
              </div>
              <div className="mt-6">
                <Link href={info?.link || "/projects"}>
                  <Button className="w-full">View</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
