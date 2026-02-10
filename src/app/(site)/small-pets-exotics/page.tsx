// app/(site)/small-pets-exotics/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Small Pets & Exotics Visits — Saltaire & Shipley | Saltaire Dogs + Pets',
  description:
    'Any-animal feeding and home visits for birds, rabbits, chickens, fish, reptiles and small mammals in Saltaire & Shipley. Custom routines, photo notes, holiday cover.',
  alternates: { canonical: 'https://www.saltairedogs.uk/small-pets-exotics' },
  openGraph: {
    title: 'Small Pets & Exotics Visits — Saltaire & Shipley',
    description:
      'Feeding, water, cage/tank refresh and checks for birds, rabbits, chickens, fish, reptiles and small mammals. Custom to your routine. Holiday cover available.',
    url: 'https://www.saltairedogs.uk/small-pets-exotics',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

export default function SmallPetsExoticsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Small Pets & Exotics Home Visits',
        serviceType: 'Pet Sitting / Feeding',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          email: 'saltairedogs@proton.me',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Visit types',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Feeding & water top-up' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cage/tank spot-clean (as instructed)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Welfare check & photo note' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medication visit (as provided)' } },
          ],
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://www.saltairedogs.uk/contact',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which animals do you visit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Birds (cockatiels, budgies, parrots), rabbits, chickens, fish, reptiles (gecko, bearded dragon, lizard, snakes), and small mammals (hamsters, gerbils, guinea pigs).',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you follow my feeding/cleaning routine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We follow your written routine exactly, including feed type/amount, water changes, and cage/tank steps you specify.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer holiday cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We can cover multi-day trips with once or multiple visits per day, and we send a photo note after each visit.',
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
            Small pets & exotics home visits — Saltaire & Shipley
          </h1>
          <p className="mt-3 text-slate-700">
            We handle feeding, water changes, quick cage/tank refresh and a welfare check — exactly how you do it at home.
            Good for holidays, work days, or whenever you need cover.
          </p>

          {/* CTA row */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
          </div>

          {/* What we do */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding and fresh water (as instructed)</li>
                <li>Spot-clean cage/tank/enclosure (owner routine)</li>
                <li>Welfare check and a quick photo note</li>
                <li>Medication visit if needed (as provided)</li>
                <li>Bin/compost top-ups for bedding/seed as relevant</li>
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

          {/* Personal note */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Why we do this</h2>
            <p className="mt-2 text-slate-700">
              I’ve grown up around animals — multiple cockatiels in the family, a few dogs, fish and hamsters over the
              years. I’m not hands-on with every species under the sun, but I do care about doing things properly and
              keeping animals settled at home. If you’re away for a week or just at work all day, it helps to know
              someone will follow your routine and keep you updated.
            </p>
          </div>

          {/* Custom routines */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, not ours</h2>
            <p className="mt-2 text-slate-700">
              You set the steps: feed type/amount, water schedule, how you clean the cage or refresh the tank, where waste
              goes, and any “do/don’t” notes. We’ll follow that exactly and confirm anything unclear before the first
              visit.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Holiday cover: once or multiple visits per day</li>
              <li>Photo note after each visit</li>
              <li>Keys handled securely (coded tag, no address on the ring)</li>
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
                  Yes — we follow your written routine exactly (feed type/amount, water, cleaning steps).
                </p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you send updates?</summary>
                <p className="mt-2 text-slate-700">Yes — a quick photo note after each visit.</p>
              </details>
              <details className="border rounded-lg p-3">
                <summary className="cursor-pointer font-medium">Do you do multi-day holiday cover?</summary>
                <p className="mt-2 text-slate-700">Yes — once or multiple visits per day as needed.</p>
              </details>
            </div>
          </div>

          {/* Final CTA */}
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
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
