function Comecar() {
  return (
    <section className="mx-auto max-w-360 px-10 py-16 max-lg:px-5 max-lg:py-12">
      <div className="relative flex items-center justify-between gap-10 overflow-hidden rounded-[20px] bg-linear-to-br from-navy-deep via-navy-mid via-45% to-navy-light px-18 py-16 max-lg:flex-col max-lg:items-start max-lg:px-7 max-lg:py-10">
        <div
          className="pointer-events-none absolute top-1/2 right-30 h-0 w-0 max-lg:right-10"
          aria-hidden="true"
        >
          <span className="absolute top-1/2 right-0 h-65 w-65 -translate-y-1/2 translate-x-1/2 rounded-full border border-cream/12" />
          <span className="absolute top-1/2 right-0 h-90 w-90 -translate-y-1/2 translate-x-1/2 rounded-full border border-cream/12" />
        </div>

        <div className="relative z-1 max-w-160">
          <h2 className="mb-4 font-display text-4xl leading-tight font-medium tracking-[-0.3px] text-cream max-lg:text-3xl">
            Identifique e elimine seus riscos.
            <br />
            Prepare sua empresa para o amanhã.
          </h2>
          <p className="text-base leading-normal text-text-onDark">
            Comece com uma conversa. O restante a gente mostra pessoalmente.
          </p>
        </div>

        <a
          href="#contato"
          className="relative z-1 inline-flex shrink-0 items-center gap-2.5 rounded-md bg-gold px-7 py-4.5 text-[15px] font-semibold whitespace-nowrap text-ink no-underline hover:bg-gold-light max-lg:w-full max-lg:justify-center"
        >
          Começar agora
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Comecar
