import Hero from "./components/hero"
import About from "./components/about"
import Portfolio from "./components/portfolio"
import Gallery from "./components/gallery"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#141413] paper-grain selection:bg-[#fde047]/60 selection:text-black">
      <Hero />
      <Portfolio />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
