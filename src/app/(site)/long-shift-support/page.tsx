// app/(site)/long-shift-support/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Long-Shift Support — Home Pet Visits for Any Animal | Saltaire & Shipley',
  description:
    'Working long shifts? We do home visits for any animal — feeding, water, checks and simple tasks to your routine. Saltaire & Shipley. Get in touch via our contact form.',
  alternates: { canonical: 'https://www.saltairedogs.uk/long-shift-support' },
  openGraph: {
    title: 'Long-Shift Support — Any-Animal Home Visits',
    description:
      'Flexible home visits during long work days. Feeding, water, welfare checks, litter/cage/tank tidy to your instructions. Saltaire & Shipley.',
    url: 'https://www.saltairedogs.uk/long-shift-support',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function LongShiftSupportPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Long-Shift Pet Support',
        serviceType: 'Home Visits / Feeding / Checks',
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
            name: 'Which animals do you cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dogs, cats, birds, rabbits, chickens, small mammals (hamsters/gerbils/guinea pigs), reptiles and snakes, and fish (to your routine).',
            },
          },
          {
            '@type': 'Question',
            name: 'What can you do during a visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Feeding and fresh water, short toilet break/walk for dogs, litter scoop, quick cage/tank tidy as instructed, welfare check, basic meds if provided, and a brief photo note.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I set exact instructions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. You write the routine (feed type/amount, timings, cleaning steps, where waste goes, keys/alarm notes). We follow it exactly.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you cover early/late windows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer morning, midday and late-afternoon windows. If you need another time, message us and we’ll see if we can help.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I pay?',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Long-shift support — home pet visits for any animal
          </h1>
          <p className="mt-3 text-slate-700">
            On long work days, we can drop in and handle feeding, water, a quick welfare check and simple tasks — exactly
            to your routine. Dogs, cats, birds, rabbits, chickens, small mammals, reptiles/snakes, and fish.
          </p>

          {/* Fast contact row */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium text-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Get in touch
            </Link>
            <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
              Email
            </a>
          </div>

          {/* What we do */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Typical visit tasks</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding as instructed (type/amount) and fresh water</li>
                <li>Short toilet break / quick walk for dogs</li>
                <li>Litter scoop and quick tidy</li>
                <li>Cage/tank/enclosure spot-clean (owner routine)</li>
                <li>Welfare check and a brief photo note</li>
                <li>Basic medication visit if needed (as provided)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Animals we cover</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Dogs & cats</li>
                <li>Birds: cockatiels, budgies, parrots</li>
                <li>Small mammals: hamsters, gerbils, guinea pigs</li>
                <li>Rabbits & chickens (coop/pen checks)</li>
                <li>Reptiles & snakes: gecko, bearded dragon, lizard, corn/royal, etc.</li>
                <li>Fish: feeding and water checks to your routine</li>
              </ul>
            </div>
          </div>

          {/* Your routine */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
            <p className="mt-2 text-slate-700">
              You tell us what to do: food type/amount, timings, walks or play, cleaning steps, where waste goes, keys or
              alarm info, and any “do/don’t” notes. We confirm details before the first visit.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Windows: morning / midday / late afternoon (ask if you need another time)</li>
              <li>Photo note after each visit</li>
              <li>Keys handled securely (coded tag, no address)</li>
            </ul>
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
              <p className="mt-1 text-slate-500 text-sm">No prices here — message us and we’ll see if we’re the right fit.</p>
            </div>
          </div>

          {/* FAQ (concise) */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Quick questions</h2>
            <div className="mt-3 grid gap-3">
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Can you time visits around my shift?</summary>
                <p className="mt-2 text-slate-700">
                  Yes. Pick morning, midday or late afternoon windows — or ask and we’ll see if another time works.
                </p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Will you follow exact feeding/cleaning steps?</summary>
                <p className="mt-2 text-slate-700">Yes. We follow written instructions exactly.</p>
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
            <a
              href={EMAIL}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
