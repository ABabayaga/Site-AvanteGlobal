import useScrollReveal from '../hooks/useScrollReveal'

const PARCEIRO_TAGS = [
  'Gerenciadoras de risco',
  'TMS e WMS',
  'Seguradoras',
  'Escolta',
  'Especialistas tributários',
]

function Parceiros() {
  const scope = useScrollReveal<HTMLElement>()

  return (
    <section ref={scope} className="bg-ice py-24 font-hero max-lg:py-14" id="parceiros">
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div data-reveal className="mx-auto max-w-160 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
            Parceiros
          </div>

          <h2 className="mb-4 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
            Cresça junto com a Avante.
          </h2>

          <span className="mx-auto mb-6 block h-1 w-16 rounded-full bg-sky-accent" />

          <p className="m-0 text-lg leading-relaxed text-text max-lg:text-base">
            Uma rede nacional que fortalece cada entrega e recompensa quem
            indica.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <div data-reveal className="rounded-3xl border border-ice-border bg-white p-10 max-lg:p-6">
            <div className="mb-3 text-[13px] font-bold tracking-wide text-blue uppercase">
              Nossos parceiros
            </div>

            <h3 className="mb-4 text-[26px] leading-[1.2] font-extrabold tracking-[-0.5px] text-ink max-lg:text-2xl">
              Uma rede que sustenta a entrega.
            </h3>

            <p className="mb-7 text-base leading-relaxed text-text">
              Gerenciadoras de risco, TMS, seguradoras e especialistas
              setoriais em todo o país.
            </p>

            <div className="flex flex-wrap gap-3">
              {PARCEIRO_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ice-border bg-white px-5 py-3 text-[15px] font-semibold whitespace-nowrap text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-3xl bg-linear-to-br from-navy-deep to-navy-light p-10 max-lg:p-6"
          >
            <div className="mb-3 text-[13px] font-bold tracking-wide text-sky-accent uppercase">
              Seja nosso parceiro
            </div>

            <h3 className="mb-4 text-[26px] leading-[1.2] font-extrabold tracking-[-0.5px] text-white max-lg:text-2xl">
              Indique e seja recompensado.
            </h3>

            <p className="mb-8 text-base leading-relaxed text-text-onDark">
              Conhece uma empresa que precisa de seguro ou consultoria? Um
              jeito simples de gerar renda indicando quem confia em você.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 rounded-full bg-blue px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-white no-underline hover:bg-blue/90"
            >
              Quero indicar
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Parceiros
