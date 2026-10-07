type StatCardProps = {
  chiffre: string;
  legende: string;
};

export default function StatCard({ chiffre, legende }: StatCardProps) {
  return (
    <div className="rounded-bloc bg-sable p-6">
      <p className="font-condensed text-chiffre font-extrabold text-rouge-4l">
        {chiffre}
      </p>
      <p className="mt-3 text-base leading-snug text-bleu-nuit">{legende}</p>
    </div>
  );
}
