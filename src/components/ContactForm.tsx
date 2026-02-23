"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type SubmitContactResult } from "@/app/kontakt/actions";

const inputBase =
  "w-full px-4 py-3 rounded-xl border focus:border-primary-400 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm";
const inputError = "border-red-400";
const inputNormal = "border-secondary-200";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-secondary-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center font-heading font-medium rounded-xl transition-all duration-200 px-8 py-4 text-lg bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-soft-sm hover:shadow-soft-md disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Šaljem…" : "Pošaljite poruku"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    async (_prev: SubmitContactResult, formData: FormData) => submitContact(formData),
    { ok: false } as SubmitContactResult
  );

  if (state.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="text-center py-12 px-6 bg-primary-50 rounded-2xl"
      >
        <div className="text-4xl mb-4" aria-hidden="true">
          ✅
        </div>
        <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-2">
          Hvala vam na poruci!
        </h3>
        <p className="text-secondary-500">
          Javićemo vam se u najkraćem mogućem roku.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.error && (
        <div
          id="form-error"
          role="alert"
          className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          {state.error}
        </div>
      )}
      <Field label="Ime i prezime" id="name" required>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-invalid={!!state.error}
          aria-describedby={state.error ? "form-error" : undefined}
          className={`${inputBase} ${state.error ? inputError : inputNormal}`}
          placeholder="Vaše ime i prezime"
        />
      </Field>

      <Field label="Email" id="email" required>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-invalid={!!state.error}
          aria-describedby={state.error ? "form-error" : undefined}
          className={`${inputBase} ${state.error ? inputError : inputNormal}`}
          placeholder="vas@email.com"
        />
      </Field>

      <Field label="Telefon" id="phone">
        <input
          type="tel"
          id="phone"
          name="phone"
          className={`${inputBase} ${inputNormal}`}
          placeholder="+382 67 ..."
        />
      </Field>

      <Field label="Poruka" id="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={!!state.error}
          aria-describedby={state.error ? "form-error" : undefined}
          className={`${inputBase} resize-y ${state.error ? inputError : inputNormal}`}
          placeholder="Kako vam možemo pomoći?"
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            aria-invalid={!!state.error}
            aria-describedby={state.error ? "form-error" : undefined}
            className="mt-1 w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-200"
          />
          <label htmlFor="consent" className="text-sm text-secondary-600 leading-relaxed">
            Prihvatam da se moji lični podaci obrađuju u svrhu odgovora na moju poruku, u skladu sa{" "}
            <a href="/privatnost" className="text-primary-600 hover:underline">
              politikom privatnosti
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}
