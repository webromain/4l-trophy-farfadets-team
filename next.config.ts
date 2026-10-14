import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./src/server/security/headers";

/* `cacheComponents` et `partialPrefetching` sont retirés du scaffold : la CSP à
   nonce (proxy.ts) impose un rendu dynamique, avec lequel le prérendu partiel est
   incompatible — le shell statique n'aurait pas accès au nonce. */
const nextConfig: NextConfig = {
  /* Image Docker : `.next/standalone` contient le serveur et les seuls modules
     dont il a besoin (Dockerfile). */
  output: "standalone",
  experimental: {
    agentFeedback: true,
  },
  poweredByHeader: false,
  /* Les photos déposées dans `public/photos/` sont cherchées sur le disque au
     rendu (src/server/photos.ts) : sans cette ligne, un hébergement « serverless »
     ne les embarquerait pas avec le code des pages. */
  outputFileTracingIncludes: {
    "/*": ["public/photos/**/*"],
  },
  turbopack: {
    rules: {
      "*.css": {
        /* Les modules CSS (`*.module.css`) ne passent pas par Tailwind : le
           chargeur les renommerait en `.module.css.css` et Next les traiterait
           comme des feuilles globales. */
        condition: { not: { path: /\.module\.css$/ } },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async headers() {
    return [
      {
        source: "/:chemin*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
