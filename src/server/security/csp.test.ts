import { describe, expect, it } from "vitest";
import { buildCsp } from "./csp";
import { SECURITY_HEADERS } from "./headers";

const NONCE = "bm9uY2UtZGUtdGVzdA==";

function directives(csp: string): Record<string, string[]> {
  return Object.fromEntries(
    csp.split("; ").map((directive) => {
      const [name, ...values] = directive.split(" ");
      return [name, values];
    }),
  );
}

describe("CSP de production", () => {
  const csp = directives(buildCsp(NONCE, false));

  it("n'autorise les scripts et les styles que par le nonce de la requête", () => {
    expect(csp["script-src"]).toContain(`'nonce-${NONCE}'`);
    expect(csp["style-src"]).toContain(`'nonce-${NONCE}'`);
  });

  it("n'autorise ni script en ligne, ni style en ligne, ni eval", () => {
    expect(csp["script-src"]).not.toContain("'unsafe-inline'");
    expect(csp["script-src"]).not.toContain("'unsafe-eval'");
    expect(csp["style-src"]).not.toContain("'unsafe-inline'");
  });

  it("ne laisse partir aucune requête vers un domaine tiers", () => {
    const sources = Object.values(csp).flat();
    expect(sources.filter((source) => /^https?:|\*/.test(source))).toEqual([]);
    expect(csp["default-src"]).toEqual(["'self'"]);
    expect(csp["connect-src"]).toEqual(["'self'"]);
  });

  it("interdit l'affichage dans un cadre, les objets et le détournement de formulaire", () => {
    expect(csp["frame-ancestors"]).toEqual(["'none'"]);
    expect(csp["object-src"]).toEqual(["'none'"]);
    expect(csp["base-uri"]).toEqual(["'self'"]);
    expect(csp["form-action"]).toEqual(["'self'"]);
  });
});

describe("CSP de développement", () => {
  const csp = directives(buildCsp(NONCE, true));

  it("n'assouplit que ce dont le serveur de développement a besoin", () => {
    expect(csp["script-src"]).toContain("'unsafe-eval'");
    expect(csp["style-src"]).toContain("'unsafe-inline'");
    expect(csp["script-src"]).not.toContain("'unsafe-inline'");
  });
});

describe("en-têtes de sécurité", () => {
  const headers = new Map(
    SECURITY_HEADERS.map(({ key, value }) => [key.toLowerCase(), value]),
  );

  it("posent les protections attendues", () => {
    expect(headers.get("x-content-type-options")).toBe("nosniff");
    expect(headers.get("x-frame-options")).toBe("DENY");
    expect(headers.get("referrer-policy")).toBe(
      "strict-origin-when-cross-origin",
    );
    expect(headers.has("permissions-policy")).toBe(true);
  });

  it("imposent HTTPS pendant au moins un an", () => {
    const maxAge = Number(
      /max-age=(\d+)/.exec(headers.get("strict-transport-security") ?? "")?.[1],
    );
    expect(maxAge).toBeGreaterThanOrEqual(365 * 24 * 3600);
  });

  it("ne dupliquent pas la CSP, qui dépend d'un nonce par requête", () => {
    expect(headers.has("content-security-policy")).toBe(false);
  });
});
