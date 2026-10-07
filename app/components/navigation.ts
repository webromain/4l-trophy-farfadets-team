/* Partagé entre Header (client) et Footer (serveur) : un module client ne peut pas
   exporter de données vers un composant serveur. */
export const NAVIGATION = [
  { href: "/", libelle: "Accueil" },
  { href: "/equipage", libelle: "L'équipage" },
  { href: "/parcours", libelle: "Le parcours" },
  { href: "/sponsors", libelle: "Devenir sponsor" },
  { href: "/nous-aider", libelle: "Nous aider" },
  { href: "/contact", libelle: "Contact" },
] as const;
