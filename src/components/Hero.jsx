export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-forest-700"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&auto=format&fit=crop&q=85')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-forest-700/90 via-forest-700/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-transparent to-forest-700/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-24 pt-40 w-full">
        <div className="max-w-2xl">
          <span className="rule-gold"></span>
          <p className="text-gold-300 font-body text-xs tracking-widest3 uppercase mb-5 animate-fade-in opacity-0-init">
            Delivery Premium · Est. 2024
          </p>

          <h1 className="font-display text-6xl md:text-8xl text-parchment-50 font-light leading-none mb-8 animate-fade-up opacity-0-init delay-100">
            Sabor que
            <br />
            <em className="text-gold-300 italic">chega</em>
            <br />
            até você.
          </h1>

          <p className="font-body text-parchment-300 text-base leading-loose max-w-md mb-12 font-light animate-fade-up opacity-0-init delay-200">
            Os melhores restaurantes da cidade, curados com critério. Experiências gastronômicas sem sair de casa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0-init delay-300">
            <a
              href="#contato"
              className="bg-gold-400 hover:bg-gold-300 text-forest-700 font-body font-medium px-10 py-4 text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3"
            >
              <i className="fa-brands fa-apple text-base"></i>
              App Store
            </a>
            <a
              href="#contato"
              className="border border-parchment-200/40 hover:border-gold-300 text-parchment-200 hover:text-gold-300 font-body font-medium px-10 py-4 text-xs tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-3"
            >
              <i className="fa-brands fa-google-play text-base"></i>
              Google Play
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-parchment-100/10 flex items-center gap-16 animate-fade-in opacity-0-init delay-500">
          {[
            { value: '200+', label: 'Restaurantes Parceiros' },
            { value: '30 min', label: 'Tempo Médio' },
            { value: '4.9', label: 'Avaliação Média' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              <div>
                <p className="text-gold-300 font-display text-3xl font-light">{stat.value}</p>
                <p className="text-parchment-300 text-xs font-body tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
              {i < 2 && <div className="w-px h-10 bg-parchment-100/15"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
