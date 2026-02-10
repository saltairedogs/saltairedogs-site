// app/(site)/animal-feeding/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Animal Feeding Visits — Saltaire & Shipley | Saltaire Dogs + Pets',
  description:
    'Any-animal feeding and home visits in Saltaire & Shipley — birds, rabbits, chickens, fish, reptiles, small mammals. We follow your routine, send a quick photo note, and can cover holidays.',
  alternates: { canonical: 'https://www.saltairedogs.uk/animal-feeding' },
  openGraph: {
    title: 'Animal Feeding Visits — Saltaire & Shipley',
    description:
      'Feeding, fresh water, quick tidy, and welfare checks for birds, rabbits, chickens, fish, reptiles and small mammals. Your routine, our visit.',
    url: 'https://www.saltairedogs.uk/animal-feeding',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function AnimalFeedingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Animal Feeding Home Visits',
        serviceType: 'Pet Feeding / Drop-ins',
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
            name: 'Which animals do you feed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Birds (cockatiels, budgies, parrots), rabbits, chickens, fish, reptiles (gecko, bearded dragon, lizard, snakes), and small mammals (hamsters, gerbils, guinea pigs).',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you follow my routine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We follow your written steps for feed type/amount, water changes, and any quick tidy/clean you request.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you cover holidays?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We can visit once or multiple times per day while you’re away and send a brief photo note after each visit.',
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
            Animal feeding visits — Saltaire & Shipley
          </h1>
          <p className="mt-3 text-slate-700">
            We handle feeding, fresh water, a quick tidy, and a welfare check — exactly how you do it at home. Good for
            holidays, work days, or whenever you need cover. We’ll send a short photo note after each visit.
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
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding as instructed (type/amount)</li>
                <li>Fresh water</li>
                <li>Quick tidy of cage/tank/enclosure (owner routine)</li>
                <li>Welfare check and a brief photo note</li>
                <li>Medication visit if needed (as provided)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Animals we cover</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Birds: cockatiels, budgies, parrots</li>
                <li>Small mammals: hamsters, gerbils, guinea pigs</li>
                <li>Rabbits & chickens (coop/pen checks)</li>
                <li>Reptiles & snakes: gecko, bearded dragon, lizard, corn/royal, etc.</li>
                <li>Fish: feed and water checks to your routine</li>
              </ul>
            </div>
          </div>

          {/* Your routine */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
            <p className="mt-2 text-slate-700">
              You set the steps: feed type/amount, water schedule, how you tidy a cage or refresh a tank, and any
              “do/don’t” notes. We confirm details before the first visit so it’s done your way.
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
              <p className="mt-2 text-slate-700">
                Saltaire & Shipley. Further out? Send a message — if it’s a fit, we’ll try to make it work.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Payment options</h2>
              <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
              <p className="mt-1 text-slate-500 text-sm">
                No prices here — message us and we’ll see if we’re the right fit for what you need.
              </p>
            </div>
          </div>

          {/* FAQ (concise) */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Quick questions</h2>
            <div className="mt-3 grid gap-3">
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Can you follow a specific setup?</summary>
                <p className="mt-2 text-slate-700">
                  Yes — we follow your written routine exactly (feed type/amount, water, quick tidy).
                </p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you send updates?</summary>
                <p className="mt-2 text-slate-700">Yes — a brief photo note after each visit.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you do multi-day holiday cover?</summary>
                <p className="mt-2 text-slate-700">Yes — once or multiple visits per day as needed.</p>
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

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
