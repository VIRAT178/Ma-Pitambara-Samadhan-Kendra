import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '../../components/Hero'
import InfoBanner from '../../components/InfoBanner'
import ServicesGrid from '../../components/ServicesGrid'
import FeaturedBanners from '../../components/FeaturedBanners'
import Testimonials from '../../components/Testimonials'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Maa Pitambara Samadhan Kendra | Trusted Astrologer',
  description:
    'Reunite with your partner, remove black magic, and invite prosperity with Shubham Sharma. Call now for a confidential consultation.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBanner />
      <ServicesGrid />
      <FeaturedBanners />
      <Testimonials />
      <section id="contact" className="section bg-[color:var(--cream)]">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4">Get Your Free Consultation</h2>
            <p className="text-[color:var(--ink-muted)] mb-4 text-lg">
              Share your concern and receive personalized guidance from Shubham Sharma. All consultations are confidential and result-oriented.
            </p>
            <div className="space-y-3 text-[color:var(--ink)]">
              <p>
                <span className="font-semibold">Phone:</span> <a href="tel:+919522748858" className="text-[color:var(--brand)] hover:underline">+91 9522748858</a>
              </p>
              <p>
                <span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/919522748858" target="_blank" className="text-[color:var(--brand)] hover:underline">Chat now</a>
              </p>
              <p>
                <span className="font-semibold">Email:</span> <a href="mailto:mapitambarasamadhan@gmail.com" className="text-[color:var(--brand)] hover:underline">mapitambarasamadhan@gmail.com</a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
