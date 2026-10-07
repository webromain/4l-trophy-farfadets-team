const PAYS = [
  {
    nom: "France",
    points:
      "232,18 288,26 322,52 334,96 316,128 268,142 226,132 206,98 212,54",
  },
  {
    nom: "Espagne",
    points:
      "126,158 212,150 262,172 272,216 244,250 172,256 124,232 112,192",
  },
  {
    nom: "Maroc",
    points: "106,296 172,284 228,316 214,368 178,420 128,430 94,392 88,338",
  },
] as const;

const VILLES = [
  { nom: "Biarritz", x: 216, y: 146, ancrage: "start" as const },
  { nom: "Algésiras", x: 170, y: 252, ancrage: "start" as const },
  { nom: "Désert", x: 194, y: 352, ancrage: "start" as const },
];

export default function CarteParcours() {
  return (
    <div className="rounded-bloc bg-sable p-5">
      <svg
        viewBox="0 0 360 460"
        role="img"
        aria-labelledby="carte-titre carte-description"
        className="h-auto w-full"
      >
        <title id="carte-titre">
          Carte simplifiée du parcours, de Biarritz à Marrakech
        </title>
        <desc id="carte-description">
          Le tracé relie Biarritz, en France, à Algésiras dans le sud de
          l&apos;Espagne, puis traverse le détroit de Gibraltar vers le désert
          marocain et rejoint Marrakech. Les étapes et leurs dates sont
          détaillées dans la liste qui suit cette carte.
        </desc>

        {PAYS.map((pays) => (
          <polygon
            key={pays.nom}
            points={pays.points}
            fill="var(--color-sable-fonce)"
          />
        ))}

        <polyline
          points="216,146 170,252 194,352 136,366"
          fill="none"
          stroke="var(--color-rouge-4l)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 12"
        />

        {VILLES.map((ville) => (
          <g key={ville.nom}>
            <circle
              cx={ville.x}
              cy={ville.y}
              r="7"
              fill="var(--color-bleu-nuit)"
            />
            <text
              x={ville.x + 13}
              y={ville.y + 5}
              textAnchor={ville.ancrage}
              fontSize="15"
              fontWeight="600"
              fill="var(--color-bleu-nuit)"
            >
              {ville.nom}
            </text>
          </g>
        ))}

        <circle cx="136" cy="366" r="9" fill="var(--color-rouge-4l)" />
        <text
          x="124"
          y="348"
          textAnchor="end"
          fontSize="15"
          fontWeight="700"
          fill="var(--color-rouge-4l)"
        >
          Marrakech
        </text>

        <text
          x="268"
          y="86"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--color-bleu-nuit)"
        >
          FRANCE
        </text>
        <text
          x="176"
          y="206"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--color-bleu-nuit)"
        >
          ESPAGNE
        </text>
        <text
          x="186"
          y="312"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--color-bleu-nuit)"
        >
          MAROC
        </text>
      </svg>
      <p className="mt-2 text-sm text-gris-texte">
        Carte simplifiée, tracé indicatif.
      </p>
    </div>
  );
}
