import './NossoJeito.css'

function NossoJeito() {
  return (
    <section className="nossojeito" id="institucional">
      <div className="nossojeito-inner">
        <div className="nossojeito-content">
          <div className="nossojeito-eyebrow">
            <span className="nossojeito-eyebrow-line" />
            <span>Nosso jeito</span>
          </div>

          <h2 className="nossojeito-title">
            O olhar externo que faz a conta fechar.
          </h2>

          <p className="nossojeito-text">
            Crescer volume sem crescer margem só aumenta o tamanho do
            problema. A gente lê o seu resultado linha por linha: custo por
            rota, por cliente e por quilômetro, precificação de frete e
            capital preso em estoque.
          </p>

          <p className="nossojeito-text">
            Risco a gente trata antes de virar prejuízo. Avaria, extravio e
            roubo não são azar, são custo que dá para prever e reduzir.
          </p>

          <a href="#historia" className="nossojeito-btn">
            Nossa história
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="nossojeito-media">
          {/* TODO: substituir por src/assets/nosso-jeito.jpg */}
          <div className="nossojeito-image nossojeito-image-placeholder" />
          <span className="nossojeito-badge">Foco em resultado</span>
        </div>
      </div>
    </section>
  )
}

export default NossoJeito
