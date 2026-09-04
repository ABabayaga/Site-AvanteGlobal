import { useState } from 'react'

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

  return (
    <section id="seguros" className="bg-ice py-24 font-hero max-lg:py-14">
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
          Seguros
        </div>

        <h1 className="mb-6 max-w-190 text-[52px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-4xl">
          <span className="relative inline-block">
            Todos os
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-sky-accent"
            />
          </span>{' '}
          ramos de seguro em um único lugar.
        </h1>

        <p className="mb-2 max-w-160 text-lg text-text max-lg:text-base">
          Seguro é uma questão de confiança, nossa assinatura há mais de 18 anos.
        </p>

        <p className="mb-10 max-w-160 text-lg text-text max-lg:text-base">
          A Avante Global trabalha com as principais seguradoras nacionais e
          internacionais. Possuímos centenas de apólices emitidas em todos os
          ramos de seguro.
        </p>

        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-emerald-50 px-5 py-2.5 text-[13px] font-semibold text-emerald-700">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0">
            <path
              fill="currentColor"
              d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
            />
          </svg>
          Centenas de apólices emitidas em todos os ramos de seguros.
        </div>

        <div className="mb-8 overflow-hidden rounded-3xl bg-navy-deep p-10 max-lg:p-6">
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

        <div className="mb-10 rounded-2xl border-l-4 border-amber-glow bg-cream px-8 py-6 max-lg:px-5">
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
