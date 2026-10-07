# Les Farfadets — 4L Trophy 2027

Site vitrine de l'équipage Romain Poisson et Bastien Grangeon, au départ du 4L Trophy 2027.

Il n'a qu'un but : **convaincre un dirigeant de TPE ou PME de devenir sponsor en moins de deux minutes de lecture**, et lui donner un moyen simple de nous joindre. C'est la déclinaison web du dossier de sponsoring PDF, dont il reprend la direction artistique.

## Démarrer

Node 20.9 ou plus récent.

```bash
npm install
npm run dev     # développement, http://localhost:3000
npm run build   # build de production
npm start       # sert le build
npm run lint
npx tsc --noEmit
```

## Avant de toucher au code

Le projet tourne sur **Next.js 16.4**, dont plusieurs conventions ont changé — notamment `middleware.ts`, devenu `proxy.ts`. La documentation de la version exacte est embarquée dans `node_modules/next/dist/docs/`. C'est elle qui fait foi, pas la mémoire qu'on peut avoir des versions précédentes. Voir aussi `AGENTS.md`.

Pas de dossier `src/` : l'App Router est à la racine, dans `app/`.

## Où se trouve quoi

```
app/
├── layout.tsx            polices, en-tête, pied de page, lien d'évitement
├── page.tsx              accueil : le parcours de lecture complet et condensé
├── globals.css           tokens @theme (Tailwind v4, pas de tailwind.config.js)
├── equipage/ parcours/ sponsors/ nous-aider/ contact/
├── mentions-legales/ confidentialite/
├── sitemap.ts  robots.ts  opengraph-image.tsx  icon.tsx
└── components/           le vocabulaire visuel du book
content/
├── projet.ts             source de vérité du contenu factuel
└── sponsors.ts           liste des sponsors, vide au départ
proxy.ts                  CSP à nonce
next.config.ts            autres en-têtes de sécurité
public/                   le dossier de sponsoring en PDF
```

### `content/` est la source de vérité

**Aucun montant, aucune date, aucun chiffre ne doit être écrit en dur dans le JSX.** Tout vient de `content/projet.ts`, qui reprend la fiche projet telle quelle. Si un montant change, il ne change qu'à un endroit et le site reste cohérent avec le book.

Les nombres sont mis en forme par `nombre()`, `euros()` et `kilometres()`, exportés du même fichier. Ils produisent la typographie française attendue — `6 000 km`, `1 000 €` — avec des espaces insécables. N'écrivez jamais un espace insécable à la main dans une chaîne : c'est un caractère invisible dans le code.

### Ajouter un sponsor

Dans `content/sponsors.ts` :

```ts
export const SPONSORS: readonly Sponsor[] = [
  {
    nom: "Nom de l'entreprise",
    formule: "B",
    logo: "/sponsors/nom-entreprise.svg",
    largeurLogo: 240,
    hauteurLogo: 80,
    site: "https://exemple.fr",
  },
];
```

Deux garde-fous volontaires :

- le type de `site` est `` `https://${string}` `` : un `http://` ne compile pas, et `estLienSur()` revérifie au rendu ;
- le type de `logo` impose `/sponsors/…`, donc un fichier hébergé chez nous. **Jamais de lien direct vers le serveur d'un tiers** : disponibilité, vie privée des visiteurs, risque de substitution d'image.

Un sponsor en formule D apparaît automatiquement en page d'accueil : c'est une contrepartie vendue.

## Direction artistique

Deux valeurs viennent de la charte, les autres sont **relevées au pixel sur le PDF du book** et restent à confirmer par le Design System.

| Token | Hex | Usage |
| --- | --- | --- |
| `bleu-nuit` | `#18182b` | texte courant, aplats sombres |
| `rouge-4l` | `#b2112c` | chiffres clés, appels à l'action, surtitres |
| `papier` | `#fbf7ee` | fond de page |
| `sable` | `#f1e3c9` | cartes, encadrés |
| `sable-fonce` | `#d8c198` | filets, pointillés, pays de la carte |
| `terracotta` | `#b1502d` | filets sous les titres, grands numéraux, anneau de focus |
| `ocre` | `#e3a63b` | chiffres et titres **sur fond bleu nuit uniquement** |
| `bleu-schema` | `#335f9e` | schémas uniquement |
| `gris-texte` | `#535065` | légendes, texte secondaire |

Trois polices, chargées par `next/font/google` donc auto-hébergées : **Barlow Condensed** (titres et chiffres, 700/800), **Barlow** (texte courant, 400/500/600), **Playfair Display italique** (citations, avec parcimonie).

Règles non négociables :

- **un seul élément rouge dominant par écran** — le rouge signale, il ne décore pas ;
- **l'ocre ne se pose jamais sur fond clair** : 2,01:1 sur papier, 1,69:1 sur sable, soit très en dessous du seuil ;
- **aucune ombre, aucun dégradé** : les blocs se distinguent par leur aplat ;
- **jamais de texte posé directement sur une photo** : toujours un aplat ou un voile derrière ;
- pas de dark mode. La charte dérive d'une identité print et n'a pas de variante sombre.
- passez par les tokens `@theme`, pas par des valeurs arbitraires type `text-[#b2112c]`. Si une valeur arbitraire semble nécessaire, c'est qu'il manque un token.

Les composants de `app/components/` reproduisent le vocabulaire du book : en-tête de section à filet terracotta, bloc statistique bleu nuit à chiffre ocre, cartes sable à chiffre rouge, liste à grands numéraux, timeline « la piste » (ligne pointillée rouge reliant des points pleins — c'est la signature visuelle du projet, ne la remplacez pas par une bordure pleine), citation, carte de formule, emplacement photo, bloc `[À COMPLÉTER]`.

## Sécurité

Le site est statique dans l'esprit, mais il porte l'image de l'équipage auprès d'entreprises.

- **CSP stricte à nonce**, générée par requête dans `proxy.ts`, sans `script-src 'unsafe-inline'`, avec `frame-ancestors 'none'`.
- `next.config.ts` ajoute `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` et HSTS, et retire `X-Powered-By`.
- **Aucun traceur, aucun cookie, aucun script tiers.** Zéro requête vers un domaine tiers au chargement — c'est ce qui rend la page confidentialité honnête et simple.
- Aucun `dangerouslySetInnerHTML`, aucun secret dans le code.
- Pas de formulaire de contact : pas de backend, donc pas de surface d'attaque, pas de spam, pas de données personnelles hébergées.

### Compromis à connaître

La CSP à nonce **impose le rendu dynamique** : Next.js ne peut pas injecter de nonce dans un shell prérendu. C'est pourquoi `cacheComponents` et `partialPrefetching` ont été retirés de la configuration du scaffold, et pourquoi le layout racine appelle `connection()`. Les pages sont donc servies à la demande et ne sont pas mises en cache par un CDN.

Le seul moyen de revenir au statique serait d'autoriser `'unsafe-inline'` sur `script-src`. Si ce compromis est un jour rediscuté, il se change à trois endroits : `proxy.ts`, `next.config.ts` et le `connection()` du layout.

## Accessibilité

Cible : **WCAG 2.2 niveau AA**. Le site s'adresse à des dirigeants de tout âge, souvent sur mobile.

État vérifié : Lighthouse 100 en accessibilité, bonnes pratiques et SEO sur les 8 pages ; axe-core sans violation à 1280 px comme à 320 px ; aucun défilement horizontal à 320 px ni à 200 % de zoom ; parcours complet au clavier avec focus toujours visible.

À respecter en modifiant le site :

- un seul `<h1>` par page, hiérarchie de titres sans saut de niveau (`NumberedList` accepte `niveau` pour cette raison) ;
- aucune information portée par la seule couleur : les zones A/B/C/D de la 4L portent leur lettre et une légende texte les reprend ;
- SVG porteurs de sens en `role="img"` avec `<title>` ; SVG décoratifs en `aria-hidden="true"` ;
- le tableau des postes est l'équivalent textuel du graphique budget, qui est masqué aux technologies d'assistance ;
- cibles tactiles d'au moins 44 × 44 px ;
- libellés de liens explicites hors contexte, format et nouvel onglet signalés ;
- `prefers-reduced-motion` respecté.

Le menu mobile est le **seul composant client** du site. Il s'appuie sur `<dialog>` en mode modal, ce qui donne le piégeage du focus et la fermeture par `Échap` nativement.

## Avant la mise en ligne

1. Renseigner les **12 blocs `[À COMPLÉTER]`** : nom de l'association, cadre fiscal, téléphones et e-mails de Romain et Bastien, adresse du site, compte Instagram, identification de l'éditeur, directeur de la publication, hébergeur, durée de conservation des journaux.
2. Fournir les **6 photos** : équipage (accueil et contact), portraits de Romain et de Bastien, la 4L, les fournitures collectées.
3. Définir `NEXT_PUBLIC_SITE_URL` sur l'adresse réelle. Elle alimente les URL canoniques, le sitemap et les images Open Graph.
4. Remplacer l'icône d'onglet (`app/icon.tsx`), aujourd'hui une simple initiale faute de logo.
5. Faire confirmer les couleurs relevées par le Design System.

`npm audit` remonte des vulnérabilités dans la chaîne ESLint uniquement. `npm audit --omit=dev` ne remonte rien : rien n'atteint le navigateur ni le serveur en production.

## Règles de contenu

- Reprendre les faits et montants de la fiche projet **tels quels**. Aucun chiffre inventé, aucun arrondi.
- N'inventer **aucun** sponsor, témoignage, retombée média ou statistique.
- Toute information manquante s'écrit `[À COMPLÉTER]`, **visiblement**, jamais devinée ni masquée.
- **Ne mentionner aucun pourcentage de déduction fiscale** tant que le cadre fiscal n'est pas validé par l'association.
- Ne pas utiliser le logo officiel du 4L Trophy. L'équipage n'a pas de logo : écrire « LES FARFADETS » en Barlow Condensed extra-gras.
- Ton : vouvoiement, « nous » pour l'équipage et « vous » pour le sponsor. Phrases courtes, une idée par phrase. Enthousiaste mais professionnel, sans superlatifs ni emoji.
