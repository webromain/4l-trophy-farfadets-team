import ReactiveCard from "./ReactiveCard";

type StatCardProps = {
  figure: string;
  caption: string;
};

export default function StatCard({ figure, caption }: StatCardProps) {
  return (
    <ReactiveCard className="reveal glass rounded-panel p-6 transition-[translate] duration-200 hover:-translate-y-1 sm:p-8">
      <p className="font-display text-figure uppercase text-accent">{figure}</p>
      <p className="mt-3 text-base font-semibold leading-snug text-ink">
        {caption}
      </p>
    </ReactiveCard>
  );
}
