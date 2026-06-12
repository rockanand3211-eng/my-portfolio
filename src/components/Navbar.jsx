import { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 ease-in-out sm:px-6 ${
          scrolled
            ? 'border-white/10 bg-slate-900/80 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'border-white/5 bg-slate-900/50 backdrop-blur-md'
        }`}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-slate-100 transition-colors duration-300 ease-in-out hover:text-white"
        >
          Anand Raj
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-all duration-300 ease-in-out hover:bg-slate-800/60 hover:text-slate-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/Anand%20resume%20updated.docx"
            download="Anand resume updated.docx"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-500/50 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 transition-all duration-300 ease-in-out hover:border-indigo-400/70 hover:bg-indigo-500/20 hover:text-indigo-200"
          >
            <FiDownload className="h-4 w-4" aria-hidden />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-slate-300 transition-all duration-300 ease-in-out hover:bg-slate-800/60 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 ease-in-out hover:bg-slate-800/60 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/Anand%20resume%20updated.docx"
              download="Anand resume updated.docx"
              onClick={handleNavClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-500/50 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-300 transition-all duration-300 ease-in-out hover:border-indigo-400/70 hover:bg-indigo-500/20"
            >
              <FiDownload className="h-4 w-4" aria-hidden />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
