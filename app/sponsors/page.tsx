import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import NumberedList from "../components/NumberedList";
import StatBlock from "../components/StatBlock";
import FormulaCard from "../components/FormulaCard";
import SchemaZones4L from "../components/SchemaZones4L";
import Button, { ButtonExterne } from "../components/Button";
import { DOSSIER_PDF, FORMULES, RAISONS, euros } from "@/content/projet";

export const metadata: Metadata = {
  title: "Devenir sponsor",
  description:
    "Quatre formules de partenariat, de 150 € à 2 500 €, pour afficher votre logo sur notre 4L de Biarritz à Marrakech et sur toutes nos communications.",
};

export default function Sponsors() {
  return (
    <>
      <Section titreId="titre">
        <SectionTitle
          as="h1"
          id="titre"
          surtitre="Ce que vous y gagnez"
          titre="Pourquoi nous soutenir"
          chapo="Votre entreprise gagne en visibilité, avant, pendant et après le raid. Et elle s'associe à un projet solidaire."
        />
        <NumberedList elements={RAISONS} format="deux-chiffres" niveau="h2" />
        <div className="mt-10">
          <StatBlock chiffre={`Dès ${euros(150)}`}>
            Quatre formules, de {euros(150)} à {euros(2500)}. Chacune a sa place
            sur la carrosserie.
          </StatBlock>
        </div>
      </Section>

      <Section titreId="formules">
        <SectionTitle
          id="formules"
          surtitre="Quatre façons de nous rejoindre"
          titre="Nos formules de partenariat"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {FORMULES.map((formule) => (
            <FormulaCard key={formule.lettre} formule={formule} />
          ))}
        </div>
      </Section>

      <Section titreId="emplacements">
        <SectionTitle
          id="emplacements"
          surtitre="Les emplacements"
          titre="Votre logo sur notre 4L"
          chapo="À chaque formule sa place sur la carrosserie."
        />
        <SchemaZones4L />
      </Section>

      <Section titreId="suite">
        <h2
          id="suite"
          className="font-condensed text-titre-section font-extrabold uppercase text-bleu-nuit"
        >
          La suite
        </h2>
        <div aria-hidden="true" className="mt-4 h-1.5 w-[85px] bg-terracotta" />
        <p className="mt-6 max-w-texte text-lg leading-relaxed text-bleu-nuit">
          Une formule vous intéresse, ou vous préférez nous aider autrement ?
          Écrivez-nous, nous en discutons.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">Nous contacter</Button>
          <Button href="/nous-aider" variante="secondaire">
            Aider autrement
          </Button>
          <ButtonExterne href={DOSSIER_PDF.href}>
            {`Télécharger le dossier de sponsoring (PDF, ${DOSSIER_PDF.poids})`}
            <span className="sr-only"> — s&apos;ouvre dans un nouvel onglet</span>
          </ButtonExterne>
        </div>
      </Section>
    </>
  );
}
