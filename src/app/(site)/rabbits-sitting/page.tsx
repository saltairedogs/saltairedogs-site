// app/(site)/rabbits-sitting/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rabbits Sitting — Hay, Water, Quick Tidy & Welfare Checks | Saltaire & Shipley',
  description:
    'Rabbit sitting in Saltaire & Shipley. Hay and fresh water, quick tidy, welfare checks and simple photo notes. Indoor or outdoor hutches. Your routine, followed exactly.',
  alternates: { canonical: 'https://www.saltairedogs.uk/rabbits-sitting' },
  openGraph: {
    title: 'Rabbits Sitting — Saltaire & Shipley',
    description:
      'Hay/water refresh, quick tidy and welfare checks. Indoor or outdoor setups. We follow your routine and send a brief photo note.',
    url: 'https://www.saltairedogs.uk/rabbits-sitting',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function RabbitsSittingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Rabbits Sitting',
        serviceType: 'Rabbit Sitting / Home Visits',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          email: 'saltairedogs@proton.me',
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://www.saltairedogs.uk/contact',
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What’s included in a rabbit visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hay top-up, fresh water, pellets/greens as instructed, a quick tidy of the hutch/pen area, and a brief welfare check with a short photo note.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you follow our exact routine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We follow your written steps for feed amounts, hay preference, litter bedding and any “do/don’t” notes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you cover holidays or weekends?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We can do once or multiple visits per day for trips away or busy weekends.',
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
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 pt-14 pb-6 sm:pt-20 sm:pb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Rabbits sitting — Saltaire & Shipley</h1>
          <p className="mt-3 text-slate-700">
            We keep routines steady for indoor rabbits and outdoor hutches: hay top-up, fresh water, pellets/greens as
            instructed, a quick tidy and a brief welfare check — with a short photo note each visit.
          </p>

          {/* Fast contact row */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-white font-medium text-center hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              Get in touch
            </Link>
            <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">Email</a>
          </div>

          {/* What we do */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Hay top-up and fresh water</li>
                <li>Pellets/greens per your amounts</li>
                <li>Quick tidy of hutch/pen area (owner routine)</li>
                <li>Welfare check and short photo note</li>
                <li>Medication visit if needed (as provided)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Useful rabbit tips (local)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-medium">Summer heat:</span> shaded areas and extra water; we’ll monitor on hot days.</li>
                <li><span className="font-medium">Winter checks:</span> windproofing for outdoor hutches; dry bedding top-up.</li>
                <li><span className="font-medium">Quiet handling:</span> we keep visits calm to avoid stress.</li>
                <li><span className="font-medium">Hay first:</span> we prioritise hay supply per your notes.</li>
              </ul>
            </div>
          </div>

          {/* Your routine */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
            <p className="mt-2 text-slate-700">
              You set the steps: hay type, pellet amount, greens frequency, litter/bedding brand, cleaning steps and any
              “do/don’t” notes. We confirm anything unclear before the first visit so it’s done your way.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Holiday cover: once or multiple visits per day</li>
              <li>Photo note after each visit</li>
              <li>Keys handled securely (coded tag, no address)</li>
            </ul>
          </div>

          {/* Coverage & payment */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Coverage</h2>
              <p className="mt-2 text-slate-700">Saltaire & Shipley. Further out? Send a message — if it’s a fit, we’ll try to make it work.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Payment options</h2>
              <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
              <p className="mt-1 text-slate-500 text-sm">No prices here — just message to see if we’re the right fit.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Quick questions</h2>
            <div className="mt-3 grid gap-3">
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Indoor or outdoor rabbits?</summary>
                <p className="mt-2 text-slate-700">Both. We follow your setup and routine exactly.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Can you do twice daily?</summary>
                <p className="mt-2 text-slate-700">Yes — choose once or multiple visits per day.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you send updates?</summary>
                <p className="mt-2 text-slate-700">Yes — a short photo note after each visit.</p>
              </details>
            </div>
          </div>

          {/* Final contact row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-white font-medium hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20">Get in touch</Link>
            <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">Email</a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
