const features = [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Busca Inteligente',
    description: 'Encontre pratos por ingrediente, culinária ou restaurante.',
  },
  {
    icon: 'fa-solid fa-sliders',
    title: 'Filtros Avançados',
    description: 'Vegetariano, sem glúten, low carb — do jeito que você precisa.',
  },
  {
    icon: 'fa-solid fa-clock-rotate-left',
    title: 'Repita o Pedido',
    description: 'Favoritos salvos para repetir com um toque.',
  },
  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'Rastreio em Tempo Real',
    description: 'Acompanhe cada etapa direto pelo mapa.',
  },
  {
    icon: 'fa-solid fa-bell',
    title: 'Notificações',
    description: 'Alertas para promoções dos seus restaurantes favoritos.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Avalie e Descubra',
    description: 'Descubra novidades curadas com base no seu gosto.',
  },
]

export default function Features() {
  return (
    <section className="py-28 bg-parchment-100">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div className="lg:sticky lg:top-28">
            <span className="rule-gold"></span>
            <p className="text-gold-500 text-xs tracking-widest3 uppercase font-body mb-4">
              Funcionalidades
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-forest-600 font-light leading-tight mb-8">
              Tudo que você
              <br />
              <em className="text-gold-400">precisa,</em>
              <br />
              num só app.
            </h2>
            <p className="font-body text-sm text-forest-400 font-light leading-loose max-w-sm mb-10">
              O GourmetOn foi pensado para quem valoriza praticidade sem abrir mão da qualidade. Uma interface que coloca o sabor em primeiro lugar.
            </p>

            <div className="relative overflow-hidden" style={{ height: '280px' }}>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop&q=80"
                alt="Chef preparando prato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-700/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gold-400/30">
                <span className="font-body text-xs tracking-widest uppercase text-gold-300">Chef's Selection</span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-forest-200/30">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="group flex items-start gap-6 py-7 hover:bg-forest-500/5 px-2 transition-colors duration-200 cursor-default"
              >
                <span className="font-display text-2xl font-light text-forest-200/50 group-hover:text-gold-400/60 w-8 flex-shrink-0 transition-colors duration-300 leading-none pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`${feat.icon} text-gold-400 text-sm`}></i>
                    <h4 className="font-body font-medium text-forest-600 text-sm tracking-wide">{feat.title}</h4>
                  </div>
                  <p className="font-body text-xs text-forest-400 leading-loose font-light">{feat.description}</p>
                </div>
                <i className="fa-solid fa-arrow-right text-xs text-gold-400/0 group-hover:text-gold-400/60 transition-colors duration-300 mt-1 flex-shrink-0"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
