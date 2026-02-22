"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";

const SCROLL_THRESHOLD = 80;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // run on mount to handle refresh with scroll position
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isOverHero = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isOverHero
          ? "bg-transparent shadow-none"
          : "bg-white/95 backdrop-blur-md shadow-soft-sm"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — always visible; only wrapper styling changes */}
          <Link
            href="/"
            className={`flex items-center gap-3 shrink-0 transition-all duration-300 ${
              isOverHero
                ? "rounded-xl bg-white/90 backdrop-blur-sm px-2 py-1.5"
                : ""
            }`}
          >
            <span className="relative block w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Moj Logoped logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </span>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold leading-tight block text-secondary-900">
                Moj Logoped
              </span>
              <span
                className={`text-xs leading-none transition-colors duration-300 ${
                  isOverHero ? "text-secondary-500" : "text-secondary-400"
                }`}
              >
                Logopedski centar
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Glavna navigacija">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    isOverHero
                      ? "text-white/95 hover:text-white hover:bg-white/15"
                      : isActive
                        ? "text-primary-700 bg-primary-50"
                        : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className={`ml-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                isOverHero
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30"
                  : "bg-primary-500 text-white hover:bg-primary-600 shadow-soft-sm"
              }`}
            >
              Zakažite termin
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isOverHero
                ? "text-white hover:bg-white/15"
                : "text-secondary-600 hover:bg-secondary-50"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Zatvorite meni" : "Otvorite meni"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className={`lg:hidden pb-4 mt-1 transition-colors duration-300 ${
              isOverHero
                ? "border-t border-white/20"
                : "border-t border-secondary-100"
            }`}
            aria-label="Mobilna navigacija"
          >
            <div className="flex flex-col gap-1 pt-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isOverHero
                        ? "text-white hover:bg-white/15"
                        : isActive
                          ? "text-primary-700 bg-primary-50"
                          : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/kontakt"
                className={`mt-2 mx-4 px-5 py-3 text-sm font-semibold rounded-xl transition-colors text-center ${
                  isOverHero
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-primary-500 text-white hover:bg-primary-600 shadow-soft-sm"
                }`}
              >
                Zakažite termin
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
