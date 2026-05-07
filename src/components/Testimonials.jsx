const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Arquiteta',
    photo: 'https://i.pravatar.cc/80?img=47',
    stars: 5,
    text: 'A qualidade dos restaurantes parceiros é impecável. Pedi um risoto que chegou quentinho e com a apresentação perfeita. Nunca mais pedi em outro app.',
  },
  {
    name: 'Rafael Mendes',
    role: 'Designer',
    photo: 'https://i.pravatar.cc/80?img=12',
    stars: 5,
    text: 'Interface linda, entrega rápida e o suporte é excelente. Uso toda semana para o jantar em família. Recomendo demais.',
  },
  {
    name: 'Juliana Neves',
    role: 'Consultora de Negócios',
    photo: 'https://i.pravatar.cc/80?img=32',
    stars: 5,
    text: 'Os filtros de dieta me salvaram. Sou vegetariana e nunca tive tanta opção de qualidade numa plataforma de delivery. Fantástico.',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 bg-forest-700">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">
          <span className="block w-12 h-px bg-gold-400 mx-auto mb-5"></span>
          <p className="text-gold-300 text-xs tracking-widest3 uppercase font-body mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-parchment-50 font-light">
            Quem prova,
            <br />
            <em className="text-gold-300">aprova.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-forest-500/40">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-10 hover:bg-forest-600/40 transition-colors duration-300 group"
            >
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-gold-400 text-xs"></i>
                ))}
              </div>

              <p className="font-display text-xl font-light text-parchment-200 leading-relaxed mb-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-forest-500/40 pt-7">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <p className="font-body font-medium text-parchment-100 text-sm tracking-wide">{t.name}</p>
                  <p className="font-body text-xs text-forest-300 tracking-widest uppercase mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
