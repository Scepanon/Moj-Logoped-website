import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MainWithPadding } from "@/components/layout/MainWithPadding";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { siteConfig } from "@/config/siteConfig";
import { buildSiteMetadata } from "@/config/metadata";

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

export const metadata = buildSiteMetadata(siteConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn-ME" className={`${inter.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <MainWithPadding>{children}</MainWithPadding>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
