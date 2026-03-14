import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/portfolio",
          "/portfolio/about",
          "/portfolio/projects",
          "/portfolio/contact",
        ],
        disallow: ["/cms", "/cms/", "/api", "/api/", "/api/*"],
      },
    ],
    sitemap: "https://siddharthasingh.co.in/sitemap.xml",
    host: "https://siddharthasingh.co.in",
  };
}
