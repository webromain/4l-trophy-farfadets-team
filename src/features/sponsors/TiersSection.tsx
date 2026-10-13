import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import TierCard from "./TierCard";
import { SPONSORSHIP_TIERS } from "@/content/sponsorship";

export default function TiersSection() {
  return (
    <Section headingId="formules">
      <SectionTitle
        id="formules"
        eyebrow="Quatre façons de nous rejoindre"
        title="Nos formules de partenariat"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {SPONSORSHIP_TIERS.map((tier) => (
          <TierCard key={tier.letter} tier={tier} />
        ))}
      </div>
    </Section>
  );
}
