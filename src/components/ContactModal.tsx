import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Any link to `#contato` (e.g. <Link to={{ hash: 'contato' }}>) opens this modal on the current page.
export const CONTACT_HASH = '#contato'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJ4p2w4mUsujeVFjs4ix8lIeSSltzgciheCCN836iKHUQ_fw/formResponse'

const TEXT_FIELDS = [
  { name: 'entry.174703212', label: 'Razão social', type: 'text', autoComplete: 'organization', required: true },
  { name: 'entry.2013556751', label: 'Ramo de atividade / Transportador / Embarcador', type: 'text', autoComplete: 'off', required: false },
  { name: 'entry.1445754401', label: 'CNPJ ou CPF', type: 'text', autoComplete: 'off', required: false },
  { name: 'entry.455586608', label: 'Cargo / Função na empresa', type: 'text', autoComplete: 'organization-title', required: false },
  { name: 'entry.1034569125', label: 'E-mail', type: 'email', autoComplete: 'email', required: true },
  { name: 'entry.327398291', label: 'Telefone / WhatsApp', type: 'tel', autoComplete: 'tel', required: true },
]

// `value` must match the Google Form option text exactly (the form has no accents).
const MOTIVOS = [
  { value: 'Seguros Obrigatorios de Transportes', label: 'Seguros obrigatórios de transportes' },
  { value: 'Cotacao de Seguro Auto / Frotas', label: 'Cotação de seguro auto / frotas' },
  { value: 'Seguro de Vida / Previdencia', label: 'Seguro de vida / previdência' },
  { value: 'Plano de Saude / Odontologico', label: 'Plano de saúde / odontológico' },
  { value: 'Seguro Empresarial', label: 'Seguro empresarial' },
  { value: 'Seguro Residencial / Condominio', label: 'Seguro residencial / condomínio' },
  { value: 'Saber mais sobre Consultoria Empresarial', label: 'Saber mais sobre consultoria empresarial' },
  { value: 'Consultoria Tributaria', label: 'Consultoria tributária' },
  { value: 'Gestao de Risco', label: 'Gestão de risco' },
  { value: 'Nao recebi minha fatura', label: 'Não recebi minha fatura' },
  { value: 'Duvidas ou Suporte', label: 'Dúvidas ou suporte' },
  { value: 'Falar com a diretoria', label: 'Falar com a diretoria' },
]

const ORIGENS = [
  { value: 'Pesquisa no Google', label: 'Pesquisa no Google' },
  { value: 'Instagram / Facebook', label: 'Instagram / Facebook' },
  { value: 'Indicacao de amigo/cliente', label: 'Indicação de amigo / cliente' },
  { value: 'Outro', label: 'Outro' },
]

const inputClass =
  'w-full rounded-xl border border-ice-border bg-white px-4 py-3.5 text-[15px] text-ink outline-none focus:border-blue focus:ring-2 focus:ring-blue/20'
const labelClass = 'mb-2 block text-sm font-semibold text-navy-deep'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function ContactModal() {
  const location = useLocation()
  const navigate = useNavigate()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const isOpen = location.hash === CONTACT_HASH

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !isOpen) return

    dialog.showModal()
    document.documentElement.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  function close() {
    // Opened by an in-app link: go back so the browser's back button doesn't reopen the modal.
    // Opened from a direct URL: just drop the hash.
    if (location.key !== 'default') {
      navigate(-1)
    } else {
      navigate({ pathname: location.pathname, search: location.search }, { replace: true })
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque;
      // a network failure is the only error we can detect.
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>),
      })
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contato-titulo"
      onClose={() => setStatus('idle')}
      onCancel={(event) => {
        event.preventDefault()
        close()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-200 overflow-y-auto rounded-3xl border-0 bg-white p-0 font-hero backdrop:bg-navy-deep/60 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-10 max-lg:p-6">
        <button
          type="button"
          onClick={close}
          aria-label="Fechar"
          className="absolute top-5 right-5 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-ice text-xl text-navy-deep hover:bg-ice-border max-lg:top-4 max-lg:right-4"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="mb-5 inline-flex items-center rounded-full bg-sky-accent/15 px-5 py-2.5 text-[13px] font-semibold text-blue">
          Fale conosco
        </div>

        {status === 'sent' ? (
          <div role="status">
            <h2
              id="contato-titulo"
              className="mb-3 text-[32px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-2xl"
            >
              Mensagem enviada!
            </h2>
            <p className="mb-8 text-text">
              Obrigado pelo contato. Em breve um especialista da Avante Global falará com você.
            </p>
            <button
              type="button"
              onClick={close}
              className="inline-flex cursor-pointer items-center rounded-full border-0 bg-navy px-7 py-4 text-[15px] font-semibold text-white hover:bg-navy-light"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            <h2
              id="contato-titulo"
              className="mb-4 pr-12 text-[32px] leading-[1.15] font-extrabold tracking-[-0.5px] text-navy-deep max-lg:text-2xl"
            >
              Vamos conversar sobre o que você precisa?
            </h2>

            <div className="mb-8 border-t-4 border-sky-accent pt-4">
              <p className="m-0 text-text max-lg:text-[15px]">
                Preencha o formulário e nossa equipe retorna o contato para entender sua necessidade
                e direcionar você para a solução mais adequada.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid grid-cols-2 gap-6 max-lg:grid-cols-1">
                {TEXT_FIELDS.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className={labelClass}>
                      {field.label}
                      {field.required && <span className="text-blue"> *</span>}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required={field.required}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="entry.1293698311" className={labelClass}>
                  Qual é o principal motivo do seu contato hoje?<span className="text-blue"> *</span>
                </label>
                <select
                  id="entry.1293698311"
                  name="entry.1293698311"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  {MOTIVOS.map((motivo) => (
                    <option key={motivo.value} value={motivo.value}>
                      {motivo.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="entry.800520086" className={labelClass}>
                  Conte-nos brevemente o que você precisa ou como podemos te ajudar
                </label>
                <textarea
                  id="entry.800520086"
                  name="entry.800520086"
                  rows={4}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <fieldset className="mb-8 border-0 p-0">
                <legend className={labelClass}>Como você conheceu a Avante Global?</legend>
                <div className="flex flex-wrap gap-3">
                  {ORIGENS.map((origem) => (
                    <label
                      key={origem.value}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-ice-border px-4 py-2.5 text-sm text-ink has-checked:border-blue has-checked:bg-blue/5"
                    >
                      <input
                        type="radio"
                        name="entry.722869043"
                        value={origem.value}
                        className="accent-blue"
                      />
                      {origem.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {status === 'error' && (
                <p role="alert" className="mb-6 text-sm font-semibold text-red-glow">
                  Não foi possível enviar agora. Verifique sua conexão e tente novamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-0 bg-blue px-7 py-4 text-[15px] font-semibold whitespace-nowrap text-white hover:bg-blue/90 disabled:cursor-wait disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  )
}

export default ContactModal
