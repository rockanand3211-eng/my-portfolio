import { useState } from 'react'
import { FiLoader, FiSend } from 'react-icons/fi'

const INPUT_CLASS =
  'w-full rounded-xl border border-slate-600/60 bg-slate-900/50 px-4 py-3 text-slate-200 placeholder-slate-500 backdrop-blur-md transition-all duration-300 ease-in-out outline-none focus:border-indigo-500 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.25)] focus:ring-0'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 1600))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:py-28"
    >
      <header className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
          Let&apos;s Build Something Great
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          Open to internships, collaborations, and engineering conversations.
        </p>
      </header>

      <div className="mx-auto max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md sm:p-10"
          noValidate
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={INPUT_CLASS}
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={INPUT_CLASS}
                disabled={isLoading}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={`${INPUT_CLASS} resize-none`}
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 ease-in-out ${
              isLoading
                ? 'scale-[0.98] cursor-wait bg-indigo-700/80'
                : isSuccess
                  ? 'bg-emerald-600 hover:bg-emerald-500'
                  : 'bg-indigo-600 shadow-lg shadow-indigo-900/40 hover:scale-[1.02] hover:bg-indigo-500'
            } disabled:opacity-90`}
          >
            {isLoading ? (
              <>
                <FiLoader className="h-4 w-4 animate-spin" aria-hidden />
                Sending...
              </>
            ) : isSuccess ? (
              'Message Sent!'
            ) : (
              <>
                <FiSend className="h-4 w-4" aria-hidden />
                Send Message
              </>
            )}
          </button>

          {isSuccess && (
            <p className="mt-4 text-center text-sm text-emerald-400" role="status">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
