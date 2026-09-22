import React from 'react'
import { Link } from 'react-router-dom'

const metrics = [
  { value: '2+', label: 'Years building products' },
  { value: '8+', label: 'Projects shipped' },
  { value: '100%', label: 'Focus on clean UX' },
]

function Home() {
  return (
    <section className="grid items-center gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
      <div>
        <p className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
          Software engineer • Product thinker
        </p>

        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          I design digital experiences that feel calm, useful, and human.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          I’m Mizero Reine, a software engineer based in Rwanda focused on web, mobile,
          and AI-driven product experiences. I build thoughtful interfaces that balance
          simplicity and real impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-200 transition hover:bg-slate-700"
          >
            View my work
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Let’s connect
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <div className="text-2xl font-semibold text-slate-900">{item.value}</div>
              <div className="mt-1 text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Currently</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">Available for work</p>
            </div>
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-stone-100 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Focus</p>
              <p className="mt-2 text-lg font-medium text-slate-700">React, Flutter, UX systems</p>
            </div>

            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-sky-700">Craft</p>
              <p className="mt-2 text-lg font-medium text-slate-800">Simple interfaces. Strong user flow.</p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-amber-700">Location</p>
              <p className="mt-2 text-lg font-medium text-slate-800">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home