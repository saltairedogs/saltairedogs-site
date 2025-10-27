// src/app/(site)/blog/dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { RelatedPosts } from '@/components/blog/related-posts'
import {
  MapPin,
  Clock,
  ArrowLeft,
  Droplets,
  Bone,
  Umbrella,
  Sun,
  PawPrint,
  Building2,
  CheckCircle2,
} from 'lucide-react'
// JSON-LD is injected with plain <script> tags in-body; no Script component needed

export const metadata: Metadata = {
  title:
    'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal | Saltaire Dog Walks Blog',
  description:
    'Our favourite dog-friendly cafés and pubs close to the canal and Roberts Park—water bowls, outdoor seating and calm, friendly vibes after a good walk.',
  openGraph: {
    title:
      'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal',
    description:
      'A curated, local-first shortlist of dog-friendly stops near the canal and Roberts Park—plus etiquette, busy times and comfort tips.',
    type: 'article',
    url: '/blog/dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal',
    images: ['/poodle-brown.png'],
  },
  alternates: { canonical: '/blog/dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal' },
}

/* -------------------------------------------------------------------------- */
/* Content (edit names/policies any time)                                     */
/* -------------------------------------------------------------------------- */

type Spot = {
  name: string
  kind: 'Café' | 'Pub' | 'Kiosk'
  area: string
  distanceMinsOnFoot: number
  water: boolean
  treats: boolean
  coveredOutdoor: boolean
  shadeNearby: boolean
  indoorPolicy: 'outdoor-only' | 'dogs-welcome' | 'varies'
  busyHint: string
  notes?: string
}

const SPOTS: Spot[] = [
  {
    name: 'Canal-Edge Kiosk (Roberts Park Side)',
    kind: 'Kiosk',
    area: 'Roberts Park / Hirst Lock',
    distanceMinsOnFoot: 4,
    water: true,
    treats: false,
    coveredOutdoor: false,
    shadeNearby: true,
    indoorPolicy: 'outdoor-only',
    busyHint: 'Sunny weekends, match days, and school holidays peak late morning.',
    notes: 'Fast drinks/ice-cream; plenty of benches. Keep dogs clear of cycle lines on the bridge.',
  },
  {
    name: 'Victoria Road Corner Café',
    kind: 'Café',
    area: 'Saltaire Village (near canal bridge)',
    distanceMinsOnFoot: 3,
    water: true,
    treats: true,
    coveredOutdoor: true,
    shadeNearby: true,
    indoorPolicy: 'varies',
    busyHint: 'Brunch rush 10:30–13:00; quieter late afternoon.',
    notes: 'Staff are usually dog-positive outdoors; indoor space at discretion—ask first.',
  },
  {
    name: 'Riverside Pub Terrace',
    kind: 'Pub',
    area: 'Canal / River junction',
    distanceMinsOnFoot: 6,
    water: true,
    treats: false,
    coveredOutdoor: true,
    shadeNearby: true,
    indoorPolicy: 'dogs-welcome',
    busyHint: 'After-work pints (Thu–Sat) and sunny evenings.',
    notes: 'Great terrace outlook; choose quieter perimeter tables for nervous dogs.',
  },
  {
    name: 'Park Pavilion Coffee Window',
    kind: 'Café',
    area: 'Roberts Park',
    distanceMinsOnFoot: 5,
    water: true,
    treats: false,
    coveredOutdoor: false,
    shadeNearby: true,
    indoorPolicy: 'outdoor-only',
    busyHint: 'Peak around junior sports and lunchtime in fair weather.',
    notes: 'Grassy shade within 30 seconds—ideal decompression spot after queuing.',
  },
  {
    name: 'High-Street Espresso (Upper Village)',
    kind: 'Café',
    area: 'Upper Saltaire streets',
    distanceMinsOnFoot: 8,
    water: true,
    treats: true,
    coveredOutdoor: true,
    shadeNearby: false,
    indoorPolicy: 'varies',
    busyHint: 'Commuter mornings (08:00–09:30).',
    notes: 'Compact frontage; sit slightly off the doorway to keep aisles clear.',
  },
  {
    name: 'Stone Bridge Tap',
    kind: 'Pub',
    area: 'Near canal bridge',
    distanceMinsOnFoot: 2,
    water: true,
    treats: false,
    coveredOutdoor: false,
    shadeNearby: false,
    indoorPolicy: 'dogs-welcome',
    busyHint: 'Evenings and sport fixtures.',
    notes: 'Indoor policy friendly—still bring a mat and tuck under table to avoid trip lines.',
  },
]

/* -------------------------------------------------------------------------- */

const post = {
  slug: 'dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal',
  title: 'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal',
  excerpt:
    'Where to find water bowls, shaded seating and friendly staff after a good walk—plus etiquette and busy-time tips.',
  coverImage: { src: '/poodle-brown.png', alt: 'Dog friendly icon' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 7,
  category: 'Local Spots',
  tags: ['cafes', 'pubs', 'dog friendly', 'Roberts Park', 'towpath'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

/* --------------------------------- Page ---------------------------------- */

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: metadata.description,
    image: [`${siteUrl}${post.coverImage.src}`],
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: [{ '@type': 'Organization', name: post.author.name }],
    publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }

  const jsonLdItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SPOTS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Place', name: s.name, address: s.area },
    })),
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do cafés and pubs allow dogs inside?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Policies vary by venue and can change with staff/season. Many welcome dogs outdoors; check at the door for indoor seating guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is it quietest after a walk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Weekdays before 10:30 and late afternoons are typically calmer than weekend brunch or sunny early evenings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is water provided?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most dog-friendly spots put bowls out in fair weather; carry a collapsible bowl as a backup, especially on hot days.',
        },
      },
    ],
  }

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* JSON-LD (invisible, SEO structured data) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Lead intro */}
      <p className="text-lg text-muted-foreground">
        Finished a canal loop or a run around Roberts Park and fancy a drink? Here’s a local-first shortlist of{' '}
        <strong>dog-friendly</strong> cafés and pubs within a 2–8 minute walk—plus quick etiquette and comfort tips so
        your dog can settle well at the table.
      </p>

      {/* Etiquette callout */}
      <div
        role="note"
        aria-label="Etiquette note"
        className="my-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-900"
      >
        <strong className="font-semibold">Etiquette:</strong> keep leads short indoors, pick quieter corners, and avoid
        greetings with on-lead dogs unless invited. A small mat helps dogs switch to “settle mode”.
      </div>

      {/* Figure (optional ambience) */}
      <figure className="mt-8 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-56 w-full sm:h-72">
          <Image
            src="/saltaire-canal-retriever-on-lead-cobbles.jpg"
            alt="Canal towpath near Roberts Park—two minutes from post-walk coffee"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Canal and park access make Saltaire ideal for calm post-walk stops—choose shaded seating on warm days.
        </figcaption>
      </figure>

      {/* How we scored */}
      <section aria-labelledby="how" className="mt-12">
        <h2 id="how">How we chose these</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Water/outdoor seating within a few minutes of towpath or park gates</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Calm table options (corners, terraces) for easy “settle” training</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Friendly staff track record; clear signage or consistent guidance</li>
          <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> Short, safe walk from the canal—minimal road crossings</li>
        </ul>
        <p className="mt-2 text-xs text-muted-foreground">
          Policies can change—please check signs or ask staff on the day, and be considerate to other guests.
        </p>
      </section>

      {/* Shortlist grid */}
      <section aria-labelledby="shortlist" className="mt-12">
        <h2 id="shortlist">Saltaire shortlist (near the canal)</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {SPOTS.map((s) => (
            <article key={s.name} className="rounded-2xl border border-border bg-white p-5">
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{s.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {s.area}</span>
                    <span className="mx-2 text-border">•</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {s.distanceMinsOnFoot} min walk</span>
                  </p>
                </div>
                <span className="rounded-full border border-border px-2 py-1 text-xs">{s.kind}</span>
              </header>

              <div className="mt-4 flex flex-wrap gap-2">
                <AmenityPill icon={<Droplets className="h-3.5 w-3.5" />} on label="Water bowls" active={s.water} />
                <AmenityPill icon={<Bone className="h-3.5 w-3.5" />} on label="Treats" active={s.treats} />
                <AmenityPill icon={<Umbrella className="h-3.5 w-3.5" />} on label="Covered outdoor" active={s.coveredOutdoor} />
                <AmenityPill icon={<Sun className="h-3.5 w-3.5" />} on label="Shade nearby" active={s.shadeNearby} />
                <AmenityPill icon={<Building2 className="h-3.5 w-3.5" />} on label={policyLabel(s.indoorPolicy)} active={s.indoorPolicy !== 'outdoor-only'} />
                <AmenityPill icon={<PawPrint className="h-3.5 w-3.5" />} on label="Calm seating options" active />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                <strong>Busy times:</strong> {s.busyHint}
              </p>
              {s.notes && <p className="mt-1 text-sm text-muted-foreground">{s.notes}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* Comfort & training tips */}
      <section aria-labelledby="comfort" className="mt-12">
        <h2 id="comfort">Comfort tips (so your dog can settle)</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Bring a small travel mat—place it under the table foot to create a clear “settle zone”.</li>
          <li>Short lead indoors; long line only for quiet terraces with space and no food traffic.</li>
          <li>Pick the shadiest corner on warm days; carry water even if bowls are out.</li>
          <li>Skip busy times if you’re training calm settles—aim for weekdays or later afternoons.</li>
        </ul>
      </section>

      {/* Soft CTA */}
      <section aria-labelledby="cta" className="mt-14">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10"
          style={{
            background:
              'radial-gradient(1000px 600px at 10% 10%, rgba(200,155,60,0.18), transparent 60%), linear-gradient(135deg, #131415 0%, #1C1E20 100%)',
          }}
        >
          <div className="relative mx-auto max-w-3xl">
            <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Want post-walk spots matched to your route?
            </h2>
            <p className="mt-2 text-white/85">
              Tell us your usual loop and we’ll suggest quiet-time cafés and pub terraces that suit your dog’s pace and
              temperament.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=dog-friendly-saltaire"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book a meet &amp; greet
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                See services
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • GPS &amp; photos • Calm handling</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </article>
  )
}

/* -------------------------------- Helpers -------------------------------- */

function AmenityPill({
  icon,
  label,
  active = false,
  on = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  on?: boolean
}) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium',
        active ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-border bg-white text-muted-foreground',
      ].join(' ')}
    >
      {icon}
      {label}
      {on ? null : null}
    </span>
  )
}

function policyLabel(p: Spot['indoorPolicy']) {
  switch (p) {
    case 'dogs-welcome':
      return 'Indoors OK'
    case 'varies':
      return 'Indoors (ask)'
    default:
      return 'Outdoor only'
  }
}
