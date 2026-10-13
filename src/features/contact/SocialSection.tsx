import Section from "@/components/ui/Section";
import { ToCompleteInline } from "@/components/ui/ToComplete";
import { LABEL_CLASS } from "./label-class";
import { SOCIAL_LINKS } from "@/content/contact";

export default function SocialSection() {
  return (
    <Section headingId="reseaux">
      <h2
        id="reseaux"
        className="font-display text-section-title uppercase text-ink"
      >
        Suivez l&apos;aventure
      </h2>
      <div className="mt-6 space-y-6">
        <div>
          <p className={LABEL_CLASS}>Site web</p>
          <p className="mt-1">
            {SOCIAL_LINKS.website ?? (
              <ToCompleteInline label="adresse du site" />
            )}
          </p>
        </div>
        <div>
          <p className={LABEL_CLASS}>Instagram</p>
          <p className="mt-1">
            {SOCIAL_LINKS.instagram ?? (
              <ToCompleteInline label="compte Instagram" />
            )}
          </p>
        </div>
      </div>

      <p className="glass mt-10 max-w-text rounded-panel p-6 leading-relaxed text-ink">
        Ce site ne comporte pas de formulaire : aucune donnée personnelle
        n&apos;y est collectée ni hébergée. Un appel ou un courriel arrive plus
        vite à l&apos;équipage.
      </p>
    </Section>
  );
}
