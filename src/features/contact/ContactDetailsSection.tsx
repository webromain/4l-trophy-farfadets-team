import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import GroupPhoto from "@/components/ui/GroupPhoto";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { ToCompleteInline } from "@/components/ui/ToComplete";
import EmailLink from "./EmailLink";
import { LABEL_CLASS } from "./label-class";
import { CONTACTS } from "@/content/contact";
import { CREW_PORTRAITS } from "@/content/crew";

export default function ContactDetailsSection() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Contact"
        title="Parlons-en"
        lead="Vous souhaitez voir votre logo traverser le désert ? Un appel ou un rendez-vous suffit pour en discuter."
      />
      <GroupPhoto
        name="equipage"
        alt="Romain et Catalin, l'équipage des Farfadets"
        portraits={CREW_PORTRAITS}
        fallback={
          <PhotoPlaceholder
            label="Photo de l'équipage"
            caption="Romain et Catalin, photo pleine largeur, à fournir"
          />
        }
      />

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {CONTACTS.map((person) => (
          <div key={person.firstName} className="reveal">
            <h2 className="font-heading text-2xl font-bold text-ink">
              {person.firstName}
            </h2>

            {person.phone === undefined ? null : (
              <>
                <p className={`mt-4 ${LABEL_CLASS}`}>Téléphone</p>
                {person.phone ? (
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4 transition-colors duration-200 hover:text-ink"
                  >
                    {person.phone}
                  </a>
                ) : (
                  <p className="mt-1">
                    <ToCompleteInline
                      label={`téléphone de ${person.firstName}`}
                    />
                  </p>
                )}
              </>
            )}

            <p className={`mt-4 ${LABEL_CLASS}`}>E-mail</p>
            {person.email ? (
              <EmailLink email={person.email} />
            ) : (
              <p className="mt-1">
                <ToCompleteInline label={`e-mail de ${person.firstName}`} />
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
