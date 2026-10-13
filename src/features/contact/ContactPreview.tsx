import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function ContactPreview() {
  return (
    <Section headingId="contact">
      <SectionTitle
        id="contact"
        eyebrow="Contact"
        title="Parlons-en"
        lead="Vous souhaitez voir votre logo traverser le désert ? Un appel ou un rendez-vous suffit pour en discuter."
      />
      <div className="reveal flex flex-wrap gap-4">
        <Button href="/contact">Nous contacter</Button>
        <Button href="/nous-aider" variant="secondary">
          Aider autrement
        </Button>
      </div>
    </Section>
  );
}
