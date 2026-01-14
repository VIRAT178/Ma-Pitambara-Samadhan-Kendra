import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getSubmissions } from '@/lib/storage'
import { connectToDatabase, ContactSubmission } from '@/lib/models'

// Create transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  try {
    const { to, subject, text, html, recipientName } = await req.json()

    // Validation
    if (!to || !subject || (!text && !html)) {
      return NextResponse.json(
        { message: 'Missing required fields: to, subject, and (text or html)' },
        { status: 400 }
      )
    }

    // Check SMTP configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email
    const mailOptions = {
      from: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
    }

    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent successfully:', {
      to,
      subject,
      messageId: info.messageId,
    })

    return NextResponse.json(
      {
        ok: true,
        message: 'Email sent successfully',
        messageId: info.messageId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { ok: false, message: 'Failed to send email', error: String(error) },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const type = url.searchParams.get('type') || 'emails'

    // Get client emails
    if (type === 'emails') {
      try {
        await connectToDatabase()
        const dbSubmissions = await ContactSubmission.find()
          .sort({ createdAt: -1 })
          .lean()

        return NextResponse.json({
          ok: true,
          data: dbSubmissions,
          total: dbSubmissions.length,
          source: 'mongodb',
        })
      } catch (dbError) {
        console.error('⚠️ MongoDB fetch failed, using fallback storage:', dbError)
        // Fallback to in-memory storage
        const submissions = getSubmissions()
        return NextResponse.json({
          ok: true,
          data: submissions.slice().reverse(),
          total: submissions.length,
          source: 'memory',
        })
      }
    }

    // Check email service configuration
    if (type === 'config') {
      const isConfigured =
        !!process.env.SMTP_USER &&
        !!process.env.SMTP_PASS &&
        !!process.env.SMTP_HOST

      return NextResponse.json(
        {
          ok: true,
          configured: isConfigured,
          message: isConfigured
            ? 'Email service is configured'
            : 'Email service is not configured',
        },
        { status: 200 }
      )
    }

    // Default: return both
    try {
      await connectToDatabase()
      const dbSubmissions = await ContactSubmission.find()
        .sort({ createdAt: -1 })
        .lean()

      const isConfigured =
        !!process.env.SMTP_USER &&
        !!process.env.SMTP_PASS &&
        !!process.env.SMTP_HOST

      return NextResponse.json({
        ok: true,
        emails: dbSubmissions,
        total: dbSubmissions.length,
        configured: isConfigured,
        source: 'mongodb',
      })
    } catch (dbError) {
      console.error('⚠️ MongoDB fetch failed, using fallback storage:', dbError)
      const submissions = getSubmissions()
      const isConfigured =
        !!process.env.SMTP_USER &&
        !!process.env.SMTP_PASS &&
        !!process.env.SMTP_HOST

      return NextResponse.json({
        ok: true,
        emails: submissions.slice().reverse(),
        total: submissions.length,
        configured: isConfigured,
        source: 'memory',
      })
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Error fetching emails' },
      { status: 500 }
    )
  }
}
