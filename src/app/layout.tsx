import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // TODO: Replace with final SEO metadata
  title: {
    default: "Moj Logoped – Logopedski centar Podgorica",
    template: "%s | Moj Logoped",
  },
  description:
    "Logopedski centar u Podgorici. Logopedska terapija za djecu, procjena govorno-jezičkog razvoja, savjetovanje za roditelje. Zakažite termin već danas.",
  keywords: [
    "logoped",
    "logoped Podgorica",
    "logopedski centar",
    "govorna terapija",
    "logopedska procjena",
    "razvoj govora",
  ],
  openGraph: {
    type: "website",
    locale: "sr_Latn_ME",
    siteName: "Moj Logoped",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn-ME" className={`${inter.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
