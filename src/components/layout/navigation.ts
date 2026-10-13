/* Partagé entre Header (client) et Footer (serveur) : un module client ne peut pas
   exporter de données vers un composant serveur. */
export const NAVIGATION = [
  { href: "/", label: "Accueil" },
  { href: "/equipage", label: "L'équipage" },
  { href: "/parcours", label: "Le parcours" },
  { href: "/sponsors", label: "Devenir sponsor" },
  { href: "/nous-aider", label: "Nous aider" },
  { href: "/contact", label: "Contact" },
] as const;
