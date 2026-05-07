const benefits = [
  {
    icon: 'fa-solid fa-bolt',
    number: '01',
    title: 'Entrega Expressa',
    description: 'Seu pedido chega em até 30 minutos. Monitoramento em tempo real pelo app.',
  },
  {
    icon: 'fa-solid fa-utensils',
    number: '02',
    title: 'Curadoria Gourmet',
    description: 'Apenas restaurantes selecionados, com ingredientes de alta qualidade.',
  },
  {
    icon: 'fa-solid fa-credit-card',
    number: '03',
    title: 'Pagamento Fácil',
    description: 'Pix, cartão, carteira digital. Pague do jeito que for mais conveniente.',
  },
  {
    icon: 'fa-solid fa-leaf',
    number: '04',
    title: 'Embalagem Sustentável',
    description: 'Parceiros comprometidos com embalagens ecológicas e práticas sustentáveis.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-28 bg-parchment-100">
      <div className="max-w-6xl mx-auto px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <span className="rule-gold"></span>
            <p className="text-gold-500 text-xs tracking-widest3 uppercase font-body mb-4">
              Por que nos escolher
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-forest-600 font-light leading-none">
              Uma experiência
              <br />
              <em className="text-gold-400">diferente.</em>
            </h2>
          </div>
          <p className="font-body text-sm text-forest-400 font-light leading-loose max-w-xs">
            Cada detalhe do GourmetOn foi pensado para oferecer o que há de melhor entre sabor e conveniência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-y md:divide-y-0 divide-forest-200/30">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group p-8 hover:bg-forest-500 transition-all duration-500 cursor-default border-forest-200/20"
            >
              <p className="font-display text-5xl font-light text-forest-200/40 group-hover:text-gold-400/30 mb-6 transition-colors duration-500 leading-none">
                {item.number}
              </p>
              <div className="w-8 h-8 border border-gold-400/40 group-hover:border-gold-300 flex items-center justify-center mb-5 transition-colors duration-500">
                <i className={`${item.icon} text-gold-500 group-hover:text-gold-300 text-xs transition-colors duration-500`}></i>
              </div>
              <h3 className="font-display text-xl font-medium text-forest-600 group-hover:text-parchment-100 mb-3 transition-colors duration-500">
                {item.title}
              </h3>
              <p className="font-body text-xs text-forest-400 group-hover:text-parchment-300 leading-loose font-light transition-colors duration-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
