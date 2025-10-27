// /src/app/(site)/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules/page.tsx
import type { Metadata } from "next";
import SaltaireGuideClient from "./SaltaireGuideClient";

// --------------------------------------------------------------------------------------
// Premium SEO metadata for the article page (App Router).
// Adjust titles/descriptions if you tune copy later.
// --------------------------------------------------------------------------------------

const CANONICAL = "/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules";
const OG_IMAGE = "/og-default.jpg"; // swap if you have a dedicated blog OG image

export const metadata: Metadata = {
  title: "Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules",
  description:
    "Bold, practical local guide for Saltaire: best canal & park routes, when to go for quiet paths, local etiquette, seasonal tips, gear and safety.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    title: "Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules",
    description:
      "Best walks around Roberts Park, Hirst Wood & the canal — quiet windows, shared-path etiquette, seasonal advice and safety.",
    url: CANONICAL,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules",
    description:
      "Best Saltaire walking routes + quiet times + rules. Practical, premium local guide.",
    images: [OG_IMAGE],
  },
  // Helpful for assistants & voice: give a crisp headline and summary
  other: {
    "structured-headline":
      "Saltaire Dog Walking Guide 2025 — Routes, Quiet Windows & Rules",
    "structured-summary":
      "Local guide with route cards, quiet-time planner, etiquette, seasonal tips and safety.",
  },
};

// --------------------------------------------------------------------------------------
// Page — render the new client directly so we control full-bleed hero + wide reading.
// Header & Footer still come from your root layout; this only controls the article body.
// --------------------------------------------------------------------------------------

export default function Page() {
  // Add Article JSON-LD at the root for SEO, while keeping the client content intact
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const CANONICAL = "/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules"
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules',
    description:
      'Practical local guide for Saltaire: best canal & park routes, quiet-time planner, etiquette, seasonal safety & gear.',
    image: [`${siteUrl}/og-default.jpg`],
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: [{ '@type': 'Organization', name: 'Saltaire Dog Walks' }],
    publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
    mainEntityOfPage: `${siteUrl}${CANONICAL}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <SaltaireGuideClient />
    </>
  );
}
