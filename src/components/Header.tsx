import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Institucional', to: '/institucional' },
  { label: 'Seguros', to: '/seguros' },
  { label: 'Gestão de Risco', to: '/tecnologias' },
  { label: 'Consultorias', to: '/consultorias' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Você sabia?', to: '/novidades' },
]

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

  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 sm:top-4 lg:inset-x-10 lg:top-5">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 rounded-2xl border border-ice-border bg-ice/95 px-10 py-3 shadow-[0_10px_30px_rgba(20,27,46,0.18)] backdrop-blur-md max-lg:px-4 max-lg:py-2">
        <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img src="/logodark.png" alt="Avante Global" className="h-18 w-auto max-lg:h-11" />
        </Link>

        <nav className="max-lg:hidden">
          <ul className="m-0 flex flex-wrap items-center gap-9 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label} className="list-none">
                <NavLink
                  to={to}
                  end={to === '/'}
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

        <a
          href="#contato"
          className="shrink-0 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white no-underline hover:bg-navy-deep max-lg:hidden"
        >
          Fale conosco
        </a>

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
                  onClick={closeMenu}
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
          </ul>
        </nav>

        <a
          href="#contato"
          onClick={closeMenu}
          className="mt-4 block rounded-full bg-navy px-7 py-3.5 text-center text-[15px] font-semibold text-white no-underline hover:bg-navy-deep"
        >
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header
