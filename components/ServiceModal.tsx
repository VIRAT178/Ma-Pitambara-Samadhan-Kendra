'use client'
import { useState } from 'react'
import ContactForm from './ContactForm'

type ServiceModalProps = {
  isOpen: boolean
  service: {
    title: string
    description: string
    benefits: string[]
    duration?: string
    icon: string
  } | null
  onClose: () => void
}

export default function ServiceModal({ isOpen, service, onClose }: ServiceModalProps) {
  const [showForm, setShowForm] = useState(false)

  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-screen overflow-y-auto rounded-2xl bg-white shadow-2xl text-[color:var(--ink)] dark:bg-gray-900 dark:text-[color:var(--ink)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[color:var(--brand)]/10 hover:bg-[color:var(--brand)]/20 flex items-center justify-center text-[color:var(--brand)] font-bold transition"
        >
          ✕
        </button>

        {/* Modal content */}
        <div className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="text-5xl">{service.icon}</div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-[color:var(--brand)] mb-2 dark:text-[color:var(--accent)]">{service.title}</h2>
              <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">{service.description}</p>
            </div>
          </div>

          {service.duration && (
            <div className="mb-6 p-4 bg-[color:var(--cream)] dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-[color:var(--ink)] dark:text-[color:var(--ink)]">
                <span className="font-semibold text-[color:var(--brand)] dark:text-[color:var(--accent)]">Typical Duration:</span> {service.duration}
              </p>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-semibold text-[color:var(--brand)] dark:text-[color:var(--accent)] mb-4">What You'll Receive:</h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[color:var(--brand)] dark:text-[color:var(--accent)] font-bold text-lg mt-1">✓</span>
                  <span className="text-[color:var(--ink)] dark:text-[color:var(--ink)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {!showForm ? (
            <div className="space-y-3">
              <button
                onClick={() => setShowForm(true)}
                className="w-full btn btn-primary text-lg font-semibold"
              >
                Book Consultation for {service.title}
              </button>
              <button
                onClick={onClose}
                className="w-full btn btn-outline text-lg font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mb-4">
                Selected Service: <span className="font-semibold text-[color:var(--brand)] dark:text-[color:var(--accent)]">{service.title}</span>
              </p>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
