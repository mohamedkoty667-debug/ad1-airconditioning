import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/url";

// Lets search engines crawl the site and points them to the sitemap (served at /robots.txt)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
