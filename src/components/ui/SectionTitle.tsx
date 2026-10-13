type SectionTitleProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
  id?: string;
};

/* Le couple de l'affiche : une accroche manuscrite inclinée au-dessus d'un titre
   en très grandes capitales. */
export default function SectionTitle({
  eyebrow,
  title,
  lead,
  as = "h2",
  id,
}: SectionTitleProps) {
  const Heading = as;
  const sizeClass = as === "h1" ? "text-page-title" : "text-section-title";

  return (
    <div className={as === "h2" ? "reveal mb-10" : "mb-10"}>
      <p className="eyebrow text-accent">{eyebrow}</p>
      <Heading
        id={id}
        className={`mt-1 break-words font-display ${sizeClass} uppercase text-ink`}
      >
        {title}
      </Heading>
      {lead ? (
        <p className="mt-6 max-w-text text-lg leading-relaxed text-ink">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
