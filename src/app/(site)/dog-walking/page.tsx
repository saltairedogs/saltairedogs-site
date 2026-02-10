// app/(site)/dog-walking/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dog Walking — Quiet Local Routes & Clear Updates | Saltaire & Shipley',
  description:
    'Dog walking in Saltaire & Shipley with simple updates. Quiet local routes, steady pacing and tailored to your preferences. Get in touch for slots.',
  alternates: { canonical: 'https://www.saltairedogs.uk/dog-walking' },
  openGraph: {
    title: 'Dog Walking — Saltaire & Shipley',
    description:
      'Quiet, local walks with clear updates. Solo or very small pairings by owner request. Towpath, Roberts Park, Northcliffe loops.',
    url: 'https://www.saltairedogs.uk/dog-walking',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function DogWalkingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Dog Walking',
        serviceType: 'Dog Walking',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          email: 'saltairedogs@proton.me',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Walk options',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solo walk' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paired walk (owner-approved)' } },
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
            name: 'Where do you walk locally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common routes include Roberts Park loops, the Leeds–Liverpool towpath near Hirst Wood, and Northcliffe woods depending on the dog and owner preference.',
            },
          },
          {
            '@type': 'Question',
            name: 'Solo or group?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Default is solo. We can pair compatible dogs by owner request after a trial.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do updates work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A brief photo note after each walk. We keep comms simple so you can get on with your day.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Dog walking — Saltaire & Shipley</h1>
          <p className="mt-3 text-slate-700">
            Quiet, local routes with clear updates, tailored to your preferences. We keep pacing steady and distractions low,
            and send a short photo note after each walk.
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

          {/* What’s included + local value */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What’s included</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Steady, local walk to your preferences</li>
                <li>Simple photo note after each walk</li>
                <li>Lead, harness and pacing as you specify</li>
                <li>Towpath etiquette around cyclists/runners</li>
                <li>Weather plan (shade, water, paw checks in summer)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Local routes we use</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li><span className="font-medium">Roberts Park loops:</span> easy pace, quieter edges at peak times</li>
                <li><span className="font-medium">Leeds–Liverpool towpath (Hirst Wood):</span> on-lead by default, watch for bikes</li>
                <li><span className="font-medium">Northcliffe woods:</span> varied terrain; good for focused walks</li>
                <li>We can avoid busier areas if you prefer</li>
              </ul>
            </div>
          </div>

          {/* Solo vs paired + owner preferences */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Solo vs paired</h2>
              <p className="mt-2 text-slate-700">
                Default is solo. We can pair compatible dogs by owner request after a trial walk. If your dog is
                decompression-focused, we keep it solo and quiet.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Your preferences</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Harness/lead setup and handling notes</li>
                <li>Preferred routes or places to avoid</li>
                <li>Treats or no treats; training cues to use</li>
                <li>Off-lead only with written owner consent and safe location</li>
              </ul>
            </div>
          </div>

          {/* Coverage & payment */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Coverage & times</h2>
              <p className="mt-2 text-slate-700">
                Saltaire & Shipley. Typical windows: morning / midday / mid-afternoon. Further out? Send a message and
                we’ll see if it fits.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Payment options</h2>
              <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
              <p className="mt-1 text-slate-500 text-sm">No prices here — message to see if we’re the right fit.</p>
            </div>
          </div>

          {/* Helpful notes (value section) */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Local walking notes (useful)</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li><span className="font-medium">Towpath busy times:</span> late lunch and sunny evenings — we adjust routes.</li>
              <li><span className="font-medium">Heat plan:</span> shade, slower pace, water, and paw checks on hot days.</li>
              <li><span className="font-medium">Winter plan:</span> shorter loops if needed; towel-off entry if you want.</li>
              <li><span className="font-medium">Recall/off-lead:</span> only with owner consent and suitable, quiet spots.</li>
            </ul>
          </div>

          {/* Internal links for SEO & UX */}
          <div className="mt-6 text-sm text-slate-700">
            Related: <Link className="underline underline-offset-2" href="/dog-walking/saltaire">Dog walking — Saltaire</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/dog-walking/shipley">Dog walking — Shipley</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/how-it-works">How it works</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/cat-sitting">Cat sitting</Link>
          </div>

          {/* Final contact row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Get in touch</Link>
            <a href={EMAIL} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">Email</a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
