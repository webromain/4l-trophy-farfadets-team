type PhotoPlaceholderProps = {
  libelle: string;
  legende: string;
  format?: "paysage" | "portrait";
};

/* Ce n'est pas une image : c'est un emplacement réservé. Le libellé repose sur un
   aplat sable, jamais sur une photo — la règle vaudra encore quand la vraie image
   remplacera l'aplat. */
export default function PhotoPlaceholder({
  libelle,
  legende,
  format = "paysage",
}: PhotoPlaceholderProps) {
  const hauteur = format === "portrait" ? "aspect-[3/4]" : "min-h-56 sm:min-h-72";

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-bloc border-2 border-dashed border-sable-fonce bg-sable p-6 text-center ${hauteur}`}
    >
      <p className="font-condensed text-xl font-bold text-bleu-nuit sm:text-2xl">
        {libelle}
      </p>
      <p className="mt-1 text-sm text-gris-texte">{legende}</p>
    </div>
  );
}
