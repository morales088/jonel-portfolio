import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getAndClearQuestions } from "@/lib/questionLogger";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const questions = await getAndClearQuestions();

  if (questions.length === 0) {
    return NextResponse.json({ message: "No questions today." });
  }

  const dateLabel = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Manila",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const rows = questions
    .map(
      ({ question, timestamp }, i) => {
        const time = new Date(timestamp).toLocaleTimeString("en-US", {
          timeZone: "Asia/Manila",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        return `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#64748b;font-size:13px;white-space:nowrap;">${i + 1}</td>
          <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#64748b;font-size:13px;white-space:nowrap;">${time}</td>
          <td style="padding:10px 12px;border:1px solid #e2e8f0;color:#1e293b;font-size:14px;">${question}</td>
        </tr>`;
      }
    )
    .join("");

  await resend.emails.send({
    from: "Portfolio AI <onboarding@resend.dev>",
    to: "johnneilmorales@gmail.com",
    subject: `[Portfolio] ${questions.length} AI question${questions.length > 1 ? "s" : ""} asked — ${dateLabel}`,
    html: `
      <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:24px;">
        <h2 style="color:#1e293b;margin-bottom:4px;">Daily AI Chat Summary</h2>
        <p style="color:#64748b;font-size:14px;margin-bottom:24px;">
          ${questions.length} question${questions.length > 1 ? "s were" : " was"} asked on your portfolio today (${dateLabel}).
        </p>

        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;color:#475569;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">#</th>
              <th style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;color:#475569;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Time (PHT)</th>
              <th style="padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;text-align:left;color:#475569;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Question</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>

        <p style="color:#94a3b8;font-size:12px;margin-top:24px;">
          This is an automated daily digest from your portfolio AI chat.
        </p>
      </div>
    `,
  });

  return NextResponse.json({ success: true, count: questions.length });
}
