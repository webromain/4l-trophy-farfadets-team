import Section from "@/components/ui/Section";
import ToComplete from "@/components/ui/ToComplete";
import { BUDGET } from "@/content/budget";
import { formatEuros } from "@/lib/format";

export default function DonationSection() {
  return (
    <Section headingId="don">
      <h2
        id="don"
        className="font-display text-section-title uppercase text-ink"
      >
        Le don
      </h2>
      <p className="mt-6 max-w-text text-lg leading-relaxed text-ink">
        Vous souhaitez simplement nous aider à partir ? Chaque don, quel que
        soit son montant, nous rapproche des {formatEuros(BUDGET.sponsorsGoal)}{" "}
        à réunir.
      </p>
      <div className="mt-8">
        <ToComplete label="cadre fiscal">
          <p>
            Ce bloc sera rédigé après confirmation par l&apos;association :
            possibilité ou non d&apos;un reçu fiscal, dispositif applicable et
            démarche à suivre pour l&apos;entreprise. Aucun chiffre n&apos;est
            annoncé tant que ce point n&apos;est pas validé.
          </p>
        </ToComplete>
      </div>
    </Section>
  );
}
