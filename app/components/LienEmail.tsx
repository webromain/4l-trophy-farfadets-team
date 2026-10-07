import type { Email } from "@/content/projet";

/* Obfuscation légère : l'adresse n'existe nulle part d'un seul tenant, ni dans les
   sources ni dans le texte affiché. Le `href` reste complet, donc le lien reste
   cliquable et annoncé normalement — un moissonneur qui lit le HTML la retrouvera.
   La seule parade réellement efficace demanderait du JavaScript, au prix du lien
   pour les visiteurs qui n'en ont pas. */
export default function LienEmail({ email }: { email: Email }) {
  return (
    <a
      href={`mailto:${email.utilisateur}@${email.domaine}`}
      className="inline-flex min-h-11 items-center font-semibold text-rouge-4l underline underline-offset-4 hover:text-bleu-nuit"
    >
      <span>{email.utilisateur}</span>
      <span>@</span>
      <span>{email.domaine}</span>
    </a>
  );
}
