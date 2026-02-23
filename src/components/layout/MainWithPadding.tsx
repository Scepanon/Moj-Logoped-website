"use client";

import { usePathname } from "next/navigation";

const PAGES_WITH_HERO = ["/", "/o-nama", "/usluge", "/materijali", "/blog", "/kontakt"];

export function MainWithPadding({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasHero =
    PAGES_WITH_HERO.includes(pathname) ||
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/usluge/");

  return (
    <main className={`flex-1 ${hasHero ? "" : "pt-16 md:pt-20"}`}>
      {children}
    </main>
  );
}
