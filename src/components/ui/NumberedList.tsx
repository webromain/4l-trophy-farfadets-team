type NumberedItem = {
  readonly title: string;
  readonly description: string;
};

type NumberedListProps = {
  items: readonly NumberedItem[];
  /* « 01 » pour les arguments, « 1 » pour les étapes. */
  format: "two-digit" | "one-digit";
  /* Le niveau dépend de la page : sous un h1 seul, les entrées sont des h2. */
  headingLevel?: "h2" | "h3";
  /* Dans une `.track`, la liste défile à l'horizontale sous forme de cartes (styles/track.css). */
  asTrack?: boolean;
};

export default function NumberedList({
  items,
  format,
  headingLevel = "h3",
  asTrack = false,
}: NumberedListProps) {
  const twoDigits = format === "two-digit";
  const Heading = headingLevel;

  return (
    <ol
      className={`border-t border-line ${asTrack ? "track-rail track-cards" : ""}`}
    >
      {items.map((element, index) => (
        <li
          key={element.title}
          className="reveal flex gap-5 border-b border-line py-6 sm:gap-8"
        >
          <span
            aria-hidden="true"
            className="parallax shrink-0 font-display text-numeral tabular-nums text-accent [--parallax-shift:0.75rem]"
          >
            {twoDigits ? String(index + 1).padStart(2, "0") : index + 1}
          </span>
          <div className="max-w-text">
            <Heading className="font-heading text-xl font-extrabold text-ink sm:text-2xl">
              {element.title}
            </Heading>
            <p className="mt-1 leading-relaxed text-ink-soft">
              {element.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
