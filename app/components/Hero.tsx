import { EVENEMENT, kilometres } from "@/content/projet";

export default function Hero() {
  return (
    <div className="rounded-bloc bg-bleu-nuit px-6 py-10 sm:px-10 sm:py-14">
      <p className="font-condensed text-surtitre uppercase text-ocre">
        4L Trophy 2027 · Dossier de sponsoring
      </p>
      <h1 className="mt-3 font-condensed text-titre-page font-extrabold uppercase text-papier">
        Les Farfadets
      </h1>
      <div aria-hidden="true" className="mt-5 flex gap-1.5">
        <span className="h-1.5 w-20 bg-ocre" />
        <span className="h-1.5 w-10 bg-terracotta" />
        <span className="h-1.5 w-6 bg-rouge-4l" />
      </div>
      <p className="mt-5 font-condensed text-2xl font-bold text-ocre sm:text-3xl">
        {`${kilometres(EVENEMENT.distanceKm)} · 3 pays · ${EVENEMENT.jours} jours`}
      </p>
      <p className="mt-6 max-w-texte border-t border-papier/20 pt-6 text-lg leading-relaxed text-papier">
        Romain Poisson et Bastien Grangeon prennent le départ du 4L Trophy, de
        Biarritz à Marrakech, en Renault 4L. Une aventure sportive, humaine et
        solidaire, que nous construisons avec des entreprises de notre
        territoire.
      </p>
    </div>
  );
}
