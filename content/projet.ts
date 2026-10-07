const NBSP = "\u00a0";

const nombreFr = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });

/* CLDR groupe les milliers avec une espace fine insécable (U+202F). La fiche projet
   et le book utilisent l'insécable classique, plus large : on s'aligne dessus. */
export function nombre(valeur: number): string {
  return nombreFr.format(valeur).replace(/\u202f/g, NBSP);
}

export function euros(valeur: number): string {
  return `${nombre(valeur)}${NBSP}€`;
}

export function kilometres(valeur: number): string {
  return `${nombre(valeur)}${NBSP}km`;
}

export const A_COMPLETER = "[À COMPLÉTER]" as const;

/* L'adresse définitive n'est pas connue (fiche projet, §10). Elle sert de base aux
   URL canoniques, au sitemap et aux images Open Graph : à renseigner au déploiement. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://les-farfadets.fr";

export const EQUIPAGE_NOM = "Les Farfadets";
export const RAID_NOM = "4L Trophy 2027";

export type ChiffreCle = {
  readonly valeur: string;
  readonly legende: string;
};

export type Etape = {
  readonly dates: string;
  readonly lieu: string;
  readonly description: string;
};

export type Membre = {
  readonly prenom: string;
  readonly nom: string;
  readonly role: string;
  readonly biographie: readonly string[];
  readonly emplacementPhoto: string;
};

export type PosteBudget = {
  readonly poste: string;
  readonly montant: number;
};

export type Formule = {
  readonly lettre: "A" | "B" | "C" | "D";
  readonly nom: string;
  readonly montant: number;
  readonly emplacement: string;
  readonly contreparties: readonly string[];
  readonly unique: boolean;
};

export type Raison = {
  readonly titre: string;
  readonly description: string;
};

export const EVENEMENT = {
  edition: "30e",
  dates: "du 17 au 28 février 2027",
  dateDepart: "17 février 2027",
  dateArrivee: "26 février 2027",
  depart: "Biarritz",
  arrivee: "Marrakech",
  pays: "France, Espagne, Maroc",
  distanceKm: 6000,
  jours: 12,
  equipages: 1200,
  ageMin: 18,
  ageMax: 28,
  associationSolidaire: "Enfants du Désert",
  inscription: 3690,
} as const;

export const CHIFFRES_CLES: readonly ChiffreCle[] = [
  { valeur: EVENEMENT.edition, legende: "édition, du 17 au 28 février 2027" },
  { valeur: "3 pays", legende: "France, Espagne, Maroc" },
  { valeur: `${EVENEMENT.jours} jours`, legende: "de raid, en Renault 4L" },
  {
    valeur: nombre(EVENEMENT.equipages),
    legende: "équipages attendus au départ",
  },
];

export const ETAPES: readonly Etape[] = [
  {
    dates: "17-18 février",
    lieu: "Biarritz",
    description: "Village départ.",
  },
  {
    dates: "19-20 février",
    lieu: "Algésiras",
    description: "Premier bivouac, au sud de l'Espagne.",
  },
  {
    dates: "20-21 février",
    lieu: "Détroit de Gibraltar",
    description: "Traversée en bateau vers le Maroc.",
  },
  {
    dates: "22-26 février",
    lieu: "Sud marocain",
    description: "6 étapes dans le désert, à la boussole et au road-book.",
  },
  {
    dates: "26 février",
    lieu: "Marrakech",
    description: "Ligne d'arrivée.",
  },
  {
    dates: "27 février",
    lieu: "Marrakech",
    description: "Journée libre et remise des prix.",
  },
  {
    dates: "28 février",
    lieu: "Détroit de Gibraltar",
    description: "Traversée retour.",
  },
];

export const SOLIDAIRE: readonly Raison[] = [
  {
    titre: "Nous collectons",
    description:
      "Avant le départ, nous réunissons des fournitures scolaires et sportives.",
  },
  {
    titre: "Nous transportons",
    description:
      "Elles voyagent avec nous dans la 4L, de Biarritz jusqu'au sud du Maroc.",
  },
  {
    titre: "Elles arrivent à destination",
    description:
      "L'acheminement se fait avec l'association Enfants du Désert, au profit des enfants du sud marocain.",
  },
];

export const EQUIPAGE: readonly Membre[] = [
  {
    prenom: "Romain",
    nom: "Poisson",
    role: "Site web, communication, gestion du projet",
    biographie: [
      "Étudiant à l'Efrei, en Mastère M1 Manager Développeur Full Stack.",
      "Titulaire d'un Bachelor Développeur en intelligence artificielle et data science.",
      "En alternance chez Thales comme apprenti ingénieur développement web.",
    ],
    emplacementPhoto: "Photo de Romain",
  },
  {
    prenom: "Bastien",
    nom: "Grangeon",
    role: "Mécanique et préparation de la 4L",
    biographie: [
      "Jeune diplômé d'un Bachelor Chargé d'études en conception des systèmes mécaniques, spécialisé en conception 3D.",
      "Actuellement à la recherche d'un CDI.",
    ],
    emplacementPhoto: "Photo de Bastien",
  },
];

export const ASSOCIATION = {
  nom: A_COMPLETER,
  subvention: 1000,
} as const;

export const BUDGET = {
  total: 11000,
  objectifSponsors: 10000,
  dejaFinance: 1000,
  postes: [
    { poste: "Inscription", montant: 3690 },
    { poste: "Achat de la 4L et carte grise", montant: 3000 },
    { poste: "Préparation mécanique et pièces", montant: 1800 },
    { poste: "Carburant et péages", montant: 1200 },
    { poste: "Assurance", montant: 500 },
    { poste: "Équipements obligatoires et outillage", montant: 400 },
    { poste: "Communication et stickers", montant: 200 },
    { poste: "Imprévus", montant: 210 },
  ] as readonly PosteBudget[],
} as const;

export const FORMULES: readonly Formule[] = [
  {
    lettre: "A",
    nom: "Coup de pouce",
    montant: 150,
    emplacement: "Vitres arrière",
    contreparties: [
      "Petit logo sur les vitres arrière",
      "Logo sur notre site",
      "Remerciement sur nos réseaux",
    ],
    unique: false,
  },
  {
    lettre: "B",
    nom: "Partenaire",
    montant: 500,
    emplacement: "Portières",
    contreparties: [
      "Logo moyen sur les portières",
      "Logo et lien sur notre site",
      "Publications régulières",
    ],
    unique: false,
  },
  {
    lettre: "C",
    nom: "Premium",
    montant: 1000,
    emplacement: "Ailes ou toit",
    contreparties: [
      "Grand logo sur les ailes ou le toit",
      "Encart dédié sur notre site",
      "Contenu photo et vidéo dédié",
    ],
    unique: false,
  },
  {
    lettre: "D",
    nom: "Partenaire principal",
    montant: 2500,
    emplacement: "Capot",
    contreparties: [
      "Votre logo sur le capot",
      "Mise en avant en page d'accueil du site",
      "Présence sur toutes nos communications",
      "Photos et vidéos du raid remises après l'arrivée",
    ],
    unique: true,
  },
];

export const RAISONS: readonly Raison[] = [
  {
    titre: `Sur la voiture, pendant ${kilometres(EVENEMENT.distanceKm)}`,
    description:
      "Votre logo roule avec nous à travers la France, l'Espagne et le Maroc.",
  },
  {
    titre: "Sur notre site web",
    description:
      "Votre logo y figure, avec un lien vers le site de votre entreprise.",
  },
  {
    titre: "Sur nos réseaux sociaux",
    description:
      "Nous y racontons la préparation puis le raid, en citant nos partenaires.",
  },
  {
    titre: "Sur le campus de l'Efrei",
    description:
      "Le projet est porté par une association de l'école : il y est visible, et vous avec lui.",
  },
  {
    titre: "Dans les Yvelines, pendant toute la préparation",
    description:
      "Versailles, Le Chesnay, les Yvelines : nous préparons le raid ici, près de vos clients.",
  },
  {
    titre: "Une image d'entreprise engagée",
    description:
      "Vous soutenez un projet solidaire, porté par deux jeunes de votre territoire.",
  },
];

export const SOUTIEN_EN_NATURE: readonly Raison[] = [
  {
    titre: "Pièces",
    description: "Des pièces détachées pour fiabiliser la 4L avant le départ.",
  },
  {
    titre: "Préparation mécanique",
    description: "Un passage à l'atelier, un contrôle, un coup de main.",
  },
  {
    titre: "Fournitures scolaires",
    description: "Elles partent avec nous, pour les enfants du sud marocain.",
  },
  {
    titre: "Équipement",
    description:
      "Le matériel obligatoire et l'outillage dont nous avons besoin pour le raid.",
  },
];

export const CALENDRIER: readonly Etape[] = [
  {
    dates: "Octobre 2026",
    lieu: "Site en ligne, recherche de sponsors",
    description: "Mise en ligne du site du projet et premiers rendez-vous.",
  },
  {
    dates: "Automne et hiver",
    lieu: "Achat et préparation de la 4L",
    description: "Bastien prépare et fiabilise la voiture pour le désert.",
  },
  {
    dates: "Avant le départ",
    lieu: "Pose des stickers",
    description:
      "Les logos de nos partenaires prennent place sur la carrosserie.",
  },
  {
    dates: EVENEMENT.dateDepart,
    lieu: "Départ de Biarritz",
    description:
      "Village départ, puis cap au sud vers l'Espagne et le Maroc.",
  },
  {
    dates: EVENEMENT.dateArrivee,
    lieu: "Arrivée à Marrakech",
    description: "Après 6 étapes dans le désert marocain.",
  },
];

export const DOSSIER_PDF = {
  href: "/dossier-sponsoring-les-farfadets-4l-trophy-2027.pdf",
  poids: "8,8 Mo",
  pages: 12,
} as const;

export type Email = {
  readonly utilisateur: string;
  readonly domaine: string;
};

export type Coordonnees = {
  readonly prenom: string;
  readonly telephone: string | null;
  readonly email: Email | null;
};

/* Les coordonnées sont renseignées par l'équipage. Tant qu'une valeur vaut `null`,
   la page affiche un bloc « à compléter » plutôt qu'un lien mort. */
export const COORDONNEES: readonly Coordonnees[] = [
  { prenom: "Romain", telephone: null, email: null },
  { prenom: "Bastien", telephone: null, email: null },
];

export const RESEAUX = {
  instagram: null as string | null,
  siteWeb: null as string | null,
};
