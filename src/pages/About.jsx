import React from 'react'

const strengths = [
  {
    title: 'Product engineering',
    text: 'I turn ideas into clear, usable experiences with thoughtful UX and modern frontend architecture.',
    tone: 'bg-sky-50 text-sky-700',
  },
  {
    title: 'Mobile & web builds',
    text: 'From polished mobile interfaces to responsive web apps, I build interfaces that work beautifully across devices.',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'AI-enabled thinking',
    text: 'I enjoy combining software development with practical AI ideas, experimentation, and product problem solving.',
    tone: 'bg-emerald-50 text-emerald-700',
  },
]

const stack = [
  'React',
  'Flutter',
  'JavaScript',
  'TypeScript',
  'Python',
  'Node.js',
  'Machine Learning',
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
          I’m a software engineer from Rwanda who enjoys creating products that are simple,
          intentional, and genuinely helpful. I work across web, mobile, and AI-inspired
          problem solving, always aiming for a product experience people actually enjoy using.
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