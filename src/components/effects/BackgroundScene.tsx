import styles from "./BackgroundScene.module.css";

/* La 4L de l'affiche, en silhouette, phare allumé. Profil repris de CarZonesDiagram,
   retourné pour rouler vers la droite, raccourci d'une vitre et coiffé d'une
   galerie chargée. */
function CarSilhouette() {
  return (
    <svg
      viewBox="20 10 516 172"
      className={`${styles.car} absolute bottom-[max(2.1vh,0.75rem)] left-0 h-[max(7vh,3rem)] w-auto text-night`}
    >
      <defs>
        <linearGradient id="headlight-beam" x1="1" x2="0">
          <stop
            offset="0"
            stopColor="var(--color-poster-yellow)"
            stopOpacity="0.7"
          />
          <stop
            offset="1"
            stopColor="var(--color-poster-yellow)"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
      <g transform="translate(386 0) scale(-1 1)">
        <polygon points="24,121 -140,88 -140,172" fill="url(#headlight-beam)" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M25,150 L25,122 Q25,110 38,107 L118,99 L148,56 Q152,48 164,48 L338,48 Q352,48 354,60 L361,118 L361,150 Z M158,58 L200,58 L200,94 L132,94 Z M208,58 h54 v36 h-54 Z M270,58 h70 v36 h-70 Z"
        />
        <rect
          x="176"
          y="38"
          width="158"
          height="6"
          rx="3"
          fill="currentColor"
        />
        <rect
          x="196"
          y="20"
          width="90"
          height="20"
          rx="4"
          fill="currentColor"
        />
        <rect
          x="294"
          y="26"
          width="30"
          height="14"
          rx="3"
          fill="currentColor"
        />
        <circle cx="105" cy="152" r="26" fill="currentColor" />
        <circle cx="296" cy="152" r="26" fill="currentColor" />
        <circle cx="30" cy="121" r="7" fill="var(--color-poster-yellow)" />
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
      <div className={`${styles.stars} absolute inset-0`} />
      <svg
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        className={`${styles.farDune} absolute bottom-0 left-0 h-[30vh] w-[140%] text-crimson opacity-90`}
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
