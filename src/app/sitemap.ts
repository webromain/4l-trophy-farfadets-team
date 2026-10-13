import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { NAVIGATION } from "@/components/layout/navigation";

const LEGAL = ["/mentions-legales", "/confidentialite"];

export default function sitemap(): MetadataRoute.Sitemap {
  const modifiedAt = new Date();

  return [
    ...NAVIGATION.map((link) => ({
      url: new URL(link.href, SITE_URL).toString(),
      lastModified: modifiedAt,
      changeFrequency: "monthly" as const,
      priority: link.href === "/" ? 1 : 0.8,
    })),
    ...LEGAL.map((pathname) => ({
      url: new URL(pathname, SITE_URL).toString(),
      lastModified: modifiedAt,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
