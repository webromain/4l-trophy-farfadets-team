import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionLink from "@/components/ui/SectionLink";
import { ASSOCIATION } from "@/content/crew";
import { DONATION_TAX_RULES } from "@/content/sponsorship";

/* Les deux régimes à ne pas confondre : une formule est une dépense de publicité,
   seul un don sans contrepartie ouvre droit à la réduction d'impôt. */
export default function TaxSection() {
  return (
    <Section headingId="impots">
      <SectionTitle
        id="impots"
        eyebrow="Fiscalité"
        title="Et côté impôts"
        lead="Une formule de partenariat est une dépense de publicité : votre entreprise la déduit de son résultat imposable, comme toute autre charge."
      />
      <p className="reveal max-w-text leading-relaxed text-ink">
        Vous préférez un don, sans logo sur la 4L ? Il ouvre droit à une
        réduction d&apos;impôt, pour une entreprise comme pour un particulier.
      </p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2">
        {DONATION_TAX_RULES.map((rule) => (
          <li key={rule.title} className="reveal glass rounded-panel p-6">
            <h3 className="font-heading text-xl font-bold text-ink">
              {rule.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink">{rule.description}</p>
          </li>
        ))}
      </ul>
      <p className="reveal mt-6 max-w-text leading-relaxed text-ink">
        {`L'association ${ASSOCIATION.name}, qui porte le projet, vous remet un reçu fiscal. Ces réductions concernent les dons faits sans contrepartie.`}
      </p>
      <SectionLink href="/nous-aider">
        Faire un don ou aider autrement
      </SectionLink>
    </Section>
  );
}
