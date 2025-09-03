// api/contact.js
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, phone, subject, message, inquiryType } = req.body

    // Validate required fields
    if (!name || !email || !company || !subject || !message || !inquiryType) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'E-Sunrise Australia <onboarding@resend.dev>',
      to: ['ci_re@foxmail.com'], // Use your verified email for now
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #374151;">Name:</strong> ${name}</p>
            <p><strong style="color: #374151;">Email:</strong> ${email}</p>
            <p><strong style="color: #374151;">Company:</strong> ${company}</p>
            <p><strong style="color: #374151;">Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong style="color: #374151;">Inquiry Type:</strong> ${inquiryType}</p>
            <p><strong style="color: #374151;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
            <p>This message was sent from the contact form on dflm.com.au</p>
            <p>Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ message: 'Failed to send email' })
    }

    res.status(200).json({ message: 'Message sent successfully', data })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ message: 'Failed to send message' })
  }
} 