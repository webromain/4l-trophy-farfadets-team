import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { ASSOCIATION, PUBLISHER } from "@/content/crew";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site de l'équipage Les Farfadets.",
};

const HEADING_CLASS = "mt-10 font-heading text-2xl font-bold text-ink";
const TEXT_CLASS = "mt-2 max-w-text leading-relaxed text-ink";
const LINK_CLASS = "font-semibold underline underline-offset-4";

export default function LegalNoticePage() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Informations légales"
        title="Mentions légales"
      />

      <div className="enter glass rounded-panel p-6 [--enter-step:2] sm:p-10 [&>h2:first-child]:mt-0">
        <h2 className={HEADING_CLASS}>Éditeur du site</h2>
        <p className={TEXT_CLASS}>
          {`Le site est édité à titre personnel et non professionnel par ${PUBLISHER}, membre de l'équipage, pour soutenir le projet « Les Farfadets — 4L Trophy 2027 », porté par l'association ${ASSOCIATION.name}. L'association n'est pas l'éditrice du site.`}
        </p>
        <p className={TEXT_CLASS}>
          Comme le permet la loi pour la confiance dans l&apos;économie
          numérique aux éditeurs non professionnels, son adresse personnelle
          n&apos;est pas publiée : ses éléments d&apos;identification ont été
          communiqués à l&apos;hébergeur. Pour le joindre, ses coordonnées
          figurent sur la page{" "}
          <Link href="/contact" className={LINK_CLASS}>
            Contact
          </Link>
          .
        </p>

        <h2 className={HEADING_CLASS}>Directeur de la publication</h2>
        <p className={TEXT_CLASS}>{`${PUBLISHER}, éditeur du site.`}</p>

        <h2 className={HEADING_CLASS}>Hébergeur</h2>
        <p className={TEXT_CLASS}>
          Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix,
          France. Téléphone : 1007.
        </p>

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
