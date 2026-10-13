/* Les étapes du raid. */

export type Stage = {
  readonly dates: string;
  readonly place: string;
  readonly description: string;
};

export const STAGES: readonly Stage[] = [
  {
    dates: "17-18 février",
    place: "Biarritz",
    description: "Village départ.",
  },
  {
    dates: "19-20 février",
    place: "Algésiras",
    description: "Premier bivouac, au sud de l'Espagne.",
  },
  {
    dates: "20-21 février",
    place: "Détroit de Gibraltar",
    description: "Traversée en bateau vers le Maroc.",
  },
  {
    dates: "22-26 février",
    place: "Sud marocain",
    description: "6 étapes dans le désert, à la boussole et au road-book.",
  },
  {
    dates: "26 février",
    place: "Marrakech",
    description: "Ligne d'arrivée.",
  },
  {
    dates: "27 février",
    place: "Marrakech",
    description: "Journée libre et remise des prix.",
  },
  {
    dates: "28 février",
    place: "Détroit de Gibraltar",
    description: "Traversée retour.",
  },
];
