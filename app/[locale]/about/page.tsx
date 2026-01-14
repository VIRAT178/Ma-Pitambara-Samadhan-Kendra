import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Pandit Shubham Ji | Vedic Astrology Expert',
  description:
    'Learn about Pandit Subham\'s Vedic astrology expertise, approach to spiritual healing, and commitment to confidential, result-oriented guidance.',
}

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container max-w-5xl">
        <div className="grid gap-6 md:grid-cols-[1.2fr_auto] items-start">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl">About Pandit Subham</h1>
            <p className="mt-4 text-[color:var(--ink-muted)] text-lg leading-relaxed">
              Pandit Shubham Sharma is a renowned Vedic astrologer with decades of experience in horoscope analysis, palmistry, psychic readings, and spiritual remedies. He has guided thousands of families and business owners to overcome obstacles and cultivate lasting harmony.
            </p>
          </div>
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-2 ring-[color:var(--brand)] dark:ring-[color:var(--accent)] shadow-md justify-self-end">
            <Image
              src="/Screenshot 2026-01-10 105904.png"
              alt="Pandit Shubham Sharma holding awards"
              width={352}
              height={352}
              className="h-full w-full object-cover"
              sizes="(min-width: 1280px) 176px, (min-width: 1024px) 176px, (min-width: 768px) 144px, 112px"
              priority
            />
          </div>
        </div>
        
        <h2 className="mt-8 text-xl font-semibold">Approach and Values</h2>
        <p className="mt-2 text-[color:var(--ink-muted)]">
          Consultations are compassionate, confidential, and practical. Pandit ji studies your birth chart, planetary influences, and energy patterns to recommend authentic remedies — including mantra, yantra, gemstone suggestions, vastu alignment, and personalized rituals.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Expertise</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-[color:var(--ink-muted)]">
          <li>Business, career, and financial growth</li>
          <li>Black magic and negative energy removal</li>
          <li>Legal and business dispute guidance</li>
          <li>Health and family well-being</li>
          <li>Palm reading and psychic insights</li>
        </ul>
        <p className="mt-6 text-[color:var(--ink-muted)]">
          Book a session today to receive personalized guidance aligned to your goals and dharma.
        </p>
      </div>
    </section>
  )
}
