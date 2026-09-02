import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const NAV_LINKS = [
  { label: 'Institucional', to: '/institucional' },
  { label: 'Seguros', to: '/seguros' },
  { label: 'Tecnologias', to: '/tecnologias' },
  { label: 'Consultorias', to: '/consultorias' },
  { label: 'Parceiros', to: '/parceiros' },
]

const PHONE_CONTACTS = [
  { label: '(62) 99444-0500 · WhatsApp', href: 'https://wa.me/5562994440500' },
  { label: '(62) 99444-2177 · WhatsApp', href: 'https://wa.me/5562994442177' },
]

const EMAIL_CONTACTS = [
  'rosemar@avanteglobalseguros.com.br',
  'andrea@avanteglobalseguros.com.br',
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-navy">
      <div className="mx-auto grid max-w-360 grid-cols-[minmax(0,420px)_auto_auto] justify-between gap-10 px-10 pt-16 pb-12 max-lg:grid-cols-1 max-lg:px-5 max-lg:pt-12 max-lg:pb-8">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src={logo}
              alt="Avante Global"
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="mt-5 max-w-95 text-[15px] leading-relaxed text-text-onDark max-lg:max-w-none">
            Seguros e consultoria empresarial. Solução total com abrangência
            nacional para logística, transporte e para a sua empresa.
          </p>
        </div>

        <nav>
          <h3 className="mb-5 text-[13px] font-bold tracking-[1.5px] text-cream uppercase">
            Navegação
          </h3>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-[15px] whitespace-nowrap text-text-onNavy no-underline hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-5 text-[13px] font-bold tracking-[1.5px] text-cream uppercase">
            Contato
          </h3>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {PHONE_CONTACTS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] whitespace-nowrap text-text-onNavy no-underline hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
            {EMAIL_CONTACTS.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="text-[15px] whitespace-nowrap text-text-onNavy no-underline hover:text-gold"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-360 items-center justify-between gap-4 border-t border-cream/12 px-10 py-6 text-sm max-lg:flex-col max-lg:items-start max-lg:px-5">
        <p className="text-cream/50">
          © {year} Avante Global Seguros e Consultoria Empresarial.
        </p>
        <a
          href="https://avanteglobalseguros.com.br"
          className="text-cream/50 no-underline hover:text-gold"
        >
          avanteglobalseguros.com.br
        </a>
      </div>

      <a
        href="https://wa.me/5562994440500"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-20 inline-flex items-center gap-2.5 rounded-full bg-gold px-5.5 py-3.5 text-[15px] font-bold text-ink no-underline shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)] hover:bg-gold-light"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
        WhatsApp
      </a>
    </footer>
  )
}

export default Footer
