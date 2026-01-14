import TestimonialCard from './TestimonialCard'

const items = [
  { 
    name: 'Aarav S.', 
    location: 'Chennai', 
    message: 'We reunited within weeks. Grateful for Pandit ji\'s guidance.',
    initials: 'AS'
  },
  { 
    name: 'Priya R.', 
    location: 'Mumbai', 
    message: 'Negativity at home vanished. Feeling peaceful again.',
    initials: 'PR'
  },
  { 
    name: 'Rohit M.', 
    location: 'Delhi', 
    message: 'Business improved after remedies. Truly effective.',
    initials: 'RM'
  },
  { 
    name: 'Simran G.', 
    location: 'Bangalore', 
    message: 'Palm reading was precise and comforting.',
    initials: 'SG'
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-[color:var(--brand)] text-white py-16">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">TESTIMONIALS</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
