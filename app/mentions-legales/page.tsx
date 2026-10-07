import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ToComplete from "../components/ToComplete";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site de l'équipage Les Farfadets.",
};

const TITRE = "mt-10 font-condensed text-2xl font-bold text-bleu-nuit";
const TEXTE = "mt-2 max-w-texte leading-relaxed text-bleu-nuit";

export default function MentionsLegales() {
  return (
    <Section titreId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        surtitre="Informations légales"
        titre="Mentions légales"
      />

      <h2 className={TITRE}>Éditeur du site</h2>
      <p className={TEXTE}>
        Le site est édité par l&apos;association qui porte le projet
        « Les Farfadets — 4L Trophy 2027 ».
      </p>
      <div className="mt-4">
        <ToComplete libelle="identification de l'éditeur">
          <p>
            Nom exact de l&apos;association, forme juridique, numéro RNA ou
            SIREN, adresse du siège, adresse électronique et numéro de
            téléphone.
          </p>
        </ToComplete>
      </div>

      <h2 className={TITRE}>Directeur de la publication</h2>
      <div className="mt-2">
        <ToComplete libelle="directeur de la publication">
          <p>
            Nom et qualité de la personne responsable de la publication, telle
            que désignée par l&apos;association.
          </p>
        </ToComplete>
      </div>

      <h2 className={TITRE}>Hébergeur</h2>
      <div className="mt-2">
        <ToComplete libelle="hébergeur">
          <p>
            Raison sociale, adresse et numéro de téléphone de l&apos;hébergeur
            retenu pour la mise en ligne.
          </p>
        </ToComplete>
      </div>

      <h2 className={TITRE}>Propriété intellectuelle</h2>
      <p className={TEXTE}>
        Les textes, les schémas et la charte graphique de ce site sont la
        propriété de l&apos;équipage. Les logos des partenaires restent la
        propriété de leurs titulaires respectifs et sont affichés avec leur
        accord, dans le cadre du partenariat souscrit.
      </p>
      <p className={TEXTE}>
        Le 4L Trophy est une marque de son organisateur. Ce site est celui
        d&apos;un équipage participant : il n&apos;émane pas de
        l&apos;organisation du raid et n&apos;utilise pas son logo.
      </p>

      <h2 className={TITRE}>Liens vers d&apos;autres sites</h2>
      <p className={TEXTE}>
        Les liens vers les sites de nos partenaires s&apos;ouvrent dans un
        nouvel onglet. Nous n&apos;exerçons aucun contrôle sur leur contenu et
        n&apos;en assumons pas la responsabilité.
      </p>

      <h2 className={TITRE}>Signaler une erreur</h2>
      <p className={TEXTE}>
        Une information vous semble inexacte ? Écrivez-nous : nous corrigeons
        au plus vite. Les coordonnées figurent sur la page Contact.
      </p>
    </Section>
  );
}
