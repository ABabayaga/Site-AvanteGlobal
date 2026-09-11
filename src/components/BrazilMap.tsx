// Path traced from real Brazil border coordinates (geo lon/lat projected to
// SVG space at 8px/degree), so the silhouette reads as an actual map.
const BRAZIL_PATH =
  'M130.9,283.7 L141.6,272.8 L150.6,265.0 L156.0,261.8 L162.7,257.3 L162.9,251.0 L158.9,246.3 L154.9,247.9 L156.5,243.3 L157.6,238.5 L157.6,234.1 L154.7,232.7 L151.7,234.0 L148.7,233.6 L147.8,230.5 L147.0,223.2 L145.5,220.8 L140.1,218.6 L136.8,220.2 L128.4,218.7 L128.9,207.8 L126.6,203.4 L129.1,201.7 L128.3,197.2 L130.5,193.7 L131.9,187.3 L130.0,182.4 L125.7,180.1 L124.8,177.0 L126.0,172.4 L110.6,172.0 L107.6,162.7 L109.9,162.6 L109.8,159.1 L108.2,156.8 L107.9,152.2 L103.2,149.8 L98.2,149.9 L94.9,147.5 L89.5,146.0 L86.3,143.0 L77.4,141.7 L68.7,134.5 L69.3,129.1 L68.3,126.0 L69.2,120.1 L58.7,121.4 L54.5,124.4 L47.5,127.7 L45.7,130.1 L41.6,130.2 L35.7,129.6 L31.1,130.9 L27.5,130.0 L28.0,117.9 L21.5,122.6 L14.4,122.4 L11.4,118.1 L6.1,117.7 L7.8,114.2 L3.3,109.4 L0.0,102.1 L2.1,100.7 L2.1,97.3 L6.9,95.0 L6.1,90.7 L8.2,87.9 L8.8,84.2 L17.9,78.7 L24.5,77.2 L25.5,76.0 L32.7,76.3 L36.3,54.4 L36.5,50.9 L35.3,46.4 L31.7,43.4 L31.8,37.6 L36.3,36.3 L37.9,37.1 L38.1,34.1 L33.5,33.2 L33.4,28.2 L48.9,28.4 L51.6,25.7 L53.8,28.2 L55.4,32.9 L56.9,31.9 L61.3,36.2 L67.5,35.6 L69.1,33.2 L75.0,31.3 L78.3,30.0 L79.2,26.6 L84.9,24.3 L84.5,22.7 L77.7,22.0 L76.6,16.9 L76.9,11.6 L73.4,9.5 L74.9,8.8 L80.8,9.8 L87.2,11.8 L89.5,9.9 L95.2,8.7 L104.2,5.7 L107.1,2.6 L106.0,0.4 L110.2,0.0 L112.1,1.8 L111.0,5.4 L113.8,6.6 L115.6,10.3 L113.4,13.1 L112.1,19.9 L114.1,24.0 L114.7,27.7 L119.7,31.4 L123.6,31.8 L124.5,30.2 L127.0,29.9 L130.6,28.5 L133.2,26.4 L137.6,27.0 L139.6,26.8 L143.9,27.4 L144.7,25.8 L143.3,24.2 L144.1,21.9 L147.3,22.6 L151.1,21.8 L155.7,23.5 L159.2,25.1 L161.7,22.9 L163.5,23.3 L164.6,25.5 L168.4,25.0 L171.4,21.9 L173.9,16.0 L178.6,8.7 L181.4,8.3 L183.3,12.8 L187.8,26.7 L192.1,28.1 L192.3,33.6 L186.3,40.2 L188.8,42.6 L202.9,43.8 L203.2,51.9 L209.3,46.6 L219.4,49.5 L232.7,54.4 L236.6,59.1 L235.2,63.5 L244.5,61.0 L260.1,65.3 L272.1,64.9 L283.9,71.6 L294.1,80.5 L300.3,82.8 L307.1,83.2 L310.0,85.7 L312.7,95.9 L314.1,100.7 L310.9,113.9 L306.8,119.2 L295.5,130.3 L290.4,139.3 L284.5,146.3 L282.5,146.4 L280.3,152.3 L280.8,167.3 L278.6,179.6 L277.8,184.9 L275.2,188.1 L273.8,198.7 L265.7,209.2 L264.3,217.5 L257.9,220.9 L256.0,225.7 L247.3,225.7 L234.7,228.8 L229.1,232.3 L220.1,234.7 L210.7,241.0 L203.9,249.0 L202.8,254.9 L204.1,259.4 L202.6,267.4 L200.8,271.3 L195.2,275.8 L186.3,289.8 L179.3,296.2 L173.8,299.9 L170.2,307.5 L164.9,312.1 L162.7,307.6 L166.2,303.8 L161.6,298.3 L155.3,293.9 L147.1,288.8 L144.1,289.0 L136.1,282.8 Z'

// Capitais dos 26 estados + Distrito Federal, projetadas no mesmo espaço do
// BRAZIL_PATH (8px/grau, x = 8*lon + 591.7, y = -8*lat + 42), calibrado a
// partir dos 10 pontos originais. Goiânia é destacada como sede da empresa.
const MAP_HUBS = [
  { name: 'Rio Branco', x: 49.2, y: 121.8, delay: '0s' },
  { name: 'Maceió', x: 305.9, y: 119.2, delay: '0.3s' },
  { name: 'Macapá', x: 183.1, y: 41.8, delay: '0.6s' },
  { name: 'Manaus', x: 111.7, y: 66.8, delay: '0.9s' },
  { name: 'Salvador', x: 283.8, y: 145.8, delay: '1.2s' },
  { name: 'Fortaleza', x: 283.6, y: 71.8, delay: '1.5s' },
  { name: 'Brasília', x: 208.8, y: 168.3, delay: '1.8s' },
  { name: 'Vitória', x: 269.0, y: 204.6, delay: '2.1s' },
  { name: 'Goiânia', x: 197.7, y: 175.4, delay: '0s', isHQ: true },
  { name: 'São Luís', x: 237.3, y: 62.2, delay: '0.1s' },
  { name: 'Cuiabá', x: 142.9, y: 166.8, delay: '0.4s' },
  { name: 'Campo Grande', x: 154.5, y: 205.5, delay: '0.7s' },
  { name: 'Belo Horizonte', x: 240.4, y: 201.3, delay: '1s' },
  { name: 'Belém', x: 203.7, y: 53.7, delay: '1.3s' },
  { name: 'João Pessoa', x: 312.8, y: 99.0, delay: '1.6s' },
  { name: 'Curitiba', x: 197.7, y: 245.4, delay: '1.9s' },
  { name: 'Recife', x: 312.9, y: 106.3, delay: '2.2s' },
  { name: 'Teresina', x: 249.3, y: 82.7, delay: '2.5s' },
  { name: 'Rio de Janeiro', x: 246.5, y: 225.2, delay: '0.2s' },
  { name: 'Natal', x: 310.1, y: 88.3, delay: '0.5s' },
  { name: 'Porto Alegre', x: 182.2, y: 282.2, delay: '0.8s' },
  { name: 'Porto Velho', x: 80.5, y: 112.1, delay: '1.1s' },
  { name: 'Boa Vista', x: 106.3, y: 19.4, delay: '1.4s' },
  { name: 'Florianópolis', x: 203.3, y: 262.8, delay: '1.7s' },
  { name: 'São Paulo', x: 218.8, y: 230.4, delay: '2.0s' },
  { name: 'Aracaju', x: 295.1, y: 129.3, delay: '2.3s' },
  { name: 'Palmas', x: 205.1, y: 124.0, delay: '0s' },
]

// Rotas irradiando da sede (Goiânia) até cada capital atendida, com um leve
// arco (curva de Bézier quadrática) para as linhas não se sobreporem em
// linha reta perto do centro do mapa.
const HQ_HUB = MAP_HUBS.find((hub) => hub.isHQ)!

function buildRoute(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2
  const my = (from.y + to.y) / 2
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.hypot(dx, dy) || 1
  const bow = dist * 0.12
  const cx = mx + (-dy / dist) * bow
  const cy = my + (dx / dist) * bow
  return `M${from.x},${from.y} Q${cx.toFixed(1)},${cy.toFixed(1)} ${to.x},${to.y}`
}

const MAP_ROUTES = MAP_HUBS.filter((hub) => !hub.isHQ).map((hub) =>
  buildRoute(HQ_HUB, hub),
)

type BrazilMapProps = {
  /**
   * 'card' (default): boxed panel with its own background, used on the
   * Seguros page. 'bare': no background/shadow of its own, so the map
   * blends straight into whatever section it's placed on (used on Hero).
   */
  variant?: 'card' | 'bare'
}

function BrazilMap({ variant = 'card' }: BrazilMapProps) {
  const isBare = variant === 'bare'

  return (
    <div
      data-reveal
      className={
        isBare
          ? 'relative isolate w-full max-w-110 shrink-0 max-lg:max-w-none'
          : 'relative isolate w-full max-w-110 shrink-0 overflow-hidden rounded-3xl bg-navy-deep p-8 shadow-[0_20px_50px_-20px_rgba(20,27,46,0.45)] max-lg:max-w-none'
      }
    >
      {!isBare && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue/25 blur-3xl"
          />
        </>
      )}

      <div className="relative mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-accent" />
        </span>
        Cobertura em todo o território nacional
      </div>

      <svg
        viewBox="-10 -10 335 335"
        className="relative mx-auto w-full max-w-90"
        role="img"
        aria-label="Mapa do Brasil com pontos de cobertura da Avante Global Seguros"
      >
        <defs>
          <linearGradient id="brMapFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a3a66" />
            <stop offset="100%" stopColor="#1c2440" />
          </linearGradient>
          <pattern
            id="brMapDots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="rgba(143,195,244,0.35)" />
          </pattern>
          <clipPath id="brMapClip">
            <path d={BRAZIL_PATH} />
          </clipPath>
        </defs>

        <path
          d={BRAZIL_PATH}
          fill="url(#brMapFill)"
          stroke="#8fc3f4"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <rect
          x="0"
          y="0"
          width="320"
          height="320"
          fill="url(#brMapDots)"
          clipPath="url(#brMapClip)"
        />

        {MAP_ROUTES.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="#8fc3f4"
            strokeWidth="0.75"
            strokeOpacity="0.22"
            strokeDasharray="2.5 3.5"
          />
        ))}

        {MAP_HUBS.filter((hub) => !hub.isHQ).map((hub) => (
          <g key={hub.name}>
            <circle
              cx={hub.x}
              cy={hub.y}
              r="4"
              fill="#8fc3f4"
              opacity="0.35"
              style={{
                transformOrigin: `${hub.x}px ${hub.y}px`,
                animation: `map-pulse 2.6s ease-out infinite`,
                animationDelay: hub.delay,
              }}
            />
            <circle cx={hub.x} cy={hub.y} r="2.5" fill="#ffffff" />
            <circle cx={hub.x} cy={hub.y} r="2.5" fill="#8fc3f4" opacity="0.6" />
          </g>
        ))}

        {MAP_HUBS.filter((hub) => hub.isHQ).map((hub) => (
          <g key={hub.name}>
            <circle
              cx={hub.x}
              cy={hub.y}
              r="9"
              fill="#ffb066"
              opacity="0.25"
              style={{
                transformOrigin: `${hub.x}px ${hub.y}px`,
                animation: `map-pulse 2.2s ease-out infinite`,
                animationDelay: hub.delay,
              }}
            />
            <circle
              cx={hub.x}
              cy={hub.y}
              r="6"
              fill="#ffb066"
              opacity="0.4"
              style={{
                transformOrigin: `${hub.x}px ${hub.y}px`,
                animation: `map-pulse 2.2s ease-out infinite`,
                animationDelay: `calc(${hub.delay} + 0.3s)`,
              }}
            />
            <circle cx={hub.x} cy={hub.y} r="4" fill="#ffffff" />
            <circle cx={hub.x} cy={hub.y} r="4" fill="#ffb066" />
            <text
              x={hub.x}
              y={hub.y - 10}
              textAnchor="middle"
              fontSize="8.5"
              fontWeight="700"
              fill="#ffb066"
            >
              Sede
            </text>
          </g>
        ))}
      </svg>

      <div className="relative mt-4 flex items-center justify-center gap-5 text-xs text-text-onDark-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-sky-accent" />
          Capitais atendidas
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-amber-glow" />
          Goiânia · Sede
        </span>
      </div>

      <p className="relative mt-3 max-w-90 text-center text-sm leading-relaxed text-text-onDark-muted">
        Apólices emitidas de norte a sul, com o mesmo padrão de atendimento em
        qualquer praça.
      </p>
    </div>
  )
}

export default BrazilMap
