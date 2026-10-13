import Section from "@/components/ui/Section";
import StatBlock from "@/components/ui/StatBlock";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function OrienteeringSection() {
  return (
    <Section headingId="chrono">
      <h2 id="chrono" className="sr-only">
        Un classement à l&apos;orientation
      </h2>
      <StatBlock figure="Pas de chrono">
        Le classement repose sur l&apos;orientation, pas sur la vitesse : une
        boussole, un road-book et le bon cap.
      </StatBlock>
      <div className="mt-8">
        <PhotoPlaceholder
          label="Photo de la 4L"
          caption="Photo d'ambiance pleine largeur, à fournir"
        />
      </div>
    </Section>
  );
}
