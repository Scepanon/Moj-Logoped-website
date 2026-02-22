"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ime je obavezno.";
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Unesite validnu email adresu.";
    }
    if (!formData.message.trim()) newErrors.message = "Poruka je obavezna.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Hook up to a real backend or form service (e.g. Formspree, EmailJS, API route)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-primary-50 rounded-2xl">
        <div className="text-4xl mb-4" aria-hidden="true">✅</div>
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1.5">
          Ime i prezime <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.name ? "border-red-400" : "border-secondary-200"
          } focus:border-primary-400 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm`}
          placeholder="Vaše ime i prezime"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.email ? "border-red-400" : "border-secondary-200"
          } focus:border-primary-400 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm`}
          placeholder="vas@email.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1.5">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm"
          placeholder="+382 67 ..."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1.5">
          Poruka <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message ? "border-red-400" : "border-secondary-200"
          } focus:border-primary-400 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm resize-y`}
          placeholder="Kako vam možemo pomoći?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Pošaljite poruku
      </Button>
    </form>
  );
}
