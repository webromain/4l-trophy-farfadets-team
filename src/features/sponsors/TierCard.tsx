import type { SponsorshipTier } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";
import ReactiveCard from "@/components/ui/ReactiveCard";

export const ZONE_COLORS = {
  A: "bg-poster-yellow text-night",
  B: "bg-poster-orange text-night",
  C: "bg-poster-red text-paper",
  D: "bg-night text-paper",
} as const;

export function TierBadge({
  letter,
  colorClass,
}: {
  letter: SponsorshipTier["letter"];
  colorClass?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-badge font-heading text-xl font-extrabold ring-1 ring-ink/40 ${
        colorClass ?? ZONE_COLORS[letter]
      }`}
    >
      {letter}
    </span>
  );
}

export default function TierCard({ tier }: { tier: SponsorshipTier }) {
  /* La formule du partenaire principal se détache : verre fumé, liseré jaune et,
     par `surface-dark`, accent jaune. Les autres gardent l'accent du fond. */
  const isMain = tier.unique;

  return (
    <ReactiveCard
      className={`reveal glass flex h-full flex-col rounded-panel p-6 transition-[translate] duration-200 hover:-translate-y-1 ${
        isMain ? "glass-dark surface-dark border-2 border-poster-yellow" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <TierBadge
          letter={tier.letter}
          colorClass={isMain ? "bg-paper text-night" : undefined}
        />
        <h3 className="font-heading text-2xl font-extrabold text-ink">
          <span className="sr-only">{`Formule ${tier.letter} : `}</span>
          {tier.name}
        </h3>
      </div>

      <p className="mt-4 font-display text-figure text-accent">
        {formatEuros(tier.amount)}
      </p>

      {tier.unique ? (
        <p className="mt-3 self-start rounded-badge bg-poster-yellow px-2.5 py-1 font-heading text-sm font-bold text-night">
          Un seul disponible
        </p>
      ) : null}

      <ul className="mt-5 space-y-3">
        {tier.perks.map((perk) => (
          <li key={perk} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 size-2 shrink-0 rounded-full bg-accent"
            />
            <span className="text-ink">{perk}</span>
          </li>
        ))}
      </ul>
    </ReactiveCard>
  );
}
