import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { connectToDatabase, ContactSubmission } from '../../../lib/models'
import { addSubmission } from '../../../lib/storage'

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  message: z.string().min(10).max(2000),
  service: z.string().optional(),
})

// Email configuration from .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = ContactSchema.safeParse(json)
    
    if (!parsed.success) {
      const errors = parsed.error.flatten();
      const errorMessages = Object.entries(errors.fieldErrors)
        .map(([field, msgs]) => `${field}: ${msgs?.join(', ')}`)
        .join('; ');
      return NextResponse.json(
        { ok: false, message: `Invalid form data - ${errorMessages}`, issues: errors },
        { status: 400 }
      )
    }

    const { name, email, phone, message, service } = parsed.data
    const serviceType = service || 'General Consultation'

    // 1. Save to MongoDB
    try {
      await connectToDatabase()
      const submission = await ContactSubmission.create({
        name,
        email,
        phone,
        message,
        service: serviceType,
        status: 'new',
      })
      console.log('✅ Saved to MongoDB:', submission._id)
    } catch (dbError) {
      console.error('⚠️ MongoDB save failed, using fallback storage:', dbError)
      // Fallback to in-memory storage
      addSubmission({
        id: Date.now().toString(),
        name,
        email,
        phone,
        message,
        service: serviceType,
        status: 'new',
        createdAt: new Date().toISOString(),
      })
    }

    // 2. Send confirmation email to user
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Consultation Request Received - Maa Pitambara Samadhan Kendra',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f59e0b;">🙏 Thank you for reaching out, ${name}!</h2>
            <p>Your consultation request has been received. Pandit Shubham Sharma will contact you soon.</p>
            <hr style="border: 1px solid #f59e0b;">
            <h3>Your Details:</h3>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
            <hr style="border: 1px solid #f59e0b;">
            <p>Contact us directly at:</p>
            <p><strong>Phone:</strong> +91 9522748858</p>
            <p><strong>Email:</strong> mapitambarasamadhan@gmail.com</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/919522748858">Chat now</a></p>
            <p>Blessings,<br><strong>Maa Pitambara Samadhan Kendra</strong></p>
          </div>
        `,
      })
      console.log('✅ Confirmation email sent to user:', email)
    } catch (emailError) {
      console.error('⚠️ Failed to send user email:', emailError)
      // Don't fail the request if email fails
    }

    // 3. Send notification email to admin
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `🔔 New Consultation Request - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif;">
            <h2 style="color: #f59e0b;">New Consultation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px;">${message}</p>
            <hr>
            <p><em>Received at: ${new Date().toLocaleString('en-IN')}</em></p>
          </div>
        `,
      })
      console.log('✅ Notification email sent to admin')
    } catch (emailError) {
      console.error('⚠️ Failed to send admin email:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      ok: true, 
      message: 'Thank you! We have received your request and will contact you soon.' 
    }, { status: 200 })
    
  } catch (e: any) {
    console.error('❌ Contact form error:', e)
    return NextResponse.json(
      { ok: false, message: 'Failed to send message. Please try again.' }, 
      { status: 500 }
    )
  }
}
