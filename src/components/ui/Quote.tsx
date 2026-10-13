type QuoteProps = {
  quote: string;
  attribution: string;
};

/* Pas de bloc : la citation est écrite au pinceau, en grand et de travers, à même
   le fond du site. Pas de guillemets non plus : la police les dessine mal, et
   `blockquote` porte déjà le sens. */
export default function Quote({ quote, attribution }: QuoteProps) {
  return (
    <figure className="reveal py-4">
      <blockquote>
        <p className="max-w-[22ch] origin-left -rotate-2 font-script text-[clamp(2rem,5.5vw,4.75rem)] leading-[1.1] text-ink">
          {quote}
        </p>
      </blockquote>
      <figcaption className="mt-8 font-heading text-label uppercase text-ink">
        {attribution}
      </figcaption>
    </figure>
  );
}
