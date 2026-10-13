type MarqueeProps = {
  words: readonly string[];
};

/* Bande décorative : de très grands mots au contour seul, qui glissent à
   l'horizontale quand on fait défiler la page (styles/scroll-effects.css, `.marquee`). Elle
   répète des informations déjà écrites ailleurs : masquée aux lecteurs d'écran. */
export default function Marquee({ words }: MarqueeProps) {
  const line = words.join(" · ");

  return (
    <div aria-hidden="true" className="overflow-hidden py-6">
      <p className="marquee outline-text whitespace-nowrap font-display text-[clamp(4rem,13vw,12rem)] uppercase leading-none">
        {`${line} · ${line} · ${line}`}
      </p>
    </div>
  );
}
