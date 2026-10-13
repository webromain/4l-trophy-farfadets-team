import Section from "@/components/ui/Section";
import Button, { ExternalButton } from "@/components/ui/Button";
import { SPONSORSHIP_DECK } from "@/content/sponsorship";

export default function NextStepsSection() {
  return (
    <Section headingId="suite">
      <h2
        id="suite"
        className="reveal font-display text-section-title uppercase text-ink"
      >
        La suite
      </h2>
      <p className="reveal mt-6 max-w-text text-lg leading-relaxed text-ink">
        Une formule vous intéresse, ou vous préférez nous aider autrement ?
        Écrivez-nous, nous en discutons.
      </p>
      <div className="reveal mt-8 flex flex-wrap gap-4">
        <Button href="/contact">Nous contacter</Button>
        <Button href="/nous-aider" variant="secondary">
          Aider autrement
        </Button>
        <ExternalButton href={SPONSORSHIP_DECK.href}>
          {`Télécharger le dossier de sponsoring (PDF, ${SPONSORSHIP_DECK.fileSize})`}
          <span className="sr-only"> — s&apos;ouvre dans un nouvel onglet</span>
        </ExternalButton>
      </div>
    </Section>
  );
}
