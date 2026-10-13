import {
  BODY_PATH,
  BUMPERS,
  HEADLIGHT,
  WHEEL_RADIUS,
  WHEELS,
  WINDOW_PATHS,
} from "@/components/ui/renault4-profile";
import styles from "./BackgroundScene.module.css";

/* La 4L de l'affiche, en silhouette, phare allumé : le profil de la berline
   (renault4-profile.ts), retourné pour rouler vers la droite et coiffé d'une
   galerie chargée, comme les voitures du raid. Les vitres sont évidées : on voit
   le ciel à travers. Le cadre s'étend à droite pour le faisceau du phare. */
const CAR_PATH = [BODY_PATH, ...WINDOW_PATHS].join(" ");

function CarSilhouette() {
  return (
    <svg
      viewBox="20 0 556 194"
      className={`${styles.car} absolute bottom-[max(2.1vh,0.75rem)] left-0 h-[max(7vh,3rem)] w-auto text-night`}
    >
      <defs>
        <linearGradient id="headlight-beam" x1="1" x2="0">
          <stop offset="0" stopColor="var(--color-sun)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--color-sun)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g transform="translate(439 0) scale(-1 1)">
        <polygon points="34,113 -130,80 -130,170" fill="url(#headlight-beam)" />
        <path fill="currentColor" fillRule="evenodd" d={CAR_PATH} />
        {BUMPERS.map((bumper) => (
          <rect key={bumper.x} {...bumper} rx="4" fill="currentColor" />
        ))}
        {WHEELS.map((wheel) => (
          <circle
            key={wheel.cx}
            {...wheel}
            r={WHEEL_RADIUS}
            fill="currentColor"
          />
        ))}
        {/* La galerie : sa barre, ses pieds, puis le chargement. */}
        <rect
          x="204"
          y="19"
          width="168"
          height="4"
          rx="2"
          fill="currentColor"
        />
        <path
          d="M214,21 v9 M290,21 v6 M362,21 v9"
          stroke="currentColor"
          strokeWidth="3"
        />
        <rect
          x="205"
          y="10"
          width="11"
          height="10"
          rx="3"
          fill="currentColor"
        />
        <rect x="222" y="5" width="70" height="15" rx="3" fill="currentColor" />
        <rect x="297" y="9" width="40" height="11" rx="3" fill="currentColor" />
        <rect x="342" y="3" width="21" height="17" rx="3" fill="currentColor" />
        <circle
          cx={HEADLIGHT.cx}
          cy={HEADLIGHT.cy}
          r="6"
          fill="var(--color-sun)"
        />
      </g>
    </svg>
  );
}

/* Le fond du site : le ciel de l'affiche du 4L Trophy, fixe derrière tout le
   contenu. Il évolue avec le défilement de la page — le soleil se couche, la nuit
   tombe, les dunes glissent et la 4L traverse l'écran, de la gauche en haut de la
   page à la droite tout en bas. Les animations sont dans BackgroundScene.module.css,
   pilotées par `--page-progress` (ScrollEffects.tsx). */
export default function BackgroundScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className={`${styles.sky} absolute inset-0`} />
      <div
        data-sun
        className={`${styles.sun} absolute -bottom-[32vh] left-[42%] h-[60vh] w-[min(90vw,64rem)]`}
      />
      <div className={`${styles.dusk} absolute inset-0`} />
      {/* Le disque du soleil : haut à droite en haut de la page, il se couche en
          arc de cercle vers la gauche et passe derrière les dunes, là où le ciel
          est le plus clair, à mesure qu'on descend. Placé au-dessus du
          crépuscule, qui le ternirait : il rougit de lui-même. */}
      <div
        className={`${styles.sunDisc} absolute size-[20vmin] -translate-x-1/2 -translate-y-1/2 rounded-full`}
      />
      <div className={`${styles.stars} absolute inset-0`} />
      <svg
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className={`${styles.farDune} absolute bottom-0 left-0 h-[30vh] w-[140%] text-crimson`}
      >
        <path
          fill="currentColor"
          d="M0 200V120C80 60 140 60 220 110S340 150 420 90S560 40 660 100S760 130 800 110V200Z"
        />
      </svg>
      <svg
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className={`${styles.nearDune} absolute bottom-0 left-0 h-[18vh] w-[160%] text-plum`}
      >
        <path
          fill="currentColor"
          d="M0 200V140C100 90 180 150 260 120S380 70 470 115S620 150 700 105S770 90 800 100V200Z"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-[max(2.6vh,1rem)] bg-night" />
      <CarSilhouette />
    </div>
  );
}
