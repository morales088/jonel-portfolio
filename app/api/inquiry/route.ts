import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: "johnneilmorales@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1e293b; margin-bottom: 4px;">New Inquiry from Portfolio</h2>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 24px;">Someone reached out via your portfolio contact form.</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 13px; width: 100px;">Name</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 13px;">Email</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; font-size: 14px;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; font-size: 13px;">Subject</td>
              <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${subject}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <p style="font-weight: 600; color: #475569; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry API error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
