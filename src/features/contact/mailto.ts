import type { Email } from "@/content/contact";

/* Lien `mailto:` avec l'arobase encodée (`%40`), comme le permet la norme des
   liens mailto (RFC 6068) : les messageries l'ouvrent normalement. Le but est que
   l'adresse ne soit pas reconnue dans le HTML. Sinon, l'option « Email Address
   Obfuscation » de Cloudflare (active par défaut) la remplacerait par un script de
   décodage que la CSP bloque, et le lien ne marcherait plus. */
export function mailtoHref(email: Email): string {
  return `mailto:${email.user}%40${email.domain}`;
}
