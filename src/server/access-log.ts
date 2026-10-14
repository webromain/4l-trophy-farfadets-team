/* Journal d'accès : une ligne JSON par page servie, écrite sur la sortie standard
   par proxy.ts. En production, Docker la confie à journald, qui la supprime au bout
   de six mois (compose.yaml). Elle contient exactement ce qu'annonce la page
   Confidentialité : adresse IP, date et heure, page demandée, navigateur. Ni
   paramètres d'URL, ni cookies, ni page de provenance. */

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
