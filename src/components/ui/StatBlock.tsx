type StatBlockProps = {
  figure: string;
  children: React.ReactNode;
};

export default function StatBlock({ figure, children }: StatBlockProps) {
  return (
    <div className="reveal glass glass-dark surface-dark flex flex-col gap-4 rounded-panel p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-10">
      <p className="font-display text-stat uppercase text-accent">{figure}</p>
      <p className="max-w-[40ch] text-lg leading-snug text-ink">{children}</p>
    </div>
  );
}
