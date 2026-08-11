import './Hero.css'

const STATS = [
  { value: '35', label: 'Anos em logística' },
  { value: '18', label: 'Anos em seguros' },
  { value: '100%', label: 'Abrangência nacional' },
]

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>Seguros · Consultoria · Tecnologia</span>
        </div>

        <h1 className="hero-title">
          Avante com a Global: <em>solução total</em> para a sua empresa.
        </h1>

        <p className="hero-description">
          Especialistas em todos os ramos de seguros e em gestão de negócios de
          sucesso, com abrangência nacional e tecnologia para logística e
          transporte.
        </p>

        <div className="hero-actions">
          <a href="#contato" className="hero-btn hero-btn-primary">
            Fale com um especialista
            <span aria-hidden="true">→</span>
          </a>
          <a href="#institucional" className="hero-btn hero-btn-secondary">
            Conheça a Avante
          </a>
        </div>

        <dl className="hero-stats">
          {STATS.map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        className="hero-whatsapp"
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
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
