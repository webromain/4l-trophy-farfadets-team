/* Le profil de la Renault 4 berline, avant à gauche, tracé d'après les cotes du
   constructeur : 3,67 m de long, 1,55 m de haut, 2,45 m d'empattement, roues de
   13 pouces. Une unité vaut 9,5 mm ; le sol est à y = 190.

   Partagé par le schéma des emplacements (CarZonesDiagram.tsx) et par la
   silhouette du fond du site (BackgroundScene.tsx), pour que les deux dessinent
   la même voiture. */

/* La caisse : face avant presque droite, capot qui monte vers le pare-brise, toit
   à peine bombé, hayon incliné, passages de roue. Celui de l'arrière est aplati :
   il recouvre le haut de la roue, comme sur la vraie. */
export const BODY_PATH =
  "M44,152 L41,146 L35,110 Q34,99 47,98 Q100,90 152,85 L196,36 Q199,31 208,30 Q290,24 372,29 L378,30 L398,96 L404,140 L404,150 L400,156 L373.2,156 A34,30 0 1 0 305.6,163 L116.4,163 A34,34 0 1 0 49.7,152 Z";

/* Les trois vitres latérales : porte avant, porte arrière, custode. Le bord
   arrière de la custode suit l'inclinaison du hayon. */
export const WINDOW_PATHS = [
  "M166,82 L201,38 L243,36.5 L243,82 Z",
  "M250,82 L250,36.3 L305,35.5 L305,82 Z",
  "M312,82 L312,35.8 L360,37.5 L373,82 Z",
] as const;

export const WHEEL_RADIUS = 28;
export const WHEELS = [
  { cx: 82.4, cy: 161.3 },
  { cx: 339.6, cy: 161.3 },
] as const;

export const BUMPERS = [
  { x: 27, y: 136, width: 19, height: 9 },
  { x: 397, y: 138, width: 15, height: 9 },
] as const;

/* Le phare, sur la face avant. */
export const HEADLIGHT = { cx: 37, cy: 113 } as const;

/* Les bords des portes : montant avant, montant central, et le bord de la porte
   arrière qui rejoint le passage de roue. */
export const DOOR_LINES = [
  "M158,86 L156,163",
  "M246.5,85 L246.5,163",
  "M308.5,85 L308.5,148",
] as const;
