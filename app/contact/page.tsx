import type { Metadata } from "next";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import LienEmail from "../components/LienEmail";
import { ToCompleteInline } from "../components/ToComplete";
import { COORDONNEES, RESEAUX } from "@/content/projet";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vous souhaitez voir votre logo traverser le désert ? Contactez Romain et Bastien, l'équipage des Farfadets, pour en discuter.",
};

const ETIQUETTE = "font-condensed text-surtitre uppercase text-rouge-4l";

export default function Contact() {
  return (
    <>
      <Section titreId="titre">
        <SectionTitle
          as="h1"
          id="titre"
          surtitre="Contact"
          titre="Parlons-en"
          chapo="Vous souhaitez voir votre logo traverser le désert ? Un appel ou un rendez-vous suffit pour en discuter."
        />
        <PhotoPlaceholder
          libelle="Photo de l'équipage"
          legende="Romain et Bastien, photo pleine largeur, à fournir"
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {COORDONNEES.map((personne) => (
            <div key={personne.prenom}>
              <h2 className="font-condensed text-2xl font-bold text-bleu-nuit">
                {personne.prenom}
              </h2>

              <p className={`mt-4 ${ETIQUETTE}`}>Téléphone</p>
              {personne.telephone ? (
                <a
                  href={`tel:${personne.telephone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-11 items-center font-semibold text-rouge-4l underline underline-offset-4 hover:text-bleu-nuit"
                >
                  {personne.telephone}
                </a>
              ) : (
                <p className="mt-1">
                  <ToCompleteInline
                    libelle={`téléphone de ${personne.prenom}`}
                  />
                </p>
              )}

              <p className={`mt-4 ${ETIQUETTE}`}>E-mail</p>
              {personne.email ? (
                <LienEmail email={personne.email} />
              ) : (
                <p className="mt-1">
                  <ToCompleteInline libelle={`e-mail de ${personne.prenom}`} />
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section titreId="reseaux">
        <h2
          id="reseaux"
          className="font-condensed text-titre-section font-extrabold uppercase text-bleu-nuit"
        >
          Suivez l&apos;aventure
        </h2>
        <div aria-hidden="true" className="mt-4 h-1.5 w-[85px] bg-terracotta" />
        <div className="mt-6 space-y-6">
          <div>
            <p className={ETIQUETTE}>Site web</p>
            <p className="mt-1">
              {RESEAUX.siteWeb ?? (
                <ToCompleteInline libelle="adresse du site" />
              )}
            </p>
          </div>
          <div>
            <p className={ETIQUETTE}>Instagram</p>
            <p className="mt-1">
              {RESEAUX.instagram ?? (
                <ToCompleteInline libelle="compte Instagram" />
              )}
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-texte rounded-bloc bg-sable p-6 leading-relaxed text-bleu-nuit">
          Ce site ne comporte pas de formulaire : aucune donnée personnelle
          n&apos;y est collectée ni hébergée. Un appel ou un courriel arrive
          plus vite à l&apos;équipage.
        </p>
      </Section>
    </>
  );
}
