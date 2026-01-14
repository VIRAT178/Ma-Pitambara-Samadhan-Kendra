'use client'

import { useEffect, useState } from 'react'
import LogoutButton from '../../../../components/LogoutButton'

export default function DashboardPage() {
  const [stats, setStats] = useState({ total: 0, pending: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    fetch('/api/admin/submissions')
      .then(res => res.json())
      .then(data => {
        console.log('Dashboard data:', data)
        // API returns { ok: true, data: [...], total: 3 }
        if (data.data && Array.isArray(data.data)) {
          const total = data.data.length
          const pending = data.data.filter((s: any) => s.status === 'new' || !s.replied).length
          setStats({ total, pending })
        } else if (data.error) {
          setError(data.error)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching stats:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section className="section">
      <div className="container max-w-5xl">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-[color:var(--ink)] dark:text-[color:var(--ink)] mb-2">Admin Dashboard</h1>
          <p className="text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">Welcome to the administration panel</p>
          {error && (
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
              Error: {error}
            </div>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Stats Cards */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
            <h3 className="text-sm font-semibold text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] uppercase tracking-wide mb-2">Total Submissions</h3>
            <p className="text-4xl font-bold text-[color:var(--brand)] dark:text-[color:var(--accent)]">
              {loading ? '...' : stats.total}
            </p>
            <p className="text-xs text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mt-2">From contact forms</p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
            <h3 className="text-sm font-semibold text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] uppercase tracking-wide mb-2">Pending Replies</h3>
            <p className="text-4xl font-bold text-[color:var(--brand)] dark:text-[color:var(--accent)]">
              {loading ? '...' : stats.pending}
            </p>
            <p className="text-xs text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] mt-2">Messages to respond</p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
            <h3 className="text-sm font-semibold text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)] uppercase tracking-wide mb-2">System Status</h3>
            <p className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">✓ Online</p>
            <p className="text-xs text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">All services running</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-[color:var(--ink)] dark:text-[color:var(--ink)] mb-4">Quick Actions</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <a href="submissions" className="p-4 rounded-lg border border-[color:var(--brand)] dark:border-[color:var(--accent)] text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:bg-[color:var(--brand)]/5 dark:hover:bg-[color:var(--accent)]/5 transition text-center font-semibold">
              📊 View Submissions
            </a>
            <a href="emails" className="p-4 rounded-lg border border-[color:var(--brand)] dark:border-[color:var(--accent)] text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:bg-[color:var(--brand)]/5 dark:hover:bg-[color:var(--accent)]/5 transition text-center font-semibold">
              📧 View Emails
            </a>
            <a href="/" className="p-4 rounded-lg border border-[color:var(--brand)] dark:border-[color:var(--accent)] text-[color:var(--brand)] dark:text-[color:var(--accent)] hover:bg-[color:var(--brand)]/5 dark:hover:bg-[color:var(--accent)]/5 transition text-center font-semibold">
              🏠 Back to Home
            </a>
            <LogoutButton />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl bg-white dark:bg-gray-900 p-6 ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
          <h2 className="text-xl font-bold text-[color:var(--ink)] dark:text-[color:var(--ink)] mb-4">Database Info</h2>
          <div className="space-y-3 text-sm text-[color:var(--ink-muted)] dark:text-[color:var(--ink-muted)]">
            <p>📍 <strong>Database:</strong> MongoDB Atlas</p>
            <p>🔗 <strong>Connection:</strong> Active</p>
            <p>📝 <strong>Collections:</strong> Submissions, Emails</p>
            {mounted && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Last updated: {new Date().toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
