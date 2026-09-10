import type { MetadataRoute } from "next";
import { clinicInfo } from "@/lib/data/clinic";

const siteUrl = `https://${clinicInfo.domain}`;

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/search"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
