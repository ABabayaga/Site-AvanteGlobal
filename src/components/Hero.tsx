import { Link } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const STATS = [
  { value: '35+', label: 'Anos em logística' },
  { value: '18+', label: 'Anos em seguros' },
  { value: '100%', label: 'Abrangência nacional' },
]

function Hero() {
  const scope = useScrollReveal<HTMLElement>()

  return (
    <section
      ref={scope}
      className="relative -mt-28 overflow-hidden bg-navy-deep pt-28 font-hero max-lg:-mt-24 max-lg:pt-24"
      id="inicio"
    >
      <img
        src="/truck3.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-60"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/95 via-40% to-navy-deep/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-navy-deep via-transparent via-30% to-navy-deep/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-360 px-10 pt-14 pb-12 max-lg:px-5 max-lg:pt-10 max-lg:pb-10">
        <div
          data-reveal
          className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white/90"
        >
          Seguros · Consultoria · Tecnologia
        </div>

        <h1
          data-reveal
          className="mb-7 max-w-190 text-[56px] leading-[1.12] font-extrabold tracking-[-0.5px] text-white max-lg:text-4xl"
        >
          Avante Global:{' '}
          <span className="text-sky-accent">solução total</span> para a sua
          empresa, a nível nacional.
        </h1>

        <p
          data-reveal
          className="mb-10 max-w-135 text-lg leading-relaxed text-text-onDark max-lg:text-base"
        >
          Especialistas em todos os ramos de seguros e em gestão de negócios de
          sucesso, com abrangência nacional e tecnologia para logística e
          transporte.
        </p>

        <div data-reveal className="mb-10 flex flex-wrap items-center gap-4 max-lg:mb-8">
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-navy-deep no-underline hover:bg-white/90"
          >
            Fale com um especialista
            <span aria-hidden="true">→</span>
          </a>
          <Link
            to="/institucional"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-white no-underline hover:border-white/60"
          >
            Conheça a Avante
          </Link>
        </div>

        <dl data-reveal-immediate className="m-0 mb-7 flex flex-wrap gap-14 max-lg:gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <dt className="text-[38px] leading-none font-extrabold text-white max-lg:text-3xl">
                {value}
              </dt>
              <dd className="mt-2 text-[11px] font-semibold tracking-[1.5px] text-text-onDark-muted uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>

        <div
          data-reveal-immediate
          className="flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-text-onDark-muted"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-white/80">
              <path
                fill="currentColor"
                d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.2v4.6c0 4-2.6 7.6-6 8.9-3.4-1.3-6-4.9-6-8.9V6.4l6-2.2Z"
              />
            </svg>
          </span>
          <p className="m-0">
            <span className="font-semibold text-white">
              Seguro é uma questão de confiança.
            </span>{' '}
            Nossa assinatura há mais de 18 anos.
          </p>
        </div>
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
