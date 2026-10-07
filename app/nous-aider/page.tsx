import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ToComplete from "../components/ToComplete";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Button from "../components/Button";
import { BUDGET, SOUTIEN_EN_NATURE, euros } from "@/content/projet";

export const metadata: Metadata = {
  title: "Nous aider",
  description:
    "Pièces, préparation mécanique, fournitures scolaires, équipement ou don : plusieurs façons de soutenir l'équipage des Farfadets au 4L Trophy 2027.",
};

export default function NousAider() {
  return (
    <>
      <Section titreId="titre">
        <SectionTitle
          as="h1"
          id="titre"
          surtitre="En nature ou par un don"
          titre="Autres façons de nous aider"
          chapo="Un soutien ne passe pas forcément par un chèque. Votre savoir-faire et votre matériel comptent tout autant."
        />

        <h2 className="font-condensed text-2xl font-bold text-bleu-nuit">
          Le partenariat en nature
        </h2>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2">
          {SOUTIEN_EN_NATURE.map((soutien) => (
            <li key={soutien.titre} className="rounded-bloc bg-sable p-6">
              <h3 className="font-condensed text-xl font-bold text-bleu-nuit">
                {soutien.titre}
              </h3>
              <p className="mt-2 leading-relaxed text-bleu-nuit">
                {soutien.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-texte leading-relaxed text-bleu-nuit">
          Dites-nous ce que vous pouvez apporter : nous verrons ensemble comment
          mettre votre entreprise en avant.
        </p>
      </Section>

      <Section titreId="don">
        <h2
          id="don"
          className="font-condensed text-titre-section font-extrabold uppercase text-bleu-nuit"
        >
          Le don
        </h2>
        <div aria-hidden="true" className="mt-4 h-1.5 w-[85px] bg-terracotta" />
        <p className="mt-6 max-w-texte text-lg leading-relaxed text-bleu-nuit">
          Vous souhaitez simplement nous aider à partir ? Chaque don, quel que
          soit son montant, nous rapproche des{" "}
          {euros(BUDGET.objectifSponsors)} à réunir.
        </p>
        <div className="mt-8">
          <ToComplete libelle="cadre fiscal">
            <p>
              Ce bloc sera rédigé après confirmation par l&apos;association :
              possibilité ou non d&apos;un reçu fiscal, dispositif applicable et
              démarche à suivre pour l&apos;entreprise. Aucun chiffre n&apos;est
              annoncé tant que ce point n&apos;est pas validé.
            </p>
          </ToComplete>
        </div>
      </Section>

      <Section titreId="fournitures">
        <h2 id="fournitures" className="sr-only">
          Les fournitures collectées
        </h2>
        <PhotoPlaceholder
          libelle="Photo des fournitures collectées"
          legende="Photo pleine largeur, à fournir pendant la préparation"
        />
        <div className="mt-8">
          <Button href="/contact">Nous contacter</Button>
        </div>
      </Section>
    </>
  );
}
