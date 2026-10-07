import type { Formule } from "./projet";

/* Le type littéral refuse `http://` et les protocoles exotiques dès la compilation ;
   `estLienSur` refait la vérification au rendu, pour une valeur venue d'ailleurs. */
export type HttpsUrl = `https://${string}`;

export type Sponsor = {
  readonly nom: string;
  readonly formule: Formule["lettre"];
  /* Logo hébergé en local : jamais de lien direct vers un serveur tiers. */
  readonly logo: `/sponsors/${string}`;
  readonly largeurLogo: number;
  readonly hauteurLogo: number;
  readonly site?: HttpsUrl;
};

export const SPONSORS: readonly Sponsor[] = [];

export function estLienSur(url: string | undefined): url is HttpsUrl {
  if (!url) return false;
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

export function partenairePrincipal(
  sponsors: readonly Sponsor[],
): Sponsor | undefined {
  return sponsors.find((sponsor) => sponsor.formule === "D");
}

export function sponsorsParFormule(
  sponsors: readonly Sponsor[],
  lettre: Formule["lettre"],
): readonly Sponsor[] {
  return sponsors.filter((sponsor) => sponsor.formule === lettre);
}
