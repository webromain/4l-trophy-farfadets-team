import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it, vi } from "vitest";
import {
  accessLogFile,
  formatAccessLog,
  purgeAccessLogs,
  writeAccessLog,
} from "./access-log";

const DATE = new Date("2027-02-17T08:30:00.000Z");

function request(path: string, headers: Record<string, string> = {}) {
  const url = new URL(path, "https://4l.lesfarfadets.net");
  return { method: "GET", nextUrl: url, headers: new Headers(headers) };
}

describe("journal d'accès", () => {
  it("note l'adresse du visiteur transmise par Cloudflare, la page et le navigateur", () => {
    const line = formatAccessLog(
      request("/sponsors", {
        "cf-connecting-ip": "203.0.113.7",
        "user-agent": "Firefox",
      }),
      DATE,
    );
    expect(JSON.parse(line)).toEqual({
      time: "2027-02-17T08:30:00.000Z",
      ip: "203.0.113.7",
      method: "GET",
      path: "/sponsors",
      userAgent: "Firefox",
    });
  });

  it("n'enregistre ni les paramètres d'URL ni les autres en-têtes", () => {
    const line = formatAccessLog(
      request("/contact?email=quelqu-un@exemple.fr", {
        cookie: "secret=1",
        referer: "https://exemple.fr",
      }),
      DATE,
    );
    expect(line).not.toContain("exemple.fr");
    expect(line).not.toContain("secret");
    expect(JSON.parse(line).path).toBe("/contact");
  });

  it("écrit « - » quand une information manque", () => {
    const entry = JSON.parse(formatAccessLog(request("/"), DATE));
    expect(entry.ip).toBe("-");
    expect(entry.userAgent).toBe("-");
  });
});

describe("fichiers du journal d'accès", () => {
  it("range chaque jour dans son propre fichier, daté en UTC", () => {
    expect(accessLogFile("logs", DATE)).toBe(
      join("logs", "access-2027-02-17.log"),
    );
  });

  it("ajoute une ligne par page servie au fichier du jour", async () => {
    const directory = await mkdtemp(join(tmpdir(), "journal-"));
    try {
      await writeAccessLog(request("/"), DATE, directory);
      await writeAccessLog(request("/contact"), DATE, directory);
      const lines = (await readFile(accessLogFile(directory, DATE), "utf8"))
        .trim()
        .split("\n")
        .map((line) => JSON.parse(line).path);
      expect(lines).toEqual(["/", "/contact"]);
    } finally {
      await rm(directory, { recursive: true });
    }
  });

  it("crée le dossier s'il n'existe pas", async () => {
    const parent = await mkdtemp(join(tmpdir(), "journal-"));
    try {
      const directory = join(parent, "logs");
      await writeAccessLog(request("/"), DATE, directory);
      expect(await readdir(directory)).toEqual(["access-2027-02-17.log"]);
    } finally {
      await rm(parent, { recursive: true });
    }
  });

  it("ne bloque pas la page si le dossier est inaccessible", async () => {
    const parent = await mkdtemp(join(tmpdir(), "journal-"));
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      /* Un fichier à la place du dossier parent : impossible d'y écrire. */
      const file = join(parent, "fichier");
      await writeFile(file, "");
      await expect(
        writeAccessLog(request("/"), DATE, join(file, "logs")),
      ).resolves.toBeUndefined();
      expect(error).toHaveBeenCalledOnce();
    } finally {
      error.mockRestore();
      await rm(parent, { recursive: true });
    }
  });
});

describe("conservation du journal d'accès", () => {
  async function folderWith(names: string[]) {
    const directory = await mkdtemp(join(tmpdir(), "journal-"));
    for (const name of names) await writeFile(join(directory, name), "");
    return directory;
  }

  it("supprime les journées de plus de six mois et garde les autres", async () => {
    const directory = await folderWith([
      "access-2026-08-16.log",
      "access-2026-08-17.log", // finit pile 183 jours avant : supprimé
      "access-2026-08-18.log", // encore dans les 183 jours : gardé
      "access-2027-02-17.log",
      "autre-fichier.log",
    ]);
    try {
      const now = new Date("2027-02-17T00:00:00.000Z");
      expect(await purgeAccessLogs(directory, now)).toEqual([
        "access-2026-08-16.log",
        "access-2026-08-17.log",
      ]);
      expect((await readdir(directory)).sort()).toEqual([
        "access-2026-08-18.log",
        "access-2027-02-17.log",
        "autre-fichier.log",
      ]);
    } finally {
      await rm(directory, { recursive: true });
    }
  });
});
