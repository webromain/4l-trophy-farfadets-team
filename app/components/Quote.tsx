type QuoteProps = {
  citation: string;
  attribution: string;
};

export default function Quote({ citation, attribution }: QuoteProps) {
  return (
    <figure className="rounded-bloc bg-bleu-nuit p-6 sm:p-8">
      <blockquote>
        <p className="max-w-[34ch] font-citation text-2xl italic leading-snug text-papier sm:text-3xl">
          {`« ${citation} »`}
        </p>
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-ocre">
        {attribution}
      </figcaption>
    </figure>
  );
}
