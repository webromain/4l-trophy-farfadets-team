import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import SectionLink from "@/components/ui/SectionLink";
import { CREW } from "@/content/crew";

export default function CrewPreview() {
  return (
    <Section headingId="equipage">
      <SectionTitle
        id="equipage"
        eyebrow="Qui sommes-nous"
        title="L'équipage"
        lead="Deux amis passionnés d'automobile, un profil mécanique et un profil numérique."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          {CREW.map((member) => (
            <div key={member.name} className="mb-6">
              <p className="font-heading text-label uppercase text-accent">
                {member.role}
              </p>
              <h3 className="mt-1 font-display text-4xl uppercase text-ink sm:text-5xl">
                {`${member.firstName} ${member.name}`}
              </h3>
              <p className="mt-1 max-w-text leading-relaxed text-ink-soft">
                {member.bio[0]}
              </p>
            </div>
          ))}
          <SectionLink href="/equipage">Découvrir l&apos;équipage</SectionLink>
        </div>
        <PhotoPlaceholder
          label="Photo de l'équipage"
          caption="Romain et Bastien, photo pleine largeur, à fournir"
        />
      </div>
    </Section>
  );
}
