import { describe, expect, it } from "vitest";
import {
  formatEuros,
  formatKilometres,
  formatNumber,
  formatPercent,
} from "./format";

const NBSP = "\u00a0";
const NARROW_NBSP = "\u202f";

describe("mise en forme des nombres", () => {
  it("sépare les milliers par une espace insécable classique", () => {
    expect(formatNumber(6000)).toBe(`6${NBSP}000`);
    expect(formatNumber(1200000)).toBe(`1${NBSP}200${NBSP}000`);
  });

  it("n'utilise jamais l'espace fine insécable du format français par défaut", () => {
    expect(formatNumber(11000)).not.toContain(NARROW_NBSP);
  });

  it("ne met pas de séparateur sous mille et arrondit à l'entier", () => {
    expect(formatNumber(150)).toBe("150");
    expect(formatNumber(1234.56)).toBe(`1${NBSP}235`);
  });

  it("colle l'unité au nombre par une espace insécable", () => {
    expect(formatEuros(2500)).toBe(`2${NBSP}500${NBSP}€`);
    expect(formatKilometres(6000)).toBe(`6${NBSP}000${NBSP}km`);
  });

  it("écrit les pourcentages avec une virgule et une espace insécable", () => {
    expect(formatPercent(60)).toBe(`60${NBSP}%`);
    expect(formatPercent(0.5)).toBe(`0,5${NBSP}%`);
  });
});
