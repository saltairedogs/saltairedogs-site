// app/(site)/cat-sitting/shipley/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Cat Sitting in Shipley — Home Visits, Feeding, Litter & Photo Updates',
  description:
    'Local cat sitting in Shipley (BD18 area): calm home visits for feeding, fresh water, litter routine, comfort check-ins and simple photo updates. Shy-cat friendly and routine-led.',
  alternates: { canonical: 'https://www.saltairedogs.uk/cat-sitting/shipley' },
  openGraph: {
    title: 'Cat Sitting in Shipley — Calm Home Visits & Simple Updates',
    description:
      'Routine-led cat visits in Shipley: feeding, litter, comfort check-ins and optional photo updates. Clear communication, no fuss.',
    url: 'https://www.saltairedogs.uk/cat-sitting/shipley',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'

// ✅ Updated number
const NUMBER_DISPLAY = '07424 208127'
const NUMBER_E164 = '+447424208127'
const NUMBER_TEL = 'tel:+447424208127'

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function CatSittingShipleyPage() {
  const faqs = [
    {
      q: 'What does a typical cat sitting visit include?',
      a: 'Feeding and fresh water, litter routine, a calm check-in, and a quick note (with an optional photo) so you know everything’s fine. We follow your written instructions for quantities and timings.',
    },
    {
      q: 'Do you handle shy or nervous cats?',
      a: 'Yes. For shy cats we keep visits quiet and predictable — we won’t force interaction. The goal is routine and comfort, not stress.',
    },
    {
      q: 'How do keys work?',
      a: 'Keys are stored with a coded tag (no address on the keyring). Clear entry notes help us keep arrivals calm and consistent.',
    },
    {
      q: 'How do I book the fastest?',
      a: 'WhatsApp is quickest. Send your area (Shipley), dates, visit frequency, feeding/litter notes, and anything important (meds, indoor-only, hiding spots).',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Cat Sitting in Shipley — Home Visits, Feeding, Litter & Photo Updates',
        url: `${SITE_URL}/cat-sitting/shipley`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Cat Sitting', item: `${SITE_URL}/cat-sitting` },
          { '@type': 'ListItem', position: 3, name: 'Shipley', item: `${SITE_URL}/cat-sitting/shipley` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        telephone: NUMBER_E164,
        areaServed: ['Shipley', 'Saltaire', 'BD18', 'Bradford'],
      },
      {
        '@type': 'Service',
        name: 'Cat Sitting — Shipley',
        serviceType: 'Cat Sitting',
        areaServed: ['Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          url: SITE_URL,
          telephone: NUMBER_E164,
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${SITE_URL}/whatsapp`,
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
      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/cat-sitting">
              Cat sitting
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-800">
            Shipley
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:pt-14 sm:pb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Cat sitting in Shipley</h1>
        <p className="mt-3 text-slate-700">
          Calm, routine-led <b>home visits</b> for cats in Shipley — feeding, fresh water, litter routine and a simple
          update so you’re not worrying while you’re away.
        </p>

        {/* Fast contact row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link
            href="/whatsapp"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-center font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Message on WhatsApp
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-center font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Contact form
          </Link>

          <div className="flex items-center justify-center gap-4 text-sm text-slate-700">
            <a href={NUMBER_TEL} className="underline underline-offset-2">
              Call {NUMBER_DISPLAY}
            </a>
            <a href={EMAIL} className="underline underline-offset-2">
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">What a visit includes</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Feeding to your instructions + fresh water</li>
              <li>Litter routine (scoop/refresh as agreed)</li>
              <li>Comfort check-in (quiet presence, no forcing interaction)</li>
              <li>Quick message update (optional photo)</li>
              <li>Basic home-sense checks (windows/doors as you request)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Shipley coverage (practical)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Shipley centre / station-side areas</li>
              <li>Easy handovers for keys or meet-ups if preferred</li>
              <li>We keep timings predictable where possible (cats love routine)</li>
              <li>If you’re just outside Shipley, message and we’ll confirm</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Shy cats: no pressure approach</h2>
            <p className="mt-2 text-slate-700">
              Some cats don’t want attention from new people — that’s normal. We keep the visit calm and predictable:
              same cues, same routine, minimal noise. The goal is comfort and consistency.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Tip: leave notes on hiding spots, favourite treats (or no treats), and what “normal behaviour” looks like.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Keys &amp; entry (simple + safe)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Keys stored with a coded tag — no address on the ring</li>
              <li>Clear entry notes help keep arrivals calm and quick</li>
              <li>First visit can be a handover + walkthrough if you prefer</li>
            </ul>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-6 text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/cat-sitting">
            Cat sitting — overview
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/areas">
            Areas we cover
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/dog-walking/shipley">
            Dog walking in Shipley
          </Link>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Quick answers</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none font-medium text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA row */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/whatsapp"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Message on WhatsApp
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Contact form
          </Link>
          <a
            href={NUMBER_TEL}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Call {NUMBER_DISPLAY}
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Email
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
