import Section from "@/components/ui/Section";
import StatBlock from "@/components/ui/StatBlock";
import Illustration from "@/components/ui/Illustration";
import Photo from "@/components/ui/Photo";
import Renault4Drawing from "@/components/ui/Renault4Drawing";

export default function OrienteeringSection() {
  return (
    <Section headingId="chrono">
      <h2 id="chrono" className="sr-only">
        Un classement à l&apos;orientation
      </h2>
      <StatBlock figure="Pas de chrono">
        Le classement repose sur l&apos;orientation, pas sur la vitesse : une
        boussole, un road-book et le bon cap.
      </StatBlock>
      {/* La 4L n'est pas encore achetée : un dessin tient la place de sa photo,
          jusqu'à ce que `public/photos/4l.jpg` existe. Retournée pour rouler vers la
          droite, face au soleil, comme celle du fond du site. */}
      <div className="mt-8">
        <Photo
          name="4l"
          alt="Notre Renault 4L"
          fallback={
            <Illustration
              id="dessin-4l"
              title="Dessin d'une Renault 4L vue de profil"
              caption="Nous achèterons notre 4L grâce à nos premiers sponsors. Sa photo remplacera alors ce dessin."
            >
              <circle cx="362" cy="46" r="30" fill="var(--color-sun)" />
              <rect
                x="10"
                y="189"
                width="420"
                height="4"
                rx="2"
                fill="var(--color-night)"
              />
              <g transform="translate(440 0) scale(-1 1)">
                <Renault4Drawing />
              </g>
            </Illustration>
          }
        />
      </div>
    </Section>
  );
}
