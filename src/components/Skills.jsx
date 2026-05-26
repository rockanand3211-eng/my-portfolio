const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    color: 'indigo',
    skills: ['Python', 'JavaScript (ES6+)', 'C++', 'C', 'SQL'],
  },
  {
    title: 'Full-Stack Web',
    color: 'violet',
    skills: [
      'Node.js',
      'Express.js',
      'React.js',
      'HTML5 / CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'AI / ML Frameworks',
    color: 'cyan',
    skills: [
      'Machine Learning (Scikit-Learn)',
      'Data Analysis (Pandas, NumPy)',
      'Computer Vision',
      'Basic Deep Learning',
    ],
  },
  {
    title: 'Tools & Databases',
    color: 'emerald',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Git',
      'GitHub',
      'Postman',
      'FastAPI',
      'Flask',
    ],
  },
]

const COLOR_MAP = {
  indigo: {
    card: 'hover:border-indigo-500/40',
    badge:
      'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:scale-105',
    dot: 'bg-indigo-400',
  },
  violet: {
    card: 'hover:border-violet-500/40',
    badge:
      'border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:border-violet-400/50 hover:scale-105',
    dot: 'bg-violet-400',
  },
  cyan: {
    card: 'hover:border-cyan-500/40',
    badge:
      'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-105',
    dot: 'bg-cyan-400',
  },
  emerald: {
    card: 'hover:border-emerald-500/40',
    badge:
      'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:scale-105',
    dot: 'bg-emerald-400',
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
    >
      <header className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Expertise
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Technical Skills Matrix
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          A curated stack spanning systems programming, full-stack delivery, and
          applied machine learning.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {SKILL_CATEGORIES.map((category) => {
          const colors = COLOR_MAP[category.color]
          return (
            <article
              key={category.title}
              className={`rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.01] ${colors.card}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${colors.dot}`}
                  aria-hidden
                />
                <h3 className="text-lg font-bold text-slate-200">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ease-in-out ${colors.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
