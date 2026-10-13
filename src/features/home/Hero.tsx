import Section from "@/components/ui/Section";
import Button, { ExternalButton } from "@/components/ui/Button";
import { EVENT } from "@/content/event";
import { SPONSORSHIP_DECK } from "@/content/sponsorship";
import { formatKilometres } from "@/lib/format";

/* Composition reprise de l'affiche du 4L Trophy : une accroche manuscrite inclinée,
   un titre géant empilé sur deux lignes, et un pavé de capitales grasses calé
   contre la première ligne (le « Entrez dans la légende » de l'affiche). Pas de
   bloc : tout repose sur le ciel du site (BackgroundScene.tsx). */
export default function Hero() {
  return (
    <Section>
      <div className="pt-4 sm:pt-8">
        <p className="eyebrow text-ink">
          4L Trophy 2027 · Dossier de sponsoring
        </p>

        {/* La taille du titre est posée sur le conteneur : ce qui s'y place en
            absolu se cale en `em`, donc toujours à l'échelle du titre. */}
        <div className="parallax relative mt-2 text-hero [--parallax-shift:-2.5rem]">
          <h1 className="font-display uppercase text-ink">
            <span className="block">Les</span>
            <span className="block">Farfadets</span>
          </h1>
          <div className="absolute left-[1.5em] top-[0.07em]">
            <p className="font-heading text-[max(0.16em,0.8rem)] font-black uppercase leading-[1.05] text-ink">
              <span className="block">
                {formatKilometres(EVENT.distanceKm)}
              </span>
              <span className="block">3 pays</span>
              <span className="block">{`${EVENT.days} jours`}</span>
            </p>
          </div>

          <p className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-ink">
            <span className="inline-block -rotate-2 font-script text-4xl sm:text-5xl">
              {`la ${EVENT.edition} édition`}
            </span>
            <span className="font-heading text-xl font-black uppercase leading-tight sm:text-3xl">
              {EVENT.dates}
            </span>
          </p>

          {/* Le texte d'introduction : les deux noms au pinceau, puis la phrase.
              Sur grand écran, il occupe la colonne laissée libre à droite du titre
              (large de 4,4 em environ), centré sur sa hauteur et calé sur la marge
              droite : son bord gauche, irrégulier, répond aux lettres du titre. */}
          <div className="mt-8 xl:absolute xl:right-0 xl:top-0 xl:mt-0 xl:flex xl:h-[1.6em] xl:w-[calc(100%-4.75em)] xl:max-w-[30rem] xl:flex-col xl:justify-center">
            <p className="max-w-text text-lg leading-relaxed text-ink xl:text-right xl:text-base 2xl:text-lg">
              <span className="mb-2 block origin-left -rotate-2 font-script text-3xl leading-tight sm:text-4xl xl:origin-right xl:text-3xl 2xl:text-4xl">
                Romain Poisson et Bastien Grangeon
              </span>
              prennent le départ du 4L Trophy, de Biarritz à Marrakech, en
              Renault 4L. Une aventure sportive, humaine et solidaire, que nous
              construisons avec des entreprises de notre territoire.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/sponsors">Devenir sponsor</Button>
        <ExternalButton href={SPONSORSHIP_DECK.href}>
          {`Télécharger le dossier de sponsoring (PDF, ${SPONSORSHIP_DECK.fileSize})`}
          <span className="sr-only"> — s&apos;ouvre dans un nouvel onglet</span>
        </ExternalButton>
      </div>
    </Section>
  );
}
