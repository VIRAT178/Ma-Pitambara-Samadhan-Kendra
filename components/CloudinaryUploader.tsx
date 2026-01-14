'use client'
import { CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react'
import Image from 'next/image'

interface UploadedFile {
  public_id: string
  secure_url: string
  resource_type: string
  width: number
  height: number
  display_name: string
}

export default function CloudinaryUploader() {
  const [uploads, setUploads] = useState<UploadedFile[]>([])
  const [loading, setLoading] = useState(false)

  const handleUploadSuccess = (result: any) => {
    const uploadedFile: UploadedFile = {
      public_id: result.event?.public_id || result.info.public_id,
      secure_url: result.event?.secure_url || result.info.secure_url,
      resource_type: result.event?.resource_type || result.info.resource_type,
      width: result.event?.width || result.info.width || 0,
      height: result.event?.height || result.info.height || 0,
      display_name: result.event?.display_name || result.info.display_name || 'Untitled',
    }

    setUploads((prev) => [uploadedFile, ...prev])
  }

  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-6">Upload Media to Cloudinary</h1>

        {/* Upload Widget */}
        <div className="mb-12 p-8 bg-gradient-to-r from-[color:var(--brand)]/10 to-[color:var(--accent)]/10 rounded-lg border-2 border-dashed border-[color:var(--brand)]">
          <CldUploadWidget
            uploadPreset="pandit_gallery" // You'll need to create this in Cloudinary
            onSuccess={handleUploadSuccess}
            options={{
              folder: 'pandit-shubham',
              resourceType: 'auto',
              multiple: true,
              maxFileSize: 50000000, // 50MB
              clientAllowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm', 'avi'],
              sources: ['local', 'url', 'camera'],
              styles: {
                palette: {
                  window: '#ffffff',
                  windowBorder: '#90C695',
                  tabIcon: '#000000',
                  menuIcons: '#5A616A',
                  textDark: '#000000',
                  textLight: '#FFFFFF',
                  link: '#0078FF',
                  action: '#FF620D',
                  inProgress: '#0078FF',
                  complete: '#20B373',
                  error: '#FF620D',
                  inWidget: '#FFFFFF',
                },
                fonts: {
                  default: null,
                  '"Droid Sans", sans-serif': {
                    url: 'https://fonts.googleapis.com/css?family=Droid+Sans',
                    active: true,
                  },
                },
              },
            }}
          >
            {({ open }) => (
              <button
                onClick={() => open()}
                className="w-full px-6 py-4 bg-[color:var(--brand)] text-white font-semibold rounded-lg hover:bg-[color:var(--brand)]/90 transition flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Click to Upload Images & Videos
              </button>
            )}
          </CldUploadWidget>
        </div>

        {/* Uploaded Files List */}
        {uploads.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Uploaded Files ({uploads.length})</h2>

            {/* Code to Copy */}
            <div className="mb-8 p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
              <p className="text-sm text-gray-400 mb-2">Copy this code to your page:</p>
              <pre className="text-xs">
                {`const galleryItems = [
${uploads
  .map(
    (file, i) => `
  {
    id: '${i + 1}',
    public_id: '${file.public_id}',
    alt: 'Description here',
    title: '${file.display_name}',
    type: '${file.resource_type === 'video' ? 'video' : 'image'}',
  },`
  )
  .join('')}
]`}
              </pre>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploads.map((file) => (
                <div
                  key={file.public_id}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-800"
                >
                  {file.resource_type === 'video' ? (
                    <div className="relative w-full aspect-video bg-gray-800 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-square">
                      <Image
                        src={file.secure_url}
                        alt={file.display_name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-4 bg-white dark:bg-gray-900">
                    <p className="font-semibold text-sm line-clamp-2">{file.display_name}</p>
                    <p className="text-xs text-gray-500 mt-2">{file.resource_type}</p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(file.public_id)
                      }}
                      className="mt-3 w-full px-2 py-1 bg-[color:var(--brand)] text-white text-xs rounded hover:bg-[color:var(--brand)]/90 transition"
                    >
                      Copy Public ID
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {uploads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[color:var(--ink-muted)]">No files uploaded yet. Start by clicking the upload button above!</p>
          </div>
        )}
      </div>
    </div>
  )
}
