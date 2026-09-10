import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { doctors } from "@/lib/data/doctors";
import { articles } from "@/lib/data/articles";
import { clinicInfo } from "@/lib/data/clinic";

const siteUrl = `https://${clinicInfo.domain}`;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/doctors",
    "/before-after",
    "/articles",
    "/about",
    "/contact",
    "/appointment",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const doctorRoutes = doctors.map((d) => ({
    url: `${siteUrl}/doctors/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteUrl}/articles/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...doctorRoutes, ...articleRoutes];
}
