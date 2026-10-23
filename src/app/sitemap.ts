import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/url";

// Tells Google which pages exist (served at /sitemap.xml)
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["", 1],
    ["/services", 0.9],
    ["/emergency", 0.9],
    ["/quote", 0.8],
    ["/areas", 0.8],
    ["/contact", 0.7],
    ["/privacy", 0.2],
  ];
  return pages.map(([path, priority]) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
