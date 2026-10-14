import { NextResponse, type NextRequest } from "next/server";
import { writeAccessLog } from "@/server/access-log";
import { buildCsp } from "@/server/security/csp";

/* Point d'entrée serveur de chaque requête : il pose la CSP à nonce
   (server/security/csp.ts) et, en production, note la page servie dans le journal
   d'accès (server/access-log.ts). */
export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    void writeAccessLog(request);
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce, process.env.NODE_ENV === "development");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
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
