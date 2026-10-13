import type { BudgetLine } from "@/content/budget";

/* Le donut détaille les postes les plus lourds et regroupe tous les autres en une
   seule part. */
export const DETAILED_LINES = 4;

export function budgetSlices(lines: readonly BudgetLine[]) {
  const detailed = lines.slice(0, DETAILED_LINES);
  const othersTotal = lines
    .slice(DETAILED_LINES)
    .reduce((total, line) => total + line.amount, 0);
  return { detailed, othersTotal };
}
