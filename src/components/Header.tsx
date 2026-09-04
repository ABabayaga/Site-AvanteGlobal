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
  return (
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-6 sm:top-4 lg:inset-x-10 lg:top-5">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 rounded-2xl border border-ice-border bg-ice/95 px-10 py-3 shadow-[0_10px_30px_rgba(20,27,46,0.18)] backdrop-blur-md max-lg:flex-wrap max-lg:px-5 max-lg:py-2">
        <Link to="/" className="flex shrink-0 items-center">
          <img src="/logodark.png" alt="Avante Global" className="h-18 w-auto" />
        </Link>

        <nav>
          <ul className="m-0 flex flex-wrap items-center gap-9 p-0 max-lg:gap-4">
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
          className="shrink-0 rounded-full bg-navy px-7 py-3.5 text-[15px] font-semibold text-white no-underline hover:bg-navy-deep"
        >
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header
