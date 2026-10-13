/* Identité du site et de l'équipage. */

/* L'adresse publique du site, affichée sur la page Contact. */
export const PUBLIC_SITE_URL = "https://4l.lesfarfadets.net";

/* Base des URL canoniques, du sitemap et des images Open Graph.
   `NEXT_PUBLIC_SITE_URL` ne sert qu'à la remplacer pour un déploiement à une autre
   adresse (essai, préproduction). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? PUBLIC_SITE_URL;
