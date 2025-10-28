// app/(site)/parrots-visits/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Parrot & Cockatiel Home Visits — Saltaire & Shipley | Saltaire Dogs + Pets',
  description:
    'Parrot and cockatiel home visits in Saltaire & Shipley. Fresh food and water, cage tidy, and calm, unhurried check-ins to your routine. Message on WhatsApp.',
  alternates: { canonical: 'https://www.saltairedogs.uk/parrots-visits' },
  openGraph: {
    title: 'Parrot & Cockatiel Home Visits — Saltaire & Shipley',
    description:
      'We follow your routine: water/food changes, bottom-of-cage clean, calm check-ins. Experience with cockatiels (10+ years) and friends’ parrots.',
    url: 'https://www.saltairedogs.uk/parrots-visits',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07305 367941'
const NUMBER_TEL = 'tel:+447305367941'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function ParrotsVisitsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Parrot & Cockatiel Home Visits',
        serviceType: 'Bird Sitting / Feeding / Cage Tidy',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          telephone: '+44 7305 367941',
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://www.saltairedogs.uk/whatsapp',
          telephone: '+44 7305 367941',
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What do you do during a parrot visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fresh water and food changes, bottom-of-cage clean/liner swap as instructed, welfare check and a brief photo note.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you follow our exact routine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We follow your written steps for food, water, cleaning and handling preferences exactly.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are visits calm and unrushed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We work quietly and unhurried to avoid stress. We don’t force interaction.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do we pay?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.',
            },
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with soft gradient band */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-amber-50/70 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 pt-16 sm:pt-24 pb-8 relative">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Parrot & cockatiel home visits — Saltaire & Shipley
          </h1>
          <p className="mt-3 text-slate-700">
            Fresh water and food changes, a quick bottom-of-cage clean if needed, and a calm check-in. We follow your
            routine exactly.
          </p>

          {/* Fast contact row */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/whatsapp"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium text-center shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Message on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
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
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">What we do</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Fresh water and food changes (as instructed)</li>
              <li>Bottom-of-cage clean or liner swap</li>
              <li>Welfare check and room check (windows/doors)</li>
              <li>Brief photo note after each visit</li>
              <li>Extras on request: seed top-ups, fresh veg, foraging toys (owner-provided)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Calm, unhurried visits</h2>
            <p className="mt-2 text-slate-700">
              No rushing. We move quietly, avoid startle triggers, and don’t force interaction. If your bird prefers
              distance, we keep it that way.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Arrival kept low-stress; no loud knocks</li>
              <li>Handle covers/doors exactly as you specify</li>
              <li>We leave things as we found them, clean and set</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal note band */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-lg font-semibold">A little background</h2>
          <p className="mt-2 text-slate-800">
            I’ve lived with cockatiels in the family for over 10 years and have looked after friends’ parrots too. I
            understand routines, noise sensitivity, and keeping things steady when owners are away. The aim is simple:
            keep your bird settled, fed and watered, with a quick update so you don’t have to worry.
          </p>
        </div>
      </section>

      {/* Your routine + coverage + payment */}
      <section className="mx-auto max-w-4xl px-4 pb-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Your routine, followed</h2>
            <p className="mt-2 text-slate-700">
              You set the steps: feed type/amount, water schedule, liner/cage clean details, and any “do/don’t” notes.
              We confirm everything before the first visit.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Holiday cover: once or multiple visits per day</li>
              <li>Keys handled securely (coded tag, no address)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Coverage</h2>
            <p className="mt-2 text-slate-700">
              Saltaire & Shipley. Further out? Send a message — if it’s a fit, we’ll try to make it work.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/whatsapp" className="rounded-lg bg-green-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-green-700">
                WhatsApp
              </Link>
              <Link href="/contact" className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
                Contact form
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Payment options</h2>
            <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
            <p className="mt-1 text-slate-500 text-sm">
              No prices here — just message to see if we’re the right fit for what you need.
            </p>
          </div>
        </div>

        {/* FAQ (concise) */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Quick questions</h2>
          <div className="mt-3 grid gap-3">
            <details className="border rounded-lg p-3">
              <summary className="cursor-pointer font-medium">Can you change water and food each visit?</summary>
              <p className="mt-2 text-slate-700">Yes — that’s standard. We follow your schedule and portions.</p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="cursor-pointer font-medium">Do you clean the bottom of the cage?</summary>
              <p className="mt-2 text-slate-700">Yes — liner swap or quick clean as you instruct.</p>
            </details>
            <details className="border rounded-lg p-3">
              <summary className="cursor-pointer font-medium">Are visits calm and not rushed?</summary>
              <p className="mt-2 text-slate-700">
                Yes. The focus is on keeping stress low and sticking to what your bird knows.
              </p>
            </details>
          </div>
        </div>

        {/* Final contact row */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/whatsapp"
            className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
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
