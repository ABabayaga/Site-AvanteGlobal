const FEATURES = [
  {
    title: 'Rastreador híbrido satelital / GPRS',
    description:
      'Monitoramento em tempo real do veículo e da carga por satélite e rede móvel.',
  },
  {
    title: 'Isca (localizador móvel)',
    description:
      'Localizador portátil embarcado na carga para recuperação em caso de desvio.',
  },
  {
    title: 'Imobilizadores',
    description:
      'Bloqueio no módulo do veículo, acionado a distância diante de sinais de risco.',
  },
  {
    title: 'Blindagens elétricas',
    description:
      'Proteção da fiação e dos comandos contra violação do rastreamento.',
  },
  {
    title: 'Escolta e pronta resposta',
    description:
      'Acompanhamento e resposta rápida em rotas de maior risco.',
  },
  {
    title: 'Torre de controle',
    description:
      'Central de monitoramento que acompanha a operação e antecipa ocorrências.',
  },
  {
    title: 'TMS',
    description:
      'Gestão de transporte para transportadoras de todos os portes, com emissão de CT-e.',
  },
  {
    title: 'CFTV interno e na estrada',
    description: 'Monitoramento por câmera no pátio e no veículo em operação.',
  },
]

function Tecnologias() {
  return (
    <section id="tecnologias" className="bg-ice py-24 font-hero max-lg:py-14">
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
          Tecnologias
        </div>

        <h1 className="mb-6 max-w-190 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
          <span className="relative inline-block">
            Tecnologia
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-sky-accent"
            />
          </span>{' '}
          para logística e transporte.
        </h1>

        <p className="mb-14 max-w-160 text-lg text-text max-lg:mb-10 max-lg:text-base">
          Gerenciamento de risco, rastreamento e sistemas que reduzem perdas e
          dão poder de decisão.
        </p>

        <div className="mb-14 grid grid-cols-[1fr_1fr] items-center gap-14 max-lg:mb-10 max-lg:grid-cols-1 max-lg:gap-8">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Torre de controle da Avante Global monitorando rotas e veículos em tempo real"
            className="aspect-4/3 w-full rounded-2xl object-cover"
          />

          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
              Risco sob controle
            </div>

            <h2 className="mb-4 text-[28px] leading-tight font-bold text-navy-deep max-lg:text-2xl">
              Da isca ao TMS, tudo integrado.
            </h2>

            <p className="m-0 text-base leading-relaxed text-text">
              Monitoramento em tempo real, resposta rápida e gestão de dados.
              A tecnologia certa reduz avaria, extravio e roubo e devolve
              previsibilidade para a diretoria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-2xl border border-ice-border bg-white p-5"
            >
              <h5 className="m-0 mb-2 text-base font-bold text-navy-deep">
                {feature.title}
              </h5>
              <p className="m-0 text-sm leading-relaxed text-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tecnologias
