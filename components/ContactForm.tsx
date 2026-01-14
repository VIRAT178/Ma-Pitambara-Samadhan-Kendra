'use client'
import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ 
    name: '', 
    email: '', 
    phone: '', 
    service: 'general',
    message: '' 
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string>('')

  const services = [
    'Business Growth',
    'Black Magic Removal',
    'Palm Reading',
    'Psychic Reading',
    'Business Problems',
    'Business Disputes',
    'Spiritual Healing',
    'Other'
  ]

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Submission failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: 'general', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err: any) {
      setStatus('error')
      setError(err.message || 'Something went wrong')
    }
  }

  return (
    <form onSubmit={onSubmit} className="bg-gradient-to-br from-[color:var(--brand)] to-orange-600 rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-6">Request Free Consultation</h3>
      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Full Name</label>
          <input
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50 transition"
            placeholder="Your name"
          />
          <p className="text-xs text-white/60 mt-1">Min 2 characters</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50 transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">Phone</label>
            <input
              required
              minLength={6}
              maxLength={20}
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50 transition"
              placeholder="+91 9522748858"
            />
            <p className="text-xs text-white/60 mt-1">Min 6, Max 20 characters</p>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Service Needed</label>
          <select
            value={form.service}
            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
            className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white outline-none focus:border-white/50 transition"
          >
            <option value="general" className="bg-gray-800">General Consultation</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-gray-800">{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">Message</label>
          <textarea
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/50 resize-none transition"
            placeholder="Describe your concern..."
          />
          <p className="text-xs text-white/60 mt-1">Min 10 characters</p>
        </div>
      </div>
      {status === 'error' && (
        <div className="mt-4 bg-red-500/30 border border-red-500 rounded-lg p-3">
          <p className="text-sm text-red-100">{error}</p>
        </div>
      )}
      {status === 'success' && (
        <div className="mt-4 bg-green-500/30 border border-green-500 rounded-lg p-3">
          <p className="text-sm text-green-100">✓ Thank you! We've received your request and will contact you soon.</p>
        </div>
      )}
      <button 
        disabled={status === 'loading'} 
        className="mt-6 w-full btn bg-yellow-400 text-[color:var(--brand)] hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg transition"
      >
        {status === 'loading' ? 'Sending…' : 'Get Free Consultation'}
      </button>
    </form>
  )
}
