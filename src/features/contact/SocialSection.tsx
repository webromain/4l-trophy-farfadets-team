import Section from "@/components/ui/Section";
import { ToCompleteInline } from "@/components/ui/ToComplete";
import { LABEL_CLASS } from "./label-class";
import { SOCIAL_LINKS } from "@/content/contact";

export default function SocialSection() {
  return (
    <Section headingId="reseaux">
      <h2
        id="reseaux"
        className="reveal font-display text-section-title uppercase text-ink"
      >
        Suivez l&apos;aventure
      </h2>
      <div className="reveal mt-6 space-y-6">
        <div>
          <p className={LABEL_CLASS}>Site web</p>
          <a
            href={SOCIAL_LINKS.website}
            className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            {SOCIAL_LINKS.website.replace("https://", "")}
          </a>
        </div>
        <div>
          <p className={LABEL_CLASS}>Instagram</p>
          {SOCIAL_LINKS.instagram ? (
            <a
              href={`https://www.instagram.com/${SOCIAL_LINKS.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              {`@${SOCIAL_LINKS.instagram}`}
              <span className="sr-only">
                {" "}
                — s&apos;ouvre dans un nouvel onglet
              </span>
            </a>
          ) : (
            <p className="mt-1">
              <ToCompleteInline label="compte Instagram" />
            </p>
          )}
        </div>
      </div>

      <p className="reveal glass mt-10 max-w-text rounded-panel p-6 leading-relaxed text-ink">
        Ce site ne comporte pas de formulaire : vous n&apos;y saisissez aucune
        donnée personnelle. Un appel ou un courriel arrive plus vite à
        l&apos;équipage.
      </p>
    </Section>
  );
}
