/* Mise en forme des nombres à la française, avec espaces insécables. */

const NBSP = "\u00a0";

const frenchNumber = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 0,
});

/* CLDR groupe les milliers avec une espace fine insécable (U+202F). La fiche projet
   et le book utilisent l'insécable classique, plus large : on s'aligne dessus. */
export function formatNumber(value: number): string {
  return frenchNumber.format(value).replace(/\u202f/g, NBSP);
}

export function formatEuros(value: number): string {
  return `${formatNumber(value)}${NBSP}€`;
}

export function formatKilometres(value: number): string {
  return `${formatNumber(value)}${NBSP}km`;
}
