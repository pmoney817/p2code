import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter: max 5 requests per IP per hour
// ---------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  rateLimitMap.set(ip, timestamps);

  if (timestamps.length >= RATE_LIMIT_MAX) return true;

  timestamps.push(now);
  return false;
}

// ---------------------------------------------------------------------------
// Email format helper
// ---------------------------------------------------------------------------
function formatEmail(body: Record<string, string>): string {
  const { name, email, phone, service, budget, message } = body;
  return `
New contact form submission from P2Code

-------------------------------------------
Name:     ${name}
Email:    ${email}
Phone:    ${phone || "Not provided"}
Service:  ${service || "Not specified"}
Budget:   ${budget || "Not specified"}
-------------------------------------------

Message:

${message}
`.trim();
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean } | { error: string }>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limit
  const forwarded = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  const { name, email, phone, service, budget, message } = req.body ?? {};

  // Validate required fields
  if (!name || typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!email || typeof email !== "string" || !email.trim()) {
    return res.status(400).json({ error: "Email is required." });
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Message is required." });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  // Send via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL ?? email.trim();

    await resend.emails.send({
      from: "P2Code Contact <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Contact Form Submission from ${name.trim()}`,
      text: formatEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone ?? "",
        service: service ?? "",
        budget: budget ?? "",
        message: message.trim(),
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
}
