// app/(site)/dog-walking/shipley/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dog Walking in Shipley — Northcliffe Loops, Shipley Glen & Clear Updates',
  description:
    'Local dog walking in Shipley with steady pacing and simple updates. Northcliffe woods loops, Shipley Glen options, and towpath entries near the station. Owner preferences followed.',
  alternates: { canonical: 'https://www.saltairedogs.uk/dog-walking/shipley' },
  openGraph: {
    title: 'Dog Walking in Shipley — Local Routes & Clear Updates',
    description:
      'Calm, local walks around Northcliffe, Shipley Glen and towpath connectors. Owner-led preferences, brief photo note after each walk.',
    url: 'https://www.saltairedogs.uk/dog-walking/shipley',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07305 367941'
const NUMBER_TEL = 'tel:+447305367941'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function DogWalkingShipleyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Dog Walking — Shipley',
        serviceType: 'Dog Walking',
        areaServed: ['Shipley'],
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
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where do you walk in Shipley?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Common options include Northcliffe woods loops, Shipley Glen routes, and towpath entries near the station/Dockfield depending on your dog and your preferences.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you walk off lead?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only with written owner consent and in suitable, quiet areas. Otherwise on-lead with steady pacing and good towpath etiquette.',
            },
          },
          {
            '@type': 'Question',
            name: 'What updates do you send?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A short photo note after each walk so you know how things went, without spammy messages.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Dog walking in Shipley</h1>
          <p className="mt-3 text-slate-700">
            Calm, local walks with clear updates. We follow your preferences, keep pacing steady and choose routes that
            make sense for your dog and the day.
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
              <a href={NUMBER_TEL} className="underline underline-offset-2">Call {NUMBER_DISPLAY}</a>
              <a href={EMAIL} className="underline underline-offset-2">Email</a>
            </div>
          </div>

          {/* Local value: loops & etiquette */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Shipley loops we actually use</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  <span className="font-medium">Northcliffe woods:</span> varied terrain and quieter paths for focused walks
                </li>
                <li>
                  <span className="font-medium">Shipley Glen:</span> options for steady pacing; we avoid busy pinch points at peak times
                </li>
                <li>
                  <span className="font-medium">Towpath connectors:</span> entries near the station & Dockfield; on-lead as default and good cycle etiquette
                </li>
                <li>
                  <span className="font-medium">Weather options:</span> shade in heat; firmer paths and shorter loops in winter
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Owner preferences, followed</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Harness/lead setup and cues you use</li>
                <li>Routes to prefer or avoid</li>
                <li>Treat/no-treat policy; training rules</li>
                <li>Off-lead only with written consent and a suitable area</li>
              </ul>
            </div>
          </div>

          {/* Practical info: busy times & parking */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Busy times (useful to know)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Sunny late afternoons and weekends can crowd popular paths</li>
                <li>We shift to quieter connectors or adjust timing when it’s hectic</li>
                <li>School-run windows are variable — we plan around them</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Access & keys</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Keys stored with a coded tag — no address on the ring</li>
                <li>Clear entry notes help us keep arrivals calm and quick</li>
                <li>First walk meet-up in the park is fine if you prefer</li>
              </ul>
            </div>
          </div>

          {/* Updates & simple policies */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Simple updates & steady approach</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Brief photo note after each walk</li>
              <li>Heat/ice plan: we adjust pace, shade and route sensibly</li>
              <li>Clear communication — short messages, plain English</li>
            </ul>
          </div>

          {/* Internal links */}
          <div className="mt-6 text-sm text-slate-700">
            Related: <Link className="underline underline-offset-2" href="/dog-walking">Dog walking — overview</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/dog-walking/saltaire">Dog walking — Saltaire</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/how-it-works">How it works</Link>
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
