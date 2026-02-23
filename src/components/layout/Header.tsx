"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/data/navigation";

const SCROLL_THRESHOLD = 150;

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

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      closeMenu();
    },
    [pathname, closeMenu],
  );

  const pagesWithHeroImage = ["/o-nama", "/usluge", "/materijali", "/blog", "/kontakt"];
  const isPageWithHero =
    pagesWithHeroImage.includes(pathname) ||
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/usluge/");
  const isOverHero = (isHome || isPageWithHero) && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isOverHero
          ? "shadow-none"
          : ""
      }`}
    >
      {/* Solid background layer — drops in when scrolled */}
      <div
        className={`absolute inset-0 bg-white/95 backdrop-blur-md shadow-soft-sm transition-opacity duration-200 ease-out ${
          isOverHero
            ? "opacity-0 pointer-events-none"
            : "opacity-100 header-drop-in"
        }`}
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — icon only, no text; direct on header with subtle shadow */}
          <Link
            href="/"
            className={`flex items-center shrink-0 transition-all duration-300 ${
              isOverHero
                ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
            }`}
          >
            <Image
              src="/images/logo_proper.png"
              alt="Moj Logoped"
              width={80}
              height={80}
              className="w-14 h-14 md:w-[5rem] md:h-[5rem] object-contain"
              priority
            />
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

        {/* Mobile nav — overlay + panel */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 top-16 md:top-20 left-0 right-0 bottom-0 z-40 lg:hidden bg-black/25"
              onClick={closeMenu}
              aria-hidden="true"
            />
            <div
              className="fixed top-[4.5rem] md:top-20 left-4 right-4 z-50 lg:hidden rounded-2xl bg-white/95 backdrop-blur-md border border-secondary-100 shadow-soft-lg overflow-hidden"
            >
              <nav
                className="py-3"
                aria-label="Mobilna navigacija"
              >
                <div className="flex flex-col divide-y divide-secondary-100">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`px-5 py-3.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "text-primary-700 bg-primary-50"
                            : "text-secondary-700 hover:bg-secondary-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="py-2" aria-hidden="true" />
                  <Link
                    href="/kontakt"
                    onClick={(e) => handleNavClick(e, "/kontakt")}
                    className="mx-4 mt-1 mb-3 px-5 py-3.5 text-sm font-semibold rounded-xl bg-primary-500 text-white hover:bg-primary-600 shadow-soft-sm text-center transition-colors"
                  >
                    Zakažite termin
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </Container>
    </header>
  );
}
