import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_5mzyxuk',
        'template_j172fzq',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'reinemizero5@gmail.com',
        },
        '024pb39ECrIg1Ni_b'
      )

      await emailjs.send(
        'service_5mzyxuk',
        'template_3g1nvfr',
        {
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          to_email: formData.email,
        },
        '024pb39ECrIg1Ni_b'
      )

      setMessage('Message sent successfully! Check your inbox for confirmation.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error details:', error)
      setMessage(`Failed to send message: ${error.text || error.message || 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-700">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Let’s build something thoughtful.
        </h1>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
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
        </aside>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                required
              >
                <option value="">Select a topic</option>
                <option value="freelance">Freelance project</option>
                <option value="job">Job opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                required
              />
            </div>

            {message && (
              <div
                className={`rounded-xl px-4 py-3 text-sm ${
                  message.includes('successfully')
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-rose-50 text-rose-700'
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:bg-slate-300"
            >
              {isLoading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact