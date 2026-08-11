import './Comecar.css'

function Comecar() {
  return (
    <section className="comecar">
      <div className="comecar-card">
        <div className="comecar-circles" aria-hidden="true">
          <span className="comecar-circle comecar-circle-1" />
          <span className="comecar-circle comecar-circle-2" />
        </div>

        <div className="comecar-content">
          <h2 className="comecar-title">
            Identifique e elimine seus riscos.
            <br />
            Prepare sua empresa para o amanhã.
          </h2>
          <p className="comecar-text">
            Comece com uma conversa. O restante a gente mostra pessoalmente.
          </p>
        </div>

        <a href="#contato" className="comecar-btn">
          Começar agora
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Comecar
