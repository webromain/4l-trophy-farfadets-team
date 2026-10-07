import { euros, FORMULES } from "@/content/projet";
import { BadgeFormule } from "./FormulaCard";

const TRAIT = {
  fill: "var(--color-papier)",
  stroke: "var(--color-bleu-nuit)",
  strokeWidth: 3,
} as const;

const ZONE = {
  A: "var(--color-ocre)",
  B: "var(--color-terracotta)",
  C: "var(--color-bleu-schema)",
  D: "var(--color-bleu-nuit)",
} as const;

const LETTRE = {
  A: "var(--color-bleu-nuit)",
  B: "var(--color-papier)",
  C: "var(--color-papier)",
  D: "var(--color-papier)",
} as const;

function Zone({
  lettre,
  x,
  y,
  largeur,
  hauteur,
}: {
  lettre: keyof typeof ZONE;
  x: number;
  y: number;
  largeur: number;
  hauteur: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={largeur}
        height={hauteur}
        rx="4"
        fill={ZONE[lettre]}
      />
      <text
        x={x + largeur / 2}
        y={y + hauteur / 2 + 7}
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill={LETTRE[lettre]}
      >
        {lettre}
      </text>
    </g>
  );
}

function Vue({
  titre,
  description,
  legende,
  children,
}: {
  titre: string;
  description: string;
  legende: string;
  children: React.ReactNode;
}) {
  const id = titre.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div className="rounded-bloc bg-sable p-5">
      <svg
        viewBox="0 0 440 210"
        role="img"
        aria-labelledby={`${id}-t ${id}-d`}
        className="h-auto w-full"
      >
        <title id={`${id}-t`}>{titre}</title>
        <desc id={`${id}-d`}>{description}</desc>
        {children}
      </svg>
      <p className="mt-2 text-center text-sm font-semibold text-gris-texte">
        {legende}
      </p>
    </div>
  );
}

export default function SchemaZones4L() {
  return (
    <div>
      <div className="grid gap-5">
        <Vue
          titre="La 4L vue de profil"
          description="De l'avant vers l'arrière : zone C sur l'aile avant, zones B sur les deux portières, zone C sur l'aile arrière et zone A sur la vitre arrière."
          legende="Profil : vitres arrière, portières et ailes"
        >
          <path
            d="M 25,150 L 25,122 Q 25,110 38,107 L 118,99 L 148,56 Q 152,48 164,48 L 402,48 Q 416,48 418,60 L 425,118 L 425,150 Z"
            {...TRAIT}
          />
          <polygon points="158,58 200,58 200,94 132,94" {...TRAIT} />
          <rect x="208" y="58" width="54" height="36" {...TRAIT} />
          <rect x="270" y="58" width="56" height="36" {...TRAIT} />
          <rect x="334" y="58" width="70" height="36" {...TRAIT} />
          <circle cx="105" cy="152" r="25" fill="var(--color-bleu-nuit)" />
          <circle cx="105" cy="152" r="10" fill="var(--color-sable-fonce)" />
          <circle cx="360" cy="152" r="25" fill="var(--color-bleu-nuit)" />
          <circle cx="360" cy="152" r="10" fill="var(--color-sable-fonce)" />
          <Zone lettre="C" x={55} y={108} largeur={90} hauteur={22} />
          <Zone lettre="B" x={165} y={104} largeur={80} hauteur={42} />
          <Zone lettre="B" x={257} y={104} largeur={56} hauteur={42} />
          <Zone lettre="C" x={325} y={102} largeur={88} hauteur={22} />
          <Zone lettre="A" x={338} y={62} largeur={62} hauteur={28} />
        </Vue>

        <div className="grid gap-5 sm:grid-cols-2">
          <Vue
            titre="La 4L vue de dessus"
            description="Avant à gauche : zone D sur le capot, zone C sur le toit."
            legende="Dessus : capot et toit (avant à gauche)"
          >
            <rect x="40" y="30" width="360" height="150" rx="40" {...TRAIT} />
            <Zone lettre="D" x={70} y={60} largeur={130} hauteur={90} />
            <Zone lettre="C" x={225} y={60} largeur={145} hauteur={90} />
          </Vue>

          <Vue
            titre="La 4L vue de l'arrière"
            description="Zone A sur la vitre arrière."
            legende="Arrière : vitre arrière"
          >
            <path
              d="M 130,175 L 130,60 Q 130,40 155,40 L 285,40 Q 310,40 310,60 L 310,175 Z"
              {...TRAIT}
            />
            <Zone lettre="A" x={155} y={60} largeur={130} hauteur={55} />
            <rect x="185" y="135" width="70" height="22" rx="3" {...TRAIT} />
          </Vue>
        </div>
      </div>

      <h3 className="mt-8 font-condensed text-2xl font-bold text-bleu-nuit">
        Légende des emplacements
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {FORMULES.map((formule) => (
          <li key={formule.lettre} className="flex gap-3">
            <BadgeFormule lettre={formule.lettre} />
            <div>
              <p className="font-semibold text-bleu-nuit">
                {`${formule.lettre} · ${formule.nom} · ${euros(formule.montant)}`}
              </p>
              <p className="text-gris-texte">{formule.emplacement}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-texte text-sm text-gris-texte">
        Schéma indicatif : les emplacements exacts seront ajustés à la 4L que
        nous préparons.
      </p>
    </div>
  );
}
