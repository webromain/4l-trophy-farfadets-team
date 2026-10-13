import Section from "@/components/ui/Section";
import { BUDGET } from "@/content/budget";
import { ASSOCIATION } from "@/content/crew";
import { DONATION_TAX_RULES } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";

export default function DonationSection() {
  return (
    <Section headingId="don">
      <h2
        id="don"
        className="reveal font-display text-section-title uppercase text-ink"
      >
        Le don
      </h2>
      <p className="reveal mt-6 max-w-text text-lg leading-relaxed text-ink">
        Vous souhaitez simplement nous aider à partir ? Chaque don, quel que
        soit son montant, nous rapproche des {formatEuros(BUDGET.sponsorsGoal)}{" "}
        à réunir.
      </p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
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
      <p className="reveal mt-4 max-w-text leading-relaxed text-ink">
        Une formule de partenariat comporte, elle, une contrepartie : votre logo
        sur la 4L. C&apos;est une dépense de publicité, que votre entreprise
        déduit de son résultat imposable comme toute autre charge.
      </p>
      <p className="reveal mt-4 max-w-text text-sm text-ink-soft">
        Taux et plafonds prévus par les articles 200 et 238 bis du Code général
        des impôts.
      </p>
    </Section>
  );
}
