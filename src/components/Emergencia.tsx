import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useScrollReveal from '../hooks/useScrollReveal'

const EMERGENCY_CONTACTS = [
  {
    number: '191',
    title: 'PRF',
    description: 'Polícia Rodoviária Federal. Acidentes, roubo de carga e ocorrências em rodovias federais.',
    badge: 'Emergência',
  },
  {
    number: '192',
    title: 'SAMU',
    description: 'Serviço de Atendimento Móvel de Urgência. Atendimento médico a vítimas.',
    badge: 'Emergência',
  },
  {
    number: '193',
    title: 'Corpo de Bombeiros',
    description: 'Incêndio, resgate de vítimas presas às ferragens e vazamento de produtos perigosos.',
    badge: 'Emergência',
  },
  {
    number: '166',
    title: 'ANTT',
    description: 'Agência Nacional de Transportes Terrestres. Ouvidoria e atendimento, ligação gratuita.',
    badge: 'Ouvidoria',
    link: { label: 'Portal da ANTT', href: 'https://www.gov.br/antt/pt-br' },
  },
]

function Emergencia() {
  const scope = useScrollReveal<HTMLElement>()
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== '#emergencia') return
    // Smooth scrolling here gets cut short by ScrollTrigger's mount-time refresh.
    const frame = requestAnimationFrame(() => {
      document.getElementById('emergencia')?.scrollIntoView()
    })
    return () => cancelAnimationFrame(frame)
  }, [hash])

  return (
    <section
      ref={scope}
      id="emergencia"
      className="scroll-mt-28 bg-ice pb-24 font-hero max-lg:pb-14"
    >
      <div data-reveal className="mx-auto max-w-360 px-20 max-lg:px-5">
        <h2 className="mb-1 text-lg font-bold text-navy-deep">
          Em caso de emergência na estrada
        </h2>
        <p className="m-0 mb-5 text-base text-text">
          Primeiro, acione o socorro. Depois, fale com a Avante Global para
          iniciar a gestão do sinistro.
        </p>

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {EMERGENCY_CONTACTS.map(({ number, title, description, badge, link }) => (
            <div
              key={number}
              className="flex flex-col rounded-2xl border border-ice-border bg-white p-5"
            >
              <span
                className={`mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${
                  badge === 'Emergência'
                    ? 'bg-red-50 text-red-700'
                    : 'bg-navy-light/8 text-steel'
                }`}
              >
                {badge}
              </span>
              <a
                href={`tel:${number}`}
                className="mb-1 text-[40px] leading-none font-extrabold text-navy-deep no-underline hover:text-blue"
              >
                {number}
              </a>
              <h3 className="m-0 mb-2 text-base font-bold text-navy-deep">
                {title}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-text">
                {description}
              </p>
              {link && (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 border-t border-ice-border pt-3 text-xs font-semibold text-blue no-underline hover:underline"
                >
                  {link.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Emergencia
