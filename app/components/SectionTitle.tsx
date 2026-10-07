type SectionTitleProps = {
  surtitre: string;
  titre: string;
  chapo?: string;
  as?: "h1" | "h2";
  id?: string;
};

export default function SectionTitle({
  surtitre,
  titre,
  chapo,
  as = "h2",
  id,
}: SectionTitleProps) {
  const Titre = as;
  const taille = as === "h1" ? "text-titre-page" : "text-titre-section";

  return (
    <div className="mb-8">
      <p className="font-condensed text-surtitre uppercase text-rouge-4l">
        {surtitre}
      </p>
      <Titre
        id={id}
        className={`mt-2 font-condensed ${taille} font-extrabold uppercase text-bleu-nuit`}
      >
        {titre}
      </Titre>
      <div className="mt-4 h-1.5 w-[85px] bg-terracotta" />
      {chapo ? (
        <p className="mt-6 max-w-texte text-lg leading-relaxed text-bleu-nuit">
          {chapo}
        </p>
      ) : null}
    </div>
  );
}
