import { euros, type Formule } from "@/content/projet";

export const COULEURS_ZONE = {
  A: "bg-ocre text-bleu-nuit",
  B: "bg-terracotta text-papier",
  C: "bg-bleu-schema text-papier",
  D: "bg-bleu-nuit text-papier",
} as const;

export function BadgeFormule({
  lettre,
  classeCouleur,
}: {
  lettre: Formule["lettre"];
  classeCouleur?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-badge font-condensed text-xl font-extrabold ${
        classeCouleur ?? COULEURS_ZONE[lettre]
      }`}
    >
      {lettre}
    </span>
  );
}

export default function FormulaCard({ formule }: { formule: Formule }) {
  const principale = formule.lettre === "D";

  return (
    <div
      className={`flex h-full flex-col rounded-bloc p-6 ${
        principale ? "bg-bleu-nuit" : "bg-sable"
      }`}
    >
      <div className="flex items-center gap-3">
        <BadgeFormule
          lettre={formule.lettre}
          classeCouleur={principale ? "bg-papier text-bleu-nuit" : undefined}
        />
        <h3
          className={`font-condensed text-2xl font-bold ${
            principale ? "text-papier" : "text-bleu-nuit"
          }`}
        >
          <span className="sr-only">{`Formule ${formule.lettre} : `}</span>
          {formule.nom}
        </h3>
      </div>

      <p
        className={`mt-4 font-condensed text-chiffre font-extrabold ${
          principale ? "text-ocre" : "text-rouge-4l"
        }`}
      >
        {euros(formule.montant)}
      </p>

      {formule.unique ? (
        <p className="mt-3 self-start rounded-badge bg-ocre px-2.5 py-1 font-condensed text-sm font-bold text-bleu-nuit">
          Un seul disponible
        </p>
      ) : null}

      <ul className="mt-5 space-y-3">
        {formule.contreparties.map((contrepartie) => (
          <li key={contrepartie} className="flex gap-3">
            <span
              aria-hidden="true"
              className={`mt-2 size-2 shrink-0 rounded-full ${
                principale ? "bg-ocre" : "bg-terracotta"
              }`}
            />
            <span className={principale ? "text-papier" : "text-bleu-nuit"}>
              {contrepartie}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
