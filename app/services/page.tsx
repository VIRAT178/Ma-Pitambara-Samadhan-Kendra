import type { Metadata } from 'next'
import ServicesGrid from '../../components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Astrology & Spiritual Services',
  description:
    'Business growth, black magic removal, palm reading, psychic reading, and business problem solutions by Pandit Subham krishna ji.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="font-serif text-3xl">Services</h1>
          <p className="mt-2 max-w-2xl text-[color:var(--ink-muted)]">
            Every consultation is confidential and tailored to your situation. Get remedies that are authentic, safe, and guided by Vedic wisdom.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </>
  )
}
