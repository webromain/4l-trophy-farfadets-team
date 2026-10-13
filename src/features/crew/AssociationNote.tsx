import { ASSOCIATION } from "@/content/crew";
import { formatEuros } from "@/lib/format";

export default function AssociationNote() {
  return (
    <div className="reveal mt-8 rounded-panel border-2 border-line p-6">
      <h2 className="font-heading text-2xl font-bold text-ink">
        Un projet porté par une association de l&apos;Efrei
      </h2>
      <p className="mt-2 max-w-text leading-relaxed text-ink">
        {`L'association ${ASSOCIATION.name} porte le projet et le soutient à hauteur de ${formatEuros(ASSOCIATION.grant)}.`}
      </p>
    </div>
  );
}
