import Link from "next/link";
import { Container } from "./Container";
import { PageHeroBackground } from "./PageHeroBackground";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <PageHeroBackground className="py-14 md:py-20">
      <Container>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-secondary-400">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Početna
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-secondary-700 font-medium">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary-600 transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-900 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-secondary-500 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Container>
    </PageHeroBackground>
  );
}
