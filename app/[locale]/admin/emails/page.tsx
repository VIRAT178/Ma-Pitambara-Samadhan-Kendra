import AdminClientEmails from '@/components/AdminClientEmails'

export const metadata = {
  title: 'Admin - Client Emails',
  description: 'View and manage all client emails and messages',
}

export default function AdminEmailsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <AdminClientEmails />
      </div>
    </div>
  )
}
