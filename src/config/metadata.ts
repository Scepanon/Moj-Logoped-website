import type { Metadata } from "next";
import type { SiteConfig } from "./siteConfig";

/**
 * Build root metadata from siteConfig. Use when reusing for another clinic.
 */
export function buildSiteMetadata(config: SiteConfig): Metadata {
  return {
    title: {
      default: config.seo.defaultTitle,
      template: `%s | ${config.seo.siteName}`,
    },
    description: config.seo.defaultDescription,
    keywords: config.seo.keywords,
    openGraph: {
      type: "website",
      locale: config.seo.locale,
      siteName: config.seo.siteName,
      url: config.baseUrl,
    },
    alternates: {
      canonical: config.baseUrl,
    },
  };
}

/**
 * Build page-level metadata with optional overrides. Use for individual pages.
 */
export function buildPageMetadata(
  config: SiteConfig,
  overrides: { title: string; description: string; path?: string }
): Metadata {
  const url = overrides.path ? `${config.baseUrl}${overrides.path}` : config.baseUrl;
  return {
    title: overrides.title,
    description: overrides.description,
    openGraph: {
      type: "website",
      locale: config.seo.locale,
      siteName: config.seo.siteName,
      url,
      title: overrides.title,
      description: overrides.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
