import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upload Media | Admin',
  description: 'Admin upload page',
  robots: 'noindex',
}

export default function AdminUploadPage() {
  return (
    <div className="section">
      <div className="container max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl mb-6">Upload Media</h1>
        <p className="text-gray-600 dark:text-gray-400">Upload functionality coming soon</p>
      </div>
    </div>
  )
}
