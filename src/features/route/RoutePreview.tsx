import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionLink from "@/components/ui/SectionLink";
import RouteTrack from "./RouteTrack";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export default function RoutePreview() {
  return (
    <Section headingId="parcours">
      <SectionTitle
        id="parcours"
        eyebrow="De Biarritz à Marrakech"
        title="Le parcours"
        lead={`Environ ${formatKilometres(EVENT.distanceKm)} en douze jours, à travers trois pays : la France, l'Espagne et le Maroc.`}
      />
      <RouteTrack />
      <SectionLink href="/parcours">
        Voir le parcours étape par étape
      </SectionLink>
    </Section>
  );
}
