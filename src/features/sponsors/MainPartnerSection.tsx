import Section from "@/components/ui/Section";
import { SPONSORS, findMainPartner } from "@/content/sponsors";
import { MAIN_TIER } from "@/content/sponsorship";
import { formatEuros } from "@/lib/format";

export default function MainPartnerSection() {
  const mainPartner = findMainPartner(SPONSORS);

  return (
    <Section headingId="partenaire-principal">
      <div className="reveal glass rounded-panel p-6 sm:p-8">
        <h2 id="partenaire-principal" className="eyebrow text-accent">
          Partenaire principal
        </h2>
        {mainPartner ? (
          <p className="mt-3 font-display text-6xl uppercase text-ink">
            {mainPartner.name}
          </p>
        ) : (
          <p className="mt-3 max-w-text text-lg leading-relaxed text-ink">
            {`Cette place est encore libre. Elle comprend le capot de la 4L, une mise en avant ici même, et les photos du raid après l'arrivée, pour ${formatEuros(MAIN_TIER.amount)}.`}
          </p>
        )}
      </div>
    </Section>
  );
}
