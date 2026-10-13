import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import StatBlock from "@/components/ui/StatBlock";
import BudgetChart from "./BudgetChart";
import { budgetSlices } from "./slices";
import { BUDGET } from "@/content/budget";
import { formatEuros } from "@/lib/format";

export default function BudgetSection() {
  return (
    <Section headingId="budget">
      <SectionTitle
        id="budget"
        eyebrow="Combien ça coûte"
        title="Budget prévisionnel"
      />
      <StatBlock figure={formatEuros(BUDGET.sponsorsGoal)}>
        {`à réunir auprès de nos partenaires. Budget total du projet : ${formatEuros(BUDGET.total)}, dont ${formatEuros(BUDGET.alreadyFunded)} déjà financés par la subvention de l'association de l'école.`}
      </StatBlock>
      <div className="mt-8">
        <BudgetChart />
      </div>
      <p className="mt-6 max-w-text text-sm text-ink-soft">
        Montants prévisionnels. Sur le graphique, les quatre postes les plus
        légers (assurance, équipements, communication, imprévus) sont regroupés
        : {formatEuros(budgetSlices(BUDGET.lines).othersTotal)} au total.
      </p>
    </Section>
  );
}
