/* Contours simplifiés, tracés à partir de coordonnées géographiques réelles puis
   lissés. Le Portugal, que le raid ne traverse pas, est plus pâle : il est là pour
   que la péninsule reste reconnaissable. Le Maroc sort du cadre par le bas. */
const COUNTRIES = [
  {
    name: "France",
    opacity: 0.24,
    path: "M232 9C239 12 249 24 260 30C270 36 277 36 289 40C300 44 317 43 321 50C325 57 317 68 312 78C306 88 291 98 289 104C287 110 298 108 301 112C303 116 300 122 302 128C304 134 310 141 312 146C313 151 314 150 310 154C306 158 298 166 290 168C283 170 276 164 269 163C261 162 254 161 249 164C244 167 248 178 243 181C238 184 228 181 221 180C215 179 216 179 206 176C196 173 173 170 168 163C162 156 174 145 176 137C178 129 178 124 178 118C179 112 180 111 177 106C174 100 166 93 162 88C157 83 157 82 151 79C145 76 133 77 128 74C123 71 120 66 123 62C125 58 136 55 142 54C148 53 149 58 154 59C159 60 169 60 172 58C174 56 168 50 168 46C168 42 169 37 171 36C172 35 175 37 176 38C178 39 175 44 178 44C182 44 189 43 197 40C204 37 216 31 220 26C224 21 218 15 220 12C222 9 225 6 232 9Z",
  },
  {
    name: "Portugal",
    opacity: 0.1,
    path: "M60 192C62 187 65 193 71 193C78 193 89 190 94 191C100 192 101 195 100 198C100 201 93 205 91 210C89 215 91 218 90 224C88 230 84 234 84 242C83 250 88 258 88 266C88 274 87 282 82 286C77 290 63 294 59 290C55 286 62 269 61 262C59 255 52 258 50 254C48 250 49 249 51 242C54 235 61 227 62 218C64 209 58 197 60 192Z",
  },
  {
    name: "Espagne",
    opacity: 0.24,
    path: "M168 163C178 165 196 173 206 176C216 179 214 179 221 180C228 181 240 180 244 182C248 184 247 188 244 192C241 196 235 198 229 202C223 206 216 207 209 214C202 221 193 232 191 240C189 248 200 248 198 255C197 262 190 271 184 278C177 285 173 292 163 295C153 298 137 294 128 296C119 298 118 307 113 308C107 309 105 304 99 300C93 296 84 292 82 286C80 280 88 274 88 266C88 258 83 250 84 242C84 234 88 230 90 224C91 218 89 215 91 210C93 205 100 201 100 198C101 195 100 192 94 191C89 190 78 193 71 193C65 193 62 194 60 192C58 190 60 186 59 182C58 178 51 174 53 170C55 166 64 162 68 159C73 156 70 155 77 155C85 155 96 157 107 158C117 159 129 160 137 161C145 162 144 163 149 163C155 163 157 161 168 163Z",
  },
  {
    name: "Maroc",
    opacity: 0.24,
    path: "M105 314C108 311 110 310 114 312C119 314 123 324 130 326C136 328 145 324 151 324C157 324 158 325 162 328C165 331 168 333 169 340C171 347 168 357 169 366C171 375 180 384 177 388C174 392 158 386 151 388C144 390 142 394 140 398C138 402 144 408 140 412C137 416 126 415 120 420C114 425 116 434 108 438C101 442 87 439 79 442C71 445 66 449 63 456C60 463 73 474 63 478C52 482 11 481 4 478C-3 475 19 468 25 461C32 454 35 449 39 442C43 435 47 430 48 422C50 414 44 408 45 401C46 394 50 391 54 384C57 377 61 370 65 365C70 360 74 361 79 358C84 355 87 356 90 350C94 344 96 335 99 328C102 321 102 317 105 314Z",
  },
] as const;

const COUNTRY_LABELS = [
  { name: "FRANCE", x: 236, y: 104 },
  { name: "ESPAGNE", x: 203, y: 200 },
  { name: "MAROC", x: 88, y: 364 },
] as const;

const CITIES = [
  { name: "Biarritz", x: 171, y: 160 },
  { name: "Algésiras", x: 112, y: 307 },
  { name: "Désert", x: 134, y: 408 },
] as const;

const ARRIVAL = { name: "Marrakech", x: 73, y: 397 } as const;

const ROUTE = [...CITIES, ARRIVAL]
  .map((city) => `${city.x},${city.y}`)
  .join(" ");

export default function RouteMap() {
  return (
    <div className="glass rounded-panel p-5">
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

        {COUNTRIES.map((country) => (
          <path
            key={country.name}
            d={country.path}
            fill="var(--color-ink)"
            fillOpacity={country.opacity}
            stroke="var(--color-ink)"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        ))}

        {COUNTRY_LABELS.map((label) => (
          <text
            key={label.name}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            letterSpacing="2"
            fill="var(--color-ink)"
          >
            {label.name}
          </text>
        ))}

        <polyline
          points={ROUTE}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 12"
        />
        {/* Tracé plein, dessiné au fil du défilement des étapes (styles/track.css). */}
        <polyline
          points={ROUTE}
          fill="none"
          stroke="var(--color-poster-yellow)"
          strokeWidth="4"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          className="track-route"
        />

        {CITIES.map((city) => (
          <g key={city.name}>
            <circle cx={city.x} cy={city.y} r="6" fill="var(--color-ink)" />
            <text
              x={city.x + 12}
              y={city.y + 5}
              fontSize="14"
              fontWeight="600"
              fill="var(--color-ink)"
            >
              {city.name}
            </text>
          </g>
        ))}

        <circle
          cx={ARRIVAL.x}
          cy={ARRIVAL.y}
          r="8"
          fill="var(--color-poster-yellow)"
        />
        <text
          x={ARRIVAL.x + 4}
          y={ARRIVAL.y + 25}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="var(--color-poster-yellow)"
        >
          {ARRIVAL.name}
        </text>
      </svg>
      <p className="mt-2 text-sm text-ink-soft">
        Carte simplifiée, tracé indicatif.
      </p>
    </div>
  );
}
