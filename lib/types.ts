// Type definitions for Pandit Subham ji website

export type Service = {
  title: string
  icon: string
  description: string
  benefits: string[]
  duration?: string
}

export type ContactFormData = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export type ContactSubmission = ContactFormData & {
  id: string
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'archived'
  createdAt: Date
  updatedAt?: Date
}

export type ApiResponse<T = any> = {
  ok: boolean
  message?: string
  data?: T
  issues?: any
}

export type Testimonial = {
  name: string
  location: string
  message: string
  initials: string
  rating?: number
}

export type ServiceDetail = {
  title: string
  icon: string
  description: string
  benefits: string[]
  duration?: string
  bgGradient?: string
  ctaText?: string
}

// Form validation types
export type FormErrors = Partial<Record<keyof ContactFormData, string>>

export type FormStatus = 'idle' | 'loading' | 'success' | 'error'

// Admin types
export type SubmissionFilter = 'new' | 'contacted' | 'scheduled' | 'completed' | 'archived'

export type DashboardStats = {
  total: number
  new: number
  contacted: number
  scheduled: number
  completed: number
  archived: number
}
