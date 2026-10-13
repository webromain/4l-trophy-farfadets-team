import Section from "@/components/ui/Section";
import Button, { ExternalButton } from "@/components/ui/Button";
import { EVENT } from "@/content/event";
import { SPONSORSHIP_DECK } from "@/content/sponsorship";
import { formatKilometres } from "@/lib/format";

/* Composition reprise de l'affiche du 4L Trophy : une accroche manuscrite inclinée,
   un titre géant empilé sur deux lignes, et un pavé de capitales grasses calé
   contre la première ligne (le « Entrez dans la légende » de l'affiche). Rien
   d'autre que les dates, une phrase et les deux boutons : le détail vient plus
   bas dans la page. Pas de bloc : tout repose sur le ciel du site
   (BackgroundScene.tsx). */
export default function Hero() {
  return (
    <Section>
      <div className="pt-4 sm:pt-8">
        <p className="enter eyebrow text-ink">
          4L Trophy 2027 · Dossier de sponsoring
        </p>

        {/* La taille du titre est posée sur le conteneur : ce qui s'y place en
            absolu se cale en `em`, donc toujours à l'échelle du titre. Seul le
            titre a un parallaxe, assez court pour ne jamais toucher les dates :
            le texte et les boutons, eux, ne bougent pas les uns par rapport aux
            autres. */}
        <div className="parallax relative mt-2 text-hero [--parallax-shift:-1.25rem]">
          <h1 className="enter font-display uppercase text-ink [--enter-step:1]">
            <span className="block">Les</span>
            <span className="block">Farfadets</span>
          </h1>
          <div className="enter absolute left-[1.36em] top-[0.07em] [--enter-step:2]">
            <p className="font-heading text-[max(0.17em,0.875rem)] font-black uppercase leading-[1.05] text-ink">
              <span className="block">
                {formatKilometres(EVENT.distanceKm)}
              </span>
              <span className="block">3 pays</span>
              <span className="block">{`${EVENT.days} jours`}</span>
            </p>
          </div>
        </div>

        <p className="enter mt-6 font-heading text-xl font-black uppercase leading-tight text-ink [--enter-step:3] sm:text-3xl">
          {EVENT.dates}
        </p>
        <p className="enter mt-3 max-w-[52ch] text-lg leading-relaxed text-ink [--enter-step:4]">
          {`Romain Poisson et Catalin Stefanescu prennent le départ du 4L Trophy, de ${EVENT.start} à ${EVENT.finish}, en Renault 4L.`}
        </p>
      </div>
      <div className="enter mt-8 flex flex-wrap gap-4 [--enter-shift:0rem] [--enter-step:5]">
        <Button href="/sponsors">Devenir sponsor</Button>
        <ExternalButton href={SPONSORSHIP_DECK.href}>
          {`Le dossier en PDF (${SPONSORSHIP_DECK.fileSize})`}
          <span className="sr-only"> — s&apos;ouvre dans un nouvel onglet</span>
        </ExternalButton>
      </div>
    </Section>
  );
}
