import type { SiteConfig } from "@/config/siteConfig";

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface SendResult {
  ok: boolean;
  error?: string;
}

/**
 * Send contact message to the clinic. Swap implementation for Resend, Nodemailer, etc.
 * TODO: Integrate with email provider (Resend, Nodemailer, SendGrid) when ready.
 */
export async function sendContactMessage(
  config: SiteConfig,
  payload: ContactPayload
): Promise<SendResult> {
  // Stub: log and simulate success. Replace with actual email sending.
  // Example with Resend: await resend.emails.send({ from: "...", to: config.primaryContactEmail, ... })
  if (process.env.NODE_ENV === "development") {
    console.log("[contactService] Would send to:", config.primaryContactEmail, payload);
  }
  return { ok: true };
}
