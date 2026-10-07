type Element = {
  readonly titre: string;
  readonly description: string;
};

type NumberedListProps = {
  elements: readonly Element[];
  /* Le book numérote « 01 » en rouge pour les arguments, « 1 » en terracotta pour les étapes. */
  format: "deux-chiffres" | "un-chiffre";
  /* Le niveau dépend de la page : sous un h1 seul, les entrées sont des h2. */
  niveau?: "h2" | "h3";
};

export default function NumberedList({
  elements,
  format,
  niveau = "h3",
}: NumberedListProps) {
  const deuxChiffres = format === "deux-chiffres";
  const Titre = niveau;
  const couleur = deuxChiffres ? "text-rouge-4l" : "text-terracotta";

  return (
    <ol className="border-t border-sable-fonce">
      {elements.map((element, index) => (
        <li
          key={element.titre}
          className="flex gap-5 border-b border-sable-fonce py-6 sm:gap-8"
        >
          <span
            aria-hidden="true"
            className={`font-condensed text-numeral font-extrabold ${couleur} shrink-0 tabular-nums`}
          >
            {deuxChiffres ? String(index + 1).padStart(2, "0") : index + 1}
          </span>
          <div className="max-w-texte">
            <Titre className="font-condensed text-xl font-bold text-bleu-nuit sm:text-2xl">
              {element.titre}
            </Titre>
            <p className="mt-1 leading-relaxed text-gris-texte">
              {element.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
