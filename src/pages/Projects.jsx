import React from 'react'

const projects = [
  {
    name: 'SkillFlow',
    type: 'Learning platform',
    summary: 'A clean learning dashboard for discovering skills, tracking progress, and consuming structured learning paths.',
    stack: ['React', 'Tailwind', 'UX design'],
    accent: 'bg-sky-50 text-sky-700',
  },
  {
    name: 'MobiCart',
    type: 'Mobile commerce app',
    summary: 'A product-focused mobile storefront concept designed to simplify browsing, shopping, and checkout flow.',
    stack: ['Flutter', 'Mobile UI', 'Product thinking'],
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    name: 'DataPulse',
    type: 'Analytics dashboard',
    summary: 'A lightweight analytics experience that transforms raw metrics into readable decisions for teams and stakeholders.',
    stack: ['Python', 'Data viz', 'Dashboards'],
    accent: 'bg-emerald-50 text-emerald-700',
  },
]

function Projects() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">Selected work with a focus on clarity.</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${project.accent}`}>
              {project.type}
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1.5 text-xs text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects