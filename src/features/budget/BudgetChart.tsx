import { BUDGET } from "@/content/budget";
import { formatEuros } from "@/lib/format";
import { budgetSlices } from "./slices";

const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const DETAILED_COLORS = [
  "var(--color-paper)",
  "var(--color-poster-yellow)",
  "var(--color-night)",
  "var(--color-poster-orange)",
];
const OTHERS_COLOR = "var(--color-peach)";

/* Le donut reprend le découpage du book : les postes les plus légers y sont
   regroupés. Le tableau ci-dessous reste l'équivalent textuel, poste par poste. */
const { detailed, othersTotal } = budgetSlices(BUDGET.lines);
const SLICES = [
  ...detailed.map((line, index) => ({
    amount: line.amount,
    color: DETAILED_COLORS[index],
  })),
  { amount: othersTotal, color: OTHERS_COLOR },
];

const SEGMENTS = SLICES.map((slice, index) => {
  const cumulative = SLICES.slice(0, index).reduce((t, p) => t + p.amount, 0);
  return {
    ...slice,
    length: (slice.amount / BUDGET.total) * CIRCUMFERENCE,
    offset: -(cumulative / BUDGET.total) * CIRCUMFERENCE,
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
          key={segment.amount}
          cx="80"
          cy="80"
          r={RADIUS}
          fill="none"
          stroke={segment.color}
          strokeWidth="24"
          strokeDasharray={`${segment.length} ${CIRCUMFERENCE - segment.length}`}
          strokeDashoffset={segment.offset}
          transform="rotate(-90 80 80)"
        />
      ))}
    </svg>
  );
}

export default function BudgetChart() {
  return (
    <div className="glass flex flex-col gap-8 rounded-panel p-6 sm:p-8 lg:flex-row lg:items-start">
      <Donut />
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Budget prévisionnel du projet, poste par poste
        </caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th
              scope="col"
              className="py-2 font-heading text-label uppercase text-ink"
            >
              Poste
            </th>
            <th
              scope="col"
              className="py-2 text-right font-heading text-label uppercase text-ink"
            >
              Montant
            </th>
          </tr>
        </thead>
        <tbody>
          {BUDGET.lines.map((line) => (
            <tr key={line.label} className="border-b border-line">
              <th scope="row" className="py-3 pr-4 font-normal text-ink">
                {line.label}
              </th>
              <td className="py-3 text-right font-semibold tabular-nums text-ink">
                {formatEuros(line.amount)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              className="py-4 font-heading text-2xl font-bold text-ink"
            >
              Total
            </th>
            <td className="py-4 text-right font-heading text-2xl font-extrabold tabular-nums text-accent">
              {formatEuros(BUDGET.total)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
