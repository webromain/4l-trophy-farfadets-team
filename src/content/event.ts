/* Le 4L Trophy 2027 : l'épreuve, ses chiffres, sa mission solidaire. */

import { formatNumber } from "@/lib/format";
import type { TitledItem } from "./types";

export type KeyFigure = {
  readonly value: string;
  readonly caption: string;
};

export const EVENT = {
  edition: "30e",
  dates: "du 17 au 28 février 2027",
  startDate: "17 février 2027",
  finishDate: "26 février 2027",
  start: "Biarritz",
  finish: "Marrakech",
  countries: "France, Espagne, Maroc",
  distanceKm: 6000,
  days: 12,
  crews: 1200,
  minAge: 18,
  maxAge: 28,
  charity: "Enfants du Désert",
  entryFee: 3690,
} as const;

export const KEY_FIGURES: readonly KeyFigure[] = [
  { value: EVENT.edition, caption: "édition, du 17 au 28 février 2027" },
  { value: "3 pays", caption: "France, Espagne, Maroc" },
  { value: `${EVENT.days} jours`, caption: "de raid, en Renault 4L" },
  {
    value: formatNumber(EVENT.crews),
    caption: "équipages attendus au départ",
  },
];

export const SOLIDARITY_STEPS: readonly TitledItem[] = [
  {
    title: "Nous collectons",
    description:
      "Avant le départ, nous réunissons des fournitures scolaires et sportives.",
  },
  {
    title: "Nous transportons",
    description:
      "Elles voyagent avec nous dans la 4L, de Biarritz jusqu'au sud du Maroc.",
  },
  {
    title: "Elles arrivent à destination",
    description:
      "L'acheminement se fait avec l'association Enfants du Désert, au profit des enfants du sud marocain.",
  },
];
