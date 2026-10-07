import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/projet";
import { NAVIGATION } from "./components/navigation";

const LEGAL = ["/mentions-legales", "/confidentialite"];

export default function sitemap(): MetadataRoute.Sitemap {
  const modifiee = new Date();

  return [
    ...NAVIGATION.map((lien) => ({
      url: new URL(lien.href, SITE_URL).toString(),
      lastModified: modifiee,
      changeFrequency: "monthly" as const,
      priority: lien.href === "/" ? 1 : 0.8,
    })),
    ...LEGAL.map((chemin) => ({
      url: new URL(chemin, SITE_URL).toString(),
      lastModified: modifiee,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
