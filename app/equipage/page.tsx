import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import { ToCompleteInline } from "../components/ToComplete";
import { ASSOCIATION, EQUIPAGE, euros } from "@/content/projet";

export const metadata: Metadata = {
  title: "L'équipage",
  description:
    "Romain Poisson et Bastien Grangeon, deux amis passionnés d'automobile : un profil mécanique et un profil numérique, au départ du 4L Trophy 2027.",
};

const RECITS = [
  {
    titre: "Notre histoire",
    texte:
      "Nous sommes amis et passionnés d'automobile depuis toujours. Le 4L Trophy, nous en rêvons depuis longtemps. En 2027, nous prenons le départ.",
  },
  {
    titre: "Notre complémentarité",
    texte:
      "Bastien apporte la mécanique et la conception pour préparer et fiabiliser la 4L. Romain prend en charge le site web, la communication digitale et la gestion du projet.",
  },
  {
    titre: "Notre motivation",
    texte:
      "Réaliser ce projet ensemble, de la première pièce changée jusqu'à l'arrivée à Marrakech, et le mettre au service d'une cause solidaire.",
  },
] as const;

export default function Equipage() {
  return (
    <Section titreId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        surtitre="Qui sommes-nous"
        titre="L'équipage"
        chapo="Deux amis passionnés d'automobile. Un profil mécanique, un profil numérique, et le même objectif : rallier Marrakech en Renault 4L."
      />

      {EQUIPAGE.map((membre) => (
        <div
          key={membre.nom}
          className="mb-10 grid gap-6 sm:grid-cols-[180px_1fr] sm:gap-8"
        >
          <PhotoPlaceholder
            libelle={membre.emplacementPhoto}
            legende="Portrait, à fournir"
            format="portrait"
          />
          <div>
            <h2 className="font-condensed text-surtitre uppercase text-rouge-4l">
              {membre.role}
            </h2>
            <p className="mt-1 font-condensed text-3xl font-bold text-bleu-nuit">
              {`${membre.prenom} ${membre.nom}`}
            </p>
            {membre.biographie.map((ligne) => (
              <p
                key={ligne}
                className="mt-2 max-w-texte leading-relaxed text-gris-texte"
              >
                {ligne}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-bloc bg-sable p-6 sm:p-8">
        {RECITS.map((recit) => (
          <div key={recit.titre} className="mb-6 last:mb-0">
            <h2 className="font-condensed text-2xl font-bold text-bleu-nuit">
              {recit.titre}
            </h2>
            <p className="mt-1 max-w-texte leading-relaxed text-bleu-nuit">
              {recit.texte}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-bloc border-2 border-sable-fonce p-6">
        <h2 className="font-condensed text-2xl font-bold text-bleu-nuit">
          Un projet porté par une association de l&apos;Efrei
        </h2>
        <p className="mt-2 max-w-texte leading-relaxed text-bleu-nuit">
          L&apos;association{" "}
          <ToCompleteInline libelle="nom de l'association" /> porte le projet et
          le soutient à hauteur de {euros(ASSOCIATION.subvention)}.
        </p>
      </div>
    </Section>
  );
}
