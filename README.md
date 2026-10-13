# Les Farfadets — 4L Trophy 2027

Site vitrine de l'équipage Romain Poisson et Catalin Stefanescu, au départ du 4L Trophy 2027.

Il n'a qu'un but : **convaincre un dirigeant de TPE ou PME de devenir sponsor en moins de deux minutes de lecture**, et lui donner un moyen simple de nous joindre. C'est la déclinaison web du dossier de sponsoring PDF, dont il reprend la direction artistique.

## Démarrer

Node 22.12 ou plus récent (exigé par l'outil de test).

```bash
npm install          # réseau lent : ajouter --maxsockets=3 --fetch-retries=5 --fetch-timeout=600000
npm run dev          # développement, http://localhost:3000
npm run build        # build de production
npm start            # sert le build

npm run check        # types + lint + tests : à lancer avant de pousser
npm test             # tests seuls (npm run test:watch pour les relancer à chaque modification)
npm run format       # formate le code, vérifie, et annule tout si la vérification échoue
```

### Formatage automatique

Le code est formaté par **Prettier**, de trois façons :

- **à l'enregistrement** dans VS Code, avec l'extension recommandée par `.vscode/extensions.json` ;
- **à chaque commit**, par un hook (`.husky/pre-commit`) : les fichiers indexés sont formatés, puis types, lint et tests sont relancés. Si une étape échoue, les fichiers reprennent leur état d'origine et le commit est annulé ;
- **à la demande**, par `npm run format`, qui suit le même principe sur tout le projet (`scripts/format.mjs`) : vérification avant, contrôle de Prettier que le sens du code est préservé, formatage, vérification après, et retour arrière automatique au moindre échec.

Un formateur ne change que la mise en page du code ; ces vérifications sont là pour le prouver à chaque fois.

### Tests

Les tests (Vitest, fichiers `*.test.ts` à côté du code testé) ne visent pas la couverture mais les erreurs qui coûtent cher :

| Fichier | Ce qu'il attrape |
| --- | --- |
| `src/content/content.test.ts` | un total de budget faux, une formule mal classée, un PDF déplacé, un sponsor mal saisi |
| `src/components/layout/navigation.test.ts` | un lien du menu ou du code vers une page qui n'existe pas, un sitemap incomplet |
| `src/server/security/csp.test.ts` | une CSP assouplie par erreur, un en-tête de sécurité retiré |
| `src/lib/format.test.ts` | une espace insécable perdue dans les montants |
| `src/lib/scroll-progress.test.ts` | un calcul d'effet au scroll faux (division par zéro, bornes) |
| `src/features/budget/slices.test.ts` | un graphique de budget qui ne fait plus le total |
| `src/architecture.test.ts` | un import qui casse le rangement décrit plus bas |

## Avant de toucher au code

Le projet tourne sur **Next.js 16.4**, dont plusieurs conventions ont changé — notamment `middleware.ts`, devenu `proxy.ts`. La documentation de la version exacte est embarquée dans `node_modules/next/dist/docs/`. C'est elle qui fait foi, pas la mémoire qu'on peut avoir des versions précédentes. Voir aussi `AGENTS.md`.

## Où se trouve quoi

Tout le code est dans `src/`, rangé par rôle. La racine ne contient que la configuration. **Les noms du code sont en anglais** (fichiers, composants, variables, classes CSS) ; les commentaires, cette documentation et le contenu du site sont en français, et les adresses des pages aussi (`/equipage`, `/parcours`…), puisque ce sont elles que voient les visiteurs.

```
src/
├── app/                  LES ROUTES : une page = ses métadonnées + la liste de ses sections
│   ├── layout.tsx        en-tête, pied de page, fond, lien d'évitement
│   ├── page.tsx          accueil
│   ├── equipage/ parcours/ sponsors/ nous-aider/ contact/
│   ├── mentions-legales/ confidentialite/
│   └── sitemap.ts  robots.ts  opengraph-image.tsx  icon.tsx
├── features/             LE SITE PAR SUJET : les sections et les composants propres à un sujet
│   ├── home/             bannière d'ouverture
│   ├── event/            le 4L Trophy en bref, la mission solidaire
│   └── crew/  route/  sponsors/  budget/  support/  contact/
├── components/           LES BRIQUES PARTAGÉES, sans lien avec un sujet
│   ├── ui/               boutons, titres, cartes, listes, blocs de chiffres
│   ├── layout/           en-tête, pied de page, liste des pages
│   └── effects/          fond animé et pilote des effets au scroll
├── content/              LES DONNÉES : un fichier par sujet, source de vérité du contenu
├── lib/                  fonctions pures (mise en forme des nombres, calculs des effets)
├── styles/               LES STYLES GLOBAUX : thème, verre, effets au scroll, base
├── server/               LE CÔTÉ SERVEUR : la sécurité (CSP, en-têtes), la recherche des photos
└── proxy.ts              point d'entrée serveur de chaque requête
scripts/                  outils du projet (formatage sûr)
public/                   fichiers servis tels quels : pdfs/, photos/, sponsors/
docs/references/          modèles de travail, jamais mis en ligne : l'affiche officielle du 4L Trophy
```

L'alias `@/` pointe sur `src/` : `@/components/ui/Button`, `@/content/budget`…

### Les règles de rangement

- **Une page ne contient pas de mise en page.** `src/app/**/page.tsx` déclare ses métadonnées et enchaîne des sections ; le JSX est dans `features/`. Seules les deux pages légales, qui ne sont que du texte, gardent leur contenu sur place.
- **Une fonctionnalité regroupe tout ce qui parle d'un sujet.** On y trouve trois sortes de fichiers : `*Section` (un bloc complet de page), `*Preview` (la version condensée affichée à l'accueil, avec un lien vers la page), et les composants propres au sujet (`RouteMap`, `TierCard`, `BudgetChart`…).
- **Une brique de `components/` ne connaît aucun sujet.** Si un composant importe `content/`, sa place est dans une fonctionnalité — à l'exception du pied de page, qui rappelle les chiffres du raid.
- **Les imports ne vont que dans un sens** : `app` → `features` → `components` → `content` et `lib`. Jamais de `../` : on passe par `@/`.
- **Un style va au plus près de ce qu'il habille.** Dans l'ordre : des classes Tailwind dans le composant ; un module CSS à côté du composant (`Header.module.css`) quand il faut du CSS que Tailwind n'exprime pas et qu'un seul composant s'en sert ; `src/styles/` seulement pour ce qui est partagé par tout le site (thème, verre, effets au scroll).

Ces règles sont vérifiées par `src/architecture.test.ts`.

Pour modifier le site :

| Je veux… | J'ouvre… |
| --- | --- |
| changer un chiffre, une date, un texte factuel | `src/content/` |
| changer l'ordre des blocs d'une page | `src/app/<page>/page.tsx` |
| changer la mise en page d'un bloc | `src/features/<sujet>/` |
| changer l'allure d'un bouton, d'un titre, d'une carte partout | `src/components/ui/` |
| changer une couleur, une police, une taille de titre | `src/styles/theme.css` |
| changer l'aspect du verre ou le reflet du soleil | `src/styles/glass.css` |
| changer un effet au scroll | `src/styles/scroll-effects.css`, `track.css` et `src/lib/scroll-progress.ts` |
| changer le fond animé | `src/components/effects/BackgroundScene.tsx` et son module CSS |
| ajouter une page | un dossier dans `src/app/`, ses sections dans une fonctionnalité, une ligne dans `src/components/layout/navigation.ts` |

### Frontend et backend

Le site n'a **pas de backend au sens habituel** : ni base de données, ni API, ni formulaire. Presque tout est rendu côté serveur à partir des fichiers de `content/`, et trois composants seulement s'exécutent dans le navigateur (`Header`, `ScrollEffects`, `ReactiveCard`, marqués `"use client"`).

Ce qui tient lieu de côté serveur est regroupé pour rester lisible :

- `src/proxy.ts` et `src/server/security/` : la CSP et les en-têtes de sécurité ;
- `src/app/robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.tsx` : les fichiers que Next génère pour les moteurs de recherche et les réseaux sociaux ;
- `src/content/` : les données.

Le jour où le site aura besoin d'un vrai traitement serveur (formulaire de contact, envoi de courriel), sa logique ira dans `src/server/` et sa route dans `src/app/api/`.

### `src/content/` est la source de vérité

**Aucun montant, aucune date, aucun chiffre ne doit être écrit en dur dans le JSX.** Tout vient des fichiers de `src/content/` (`event.ts`, `route.ts`, `crew.ts`, `budget.ts`, `sponsorship.ts`, `contact.ts`, `site.ts`), qui reprennent la fiche projet telle quelle. Si un montant change, il ne change qu'à un endroit et le site reste cohérent avec le book.

Les nombres sont mis en forme par `formatNumber()`, `formatEuros()` et `formatKilometres()`, dans `src/lib/format.ts`. Ils produisent la typographie française attendue — `6 000 km`, `1 000 €` — avec des espaces insécables. N'écrivez jamais un espace insécable à la main dans une chaîne : c'est un caractère invisible dans le code.

### Ajouter une photo

Aucune ligne de code à changer : déposez le fichier dans `public/photos/` avec le bon nom, et il remplace son emplacement réservé (ou son dessin) au prochain chargement de la page.

| Fichier | Photo | Où elle apparaît | Format conseillé |
| --- | --- | --- | --- |
| `equipage.jpg` | Romain et Catalin ensemble | Accueil et page Contact | Paysage, 2 400 px de large ou plus |
| `romain.jpg` | Portrait de Romain | Page L'équipage | Portrait 3:4, 900 × 1 200 px ou plus |
| `catalin.jpg` | Portrait de Catalin | Page L'équipage | Portrait 3:4, 900 × 1 200 px ou plus |
| `4l.jpg` | La 4L, une fois achetée | Page Le parcours | Paysage, 2 400 px de large ou plus |
| `fournitures.jpg` | Les fournitures collectées | Page Nous aider | Paysage, 2 400 px de large ou plus |

Les extensions `.jpg`, `.jpeg`, `.png`, `.webp` et `.avif` sont acceptées. La photo est recadrée pour remplir son cadre (3:2 en paysage, 3:4 en portrait) : gardez le sujet au centre. Elle est redimensionnée à la volée par `next/image`, donc un fichier lourd ne ralentit pas la page.

Tant que `equipage.jpg` manque, les deux portraits s'affichent côte à côte à sa place, sur l'accueil et la page Contact (`src/components/ui/GroupPhoto.tsx`) ; la photo de groupe les remplace dès qu'elle est déposée.

La recherche du fichier est dans `src/server/photos.ts`, l'affichage dans `src/components/ui/Photo.tsx`. Le nom du portrait de chaque membre est dans `src/content/crew.ts` (`photo`).

### Ajouter un sponsor

Dans `src/content/sponsors.ts` :

```ts
export const SPONSORS: readonly Sponsor[] = [
  {
    name: "Nom de l'entreprise",
    tier: "B",
    logo: "/sponsors/nom-entreprise.svg",
    logoWidth: 240,
    logoHeight: 80,
    website: "https://exemple.fr",
  },
];
```

Deux garde-fous volontaires :

- le type de `website` est `` `https://${string}` `` : un `http://` ne compile pas, et `npm test` revérifie l'adresse ;
- le type de `logo` impose `/sponsors/…`, donc un fichier hébergé chez nous, et `npm test` vérifie que le fichier existe dans `public/sponsors/`. **Jamais de lien direct vers le serveur d'un tiers** : disponibilité, vie privée des visiteurs, risque de substitution d'image.

Un sponsor en formule D apparaît automatiquement en page d'accueil : c'est une contrepartie vendue.

## Direction artistique

La référence complète est [CHARTE-GRAPHIQUE.md](CHARTE-GRAPHIQUE.md) : couleurs, typographie, verre, scène de fond, composants, mouvement. Ce qui suit en est le résumé.

La charte est celle de **l'affiche officielle du 4L Trophy 2027** (`docs/references/affiche-2027.jpeg`) : un ciel de coucher de soleil rouge, orange et jaune, du texte blanc, une 4L en silhouette. Les teintes de l'affiche sont relevées au pixel sur l'image ; le bleu nuit et le rouge carmin sont les couleurs propres à l'équipage.

| Token | Hex | Usage |
| --- | --- | --- |
| `poster-red` | `#ff153a` | ciel du site (haut du dégradé), badge de formule |
| `vermilion` | `#ff3d37` | ciel du site (milieu du dégradé) |
| `poster-orange` | `#ff7a36` | ciel du site (bas du dégradé), schémas |
| `poster-yellow` | `#ffd251` | halo du soleil, accent **sur bleu nuit uniquement** |
| `peach` | `#feb87c` | halo du soleil, graphique du budget |
| `night` | `#18182b` | silhouettes, verre fumé, boutons |
| `crimson` | `#b2112c` | dune lointaine, crépuscule |
| `plum` | `#3a1236` | crépuscule, dune proche |
| `paper` | `#fbf7ee` | texte clair sur badges, schémas |
| `sun` | `#ffdc7c` | disque du soleil et phare de la 4L |

Cinq couleurs **de contexte** (`ink`, `ink-soft`, `accent`, `line`, `ink-inverse`) changent de valeur selon le support : blanc sur le ciel du site et sur le verre, blanc et jaune dans `.surface-dark`. Les composants les utilisent au lieu de couleurs fixes, ce qui leur permet de vivre sur n'importe quel fond.

Quatre polices, chargées par `next/font/google` donc auto-hébergées (`src/styles/fonts.ts`), choisies pour leur ressemblance avec celles de l'affiche :

- **Squada One** (`font-display`) : très grands titres et chiffres, à la manière du « 4L TROPHY » ;
- **Permanent Marker** (`font-script`, classe `.eyebrow`) : accroches écrites au feutre, inclinées, à la manière du « Desert Aventure ! » ;
- **Bricolage Grotesque** (`font-heading` et texte courant) : capitales grasses et texte ;
- **Kaushan Script** (`font-quote`) : la citation au pinceau, et elle seule.

**Le verre** (`.glass`, `src/styles/glass.css`) habille tous les encadrés : le ciel, flouté, se voit à travers ; un liseré clair en dessine le bord ; le soleil s'y reflète, du côté où il se trouve, et le reflet s'éteint à mesure que la nuit tombe. `.glass-dark` donne un verre fumé pour les blocs qui doivent trancher (grand chiffre, formule principale).

Règles :

- **le texte posé sur le ciel ou sur le verre est blanc**, jamais jaune ni sombre : le fond va du rouge à l'orange et seul le blanc y reste lisible partout ;
- **le jaune ne sert d'accent que sur verre fumé** (`.surface-dark`) ;
- **la typographie fait le décor** : titres géants, accroches de travers, bandes de mots au contour (`Marquee`). Pas de filets ni d'ornements ajoutés ;
- pas de dark mode ;
- passez par les tokens `@theme`, pas par des valeurs arbitraires type `text-[#b2112c]`. Si une valeur arbitraire semble nécessaire, c'est qu'il manque un token.

Le fond du site (`BackgroundScene`) est une scène fixe qui suit le défilement de la page : le soleil se couche, la nuit tombe, les dunes glissent et une 4L en silhouette traverse l'écran de gauche à droite. Les effets au scroll (apparitions, parallaxe, sections à défilement horizontal, reflets) sont pilotés par `ScrollEffects` à partir des calculs de `src/lib/scroll-progress.ts` ; ils sont coupés quand le système demande des animations réduites.

## Sécurité

Le site est statique dans l'esprit, mais il porte l'image de l'équipage auprès d'entreprises.

- **CSP stricte à nonce**, générée par requête dans `src/proxy.ts` (règles dans `src/server/security/csp.ts`), sans `script-src 'unsafe-inline'`, avec `frame-ancestors 'none'`.
- `next.config.ts` ajoute, depuis `src/server/security/headers.ts`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` et HSTS, et retire `X-Powered-By`.
- **Aucun traceur, aucun cookie, aucun script tiers.** Zéro requête vers un domaine tiers au chargement — c'est ce qui rend la page confidentialité honnête et simple.
- Aucun `dangerouslySetInnerHTML`, aucun secret dans le code.
- Pas de formulaire de contact : pas de backend, donc pas de surface d'attaque, pas de spam, pas de données personnelles hébergées.

### Compromis à connaître

La CSP à nonce **impose le rendu dynamique** : Next.js ne peut pas injecter de nonce dans un shell prérendu. C'est pourquoi `cacheComponents` et `partialPrefetching` ont été retirés de la configuration du scaffold, et pourquoi le layout racine appelle `connection()`. Les pages sont donc servies à la demande et ne sont pas mises en cache par un CDN.

Le seul moyen de revenir au statique serait d'autoriser `'unsafe-inline'` sur `script-src`. Si ce compromis est un jour rediscuté, il se change à trois endroits : `src/server/security/csp.ts`, `next.config.ts` et le `connection()` du layout.

## Accessibilité

Cible : **WCAG 2.2 niveau AA**. Le site s'adresse à des dirigeants de tout âge, souvent sur mobile.

**Dernier audit : 14 octobre 2026**, avec axe-core 4.10 sur les huit pages, en 1440 px et en 390 px, en haut et en bas de page. Aucune violation de structure : titres, repères, noms accessibles, langue, cibles tactiles, images. Une seule règle échoue, le **contraste** du texte blanc posé directement sur le ciel : 4,1:1 sur le rouge du haut, 3,5:1 sur le vermillon et 2,6:1 sur l'orange du bas, pour un seuil AA de 4,5:1 en texte courant (3:1 pour les grands titres, qui passent sauf sur l'orange). Le contraste remonte sur le verre fumé (17:1) et à mesure que la nuit tombe. C'est le compromis de la direction artistique : le corriger demande d'assombrir le ciel ou de poser le texte courant sur du verre fumé. Non couverts par cet audit : la navigation au clavier et un lecteur d'écran, à tester à la main.

À respecter en modifiant le site :

- un seul `<h1>` par page, hiérarchie de titres sans saut de niveau (`NumberedList` accepte `headingLevel` pour cette raison) ;
- aucune information portée par la seule couleur : les zones A/B/C/D de la 4L portent leur lettre et une légende texte les reprend ;
- SVG porteurs de sens en `role="img"` avec `<title>` ; SVG décoratifs en `aria-hidden="true"` ;
- le tableau des postes est l'équivalent textuel du graphique budget, qui est masqué aux technologies d'assistance ;
- cibles tactiles d'au moins 44 × 44 px ;
- libellés de liens explicites hors contexte, format et nouvel onglet signalés ;
- `prefers-reduced-motion` respecté.

Le menu mobile s'appuie sur `<dialog>` en mode modal, ce qui donne le piégeage du focus et la fermeture par `Échap` nativement.

## Avant la mise en ligne

1. Compléter le nom de famille du directeur de la publication (`ASSOCIATION.president` dans `src/content/crew.ts`) : les mentions légales n'ont aujourd'hui que son prénom. Il n'y a plus de bloc `[À COMPLÉTER]` sur le site.
2. Déposer les **photos** dans `public/photos/` (voir « Ajouter une photo ») : équipage (accueil et contact), portraits de Romain et de Catalin. Deux photos viendront plus tard et sont remplacées d'ici là par un dessin (`Illustration`) : la 4L, achetée grâce aux premiers sponsors (page Parcours, `OrienteeringSection`), et les fournitures, réunies pendant la préparation (page Nous aider, `SuppliesSection`).
3. L'adresse du site est `https://4l.lesfarfadets.net` (`PUBLIC_SITE_URL` dans `src/content/site.ts`) : elle alimente les URL canoniques, le sitemap, les images Open Graph et la page Contact. `NEXT_PUBLIC_SITE_URL` ne sert qu'à la remplacer pour un déploiement à une autre adresse.
4. Remplacer l'icône d'onglet (`src/app/icon.tsx`), aujourd'hui une simple initiale faute de logo.
5. Faire confirmer les couleurs relevées par le Design System.
6. Héberger le site comme les pages légales l'annoncent : sur un VPS OVH, derrière un tunnel Cloudflare, avec des journaux d'accès supprimés après **six mois**. Tout écart (autre hébergeur, serveur personnel, autre intermédiaire) impose de corriger les mentions légales et la page Confidentialité avant la mise en ligne.

`npm audit` remonte des vulnérabilités dans la chaîne ESLint uniquement. `npm audit --omit=dev` ne remonte rien : rien n'atteint le navigateur ni le serveur en production.

## Règles de contenu

- Reprendre les faits et montants de la fiche projet **tels quels**. Aucun chiffre inventé, aucun arrondi.
- N'inventer **aucun** sponsor, témoignage, retombée média ou statistique.
- Toute information manquante s'écrit `[À COMPLÉTER]`, **visiblement**, jamais devinée ni masquée.
- **Cadre fiscal** (`DONATION_TAX_RULES` dans `src/content/sponsorship.ts`) : la réduction d'impôt, 60 % pour une entreprise et 66 % pour un particulier, ne vaut que pour un **don sans contrepartie** et parce que l'association EFREI Motorsport (4L & Faons) délivre des reçus fiscaux, selon son président. Une formule de partenariat n'est pas un don : le logo sur la 4L est une contrepartie, donc une dépense de publicité déductible du résultat. Ne jamais présenter une formule comme ouvrant droit à la réduction. Taux et plafonds à revérifier chaque année sur impots.gouv.fr.
- Ne pas afficher l'affiche officielle sur le site : elle porte le logo du 4L Trophy et ceux de ses partenaires, et l'organisation n'autorise aux équipages que le logo « 4L Trophy participant ». Elle reste dans `docs/references/`, hors de `public/`, donc hors ligne : c'est un modèle, pas un contenu.
- Ne pas utiliser le logo officiel du 4L Trophy. L'équipage n'a pas de logo : écrire « LES FARFADETS » en Squada One (`font-display`) ou au feutre en Permanent Marker (`font-script`).
- Ton : vouvoiement, « nous » pour l'équipage et « vous » pour le sponsor. Phrases courtes, une idée par phrase. Enthousiaste mais professionnel, sans superlatifs ni emoji.
