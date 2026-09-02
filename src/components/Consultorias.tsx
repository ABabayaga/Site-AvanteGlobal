import { useState } from 'react'

const QUESTIONS = [
  {
    number: '01',
    text: 'Você conhece de fato o seu negócio e onde ele está na cadeia?',
  },
  {
    number: '02',
    text: 'Onde você quer chegar, e em quanto tempo?',
  },
  {
    number: '03',
    text: 'Quais são os seus principais riscos e ameaças?',
  },
  {
    number: '04',
    text: 'Quais perdas hoje poderiam ser evitadas?',
  },
  {
    number: '05',
    text: 'Sua precificação está correta e atualizada?',
  },
  {
    number: '06',
    text: 'Qual é a margem ideal do seu negócio?',
  },
  {
    number: '07',
    text: 'Você tem a equipe e a tecnologia certas ao seu lado?',
  },
  {
    number: '08',
    text: 'Seu modelo de gestão é realmente o melhor?',
  },
  {
    number: '09',
    text: 'Existe um plano de continuidade para o seu negócio?',
  },
  {
    number: '10',
    text: 'Se nada mudar, como estará a sua empresa daqui a 5 anos?',
  },
]

const FRENTES = [
  { number: '01', title: 'Gestão Operacional' },
  { number: '02', title: 'Controladoria e Financeiro' },
  { number: '03', title: 'Organizacional e Pessoas' },
  { number: '04', title: 'Gestão de Risco e Seguros' },
  { number: '05', title: 'Comercial, Sistemas e Supply Chain' },
  { number: '06', title: 'Mentoria e Gestão Futura' },
]

function Consultorias() {
  const [openFrente, setOpenFrente] = useState<string | null>(null)

  return (
    <>
      <section className="bg-ice py-20 max-lg:py-14" id="consultorias">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="rounded-3xl bg-linear-to-br from-navy-deep to-navy-light px-14 py-16 max-lg:px-6 max-lg:py-10">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white/90">
              Consultoria · antes da solução, o diagnóstico
            </div>

            <h2 className="mb-7 max-w-180 text-[40px] leading-[1.15] font-extrabold tracking-[-0.5px] text-white max-lg:text-3xl">
              Você conhece os maiores desafios da sua empresa, hoje e no
              futuro?
            </h2>

            <p className="mb-10 max-w-160 text-lg leading-relaxed text-text-onDark max-lg:text-base">
              A consultoria da Avante começa exatamente aqui. Se você travar
              em alguma destas perguntas, já sabemos por onde a conversa deve
              começar.
            </p>

            <div className="mb-10 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
              {QUESTIONS.map(({ number, text }) => (
                <div
                  key={number}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="shrink-0 text-sm font-bold text-sky-accent">
                    {number}
                  </span>
                  <p className="m-0 text-[15px] leading-snug text-white">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 max-lg:flex-col max-lg:items-start">
              <p className="m-0 max-w-120 text-base leading-relaxed text-text-onDark">
                Essas são só as primeiras. Com a Avante, cada resposta vira
                um plano de ação.
              </p>
              <a
                href="#contato"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-navy-deep no-underline hover:bg-white/90"
              >
                Faça sua consultoria sem compromisso
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 max-lg:py-14">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="mb-8 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
            Consultorias
          </div>

          <h2 className="mb-7 max-w-180 text-[40px] leading-[1.15] font-extrabold tracking-[-0.5px] text-ink max-lg:text-3xl">
            A empresa inteira, de ponta a ponta.
            <span className="mt-3 block h-1 w-16 rounded-full bg-sky-accent" />
          </h2>

          <p className="mb-10 max-w-160 text-lg leading-relaxed text-text max-lg:text-base">
            Da operação ao financeiro, do RH à tecnologia. Clique em cada
            frente.
          </p>

          <div className="flex flex-col gap-4">
            {FRENTES.map(({ number, title }) => {
              const isOpen = openFrente === number
              return (
                <div
                  key={number}
                  className="rounded-2xl border border-ice-border bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFrente(isOpen ? null : number)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center gap-4 bg-transparent px-7 py-6 text-left"
                  >
                    <span className="shrink-0 text-sm font-bold text-blue">
                      {number}
                    </span>
                    <span className="flex-1 text-lg font-bold text-ink">
                      {title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-accent/15 text-lg font-semibold text-blue"
                    >
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-7 pb-6 text-base leading-relaxed text-text">
                      Conteúdo em breve.
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-ice pb-20 max-lg:pb-14">
        <div className="mx-auto max-w-360 px-10 max-lg:px-5">
          <div className="flex overflow-hidden rounded-3xl bg-navy max-lg:flex-col">
            <div className="flex w-[55%] flex-col justify-center gap-5 px-14 py-14 max-lg:w-full max-lg:px-6 max-lg:py-10">
              <div className="inline-flex w-fit items-center rounded-full bg-white/10 px-5 py-2.5 text-[13px] font-medium text-white/90">
                Consultorias especiais
              </div>

              <h2 className="max-w-120 text-[32px] leading-[1.2] font-extrabold tracking-[-0.5px] text-white max-lg:text-2xl">
                Tributária e RH: a bola do momento.
              </h2>

              <p className="max-w-120 text-base leading-relaxed text-text-onDark">
                Reforma tributária, IVA, recálculo do frete e aproveitamento
                de crédito; e gestão de pessoas, cargos e metas para a sua
                equipe.
              </p>

              <a
                href="#contato"
                className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-blue px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-white no-underline hover:bg-blue/90"
              >
                Diagnóstico sem compromisso
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="w-[45%] bg-linear-to-br from-navy-dusk to-navy-light max-lg:h-56 max-lg:w-full" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Consultorias
