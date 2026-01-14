'use client'
import { useEffect, useState } from 'react'

type Submission = {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'archived'
  createdAt: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('new')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  async function fetchSubmissions() {
    try {
      const res = await fetch('/api/admin/submissions')
      const data = await res.json()
      setSubmissions(data.data || [])
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  async function updateStatus(id: string, newStatus: string) {
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      if (res.ok) {
        fetchSubmissions()
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  const filtered = submissions.filter((s) => s.status === filter)

  return (
    <div className="min-h-screen bg-[color:var(--bg)] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[color:var(--brand)] mb-2">Consultation Requests</h1>
          <p className="text-[color:var(--ink-muted)]">Manage incoming consultation requests</p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['new', 'contacted', 'scheduled', 'completed', 'archived'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full font-semibold transition capitalize ${
                filter === status
                  ? 'bg-[color:var(--brand)] text-white'
                  : 'bg-white text-[color:var(--brand)] border border-[color:var(--brand)]'
              }`}
            >
              {status} ({submissions.filter((s) => s.status === status).length})
            </button>
          ))}
        </div>

        {/* Submissions table */}
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-[color:var(--ink-muted)]">
            No submissions with status "{filter}"
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-[color:var(--brand)] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Message</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub, idx) => (
                  <tr key={sub.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-semibold">{sub.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-[color:var(--brand)]/10 text-[color:var(--brand)] px-3 py-1 rounded-full text-xs font-semibold">
                        {sub.service}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a href={`mailto:${sub.email}`} className="text-[color:var(--brand)] hover:underline">
                        {sub.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a href={`tel:${sub.phone}`} className="text-[color:var(--brand)] hover:underline">
                        {sub.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm max-w-xs truncate">{sub.message}</td>
                    <td className="px-6 py-4">
                      <select
                        value={sub.status}
                        onChange={(e) => updateStatus(sub.id, e.target.value)}
                        className="px-3 py-1 rounded border border-gray-300 text-sm"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                        <option value="archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`https://wa.me/${sub.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm"
                      >
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
