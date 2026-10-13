import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import NumberedList from "@/components/ui/NumberedList";
import SectionLink from "@/components/ui/SectionLink";
import { REASONS } from "@/content/sponsorship";

export default function ReasonsPreview() {
  return (
    <Section headingId="soutenir">
      <div className="track [--track-content:26rem]">
        <div className="track-frame grid lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-12">
          <SectionTitle
            id="soutenir"
            eyebrow="Ce que vous y gagnez"
            title="Pourquoi nous soutenir"
            lead="Votre entreprise gagne en visibilité, avant, pendant et après le raid. Et elle s'associe à un projet solidaire."
          />
          <div className="track-viewport">
            <NumberedList items={REASONS} format="two-digit" asTrack />
          </div>
        </div>
      </div>
      <SectionLink href="/sponsors">Voir les quatre formules</SectionLink>
    </Section>
  );
}
