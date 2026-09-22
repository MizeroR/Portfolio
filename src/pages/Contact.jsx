import React from 'react'

function Contact() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Let’s build something thoughtful.
        </h1>
      </div>

      <div className="mt-12 max-w-2xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
        <div className="mt-8 space-y-5 text-slate-600">
          <p>Available for freelance projects, product collaborations, and thoughtful product work.</p>
          <a href="mailto:reinemizero5@gmail.com" className="block text-base font-medium text-slate-900 hover:text-sky-700">
            reinemizero5@gmail.com
          </a>
          <a href="tel:+250784911041" className="block text-base font-medium text-slate-900 hover:text-sky-700">
            +250 784 911 041
          </a>
          <p>Kigali, Rwanda</p>
        </div>

        <div className="mt-8 flex gap-4 text-sm font-medium text-slate-700">
          <a href="https://linkedin.com/in/reine-mizero" target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 px-4 py-2 hover:border-slate-400">
            LinkedIn
          </a>
          <a href="https://github.com/MizeroR" target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 px-4 py-2 hover:border-slate-400">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact