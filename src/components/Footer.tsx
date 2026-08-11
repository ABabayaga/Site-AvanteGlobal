import logo from '../assets/logo.svg'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Institucional', href: '#institucional' },
  { label: 'Seguros', href: '#seguros' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Consultorias', href: '#consultorias' },
  { label: 'Parceiros', href: '#parceiros' },
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
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <img src={logo} alt="Avante Global" />
          </a>
          <p className="footer-text">
            Seguros e consultoria empresarial. Solução total com abrangência
            nacional para logística, transporte e para a sua empresa.
          </p>
        </div>

        <nav className="footer-nav">
          <h3 className="footer-heading">Navegação</h3>
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h3 className="footer-heading">Contato</h3>
          <ul>
            {PHONE_CONTACTS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
            {EMAIL_CONTACTS.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Avante Global Seguros e Consultoria Empresarial.</p>
        <a href="https://avanteglobalseguros.com.br" className="footer-domain">
          avanteglobalseguros.com.br
        </a>
      </div>

      <a
        href="https://wa.me/5562994440500"
        className="footer-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
        </svg>
        WhatsApp
      </a>
    </footer>
  )
}

export default Footer
