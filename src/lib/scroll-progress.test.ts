import { describe, expect, it } from "vitest";
import {
  REVEAL_SHARE,
  clamp,
  pageProgress,
  reflectionPoint,
  revealProgress,
  trackProgress,
  viewProgress,
} from "./scroll-progress";

const VIEWPORT = 800;

describe("clamp", () => {
  it("borne une valeur entre 0 et 1", () => {
    expect(clamp(-0.5)).toBe(0);
    expect(clamp(0.4)).toBe(0.4);
    expect(clamp(3)).toBe(1);
  });
});

describe("viewProgress", () => {
  it("vaut 0 tant que l'élément est sous l'écran", () => {
    expect(viewProgress(VIEWPORT, 200, VIEWPORT)).toBe(0);
    expect(viewProgress(VIEWPORT + 500, 200, VIEWPORT)).toBe(0);
  });

  it("vaut 1 une fois l'élément sorti par le haut", () => {
    expect(viewProgress(-200, 200, VIEWPORT)).toBe(1);
    expect(viewProgress(-900, 200, VIEWPORT)).toBe(1);
  });

  it("vaut 0,5 quand l'élément est centré dans l'écran", () => {
    expect(viewProgress((VIEWPORT - 200) / 2, 200, VIEWPORT)).toBeCloseTo(0.5);
  });
});

describe("revealProgress", () => {
  it("part de 0 à l'entrée dans l'écran", () => {
    expect(revealProgress(VIEWPORT, 200, VIEWPORT)).toBe(0);
  });

  it("est terminée dès la part de traversée prévue, et le reste", () => {
    const top = VIEWPORT - REVEAL_SHARE * (VIEWPORT + 200);
    expect(revealProgress(top, 200, VIEWPORT)).toBeCloseTo(1);
    expect(revealProgress(top - 300, 200, VIEWPORT)).toBe(1);
  });

  it("avance plus vite que la traversée", () => {
    expect(revealProgress(700, 200, VIEWPORT)).toBeGreaterThan(
      viewProgress(700, 200, VIEWPORT),
    );
  });
});

describe("trackProgress", () => {
  const TRACK = 3 * VIEWPORT;

  it("reste à 0 avant que la section touche le haut de l'écran", () => {
    expect(trackProgress(120, TRACK, VIEWPORT)).toBe(0);
  });

  it("va de 0 à 1 pendant que la section est épinglée", () => {
    expect(trackProgress(0, TRACK, VIEWPORT)).toBe(0);
    expect(trackProgress(-VIEWPORT, TRACK, VIEWPORT)).toBeCloseTo(0.5);
    expect(trackProgress(-(TRACK - VIEWPORT), TRACK, VIEWPORT)).toBe(1);
  });

  it("n'épingle pas une section qui tient dans l'écran", () => {
    expect(trackProgress(-50, VIEWPORT, VIEWPORT)).toBe(0);
    expect(trackProgress(-50, 300, VIEWPORT)).toBe(0);
  });
});

describe("pageProgress", () => {
  it("va de 0 en haut de page à 1 tout en bas", () => {
    expect(pageProgress(0, 4000, VIEWPORT)).toBe(0);
    expect(pageProgress(1600, 4000, VIEWPORT)).toBeCloseTo(0.5);
    expect(pageProgress(3200, 4000, VIEWPORT)).toBe(1);
  });

  it("reste à 0, sans division par zéro, sur une page qui ne défile pas", () => {
    expect(pageProgress(0, VIEWPORT, VIEWPORT)).toBe(0);
    expect(pageProgress(0, 500, VIEWPORT)).toBe(0);
  });
});

describe("reflectionPoint", () => {
  const sun = { left: 900, top: 700, width: 200, height: 100 };

  it("donne le centre du soleil dans le repère du panneau", () => {
    const panel = { left: 100, top: 50, width: 400, height: 300 };
    expect(reflectionPoint(sun, panel)).toEqual({ x: 900, y: 700 });
  });

  it("devient négatif quand le soleil est au-dessus ou à gauche du panneau", () => {
    const panel = { left: 1200, top: 900, width: 400, height: 300 };
    const point = reflectionPoint(sun, panel);
    expect(point.x).toBeLessThan(0);
    expect(point.y).toBeLessThan(0);
  });
});
