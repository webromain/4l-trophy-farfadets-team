import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { findPhoto } from "./photos";

const directory = mkdtempSync(join(tmpdir(), "photos-"));
afterAll(() => rmSync(directory, { recursive: true, force: true }));

describe("findPhoto", () => {
  it("ne trouve rien tant que la photo n'est pas déposée", () => {
    expect(findPhoto("equipage", directory)).toBeUndefined();
  });

  it("ne plante pas si le dossier n'existe pas", () => {
    expect(findPhoto("equipage", join(directory, "absent"))).toBeUndefined();
  });

  it("renvoie l'adresse publique de la photo déposée", () => {
    writeFileSync(join(directory, "equipage.webp"), "");
    expect(findPhoto("equipage", directory)).toBe("/photos/equipage.webp");
  });

  it("ignore la casse mais garde le nom exact du fichier", () => {
    writeFileSync(join(directory, "Romain.JPG"), "");
    expect(findPhoto("romain", directory)).toBe("/photos/Romain.JPG");
  });

  it("n'accepte que des images", () => {
    writeFileSync(join(directory, "catalin.pdf"), "");
    expect(findPhoto("catalin", directory)).toBeUndefined();
  });
});
