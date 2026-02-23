"use server";

import { siteConfig } from "@/config/siteConfig";
import { sendContactMessage } from "@/lib/contactService";

export interface SubmitContactResult {
  ok: boolean;
  error?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(formData: FormData): Promise<SubmitContactResult> {
  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const message = (formData.get("message") as string)?.trim() ?? "";
  const consent = formData.get("consent") === "on";

  if (!name) return { ok: false, error: "Ime je obavezno." };
  if (!email) return { ok: false, error: "Email je obavezan." };
  if (!EMAIL_REGEX.test(email)) return { ok: false, error: "Unesite validnu email adresu." };
  if (!message) return { ok: false, error: "Poruka je obavezna." };
  if (!consent)
    return { ok: false, error: "Morate prihvatiti obradu ličnih podataka da biste poslali poruku." };

  const result = await sendContactMessage(siteConfig, { name, email, phone, message });
  return result;
}
