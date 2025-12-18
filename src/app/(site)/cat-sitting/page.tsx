// app/(site)/cat-sitting/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cat Sitting & Home Drop-ins — Saltaire & Shipley | Saltaire Dogs + Pets',
  description:
    'Cat sitting in Saltaire & Shipley. Feeding, fresh water, litter, play/brush if wanted, and a short photo note each visit. Holiday cover and work-day checks. Message on WhatsApp.',
  alternates: { canonical: 'https://www.saltairedogs.uk/cat-sitting' },
  openGraph: {
    title: 'Cat Sitting & Home Drop-ins — Saltaire & Shipley',
    description:
      'Feeding, water, litter and quick tidy, plus a brief photo note after each visit. AM/PM options and holiday cover available.',
    url: 'https://www.saltairedogs.uk/cat-sitting',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07424 208127'
const NUMBER_TEL = 'tel:+447424208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function CatSittingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Cat Sitting & Home Drop-ins',
        serviceType: 'Cat Sitting / Home Visits',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          telephone: '+44 7424 208127',
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://www.saltairedogs.uk/whatsapp',
          telephone: '+44 7424 208127',
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you do AM and PM visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You can choose once daily, twice daily (AM + PM), or another schedule that suits your cat.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you send updates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We send a brief photo note after each visit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you water plants or take bins out?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, quick extras are fine if requested in advance.',
            },
          },
          {
            '@type': 'Question',
            name: 'How are keys handled?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Keys are tagged with a code only — no address on the ring.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cat sitting & home drop-ins — Saltaire & Shipley
          </h1>
          <p className="mt-3 text-slate-700">
            Feeding to your routine, fresh water, litter scoop and a quick tidy. Play or a brush if your cat wants it.
            We send a short photo note after each visit.
          </p>

          {/* Fast contact row */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/whatsapp"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium text-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Message on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
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

          {/* What’s included */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding as instructed (type/amount)</li>
                <li>Fresh water</li>
                <li>Litter scoop and quick tidy</li>
                <li>Play/brush if wanted</li>
                <li>Photo note after each visit</li>
                <li>Medication visit if needed (as provided)</li>
              </ul>
            </div>

            {/* Visit options */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Visit options</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Once daily</li>
                <li>Twice daily (AM + PM)</li>
                <li>Every other day (owner choice)</li>
                <li>Typical windows: morning / midday / late afternoon</li>
              </ul>
              <p className="mt-3 text-slate-500 text-sm">
                No prices here — message us and we’ll see if we’re the right fit for what you need.
              </p>
            </div>
          </div>

          {/* For different cat personalities */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Different cats, small tweaks</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-medium">Shy / door-dasher:</span> calm entry, door/window checks before leaving</li>
                <li><span className="font-medium">Indoor-only:</span> indoor-only checks and window/vent check</li>
                <li><span className="font-medium">Senior / meds:</span> slow approach; simple meds as provided</li>
              </ul>
            </div>

            {/* Your routine */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
              <p className="mt-2 text-slate-700">
                You provide the steps: feed type/amount, litter brand, play/brush notes, alarm/key info, and any
                “don’t-open” rules. We confirm anything unclear before the first visit.
              </p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Photo note after each visit</li>
                <li>Keys handled securely (coded tag, no address)</li>
                <li>Quick extras on request: plants/bins/mail check</li>
              </ul>
            </div>
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
            </div>
          </div>

          {/* FAQ (concise) */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Quick questions</h2>
            <div className="mt-3 grid gap-3">
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Can you do AM + PM?</summary>
                <p className="mt-2 text-slate-700">Yes. Choose once daily or twice daily (AM + PM).</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you send updates?</summary>
                <p className="mt-2 text-slate-700">Yes — a short photo note after each visit.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Will you follow our exact routine?</summary>
                <p className="mt-2 text-slate-700">Yes. We follow your written steps exactly.</p>
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
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
