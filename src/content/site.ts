/* Identité du site et de l'équipage. */

export const TO_COMPLETE = "[À COMPLÉTER]" as const;

/* L'adresse définitive n'est pas connue (fiche projet, §10). Elle sert de base aux
   URL canoniques, au sitemap et aux images Open Graph : à renseigner au déploiement. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://les-farfadets.fr";
