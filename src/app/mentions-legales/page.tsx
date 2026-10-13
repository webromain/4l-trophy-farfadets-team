import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import ToComplete from "@/components/ui/ToComplete";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site de l'équipage Les Farfadets.",
};

const HEADING_CLASS = "mt-10 font-heading text-2xl font-bold text-ink";
const TEXT_CLASS = "mt-2 max-w-text leading-relaxed text-ink";

export default function LegalNoticePage() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Informations légales"
        title="Mentions légales"
      />

      <div className="glass rounded-panel p-6 sm:p-10 [&>h2:first-child]:mt-0">
        <h2 className={HEADING_CLASS}>Éditeur du site</h2>
        <p className={TEXT_CLASS}>
          Le site est édité par l&apos;association qui porte le projet « Les
          Farfadets — 4L Trophy 2027 ».
        </p>
        <div className="mt-4">
          <ToComplete label="identification de l'éditeur">
            <p>
              Nom exact de l&apos;association, forme juridique, numéro RNA ou
              SIREN, adresse du siège, adresse électronique et numéro de
              téléphone.
            </p>
          </ToComplete>
        </div>

        <h2 className={HEADING_CLASS}>Directeur de la publication</h2>
        <div className="mt-2">
          <ToComplete label="directeur de la publication">
            <p>
              Nom et qualité de la personne responsable de la publication, telle
              que désignée par l&apos;association.
            </p>
          </ToComplete>
        </div>

        <h2 className={HEADING_CLASS}>Hébergeur</h2>
        <div className="mt-2">
          <ToComplete label="hébergeur">
            <p>
              Raison sociale, adresse et numéro de téléphone de l&apos;hébergeur
              retenu pour la mise en ligne.
            </p>
          </ToComplete>
        </div>

        <h2 className={HEADING_CLASS}>Propriété intellectuelle</h2>
        <p className={TEXT_CLASS}>
          Les textes, les schémas et la charte graphique de ce site sont la
          propriété de l&apos;équipage. Les logos des partenaires restent la
          propriété de leurs titulaires respectifs et sont affichés avec leur
          accord, dans le cadre du partenariat souscrit.
        </p>
        <p className={TEXT_CLASS}>
          Le 4L Trophy est une marque de son organisateur. Ce site est celui
          d&apos;un équipage participant : il n&apos;émane pas de
          l&apos;organisation du raid et n&apos;utilise pas son logo.
        </p>

        <h2 className={HEADING_CLASS}>Liens vers d&apos;autres sites</h2>
        <p className={TEXT_CLASS}>
          Les liens vers les sites de nos partenaires s&apos;ouvrent dans un
          nouvel onglet. Nous n&apos;exerçons aucun contrôle sur leur contenu et
          n&apos;en assumons pas la responsabilité.
        </p>

        <h2 className={HEADING_CLASS}>Signaler une erreur</h2>
        <p className={TEXT_CLASS}>
          Une information vous semble inexacte ? Écrivez-nous : nous corrigeons
          au plus vite. Les coordonnées figurent sur la page Contact.
        </p>
      </div>
    </Section>
  );
}
