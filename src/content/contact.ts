/* Coordonnées de l'équipage et réseaux sociaux. */

import { PUBLIC_SITE_URL } from "./site";

export type Email = {
  readonly user: string;
  readonly domain: string;
};

export type ContactDetails = {
  readonly firstName: string;
  /* Absent : le téléphone n'est pas affiché. */
  readonly phone?: string | null;
  readonly email: Email | null;
};

/* Les coordonnées sont renseignées par l'équipage. Tant qu'une valeur vaut `null`,
   la page affiche un bloc « à compléter » plutôt qu'un lien mort. Catalin ne
   publie pas son téléphone : le champ est absent, rien ne s'affiche. */
export const CONTACTS: readonly ContactDetails[] = [
  {
    firstName: "Romain",
    phone: "+33 7 68 99 49 73",
    email: { user: "romain.pson", domain: "gmail.com" },
  },
  {
    firstName: "Catalin",
    email: { user: "stefanescucatalin", domain: "outlook.fr" },
  },
];

export const SOCIAL_LINKS = {
  /* Nom du compte Instagram, sans « @ ». */
  instagram: "4ldesfarfadets" as string | null,
  website: PUBLIC_SITE_URL,
};
