import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

/* Garde-fou de l'architecture décrite dans le README : les imports ne vont que
   dans un sens, `app` → `features` → `components` → `content` et `lib`. */

const SRC = join(process.cwd(), "src");

function sourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(name) ? [path] : [];
  });
}

const FILES = sourceFiles(SRC)
  .filter((path) => !path.includes(".test."))
  .map((path) => {
    /* Sous Windows, `relative` sépare par des « \ » : tout le fichier compare
       des chemins écrits avec des « / ». */
    const file = relative(SRC, path).replaceAll("\\", "/");
    const imports = [
      ...readFileSync(path, "utf8").matchAll(/from\s+"([^"]+)"/g),
    ].map((match) => match[1]);
    return { file, imports };
  });

/* Imports interdits depuis `folder` : tout ce qui commence par l'un des préfixes. */
function violations(folder: string, forbidden: string[]): string[] {
  return FILES.filter(({ file }) => file.startsWith(folder)).flatMap(
    ({ file, imports }) =>
      imports
        .filter((path) => forbidden.some((prefix) => path.startsWith(prefix)))
        .map((path) => `${file} importe ${path}`),
  );
}

describe("sens des imports", () => {
  it("les briques partagées ne connaissent ni les pages ni les fonctionnalités", () => {
    expect(violations("components/", ["@/app", "@/features"])).toEqual([]);
  });

  it("les briques d'interface et d'effets ne lisent pas le contenu", () => {
    expect(violations("components/ui/", ["@/content"])).toEqual([]);
    expect(violations("components/effects/", ["@/content"])).toEqual([]);
  });

  it("une fonctionnalité n'importe jamais une page", () => {
    expect(violations("features/", ["@/app"])).toEqual([]);
  });

  it("le contenu ne dépend que de lui-même et des utilitaires", () => {
    expect(
      violations("content/", [
        "@/app",
        "@/features",
        "@/components",
        "@/server",
      ]),
    ).toEqual([]);
  });

  it("les utilitaires et le code serveur ne dépendent de rien d'autre", () => {
    const others = ["@/app", "@/features", "@/components", "@/content"];
    expect(violations("lib/", others)).toEqual([]);
    expect(violations("server/", others)).toEqual([]);
  });

  it("aucun import ne remonte l'arborescence : on passe par l'alias `@/`", () => {
    const upward = FILES.flatMap(({ file, imports }) =>
      imports
        .filter((path) => path.startsWith("../"))
        .map((path) => `${file} importe ${path}`),
    );
    expect(upward).toEqual([]);
  });
});

describe("pages", () => {
  it("une page ne fait qu'assembler des sections, sauf les pages de texte légal", () => {
    const TEXT_PAGES = [
      "app/mentions-legales/page.tsx",
      "app/confidentialite/page.tsx",
    ];
    const withMarkup = FILES.filter(
      ({ file }) => file.endsWith("page.tsx") && !TEXT_PAGES.includes(file),
    )
      .filter(({ file }) =>
        /<(div|section|p|h[1-6]|ul|span)\b/.test(
          readFileSync(join(SRC, file), "utf8"),
        ),
      )
      .map(({ file }) => file);
    expect(withMarkup).toEqual([]);
  });
});
