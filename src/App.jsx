import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import MenuSection from './components/MenuSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <MenuSection />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
