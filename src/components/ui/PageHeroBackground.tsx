import { ReactNode } from "react";

/** Lightweight SVG blobs for hero background – palette colors, very low opacity */
function HeroBackgroundShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <svg
        className="absolute w-full h-full opacity-[0.28] md:opacity-[0.45]"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 400"
        fill="none"
      >
        {/* Soft amber blob – top right */}
        <ellipse cx="720" cy="80" rx="180" ry="120" fill="url(#hero-blob-amber)" />
        {/* Soft cream blob – bottom left */}
        <ellipse cx="100" cy="320" rx="200" ry="100" fill="url(#hero-blob-cream)" />
        {/* Teal accent – center */}
        <ellipse cx="400" cy="200" rx="220" ry="140" fill="url(#hero-blob-teal)" />
        <defs>
          <radialGradient id="hero-blob-amber" cx="50%" cy="50%" r="50%">
            <stop stopColor="#FFEFC2" stopOpacity="0.6" />
            <stop offset="1" stopColor="#FFEFC2" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-blob-cream" cx="50%" cy="50%" r="50%">
            <stop stopColor="#FFF8E7" stopOpacity="0.5" />
            <stop offset="1" stopColor="#FFF8E7" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-blob-teal" cx="50%" cy="50%" r="50%">
            <stop stopColor="#E8F4F4" stopOpacity="0.4" />
            <stop offset="1" stopColor="#E8F4F4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

interface PageHeroBackgroundProps {
  children: ReactNode;
  className?: string;
}

/** Reusable hero background with soft gradients and abstract shapes for inner pages */
export function PageHeroBackground({ children, className = "" }: PageHeroBackgroundProps) {
  return (
    <div
      className={`page-hero-bg relative overflow-hidden border-b border-primary-100/60 ${className}`}
    >
      <HeroBackgroundShapes />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
