import { MetadataRoute } from "next";
import list from "./portfolio/projects/list";

export default function sitemap(): MetadataRoute.Sitemap {

  const projectlinks : any = list.map((project) => ({
    url: `https://siddharthasingh.me/portfolio/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://siddharthasingh.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://siddharthasingh.me/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.me/portfolio/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...projectlinks,
    
    {
      url: "https://siddharthasingh.me/portfolio/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.me/portfolio/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
