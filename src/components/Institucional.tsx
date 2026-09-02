import { Link } from 'react-router-dom'

const PILARES = [
  'Visão externa',
  'Mapa de riscos',
  'Redução de custos',
  'Retenção de talentos',
  'Continuidade',
]

const LIDERANCA = [
  {
    initials: 'RF',
    name: 'Rosemar Ferraz',
    role: 'Diretor',
    bullets: [
      '35 anos na cadeia logística',
      '18 anos com todos os ramos de seguros',
      'MBA em Operações e Logística',
      'Coach em Gestão de Resultados',
      'Especialista em TMS e WMS',
    ],
  },
  {
    initials: 'AF',
    name: 'Andrea Ferraz',
    role: 'Diretora',
    bullets: [
      '25 anos na cadeia logística',
      'MBA em Gestão de Projetos e Processos',
      'Especialista em SAP e WMS',
      'Gestão de pessoas e liderança',
      'Psicanalista clínica',
    ],
  },
]

function Institucional() {
  return (
    <>
      <section className="bg-ice py-24 font-hero max-lg:py-14" id="institucional">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
            Quem somos
          </div>

          <h2 className="mb-6 max-w-160 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
            Avante com a Global: solução total para a sua empresa.
          </h2>

          <div className="mb-14 max-w-160 border-t-4 border-sky-accent pt-4 max-lg:mb-10">
            <p className="m-0 text-lg text-text max-lg:text-base">
              Especialistas em seguros e gestão, com parcerias em nível
              nacional.
            </p>
          </div>

          <div className="grid grid-cols-[1fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
              alt="Colaborador da Avante Global conferindo estoque em um centro de distribuição"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />

            <div>
              <p className="mb-6 text-lg leading-relaxed text-text">
                A Avante Global Seguros e Consultoria Empresarial é
                especialista em todos os ramos de seguros, com um time
                dedicado a gerir negócios de sucesso e agregar valor em
                todas as áreas da empresa.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-text">
                Contamos com parcerias em nível nacional e soluções de
                tecnologia para logística e transporte, com métodos
                modernos que otimizam processos, aumentam a capacidade
                produtiva e geram poder de decisão para a média e a alta
                gestão, garantindo tranquilidade, redução de custos e
                crescimento sustentável.
              </p>

              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 py-4 pr-6 pl-5 text-[15px] text-emerald-900">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-emerald-700"
                >
                  <path
                    fill="currentColor"
                    d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.2v4.6c0 4-2.6 7.6-6 8.9-3.4-1.3-6-4.9-6-8.9V6.4l6-2.2Z"
                  />
                </svg>
                <span>
                  <span className="font-bold">
                    Seguro é uma questão de confiança.
                  </span>{' '}
                  Há 17 anos.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ice py-24 font-hero max-lg:py-14" id="nossa-missao">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Consultores da Avante Global em reunião de estratégia"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />

            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
                Nossa missão
              </div>

              <h2 className="mb-6 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
                Mais performance e receita, menos custo e menos caos.
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-text max-lg:text-base">
                Atuar nos recursos humanos e potencializar talentos;
                identificar e corrigir não conformidades; desenvolver
                estratégias com a alta gestão, com modelos inovadores que
                aumentam a qualidade, elevam a receita e reduzem custos,
                garantindo a continuidade e a expansão do negócio.
              </p>

              <div className="flex flex-wrap gap-3">
                {PILARES.map((pilar) => (
                  <span
                    key={pilar}
                    className="rounded-full border border-ice-border bg-white px-5 py-2.5 text-[15px] font-semibold text-navy-deep"
                  >
                    {pilar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 font-hero max-lg:py-14" id="nosso-time">
        <div className="mx-auto max-w-360 px-10 text-center max-lg:px-5">
          <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
            Nosso time
          </div>

          <h2 className="mx-auto mb-4 max-w-160 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
            Quem conduz a Avante.
          </h2>

          <p className="mx-auto mb-14 max-w-160 text-lg text-text max-lg:mb-10 max-lg:text-base">
            Experiência de mercado à frente de cada decisão.
          </p>

          <div className="mb-14 grid grid-cols-2 gap-8 text-left max-lg:mb-10 max-lg:grid-cols-1">
            {LIDERANCA.map(({ initials, name, role, bullets }) => (
              <div
                key={name}
                className="rounded-2xl border border-cream-border bg-white p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-navy-light to-navy-deep text-lg font-bold text-white">
                  {initials}
                </div>
                <h3 className="mb-1 text-xl font-extrabold text-navy-deep">
                  {name}
                </h3>
                <div className="mb-4 text-[13px] font-bold tracking-[1px] text-blue uppercase">
                  {role}
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-base leading-relaxed text-text"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/institucional"
            className="inline-flex items-center gap-2.5 rounded-full bg-navy-deep px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-white no-underline hover:bg-navy"
          >
            Conheça a Avante de perto, sem compromisso
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Institucional
