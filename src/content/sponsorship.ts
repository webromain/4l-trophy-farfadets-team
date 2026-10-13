/* L'offre faite aux sponsors : formules, arguments, soutien en nature, dossier PDF. */

import { formatKilometres } from "@/lib/format";
import { EVENT } from "./event";
import type { TitledItem } from "./types";

export type SponsorshipTier = {
  readonly letter: "A" | "B" | "C" | "D";
  readonly name: string;
  readonly amount: number;
  readonly placement: string;
  readonly perks: readonly string[];
  readonly unique: boolean;
};

export const SPONSORSHIP_TIERS: readonly SponsorshipTier[] = [
  {
    letter: "A",
    name: "Coup de pouce",
    amount: 150,
    placement: "Vitres arrière",
    perks: [
      "Petit logo sur les vitres arrière",
      "Logo sur notre site",
      "Remerciement sur nos réseaux",
    ],
    unique: false,
  },
  {
    letter: "B",
    name: "Partenaire",
    amount: 500,
    placement: "Portières",
    perks: [
      "Logo moyen sur les portières",
      "Logo et lien sur notre site",
      "Publications régulières",
    ],
    unique: false,
  },
  {
    letter: "C",
    name: "Premium",
    amount: 1000,
    placement: "Ailes ou toit",
    perks: [
      "Grand logo sur les ailes ou le toit",
      "Encart dédié sur notre site",
      "Contenu photo et vidéo dédié",
    ],
    unique: false,
  },
  {
    letter: "D",
    name: "Partenaire principal",
    amount: 2500,
    placement: "Capot",
    perks: [
      "Votre logo sur le capot",
      "Mise en avant en page d'accueil du site",
      "Présence sur toutes nos communications",
      "Photos et vidéos du raid remises après l'arrivée",
    ],
    unique: true,
  },
];

/* La formule vendue une seule fois : celle du partenaire principal. */
export const MAIN_TIER = SPONSORSHIP_TIERS.find((tier) => tier.unique)!;

const TIER_AMOUNTS = SPONSORSHIP_TIERS.map((tier) => tier.amount);
export const LOWEST_TIER_AMOUNT = Math.min(...TIER_AMOUNTS);
export const HIGHEST_TIER_AMOUNT = Math.max(...TIER_AMOUNTS);

export const REASONS: readonly TitledItem[] = [
  {
    title: `Sur la voiture, pendant ${formatKilometres(EVENT.distanceKm)}`,
    description:
      "Votre logo roule avec nous à travers la France, l'Espagne et le Maroc.",
  },
  {
    title: "Sur notre site web",
    description:
      "Votre logo y figure, avec un lien vers le site de votre entreprise.",
  },
  {
    title: "Sur nos réseaux sociaux",
    description:
      "Nous y racontons la préparation puis le raid, en citant nos partenaires.",
  },
  {
    title: "Sur le campus de l'Efrei",
    description:
      "Le projet est porté par une association de l'école : il y est visible, et vous avec lui.",
  },
  {
    title: "Dans les Yvelines, pendant toute la préparation",
    description:
      "Versailles, Le Chesnay, les Yvelines : nous préparons le raid ici, près de vos clients.",
  },
  {
    title: "Une image d'entreprise engagée",
    description:
      "Vous soutenez un projet solidaire, porté par deux jeunes de votre territoire.",
  },
];

export const IN_KIND_SUPPORT: readonly TitledItem[] = [
  {
    title: "Pièces",
    description: "Des pièces détachées pour fiabiliser la 4L avant le départ.",
  },
  {
    title: "Préparation mécanique",
    description: "Un passage à l'atelier, un contrôle, un coup de main.",
  },
  {
    title: "Fournitures scolaires",
    description: "Elles partent avec nous, pour les enfants du sud marocain.",
  },
  {
    title: "Équipement",
    description:
      "Le matériel obligatoire et l'outillage dont nous avons besoin pour le raid.",
  },
];

export const SPONSORSHIP_DECK = {
  href: "/pdfs/dossier-sponsoring-les-farfadets-4l-trophy-2027.pdf",
  fileSize: "8,8 Mo",
  pages: 12,
} as const;
