import { BUDGET } from "@/content/budget";
import { formatEuros } from "@/lib/format";
import { DETAILED_LINES, budgetSlices } from "./slices";

const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* Les couleurs du ciel au coucher du soleil, du sable au carmin, après le bleu
   nuit du plus gros poste : un jaune clair à sa place se confondait avec le
   sable. */
const DETAILED_COLORS = [
  "var(--color-night)",
  "var(--color-peach)",
  "var(--color-poster-orange)",
  "var(--color-vermilion)",
];
const OTHERS_COLOR = "var(--color-crimson)";

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

/* Pastille de la couleur de la part du donut : elle relie chaque ligne du tableau
   au graphique. Les postes regroupés partagent la même. Un SVG, pas un fond posé
   par `style` : la CSP à nonce (proxy.ts) bloquerait ce dernier. Le liseré clair
   garde les teintes sombres lisibles sur le verre. */
function SliceDot({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
      className="size-3.5 shrink-0"
    >
      <circle
        cx="6"
        cy="6"
        r="5.5"
        fill={index < DETAILED_LINES ? DETAILED_COLORS[index] : OTHERS_COLOR}
        stroke="var(--color-ink)"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function BudgetChart() {
  return (
    <div className="reveal glass flex flex-col gap-8 rounded-panel p-6 sm:p-8 lg:flex-row lg:items-start">
      <Donut />
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Budget prévisionnel du projet, poste par poste
        </caption>
        <thead>
          <tr className="border-b-2 border-ink">
            <th
              scope="col"
              className="py-2 font-heading text-lg font-extrabold uppercase tracking-[0.12em] text-ink"
            >
              Poste
            </th>
            <th
              scope="col"
              className="py-2 text-right font-heading text-lg font-extrabold uppercase tracking-[0.12em] text-ink"
            >
              Montant
            </th>
          </tr>
        </thead>
        <tbody>
          {BUDGET.lines.map((line, index) => (
            <tr key={line.label} className="border-b border-line">
              <th scope="row" className="py-3 pr-4 font-normal text-ink">
                <span className="flex items-center gap-3">
                  <SliceDot index={index} />
                  {line.label}
                </span>
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
