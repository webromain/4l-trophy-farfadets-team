type QuoteProps = {
  quote: string;
  attribution: string;
};

/* Pas de bloc : la citation est écrite au pinceau, en grand et de travers, à même
   le fond du site, entre guillemets français (espaces insécables). */
export default function Quote({ quote, attribution }: QuoteProps) {
  return (
    <figure className="reveal py-4">
      <blockquote>
        <p className="max-w-[22ch] origin-left -rotate-2 font-quote text-[clamp(2rem,5.5vw,4.75rem)] leading-[1.1] text-ink">
          {`«\u00a0${quote}\u00a0»`}
        </p>
      </blockquote>
      <figcaption className="mt-8 font-heading text-label uppercase text-ink">
        {attribution}
      </figcaption>
    </figure>
  );
}
