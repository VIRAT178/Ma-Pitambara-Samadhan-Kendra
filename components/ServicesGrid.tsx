'use client'
import { useState } from 'react'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'

const services = [
  { 
    title: 'Business Growth', 
    icon: '📈',
    description: 'Strategies and remedies for success',
    benefits: ['Business analysis', 'Prosperity rituals', 'Vastu recommendations', 'Growth strategies'],
    duration: '60-90 minutes'
  },
  { 
    title: 'Black Magic Removal', 
    icon: '✨',
    description: 'Protection from negative energies',
    benefits: ['Negative energy detection', 'Protective rituals', 'Home cleansing guidance', 'Long-term protection plan'],
    duration: '45-60 minutes'
  },
  { 
    title: 'Palm Reading', 
    icon: '🔮',
    description: 'Reveal your destiny through hands',
    benefits: ['Detailed palm analysis', 'Life path insights', 'Career guidance', 'Health indicators'],
    duration: '30-45 minutes'
  },
  { 
    title: 'Psychic Reading', 
    icon: '👁️',
    description: 'Gain clarity on your future',
    benefits: ['Energy intuition', 'Life guidance', 'Decision support', 'Spiritual insights'],
    duration: '45-60 minutes'
  },
  { 
    title: 'Business Problems', 
    icon: '💼',
    description: 'Success and prosperity solutions',
    benefits: ['Business analysis', 'Vastu recommendations', 'Prosperity rituals', 'Growth strategies'],
    duration: '60 minutes'
  },
  { 
    title: 'Business Disputes', 
    icon: '⚖️',
    description: 'Clarity and remedies for disputes',
    benefits: ['Dispute assessment', 'Remedial rituals', 'Timing guidance', 'Calm communication tips'],
    duration: '45-60 minutes'
  },
  { 
    title: 'Spiritual Healing', 
    icon: '🙏',
    description: 'Inner peace and spiritual growth',
    benefits: ['Energy healing', 'Meditation guidance', 'Chakra balancing', 'Spiritual counseling'],
    duration: '60 minutes'
  },
  { 
    title: 'Vastu Consultation', 
    icon: '🏠',
    description: 'Harmonize your living space',
    benefits: ['Home energy assessment', 'Placement recommendations', 'Color guidance', 'Element balancing'],
    duration: '90 minutes'
  },
]

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service)
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
          <h2 className="mb-8 font-serif text-3xl font-bold text-center">Spiritual Services</h2>
          <div className="grid gap-6 sm:grid-cols-4">
            {services.map((s) => (
              <ServiceCard 
                key={s.title} 
                title={s.title} 
                icon={s.icon}
                onClick={() => openModal(s)}
              />
            ))}
          </div>
        </div>
      </section>
      <ServiceModal isOpen={isModalOpen} service={selectedService} onClose={closeModal} />
    </>
  )
}
