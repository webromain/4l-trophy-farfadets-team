type IllustrationProps = {
  /* Identifiant du titre du dessin : unique dans la page. */
  id: string;
  /* Ce que montre le dessin, pour les lecteurs d'écran. */
  title: string;
  /* La phrase affichée sous le dessin : pourquoi il n'y a pas encore de photo. */
  caption: string;
  children: React.ReactNode;
};

/* Un dessin qui tient la place d'une photo pas encore prise, dans un encadré de
   verre, avec la phrase qui dit pourquoi. Le dessin se compose dans un cadre de
   440 × 210, sol à y = 189. */
export default function Illustration({
  id,
  title,
  caption,
  children,
}: IllustrationProps) {
  return (
    <figure className="reveal glass rounded-panel p-6 sm:p-8">
      <svg
        viewBox="0 0 440 210"
        role="img"
        aria-labelledby={id}
        className="mx-auto h-auto w-full max-w-3xl"
      >
        <title id={id}>{title}</title>
        {children}
      </svg>
      <figcaption className="mt-4 text-center leading-relaxed text-ink">
        {caption}
      </figcaption>
    </figure>
  );
}
