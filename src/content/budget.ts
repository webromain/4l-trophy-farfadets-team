/* Le budget prévisionnel, poste par poste. */

export type BudgetLine = {
  readonly label: string;
  readonly amount: number;
};

export const BUDGET = {
  total: 11000,
  sponsorsGoal: 10000,
  alreadyFunded: 1000,
  lines: [
    { label: "Inscription", amount: 3690 },
    { label: "Achat de la 4L et carte grise", amount: 3000 },
    { label: "Préparation mécanique et pièces", amount: 1800 },
    { label: "Carburant et péages", amount: 1200 },
    { label: "Assurance", amount: 500 },
    { label: "Équipements obligatoires et outillage", amount: 400 },
    { label: "Communication et stickers", amount: 200 },
    { label: "Imprévus", amount: 210 },
  ] as readonly BudgetLine[],
} as const;
