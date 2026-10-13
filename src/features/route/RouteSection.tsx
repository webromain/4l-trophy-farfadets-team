import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import RouteTrack from "./RouteTrack";
import { EVENT } from "@/content/event";
import { formatKilometres } from "@/lib/format";

export default function RouteSection() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="De Biarritz à Marrakech"
        title="Le parcours"
        lead={`Environ ${formatKilometres(EVENT.distanceKm)} en douze jours, à travers trois pays : la France, l'Espagne et le Maroc.`}
      />
      <RouteTrack stagesHeading="Les étapes du raid" />
    </Section>
  );
}
