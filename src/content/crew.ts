/* Les deux membres de l'équipage et l'association qui porte le projet. */

import { TO_COMPLETE } from "./site";

export type CrewMember = {
  readonly firstName: string;
  readonly name: string;
  readonly role: string;
  readonly bio: readonly string[];
  readonly photoLabel: string;
};

export const CREW: readonly CrewMember[] = [
  {
    firstName: "Romain",
    name: "Poisson",
    role: "Site web, communication, gestion du projet",
    bio: [
      "Étudiant à l'Efrei, en Mastère M1 Manager Développeur Full Stack.",
      "Titulaire d'un Bachelor Développeur en intelligence artificielle et data science.",
      "En alternance chez Thales comme apprenti ingénieur développement web.",
    ],
    photoLabel: "Photo de Romain",
  },
  {
    firstName: "Bastien",
    name: "Grangeon",
    role: "Mécanique et préparation de la 4L",
    bio: [
      "Jeune diplômé d'un Bachelor Chargé d'études en conception des systèmes mécaniques, spécialisé en conception 3D.",
      "Actuellement à la recherche d'un CDI.",
    ],
    photoLabel: "Photo de Bastien",
  },
];

export const ASSOCIATION = {
  name: TO_COMPLETE,
  grant: 1000,
} as const;
