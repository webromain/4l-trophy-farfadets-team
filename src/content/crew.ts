/* Les deux membres de l'équipage et l'association qui porte le projet. */

export type CrewMember = {
  readonly firstName: string;
  readonly name: string;
  readonly role: string;
  /* Son âge au départ du raid, pour ne pas avoir à le changer d'ici là. */
  readonly age: number;
  readonly bio: readonly string[];
  /* Nom du fichier de son portrait dans `public/photos/`, sans extension. */
  readonly photo: string;
  readonly photoLabel: string;
};

export const CREW: readonly CrewMember[] = [
  {
    firstName: "Romain",
    name: "Poisson",
    role: "Site web, communication, gestion du projet",
    age: 21,
    bio: [
      "Étudiant à l'Efrei, en Mastère M1 Manager Développeur Full Stack.",
      "Titulaire d'un Bachelor Développeur en intelligence artificielle et data science.",
      "En alternance chez Thales Services Numériques comme apprenti ingénieur développement web.",
    ],
    photo: "romain",
    photoLabel: "Photo de Romain",
  },
  {
    firstName: "Catalin",
    name: "Stefanescu",
    role: "Mécanique et préparation de la 4L",
    age: 23,
    bio: [
      "Étudiant en 3e année de BUT Génie industriel et maintenance à l'IUT de Mantes-en-Yvelines.",
      "En parallèle, élève de 1re année à l'ISTY, école d'ingénieurs, en Systèmes numériques pour l'industrie.",
      "Expérience de terrain en maintenance, en automatismes et en systèmes embarqués.",
    ],
    photo: "catalin",
    photoLabel: "Photo de Catalin",
  },
];

/* Les portraits de l'équipage : affichés côte à côte tant que la photo des deux
   ensemble n'existe pas. */
export const CREW_PORTRAITS = CREW.map((member) => ({
  name: member.photo,
  alt: `Portrait de ${member.firstName} ${member.name}`,
  label: member.photoLabel,
}));

/* L'éditeur et directeur de la publication du site, qui le publie à titre
   personnel : l'association porte le projet, pas le site. */
export const PUBLISHER = `${CREW[0].firstName} ${CREW[0].name}`;

export const ASSOCIATION = {
  /* Son nom officiel, suivi de celui sous lequel elle porte le projet. */
  name: "EFREI Motorsport (4L & Faons)",
  /* Son siège : c'est l'adresse de l'école. */
  address: "30-32 avenue de la République, 94800 Villejuif",
  grant: 1000,
} as const;
