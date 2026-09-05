import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const CARGO_TAGS = [
  'Grãos',
  'Combustível',
  'Máquinas',
  'Medicamentos',
  'Eletrônicos',
  'Químicos',
  'Cargas pesadas',
  'Carga seca',
  'Frigorificada',
  'Granel sólido',
  'Granel líquido',
]

// Path traced from real Brazil border coordinates (geo lon/lat projected to
// SVG space at 8px/degree), so the silhouette reads as an actual map.
const BRAZIL_PATH =
  'M130.9,283.7 L141.6,272.8 L150.6,265.0 L156.0,261.8 L162.7,257.3 L162.9,251.0 L158.9,246.3 L154.9,247.9 L156.5,243.3 L157.6,238.5 L157.6,234.1 L154.7,232.7 L151.7,234.0 L148.7,233.6 L147.8,230.5 L147.0,223.2 L145.5,220.8 L140.1,218.6 L136.8,220.2 L128.4,218.7 L128.9,207.8 L126.6,203.4 L129.1,201.7 L128.3,197.2 L130.5,193.7 L131.9,187.3 L130.0,182.4 L125.7,180.1 L124.8,177.0 L126.0,172.4 L110.6,172.0 L107.6,162.7 L109.9,162.6 L109.8,159.1 L108.2,156.8 L107.9,152.2 L103.2,149.8 L98.2,149.9 L94.9,147.5 L89.5,146.0 L86.3,143.0 L77.4,141.7 L68.7,134.5 L69.3,129.1 L68.3,126.0 L69.2,120.1 L58.7,121.4 L54.5,124.4 L47.5,127.7 L45.7,130.1 L41.6,130.2 L35.7,129.6 L31.1,130.9 L27.5,130.0 L28.0,117.9 L21.5,122.6 L14.4,122.4 L11.4,118.1 L6.1,117.7 L7.8,114.2 L3.3,109.4 L0.0,102.1 L2.1,100.7 L2.1,97.3 L6.9,95.0 L6.1,90.7 L8.2,87.9 L8.8,84.2 L17.9,78.7 L24.5,77.2 L25.5,76.0 L32.7,76.3 L36.3,54.4 L36.5,50.9 L35.3,46.4 L31.7,43.4 L31.8,37.6 L36.3,36.3 L37.9,37.1 L38.1,34.1 L33.5,33.2 L33.4,28.2 L48.9,28.4 L51.6,25.7 L53.8,28.2 L55.4,32.9 L56.9,31.9 L61.3,36.2 L67.5,35.6 L69.1,33.2 L75.0,31.3 L78.3,30.0 L79.2,26.6 L84.9,24.3 L84.5,22.7 L77.7,22.0 L76.6,16.9 L76.9,11.6 L73.4,9.5 L74.9,8.8 L80.8,9.8 L87.2,11.8 L89.5,9.9 L95.2,8.7 L104.2,5.7 L107.1,2.6 L106.0,0.4 L110.2,0.0 L112.1,1.8 L111.0,5.4 L113.8,6.6 L115.6,10.3 L113.4,13.1 L112.1,19.9 L114.1,24.0 L114.7,27.7 L119.7,31.4 L123.6,31.8 L124.5,30.2 L127.0,29.9 L130.6,28.5 L133.2,26.4 L137.6,27.0 L139.6,26.8 L143.9,27.4 L144.7,25.8 L143.3,24.2 L144.1,21.9 L147.3,22.6 L151.1,21.8 L155.7,23.5 L159.2,25.1 L161.7,22.9 L163.5,23.3 L164.6,25.5 L168.4,25.0 L171.4,21.9 L173.9,16.0 L178.6,8.7 L181.4,8.3 L183.3,12.8 L187.8,26.7 L192.1,28.1 L192.3,33.6 L186.3,40.2 L188.8,42.6 L202.9,43.8 L203.2,51.9 L209.3,46.6 L219.4,49.5 L232.7,54.4 L236.6,59.1 L235.2,63.5 L244.5,61.0 L260.1,65.3 L272.1,64.9 L283.9,71.6 L294.1,80.5 L300.3,82.8 L307.1,83.2 L310.0,85.7 L312.7,95.9 L314.1,100.7 L310.9,113.9 L306.8,119.2 L295.5,130.3 L290.4,139.3 L284.5,146.3 L282.5,146.4 L280.3,152.3 L280.8,167.3 L278.6,179.6 L277.8,184.9 L275.2,188.1 L273.8,198.7 L265.7,209.2 L264.3,217.5 L257.9,220.9 L256.0,225.7 L247.3,225.7 L234.7,228.8 L229.1,232.3 L220.1,234.7 L210.7,241.0 L203.9,249.0 L202.8,254.9 L204.1,259.4 L202.6,267.4 L200.8,271.3 L195.2,275.8 L186.3,289.8 L179.3,296.2 L173.8,299.9 L170.2,307.5 L164.9,312.1 L162.7,307.6 L166.2,303.8 L161.6,298.3 L155.3,293.9 L147.1,288.8 L144.1,289.0 L136.1,282.8 Z'

const MAP_HUBS = [
  { name: 'Manaus', x: 111.7, y: 66.8, delay: '0s' },
  { name: 'Fortaleza', x: 283.6, y: 71.8, delay: '0.4s' },
  { name: 'Recife', x: 312.9, y: 106.3, delay: '0.8s' },
  { name: 'Salvador', x: 283.8, y: 145.8, delay: '1.2s' },
  { name: 'Brasília', x: 208.8, y: 168.3, delay: '1.6s' },
  { name: 'Belo Horizonte', x: 240.4, y: 201.3, delay: '0.2s' },
  { name: 'Rio de Janeiro', x: 246.5, y: 225.2, delay: '0.6s' },
  { name: 'São Paulo', x: 218.8, y: 230.4, delay: '0s' },
  { name: 'Curitiba', x: 197.7, y: 245.4, delay: '1s' },
  { name: 'Porto Alegre', x: 182.2, y: 282.2, delay: '1.4s' },
]

const MAP_ROUTES = [
  'M208.8,168.3 Q225,200 218.8,230.4',
  'M218.8,230.4 Q233,228 246.5,225.2',
  'M218.8,230.4 Q208,238 197.7,245.4',
  'M197.7,245.4 Q190,265 182.2,282.2',
  'M208.8,168.3 Q250,105 283.6,71.8',
  'M208.8,168.3 Q255,150 283.8,145.8',
]

function BrazilMap() {
  return (
    <div
      data-reveal
      className="relative isolate w-full max-w-110 shrink-0 overflow-hidden rounded-3xl bg-navy-deep p-8 shadow-[0_20px_50px_-20px_rgba(20,27,46,0.45)] max-lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue/25 blur-3xl"
      />

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
        aria-label="Mapa do Brasil com pontos de cobertura da Avante Global"
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
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="3 4"
          />
        ))}

        {MAP_HUBS.map((hub) => (
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
            <circle cx={hub.x} cy={hub.y} r="3" fill="#ffffff" />
            <circle cx={hub.x} cy={hub.y} r="3" fill="#8fc3f4" opacity="0.6" />
          </g>
        ))}
      </svg>

      <p className="relative mt-4 max-w-90 text-center text-sm leading-relaxed text-text-onDark-muted">
        Apólices emitidas de norte a sul, com o mesmo padrão de atendimento em
        qualquer praça.
      </p>
    </div>
  )
}

type CategoryItem = {
  badge?: string
  title: string
  description: string
  footnote?: string
}

type Category = {
  number: string
  title: string
  note: string
  description: string
  items: CategoryItem[]
  legalNotice?: string
}

const CATEGORIES: Category[] = [
  {
    number: '01',
    title: 'Transporte e Logística',
    note: 'Todos os ramos de seguros, em um único lugar.',
    description:
      'Proteção completa para as mercadorias, patrimônio, pessoas e operação, da origem ao destino.',
    items: [
      {
        badge: 'OBRIGATÓRIO · RAMO 54',
        title: 'RCTR-C',
        description:
          'Responsabilidade Civil do Transportador Rodoviário de Carga. Cobre perdas e danos à carga por acidente com o veículo: colisão, abalroamento, tombamento, capotamento, incêndio ou explosão.',
        footnote:
          'Obrigatório para o transportador. Lei nº 14.599/2023 (altera a Lei nº 11.442/2007); Resolução SUSEP nº 51/2025.',
      },
      {
        badge: 'OBRIGATÓRIO · RAMO 55',
        title: 'RC-DC',
        description:
          'Responsabilidade Civil por Desaparecimento de Carga. Cobre roubo, furto simples ou qualificado, apropriação indébita, estelionato e extorsão durante o transporte.',
        footnote:
          'Obrigatório desde a Lei nº 14.599/2023 (antes facultativo). Resolução SUSEP nº 51/2025.',
      },
      {
        badge: 'OBRIGATÓRIO · RAMO 59',
        title: 'RC-V',
        description:
          'Responsabilidade Civil de Veículo. Cobre danos corporais e materiais a terceiros pelo veículo do transporte, alcançando a carga que dele se desprenda.',
        footnote:
          'Obrigatório. Lei nº 14.599/2023; Resolução SUSEP nº 51/2025, em vigor desde 1º/07/2025.',
      },
      {
        badge: 'OBRIGATÓRIO · EMBARCADOR',
        title: 'Transporte Nacional (TN)',
        description:
          'Protege a mercadoria do embarcador (dono da carga) durante todo o percurso em território nacional.',
        footnote:
          'Obrigatório para o embarcador. Decreto-Lei nº 73/1966 (art. 20) e Decreto nº 61.867/1967.',
      },
      {
        badge: 'FACULTATIVO',
        title: 'RC-Frota (RCF-V)',
        description:
          'Responsabilidade Civil Facultativa de Veículos. Amplia a proteção da frota por danos a terceiros além dos limites obrigatórios.',
        footnote: 'Facultativo. Regulado pela SUSEP.',
      },
      {
        badge: 'RECOMENDADO',
        title: 'Ambiental',
        description:
          'Cobre danos ambientais causados a terceiros e as despesas de contenção, limpeza e reparação. Mesmo sem obrigação legal geral, costuma ser exigência do próprio segmento para o transporte de produtos químicos e cargas perigosas.',
        footnote:
          'Facultativo. Regulado pela SUSEP. Exigência frequente de embarcadores e do segmento.',
      },
    ],
    legalNotice:
      'Aviso legal: coberturas, exclusões e limites seguem as Condições Gerais de cada apólice e a regulamentação da SUSEP. Referências legais informativas (base: julho/2025), a validar juridicamente antes da publicação.',
  },
  {
    number: '02',
    title: 'Empresas',
    note: 'Proteção para o patrimônio e para as atividades.',
    description: 'Segurança para as atividades e o patrimônio da empresa.',
    items: [
      {
        badge: 'FACULTATIVO',
        title: 'Empresarial',
        description:
          'Compreensivo empresarial: patrimônio, instalações e equipamentos contra incêndio, roubo, danos elétricos e outros riscos.',
        footnote: 'Facultativo. Regulado pela SUSEP (Decreto-Lei nº 73/1966).',
      },
      {
        badge: 'FACULTATIVO',
        title: 'E&O',
        description:
          'Responsabilidade Civil Profissional. Protege contra prejuízos por erros, falhas ou omissões na prestação de serviços.',
        footnote: 'Facultativo. Regulado pela SUSEP.',
      },
      {
        badge: 'FACULTATIVO',
        title: 'RC Geral',
        description:
          'Responsabilidade Civil Geral. Protege a empresa contra danos corporais e materiais causados a terceiros nas suas atividades.',
        footnote: 'Facultativo. Regulado pela SUSEP.',
      },
    ],
  },
  {
    number: '03',
    title: 'Pessoas',
    note: 'Proteção para quem faz a empresa.',
    description: 'Segurança para os colaboradores e suas famílias.',
    items: [
      {
        badge: 'FACULTATIVO',
        title: 'Seguro de Vida',
        description:
          'Ampara colaboradores e famílias em caso de morte, invalidez e outros eventos cobertos.',
        footnote: 'Facultativo. Seguro de pessoas regulado pela SUSEP.',
      },
      {
        badge: 'FACULTATIVO',
        title: 'Seguro Saúde',
        description:
          'Plano de saúde empresarial: assistência médica e hospitalar para colaboradores e dependentes.',
        footnote: 'Regulado pela ANS, Lei nº 9.656/1998.',
      },
      {
        badge: 'FACULTATIVO',
        title: 'Odontológico',
        description:
          'Plano odontológico empresarial: assistência odontológica para colaboradores e dependentes.',
        footnote: 'Regulado pela ANS, Lei nº 9.656/1998.',
      },
    ],
  },
  {
    number: '04',
    title: 'Seguro Agro',
    note: 'Do campo ao armazém, proteção para quem produz.',
    description: 'Cobertura para toda a cadeia do agronegócio.',
    items: [
      {
        title: 'Armazenagem',
        description:
          'Proteção para produtos armazenados em silos, armazéns e centros de distribuição contra incêndio, umidade e outros riscos.',
      },
      {
        title: 'Grãos em geral',
        description:
          'Cobertura para a produção de grãos, do plantio à comercialização.',
      },
      {
        title: 'Máquinas e equipamentos',
        description:
          'Proteção para tratores, colheitadeiras e implementos agrícolas.',
      },
      {
        title: 'Plantação',
        description:
          'Seguro rural para a lavoura contra eventos climáticos e perdas de produtividade.',
      },
      {
        title: 'Animal',
        description: 'Cobertura para rebanhos e animais de produção.',
      },
    ],
  },
  {
    number: '05',
    title: 'Seguro Internacional',
    note: 'Sua carga protegida além das fronteiras.',
    description: 'Segurança para importação e exportação.',
    items: [
      {
        title: 'Importação',
        description:
          'Proteção da carga no trajeto internacional até a chegada ao Brasil.',
      },
      {
        title: 'Exportação',
        description:
          'Cobertura da mercadoria brasileira no percurso até o destino no exterior.',
      },
    ],
  },
  {
    number: '06',
    title: 'Seguros Especiais',
    note: 'Soluções sob medida para operações complexas.',
    description: 'Instrumentos financeiros que protegem contratos e recebíveis.',
    items: [
      {
        title: 'Crédito',
        description:
          'Protege a empresa contra a inadimplência de clientes em vendas a prazo.',
      },
      {
        title: 'Garantias',
        description:
          'Garante o cumprimento de obrigações contratuais (seguro garantia) em licitações e contratos.',
      },
    ],
  },
]

function Seguros() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const scope = useScrollReveal<HTMLElement>()

  return (
    <section ref={scope} id="seguros" className="bg-ice py-24 font-hero max-lg:py-14">
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div className="mb-8 flex items-start justify-between gap-16 max-lg:flex-col max-lg:gap-10">
          <div>
            <div
              data-reveal
              className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue"
            >
              Seguros
            </div>

            <h1
              data-reveal
              className="mb-6 max-w-190 text-[52px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-4xl"
            >
              <span className="relative inline-block">
                Todos os
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-sky-accent"
                />
              </span>{' '}
              ramos de seguro em um único lugar.
            </h1>

            <p data-reveal className="mb-2 max-w-160 text-lg text-text max-lg:text-base">
              Seguro é uma questão de confiança, nossa assinatura há mais de 18 anos.
            </p>

            <p data-reveal className="mb-10 max-w-160 text-lg text-text max-lg:text-base">
              A Avante Global trabalha com as principais seguradoras nacionais e
              internacionais. Possuímos centenas de apólices emitidas em todos os
              ramos de seguro.
            </p>

            <div
              data-reveal
              className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 px-5 py-2.5 text-[13px] font-semibold text-emerald-700"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0">
                <path
                  fill="currentColor"
                  d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                />
              </svg>
              Centenas de apólices emitidas em todos os ramos de seguros.
            </div>
          </div>

          <BrazilMap />
        </div>

        <div data-reveal className="mb-8 overflow-hidden rounded-3xl bg-navy-deep p-10 max-lg:p-6">
          <div className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
            Transporte é o nosso território
          </div>

          <h3 className="mb-4 max-w-150 text-[28px] leading-tight font-bold text-white max-lg:text-2xl">
            A gente conhece a rota, a carga e o risco.
          </h3>

          <p className="mb-8 max-w-175 text-base leading-relaxed text-text-onDark">
            Mais de 35 anos dentro da operação logística. Antes de indicar a
            apólice, entendemos a carga, o trajeto e os pontos de exposição.
          </p>

          <div className="-mx-10 flex scrollbar-none gap-3 overflow-x-auto px-10 pb-1 max-lg:-mx-6 max-lg:px-6">
            {CARGO_TAGS.map((tag) => (
              <span
                key={tag}
                className="shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm whitespace-nowrap text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mb-10 rounded-2xl border-l-4 border-amber-glow bg-cream px-8 py-6 max-lg:px-5"
        >
          <h4 className="mb-2 text-lg font-bold text-navy-deep">
            Na ocorrência de eventual sinistro: está preparado para fazer essa
            gestão?
          </h4>
          <p className="m-0 max-w-210 text-base leading-relaxed text-text">
            Qual o impacto financeiro e na imagem da empresa? Não espere a
            tragédia acontecer para proteger o seu negócio. Com a Avante
            Global e sua expertise em gestão de risco e seguros, ajudaremos
            você a reduzir seus prejuízos, sua sinistralidade e o impacto na
            imagem da sua empresa.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {CATEGORIES.map((category, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={category.number}
                data-reveal
                className="overflow-hidden rounded-3xl bg-white shadow-[0_1px_3px_rgba(20,27,46,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-8 py-6 text-left max-lg:px-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-blue">
                      {category.number}
                    </span>
                    <span className="text-lg font-bold text-navy-deep max-lg:text-base">
                      {category.title}
                    </span>
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-colors duration-200 ${
                      isOpen
                        ? 'bg-blue text-white'
                        : 'bg-sky-accent/15 text-blue'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 max-lg:px-5">
                    <p className="m-0 mb-1 text-lg font-semibold text-blue">
                      {category.note}
                    </p>
                    <p className="m-0 mb-6 text-base text-text">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                      {category.items.map((item) => (
                        <div
                          key={item.title}
                          className={
                            item.badge
                              ? 'flex flex-col rounded-2xl border border-ice-border bg-white p-5'
                              : 'flex flex-col rounded-2xl border border-ice-border bg-ice p-5'
                          }
                        >
                          {item.badge && (
                            <span
                              className={`mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${
                                item.badge.startsWith('OBRIGATÓRIO')
                                  ? 'bg-sky-accent/15 text-blue'
                                  : 'bg-navy-deep/8 text-steel'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                          <h5 className="m-0 mb-2 text-base font-bold text-navy-deep">
                            {item.title}
                          </h5>
                          <p className="m-0 text-sm leading-relaxed text-text">
                            {item.description}
                          </p>
                          {item.footnote && (
                            <p className="m-0 mt-4 border-t border-ice-border pt-3 text-xs leading-relaxed text-steel">
                              {item.footnote}
                            </p>
                          )}
                        </div>
                      ))}

                      {category.legalNotice && (
                        <div className="flex flex-col justify-center rounded-2xl border-l-4 border-amber-glow bg-cream p-5">
                          <p className="m-0 text-sm leading-relaxed text-text">
                            <span className="font-bold text-navy-deep">
                              Aviso legal:
                            </span>{' '}
                            {category.legalNotice.replace('Aviso legal: ', '')}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Seguros
