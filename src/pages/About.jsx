import React from 'react'

const strengths = [
  {
    title: 'Frontend & product UI',
    text: 'I design and build polished interfaces that are clean, fast, and focused on user experience.',
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    title: 'Mobile & web products',
    text: 'I work across responsive web interfaces and mobile-first product experiences with a strong design eye.',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'AI-aware problem solving',
    text: 'I enjoy combining product thinking with modern software engineering and emerging AI-based ideas.',
    tone: 'bg-emerald-50 text-emerald-700',
  },
]

const stack = [
  'React',
  'Flutter',
  'JavaScript',
  'TypeScript',
  'Python',
  'Tailwind',
  'Node.js',
  'NestJS',
  'Figma',
  'UI Design',
  'Product Thinking',
]

function About() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Building useful digital experiences with clarity and craft.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          I’m a software engineer from Rwanda focused on frontend development and UI/UX design.
          My work sits between product thinking and interface design, helping turn complex ideas
          into simple, accessible experiences that people can actually use with confidence.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {strengths.map((strength) => (
          <article key={strength.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${strength.tone}`}>
              {strength.title}
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600">{strength.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Experience</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Cylacon Ltd</h2>
              <p className="mt-2 text-slate-600">Internship — UI/UX design and frontend development</p>
            </div>

            <div className="text-slate-600">
              <p className="leading-7">
                During my internship at Cylacon Ltd, I contributed to public-facing product work across
                healthcare, accessibility, and property marketplace projects. The work included interface
                design in Figma and frontend implementation using React and Tailwind, with a strong focus
                on usability and user-centered design.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start border-t border-stone-200 pt-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">The Gym Rwanda</h2>
              <p className="mt-2 text-slate-600">Software Trainer — Full stack React, JavaScript, Node.js, NestJS</p>
            </div>

            <div className="text-slate-600">
              <p className="leading-7">
                I spent a year as a software trainee at The Gym Rwanda, where I built practical full-stack
                skills in React, JavaScript, Node.js, and NestJS. I’m now volunteering to coach and share
                the same skills and software foundations with others, helping strengthen the learning culture in the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Tools & interests</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">What I work with</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About