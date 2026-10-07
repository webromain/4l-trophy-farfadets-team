import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ToComplete from "../components/ToComplete";

export const metadata: Metadata = {
  title: "Confidentialité",
  description:
    "Ce site ne dépose aucun cookie, n'utilise aucun traceur et n'héberge aucune donnée personnelle. Les polices sont servies depuis notre propre serveur.",
};

const TITRE = "mt-10 font-condensed text-2xl font-bold text-bleu-nuit";
const TEXTE = "mt-2 max-w-texte leading-relaxed text-bleu-nuit";

export default function Confidentialite() {
  return (
    <Section titreId="titre">
      <SectionTitle
        as="h1"
        id="titre"
        surtitre="Informations légales"
        titre="Confidentialité"
        chapo="Ce site est volontairement simple : il se contente d'afficher des pages. Il ne vous suit pas, ne vous identifie pas et ne conserve rien sur vous."
      />

      <h2 className={TITRE}>Aucun cookie, aucun traceur</h2>
      <p className={TEXTE}>
        Le site ne dépose aucun cookie, ni technique ni publicitaire. Il
        n&apos;utilise aucun outil de mesure d&apos;audience, aucun pixel et
        aucun script tiers. C&apos;est pourquoi aucune bannière de consentement
        ne vous est présentée : il n&apos;y a rien à consentir.
      </p>

      <h2 className={TITRE}>Aucune requête vers un service tiers</h2>
      <p className={TEXTE}>
        Les polices de caractères (Barlow, Barlow Condensed et Playfair Display)
        sont servies depuis notre propre serveur, pas depuis Google Fonts.
        Afficher une page de ce site n&apos;envoie donc aucune information,
        votre adresse IP comprise, à un service extérieur.
      </p>
      <p className={TEXTE}>
        Seule exception : si vous cliquez sur le lien du site d&apos;un
        partenaire, vous quittez notre site et la politique de confidentialité
        de ce partenaire s&apos;applique. Les logos de nos partenaires sont,
        eux, hébergés chez nous.
      </p>

      <h2 className={TITRE}>Aucun formulaire</h2>
      <p className={TEXTE}>
        Le site ne comporte pas de formulaire de contact. Nous ne collectons ni
        nom, ni adresse électronique, ni numéro de téléphone. Si vous nous
        écrivez ou nous appelez, vos coordonnées restent dans notre messagerie
        ou notre téléphone, et servent uniquement à vous répondre.
      </p>

      <h2 className={TITRE}>Journaux de connexion</h2>
      <p className={TEXTE}>
        Comme tout site, celui-ci est servi par un hébergeur qui peut conserver
        des journaux techniques de connexion. Nous n&apos;y accédons pas et ne
        les exploitons pas.
      </p>
      <div className="mt-4">
        <ToComplete libelle="durée de conservation des journaux">
          <p>
            À préciser une fois l&apos;hébergeur choisi : durée de conservation
            des journaux de connexion et coordonnées de son délégué à la
            protection des données, le cas échéant.
          </p>
        </ToComplete>
      </div>

      <h2 className={TITRE}>Vos droits</h2>
      <p className={TEXTE}>
        Nous ne constituons aucun fichier à partir de ce site. Si vous nous avez
        écrit et souhaitez que nous effacions votre message et vos coordonnées,
        demandez-le-nous : nous le faisons sans délai. Vous pouvez également
        saisir la CNIL.
      </p>

      <h2 className={TITRE}>Mise à jour</h2>
      <p className={TEXTE}>
        Si le site évolue, par exemple avec l&apos;ajout d&apos;un formulaire ou
        d&apos;un outil de mesure, cette page sera mise à jour avant la mise en
        ligne de cette évolution.
      </p>
    </Section>
  );
}
