const PRODUTOS = [
  {
    nome: 'Seguros de Transporte e Carga',
    tags: 'RCTR-C · RC-DC · RC-V',
    href: '#transporte-carga',
  },
  {
    nome: 'Seguros Empresariais e de Pessoas',
    tags: 'PATRIMÔNIO · VIDA · SAÚDE',
    href: '#seguros-empresariais',
  },
  {
    nome: 'Consultoria Tributária e Reforma',
    tags: 'IVA · FRETE · CRÉDITOS',
    href: '#consultoria-tributaria',
  },
  {
    nome: 'Consultoria de Gestão e Resultado',
    tags: 'FINANCEIRO · OPERACIONAL · RH',
    href: '#consultoria-gestao',
  },
  {
    nome: 'Tecnologia e Gerenciamento de Risco',
    tags: 'RASTREAMENTO · ESCOLTA · TMS',
    href: '#tecnologia-risco',
  },
  {
    nome: 'Seja Nosso Parceiro',
    tags: 'INDIQUE E GANHE',
    href: '#parceiros',
  },
]

function Produtos() {
  return (
    <section className="bg-white" id="produtos">
      <div className="mx-auto max-w-360 px-10 pt-24 pb-30 max-lg:px-5 max-lg:pt-16 max-lg:pb-20">
        <div className="mb-6 flex items-center gap-3 text-[13px] font-semibold tracking-[2px] text-blue uppercase">
          <span className="h-px w-6 bg-gold" />
          <span>(01) Produtos e Serviços</span>
        </div>

        <div className="mb-14 flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-4">
          <h2 className="max-w-180 font-display text-5xl leading-[1.15] font-medium tracking-[-0.5px] text-navy max-lg:text-4xl">
            Tudo o que a Avante entrega para a sua empresa.
          </h2>
          <p className="mb-3 text-base whitespace-nowrap text-text">
            Clique para conhecer cada frente em detalhe.
          </p>
        </div>

        <div className="border-t border-cream-border">
          {PRODUTOS.map(({ nome, tags, href }, index) => (
            <a
              className="group block border-b border-cream-border no-underline"
              href={href}
              key={nome}
            >
              <div className="flex flex-wrap items-center gap-6 py-8 transition-[padding-left] duration-200 ease-in-out group-hover:pl-3 max-lg:gap-x-6 max-lg:gap-y-2 max-lg:py-6">
                <span className="w-7 shrink-0 text-sm font-semibold text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="flex-1 font-display text-3xl font-medium text-navy max-lg:basis-full max-lg:text-2xl">
                  {nome}
                </h3>
                <span className="shrink-0 text-xs font-semibold tracking-[1.5px] text-tag uppercase max-lg:pl-13">
                  {tags}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Produtos
