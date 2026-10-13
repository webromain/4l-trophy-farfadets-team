const NIGHT = "var(--color-night)";

/* Le même trait que la 4L : des aplats cernés de bleu nuit. */
const INK = {
  stroke: NIGHT,
  strokeWidth: 3,
  strokeLinejoin: "round",
} as const;

/* Un crayon planté dans le carton : `x` est sa position, `angle` son inclinaison. */
function Pencil({
  x,
  angle,
  color,
}: {
  x: number;
  angle: number;
  color: string;
}) {
  return (
    <g transform={`translate(${x} 122) rotate(${angle})`}>
      <rect x="-6" y="-62" width="12" height="62" fill={color} {...INK} />
      <path d="M-6,-62 L0,-80 L6,-62 Z" fill="var(--color-paper)" {...INK} />
      <path d="M-2,-74 L0,-80 L2,-74 Z" fill={NIGHT} />
    </g>
  );
}

/* Les fournitures scolaires et sportives à collecter : une pile de livres, un
   carton ouvert d'où dépassent crayons, règle et cahier, et un ballon. À poser dans
   `Illustration`. */
export default function SuppliesDrawing() {
  return (
    <g>
      <rect x="60" y="189" width="320" height="4" rx="2" fill={NIGHT} />

      <rect
        x="82"
        y="169"
        width="62"
        height="20"
        rx="3"
        fill="var(--color-poster-red)"
        {...INK}
      />
      <rect
        x="88"
        y="150"
        width="52"
        height="19"
        rx="3"
        fill="var(--color-sun)"
        {...INK}
      />
      <rect
        x="84"
        y="131"
        width="58"
        height="19"
        rx="3"
        fill="var(--color-paper)"
        {...INK}
      />

      {/* Le rabat du fond, puis ce qui dépasse, puis la face avant du carton. */}
      <path
        d="M158,110 L170,96 L270,96 L282,110 Z"
        fill="var(--color-peach)"
        {...INK}
      />
      <Pencil x={176} angle={-12} color="var(--color-poster-yellow)" />
      <Pencil x={200} angle={4} color="var(--color-poster-orange)" />
      <g transform="translate(234 122) rotate(9)">
        <rect
          x="-8"
          y="-74"
          width="16"
          height="74"
          fill="var(--color-paper)"
          {...INK}
        />
        <path
          d="M-8,-64 h6 M-8,-54 h9 M-8,-44 h6 M-8,-34 h9 M-8,-24 h6"
          stroke={NIGHT}
          strokeWidth="1.5"
        />
      </g>
      <g transform="translate(262 122) rotate(14)">
        <rect
          x="-16"
          y="-58"
          width="32"
          height="58"
          rx="3"
          fill="var(--color-poster-red)"
          {...INK}
        />
        <rect
          x="-9"
          y="-48"
          width="18"
          height="10"
          rx="1.5"
          fill="var(--color-paper)"
        />
      </g>
      <rect
        x="150"
        y="110"
        width="140"
        height="79"
        rx="3"
        fill="var(--color-peach)"
        {...INK}
      />
      <rect
        x="210"
        y="111.5"
        width="20"
        height="76"
        fill="var(--color-paper)"
        fillOpacity="0.7"
      />

      <circle
        cx="332"
        cy="161"
        r="28"
        fill="var(--color-poster-orange)"
        {...INK}
      />
      <path
        d="M332,133 V189 M304,161 H360 M312,141 Q328,161 312,181 M352,141 Q336,161 352,181"
        fill="none"
        stroke={NIGHT}
        strokeWidth="2"
      />
    </g>
  );
}
