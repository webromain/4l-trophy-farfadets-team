import Link from "next/link";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SectionTitle from "./components/SectionTitle";
import StatBlock from "./components/StatBlock";
import StatCard from "./components/StatCard";
import NumberedList from "./components/NumberedList";
import Quote from "./components/Quote";
import BudgetChart from "./components/BudgetChart";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import Button, { ButtonExterne } from "./components/Button";
import {
  BUDGET,
  CHIFFRES_CLES,
  DOSSIER_PDF,
  EQUIPAGE,
  EVENEMENT,
  RAISONS,
  SOLIDAIRE,
  euros,
  kilometres,
} from "@/content/projet";
import { SPONSORS, partenairePrincipal } from "@/content/sponsors";

function LienSection({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="mt-8 inline-flex min-h-11 items-center font-condensed text-lg font-bold uppercase tracking-wide text-rouge-4l underline underline-offset-4 hover:text-bleu-nuit"
    >
      {children}
    </Link>
  );
}

export default function Accueil() {
  const principal = partenairePrincipal(SPONSORS);

  return (
    <>
      <Section>
        <Hero />
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/sponsors">Devenir sponsor</Button>
          <ButtonExterne href={DOSSIER_PDF.href}>
            {`Télécharger le dossier de sponsoring (PDF, ${DOSSIER_PDF.poids})`}
            <span className="sr-only"> — s&apos;ouvre dans un nouvel onglet</span>
          </ButtonExterne>
        </div>
      </Section>

      <Section titreId="partenaire-principal">
        <div className="rounded-bloc bg-sable p-6 sm:p-8">
          <h2
            id="partenaire-principal"
            className="font-condensed text-surtitre uppercase text-rouge-4l"
          >
            Partenaire principal
          </h2>
          {principal ? (
            <p className="mt-3 font-condensed text-3xl font-extrabold uppercase text-bleu-nuit">
              {principal.nom}
            </p>
          ) : (
            <p className="mt-3 max-w-texte text-lg leading-relaxed text-bleu-nuit">
              {`Cette place est encore libre. Elle comprend le capot de la 4L, une mise en avant ici même, et les photos du raid après l'arrivée, pour ${euros(2500)}.`}
            </p>
          )}
        </div>
      </Section>

      <Section titreId="equipage">
        <SectionTitle
          id="equipage"
          surtitre="Qui sommes-nous"
          titre="L'équipage"
          chapo="Deux amis passionnés d'automobile, un profil mécanique et un profil numérique."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            {EQUIPAGE.map((membre) => (
              <div key={membre.nom} className="mb-6">
                <p className="font-condensed text-surtitre uppercase text-rouge-4l">
                  {membre.role}
                </p>
                <h3 className="mt-1 font-condensed text-2xl font-bold text-bleu-nuit">
                  {`${membre.prenom} ${membre.nom}`}
                </h3>
                <p className="mt-1 max-w-texte leading-relaxed text-gris-texte">
                  {membre.biographie[0]}
                </p>
              </div>
            ))}
            <LienSection href="/equipage">Découvrir l&apos;équipage</LienSection>
          </div>
          <PhotoPlaceholder
            libelle="Photo de l'équipage"
            legende="Romain et Bastien, photo pleine largeur, à fournir"
          />
        </div>
      </Section>

      <Section titreId="chiffres">
        <SectionTitle
          id="chiffres"
          surtitre="L'événement"
          titre="Le 4L Trophy en bref"
          chapo="Un raid réservé aux 18-28 ans, au volant d'une Renault 4L. Ici, pas de course de vitesse : le classement se joue à l'orientation, à la boussole et au road-book."
        />
        <StatBlock chiffre={kilometres(EVENEMENT.distanceKm)}>
          environ, de Biarritz à Marrakech, à travers la France, l&apos;Espagne
          et le Maroc.
        </StatBlock>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {CHIFFRES_CLES.map((chiffre) => (
            <StatCard
              key={chiffre.valeur}
              chiffre={chiffre.valeur}
              legende={chiffre.legende}
            />
          ))}
        </div>
        <LienSection href="/parcours">Voir le parcours étape par étape</LienSection>
      </Section>

      <Section titreId="solidaire">
        <SectionTitle
          id="solidaire"
          surtitre="La mission"
          titre="Une aventure solidaire"
          chapo="Le 4L Trophy n'est pas qu'un raid. Chaque équipage emporte dans sa 4L des fournitures scolaires et sportives pour les enfants du sud marocain."
        />
        <NumberedList elements={SOLIDAIRE} format="un-chiffre" />
        <div className="mt-10">
          <Quote
            citation="Nous voulons vivre cette aventure, et nous voulons qu'elle soit utile."
            attribution="Romain et Bastien"
          />
        </div>
      </Section>

      <Section titreId="soutenir">
        <SectionTitle
          id="soutenir"
          surtitre="Ce que vous y gagnez"
          titre="Pourquoi nous soutenir"
          chapo="Votre entreprise gagne en visibilité, avant, pendant et après le raid. Et elle s'associe à un projet solidaire."
        />
        <NumberedList elements={RAISONS} format="deux-chiffres" />
        <LienSection href="/sponsors">Voir les quatre formules</LienSection>
      </Section>

      <Section titreId="budget">
        <SectionTitle
          id="budget"
          surtitre="Combien ça coûte"
          titre="Budget prévisionnel"
        />
        <StatBlock chiffre={euros(BUDGET.objectifSponsors)}>
          {`à réunir auprès de nos partenaires. Budget total du projet : ${euros(BUDGET.total)}, dont ${euros(BUDGET.dejaFinance)} déjà financés par la subvention de l'association de l'école.`}
        </StatBlock>
        <div className="mt-8">
          <BudgetChart />
        </div>
        <p className="mt-6 max-w-texte text-sm text-gris-texte">
          Montants prévisionnels. Sur le graphique, les quatre postes les plus
          légers (assurance, équipements, communication, imprévus) sont
          regroupés : {euros(1310)} au total.
        </p>
      </Section>

      <Section titreId="contact">
        <SectionTitle
          id="contact"
          surtitre="Contact"
          titre="Parlons-en"
          chapo="Vous souhaitez voir votre logo traverser le désert ? Un appel ou un rendez-vous suffit pour en discuter."
        />
        <div className="flex flex-wrap gap-4">
          <Button href="/contact">Nous contacter</Button>
          <Button href="/nous-aider" variante="secondaire">
            Aider autrement
          </Button>
        </div>
      </Section>
    </>
  );
}
