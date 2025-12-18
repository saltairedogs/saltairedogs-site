// app/(site)/cat-sitting/page.tsx
// Cat Sitting & Home Drop-ins — hub (Saltaire + Shipley)
// Goals:
// - Rank for “cat sitting saltaire/shipley”, “cat sitter BD18”, “cat home visits” queries
// - Funnel users into the correct local page (Saltaire vs Shipley)
// - Convert with WhatsApp/Call above the fold
// - Strong structured data: WebPage + BreadcrumbList + ItemList + Service + FAQPage

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'error'

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'
const UPDATED = '2025-12-18'

// Put your generated hero in /public/images/hero/cat-sitting-hero.jpg
const HERO_IMAGE = '/images/hero/cat-sitting-hero.jpg'

const NUMBER_DISPLAY = '07424 208127'
const NUMBER_TEL = 'tel:+447424208127'
const PHONE_E164 = '+44 7424 208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

const LOCATIONS = [
  {
    title: 'Cat sitting in Saltaire (BD18)',
    desc: 'Home visits in Saltaire: feeding, water, litter routine, calm check-ins and simple updates.',
    href: '/cat-sitting/saltaire',
    bullets: ['BD18 coverage', 'Shy-cat friendly', 'Routine-led visits'],
    keywords: ['cat sitting saltaire', 'cat sitter saltaire', 'cat home visits saltaire'],
  },
  {
    title: 'Cat sitting in Shipley',
    desc: 'Home visits in Shipley: feeding, water, litter routine, comfort checks and optional photo updates.',
    href: '/cat-sitting/shipley',
    bullets: ['Shipley centre & station-side', 'AM/PM options', 'Clear updates'],
    keywords: ['cat sitting shipley', 'cat sitter shipley', 'cat home visits shipley'],
  },
] as const

export const metadata: Metadata = {
  title: 'Cat Sitting in Saltaire & Shipley — Home Visits, Feeding, Litter & Updates',
  description:
    'Cat sitting and home drop-ins in Saltaire (BD18) and Shipley: feeding, fresh water, litter routine, calm check-ins and a short update each visit. Choose your area to see local details.',
  alternates: { canonical: `${SITE_URL}/cat-sitting` },
  openGraph: {
    title: 'Cat Sitting — Saltaire & Shipley | Home Drop-ins & Simple Updates',
    description:
      'Routine-led cat visits: feeding, water, litter and calm check-ins, plus brief updates. Pick Saltaire or Shipley for local details.',
    url: `${SITE_URL}/cat-sitting`,
    siteName: BUSINESS_NAME,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 2400,
        height: 1350,
        alt: 'Cat sitting home visit in a calm UK home (Saltaire & Shipley)',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  robots: { index: true, follow: true },
  keywords: [
    'cat sitting saltaire',
    'cat sitting shipley',
    'cat sitter bd18',
    'cat home visits',
    'holiday cat sitting saltaire',
    'holiday cat sitting shipley',
    'litter feeding visits',
  ],
}

export default function CatSittingPage() {
  const faqs = [
    {
      q: 'Do you cover Saltaire and Shipley?',
      a: 'Yes. Choose your area on this page to see the local details and the quickest way to book.',
    },
    {
      q: 'Do you do AM and PM visits?',
      a: 'Yes. You can choose once daily, twice daily (AM + PM), or another schedule that suits your cat (subject to availability).',
    },
    {
      q: 'Do you send updates?',
      a: 'Yes — a brief note after each visit, with an optional photo.',
    },
    {
      q: 'Can you do quick extras like plants or bins?',
      a: 'Yes, quick extras are fine if requested in advance (plants, bins, basic mail check).',
    },
    {
      q: 'How are keys handled?',
      a: 'Keys are tagged with a code only — no address on the ring. Clear entry notes help keep arrivals calm and consistent.',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Cat Sitting in Saltaire & Shipley — Home Visits, Feeding, Litter & Updates',
        url: `${SITE_URL}/cat-sitting`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
        dateModified: UPDATED,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Cat Sitting', item: `${SITE_URL}/cat-sitting` },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Cat sitting areas',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 2,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Cat sitting in Saltaire (BD18)', url: `${SITE_URL}/cat-sitting/saltaire` },
          { '@type': 'ListItem', position: 2, name: 'Cat sitting in Shipley', url: `${SITE_URL}/cat-sitting/shipley` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        telephone: PHONE_E164,
        areaServed: ['Saltaire', 'Shipley', 'BD18', 'Bradford'],
      },
      {
        '@type': 'Service',
        name: 'Cat Sitting & Home Drop-ins',
        serviceType: 'Cat Sitting / Home Visits',
        areaServed: ['Saltaire', 'Shipley', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          url: SITE_URL,
          telephone: PHONE_E164,
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: `${SITE_URL}/whatsapp`,
          telephone: PHONE_E164,
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-800">
            Cat sitting
          </li>
        </ol>
      </nav>

      {/* Full-width HERO image with overlay content */}
      <header className="relative mt-4 border-y border-black/10 bg-black">
        <div className="relative h-[420px] sm:h-[520px]">
          <Image
            src={HERO_IMAGE}
            alt="Cat sitting home visit: topping up fresh water on a rainy day in a calm UK home"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl px-4">
              <div className="w-full self-end pb-8 sm:pb-12">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  <span className="font-medium">Updated</span>
                  <span className="text-white/70">{UPDATED}</span>
                  <span className="text-white/40">•</span>
                  <span>Saltaire • Shipley</span>
                </div>

                <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Cat sitting &amp; home drop-ins — Saltaire &amp; Shipley
                </h1>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
                  Feeding to your routine, fresh water, litter scoop and a quick tidy. Play or a brush if your cat wants it.
                  We send a short photo note after each visit.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="/whatsapp"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Message on WhatsApp
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Contact form
                  </Link>

                  <a
                    href={NUMBER_TEL}
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Call {NUMBER_DISPLAY}
                  </a>

                  <a
                    href={EMAIL}
                    className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Email
                  </a>
                </div>

                <p className="mt-3 text-xs text-white/75">
                  Quick booking tip: message your area (Saltaire/Shipley) + dates + once/twice daily visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Location jump cards */}
        <section aria-labelledby="choose-area">
          <h2 id="choose-area" className="text-2xl font-bold tracking-tight">
            Choose your area
          </h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Use the local page that matches your area — they’re tuned for “cat sitting Saltaire” and “cat sitting Shipley”
            searches and include the practical details people ask about.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {LOCATIONS.map((l) => (
              <article key={l.href} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{l.desc}</p>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {l.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {l.keywords.slice(0, 3).map((k) => (
                    <span
                      key={k}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-700"
                    >
                      {k}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <Link
                    href={l.href}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                  >
                    View details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* What’s included + Visit options */}
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold">What’s included</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Feeding as instructed (type/amount)</li>
              <li>Fresh water top-up</li>
              <li>Litter scoop and quick tidy</li>
              <li>Calm comfort check-in (no forcing interaction)</li>
              <li>Brief update after each visit (optional photo)</li>
              <li>Medication visits if needed (as provided + confirmed)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold">Visit options</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Once daily</li>
              <li>Twice daily (AM + PM)</li>
              <li>Every other day (owner choice)</li>
              <li>Typical windows: morning / midday / late afternoon</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              For availability + a simple quote, message your area + dates + visit frequency.
            </p>
          </div>
        </section>

        {/* Routine + safety */}
        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold">Shy cats &amp; “door dashers”</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>
                <span className="font-medium">Shy/nervous cats:</span> quiet entry, minimal pressure, routine first
              </li>
              <li>
                <span className="font-medium">Indoor-only:</span> careful door/window routine to prevent escapes
              </li>
              <li>
                <span className="font-medium">Senior cats:</span> slow approach, gentle checks, clear notes back to you
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold">Your routine, followed</h2>
            <p className="mt-2 text-slate-700">
              You provide the steps (feed type/amount, litter notes, play/brush preferences, key/alarm info, and any “don’t-open”
              rules). We confirm anything unclear before the first visit.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Keys tagged with a code only (no address on the ring)</li>
              <li>Quick extras on request: plants/bins/basic mail check</li>
              <li>Clear communication: short messages, plain English</li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <div className="mt-8 text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/areas">
            Areas we cover
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/animal-feeding">
            Animal feeding
          </Link>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight">Quick answers</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA row */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/whatsapp"
            className="inline-flex items-center justify-center rounded-xl bg-[#131415] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Message on WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Contact form
          </Link>
          <a
            href={NUMBER_TEL}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Call {NUMBER_DISPLAY}
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Email
          </a>
        </div>
      </main>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
