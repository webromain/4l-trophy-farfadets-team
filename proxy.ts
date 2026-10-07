import { NextResponse, type NextRequest } from "next/server";

/* CSP à nonce : le HTML d'App Router contient des scripts en ligne (charge RSC,
   amorçage). Sans nonce, il faudrait `script-src 'unsafe-inline'`. Le nonce impose
   en contrepartie un rendu dynamique — d'où `connection()` dans le layout racine. */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const dev = process.env.NODE_ENV === "development";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' ${dev ? "'unsafe-inline'" : `'nonce-${nonce}'`}`,
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  const enTetes = new Headers(request.headers);
  enTetes.set("x-nonce", nonce);
  enTetes.set("Content-Security-Policy", csp);

  const reponse = NextResponse.next({ request: { headers: enTetes } });
  reponse.headers.set("Content-Security-Policy", csp);
  return reponse;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
