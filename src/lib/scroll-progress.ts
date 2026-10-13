/* Calculs des effets au scroll. Tout est exprimé en progression de 0 à 1, à partir
   de la position d'un élément dans la fenêtre : `top` et `height` viennent de
   `getBoundingClientRect()`. Fonctions pures, testées dans scroll-progress.test.ts. */

/* Part de la traversée de l'écran sur laquelle se joue une apparition. */
export const REVEAL_SHARE = 0.3;

export function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/* Traversée de l'écran : 0 quand l'élément entre par le bas, 1 quand il a fini de
   sortir par le haut. */
export function viewProgress(
  top: number,
  height: number,
  viewportHeight: number,
): number {
  return clamp((viewportHeight - top) / (viewportHeight + height));
}

/* Apparition : terminée dès que l'élément a parcouru `REVEAL_SHARE` de sa traversée. */
export function revealProgress(
  top: number,
  height: number,
  viewportHeight: number,
): number {
  return clamp(
    (viewportHeight - top) / (viewportHeight + height) / REVEAL_SHARE,
  );
}

/* Apparition pour le bas de page (pied de page) : terminée dès que l'élément est
   entièrement visible. `revealProgress` demande à l'élément de monter dans
   l'écran, ce que le bas de la page ne fait jamais. */
export function entryProgress(
  top: number,
  height: number,
  viewportHeight: number,
): number {
  return clamp(
    (viewportHeight - top) / Math.max(1, Math.min(height, viewportHeight)),
  );
}

/* Section épinglée à défilement horizontal : du moment où elle touche le haut de
   l'écran à celui où son bas atteint le bas de l'écran. Une section pas plus haute
   que l'écran n'est pas épinglée. */
export function trackProgress(
  top: number,
  height: number,
  viewportHeight: number,
): number {
  return height > viewportHeight ? clamp(-top / (height - viewportHeight)) : 0;
}

/* Avancée dans la page : 0 tout en haut, 1 tout en bas. Une page qui ne défile pas
   reste à 0. */
export function pageProgress(
  scrollY: number,
  scrollHeight: number,
  viewportHeight: number,
): number {
  const scrollRange = scrollHeight - viewportHeight;
  return scrollRange > 0 ? clamp(scrollY / scrollRange) : 0;
}

type Box = { left: number; top: number; width: number; height: number };

/* Position du centre du soleil vue depuis le coin haut-gauche d'un panneau : c'est
   là que le verre place son reflet. */
export function reflectionPoint(
  sun: Box,
  panel: Box,
): { x: number; y: number } {
  return {
    x: sun.left + sun.width / 2 - panel.left,
    y: sun.top + sun.height / 2 - panel.top,
  };
}
