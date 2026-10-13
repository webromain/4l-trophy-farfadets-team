/* Coordonnées de l'équipage et réseaux sociaux. */

export type Email = {
  readonly user: string;
  readonly domain: string;
};

export type ContactDetails = {
  readonly firstName: string;
  readonly phone: string | null;
  readonly email: Email | null;
};

/* Les coordonnées sont renseignées par l'équipage. Tant qu'une valeur vaut `null`,
   la page affiche un bloc « à compléter » plutôt qu'un lien mort. */
export const CONTACTS: readonly ContactDetails[] = [
  { firstName: "Romain", phone: null, email: null },
  { firstName: "Bastien", phone: null, email: null },
];

export const SOCIAL_LINKS = {
  instagram: null as string | null,
  website: null as string | null,
};
