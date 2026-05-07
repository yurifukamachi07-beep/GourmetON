import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-28 bg-parchment-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>
            <span className="rule-gold"></span>
            <p className="text-gold-500 text-xs tracking-widest3 uppercase font-body mb-4">
              Fale conosco
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-forest-600 font-light leading-tight mb-8">
              Vamos
              <br />
              <em className="text-gold-400">conversar?</em>
            </h2>
            <p className="font-body text-sm text-forest-400 font-light leading-loose max-w-xs mb-12">
              Deixe seu e-mail e seja o primeiro a saber das novidades, promoções e lançamentos exclusivos do GourmetOn.
            </p>

            <div className="space-y-5 border-t border-forest-200/30 pt-10">
              {[
                { icon: 'fa-solid fa-envelope', label: 'contato@gourmeton.com.br' },
                { icon: 'fa-brands fa-instagram', label: '@gourmeton' },
                { icon: 'fa-solid fa-location-dot', label: 'São Paulo, SP' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-8 h-8 border border-gold-400/40 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-gold-400 text-xs`}></i>
                  </div>
                  <span className="font-body text-sm text-forest-500 font-light">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-forest-400/30 bg-forest-500 p-16 text-center">
                <i className="fa-solid fa-check text-gold-400 text-3xl mb-6 block"></i>
                <h3 className="font-display text-3xl text-parchment-100 font-light mb-3">Mensagem enviada.</h3>
                <p className="font-body text-sm text-parchment-300 font-light">Em breve entraremos em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs text-forest-400 mb-2 tracking-widest uppercase" htmlFor="name">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full px-0 py-3 border-b border-forest-300/40 bg-transparent font-body text-sm text-forest-600 placeholder-forest-300 focus:outline-none focus:border-gold-400 transition-colors duration-200"
                    style={{ borderRadius: 0 }}
                  />
                </div>

                <div>
                  <label className="block font-body text-xs text-forest-400 mb-2 tracking-widest uppercase" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full px-0 py-3 border-b border-forest-300/40 bg-transparent font-body text-sm text-forest-600 placeholder-forest-300 focus:outline-none focus:border-gold-400 transition-colors duration-200"
                    style={{ borderRadius: 0 }}
                  />
                </div>

                <div>
                  <label className="block font-body text-xs text-forest-400 mb-2 tracking-widest uppercase" htmlFor="message">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Dúvidas, sugestões ou feedback..."
                    className="w-full px-0 py-3 border-b border-forest-300/40 bg-transparent font-body text-sm text-forest-600 placeholder-forest-300 focus:outline-none focus:border-gold-400 transition-colors duration-200 resize-none"
                    style={{ borderRadius: 0 }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-500 hover:bg-gold-400 text-parchment-100 hover:text-forest-700 font-body font-medium py-4 text-xs tracking-widest uppercase transition-all duration-300 mt-4"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
