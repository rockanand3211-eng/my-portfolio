import { FiExternalLink, FiGithub } from 'react-icons/fi'

const PROJECTS = [
  {
    id: 'styleai',
    title: 'StyleAi',
    subtitle: 'AI-Powered Fashion Recommendation Engine',
    tagline:
      'A sustainable B2B2C fashion virtualization platform engineered to optimize consumer style discovery and minimize retail product return metrics.',
    accent: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    glow: 'group-hover:shadow-violet-500/25',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python',
      'OpenCV',
      'MediaPipe',
    ],
    modules: [
      'MERN-stack architecture with localized MongoDB schemas for user profile data management.',
      'Integrated Client-Side Computer Vision pipelines utilizing MediaPipe for localized facial attribute and structural body landmark tracking inside the web browser.',
      'Developed an Adaptive Fitting Layer to dynamically fine-tune wardrobe curation based on user body composition updates.',
      'Algorithmic rendering engine matching closet data into 240+ dynamic outfit permutations.',
    ],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://github.com/',
  },
  {
    id: 'fitness-tracker',
    title: 'AI-Powered Personal Fitness Tracker',
    subtitle: 'Health Optimization Dashboard',
    tagline:
      'A dedicated health optimization dashboard engineered for macro-nutrient tracking and long-term body transformation projection.',
    accent: 'from-cyan-500/20 via-emerald-500/10 to-transparent',
    glow: 'group-hover:shadow-cyan-500/25',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Python',
      'Scikit-Learn',
      'Pandas',
    ],
    modules: [
      'Full-stack MERN pipeline supporting highly performant user logs for daily caloric distribution (Protein, Carbohydrates, Fats).',
      'Integrated predictive Python analytics using Scikit-Learn/Pandas to model weight progress and transformation curves against consistent caloric inputs.',
      'Built premium responsive analytical charts on the client UI for progress visualizations.',
    ],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://github.com/',
  },
]

function ProjectCard({ project }) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl bg-gradient-to-br from-slate-600/30 via-slate-700/20 to-slate-800/30 p-[1px] shadow-xl shadow-black/25 transition-all duration-300 ease-in-out hover:scale-[1.02] ${project.glow} hover:shadow-2xl`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 backdrop-blur-md">
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
          aria-hidden
        />

        <div className="relative flex flex-1 flex-col p-8 sm:p-10">
          <header className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {project.subtitle}
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              {project.tagline}
            </p>
          </header>

          <div className="mb-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-600/50 bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300 transition-all duration-300 ease-in-out group-hover:border-slate-500/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8 flex-1">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
              Core Modules
            </p>
            <ol className="space-y-4">
              {project.modules.map((module, index) => (
                <li
                  key={module.slice(0, 40)}
                  className="flex gap-4 text-sm leading-relaxed text-slate-400"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-600/50 bg-slate-800/60 text-xs font-bold text-indigo-300">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{module}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-slate-700/50 pt-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — Code on GitHub`}
              title="Code on GitHub"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500/70 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 ease-in-out hover:border-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
            >
              <FiGithub className="h-4 w-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">Code on GitHub</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — Live Preview`}
              title="Live Preview"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-500/70 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 ease-in-out hover:border-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
            >
              <FiExternalLink className="h-4 w-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">Live Preview</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <header className="mb-14 text-center sm:mb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Work
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl lg:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
          Production-grade systems at the intersection of computer vision,
          predictive analytics, and scalable web architecture.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
