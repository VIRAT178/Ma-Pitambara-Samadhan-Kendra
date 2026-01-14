'use client'
import { useState } from 'react'
import ServiceModal from './ServiceModal'

const banners = [
  {
    title: 'Business Growth',
    description: 'Unlock growth and stability with focused Vedic remedies.',
    bgGradient: 'from-emerald-500 to-[color:var(--brand)]',
    ctaText: 'Book Now',
    icon: '📈',
    benefits: ['Business energy audit', 'Prosperity rituals', 'Vastu alignment', 'Growth strategies']
  },
  {
    title: 'Black Magic Removal',
    description: 'Protection rituals for your home and family.',
    bgGradient: 'from-purple-600 to-[color:var(--brand)]',
    ctaText: 'Get Help',
    icon: '✨',
    benefits: ['Negative energy detection', 'Protection rituals', 'Home cleansing', 'Safety measures']
  },
  {
    title: 'Prosperity Puja',
    description: 'Unlock growth and stable finances for your business.',
    bgGradient: 'from-yellow-500 to-[color:var(--brand)]',
    ctaText: 'Consult',
    icon: '💰',
    benefits: ['Business energy audit', 'Prosperity rituals', 'Vastu alignment', 'Growth strategies']
  },
  {
    title: 'Legal/Business Disputes',
    description: 'Seek clarity and remedies for disputes and obstacles.',
    bgGradient: 'from-red-500 to-[color:var(--brand)]',
    ctaText: 'Start Now',
    icon: '⚖️',
    benefits: ['Dispute assessment', 'Remedial rituals', 'Timing guidance', 'Calm communication tips']
  },
  {
    title: 'Psychic Reading',
    description: 'Gain clarity on your path and future.',
    bgGradient: 'from-indigo-500 to-[color:var(--brand)]',
    ctaText: 'Discover',
    icon: '🔮',
    benefits: ['Energy intuition', 'Life guidance', 'Future insights', 'Decision support']
  },
  {
    title: 'Palm Reading',
    description: 'Reveal secrets written in your hands.',
    bgGradient: 'from-orange-500 to-[color:var(--brand)]',
    ctaText: 'Learn More',
    icon: '🔍',
    benefits: ['Detailed hand analysis', 'Destiny insights', 'Life path clarity', 'Future predictions']
  },
]

export default function FeaturedBanners() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (banner: any) => {
    setSelectedService({
      title: banner.title,
      description: banner.description,
      benefits: banner.benefits,
      icon: banner.icon
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {banners.map((banner) => (
              <button
                key={banner.title}
                onClick={() => openModal(banner)}
                className={`bg-gradient-to-br ${banner.bgGradient} rounded-2xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl hover:scale-105 transition-all duration-300 text-left group`}
              >
                <div className="absolute top-0 right-0 text-6xl opacity-20 group-hover:opacity-30 transition">{banner.icon}</div>
                <h3 className="font-semibold text-lg mb-2 relative z-10">{banner.title}</h3>
                <p className="text-sm text-white/90 mb-4 relative z-10">{banner.description}</p>
                <div className="btn bg-white text-[color:var(--brand)] hover:bg-white/90 font-semibold text-sm relative z-10">
                  {banner.ctaText}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <ServiceModal isOpen={isModalOpen} service={selectedService} onClose={closeModal} />
    </>
  )
}
