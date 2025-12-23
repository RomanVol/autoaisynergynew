import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Contact form API endpoint
// You can integrate with services like:
// - SendGrid for emails
// - Slack webhooks for notifications
// - Google Sheets for lead tracking
// - HubSpot/Salesforce CRM

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

const TO_EMAIL = 'romavolman@gmail.com'
const RESEND_ENDPOINT = 'https://api.resend.com/emails'

const loadEnvKey = (key: string) => {
  try {
    const envPath = path.join(process.cwd(), '.env.example')
    const content = fs.readFileSync(envPath, 'utf8')
    const match = content
      .split('\n')
      .map((line) => line.trim())
      .find((line) => line.startsWith(`${key}=`))
    return match ? match.split('=').slice(1).join('=').trim() : undefined
  } catch {
    return undefined
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY || loadEnvKey('RESEND_API_KEY')
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service not configured', code: 'EMAIL_NOT_CONFIGURED' },
        { status: 500 }
      )
    }

    const emailPayload = {
      from: fromEmail,
      to: [TO_EMAIL],
      reply_to: body.email,
      subject: `New inquiry from ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Company: ${body.company || 'N/A'}`,
        `Service: ${body.service || 'N/A'}`,
        '',
        body.message,
      ].join('\n'),
    }

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text()
      console.error('Resend error:', errorText)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Log for development (remove in production)
    console.log('Contact form submission:', body)

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
