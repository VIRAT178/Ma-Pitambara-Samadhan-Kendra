'use client'
import { useState } from 'react'

interface EmailLog {
  id: string
  to: string
  subject: string
  sentAt: string
  status: 'sent' | 'failed'
}

export default function AdminEmailManager() {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState('')
  const [htmlContent, setHtmlContent] = useState('')
  const [textContent, setTextContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [emailLogs, setEmailLogs] = useState<EmailLog[]>([])
  const [showLogs, setShowLogs] = useState(false)
  const [useHtml, setUseHtml] = useState(false)

  async function handleSendEmail(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/admin/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to,
          subject,
          text: !useHtml ? textContent : undefined,
          html: useHtml ? htmlContent : undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('✓ Email sent successfully!')
        // Log the email
        const newLog: EmailLog = {
          id: Date.now().toString(),
          to,
          subject,
          sentAt: new Date().toLocaleString(),
          status: 'sent',
        }
        setEmailLogs([newLog, ...emailLogs])
        // Clear form
        setTo('')
        setSubject('')
        setTextContent('')
        setHtmlContent('')
      } else {
        setMessage(`✗ Error: ${data.message}`)
      }
    } catch (error) {
      setMessage(`✗ Failed to send email: ${String(error)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Send Email Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Send Email
        </h2>

        <form onSubmit={handleSendEmail} className="space-y-4">
          {/* Recipient Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Recipient Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="recipient@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Email subject"
            />
          </div>

          {/* Content Type Toggle */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                checked={!useHtml}
                onChange={() => setUseHtml(false)}
                className="w-4 h-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                Plain Text
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                checked={useHtml}
                onChange={() => setUseHtml(true)}
                className="w-4 h-4"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">
                HTML
              </span>
            </label>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {useHtml ? 'HTML Content' : 'Message'} <span className="text-red-500">*</span>
            </label>
            <textarea
              value={useHtml ? htmlContent : textContent}
              onChange={(e) =>
                useHtml
                  ? setHtmlContent(e.target.value)
                  : setTextContent(e.target.value)
              }
              required
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder={
                useHtml
                  ? '<h1>Hello</h1><p>Your message here</p>'
                  : 'Your message here...'
              }
            />
            {useHtml && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Enter valid HTML content
              </p>
            )}
          </div>

          {/* Status Message */}
          {message && (
            <div
              className={`p-3 rounded-lg text-sm font-medium ${
                message.startsWith('✓')
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
              }`}
            >
              {message}
            </div>
          )}

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            {loading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </div>

      {/* Email Logs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Email History
          </h2>
          <button
            onClick={() => setShowLogs(!showLogs)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm font-medium"
          >
            {showLogs ? 'Hide' : 'Show'}
          </button>
        </div>

        {showLogs && (
          <div className="overflow-x-auto">
            {emailLogs.length > 0 ? (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      To
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      Subject
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      Sent At
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emailLogs.map((log) => (
                    <tr
                      key={log.id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                        {log.to}
                      </td>
                      <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                        {log.subject}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-xs">
                        {log.sentAt}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center py-8 text-gray-500 dark:text-gray-400">
                No emails sent yet
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
