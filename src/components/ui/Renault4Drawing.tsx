import {
  BODY_PATH,
  BUMPERS,
  DOOR_LINES,
  HEADLIGHT,
  WHEEL_RADIUS,
  WHEELS,
  WINDOW_PATHS,
} from "./renault4-profile";

const NIGHT = "var(--color-night)";

/* Carrosserie : le papier, cerné de bleu nuit. */
export const CAR_OUTLINE = {
  fill: "var(--color-paper)",
  stroke: NIGHT,
  strokeWidth: 3,
  strokeLinejoin: "round",
} as const;

/* Vitres : le bleu nuit, très dilué, sur le papier de la carrosserie. */
export const CAR_GLASS = {
  fill: NIGHT,
  fillOpacity: 0.16,
  stroke: NIGHT,
  strokeWidth: 2.5,
  strokeLinejoin: "round",
} as const;

/* Traits de carrosserie : portes, capot, hayon. */
export const CAR_SEAM = {
  fill: "none",
  stroke: NIGHT,
  strokeWidth: 1.5,
  strokeLinecap: "round",
} as const;

/* La 4L de profil, dessinée au trait, avant à gauche. À poser dans un `<svg>` de
   440 × 210 : le schéma des emplacements y ajoute ses zones, la page Parcours
   l'utilise seule en attendant la photo de la vraie voiture. */
export default function Renault4Drawing() {
  return (
    <g>
      <path d={BODY_PATH} {...CAR_OUTLINE} />
      {WINDOW_PATHS.map((d) => (
        <path key={d} d={d} {...CAR_GLASS} />
      ))}
      {DOOR_LINES.map((d) => (
        <path key={d} d={d} {...CAR_SEAM} />
      ))}
      <rect x="229" y="90" width="11" height="3" rx="1.5" fill={NIGHT} />
      <rect x="291" y="90" width="11" height="3" rx="1.5" fill={NIGHT} />
      {BUMPERS.map((bumper) => (
        <rect key={bumper.x} {...bumper} rx="4" fill={NIGHT} />
      ))}
      <circle
        cx={HEADLIGHT.cx}
        cy={HEADLIGHT.cy}
        r="5"
        fill="var(--color-sun)"
        stroke={NIGHT}
        strokeWidth="2"
      />
      <rect
        x="398"
        y="104"
        width="5"
        height="16"
        rx="2"
        fill="var(--color-poster-red)"
      />
      {WHEELS.map((wheel) => (
        <g key={wheel.cx}>
          <circle {...wheel} r={WHEEL_RADIUS} fill={NIGHT} />
          <circle {...wheel} r="13" fill="var(--color-paper)" />
          <circle {...wheel} r="4" fill={NIGHT} />
        </g>
      ))}
    </g>
  );
}
