import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Ce site ne dépose aucun cookie et n'utilise aucun traceur. Les polices sont servies depuis notre propre serveur ; seuls des journaux techniques sont conservés, six mois.",
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
        <h2 className={HEADING_CLASS}>Aucun cookie, aucun traceur</h2>
        <p className={TEXT_CLASS}>
          Le site ne dépose aucun cookie, ni technique ni publicitaire. Il
          n&apos;utilise aucun outil de mesure d&apos;audience, aucun pixel et
          aucun script tiers. C&apos;est pourquoi aucune bannière de
          consentement ne vous est présentée : il n&apos;y a rien à consentir.
        </p>

        <h2 className={HEADING_CLASS}>Aucun contenu chargé ailleurs</h2>
        <p className={TEXT_CLASS}>
          Les polices de caractères (Squada One, Bricolage Grotesque, Permanent
          Marker et Kaushan Script) sont servies depuis notre propre serveur,
          pas depuis Google Fonts. Les pages ne chargent ni image, ni script, ni
          police depuis un autre site.
        </p>
        <p className={TEXT_CLASS}>
          Deux prestataires techniques acheminent et servent les pages : OVH,
          qui héberge le site en France, et Cloudflare, par qui passe la
          connexion entre votre navigateur et le serveur. Ils traitent à ce
          titre votre adresse IP, le temps de vous répondre.
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
          Ils sont conservés six mois, puis supprimés automatiquement. Cette
          durée suit la recommandation de la CNIL sur la journalisation, qui
          préconise entre six mois et un an.
        </p>

        <h2 className={HEADING_CLASS}>Vos droits</h2>
        <p className={TEXT_CLASS}>
          En dehors de ces journaux, nous ne constituons aucun fichier à partir
          de ce site. Si vous nous avez écrit et souhaitez que nous effacions
          votre message et vos coordonnées, demandez-le-nous : nous le faisons
          sans délai. Vous pouvez également saisir la CNIL.
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
