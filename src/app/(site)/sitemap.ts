// src/app/(site)/sitemap.ts
import type { MetadataRoute } from 'next'

// Public site URL (set in Vercel env)
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.saltairedogs.uk'

// Load routes discovered by scripts/list-next-routes.mjs
let STATIC_ROUTES: string[] = ['/']
try {
  // routes.json is written at repo root by the script.
  // From src/app/(site)/sitemap.ts we need to go up 3 levels.
  // project-root/routes.json
  //            ^^^
  // src/app/(site)/sitemap.ts -> ../../../routes.json
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const data = require('../../../routes.json')
  if (Array.isArray(data?.staticRoutes) && data.staticRoutes.length) {
    STATIC_ROUTES = data.staticRoutes
  }
} catch {
  // Fallback (curated) if routes.json isn't present yet
  STATIC_ROUTES = [
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
    '/whatsapp',
  ]
}

// Exclusions: dynamic & utility pages
const EXCLUDE = new Set<string>([
  '/search',       // utility page
  '/blog/[slug]',  // dynamic route
])

function changeFreq(path: string): MetadataRoute.Sitemap[number]['changeFrequency'] {
  if (path === '/' || path.startsWith('/blog')) return 'weekly'
  if (path.startsWith('/legal')) return 'yearly'
  return 'monthly'
}

function priority(path: string): number {
  if (path === '/') return 1.0
  if (path === '/contact') return 0.9
  if (path === '/blog') return 0.7
  if (path.startsWith('/blog/')) return 0.6
  if (path.startsWith('/legal')) return 0.4
  return 0.8
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return STATIC_ROUTES
    .filter((p) => !EXCLUDE.has(p))
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: changeFreq(path),
      priority: priority(path),
    }))
}
