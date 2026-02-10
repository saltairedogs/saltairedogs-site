// src/app/(site)/sitemap.ts
import type { MetadataRoute } from 'next'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.saltairedogs.uk'

// Static routes from your app tree (exclude /search and dynamic /blog/[slug])
const ROUTES: string[] = [
  '/',
  '/about',
  '/animal-feeding',
  '/areas',
  '/blog',
  '/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags',
  '/blog/choosing-right-dog-harness',
  '/blog/dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal',
  '/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
  '/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
  '/blog/off-lead-rules-around-saltaire-bradford-whats-allowed-and-where',
  '/blog/perfect-recall-training-guide',
  '/blog/puppy-first-walk-checklist',
  '/blog/puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring',
  '/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear',
  '/blog/roberts-park-dog-walks-safe-routes-off-lead-areas-and-parking-tips',
  '/blog/roberts-park-perfect-dog-walk',
  '/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules',
  '/blog/summer-heat-safety-dogs',
  '/blog/weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes',
  '/cat-sitting',
  '/contact',
  '/dog-walking',
  '/dog-walking/saltaire',
  '/dog-walking/shipley',
  '/how-it-works',
  '/legal/cookies',
  '/legal/privacy',
  '/legal/terms',
  '/long-shift-support',
  '/medication-visits',
  '/new-baby-help',
  '/parrots-visits',
  '/rabbits-sitting',
  '/small-pets-exotics',
]

// exclude utility/dynamic routes defensively (in case they slip in)
const EXCLUDE = new Set<string>(['/search', '/blog/[slug]'])

function changeFreq(p: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (p === '/' || p.startsWith('/blog')) return 'weekly'
  if (p.startsWith('/legal')) return 'yearly'
  return 'monthly'
}

function priority(p: string): number {
  if (p === '/') return 1.0
  if (p === '/contact') return 0.9
  if (p === '/blog') return 0.7
  if (p.startsWith('/blog/')) return 0.6
  if (p.startsWith('/legal')) return 0.4
  return 0.8
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.filter((p) => !EXCLUDE.has(p)).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: changeFreq(path),
    priority: priority(path),
  }))
}
