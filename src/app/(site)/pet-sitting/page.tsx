// app/(site)/pet-sitting/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Pet Sitting in Saltaire & Shipley — Home Visits, Feeding, Routine Checks & Updates',
  description:
    'Pet sitting in Saltaire & Shipley (BD18): calm home visits for feeding, fresh water, routine checks and simple photo updates. Choose Saltaire or Shipley coverage and book fast.',
  alternates: { canonical: 'https://www.saltairedogs.uk/pet-sitting' },
  openGraph: {
    title: 'Pet Sitting in Saltaire & Shipley — Home Visits & Simple Updates',
    description:
      'Routine-led pet sitting in BD18: feeding, comfort checks and optional photo updates. Pick Saltaire or Shipley and book quickly.',
    url: 'https://www.saltairedogs.uk/pet-sitting',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function PetSittingHubPage() {
  const faqs = [
    {
      q: 'What is “pet sitting” on this site?',
      a: 'We provide calm, routine-led home visits: feeding and fresh water, basic checks, comfort time (as your pet allows), and a short update after each visit.',
    },
    {
      q: 'Do you cover both Saltaire and Shipley?',
      a: 'Yes. Use the location pages below to choose Saltaire (BD18) or Shipley coverage and see the practical notes for each area.',
    },
    {
      q: 'What pets do you cover?',
      a: 'Most requests are cats and small pets. We can also cover rabbits, birds/parrots, fish and some reptiles depending on routine details — message with what you need.',
    },
    {
      q: 'How do I book fastest?',
      a: 'Get in touch via our contact form or email with your area (Saltaire/Shipley), dates, visit frequency and any key notes (meds, indoor-only, hiding spots, entry instructions).',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Pet Sitting in Saltaire & Shipley — Home Visits, Feeding, Routine Checks & Updates',
        url: `${SITE_URL}/pet-sitting`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Pet Sitting', item: `${SITE_URL}/pet-sitting` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        email: 'saltairedogs@proton.me',
        areaServed: ['Saltaire', 'Shipley', 'BD18', 'Bradford'],
      },
      {
        '@type': 'ItemList',
        name: 'Pet sitting location pages',
        numberOfItems: 2,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Pet Sitting in Saltaire',
            url: `${SITE_URL}/pet-sitting/saltaire`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Pet Sitting in Shipley',
            url: `${SITE_URL}/pet-sitting/shipley`,
          },
        ],
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
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-800">
            Pet sitting
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-8 sm:pt-14">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pet sitting in Saltaire &amp; Shipley
        </h1>
        <p className="mt-3 max-w-prose text-slate-700">
          Calm, routine-led <b>home visits</b> in BD18 — feeding, fresh water, comfort check-ins and a simple update
          after each visit. Pick your area below for the most relevant details.
        </p>

        {/* Fast contact row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-center font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Contact form
          </Link>

          <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-center font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
            Email
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-14 space-y-10">
        {/* Location cards */}
        <section aria-labelledby="locations">
          <h2 id="locations" className="text-xl font-semibold tracking-tight">
            Choose your area
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/pet-sitting/saltaire"
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Pet sitting in Saltaire</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    BD18 home visits with routine-first care and simple updates. Helpful notes for village and canal-side
                    areas.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
                  BD18
                </span>
              </div>
              <div className="mt-4 text-sm font-medium underline underline-offset-2">
                View Saltaire page →
              </div>
            </Link>

            <Link
              href="/pet-sitting/shipley"
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:bg-slate-50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Pet sitting in Shipley</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Shipley home visits for feeding, checks and calm care. Practical notes for station-side areas and
                    simple key handovers.
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-700">
                  Shipley
                </span>
              </div>
              <div className="mt-4 text-sm font-medium underline underline-offset-2">
                View Shipley page →
              </div>
            </Link>
          </div>
        </section>

        {/* What we mean by pet sitting */}
        <section aria-labelledby="includes" className="rounded-xl border border-slate-200 p-6">
          <h2 id="includes" className="text-lg font-semibold">
            What a typical visit includes
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Feeding to your instructions + fresh water</li>
            <li>Routine checks (quiet, calm, predictable)</li>
            <li>Comfort time (as your pet allows — no forced interaction)</li>
            <li>Quick message update after each visit (optional photo)</li>
            <li>Basic home-sense checks if requested (doors/windows)</li>
          </ul>

          <p className="mt-3 text-sm text-slate-700">
            Need something more specific? See{' '}
            <Link href="/cat-sitting" className="underline underline-offset-2">
              cat sitting
            </Link>{' '}
            or{' '}
            <Link href="/animal-feeding" className="underline underline-offset-2">
              animal feeding
            </Link>
            .
          </p>
        </section>

        {/* Quick FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-xl font-semibold tracking-tight">
            Quick answers
          </h2>
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

        {/* Related links */}
        <section className="text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/areas">
            Areas we cover
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/medication-visits">
            Medication visits
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/dog-walking">
            Dog walking
          </Link>
        </section>

        {/* Final CTA */}
        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold">Book fast</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Get in touch with your area, dates, visit frequency, and any key notes (meds, indoor-only, entry
            instructions).
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Contact form
            </Link>
          </div>
        </section>
      </main>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
