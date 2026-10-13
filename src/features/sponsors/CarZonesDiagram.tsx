import { SPONSORSHIP_TIERS } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";
import { TierBadge } from "./TierCard";

const OUTLINE = {
  fill: "var(--color-paper)",
  stroke: "var(--color-night)",
  strokeWidth: 3,
} as const;

const ZONE_FILL = {
  A: "var(--color-poster-yellow)",
  B: "var(--color-poster-orange)",
  C: "var(--color-poster-red)",
  D: "var(--color-night)",
} as const;

const ZONE_LETTER_FILL = {
  A: "var(--color-night)",
  B: "var(--color-night)",
  C: "var(--color-paper)",
  D: "var(--color-paper)",
} as const;

function Zone({
  letter,
  x,
  y,
  width,
  height,
}: {
  letter: keyof typeof ZONE_FILL;
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill={ZONE_FILL[letter]}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 7}
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill={ZONE_LETTER_FILL[letter]}
      >
        {letter}
      </text>
    </g>
  );
}

function DiagramView({
  title,
  description,
  caption,
  children,
}: {
  title: string;
  description: string;
  caption: string;
  children: React.ReactNode;
}) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div className="glass rounded-panel p-5">
      <svg
        viewBox="0 0 440 210"
        role="img"
        aria-labelledby={`${id}-t ${id}-d`}
        className="h-auto w-full"
      >
        <title id={`${id}-t`}>{title}</title>
        <desc id={`${id}-d`}>{description}</desc>
        {children}
      </svg>
      <p className="mt-2 text-center text-sm font-semibold text-ink-soft">
        {caption}
      </p>
    </div>
  );
}

export default function CarZonesDiagram() {
  return (
    <div>
      <div className="grid gap-5">
        <DiagramView
          title="La 4L vue de profil"
          description="De l'avant vers l'arrière : zone C sur l'aile avant, zones B sur les deux portières, zone C sur l'aile arrière et zone A sur la vitre arrière."
          caption="Profil : vitres arrière, portières et ailes"
        >
          <path
            d="M 25,150 L 25,122 Q 25,110 38,107 L 118,99 L 148,56 Q 152,48 164,48 L 402,48 Q 416,48 418,60 L 425,118 L 425,150 Z"
            {...OUTLINE}
          />
          <polygon points="158,58 200,58 200,94 132,94" {...OUTLINE} />
          <rect x="208" y="58" width="54" height="36" {...OUTLINE} />
          <rect x="270" y="58" width="56" height="36" {...OUTLINE} />
          <rect x="334" y="58" width="70" height="36" {...OUTLINE} />
          <circle cx="105" cy="152" r="25" fill="var(--color-night)" />
          <circle cx="105" cy="152" r="10" fill="var(--color-paper)" />
          <circle cx="360" cy="152" r="25" fill="var(--color-night)" />
          <circle cx="360" cy="152" r="10" fill="var(--color-paper)" />
          <Zone letter="C" x={55} y={108} width={90} height={22} />
          <Zone letter="B" x={165} y={104} width={80} height={42} />
          <Zone letter="B" x={257} y={104} width={56} height={42} />
          <Zone letter="C" x={325} y={102} width={88} height={22} />
          <Zone letter="A" x={338} y={62} width={62} height={28} />
        </DiagramView>

        <div className="grid gap-5 sm:grid-cols-2">
          <DiagramView
            title="La 4L vue de dessus"
            description="Avant à gauche : zone D sur le capot, zone C sur le toit."
            caption="Dessus : capot et toit (avant à gauche)"
          >
            <rect x="40" y="30" width="360" height="150" rx="40" {...OUTLINE} />
            <Zone letter="D" x={70} y={60} width={130} height={90} />
            <Zone letter="C" x={225} y={60} width={145} height={90} />
          </DiagramView>

          <DiagramView
            title="La 4L vue de l'arrière"
            description="Zone A sur la vitre arrière."
            caption="Arrière : vitre arrière"
          >
            <path
              d="M 130,175 L 130,60 Q 130,40 155,40 L 285,40 Q 310,40 310,60 L 310,175 Z"
              {...OUTLINE}
            />
            <Zone letter="A" x={155} y={60} width={130} height={55} />
            <rect x="185" y="135" width="70" height="22" rx="3" {...OUTLINE} />
          </DiagramView>
        </div>
      </div>

      <h3 className="mt-8 font-heading text-2xl font-bold text-ink">
        Légende des emplacements
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {SPONSORSHIP_TIERS.map((tier) => (
          <li key={tier.letter} className="flex gap-3">
            <TierBadge letter={tier.letter} />
            <div>
              <p className="font-semibold text-ink">
                {`${tier.letter} · ${tier.name} · ${formatEuros(tier.amount)}`}
              </p>
              <p className="text-ink-soft">{tier.placement}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-text text-sm text-ink-soft">
        Schéma indicatif : les emplacements exacts seront ajustés à la 4L que
        nous préparons.
      </p>
    </div>
  );
}
