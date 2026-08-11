import './Produtos.css'

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
    <section className="produtos" id="produtos">
      <div className="produtos-inner">
        <div className="produtos-eyebrow">
          <span className="produtos-eyebrow-line" />
          <span>(01) Produtos e Serviços</span>
        </div>

        <div className="produtos-header">
          <h2 className="produtos-title">
            Tudo o que a Avante entrega para a sua empresa.
          </h2>
          <p className="produtos-hint">Clique para conhecer cada frente em detalhe.</p>
        </div>

        <div className="produtos-list">
          {PRODUTOS.map(({ nome, tags, href }, index) => (
            <a className="produtos-item" href={href} key={nome}>
              <div className="produtos-item-inner">
                <span className="produtos-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="produtos-name">{nome}</h3>
                <span className="produtos-tags">{tags}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Produtos
