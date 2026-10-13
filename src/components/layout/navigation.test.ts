import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/content/site";
import { NAVIGATION } from "./navigation";

const SRC = join(process.cwd(), "src");

/* Une adresse interne existe si `src/app/<adresse>/page.tsx` existe. */
const routeExists = (href: string) =>
  existsSync(join(SRC, "app", href, "page.tsx"));

function sourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(name) && !name.includes(".test.") ? [path] : [];
  });
}

describe("navigation", () => {
  it("chaque lien du menu mène à une page qui existe", () => {
    for (const link of NAVIGATION) {
      expect(routeExists(link.href), link.href).toBe(true);
    }
  });

  it("commence par l'accueil et n'a pas de doublon", () => {
    const hrefs = NAVIGATION.map((link) => link.href);
    expect(hrefs[0]).toBe("/");
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("liens internes", () => {
  it("aucun `href` écrit dans le code ne pointe vers une page absente", () => {
    const broken = sourceFiles(SRC).flatMap((file) =>
      [...readFileSync(file, "utf8").matchAll(/href="(\/[^"#?]*)"/g)]
        .map((match) => match[1])
        .filter((href) => !routeExists(href))
        .map((href) => `${file.replace(SRC, "src")} → ${href}`),
    );
    expect(broken).toEqual([]);
  });
});

describe("sitemap", () => {
  const urls = sitemap().map((entry) => entry.url);

  it("liste toutes les pages du menu", () => {
    for (const link of NAVIGATION) {
      expect(urls).toContain(new URL(link.href, SITE_URL).toString());
    }
  });

  it("ne liste que des pages qui existent, une seule fois, sur le domaine du site", () => {
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) {
      expect(url.startsWith(SITE_URL), url).toBe(true);
      expect(routeExists(new URL(url).pathname), url).toBe(true);
    }
  });
});
