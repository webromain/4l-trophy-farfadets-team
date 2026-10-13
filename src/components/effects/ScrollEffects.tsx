"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  entryProgress,
  pageProgress,
  reflectionPoint,
  revealProgress,
  trackProgress,
  viewProgress,
} from "@/lib/scroll-progress";

/* Classe de l'élément → variable CSS qu'il reçoit et calcul de sa progression. */
const EFFECTS = [
  { className: "track", property: "--track-progress", progress: trackProgress },
  { className: "reveal", property: "--progress", progress: revealProgress },
  {
    className: "reveal-entry",
    property: "--progress",
    progress: entryProgress,
  },
  { className: "parallax", property: "--progress", progress: viewProgress },
  { className: "marquee", property: "--progress", progress: viewProgress },
] as const;

const SELECTOR = EFFECTS.map((effect) => `.${effect.className}`).join(", ");

/* Pilote les effets au scroll (styles/scroll-effects.css, styles/track.css et le
   fond du site) : calcule où en est chaque élément dans sa traversée de l'écran et
   pose cette progression (0 → 1) dans une variable CSS. Indique aussi à chaque
   panneau de verre où se trouve le soleil, pour son reflet (styles/glass.css).
   Tout passe par le CSSOM, pas par un attribut `style` : la CSP à nonce (proxy.ts)
   bloquerait ce dernier. */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = matchMedia("(prefers-reduced-motion: no-preference)");
    let frame = 0;

    function measure() {
      frame = 0;
      const viewportHeight = innerHeight;
      const targets = document.querySelectorAll<HTMLElement>(SELECTOR);

      /* Toutes les lectures d'abord, toutes les écritures ensuite : alterner les deux
         forcerait un recalcul de mise en page par élément. */
      const updates = Array.from(targets, (element) => {
        const { top, height } = element.getBoundingClientRect();
        const effect = EFFECTS.find(({ className }) =>
          element.classList.contains(className),
        )!;
        return {
          element,
          property: effect.property,
          value: effect.progress(top, height, viewportHeight),
        };
      });

      const sun = document.querySelector("[data-sun]")?.getBoundingClientRect();
      const reflections = sun
        ? Array.from(
            document.querySelectorAll<HTMLElement>(".glass"),
            (element) => ({
              element,
              ...reflectionPoint(sun, element.getBoundingClientRect()),
            }),
          )
        : [];

      /* `--page-progress` fait vivre le fond du site (BackgroundScene.tsx). */
      root.style.setProperty(
        "--page-progress",
        pageProgress(scrollY, root.scrollHeight, viewportHeight).toFixed(4),
      );
      for (const { element, property, value } of updates) {
        element.style.setProperty(property, value.toFixed(4));
      }
      for (const { element, x, y } of reflections) {
        element.style.setProperty("--sun-x", `${x.toFixed(1)}px`);
        element.style.setProperty("--sun-y", `${y.toFixed(1)}px`);
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    function syncMotionPreference() {
      root.classList.toggle("scroll-effects", motionQuery.matches);
      schedule();
    }

    syncMotionPreference();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    motionQuery.addEventListener("change", syncMotionPreference);

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      motionQuery.removeEventListener("change", syncMotionPreference);
    };
  }, [pathname]);

  return null;
}
