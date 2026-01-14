'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Submission = {
  _id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: string
  createdAt: string
  updatedAt: string
}

export default function SubmissionsPage() {
  const router = useRouter()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted'>('all')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions')
      const data = await res.json()
      
      if (data.ok && data.data) {
        setSubmissions(data.data)
      } else {
        setError('Failed to load submissions')
      }
      setLoading(false)
    } catch (err) {
      setError('Error loading submissions')
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      })
      
      if (res.ok) {
        fetchSubmissions() // Refresh list
      }
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const filteredSubmissions = submissions.filter(s => {
    if (filter === 'all') return true
    return s.status === filter
  })

  if (loading) {
    return (
      <section className="section">
        <div className="container max-w-6xl">
          <p className="text-center text-[color:var(--ink-muted)]">Loading submissions...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-4xl font-bold text-[color:var(--ink)] dark:text-[color:var(--ink)] mb-2">
              Contact Submissions
            </h1>
            <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">
              Total: {submissions.length} submissions
            </p>
          </div>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 rounded-lg border border-[color:var(--brand)] dark:border-[color:var(--accent)] text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:bg-[color:var(--brand)]/5 dark:hover:bg-[color:var(--accent)]/5 transition font-semibold"
          >
            ← Back
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-[color:var(--brand)] dark:bg-[color:var(--accent)] text-white dark:text-gray-900'
                : 'bg-white dark:bg-gray-900 text-[color:var(--ink)] dark:text-[color:var(--ink)] ring-1 ring-black/5 dark:ring-white/10'
            }`}
          >
            All ({submissions.length})
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'new'
                ? 'bg-[color:var(--brand)] dark:bg-[color:var(--accent)] text-white dark:text-gray-900'
                : 'bg-white dark:bg-gray-900 text-[color:var(--ink)] dark:text-[color:var(--ink)] ring-1 ring-black/5 dark:ring-white/10'
            }`}
          >
            New ({submissions.filter(s => s.status === 'new').length})
          </button>
          <button
            onClick={() => setFilter('contacted')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'contacted'
                ? 'bg-[color:var(--brand)] dark:bg-[color:var(--accent)] text-white dark:text-gray-900'
                : 'bg-white dark:bg-gray-900 text-[color:var(--ink)] dark:text-[color:var(--ink)] ring-1 ring-black/5 dark:ring-white/10'
            }`}
          >
            Contacted ({submissions.filter(s => s.status === 'contacted').length})
          </button>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
              <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">
                No submissions found
              </p>
            </div>
          ) : (
            filteredSubmissions.map(submission => (
              <div
                key={submission._id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[color:var(--ink)] dark:text-[color:var(--ink)] mb-1">
                      {submission.name}
                    </h3>
                    <p className="text-sm text-[color:var(--brand)] dark:text-[color:var(--accent)] font-semibold">
                      {submission.service}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      submission.status === 'new'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    }`}
                  >
                    {submission.status}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mb-1">
                      📧 Email
                    </p>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:underline"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mb-1">
                      📞 Phone
                    </p>
                    <a
                      href={`tel:${submission.phone}`}
                      className="text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:underline"
                    >
                      {submission.phone}
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mb-1">
                    💬 Message
                  </p>
                  <p className="text-[color:var(--ink)] dark:text-[color:var(--ink)] whitespace-pre-wrap">
                    {submission.message}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10">
                  <p className="text-xs text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">
                    Submitted: {new Date(submission.createdAt).toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    {submission.status === 'new' && (
                      <button
                        onClick={() => updateStatus(submission._id, 'contacted')}
                        className="px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition text-sm font-semibold"
                      >
                        Mark as Contacted
                      </button>
                    )}
                    {submission.status === 'contacted' && (
                      <button
                        onClick={() => updateStatus(submission._id, 'new')}
                        className="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition text-sm font-semibold"
                      >
                        Mark as New
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
