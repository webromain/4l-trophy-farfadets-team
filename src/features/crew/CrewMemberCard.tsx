import Photo from "@/components/ui/Photo";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import type { CrewMember } from "@/content/crew";

export default function CrewMemberCard({ member }: { member: CrewMember }) {
  return (
    <div className="mb-10 grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-8">
      <Photo
        name={member.photo}
        alt={`Portrait de ${member.firstName} ${member.name}`}
        format="portrait"
        fallback={
          <PhotoPlaceholder
            label={member.photoLabel}
            caption="Portrait, à fournir"
            format="portrait"
          />
        }
      />
      <div className="reveal">
        <h2 className="font-heading text-label uppercase text-accent">
          {member.role}
        </h2>
        <p className="mt-1 font-display text-5xl uppercase text-ink sm:text-6xl">
          {`${member.firstName} ${member.name}`}
          <span className="ml-3 font-heading text-label text-ink-soft">
            {`${member.age} ans`}
          </span>
        </p>
        {member.bio.map((line) => (
          <p
            key={line}
            className="mt-2 max-w-text leading-relaxed text-ink-soft"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
