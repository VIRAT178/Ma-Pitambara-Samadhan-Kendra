type Props = {
  name: string
  location: string
  message: string
  initials?: string
  rating?: number
}

export default function TestimonialCard({ name, location, message, initials, rating = 5 }: Props) {
  const firstInitial = initials || name.charAt(0)
  
  return (
    <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center font-bold text-lg">
          {initials}
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-white/80">{location}</p>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-300 mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-sm text-white/90">"{message}"</p>
    </div>
  )
}
