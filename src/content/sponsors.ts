import { MAIN_TIER, type SponsorshipTier } from "./sponsorship";

/* Le type littéral refuse `http://` et les protocoles exotiques dès la compilation. */
export type HttpsUrl = `https://${string}`;

export type Sponsor = {
  readonly name: string;
  readonly tier: SponsorshipTier["letter"];
  /* Logo hébergé en local : jamais de lien direct vers un serveur tiers. */
  readonly logo: `/sponsors/${string}`;
  readonly logoWidth: number;
  readonly logoHeight: number;
  readonly website?: HttpsUrl;
};

export const SPONSORS: readonly Sponsor[] = [];

export function findMainPartner(
  sponsors: readonly Sponsor[],
): Sponsor | undefined {
  return sponsors.find((sponsor) => sponsor.tier === MAIN_TIER.letter);
}
