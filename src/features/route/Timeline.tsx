type Milestone = {
  readonly dates: string;
  readonly place: string;
  readonly description: string;
};

type TimelineProps = {
  milestones: readonly Milestone[];
};

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <ol className="track-rail track-timeline max-w-text">
      {milestones.map((milestone, index) => {
        const isLast = index === milestones.length - 1;
        return (
          <li
            key={`${milestone.dates}-${milestone.place}`}
            className="relative pl-10"
          >
            {isLast ? null : (
              <span
                aria-hidden="true"
                className="track-line absolute bottom-0 left-[7px] top-5 border-l-[3px] border-dotted border-accent"
              />
            )}
            <span
              aria-hidden="true"
              className={`track-dot absolute left-0 top-2 size-4 rounded-full ${
                isLast ? "bg-poster-yellow" : "bg-ink"
              }`}
            />
            <div className={isLast ? "pb-0" : "pb-9"}>
              <p className="font-heading text-label uppercase text-accent">
                {milestone.dates}
              </p>
              <h3 className="mt-1 font-display text-4xl uppercase leading-none text-ink sm:text-5xl">
                {milestone.place}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">
                {milestone.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
