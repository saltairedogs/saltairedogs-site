// app/(site)/cat-sitting/saltaire/page.tsx
// Cat Sitting — Saltaire (server-rendered, CWV-friendly)
// Goals:
// - Rank for “cat sitting saltaire / cat sitter saltaire / BD18” + long-tail home visit intent
// - Convert with contact form/email above the fold
// - Clear, routine-led value prop (shy-cat friendly, calm check-ins)
// - Structured data: WebPage + BreadcrumbList + LocalBusiness + Service + FAQPage

import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'error'

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'
const UPDATED = '2025-12-18'

const EMAIL = 'mailto:saltairedogs@proton.me'

export const metadata: Metadata = {
  title: 'Cat Sitting in Saltaire (BD18) — Home Visits, Feeding, Litter & Calm Updates',
  description:
    'Local cat sitting in Saltaire (BD18): calm home visits for feeding, fresh water, litter routine, comfort check-ins and simple updates. Shy-cat friendly, routine-led, clear communication.',
  alternates: { canonical: `${SITE_URL}/cat-sitting/saltaire` },
  openGraph: {
    title: 'Cat Sitting in Saltaire — Calm Home Visits & Simple Updates',
    description:
      'Routine-led cat visits in Saltaire: feeding, litter, comfort check-ins and optional photo updates. Quiet, consistent approach for shy cats.',
    url: `${SITE_URL}/cat-sitting/saltaire`,
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

export default function CatSittingSaltairePage() {
  const faqs = [
    {
      q: 'What does a typical cat sitting visit include?',
      a: 'Feeding and fresh water, litter routine, a calm check-in, and a quick note (with an optional photo) so you know everything’s fine. We follow your written instructions for quantities and timings.',
    },
    {
      q: 'Do you handle shy, nervous or indoor-only cats?',
      a: 'Yes. For shy cats we keep visits quiet and predictable — we won’t force interaction. For indoor-only cats we follow your door and window routine carefully to avoid escapes.',
    },
    {
      q: 'Can you do morning and evening visits?',
      a: 'Often, yes — it depends on the week and location. Send your dates and preferred times via our contact form and you’ll get a clear yes/no.',
    },
    {
      q: 'How do keys work?',
      a: 'Keys are stored with a coded tag (no address on the keyring). Clear entry notes help us keep arrivals calm and consistent.',
    },
    {
      q: 'What’s the fastest way to book?',
      a: 'Use our contact form or email. Send: Saltaire + dates + visit frequency + feeding/litter notes + anything important (meds, indoor-only, hiding spots).',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Cat Sitting in Saltaire (BD18) — Home Visits, Feeding, Litter & Calm Updates',
        url: `${SITE_URL}/cat-sitting/saltaire`,
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
          { '@type': 'ListItem', position: 3, name: 'Saltaire', item: `${SITE_URL}/cat-sitting/saltaire` },
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
        '@type': 'Service',
        name: 'Cat Sitting — Saltaire',
        serviceType: 'Cat Sitting',
        areaServed: ['Saltaire', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          url: SITE_URL,
          email: 'saltairedogs@proton.me',
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${SITE_URL}/contact`,
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
            Saltaire
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:pt-14 sm:pb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
          <span className="font-medium">Updated</span>
          <span className="text-slate-500">{UPDATED}</span>
          <span className="text-slate-300">•</span>
          <span>Saltaire • BD18</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Cat sitting in Saltaire</h1>
        <p className="mt-3 text-slate-700">
          Calm, routine-led <b>home visits</b> for cats in Saltaire (BD18) — feeding, fresh water, litter routine and a
          simple update so you’re not worrying while you’re away.
        </p>

        {/* Fast contact row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-center font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Get in touch
          </Link>

          <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-center font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
            Email
          </a>
        </div>

        {/* Core value blocks */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">What a visit includes</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Feeding to your instructions + fresh water</li>
              <li>Litter routine (scoop/refresh as agreed)</li>
              <li>Comfort check-in (quiet presence, no forcing interaction)</li>
              <li>Quick message update (optional photo)</li>
              <li>Basic home-sense checks (doors/windows as you request)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Saltaire coverage (practical)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>BD18 streets around the village grid</li>
              <li>Easy access near Victoria Road / Salts Mill area</li>
              <li>Roberts Park-side areas where visits are time-efficient</li>
              <li>If you’re just outside Saltaire, message and we’ll confirm</li>
            </ul>
          </div>
        </div>

        {/* Shy cats + routine */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Shy cats: no-pressure approach</h2>
            <p className="mt-2 text-slate-700">
              Some cats don’t want attention from new people — that’s normal. We keep the visit calm and predictable:
              same cues, same routine, minimal noise. The goal is comfort and consistency.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Helpful notes: hiding spots, treat policy (or no treats), and what “normal behaviour” looks like for your cat.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Keys & entry (simple + safe)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Keys stored with a coded tag — no address on the ring</li>
              <li>Clear entry notes help keep arrivals calm and consistent</li>
              <li>First visit can be a handover + walkthrough if you prefer</li>
            </ul>
          </div>
        </div>

        {/* Optional: meds + multi-cat */}
        <div className="mt-8 rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">Medication, multiple cats, holiday cover</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>
              If medication is needed, share clear written instructions. If it’s complex, we’ll confirm whether we can support it.
            </li>
            <li>Multi-cat homes are fine — we follow your feeding and separation routine.</li>
            <li>For holidays, send dates early so we can lock in visit frequency and timing.</li>
          </ul>
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
          <Link className="underline underline-offset-2" href="/dog-walking/saltaire">
            Dog walking in Saltaire
          </Link>
          {' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/cat-sitting/shipley">
            Cat sitting in Shipley
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
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Get in touch
          </Link>
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
