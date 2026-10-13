import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StatBlock from "@/components/ui/StatBlock";
import NumberedList from "@/components/ui/NumberedList";
import {
  HIGHEST_TIER_AMOUNT,
  LOWEST_TIER_AMOUNT,
  REASONS,
} from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";

export default function ReasonsSection() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Ce que vous y gagnez"
        title="Pourquoi nous soutenir"
        lead="Votre entreprise gagne en visibilité, avant, pendant et après le raid. Et elle s'associe à un projet solidaire."
      />
      <NumberedList items={REASONS} format="two-digit" headingLevel="h2" />
      <div className="mt-10">
        <StatBlock figure={`Dès ${formatEuros(LOWEST_TIER_AMOUNT)}`}>
          Quatre formules, de {formatEuros(LOWEST_TIER_AMOUNT)} à{" "}
          {formatEuros(HIGHEST_TIER_AMOUNT)}. Chacune a sa place sur la
          carrosserie.
        </StatBlock>
      </div>
    </Section>
  );
}
