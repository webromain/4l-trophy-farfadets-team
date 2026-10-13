import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StatBlock from "@/components/ui/StatBlock";
import StatCard from "@/components/ui/StatCard";
import { KEY_FIGURES, EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export default function EventSummarySection() {
  return (
    <Section headingId="chiffres">
      <SectionTitle
        id="chiffres"
        eyebrow="L'événement"
        title="Le 4L Trophy en bref"
        lead="Un raid réservé aux 18-28 ans, au volant d'une Renault 4L. Ici, pas de course de vitesse : le classement se joue à l'orientation, à la boussole et au road-book."
      />
      <StatBlock figure={formatKilometres(EVENT.distanceKm)}>
        environ, de Biarritz à Marrakech, à travers la France, l&apos;Espagne et
        le Maroc.
      </StatBlock>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {KEY_FIGURES.map((figure) => (
          <StatCard
            key={figure.value}
            figure={figure.value}
            caption={figure.caption}
          />
        ))}
      </div>
    </Section>
  );
}
