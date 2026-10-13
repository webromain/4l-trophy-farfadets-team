import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { IN_KIND_SUPPORT } from "@/content/sponsorship";

export default function InKindSupportSection() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="En nature ou par un don"
        title="Autres façons de nous aider"
        lead="Un soutien ne passe pas forcément par un chèque. Votre savoir-faire et votre matériel comptent tout autant."
      />

      <h2 className="reveal font-heading text-3xl font-black uppercase text-ink">
        Le partenariat en nature
      </h2>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2">
        {IN_KIND_SUPPORT.map((support) => (
          <li key={support.title} className="reveal glass rounded-panel p-6">
            <h3 className="font-heading text-xl font-bold text-ink">
              {support.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink">
              {support.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="reveal mt-6 max-w-text leading-relaxed text-ink">
        Dites-nous ce que vous pouvez apporter : nous verrons ensemble comment
        mettre votre entreprise en avant.
      </p>
    </Section>
  );
}
