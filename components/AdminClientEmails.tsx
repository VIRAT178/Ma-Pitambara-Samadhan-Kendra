'use client'
import { useEffect, useState } from 'react'
import { Mail, Trash2, Archive, Eye, EyeOff } from 'lucide-react'

interface ClientEmail {
  _id?: string
  id?: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: 'new' | 'read' | 'replied' | 'archived' | 'contacted' | 'scheduled' | 'completed'
  createdAt: string
  updatedAt?: string
  __v?: number
}

export default function AdminClientEmails() {
  const [emails, setEmails] = useState<ClientEmail[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'archived' | 'contacted' | 'scheduled' | 'completed'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmail, setSelectedEmail] = useState<ClientEmail | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchEmails()
  }, [])

  async function fetchEmails() {
    try {
      const res = await fetch('/api/admin/submissions')
      const data = await res.json()
      setEmails(data.data || [])
    } catch (error) {
      console.error('Failed to fetch emails:', error)
    } finally {
      setLoading(false)
    }
  }

  async function updateEmailStatus(id: string, newStatus: string) {
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      })
      if (res.ok) {
        fetchEmails()
      }
    } catch (error) {
      console.error('Failed to update status:', error)
    }
  }

  async function deleteEmail(id: string) {
    if (confirm('Are you sure you want to delete this email?')) {
      try {
        const res = await fetch('/api/admin/submissions', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        })
        if (res.ok) {
          fetchEmails()
        } else {
          alert('Failed to delete email')
        }
      } catch (error) {
        console.error('Failed to delete email:', error)
        alert('Error deleting email')
      }
    }
  }

  const filteredEmails = emails.filter((email) => {
    const matchFilter =
      filter === 'all' || email.status === filter
    const matchSearch =
      email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.message.toLowerCase().includes(searchTerm.toLowerCase())
    return matchFilter && matchSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
      case 'read':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
      case 'replied':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
      case 'contacted':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100'
      case 'scheduled':
        return 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100'
      case 'completed':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
      case 'archived':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Client Emails
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage all messages from your clients
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search by name, email, or message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />

          <div className="flex flex-wrap gap-2">
            {(['all', 'new', 'read', 'replied', 'archived', 'contacted', 'scheduled', 'completed'] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    filter === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  {status !== 'all' && (
                    <span className="ml-2">
                      ({emails.filter((e) => e.status === status).length})
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Emails List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            Loading emails...
          </div>
        ) : filteredEmails.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No emails found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    From
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Service
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Message Preview
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Date
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Status
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmails.map((email) => (
                  <tr
                    key={email._id || email.id || email.email}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {email.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {email.email}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                      {email.service}
                    </td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                      <p className="line-clamp-2 text-sm">
                        {email.message.substring(0, 100)}...
                      </p>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                      {new Date(email.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          email.status
                        )}`}
                      >
                        {email.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedEmail(email)
                            setShowModal(true)
                          }}
                          className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded text-blue-600 dark:text-blue-400 transition"
                          title="View"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            updateEmailStatus(
                              email._id || email.id || '',
                              email.status === 'read' ? 'new' : 'read'
                            )
                          }
                          className="p-2 hover:bg-yellow-100 dark:hover:bg-yellow-900 rounded text-yellow-600 dark:text-yellow-400 transition"
                          title="Toggle read"
                        >
                          <EyeOff className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() =>
                            updateEmailStatus(
                              email._id || email.id || '',
                              email.status === 'archived'
                                ? 'new'
                                : 'archived'
                            )
                          }
                          className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900 rounded text-orange-600 dark:text-orange-400 transition"
                          title="Archive"
                        >
                          <Archive className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteEmail(email._id || email.id || '')}
                          className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded text-red-600 dark:text-red-400 transition"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Email Detail Modal */}
      {showModal && selectedEmail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gray-100 dark:bg-gray-700 p-6 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Email Details
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  FROM
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {selectedEmail.name}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedEmail.email}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    PHONE
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    {selectedEmail.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    SERVICE
                  </p>
                  <p className="text-gray-900 dark:text-white">
                    {selectedEmail.service}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  DATE
                </p>
                <p className="text-gray-900 dark:text-white">
                  {new Date(selectedEmail.createdAt).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  MESSAGE
                </p>
                <p className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-gray-900 dark:text-white whitespace-pre-wrap">
                  {selectedEmail.message}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 border-t border-gray-300 dark:border-gray-600 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  updateEmailStatus(selectedEmail._id || selectedEmail.id || '', 'replied')
                  setShowModal(false)
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Mark as Replied
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
