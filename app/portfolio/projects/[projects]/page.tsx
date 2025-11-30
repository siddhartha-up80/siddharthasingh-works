import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getAllProjects } from "@/services/projects";

import type { Metadata } from "next";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project: any) => ({
    projects: project.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: any): Promise<Metadata> => {
  const info = await getProjectBySlug(params.projects);
  return {
    title:
      "Siddhartha Singh Projects | " +
        info?.title || "Project Details" + " | Portfolio Next.js Developer",
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
            "https://www.siddharthasingh.co.in/_next/image?url=%2Fimages%2Fsiddharthacircle.png&w=1080&q=75",
          width: 800,
          height: 500,
          alt: info?.title || "Project Image",
        },
      ],
    },
  };
};

const Page = async ({ params, searchParams }: any) => {
  const info = await getProjectBySlug(params.projects);

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
                  "https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
