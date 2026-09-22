import React from 'react'

const projects = [
  {
    name: 'MedGate',
    type: 'Cylacon internship • Healthcare platform',
    summary:
      'A Rwanda-based digital healthcare platform connecting patients to verified hospitals and medical services through a clean, trust-focused experience.',
    stack: ['React', 'Tailwind', 'UI/UX design'],
    site: 'https://www.medgate.rw/',
    accent: 'bg-sky-50 text-sky-700',
  },
  {
    name: 'AGHR',
    type: 'Cylacon internship • Accessibility website',
    summary:
      'An inclusive and accessible platform for the Alliance Générale des Personnes Handicapés Physiques Au Rwanda, with a strong focus on usability and inclusion.',
    stack: ['React', 'Tailwind', 'Accessibility'],
    site: 'https://aghr-2026.vercel.app/',
    accent: 'bg-amber-50 text-amber-700',
  },
  {
    name: 'Nyumba',
    type: 'Cylacon internship • Property marketplace',
    summary:
      'A Rwanda-first property marketplace built for affordable housing, designed around trust, local payment habits, and clearer user journeys for renters and landlords.',
    stack: ['React', 'Tailwind', 'Marketplace UX'],
    site: 'https://www.kunyumba.site/',
    accent: 'bg-emerald-50 text-emerald-700',
  },
  {
    name: 'Car Sharing APP',
    type: 'The Gym Rwanda • Frontend',
    summary:
      'A car sharing platform experience for owners and bookers, focused on simple booking flows, trust, and a polished product interface.',
    stack: ['React', 'Tailwind', 'Frontend UI'],
    site: 'https://carsharing-frontend-production.up.railway.app/',
    accent: 'bg-violet-50 text-violet-700',
  },
]

function Projects() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Public work built around product thinking, usability, and clean frontend execution.
        </h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
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

            <a
              href={project.site}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              View live project
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects