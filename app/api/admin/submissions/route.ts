import { NextResponse } from 'next/server'
import { getSubmissions, submissions } from '../../../../lib/storage'
import { connectToDatabase, ContactSubmission } from '../../../../lib/models'

export async function GET(req: Request) {
  try {
    // Try to fetch from MongoDB first
    try {
      await connectToDatabase()
      const dbSubmissions = await ContactSubmission.find()
        .sort({ createdAt: -1 })
        .lean()
      
      return NextResponse.json({
        ok: true,
        data: dbSubmissions,
        total: dbSubmissions.length,
        source: 'mongodb'
      })
    } catch (dbError) {
      console.error('⚠️ MongoDB fetch failed, using fallback storage:', dbError)
      // Fallback to in-memory storage
      const submissions = getSubmissions()
      return NextResponse.json({
        ok: true,
        data: submissions.slice().reverse(),
        total: submissions.length,
        source: 'memory'
      })
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const submission = await req.json()
    const id = Date.now().toString()
    
    const newSubmission = {
      id,
      ...submission,
      status: 'new',
      createdAt: new Date(),
    }
    
    submissions.unshift(newSubmission)
    
    return NextResponse.json({
      ok: true,
      message: 'Submission saved',
      data: newSubmission
    })
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Failed to save submission' },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json()
    
    // Try MongoDB first
    try {
      await connectToDatabase()
      const submission = await ContactSubmission.findByIdAndUpdate(
        id,
        { status, updatedAt: new Date() },
        { new: true }
      )
      
      if (!submission) {
        return NextResponse.json(
          { ok: false, message: 'Submission not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json({
        ok: true,
        data: submission
      })
    } catch (dbError) {
      console.error('⚠️ MongoDB update failed, using fallback storage:', dbError)
      // Fallback to in-memory storage
      const submission = submissions.find((s) => s.id === id)
      if (!submission) {
        return NextResponse.json(
          { ok: false, message: 'Submission not found' },
          { status: 404 }
        )
      }
      
      submission.status = status
      submission.updatedAt = new Date().toISOString()
      
      return NextResponse.json({
        ok: true,
        data: submission
      })
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    
    // Try MongoDB first
    try {
      await connectToDatabase()
      const submission = await ContactSubmission.findByIdAndDelete(id)
      
      if (!submission) {
        return NextResponse.json(
          { ok: false, message: 'Submission not found' },
          { status: 404 }
        )
      }
      
      return NextResponse.json({
        ok: true,
        message: 'Submission deleted successfully',
        data: submission
      })
    } catch (dbError) {
      console.error('⚠️ MongoDB delete failed, using fallback storage:', dbError)
      // Fallback to in-memory storage
      const index = submissions.findIndex((s) => s.id === id)
      if (index === -1) {
        return NextResponse.json(
          { ok: false, message: 'Submission not found' },
          { status: 404 }
        )
      }
      
      const deleted = submissions.splice(index, 1)[0]
      
      return NextResponse.json({
        ok: true,
        message: 'Submission deleted successfully',
        data: deleted
      })
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}
