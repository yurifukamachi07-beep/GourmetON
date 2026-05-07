export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-700 border-t border-forest-500/30">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-semibold text-gold-300 tracking-widest uppercase">
              Gourmet<span className="text-parchment-100">On</span>
            </span>
            <p className="font-body text-xs text-forest-300 font-light mt-4 max-w-xs leading-loose">
              Levando sabor e qualidade à sua porta. Experiências gastronômicas premium sem sair de casa.
            </p>
            <div className="flex gap-5 mt-6">
              {[
                { icon: 'fa-brands fa-instagram', href: '#' },
                { icon: 'fa-brands fa-facebook', href: '#' },
                { icon: 'fa-brands fa-x-twitter', href: '#' },
                { icon: 'fa-brands fa-linkedin', href: '#' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-8 h-8 border border-forest-500/50 flex items-center justify-center text-forest-300 hover:text-gold-300 hover:border-gold-400/40 transition-colors duration-200"
                  aria-label={s.icon}
                >
                  <i className={`${s.icon} text-xs`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body font-medium text-parchment-100 text-xs tracking-widest uppercase mb-5">App</h4>
            <ul className="space-y-3">
              {['Como funciona', 'Restaurantes', 'Seja Parceiro', 'Entregadores'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-xs text-forest-300 hover:text-gold-300 transition-colors duration-200 font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-parchment-100 text-xs tracking-widest uppercase mb-5">Legal</h4>
            <ul className="space-y-3">
              {['Privacidade', 'Termos de Uso', 'Cookies', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-body text-xs text-forest-300 hover:text-gold-300 transition-colors duration-200 font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-500/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-forest-500 font-light tracking-wide">
            © {currentYear} GourmetOn. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-forest-500 font-light">
            Feito com <i className="fa-solid fa-heart text-gold-400/70 mx-1 text-xs"></i> para amantes de boa comida.
          </p>
        </div>
      </div>
    </footer>
  )
}
