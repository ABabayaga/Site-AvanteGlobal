import { Link } from 'react-router-dom'

type SectionPlaceholderProps = {
  id: string
  eyebrow: string
  title: string
  text: string
}

function SectionPlaceholder({ id, eyebrow, title, text }: SectionPlaceholderProps) {
  return (
    <section className="bg-ice py-24 font-hero max-lg:py-14" id={id}>
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
          {eyebrow}
        </div>

        <h2 className="mb-6 max-w-160 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
          {title}
        </h2>

        <div className="mb-14 max-w-160 border-t-4 border-sky-accent pt-4 max-lg:mb-10">
          <p className="m-0 text-lg text-text max-lg:text-base">{text}</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2.5 rounded-full border border-navy-deep/20 px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-navy-deep no-underline hover:border-navy-deep/40"
        >
          <span aria-hidden="true">←</span>
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}

export default SectionPlaceholder
