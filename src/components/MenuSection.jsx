import { useState, useEffect } from 'react'

function RecipeCard({ meal, index }) {
  const price = (30 + ((meal.idMeal * 7) % 40)).toFixed(2).replace('.', ',')

  return (
    <div className="group cursor-default">
      <div className="relative overflow-hidden aspect-square bg-forest-600">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4">
          <span className="font-display text-4xl font-light text-parchment-50/20 leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="bg-gold-400 text-forest-700 text-xs font-body font-medium px-3 py-1 tracking-widest uppercase">
            {meal.strCategory}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full border border-gold-300 text-gold-300 text-xs font-body tracking-widest uppercase py-3 hover:bg-gold-400 hover:text-forest-700 transition-colors duration-200">
            Pedir agora
          </button>
        </div>
      </div>
      <div className="pt-4 border-t border-forest-400/20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-medium text-parchment-100 leading-tight">
              {meal.strMeal}
            </h3>
            <p className="text-xs text-forest-300 font-body tracking-widest uppercase mt-1">
              {meal.strArea || 'Internacional'}
            </p>
          </div>
          <span className="text-gold-300 font-display font-light text-xl whitespace-nowrap">
            R$ {price}
          </span>
        </div>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="aspect-square bg-forest-600/60" />
      <div className="pt-4 border-t border-forest-400/20 space-y-2">
        <div className="h-4 bg-forest-400/30 w-3/4" />
        <div className="h-3 bg-forest-400/20 w-1/2" />
      </div>
    </div>
  )
}

export default function MenuSection() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        setError(null)

        const categories = ['Seafood', 'Beef', 'Pasta', 'Chicken', 'Lamb']
        const randomCategory = categories[Math.floor(Math.random() * categories.length)]

        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`
        )
        if (!response.ok) throw new Error('Erro ao carregar pratos')

        const data = await response.json()
        const shuffled = data.meals.sort(() => 0.5 - Math.random()).slice(0, 8)

        const detailed = await Promise.all(
          shuffled.map(async (meal) => {
            const res = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            )
            const d = await res.json()
            return d.meals[0]
          })
        )

        setMeals(detailed)
      } catch (err) {
        setError('Não foi possível carregar o cardápio.')
      } finally {
        setLoading(false)
      }
    }

    fetchMeals()
  }, [])

  return (
    <section id="cardapio" className="py-28 bg-forest-600">
      <div className="max-w-6xl mx-auto px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="block w-12 h-px bg-gold-400 mb-5"></span>
            <p className="text-gold-300 text-xs tracking-widest3 uppercase font-body mb-4">
              Cardápio em destaque
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-parchment-50 font-light leading-none">
              Pratos que
              <br />
              <em className="text-gold-300">encantam.</em>
            </h2>
          </div>
          <a href="#contato" className="border border-gold-400/60 hover:border-gold-300 text-gold-300 text-xs font-body tracking-widest uppercase px-8 py-3 transition-colors duration-200 self-start md:self-auto">
            Ver cardápio completo
          </a>
        </div>

        {error && (
          <div className="text-center text-parchment-300 py-10 border border-forest-400/20">
            <i className="fa-solid fa-circle-exclamation text-gold-400 text-3xl mb-3 block"></i>
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
            : meals.map((meal, i) => <RecipeCard key={meal.idMeal} meal={meal} index={i} />)}
        </div>
      </div>
    </section>
  )
}
