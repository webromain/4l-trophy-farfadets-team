import { describe, expect, it } from "vitest";
import { mailtoHref } from "./mailto";

describe("lien mailto", () => {
  const email = { user: "romain.pson", domain: "gmail.com" };

  it("n'écrit jamais l'adresse d'un seul tenant", () => {
    expect(mailtoHref(email)).not.toContain("@");
  });

  it("désigne la bonne adresse une fois décodé", () => {
    expect(decodeURIComponent(mailtoHref(email))).toBe(
      "mailto:romain.pson@gmail.com",
    );
  });
});
