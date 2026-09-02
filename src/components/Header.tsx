import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Institucional', to: '/institucional' },
  { label: 'Seguros', to: '/seguros' },
  { label: 'Tecnologias', to: '/tecnologias' },
  { label: 'Consultorias', to: '/consultorias' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Novidades', to: '/novidades' },
]

function Header() {
  return (
    <header className="border-b border-ice-border bg-ice">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 px-10 py-5 max-lg:flex-wrap max-lg:px-5 max-lg:py-4">
        <Link to="/" className="flex shrink-0 items-center">
          <img src="/avantedark.png" alt="Avante Global" className="h-24 w-auto" />
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
