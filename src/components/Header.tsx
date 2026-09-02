import logo from '../assets/logo.svg'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Institucional', href: '#institucional' },
  { label: 'Seguros', href: '#seguros' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Consultorias', href: '#consultorias' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'Novidades', href: '#novidades' },
]

function Header() {
  return (
    <header className="border-b border-cream-border bg-cream">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-8 px-10 py-5 max-lg:flex-wrap max-lg:px-5 max-lg:py-4">
        <a href="#inicio" className="flex shrink-0 items-center">
          <img src={logo} alt="Avante Global" className="h-12 w-auto" />
        </a>

        <nav>
          <ul className="m-0 flex flex-wrap items-center gap-8 p-0 max-lg:gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} className="list-none">
                <a
                  href={href}
                  className={`border-b-2 pb-2 text-base font-medium whitespace-nowrap text-ink no-underline hover:opacity-70 ${
                    label === 'Inicio' ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contato"
          className="shrink-0 rounded-md bg-navy px-6 py-3 text-[15px] font-semibold text-white no-underline hover:bg-navy-deep"
        >
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header
