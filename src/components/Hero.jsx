import { FiGithub, FiLinkedin } from 'react-icons/fi'
import profileImage from '../assets/profile.jpg'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: FiLinkedin,
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
            Full-Stack & AI Engineer
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Anand Raj
            </span>
            .
          </h1>

          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-300 sm:text-xl">
            Building Scalable Full-Stack Architectures & Intelligent AI
            Microservices.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Specialized in bridging the gap between performance-driven frontend
            systems and deep-learning serverless pipelines.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-indigo-500"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/70 bg-transparent px-6 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 ease-in-out hover:border-slate-400 hover:bg-slate-800/50 hover:text-slate-100"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600/60 bg-slate-800/40 text-slate-300 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-110 hover:border-indigo-500/50 hover:bg-slate-800/80 hover:text-indigo-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              className="animate-spin-slow absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-80 blur-sm"
              aria-hidden
            />
            <div className="relative rounded-full bg-[#0f172a] p-1.5">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-slate-700/80 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <img
                  src={profileImage}
                  alt="Anand Raj — Full-Stack & AI Engineer"
                  className="h-full w-full object-cover object-center"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
