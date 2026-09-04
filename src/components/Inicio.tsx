import { Link } from 'react-router-dom'

const ATENDIMENTOS = [
  {
    label: 'Contratação direta',
    title: 'Proteções que a gente resolve rápido.',
    text: 'Seguros empresariais, de vida e de saúde: cotamos, comparamos e contratamos sem burocracia.',
    linkLabel: 'Ver seguros empresariais',
    to: '/seguros',
    dark: false,
  },
  {
    label: 'Operação de transporte',
    title: 'Carga e frota pedem análise técnica.',
    text: 'Seguros obrigatórios, gerenciamento de risco, rastreamento e acompanhamento. A gente entende antes de proteger.',
    linkLabel: 'Ver transporte e carga',
    to: '/seguros',
    dark: true,
  },
]

const PRODUTOS = [
  {
    icon: (
      <path
        fill="currentColor"
        d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.2v4.6c0 4-2.6 7.6-6 8.9-3.4-1.3-6-4.9-6-8.9V6.4l6-2.2Z"
      />
    ),
    label: 'Todos os ramos de seguros, em um único lugar.',
    title: 'Seguros de transporte',
    text: 'RCTR-C, RC-DC, RC-V, transporte nacional, frota e ambiental. Proteção para a carga e o veículo.',
    to: '/seguros',
  },
  {
    icon: (
      <path
        fill="currentColor"
        d="M4 21V9l8-5 8 5v12h-6v-6h-4v6H4Z"
      />
    ),
    label: 'Proteção para o patrimônio e as pessoas.',
    title: 'Seguros empresariais, agro e internacional',
    text: 'Empresarial, vida, saúde, agro, importação e exportação, crédito e garantias.',
    to: '/seguros',
  },
  {
    icon: (
      <path
        fill="currentColor"
        d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z"
      />
    ),
    label: 'Mais resultado, menos caos.',
    title: 'Consultoria de gestão',
    text: 'Financeiro, operacional, tributário e RH. Foco em resultado e continuidade.',
    to: '/consultorias',
  },
]

function Inicio() {
  return (
    <>
      <section className="bg-ice py-24 font-hero max-lg:py-14" id="como-atendemos">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
            Como atendemos
          </div>

          <h2 className="mb-6 max-w-160 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
            Cada necessidade tem o seu caminho.
          </h2>

          <div className="mb-14 max-w-160 border-t-4 border-sky-accent pt-4 max-lg:mb-10">
            <p className="m-0 text-lg text-text max-lg:text-base">
              Algumas proteções a gente resolve direto. Operação de transporte
              pede análise, gestão e acompanhamento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            {ATENDIMENTOS.map(({ label, title, text, linkLabel, to, dark }) => (
              <div
                key={label}
                className={`rounded-2xl p-10 max-lg:p-8 ${
                  dark
                    ? 'bg-navy-deep'
                    : 'border border-ice-border bg-white'
                }`}
              >
                <div
                  className={`mb-4 text-[13px] font-bold tracking-[1px] uppercase ${
                    dark ? 'text-sky-accent' : 'text-blue'
                  }`}
                >
                  {label}
                </div>
                <h3
                  className={`mb-4 text-[26px] leading-tight font-extrabold ${
                    dark ? 'text-white' : 'text-navy-deep'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mb-8 text-base leading-relaxed ${
                    dark ? 'text-text-onDark' : 'text-text'
                  }`}
                >
                  {text}
                </p>
                <Link
                  to={to}
                  className={`inline-flex items-center gap-2 text-[15px] font-semibold no-underline hover:opacity-70 ${
                    dark ? 'text-sky-accent' : 'text-blue'
                  }`}
                >
                  {linkLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3fa] py-24 font-hero max-lg:py-14" id="produtos-e-servicos">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="mb-4 text-[13px] font-bold tracking-[1px] text-blue uppercase">
            Produtos e serviços
          </div>

          <h2 className="mb-6 max-w-160 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
            Tudo o que a Avante entrega.
          </h2>

          <div className="mb-14 max-w-160 border-t-4 border-sky-accent pt-4 max-lg:mb-10">
            <p className="m-0 text-lg text-text max-lg:text-base">
              Clique para conhecer cada frente em detalhe.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {PRODUTOS.map(({ icon, label, title, text, to }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-accent/15">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-blue">
                    {icon}
                  </svg>
                </div>
                <div className="mb-3 text-[13px] font-semibold text-blue">
                  {label}
                </div>
                <h3 className="mb-3 text-xl leading-tight font-extrabold text-navy-deep">
                  {title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-text">
                  {text}
                </p>
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue no-underline hover:opacity-70"
                >
                  Explorar
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-2 overflow-hidden rounded-2xl bg-navy-deep max-lg:grid-cols-1">
            <div className="flex flex-col justify-center p-12 max-lg:p-8">
              <div className="mb-6 inline-flex w-fit items-center rounded-full bg-white/10 px-5 py-2 text-[13px] font-semibold text-white/90">
                Reforma tributária
              </div>
              <h3 className="mb-4 text-[28px] leading-tight font-extrabold text-white">
                A reforma já começou. Seu frete já sabe?
              </h3>
              <p className="mb-8 text-base leading-relaxed text-text-onDark">
                Diagnóstico do impacto real no frete, aproveitamento de
                crédito e equipe treinada para o novo IVA.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-sky-accent no-underline hover:opacity-70"
              >
                Quero um diagnóstico
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe da Avante Global analisando o impacto da reforma tributária no frete"
              className="h-full max-h-100 w-full object-cover max-lg:max-h-70"
            />
          </div>

          <div className="rounded-2xl bg-navy py-14 text-center max-lg:py-10">
            <h3 className="mx-auto mb-4 max-w-180 px-8 text-[28px] leading-tight font-extrabold text-white max-lg:text-2xl">
              Avante Global: atuação com foco do cliente e solução total em
              nível nacional.
            </h3>
            <p className="m-0 text-[13px] font-semibold tracking-[1.5px] text-sky-accent uppercase">
              Sua empresa crescendo com segurança, tecnologia e estratégia
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ice py-24 font-hero max-lg:py-14" id="nosso-jeito">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="grid grid-cols-[1fr_1fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-8">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
                Nosso jeito
              </div>

              <h2 className="mb-6 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
                O olhar externo que faz a conta fechar.
              </h2>

              <p className="mb-5 text-lg leading-relaxed text-text max-lg:text-base">
                Crescer volume sem crescer margem só aumenta o problema. A
                gente lê o resultado linha por linha: custo por rota, por
                cliente e por quilômetro, precificação de frete e capital
                preso em estoque.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-text max-lg:text-base">
                Risco a gente trata antes de virar prejuízo. Avaria, extravio
                e roubo não são azar, são custo que dá para prever e
                reduzir.
              </p>

              <Link
                to="/institucional"
                className="inline-flex items-center gap-2.5 rounded-full border border-navy-deep/20 px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-navy-deep no-underline hover:border-navy-deep/40"
              >
                Nossa história
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Time da Avante Global monitorando rotas de transporte em tempo real"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
