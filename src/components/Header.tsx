import logo from '../assets/logo.svg'
import './Header.css'

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
    <header className="header">
      <div className="header-inner">
        <a href="#inicio" className="header-logo">
          <img src={logo} alt="Avante Global" />
        </a>

        <nav className="header-nav">
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={label === 'Inicio' ? 'active' : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contato" className="header-cta">
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header
