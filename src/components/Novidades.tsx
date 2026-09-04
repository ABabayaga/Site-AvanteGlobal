type NewsItem = {
  tag: string
  title: string
  text: string
}

const NEWS_ITEMS: NewsItem[] = [
  {
    tag: 'Tributário',
    title: 'Reforma tributária e o preço do frete',
    text: 'A transição para o IVA muda a conta do transporte. Recalcular a precificação agora evita rodar no prejuízo.',
  },
  {
    tag: 'Legislação',
    title: 'Lei 14.599/2023',
    text: 'A norma de 18/06/2023 tornou obrigatórios os seguros RCTR-C, RC-DC e RC-V para o transportador.',
  },
  {
    tag: 'Gestão de risco',
    title: 'Roubo e avaria não são azar',
    text: 'São custo que dá para prever e reduzir. Como o gerenciamento de risco vira receita com ad valorem e GRIS.',
  },
]

function Novidades() {
  return (
    <section id="novidades" className="bg-ice py-24 font-hero max-lg:py-14">
      <div className="mx-auto max-w-360 px-10 max-lg:px-5">
        <div className="mb-6 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
          Você sabia?
        </div>

        <h2 className="mb-6 text-[44px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-3xl">
          <span className="relative inline-block">
            O que muda
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-sky-accent"
            />
          </span>{' '}
          no seu setor.
        </h2>

        <p className="mb-14 max-w-160 text-lg text-text max-lg:mb-10 max-lg:text-base">
          Mudanças legais e de mercado que afetam quem transporta, contrata
          seguro e gere frota.
        </p>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(20,27,46,0.08)]"
            >
              <div className="h-1.5 w-full bg-linear-to-r from-navy-deep to-sky-accent" />

              <div className="p-8 max-lg:p-6">
                <span className="mb-3 block text-xs font-bold tracking-wide text-blue uppercase">
                  {item.tag}
                </span>
                <h3 className="m-0 mb-3 text-xl leading-snug font-bold text-navy-deep">
                  {item.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-text">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Novidades
