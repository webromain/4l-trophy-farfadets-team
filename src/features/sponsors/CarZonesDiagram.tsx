import { SPONSORSHIP_TIERS } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";
import Renault4Drawing, {
  CAR_GLASS as GLASS,
  CAR_OUTLINE as OUTLINE,
  CAR_SEAM as SEAM,
} from "@/components/ui/Renault4Drawing";
import { TierBadge } from "./TierCard";

const NIGHT = "var(--color-night)";

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
    <div className="reveal glass rounded-panel p-5">
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
          description="De l'avant vers l'arrière : zone C sur l'aile avant, zones B sur les deux portières, zone C sur l'aile arrière, et zones A sur les deux vitres arrière : celle de la porte arrière et la custode."
          caption="Profil : vitres arrière, portières et ailes"
        >
          <Renault4Drawing />
          <Zone letter="C" x={58} y={103} width={86} height={21} />
          <Zone letter="B" x={166} y={97} width={72} height={46} />
          <Zone letter="B" x={254} y={97} width={47} height={46} />
          <Zone letter="C" x={316} y={92} width={72} height={21} />
          <Zone letter="A" x={256} y={46} width={43} height={26} />
          <Zone letter="A" x={317} y={46} width={42} height={26} />
        </DiagramView>

        <div className="grid gap-5 sm:grid-cols-2">
          <DiagramView
            title="La 4L vue de dessus"
            description="Avant à gauche : zone D sur le capot, zone C sur le toit."
            caption="Dessus : capot et toit (avant à gauche)"
          >
            <rect x="25" y="46" width="8" height="118" rx="4" fill={NIGHT} />
            <rect x="407" y="46" width="8" height="118" rx="4" fill={NIGHT} />
            <rect x="158" y="20" width="12" height="7" rx="3" fill={NIGHT} />
            <rect x="158" y="183" width="12" height="7" rx="3" fill={NIGHT} />
            <path
              d="M60,31 L380,29 Q408,29 408,50 L408,160 Q408,181 380,181 L60,179 Q31,177 31,150 L31,60 Q31,33 60,31 Z"
              {...OUTLINE}
            />
            <path d="M150,34 Q142,105 150,176" {...SEAM} />
            <path d="M40,46 L146,42 M40,164 L146,168" {...SEAM} />
            <path d="M156,44 L192,50 L192,160 L156,166 Z" {...GLASS} />
            <rect
              x="192"
              y="44"
              width="180"
              height="122"
              rx="12"
              {...OUTLINE}
              strokeWidth="2.5"
            />
            <path d="M372,52 L390,56 L390,154 L372,158 Z" {...GLASS} />
            <Zone letter="D" x={50} y={62} width={88} height={86} />
            <Zone letter="C" x={212} y={62} width={140} height={86} />
          </DiagramView>

          <DiagramView
            title="La 4L vue de l'arrière"
            description="Zone A sur la vitre arrière."
            caption="Arrière : vitre arrière"
          >
            <rect x="140" y="136" width="17" height="62" rx="6" fill={NIGHT} />
            <rect x="283" y="136" width="17" height="62" rx="6" fill={NIGHT} />
            <path
              d="M136,166 L134,100 Q134,86 140,82 L154,34 Q157,21 175,20.5 L265,20.5 Q283,21 286,34 L300,82 Q306,86 306,100 L304,166 Q304,172 296,172 L144,172 Q136,172 136,166 Z"
              {...OUTLINE}
            />
            <path
              d="M152,160 L150,96 Q150,88 155,84 L166,36 M288,160 L290,96 Q290,88 285,84 L274,36"
              {...SEAM}
            />
            <rect x="166" y="34" width="108" height="46" rx="9" {...GLASS} />
            <rect
              x="137"
              y="100"
              width="9"
              height="26"
              rx="3"
              fill="var(--color-poster-red)"
            />
            <rect
              x="294"
              y="100"
              width="9"
              height="26"
              rx="3"
              fill="var(--color-poster-red)"
            />
            <rect
              x="194"
              y="116"
              width="52"
              height="16"
              rx="2"
              {...OUTLINE}
              strokeWidth="2"
            />
            <rect
              x="130"
              y="150"
              width="180"
              height="9"
              rx="4.5"
              fill={NIGHT}
            />
            <Zone letter="A" x={176} y={41} width={88} height={32} />
          </DiagramView>
        </div>
      </div>

      <h3 className="reveal mt-8 font-heading text-2xl font-bold text-ink">
        Légende des emplacements
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {SPONSORSHIP_TIERS.map((tier) => (
          <li key={tier.letter} className="reveal flex gap-3">
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
      <p className="reveal mt-6 max-w-text text-sm text-ink-soft">
        Schéma indicatif : les emplacements exacts seront ajustés à la 4L que
        nous achèterons grâce à nos premiers sponsors.
      </p>
    </div>
  );
}
