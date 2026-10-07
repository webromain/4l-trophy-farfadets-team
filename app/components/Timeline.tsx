type Jalon = {
  readonly dates: string;
  readonly lieu: string;
  readonly description: string;
};

type TimelineProps = {
  jalons: readonly Jalon[];
};

export default function Timeline({ jalons }: TimelineProps) {
  return (
    <ol className="max-w-texte">
      {jalons.map((jalon, index) => {
        const dernier = index === jalons.length - 1;
        return (
          <li key={`${jalon.dates}-${jalon.lieu}`} className="relative pl-10">
            {dernier ? null : (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[7px] top-5 border-l-[3px] border-dotted border-rouge-4l"
              />
            )}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-2 size-4 rounded-full ${
                dernier ? "bg-rouge-4l" : "bg-bleu-nuit"
              }`}
            />
            <div className={dernier ? "pb-0" : "pb-9"}>
              <p className="font-condensed text-lg font-bold text-rouge-4l">
                {jalon.dates}
              </p>
              <h3 className="font-condensed text-xl font-bold text-bleu-nuit sm:text-2xl">
                {jalon.lieu}
              </h3>
              <p className="mt-1 leading-relaxed text-gris-texte">
                {jalon.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
