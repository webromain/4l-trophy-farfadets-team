type PhotoPlaceholderProps = {
  label: string;
  caption: string;
  format?: "landscape" | "portrait";
};

/* Ce n'est pas une image : c'est un emplacement réservé. Le libellé repose sur un
   aplat sable, jamais sur une photo — la règle vaudra encore quand la vraie image
   remplacera l'aplat. */
export default function PhotoPlaceholder({
  label,
  caption,
  format = "landscape",
}: PhotoPlaceholderProps) {
  const heightClass =
    format === "portrait" ? "aspect-[3/4]" : "min-h-56 sm:min-h-72";

  return (
    <div
      className={`parallax flex flex-col items-center justify-center rounded-panel border-2 border-dashed border-line bg-ink/10 backdrop-blur-md p-6 text-center [--parallax-shift:1.5rem] ${heightClass}`}
    >
      <p className="font-heading text-xl font-bold text-ink sm:text-2xl">
        {label}
      </p>
      <p className="mt-1 text-sm text-ink-soft">{caption}</p>
    </div>
  );
}
