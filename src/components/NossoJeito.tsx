function NossoJeito() {
  return (
    <section className="bg-cream" id="institucional">
      <div className="mx-auto grid max-w-360 grid-cols-[minmax(0,480px)_1fr] items-center gap-20 px-10 pt-24 pb-30 max-lg:grid-cols-1 max-lg:gap-12 max-lg:px-5 max-lg:pt-16 max-lg:pb-20">
        <div className="max-lg:order-1">
          <div className="mb-6 flex items-center gap-3 text-[13px] font-semibold tracking-[2px] text-blue uppercase">
            <span className="h-px w-6 bg-gold" />
            <span>Nosso jeito</span>
          </div>

          <h2 className="mb-6 font-display text-5xl leading-[1.15] font-medium tracking-[-0.5px] text-navy max-lg:text-3xl">
            O olhar externo que faz a conta fechar.
          </h2>

          <p className="mb-5 max-w-120 text-base leading-relaxed text-text max-lg:max-w-none">
            Crescer volume sem crescer margem só aumenta o tamanho do
            problema. A gente lê o seu resultado linha por linha: custo por
            rota, por cliente e por quilômetro, precificação de frete e
            capital preso em estoque.
          </p>

          <p className="mb-5 max-w-120 text-base leading-relaxed text-text max-lg:max-w-none">
            Risco a gente trata antes de virar prejuízo. Avaria, extravio e
            roubo não são azar, são custo que dá para prever e reduzir.
          </p>

          <a
            href="#historia"
            className="mt-3 inline-flex items-center gap-2.5 rounded border border-taupe px-6 py-4 text-[15px] font-semibold whitespace-nowrap text-navy no-underline hover:border-gold"
          >
            Nossa história
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative max-lg:order-0">
          {/* TODO: substituir por src/assets/nosso-jeito.jpg */}
          <div className="aspect-4/3 w-full rounded-lg bg-linear-to-br from-taupe to-taupe-dark shadow-[0_24px_48px_-12px_rgba(22,33,62,0.25)]" />
          <span className="absolute bottom-6 left-0 rounded-r bg-gold px-6 py-3.5 text-[13px] font-bold tracking-[1px] text-navy uppercase">
            Foco em resultado
          </span>
        </div>
      </div>
    </section>
  )
}

export default NossoJeito
