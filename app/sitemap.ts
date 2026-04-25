import { MetadataRoute } from "next";
import list from "./portfolio/projects/list";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-14T00:00:00.000Z");

  const projectlinks: MetadataRoute.Sitemap = list.map((project) => ({
    url: `https://siddharthasingh.co.in/portfolio/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://siddharthasingh.co.in",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...projectlinks,

    {
      url: "https://siddharthasingh.co.in/portfolio/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://siddharthasingh.co.in/portfolio/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://siddharthasingh.co.in/resume",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
