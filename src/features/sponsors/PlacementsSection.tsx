import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import CarZonesDiagram from "./CarZonesDiagram";

export default function PlacementsSection() {
  return (
    <Section headingId="emplacements">
      <SectionTitle
        id="emplacements"
        eyebrow="Les emplacements"
        title="Votre logo sur notre 4L"
        lead="À chaque formule sa place sur la carrosserie."
      />
      <CarZonesDiagram />
    </Section>
  );
}
