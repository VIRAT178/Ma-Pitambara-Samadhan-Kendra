'use client'
import Image from 'next/image'
import { useState } from 'react'

interface GalleryItem {
  id: string
  src: string
  alt: string
  title: string
  type: 'image' | 'video'
}

interface GalleryGridProps {
  items: GalleryItem[]
  title: string
}

export default function GalleryGrid({ items, title }: GalleryGridProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <div className="section">
      <div className="container max-w-6xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">{title}</h1>
        <p className="text-[color:var(--ink-muted)] mb-8 text-lg">
          Gallery showcasing Pandit Shubham's work, events, and consultations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative w-full aspect-square bg-gray-200 dark:bg-gray-800">
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-[color:var(--brand)]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4 bg-white dark:bg-gray-900">
                <p className="font-semibold text-[color:var(--ink)]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                className="w-full h-auto"
                autoPlay
              />
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-semibold">{selectedItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
