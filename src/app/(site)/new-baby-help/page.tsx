// app/(site)/new-baby-help/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Baby Help — Kind, Flexible Pet Visits | Saltaire & Shipley',
  description:
    'Gentle, flexible pet visits while you settle in with a new baby. Feeding, water, walks or drop-ins to your routine. Saltaire & Shipley. Get in touch to book.',
  alternates: { canonical: 'https://www.saltairedogs.uk/new-baby-help' },
  openGraph: {
    title: 'New Baby Help — Kind, Flexible Pet Visits',
    description:
      'Support for pets during the newborn phase: feeding, water, walks and calm drop-ins to your routine. Saltaire & Shipley.',
    url: 'https://www.saltairedogs.uk/new-baby-help',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function NewBabyHelpPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'New Baby Help — Pet Support',
        serviceType: 'Home Pet Visits / Walks / Feeding',
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
            name: 'What can you help with during the newborn phase?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Feeding and fresh water, dog walks or garden breaks, litter/cage/tank tidy as instructed, calm check-ins, and a brief photo note.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you follow our routine and preferences?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You set the steps, timings and house preferences. We follow them exactly and confirm anything unclear before the first visit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you work around nap times and doorbell off?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We can avoid the doorbell, use a quiet knock or message on arrival, and schedule visits around naps whenever possible.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">New baby help — gentle support for pets</h1>
          <p className="mt-3 text-slate-700">
            Those first weeks are full on. We can quietly keep pets settled — feeding and fresh water, a short walk or
            drop-in, and a quick tidy — all to your routine.
          </p>

          {/* Fast contact row */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium text-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Get in touch
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Contact form
            </Link>
            <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
              Email
            </a>
          </div>

          {/* What we help with */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Ways we can help</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding to your routine and fresh water</li>
                <li>Dog walk or garden break; play time where suitable</li>
                <li>Litter scoop or quick cage/tank tidy (as instructed)</li>
                <li>Welfare check and a brief photo note</li>
                <li>Basic medication visit if needed (as provided)</li>
              </ul>
            </div>

            {/* Kind, practical approach */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Kind, practical and flexible</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Quiet arrivals — no doorbell if you prefer</li>
                <li>Windows: morning / midday / late afternoon</li>
                <li>We can avoid baby sleep spaces and keep noise low</li>
                <li>Simple, clear updates after each visit</li>
                <li>Keys handled securely (coded tag, no address)</li>
              </ul>
            </div>
          </div>

          {/* Your routine */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
            <p className="mt-2 text-slate-700">
              You set the steps: feed type/amount, walk length, where leads and litter live, cleaning steps, and any
              “do/don’t” notes. We’ll confirm details before the first visit and keep things steady while you settle in.
            </p>
          </div>

          {/* Coverage & payment */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Coverage</h2>
              <p className="mt-2 text-slate-700">
                Saltaire & Shipley. Further out? Send a message — if it’s a fit, we’ll try to make it work.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Payment options</h2>
              <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
              <p className="mt-1 text-slate-500 text-sm">No prices here — just message to see if we’re the right fit.</p>
            </div>
          </div>

          {/* FAQ (concise) */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Quick questions</h2>
            <div className="mt-3 grid gap-3">
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Can you work around nap times?</summary>
                <p className="mt-2 text-slate-700">Yes — we can time visits around naps and arrive quietly.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Which animals do you cover?</summary>
                <p className="mt-2 text-slate-700">
                  Dogs, cats, birds, rabbits, chickens, small mammals, reptiles/snakes, and fish — all to your routine.
                </p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you send updates?</summary>
                <p className="mt-2 text-slate-700">Yes — a short photo note after each visit.</p>
              </details>
            </div>
          </div>

          {/* Final contact row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Get in touch
            </Link>
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
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
