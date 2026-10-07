import { BUDGET, euros } from "@/content/projet";

const RAYON = 60;
const CIRCONFERENCE = 2 * Math.PI * RAYON;

/* Le donut reprend le découpage du book : les quatre postes les plus légers y sont
   regroupés. Le tableau ci-dessous reste l'équivalent textuel, poste par poste. */
const PARTS = [
  { montant: 3690, couleur: "var(--color-rouge-4l)" },
  { montant: 3000, couleur: "var(--color-bleu-schema)" },
  { montant: 1800, couleur: "var(--color-ocre)" },
  { montant: 1200, couleur: "var(--color-terracotta)" },
  { montant: 1310, couleur: "var(--color-sable-fonce)" },
] as const;

const SEGMENTS = PARTS.map((part, index) => {
  const cumul = PARTS.slice(0, index).reduce((t, p) => t + p.montant, 0);
  return {
    ...part,
    longueur: (part.montant / BUDGET.total) * CIRCONFERENCE,
    decalage: -(cumul / BUDGET.total) * CIRCONFERENCE,
  };
});

function Donut() {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      focusable="false"
      className="size-44 shrink-0"
    >
      {SEGMENTS.map((segment) => (
        <circle
          key={segment.montant}
          cx="80"
          cy="80"
          r={RAYON}
          fill="none"
          stroke={segment.couleur}
          strokeWidth="24"
          strokeDasharray={`${segment.longueur} ${CIRCONFERENCE - segment.longueur}`}
          strokeDashoffset={segment.decalage}
          transform="rotate(-90 80 80)"
        />
      ))}
    </svg>
  );
}

export default function BudgetChart() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <Donut />
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Budget prévisionnel du projet, poste par poste
        </caption>
        <thead>
          <tr className="border-b-2 border-bleu-nuit">
            <th
              scope="col"
              className="py-2 font-condensed text-surtitre uppercase text-bleu-nuit"
            >
              Poste
            </th>
            <th
              scope="col"
              className="py-2 text-right font-condensed text-surtitre uppercase text-bleu-nuit"
            >
              Montant
            </th>
          </tr>
        </thead>
        <tbody>
          {BUDGET.postes.map((ligne) => (
            <tr key={ligne.poste} className="border-b border-sable-fonce">
              <th scope="row" className="py-3 pr-4 font-normal text-bleu-nuit">
                {ligne.poste}
              </th>
              <td className="py-3 text-right font-semibold tabular-nums text-bleu-nuit">
                {euros(ligne.montant)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              className="py-4 font-condensed text-2xl font-bold text-bleu-nuit"
            >
              Total
            </th>
            <td className="py-4 text-right font-condensed text-2xl font-extrabold tabular-nums text-rouge-4l">
              {euros(BUDGET.total)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
