import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import CrewMemberCard from "./CrewMemberCard";
import CrewStories from "./CrewStories";
import AssociationNote from "./AssociationNote";
import { CREW } from "@/content/crew";

export default function CrewSection() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Qui sommes-nous"
        title="L'équipage"
        lead="Deux amis passionnés d'automobile. Un profil mécanique, un profil numérique, et le même objectif : rallier Marrakech en Renault 4L."
      />

      {CREW.map((member) => (
        <CrewMemberCard key={member.name} member={member} />
      ))}

      <CrewStories />

      <AssociationNote />
    </Section>
  );
}
