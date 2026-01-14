import type { Metadata } from 'next'
import Testimonials from '../../../components/Testimonials'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Stories of transformation and healing from real clients.',
}

export default function TestimonialsPage() {
  return <Testimonials />
}
