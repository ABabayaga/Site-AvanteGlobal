const STATS = [
  { value: '35', label: 'Anos em logística' },
  { value: '18', label: 'Anos em seguros' },
  { value: '100%', label: 'Abrangência nacional' },
]

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-navy-deep via-slate to-steel from-0% via-55% to-100%"
      id="inicio"
    >
      <div className="mx-auto max-w-360 px-10 pt-24 pb-30 max-lg:px-5 max-lg:pt-16 max-lg:pb-20">
        <div className="mb-8 flex items-center gap-3 text-[13px] font-semibold tracking-[2px] text-gold uppercase">
          <span className="h-px w-6 bg-gold" />
          <span>Seguros · Consultoria · Tecnologia</span>
        </div>

        <h1 className="mb-7 max-w-225 font-display text-[64px] leading-[1.15] font-medium tracking-[-0.5px] text-cream max-lg:text-4xl">
          Avante com a Global:{' '}
          <em className="text-gold-light italic">solução total</em> para
          a sua empresa.
        </h1>

        <p className="mb-10 max-w-140 text-lg leading-relaxed text-text-onDark max-lg:text-base">
          Especialistas em todos os ramos de seguros e em gestão de negócios de
          sucesso, com abrangência nacional e tecnologia para logística e
          transporte.
        </p>

        <div className="mb-22 flex flex-wrap items-center gap-4 max-lg:mb-14">
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 rounded bg-gold px-6 py-4 text-[15px] font-semibold whitespace-nowrap text-ink no-underline hover:bg-gold-light"
          >
            Fale com um especialista
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#institucional"
            className="inline-flex items-center gap-2.5 rounded border border-cream/35 px-6 py-4 text-[15px] font-semibold whitespace-nowrap text-cream no-underline hover:border-cream/70"
          >
            Conheça a Avante
          </a>
        </div>

        <dl className="m-0 flex flex-wrap gap-16 max-lg:gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <dt className="font-display text-4xl font-medium text-cream max-lg:text-3xl">
                {value}
              </dt>
              <dd className="mt-1 text-xs font-semibold tracking-[1.5px] text-text-onDark-muted uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        className="fixed right-6 bottom-6 z-10 inline-flex items-center gap-2 rounded-full bg-gold-light px-5 py-3 text-sm font-bold text-ink no-underline shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4.5 w-4.5">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.65 15.02L2 22l5.12-1.34A10 10 0 1 0 12 2Zm5.63 14.16c-.24.67-1.4 1.28-1.93 1.34-.5.06-1.05.29-3.54-.74-2.98-1.22-4.89-4.2-5.03-4.4-.15-.19-1.2-1.6-1.2-3.05 0-1.46.77-2.17 1.04-2.47.27-.29.6-.36.8-.36.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.08.92 2.23.08.15.13.33.02.53-.1.2-.16.32-.31.5-.15.17-.32.38-.46.51-.15.14-.31.29-.13.6.18.31.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.47 1.52.31.15.49.13.68-.05.19-.19.79-.9.99-1.21.2-.31.4-.26.66-.15.27.1 1.71.81 2.01.96.29.14.48.22.55.34.08.12.08.68-.16 1.35Z"
          />
        </svg>
        WhatsApp
      </a>
    </section>
  )
}

export default Hero
