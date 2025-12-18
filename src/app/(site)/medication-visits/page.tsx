// app/(site)/medication-visits/page.tsx
// Medication Visits — Saltaire & Shipley (BD18)
// - Full-width hero image + strong conversion above the fold
// - SEO: local intent + “pet sitter gives medication / insulin / drops” queries
// - JSON-LD: WebPage + BreadcrumbList + LocalBusiness + Service + FAQPage

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'error'

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'
const UPDATED = '2025-12-18'

// Save your generated hero image into: /public/medication-visits-hero.webp
const HERO_IMAGE = '/medication-visits-hero.webp'

const NUMBER_DISPLAY = '07424 208127'
const NUMBER_TEL = 'tel:+447424208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

export const metadata: Metadata = {
  title: 'Medication Visits in Saltaire & Shipley — Pills, Drops & Insulin Checks (BD18)',
  description:
    'Medication visits for pets in Saltaire (BD18) and Shipley: pills, liquids, eye/ear drops and simple insulin to your vet plan. Calm handling, timed windows, brief update after each visit.',
  alternates: { canonical: `${SITE_URL}/medication-visits` },
  openGraph: {
    title: 'Medication Visits — Saltaire & Shipley (BD18) | Calm, On-Time Home Visits',
    description:
      'Owner-supplied meds given to your written routine (vet plan): pills, drops, liquids and simple insulin. Clear timing windows and a short update after each visit.',
    url: `${SITE_URL}/medication-visits`,
    siteName: BUSINESS_NAME,
    type: 'article',
    images: [{ url: HERO_IMAGE }],
  },
  robots: { index: true, follow: true },
  keywords: [
    'medication visits saltaire',
    'medication visits shipley',
    'pet sitter give medication bd18',
    'cat insulin visits saltaire',
    'dog medication visit shipley',
    'eye drops pet sitter',
    'ear drops pet visit',
    'timed pet visits saltaire',
    'home medication visits',
  ],
}

export default function MedicationVisitsPage() {
  const faqs = [
    {
      q: 'What medication can you help with?',
      a: 'Owner-provided pills/capsules, liquids, eye/ear drops, and simple insulin injections — always to your vet’s written plan and your written routine.',
    },
    {
      q: 'Do you change doses or make medical decisions?',
      a: 'No. We don’t diagnose or adjust plans. We follow the written instructions you provide (from your vet) and confirm anything unclear before the first visit.',
    },
    {
      q: 'Can you do time-sensitive visits?',
      a: 'Yes. We offer morning, midday and late-afternoon windows and we’ll aim for the best slot for your pet’s schedule (availability depending).',
    },
    {
      q: 'Is this for cats only?',
      a: 'No — cats, dogs and small pets are all fine. The key is having a clear written routine and calm, safe handling.',
    },
    {
      q: 'What do you send after the visit?',
      a: 'A short update (and a photo if you want) so you know it’s done — simple and not spammy.',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Medication Visits in Saltaire & Shipley — Pills, Drops & Insulin Checks',
        url: `${SITE_URL}/medication-visits`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
        dateModified: UPDATED,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Medication visits', item: `${SITE_URL}/medication-visits` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        telephone: '+44 7424 208127',
        email: 'saltairedogs@proton.me',
        areaServed: ['Saltaire', 'Shipley', 'BD18', 'Bradford'],
        image: [`${SITE_URL}${HERO_IMAGE}`],
      },
      {
        '@type': 'Service',
        name: 'Medication Visits (Home)',
        serviceType: 'Pet Medication Visits (Home)',
        areaServed: ['Saltaire', 'Shipley', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          url: SITE_URL,
          telephone: '+44 7424 208127',
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: `${SITE_URL}/whatsapp`,
          telephone: '+44 7424 208127',
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
            Medication visits
          </li>
        </ol>
      </nav>

      {/* HERO (full-width image) */}
      <section className="relative mt-3">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-[#E6E3DA]">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={HERO_IMAGE}
                alt="Calm medication visit at home."
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              {/* Readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-5 sm:p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  <span className="font-medium">Updated</span>
                  <span className="text-white/70">{UPDATED}</span>
                  <span className="text-white/30">•</span>
                  <span>Saltaire • Shipley • BD18</span>
                </div>

                <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Medication visits — calm, on-time help at home
                </h1>
                <p className="mt-3 max-w-2xl text-white/85">
                  Pills, liquids, eye/ear drops and simple insulin — given to your written routine and your vet plan.
                  Steady handling, sensible timing windows, and a short update after each visit.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/whatsapp"
                    className="inline-flex items-center justify-center rounded-lg bg-[#C89B3C] px-4 py-2 font-medium text-[#131415] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Message on WhatsApp
                  </Link>
                  <a
                    href={NUMBER_TEL}
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Call {NUMBER_DISPLAY}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Contact form
                  </Link>
                  <a
                    href={EMAIL}
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Email
                  </a>
                </div>

                <p className="mt-3 text-xs text-white/70">
                  Quick booking tip: message your area + pet + medication list + timing window + your written instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">What we can help with</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Pills/capsules/liquids (owner-provided) to your routine</li>
              <li>Eye/ear drops with calm handling</li>
              <li>Simple insulin injections using your supplies + written plan</li>
              <li>Time windows: morning / midday / late afternoon</li>
              <li>Brief update after each visit (photo if you want)</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              We’re a pet-care service, not a vet: we don’t diagnose, set doses, or change instructions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Fit & safety (plain English)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>We follow your written routine exactly (and confirm anything unclear first)</li>
              <li>Owner provides meds, supplies, and a sharps box if required</li>
              <li>If a pet is too distressed or unsafe, we’ll tell you quickly and discuss options</li>
              <li>Keys handled securely (coded tag, no address on the ring)</li>
            </ul>
          </div>
        </div>

        {/* Mini comparison table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-6">
              <h2 className="text-lg font-semibold">Best for</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Work-day timed checks</li>
                <li>Holiday cover with a medication routine</li>
                <li>Post-op meds where the plan is clear and written</li>
                <li>Owners who want calm, consistent visits</li>
              </ul>
            </div>
            <div className="border-t border-slate-200 p-6 md:border-l md:border-t-0">
              <h2 className="text-lg font-semibold">Not the right fit</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Anything requiring diagnosis or decision-making</li>
                <li>Complex clinical procedures (beyond simple home routines)</li>
                <li>Unsafe handling situations (we’ll be honest)</li>
                <li>Plans that aren’t written/clear yet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practical local notes */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Helpful notes (to make visits smooth)</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
            <li>Keep everything in one place: meds, treats/food rule, wipes, gloves (if used)</li>
            <li>If appetite affects dosing, include the exact written rule from your vet</li>
            <li>For insulin: tell us your storage setup and timing guidance</li>
            <li>Leave handling notes: shy cat routine, best towel wrap method, favourite spot, etc.</li>
          </ul>
        </div>

        {/* Internal links */}
        <div className="mt-6 text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/cat-sitting">
            Cat sitting
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/animal-feeding">
            Animal feeding
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/long-shift-support">
            Long-shift support
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/services">
            Services hub
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

        {/* Final CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/whatsapp"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            Message on WhatsApp
          </Link>
          <a
            href={NUMBER_TEL}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Call {NUMBER_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Contact form
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
