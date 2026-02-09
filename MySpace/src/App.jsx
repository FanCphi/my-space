import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans antialiased">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  )
}

export default App
