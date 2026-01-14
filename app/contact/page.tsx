import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Pandit Subham for a confidential consultation.',
}

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-6 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-3xl">Get In Touch</h1>
          <p className="mt-2 text-[color:var(--ink-muted)]">Share your concern and we will respond promptly.</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>Phone: <a className="text-gold" href="tel:+919522748858">+91 9522748858</a></p>
            <p>WhatsApp: <a className="text-gold" href="https://wa.me/919522748858" target="_blank">Chat now</a></p>
            <p>Email: <a className="text-gold" href="mailto:mapitambarasamadhan@gmail.com">mapitambarasamadhan@gmail.com</a></p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
