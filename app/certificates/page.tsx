import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Certificates | Pandit Shubham Sharma',
  description: 'Certificates and qualifications of Pandit Shubham Sharma',
}

const certificates = [
  { id: '1', src: '/Certificate/IMG-20260111-WA0053.jpg', alt: 'Certificate 1', title: 'Certificate 1', issuer: 'Institute', year: '2020' },
  { id: '2', src: '/Certificate/IMG-20260111-WA0054.jpg', alt: 'Certificate 2', title: 'Certificate 2', issuer: 'Institute', year: '2020' },
  { id: '3', src: '/Certificate/IMG-20260111-WA0055.jpg', alt: 'Certificate 3', title: 'Certificate 3', issuer: 'Institute', year: '2020' },
  { id: '4', src: '/Certificate/IMG-20260111-WA0056.jpg', alt: 'Certificate 4', title: 'Certificate 4', issuer: 'Institute', year: '2020' },
  { id: '5', src: '/Certificate/IMG-20260111-WA0057.jpg', alt: 'Certificate 5', title: 'Certificate 5', issuer: 'Institute', year: '2020' },
  { id: '6', src: '/Certificate/IMG-20260111-WA0058.jpg', alt: 'Certificate 6', title: 'Certificate 6', issuer: 'Institute', year: '2020' },
  { id: '7', src: '/Certificate/IMG-20260111-WA0059.jpg', alt: 'Certificate 7', title: 'Certificate 7', issuer: 'Institute', year: '2020' },
  { id: '8', src: '/Certificate/IMG-20260111-WA0060.jpg', alt: 'Certificate 8', title: 'Certificate 8', issuer: 'Institute', year: '2020' },
  { id: '9', src: '/Certificate/IMG-20260111-WA0061.jpg', alt: 'Certificate 9', title: 'Certificate 9', issuer: 'Institute', year: '2020' },
  { id: '10', src: '/Certificate/IMG-20260111-WA0062.jpg', alt: 'Certificate 10', title: 'Certificate 10', issuer: 'Institute', year: '2020' },
  { id: '11', src: '/Certificate/IMG-20260111-WA0063.jpg', alt: 'Certificate 11', title: 'Certificate 11', issuer: 'Institute', year: '2020' },
  { id: '12', src: '/Certificate/IMG-20260111-WA0064.jpg', alt: 'Certificate 12', title: 'Certificate 12', issuer: 'Institute', year: '2020' },
  { id: '13', src: '/Certificate/IMG-20260111-WA0065.jpg', alt: 'Certificate 13', title: 'Certificate 13', issuer: 'Institute', year: '2020' },
  { id: '14', src: '/Certificate/IMG-20260111-WA0066.jpg', alt: 'Certificate 14', title: 'Certificate 14', issuer: 'Institute', year: '2020' },
  { id: '15', src: '/Certificate/IMG-20260111-WA0067.jpg', alt: 'Certificate 15', title: 'Certificate 15', issuer: 'Institute', year: '2020' },
  { id: '16', src: '/Certificate/IMG-20260111-WA0105.jpg', alt: 'Certificate 16', title: 'Certificate 16', issuer: 'Institute', year: '2020' },
  { id: '17', src: '/Certificate/IMG-20260111-WA0106.jpg', alt: 'Certificate 17', title: 'Certificate 17', issuer: 'Institute', year: '2020' },
  { id: '18', src: '/Certificate/IMG-20260111-WA0107.jpg', alt: 'Certificate 18', title: 'Certificate 18', issuer: 'Institute', year: '2020' },
  { id: '19', src: '/Certificate/IMG-20260111-WA0108.jpg', alt: 'Certificate 19', title: 'Certificate 19', issuer: 'Institute', year: '2020' },
]

export default function CertificatesPage() {
  return (
    <div className="section">
      <div className="container max-w-6xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Certifications & Qualifications</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-semibold text-sm">{cert.title}</p>
                  <p className="text-white/80 text-xs">{cert.issuer} - {cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
