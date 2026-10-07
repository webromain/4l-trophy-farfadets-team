type StatBlockProps = {
  chiffre: string;
  children: React.ReactNode;
};

export default function StatBlock({ chiffre, children }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-4 rounded-bloc bg-bleu-nuit p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
      <p className="font-condensed text-stat font-extrabold text-ocre">
        {chiffre}
      </p>
      <p className="max-w-[40ch] text-lg leading-snug text-papier">
        {children}
      </p>
    </div>
  );
}
