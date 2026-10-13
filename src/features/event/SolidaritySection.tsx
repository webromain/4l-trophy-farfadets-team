import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import NumberedList from "@/components/ui/NumberedList";
import Quote from "@/components/ui/Quote";
import { SOLIDARITY_STEPS } from "@/content/event";

export default function SolidaritySection() {
  return (
    <Section headingId="solidaire">
      <SectionTitle
        id="solidaire"
        eyebrow="La mission"
        title="Une aventure solidaire"
        lead="Le 4L Trophy n'est pas qu'un raid. Chaque équipage emporte dans sa 4L des fournitures scolaires et sportives pour les enfants du sud marocain."
      />
      <NumberedList items={SOLIDARITY_STEPS} format="one-digit" />
      <div className="mt-10">
        <Quote
          quote="Nous voulons vivre cette aventure, et nous voulons qu'elle soit utile."
          attribution="Romain et Catalin"
        />
      </div>
    </Section>
  );
}
