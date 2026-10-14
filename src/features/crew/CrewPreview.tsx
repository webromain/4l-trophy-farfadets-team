import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import GroupPhoto from "@/components/ui/GroupPhoto";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import SectionLink from "@/components/ui/SectionLink";
import { CREW, CREW_PORTRAITS } from "@/content/crew";

export default function CrewPreview() {
  return (
    <Section headingId="equipage">
      <SectionTitle
        id="equipage"
        eyebrow="Qui sommes-nous"
        title="L'équipage"
        lead="Deux amis passionnés d'automobile et d'informatique, un profil industriel et un profil numérique."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          {CREW.map((member) => (
            <div key={member.name} className="reveal mb-6">
              <p className="font-heading text-label uppercase text-accent">
                {member.role}
              </p>
              <h3 className="mt-1 font-display text-4xl uppercase text-ink sm:text-5xl">
                {`${member.firstName} ${member.name}`}
                <span className="ml-3 font-heading text-label text-ink-soft">
                  {`${member.age} ans`}
                </span>
              </h3>
              <p className="mt-1 max-w-text leading-relaxed text-ink-soft">
                {member.bio[0]}
              </p>
            </div>
          ))}
          <SectionLink href="/equipage">Découvrir l&apos;équipage</SectionLink>
        </div>
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
      </div>
    </Section>
  );
}
