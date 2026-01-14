import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { username, password } = body

    // Get credentials from env
    const envUsername = process.env.ADMIN_USERNAME || 'admin'
    const envPassword = process.env.ADMIN_PASSWORD

    // Debug logging
    console.log('Login attempt:', { username, envUsername, passwordMatch: password === envPassword })

    if (!envPassword) {
      return NextResponse.json(
        { message: 'Admin credentials not configured' },
        { status: 500 }
      )
    }

    // Validate credentials - trim to handle whitespace
    if (username.trim() !== envUsername.trim() || password.trim() !== envPassword.trim()) {
      console.log('Credentials mismatch:', {
        inputUsername: username.trim(),
        envUsername: envUsername.trim(),
        inputPassword: password.trim(),
        envPassword: envPassword.trim()
      })
      return NextResponse.json(
        { message: 'Invalid username or password' },
        { status: 401 }
      )
    }

    // Generate a simple token (in production, use JWT)
    const token = Buffer.from(`${username}:${password}`).toString('base64')

    return NextResponse.json(
      { token, message: 'Login successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'An error occurred' },
      { status: 500 }
    )
  }
}
