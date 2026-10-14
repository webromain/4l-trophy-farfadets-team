/* Appelé une fois au démarrage du serveur Next.js. En production, quelle que soit
   la façon de lancer le site (Docker ou `npm start`), lance le ménage quotidien du
   journal d'accès : les fichiers de plus de six mois sont supprimés
   (server/access-log.ts). */
export async function register() {
  if (
    process.env.NEXT_RUNTIME !== "nodejs" ||
    process.env.NODE_ENV !== "production"
  ) {
    return;
  }
  const { scheduleAccessLogPurge } = await import("@/server/access-log");
  scheduleAccessLogPurge();
}
