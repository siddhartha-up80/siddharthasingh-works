import { MetadataRoute } from "next";
import list from "./portfolio/projects/list";

export default function sitemap(): MetadataRoute.Sitemap {

  const projectlinks : any = list.map((project) => ({
    url: `https://siddharthasingh.co.in/portfolio/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://siddharthasingh.co.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...projectlinks,
    
    {
      url: "https://siddharthasingh.co.in/portfolio/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
