import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <About />
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <Skills />
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <Projects />
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/80 bg-[#0f172a] py-8 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Anand Raj. Engineered with React &
          Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}

export default App
