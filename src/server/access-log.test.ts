import { describe, expect, it } from "vitest";
import { formatAccessLog } from "./access-log";

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
