// MongoDB Schema
import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, default: 'General Consultation' },
  message: { type: String, required: true },
  status: { type: String, default: 'new' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const ContactSubmission = mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', contactSchema)

// MongoDB connection helper
let isConnected = false

export async function connectToDatabase() {
  if (isConnected) {
    return
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_URL || '')
    isConnected = db.connections[0].readyState === 1
    console.log('✅ MongoDB connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

