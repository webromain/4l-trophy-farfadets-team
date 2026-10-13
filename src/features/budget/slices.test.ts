import { describe, expect, it } from "vitest";
import { BUDGET } from "@/content/budget";
import { DETAILED_LINES, budgetSlices } from "./slices";

describe("parts du graphique de budget", () => {
  it("détaille les premiers postes et regroupe les autres", () => {
    const lines = [5, 4, 3, 2, 1, 1, 1].map((amount, index) => ({
      label: `Poste ${index}`,
      amount,
    }));
    const { detailed, othersTotal } = budgetSlices(lines);
    expect(detailed).toEqual(lines.slice(0, DETAILED_LINES));
    expect(othersTotal).toBe(3);
  });

  it("ne perd aucun euro : les parts du vrai budget font le total", () => {
    const { detailed, othersTotal } = budgetSlices(BUDGET.lines);
    const sum = detailed.reduce((total, line) => total + line.amount, 0);
    expect(sum + othersTotal).toBe(BUDGET.total);
  });

  it("détaille bien les postes les plus lourds", () => {
    const { detailed } = budgetSlices(BUDGET.lines);
    const smallestDetailed = Math.min(...detailed.map((line) => line.amount));
    const others = BUDGET.lines.slice(DETAILED_LINES);
    expect(others.every((line) => line.amount <= smallestDetailed)).toBe(true);
  });
});
