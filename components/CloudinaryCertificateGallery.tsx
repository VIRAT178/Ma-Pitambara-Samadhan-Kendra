'use client'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

interface CloudinaryCertificate {
  id: string
  public_id: string // Cloudinary public ID
  alt: string
  title: string
  issuer: string
  year: string
}

interface CloudinaryCertificateGalleryProps {
  certificates: CloudinaryCertificate[]
  title: string
}

export default function CloudinaryCertificateGallery({
  certificates,
  title,
}: CloudinaryCertificateGalleryProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<CloudinaryCertificate | null>(null)

  return (
    <div className="section">
      <div className="container max-w-6xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">{title}</h1>
        <p className="text-[color:var(--ink-muted)] mb-8 text-lg">
          Certifications and qualifications that validate Pandit Shubham's expertise and credentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800"
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="relative w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <CldImage
                  src={cert.public_id}
                  alt={cert.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-semibold text-sm">{cert.title}</p>
                    <p className="text-white/80 text-xs">
                      {cert.issuer} - {cert.year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900">
                <h3 className="font-semibold text-[color:var(--ink)] line-clamp-2">{cert.title}</h3>
                <p className="text-sm text-[color:var(--ink-muted)] mt-1">{cert.issuer}</p>
                <p className="text-xs text-[color:var(--brand)] mt-1">Year: {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <CldImage
              src={selectedCertificate.public_id}
              alt={selectedCertificate.alt}
              width={800}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <p className="text-white font-semibold">{selectedCertificate.title}</p>
              <p className="text-white/80 text-sm">
                {selectedCertificate.issuer} - {selectedCertificate.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
