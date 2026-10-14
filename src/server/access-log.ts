import { appendFile, mkdir, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

/* Journal d'accès : une ligne JSON par page servie, écrite par proxy.ts. Elle
   contient exactement ce qu'annonce la page Confidentialité : adresse IP, date et
   heure, page demandée, navigateur. Ni paramètres d'URL, ni cookies, ni page de
   provenance. En production, quelle que soit la façon de lancer le site, un
   fichier par jour dans `logs/` ; le serveur supprime lui-même ceux de plus de six
   mois (instrumentation.ts), la durée promise par la page. */

export type LoggedRequest = {
  readonly method: string;
  readonly nextUrl: { readonly pathname: string };
  readonly headers: Headers;
};

/* Derrière le tunnel Cloudflare, la connexion vient de cloudflared : l'adresse du
   visiteur arrive dans `cf-connecting-ip`. Le conteneur n'écoute que sur le
   serveur, personne d'autre ne peut donc forger cet en-tête. */
export function clientIp(headers: Headers): string {
  return headers.get("cf-connecting-ip") ?? "-";
}

export function formatAccessLog(
  request: LoggedRequest,
  date = new Date(),
): string {
  return JSON.stringify({
    time: date.toISOString(),
    ip: clientIp(request.headers),
    method: request.method,
    path: request.nextUrl.pathname,
    userAgent: request.headers.get("user-agent") ?? "-",
  });
}

/* À côté du serveur : `/app/logs` dans l'image Docker (où le volume est monté),
   `logs/` à la racine du dépôt avec `npm start`. */
export const ACCESS_LOG_DIRECTORY = join(process.cwd(), "logs");

/* Six mois, arrondis au-dessus. */
const RETENTION_DAYS = 183;
const DAY_MS = 24 * 60 * 60 * 1000;
const FILE_NAME = /^access-(\d{4}-\d{2}-\d{2})\.log$/;

function day(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/* Un fichier par jour (date UTC) : la suppression se fait fichier par fichier. */
export function accessLogFile(directory: string, date: Date): string {
  return join(directory, `access-${day(date)}.log`);
}

/* Supprime les fichiers du journal dont la journée entière a plus de six mois.
   La date est lue dans le nom du fichier : rien d'autre dans le dossier n'est
   touché. Renvoie les noms supprimés. */
export async function purgeAccessLogs(
  directory: string,
  now: Date,
): Promise<string[]> {
  const limit = now.getTime() - RETENTION_DAYS * DAY_MS;
  const removed: string[] = [];
  for (const name of await readdir(directory)) {
    const fileDay = FILE_NAME.exec(name)?.[1];
    if (fileDay && Date.parse(`${fileDay}T00:00:00Z`) + DAY_MS <= limit) {
      await unlink(join(directory, name));
      removed.push(name);
    }
  }
  return removed;
}

/* Ménage au démarrage du serveur, puis toutes les 24 heures. Une erreur est
   signalée sans arrêter le serveur ; la minuterie ne le retient pas à l'arrêt. */
export function scheduleAccessLogPurge(directory = ACCESS_LOG_DIRECTORY): void {
  const purge = () =>
    mkdir(directory, { recursive: true })
      .then(() => purgeAccessLogs(directory, new Date()))
      .catch((error: unknown) => {
        console.error("Nettoyage du journal d'accès impossible :", error);
      });
  void purge();
  setInterval(purge, DAY_MS).unref();
}

/* Ajoute la ligne au fichier du jour, en recréant le dossier s'il a disparu.
   Une écriture ratée ne doit jamais empêcher de servir la page : l'erreur est
   signalée, pas propagée. */
export async function writeAccessLog(
  request: LoggedRequest,
  date = new Date(),
  directory = ACCESS_LOG_DIRECTORY,
): Promise<void> {
  const line = formatAccessLog(request, date);
  try {
    await mkdir(directory, { recursive: true });
    await appendFile(accessLogFile(directory, date), `${line}\n`);
  } catch (error) {
    console.error("Journal d'accès indisponible :", error);
  }
}
