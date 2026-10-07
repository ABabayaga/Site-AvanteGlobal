import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CONTACT_HASH } from './ContactModal'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Institucional', to: '/institucional' },
  { label: 'Seguros', to: '/seguros' },
  { label: 'Gestão de Risco', to: '/tecnologias' },
  { label: 'Consultorias', to: '/consultorias' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Você sabia?', to: '/novidades' },
]

const EMERGENCY_LINK = { label: 'Emergência', to: '/seguros#emergencia' }

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const scrollToTop = () => window.scrollTo({ top: 0 })

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 sm:top-4 lg:inset-x-10 lg:top-5">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 rounded-2xl border border-ice-border bg-ice/95 px-10 py-3 shadow-[0_10px_30px_rgba(20,27,46,0.18)] backdrop-blur-md max-lg:px-4 max-lg:py-2">
        <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img src="/logodark.png" alt="Avante Global Seguros" className="h-20 w-auto max-lg:h-11" />
        </Link>

        <nav className="max-lg:hidden">
          <ul className="m-0 flex flex-wrap items-center gap-6 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label} className="list-none">
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={scrollToTop}
                  className={({ isActive }) =>
                    `text-base font-semibold whitespace-nowrap no-underline hover:opacity-70 ${
                      isActive ? 'text-blue' : 'text-ink'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3 max-lg:hidden">
          <Link
            to={EMERGENCY_LINK.to}
            aria-label={EMERGENCY_LINK.label}
            title={EMERGENCY_LINK.label}
            className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-3.5 text-[15px] font-semibold whitespace-nowrap text-red-700 no-underline hover:bg-red-100"
          >
            <PhoneIcon />
            <span className="max-[1400px]:hidden">{EMERGENCY_LINK.label}</span>
          </Link>
          <Link
            to={{ hash: CONTACT_HASH }}
            className="rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold whitespace-nowrap text-white no-underline hover:bg-navy-light"
          >
            Fale conosco
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ice-border bg-white text-ink max-lg:flex"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-ink transition-transform duration-200 ${
                isOpen ? 'translate-y-1.75 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-ink transition-opacity duration-200 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-ink transition-transform duration-200 ${
                isOpen ? '-translate-y-1.75 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full mt-3 origin-top rounded-2xl border border-ice-border bg-ice/95 p-6 shadow-[0_10px_30px_rgba(20,27,46,0.18)] backdrop-blur-md transition-all duration-200 lg:hidden ${
          isOpen ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-95 opacity-0'
        }`}
      >
        <nav>
          <ul className="m-0 flex flex-col gap-1 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label} className="list-none">
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => {
                    closeMenu()
                    scrollToTop()
                  }}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-3 text-base font-semibold no-underline ${
                      isActive ? 'text-blue' : 'text-ink'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="list-none">
              <Link
                to={EMERGENCY_LINK.to}
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-xl px-3 py-3 text-base font-semibold text-red-700 no-underline"
              >
                <PhoneIcon />
                {EMERGENCY_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to={{ hash: CONTACT_HASH }}
          onClick={closeMenu}
          className="mt-4 block rounded-full bg-navy px-7 py-3.5 text-center text-[15px] font-semibold text-white no-underline hover:bg-navy-light"
        >
          Fale conosco
        </Link>
      </div>
    </header>
  )
}

export default Header
