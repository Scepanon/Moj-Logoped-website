"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// TODO: Hook in error logging (e.g. Sentry) when ready

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("Error boundary caught:", error);
    }
  }, [error]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20">
      <Container className="text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold text-secondary-900 mb-4">
          Nešto nije u redu
        </h1>
        <p className="text-secondary-500 text-lg mb-8 max-w-md mx-auto">
          Došlo je do greške. Pokušajte ponovo ili se vratite na početnu stranicu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center font-heading font-medium rounded-xl px-8 py-4 text-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
          >
            Pokušaj ponovo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-heading font-medium rounded-xl px-8 py-4 text-lg border-2 border-primary-500 text-primary-700 hover:bg-primary-50 transition-colors"
          >
            Vrati se na početnu
          </Link>
        </div>
      </Container>
    </main>
  );
}
