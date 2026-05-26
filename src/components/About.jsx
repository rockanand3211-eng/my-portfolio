import { FiBookOpen, FiCpu, FiZap } from 'react-icons/fi'

const INTERESTS = [
  {
    icon: FiZap,
    title: 'Advanced Avionics & Flight Control Systems',
    description:
      'FADEC / Fighter Aircraft Computing — exploring high-reliability embedded control, real-time telemetry, and mission-critical avionics software architecture.',
    accent: 'from-amber-500/20 to-orange-500/5',
    border: 'hover:border-amber-500/40',
    iconColor: 'text-amber-400',
  },
  {
    icon: FiCpu,
    title: 'Generative AI Architecture & Large Language Models',
    description:
      'Designing scalable inference pipelines, RAG systems, and production LLM microservices with emphasis on latency, cost, and observability.',
    accent: 'from-violet-500/20 to-indigo-500/5',
    border: 'hover:border-violet-500/40',
    iconColor: 'text-violet-400',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
    >
      <header className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          About
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Education & Engineering Focus
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-300 ease-in-out hover:border-white/15">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10">
            <FiBookOpen className="h-6 w-6 text-indigo-400" aria-hidden />
          </div>
          <h3 className="text-xl font-bold text-slate-200">Education</h3>
          <div className="mt-6 space-y-4">
            <p className="text-lg font-semibold leading-snug text-slate-200">
              B.Tech in Computer Science & Engineering
            </p>
            <p className="text-base font-medium text-indigo-300">
              Specialization in AI & Machine Learning
            </p>
            <p className="text-slate-400">NIMS University</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="rounded-full border border-slate-600/60 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300">
                Batch 2023 – 2027
              </span>
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Current CGPA: 8.1
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-200">
            Core Engineering Interests
          </h3>
          {INTERESTS.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.02] ${item.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-600/50 bg-slate-800/60">
                    <Icon className={`h-5 w-5 ${item.iconColor}`} aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold leading-snug text-slate-200">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
