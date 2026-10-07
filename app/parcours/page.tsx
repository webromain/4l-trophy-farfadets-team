import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Timeline from "../components/Timeline";
import StatBlock from "../components/StatBlock";
import CarteParcours from "../components/CarteParcours";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import { ETAPES, EVENEMENT, kilometres } from "@/content/projet";

export const metadata: Metadata = {
  title: "Le parcours",
  description: `De Biarritz à Marrakech : ${kilometres(
    EVENEMENT.distanceKm,
  )} en douze jours, à travers la France, l'Espagne et le Maroc, du 17 au 28 février 2027.`,
};

export default function Parcours() {
  return (
    <>
      <Section titreId="titre">
        <SectionTitle
          as="h1"
          id="titre"
          surtitre="De Biarritz à Marrakech"
          titre="Le parcours"
          chapo={`Environ ${kilometres(EVENEMENT.distanceKm)} en douze jours, à travers trois pays : la France, l'Espagne et le Maroc.`}
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
          <CarteParcours />
          <div>
            <h2 className="sr-only">Les étapes du raid</h2>
            <Timeline jalons={ETAPES} />
          </div>
        </div>
      </Section>

      <Section titreId="chrono">
        <h2 id="chrono" className="sr-only">
          Un classement à l&apos;orientation
        </h2>
        <StatBlock chiffre="Pas de chrono">
          Le classement repose sur l&apos;orientation, pas sur la vitesse : une
          boussole, un road-book et le bon cap.
        </StatBlock>
        <div className="mt-8">
          <PhotoPlaceholder
            libelle="Photo de la 4L"
            legende="Photo d'ambiance pleine largeur, à fournir"
          />
        </div>
      </Section>
    </>
  );
}
