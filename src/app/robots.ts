import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // TODO: Add disallow for /admin or other private paths when multi-tenant/admin is introduced
    },
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
