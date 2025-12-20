import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Send to a CRM
    // 4. Send a Slack notification

    // Example: Send to a webhook (replace with your actual webhook)
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     text: `New inquiry from ${body.name}`,
    //     attachments: [{
    //       fields: [
    //         { title: 'Name', value: body.name, short: true },
    //         { title: 'Email', value: body.email, short: true },
    //         { title: 'Company', value: body.company || 'N/A', short: true },
    //         { title: 'Service', value: body.service || 'N/A', short: true },
    //         { title: 'Message', value: body.message },
    //       ]
    //     }]
    //   })
    // })

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
