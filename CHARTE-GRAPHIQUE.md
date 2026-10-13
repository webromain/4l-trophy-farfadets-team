# Charte graphique — Les Farfadets

Référence visuelle du site de l'équipage Les Farfadets, engagé sur le 4L Trophy 2027. Elle décrit ce qui existe dans le code : chaque valeur citée ici vient de `src/styles/` ou des composants, et le code fait foi en cas d'écart.

- **Pour qui** : toute personne qui modifie le site ou produit un support aux couleurs de l'équipage (visuel pour les réseaux, sticker, présentation).
- **Ce qu'elle ne couvre pas** : l'impression. Les couleurs sont données pour l'écran (hexadécimal, sRGB) ; aucune équivalence CMJN ou Pantone n'a été définie.

## Sommaire

1. [L'idée](#1-lidée)
2. [Couleurs](#2-couleurs)
3. [Typographie](#3-typographie)
4. [Le nom de l'équipage](#4-le-nom-de-léquipage)
5. [Mise en page](#5-mise-en-page)
6. [Le fond : la scène du coucher de soleil](#6-le-fond--la-scène-du-coucher-de-soleil)
7. [Le verre](#7-le-verre)
8. [Composants](#8-composants)
9. [Mouvement](#9-mouvement)
10. [Illustrations, schémas et photos](#10-illustrations-schémas-et-photos)
11. [Ton rédactionnel](#11-ton-rédactionnel)
12. [Accessibilité](#12-accessibilité)
13. [À faire, à ne pas faire](#13-à-faire-à-ne-pas-faire)
14. [Où se trouve quoi dans le code](#14-où-se-trouve-quoi-dans-le-code)

---

## 1. L'idée

Le site prolonge **l'affiche officielle du 4L Trophy 2027** (`docs/references/affiche-2027.jpeg`) : un ciel de coucher de soleil qui va du rouge à l'orange, du texte blanc, une Renault 4L en silhouette.

Quatre principes en découlent.

- **Le ciel est le décor.** Il n'y a pas de fond blanc ni de blocs de couleur empilés : tout le contenu est posé sur une seule scène, fixe, qui passe du jour à la nuit quand on descend dans la page.
- **La typographie fait l'ornement.** Titres géants, accroches écrites de travers, bandes de mots au contour. Pas de filets décoratifs, pas d'icônes, pas de pictogrammes.
- **Le dessin est simple.** Des aplats, des silhouettes, des formes pleines. Le soleil est un disque d'une seule couleur, les dunes sont deux courbes.
- **Le blanc porte le texte.** Sur un fond qui change du rouge à l'orange puis au prune, seul le blanc reste lisible partout.

---

## 2. Couleurs

### 2.1 Couleurs de l'affiche

Relevées au pixel sur l'affiche officielle.

| Nom | Token | Hex | Rôle |
| --- | --- | --- | --- |
| Rouge affiche | `poster-red` | `#ff153a` | Haut du ciel, zone C de la 4L, fond du menu mobile |
| Vermillon | `vermilion` | `#ff3d37` | Milieu du ciel, graphique du budget |
| Orange affiche | `poster-orange` | `#ff7a36` | Bas du ciel, zone B de la 4L, graphique du budget |
| Jaune affiche | `poster-yellow` | `#ffd251` | Accent sur bleu nuit, zone A de la 4L, halo du soleil |
| Sable | `peach` | `#feb87c` | Halo du soleil, graphique du budget |

### 2.2 Couleurs de l'équipage

| Nom | Token | Hex | Rôle |
| --- | --- | --- | --- |
| Bleu nuit | `night` | `#18182b` | Silhouette de la 4L, sol, boutons, verre fumé, pied de page |
| Carmin | `crimson` | `#b2112c` | Dune du fond, crépuscule, graphique du budget |
| Prune | `plum` | `#3a1236` | Dune de devant, crépuscule |
| Papier | `paper` | `#fbf7ee` | Blanc cassé des schémas, texte du pied de page |
| Soleil | `sun` | `#ffdc7c` | Disque du soleil et phare de la 4L, toujours la même couleur |

Le haut du ciel n'utilise pas le rouge affiche pur : il est adouci par 10 % de carmin, soit environ `#f71539`.

### 2.3 Couleurs de contexte

Les composants ne nomment pas une couleur fixe pour leur texte : ils utilisent cinq couleurs de contexte, dont la valeur dépend du support. Un même composant peut ainsi vivre sur le ciel, sur le verre ou sur un bloc bleu nuit.

| Token | Sur le ciel et le verre clair | Sur bleu nuit (`.surface-dark`) |
| --- | --- | --- |
| `ink` — texte principal | `#ffffff` | `#ffffff` |
| `ink-soft` — texte secondaire | `#ffffff` | `#d7d3dc` |
| `accent` — chiffres, libellés | `#ffffff` | `#ffd251` |
| `line` — filets de séparation | blanc à 45 % | blanc à 20 % |
| `ink-inverse` — texte sur bouton survolé | `#18182b` | `#18182b` |

### 2.4 Règles d'emploi

- **Le texte posé sur le ciel ou sur le verre clair est blanc.** Jamais jaune, jamais sombre.
- **Le jaune affiche ne sert d'accent que sur bleu nuit** : bouton principal, verre fumé, pied de page.
- **Le soleil et le phare de la 4L partagent la même couleur** (`sun`). On ne change jamais l'un sans l'autre.
- **Pas de mode sombre.** La nuit vient du défilement, pas d'un réglage.
- **Toute couleur passe par un token.** Une valeur écrite en dur dans un composant signale un token manquant.

---

## 3. Typographie

Quatre polices, toutes issues de Google Fonts et hébergées sur le site lui-même (aucune requête vers Google).

| Police | Token | Rôle | Référence sur l'affiche |
| --- | --- | --- | --- |
| **Squada One** | `font-display` | Très grands titres, chiffres, noms | « 4L TROPHY » |
| **Permanent Marker** | `font-script` | Accroches écrites au feutre, logo texte | « Desert Aventure ! » |
| **Bricolage Grotesque** | `font-sans`, `font-heading` | Texte courant, capitales grasses, boutons | « ENTREZ DANS LA LÉGENDE » |
| **Kaushan Script** | `font-quote` | La citation, et elle seule | — |

### 3.1 Squada One — les titres

- Toujours en **capitales**, toujours en blanc (ou jaune affiche sur bleu nuit pour un chiffre).
- Une seule graisse. Pas de faux gras, pas d'italique.
- Interligne très serré, de 0,8 à 0,9 : les lignes d'un titre se touchent presque.

| Usage | Taille | Interligne |
| --- | --- | --- |
| Titre de l'accueil (`text-hero`) | de 72 px à 288 px, 15 % de la largeur d'écran | 0,8 |
| Titre de page (`text-page-title`) | de 44 px à 160 px, 11 % de la largeur | 0,86 |
| Titre de section (`text-section-title`) | de 40 px à 96 px, 7 % de la largeur | 0,9 |
| Grand chiffre (`text-stat`) | de 56 px à 144 px, 12 % de la largeur | 0,85 |
| Chiffre de carte (`text-figure`) | de 48 px à 88 px, 8 % de la largeur | 0,85 |
| Numéro de liste (`text-numeral`) | de 44 px à 72 px, 7 % de la largeur | 0,8 |

### 3.2 Permanent Marker — les accroches

- Toujours **inclinée**, de −2° à −3°, comme écrite à la main sur l'affiche.
- En minuscules avec capitale initiale ; la police dessine elle-même des petites capitales.
- Réservée aux textes courts : l'accroche au-dessus d'un titre, le nom de l'équipage dans l'en-tête et le pied de page.
- Accroche de section (`.eyebrow`) : de 22 px à 36 px, inclinée de −3°, pivot en bas à gauche.

### 3.3 Bricolage Grotesque — le texte

- Graisse 500 pour le texte courant, 600 à 800 pour les intertitres et les boutons.
- La police s'arrête à 800 : une graisse 900 demandée s'affiche en 800.

| Usage | Taille | Détail |
| --- | --- | --- |
| Petit texte, boutons (`text-sm`) | 15 px | |
| Texte courant (`text-base`) | 17 px | interligne 1,5 à 1,6 |
| Texte mis en avant (`text-lg`) | 20 px | chapeaux sous les titres |
| Intertitre de carte (`text-xl`) | 22 px | |
| Libellé (`text-label`) | 14 px | capitales, graisse 800, interlettrage 0,16 em |

Les tailles de texte courant sont volontairement un cran au-dessus des valeurs par défaut : le site se lit souvent sur mobile, par des lecteurs de tout âge.

### 3.4 Kaushan Script — la citation

Une écriture au pinceau, plus liée que le feutre. Elle ne sert qu'à la citation de l'équipage : de 32 px à 76 px, inclinée de −2°, 22 caractères par ligne au plus, entre guillemets français avec espaces insécables.

### 3.5 Le couple titre

Le motif central de la charte reprend celui de l'affiche : **une accroche au feutre, inclinée, posée au-dessus d'un titre en très grandes capitales.**

```
  Qui sommes-nous            ← Permanent Marker, −3°
L'ÉQUIPAGE                   ← Squada One, capitales
```

### 3.6 Chiffres et ponctuation

- Typographie française : `6 000 km`, `1 000 €`, espaces insécables. Ces espaces sont produits par `formatNumber()`, `formatEuros()` et `formatKilometres()` (`src/lib/format.ts`), jamais saisis à la main.
- Guillemets français « … », jamais de guillemets droits dans un texte affiché.
- Chiffres à chasse fixe (`tabular-nums`) dans les tableaux et les compteurs.

---

## 4. Le nom de l'équipage

**L'équipage n'a pas de logo.** Son nom s'écrit, de deux façons :

- **« Les Farfadets » au feutre** (Permanent Marker), incliné de −3°, en blanc : en-tête et pied de page.
- **« LES FARFADETS » en Squada One**, capitales, empilé sur deux lignes : le titre de l'accueil.

À ne pas faire :

- utiliser le logo officiel du 4L Trophy : c'est une marque de l'organisateur, et le site est celui d'un équipage participant ;
- afficher l'affiche officielle : elle porte ce logo et ceux des partenaires du raid. Elle sert de modèle et reste hors ligne ;
- dessiner un logo de substitution, encadrer le nom, lui ajouter un pictogramme.

L'icône d'onglet actuelle est une simple initiale, provisoire.

---

## 5. Mise en page

- **Pleine largeur.** La page occupe tout l'écran ; le plafond de 3 520 px ne joue qu'au-delà de la 4K.
- **Marges latérales** : 16 px sur mobile, 24 px à partir de 640 px, 48 px à partir de 1 024 px, 80 px à partir de 1 536 px.
- **Rythme vertical** : chaque section a 48 px de marge haute et basse sur mobile, 64 px au-delà.
- **Largeur de lecture** : un paragraphe ne dépasse pas 72 caractères par ligne.
- **Alignement à gauche.** Titres, textes et boutons partent tous de la marge gauche. Le centrage est réservé aux emplacements photo et aux légendes de schémas.
- **Rayons** : 20 px pour les encadrés (`radius-panel`), 5 px pour les badges (`radius-badge`), arrondi complet pour les boutons.
- **Menu** : liens en ligne à partir de 1 280 px, bouton « Menu » et panneau plein écran en dessous.

---

## 6. Le fond : la scène du coucher de soleil

Le fond est une scène fixe, derrière tout le contenu, qui suit l'avancée dans la page : en haut c'est le jour, en bas c'est la nuit.

| Élément | Dessin | Évolution au défilement |
| --- | --- | --- |
| Ciel | Dégradé vertical : rouge adouci jusqu'à 40 %, vermillon à 62 %, orange en bas | Fixe |
| Halo | Lueur jaune puis sable, centrée sous l'horizon | S'enfonce et s'éteint |
| Soleil | Disque plein, couleur `sun`, diamètre 20 % du petit côté de l'écran | Se couche en arc de cercle |
| Crépuscule | Voile bleu nuit, prune puis carmin | Recouvre le ciel jusqu'à 94 % |
| Étoiles | Quatorze points blancs | Apparaissent dans la seconde moitié |
| Dune du fond | Courbe carmin, 30 % de la hauteur | Glisse vers la gauche |
| Dune de devant | Courbe prune, 18 % de la hauteur | Glisse plus vite |
| Sol | Bande bleu nuit | Fixe |
| 4L | Silhouette bleu nuit, galerie chargée, phare allumé | Traverse l'écran de gauche à droite |

### Le soleil

- **Un aplat.** Une seule couleur, sans dégradé ni lueur autour.
- **Il part en haut à droite et se couche vers la gauche**, le long d'un vrai arc de cercle parcouru à vitesse constante, pour disparaître derrière les dunes là où le ciel est le plus clair.
- **Il a disparu peu après la moitié de la page.**
- **Sa teinte glisse vers l'orangé** en descendant, tout en restant unie.
- Sur un écran en hauteur (téléphone), l'arc est plus serré pour tenir dans la largeur.

---

## 7. Le verre

Tous les encadrés du site sont en verre : on voit le ciel à travers, flouté.

**Verre clair** (`.glass`)

- fond : le ciel flouté (16 px) et légèrement saturé, teinté de bleu nuit à 20 % ;
- lustre : un reflet blanc en diagonale, de 16 % à 3 % ;
- bord : un liseré blanc d'un pixel et une arête plus brillante du côté du soleil ;
- ombre portée douce, bleu nuit ;
- le soleil s'y reflète en lueur chaude, à l'endroit où il se trouve par rapport à l'encadré ; ce reflet faiblit à mesure que la nuit tombe.

**Verre fumé** (`.glass-dark`, avec `.surface-dark`)

- même dessin, teinté de bleu nuit à 66 % ;
- l'accent y passe au jaune affiche ;
- réservé à ce qui doit trancher : le grand chiffre d'une section, la formule du partenaire principal, les cartes des sections à défilement horizontal.

Le pied de page n'est pas un encadré de verre mais un bandeau bleu nuit à 90 %, flouté, qui clôt la page.

---

## 8. Composants

### Boutons

Forme de pilule, 48 px de haut au moins, texte en capitales, 15 px, graisse 800, interlettrage 0,1 em.

| Variante | Au repos | Au survol |
| --- | --- | --- |
| Principal | fond bleu nuit, texte jaune affiche | fond jaune affiche, texte bleu nuit |
| Secondaire | bord blanc 2 px, texte blanc, fond transparent | fond blanc, texte bleu nuit |

Le bouton principal reprend la 4L de l'affiche : silhouette bleu nuit, jaune des phares. Un lien externe (PDF, site d'un partenaire) est toujours en variante secondaire et annonce son format, son poids et l'ouverture dans un nouvel onglet.

### Liens

- **Lien de fin de section** : capitales, 15 px, graisse 800, souligné d'un trait de 2 px qui s'épaissit au survol.
- **Lien de menu** : capitales ; un trait se déploie sous le mot au survol ; la page courante est en pilule bleu nuit, texte jaune.
- **Lien de contact** (téléphone, e-mail) : souligné, graisse 600.

### Cartes

- **Carte de chiffre** : verre clair, chiffre en Squada One, légende dessous.
- **Grand chiffre** : verre fumé, chiffre jaune très grand, phrase d'explication à côté.
- **Carte de formule** : verre clair, badge de lettre, nom, montant. La formule du partenaire principal est en verre fumé avec un bord jaune de 2 px.
- Au survol, une carte se soulève de 4 px et un halo orange suit le pointeur.

### Badges

Carré de 32 px, rayon 5 px, lettre en graisse 800. Les quatre formules de partenariat ont chacune leur couleur, reprise sur le schéma de la 4L :

| Formule | Fond | Lettre |
| --- | --- | --- |
| A | jaune affiche | bleu nuit |
| B | orange affiche | bleu nuit |
| C | rouge affiche | papier |
| D | bleu nuit | papier |

### Liste numérotée

Un grand numéro en Squada One, un intertitre et une phrase, séparés par un filet blanc. Dans une section à défilement horizontal, chaque entrée devient une carte de verre fumé.

### Citation

Sans encadré : écrite au pinceau, en grand et de travers, à même le ciel, entre guillemets français. La signature est un libellé en capitales.

### Bandes de mots

De très grands mots en Squada One, au contour blanc seul (70 % d'opacité), qui glissent à l'horizontale. Ils répètent des informations déjà écrites ailleurs : ce sont un décor.

### Tableau et graphique du budget

- Tableau : en-têtes en capitales de 20 px, lignes séparées par un filet blanc, total en gras.
- Graphique en anneau, sans texte. Chaque ligne du tableau porte une **pastille** de la couleur de sa part.

| Part | Couleur |
| --- | --- |
| Plus gros poste | bleu nuit |
| Deuxième | sable |
| Troisième | orange affiche |
| Quatrième | vermillon |
| Petits postes regroupés | carmin |

### Emplacement photo

Tant qu'une photo manque, son emplacement est un cadre en pointillés blancs sur un voile clair, avec le nom de la photo attendue. Il ne se déguise pas en image.

### Mention « à compléter »

Une information manquante s'affiche en clair, dans un cadre en pointillés : `[COMPTE INSTAGRAM : À COMPLÉTER]`. Elle n'est ni devinée ni masquée.

---

## 9. Mouvement

Le mouvement sert le récit — on avance, le jour tombe — et jamais l'effet pour l'effet.

| Effet | Où | Réglage |
| --- | --- | --- |
| Entrée à l'arrivée | Premier écran de l'accueil, titres de page | Fondu et montée de 24 px, 0,7 s, éléments décalés de 90 ms |
| Apparition au défilement | Titres de section, cartes, paragraphes | Fondu et montée de 32 px, terminée après 30 % de la traversée de l'écran |
| Apparition du pied de page | Blocs du pied de page | Terminée dès que le bloc est entièrement visible |
| Parallaxe | Titre de l'accueil, numéros, emplacements photo | Décalage de 12 à 24 px |
| Bandes de mots | Entre les sections | Glissement horizontal de 30 % |
| Défilement horizontal | Étapes du parcours, raisons de nous soutenir | Écrans d'au moins 1 024 px de large et 640 px de haut |
| Scène de fond | Tout le site | Voir la section 6 |

Règles :

- **Les boutons du premier écran ne se déplacent pas.** Ils apparaissent en fondu, sur place, et restent fixes par rapport au texte qui les précède.
- **Les transitions au survol durent 0,2 à 0,3 s.**
- **Animations réduites** : si le système le demande, tous les effets sont coupés et le site s'affiche tel quel, soleil haut dans le ciel.
- **Un élément ne porte qu'une animation.** On ne cumule pas apparition et parallaxe sur le même élément.

---

## 10. Illustrations, schémas et photos

- **Silhouettes et aplats.** La 4L, les dunes, la carte et les schémas sont des formes pleines, sans ombre ni dégradé.
- **Carte du parcours** : pays en blanc translucide, tracé en pointillés blancs, que le jaune vient recouvrir au fil des étapes ; l'arrivée est en jaune.
- **La 4L** : une berline, tracée d'après les cotes du constructeur. Le même profil sert à la silhouette du fond et au schéma des emplacements.
- **Schéma de la 4L** : trois vues (profil, dessus, arrière), carrosserie papier, contour bleu nuit de 3 px, vitres en bleu nuit dilué, zones colorées portant leur lettre.
- **Pas d'icônes ni d'émojis.**
- **Photos** : aucune n'est encore intégrée. Sont attendues dès maintenant : l'équipage et deux portraits. Déposées dans `public/photos/`, elles prennent la place des emplacements en pointillés, dans le même cadre arrondi de 20 px. Le cadre fixe les proportions (3:2 en paysage, 3:4 en portrait) et la photo le remplit, recadrée autour de son centre. Jamais de texte posé sur une photo. Tant que la photo des deux ensemble manque, les deux portraits la remplacent, côte à côte, dans deux cadres 3:4.
- **Dessins d'attente** : deux photos ne peuvent pas encore exister, celle de la 4L (achetée grâce aux premiers sponsors) et celle des fournitures (réunies pendant la préparation). Un dessin tient leur place, dans un encadré de verre, avec une phrase qui dit pourquoi : la 4L de profil face au soleil, et un carton de fournitures entre une pile de livres et un ballon. Même trait que le schéma : aplats aux couleurs de la charte, cernés de bleu nuit de 3 px, posés sur une ligne de sol.
- **Logos des partenaires** : hébergés sur le site, jamais chargés depuis le serveur d'un tiers.

---

## 11. Ton rédactionnel

- **Vouvoiement.** « Nous » pour l'équipage, « vous » pour le sponsor.
- **Phrases courtes**, une idée par phrase.
- **Enthousiaste mais professionnel** : pas de superlatifs, pas d'émojis, pas de points d'exclamation en série.
- **Des faits, pas des promesses.** Les montants et les chiffres sont repris tels quels de la fiche projet, sans arrondi. Aucun sponsor, témoignage ou chiffre inventé.
- **Aucun pourcentage de déduction fiscale** tant que le cadre fiscal n'est pas validé par l'association.

---

## 12. Accessibilité

Cible : WCAG 2.2, niveau AA.

- **Contraste.** Le blanc posé directement sur le ciel atteint 4,1:1 sur le rouge du haut, 3,5:1 sur le vermillon et 2,6:1 sur l'orange du bas : suffisant pour les grands titres sur le rouge (seuil 3:1), en dessous du seuil du texte courant (4,5:1). Le contraste remonte sur le verre fumé (17:1) et à mesure que la nuit tombe. C'est le point faible connu de la charte, mesuré le 14 octobre 2026.
- **Le soleil.** Du texte blanc qui passe devant le disque jaune se lit mal à cet instant. Le soleil est donc placé à droite, hors du premier écran de texte, et disparaît à mi-page.
- **Focus clavier** : deux anneaux emboîtés, blanc puis bleu nuit, de 3 px chacun. L'un des deux tranche toujours, quel que soit le fond.
- **Jamais la couleur seule.** Les zones de la 4L portent leur lettre et une légende ; le graphique du budget est doublé d'un tableau.
- **Cibles tactiles** d'au moins 44 × 44 px.
- **Un seul titre principal par page**, sans saut de niveau.
- **Décors masqués** aux lecteurs d'écran : scène de fond, bandes de mots, graphique.

---

## 13. À faire, à ne pas faire

| À faire | À ne pas faire |
| --- | --- |
| Poser le texte en blanc sur le ciel | Écrire en jaune ou en sombre sur le ciel |
| Garder le jaune pour le bleu nuit | Utiliser le jaune comme couleur de texte courant |
| Titrer en Squada One, en capitales | Mettre Squada One en minuscules ou en paragraphe |
| Incliner les accroches au feutre | Écrire un paragraphe entier au feutre |
| Réserver Kaushan Script à la citation | L'utiliser pour un titre ou une accroche |
| Habiller un encadré en verre | Poser un bloc de couleur opaque sur le ciel |
| Dessiner en aplats et en silhouettes | Ajouter dégradés, ombres ou lueurs à une illustration |
| Garder le soleil et le phare de la même couleur | Les colorer séparément |
| Écrire le nom de l'équipage | Utiliser le logo du 4L Trophy ou inventer un logo |
| Passer par un token | Écrire une couleur ou une taille en dur |
| Afficher `[À COMPLÉTER]` | Deviner ou masquer une information manquante |

---

## 14. Où se trouve quoi dans le code

| Sujet | Fichier |
| --- | --- |
| Couleurs, polices, tailles, rayons | `src/styles/theme.css` |
| Chargement des polices | `src/styles/fonts.ts` |
| Accroche au feutre, lettres au contour | `src/styles/typography.css` |
| Verre | `src/styles/glass.css` |
| Couleurs sur bleu nuit | `src/styles/surfaces.css` |
| Texte courant, focus, animations réduites | `src/styles/base.css` |
| Apparitions, parallaxe, entrée de page | `src/styles/scroll-effects.css` |
| Sections à défilement horizontal | `src/styles/track.css` |
| Scène de fond, soleil, dunes, 4L | `src/components/effects/BackgroundScene.tsx` et `.module.css` |
| Profil de la 4L, commun au fond et au schéma | `src/components/ui/renault4-profile.ts` |
| Dessin au trait de la 4L | `src/components/ui/Renault4Drawing.tsx` |
| Encadré d'un dessin d'attente | `src/components/ui/Illustration.tsx` |
| Affichage d'une photo déposée | `src/components/ui/Photo.tsx`, `src/server/photos.ts` |
| Photo de groupe, ou portraits côte à côte | `src/components/ui/GroupPhoto.tsx` |
| Dessin des fournitures | `src/features/support/SuppliesDrawing.tsx` |
| Pilotage des effets au défilement | `src/components/effects/ScrollEffects.tsx`, `src/lib/scroll-progress.ts` |
| Boutons, cartes, citation, bandes de mots | `src/components/ui/` |
| Graphique et tableau du budget | `src/features/budget/BudgetChart.tsx` |
| Badges et cartes de formule | `src/features/sponsors/TierCard.tsx` |
| Affiche de référence, hors ligne | `docs/references/affiche-2027.jpeg` |
