import Link from "next/link";
import { Container } from "./Container";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroPlaceholderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  /** Optional meta line (e.g. category badge + date for blog posts) */
  meta?: React.ReactNode;
}

/**
 * Placeholder hero for inner pages – soft dark gradient for header contrast.
 * Use until final hero images are ready.
 */
export function PageHeroPlaceholder({
  title,
  subtitle,
  breadcrumbs,
  meta,
}: PageHeroPlaceholderProps) {
  return (
    <div className="relative min-h-[260px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[440px] overflow-hidden bg-gradient-to-br from-secondary-800 via-secondary-700 to-primary-900">
      {/* Soft pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[260px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[440px] py-10 sm:py-14 md:py-20">
        <Container>
          {breadcrumbs && (
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Početna
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-white font-medium">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {meta && <div className="mb-4">{meta}</div>}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm">
              {subtitle}
            </p>
          )}
        </Container>
      </div>
    </div>
  );
}
