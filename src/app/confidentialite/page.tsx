import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { PUBLISHER } from "@/content/crew";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Le site ne dépose aucun cookie et n'utilise aucun traceur ; Cloudflare, son intermédiaire technique, peut employer des éléments nécessaires à la sécurité. Seuls des journaux techniques sont conservés, six mois.",
};

const HEADING_CLASS = "mt-10 font-heading text-2xl font-bold text-ink";
const TEXT_CLASS = "mt-2 max-w-text leading-relaxed text-ink";

export default function PrivacyPage() {
  return (
    <Section headingId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        eyebrow="Informations légales"
        title="Confidentialité"
        lead="Ce site est volontairement simple : il se contente d'afficher des pages. Il ne vous suit pas et ne cherche pas à vous identifier."
      />

      <div className="enter glass rounded-panel p-6 [--enter-step:2] sm:p-10 [&>h2:first-child]:mt-0">
        <h2 className={HEADING_CLASS}>Ni cookie ni traceur de notre part</h2>
        <p className={TEXT_CLASS}>
          Le site lui-même ne dépose aucun cookie, ni technique ni publicitaire.
          Il n&apos;utilise aucun outil de mesure d&apos;audience, aucun pixel
          et aucun script de suivi. Il n&apos;y a donc rien à consentir de notre
          côté, et aucune bannière ne vous est présentée.
        </p>
        <p className={TEXT_CLASS}>
          Cloudflare, notre intermédiaire technique, peut de son côté employer
          des cookies et des scripts nécessaires à la sécurité et au bon
          acheminement des pages, par exemple une page de vérification quand une
          connexion lui paraît suspecte. Strictement nécessaires au service, ils
          sont dispensés de consentement. Leur détail figure dans la{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
          >
            politique de confidentialité de Cloudflare
            <span className="sr-only">
              {" "}
              — s&apos;ouvre dans un nouvel onglet
            </span>
          </a>
          .
        </p>

        <h2 className={HEADING_CLASS}>Aucun contenu chargé ailleurs</h2>
        <p className={TEXT_CLASS}>
          Les polices de caractères (Squada One, Bricolage Grotesque, Permanent
          Marker et Kaushan Script) sont servies depuis notre propre serveur,
          pas depuis Google Fonts. Le site ne fait charger ni image, ni script,
          ni police depuis un autre site.
        </p>
        <p className={TEXT_CLASS}>
          Deux prestataires techniques acheminent et servent les pages : OVH,
          qui héberge le site sur un serveur situé au Royaume-Uni, pays dont la
          Commission européenne reconnaît le niveau de protection des données,
          et Cloudflare, par qui passe la connexion entre votre navigateur et le
          serveur. Ils traitent à ce titre votre adresse IP, le temps de vous
          répondre.
        </p>
        <p className={TEXT_CLASS}>
          Par ailleurs, si vous cliquez sur le lien de notre compte Instagram ou
          du site d&apos;un partenaire, vous quittez notre site et la politique
          de confidentialité du service concerné s&apos;applique. Les logos de
          nos partenaires sont, eux, hébergés chez nous.
        </p>

        <h2 className={HEADING_CLASS}>Aucun formulaire</h2>
        <p className={TEXT_CLASS}>
          Le site ne comporte pas de formulaire de contact. Nous ne collectons
          ni nom, ni adresse électronique, ni numéro de téléphone. Si vous nous
          écrivez ou nous appelez, vos coordonnées restent dans notre messagerie
          ou notre téléphone, et servent uniquement à vous répondre.
        </p>

        <h2 className={HEADING_CLASS}>Journaux de connexion</h2>
        <p className={TEXT_CLASS}>
          Comme tout serveur web, celui qui héberge ce site enregistre des
          journaux techniques de connexion : adresse IP, date et heure, page
          demandée, navigateur utilisé.
        </p>
        <p className={TEXT_CLASS}>
          Ces journaux servent uniquement à assurer la sécurité du serveur et à
          diagnostiquer les pannes. Ils ne sont ni croisés avec d&apos;autres
          données, ni utilisés pour mesurer l&apos;audience, ni transmis à des
          tiers, sauf demande d&apos;une autorité habilitée.
        </p>
        <p className={TEXT_CLASS}>
          Ce traitement repose sur notre intérêt légitime à protéger le site
          contre les attaques et à le maintenir en état de marche.
        </p>
        <p className={TEXT_CLASS}>
          Ils sont conservés six mois, puis supprimés automatiquement. Cette
          durée suit la recommandation de la CNIL sur la journalisation, qui
          préconise entre six mois et un an.
        </p>

        <h2 className={HEADING_CLASS}>Responsable du traitement</h2>
        <p className={TEXT_CLASS}>
          {`Le responsable du traitement est ${PUBLISHER}, éditeur du site. Pour toute question sur vos données, écrivez-lui : ses coordonnées figurent sur la page Contact.`}
        </p>

        <h2 className={HEADING_CLASS}>Vos droits</h2>
        <p className={TEXT_CLASS}>
          En dehors de ces journaux, nous ne constituons aucun fichier à partir
          de ce site. Vous pouvez nous demander d&apos;accéder aux données qui
          vous concernent, de les rectifier ou de les effacer, et vous opposer à
          leur traitement. Si vous nous avez écrit et souhaitez que nous
          effacions votre message et vos coordonnées, nous le faisons sans
          délai.
        </p>
        <p className={TEXT_CLASS}>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une réclamation à la CNIL.
        </p>

        <h2 className={HEADING_CLASS}>Mise à jour</h2>
        <p className={TEXT_CLASS}>
          Si le site évolue, par exemple avec l&apos;ajout d&apos;un formulaire
          ou d&apos;un outil de mesure, cette page sera mise à jour avant la
          mise en ligne de cette évolution.
        </p>
      </div>
    </Section>
  );
}
