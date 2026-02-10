// app/(site)/dog-walking/saltaire/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dog Walking in Saltaire — Quiet Loops, Towpath Etiquette & Clear Updates',
  description:
    'Local dog walking in Saltaire with steady pacing and simple updates. Roberts Park loops, Leeds–Liverpool Canal (Hirst Wood) and quiet connectors. Owner preferences followed.',
  alternates: { canonical: 'https://www.saltairedogs.uk/dog-walking/saltaire' },
  openGraph: {
    title: 'Dog Walking in Saltaire — Local Routes & Clear Updates',
    description:
      'Calm, local walks around Roberts Park, towpath to Hirst Wood (on-lead), and quieter back-street connectors. Owner-led preferences, brief photo note after each walk.',
    url: 'https://www.saltairedogs.uk/dog-walking/saltaire',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const EMAIL = 'mailto:saltairedogs@proton.me'

export default function DogWalkingSaltairePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Dog Walking — Saltaire',
        serviceType: 'Dog Walking',
        areaServed: ['Saltaire'],
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
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where do you walk in Saltaire?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typical loops include Roberts Park (quieter edges at busy times), the Leeds–Liverpool Canal near Hirst Wood (on-lead), and back-street connectors that avoid crowds.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Dog walking in Saltaire</h1>
          <p className="mt-3 text-slate-700">
            Calm, local walks with simple updates. We keep pacing steady, follow your preferences and pick routes that
            make sense for your dog and the day.
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

          {/* Local value: loops & etiquette */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Saltaire loops we actually use</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  <span className="font-medium">Roberts Park perimeter:</span> paved, predictable; we skirt busy lawns at peak times
                </li>
                <li>
                  <span className="font-medium">Towpath → Hirst Wood:</span> on-lead as default; give way to bikes/runners and pick wider spots
                </li>
                <li>
                  <span className="font-medium">Quiet connectors:</span> back-street spurs to avoid crowds before/after the park
                </li>
                <li>
                  <span className="font-medium">Weather options:</span> shaded loops in heat; shorter, firmer paths in winter
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Owner preferences, followed</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Harness/lead setup and cues you use</li>
                <li>Routes to prefer or avoid</li>
                <li>Treat/no-treat policy; training rules</li>
                <li>Off-lead only with written consent and suitable area</li>
              </ul>
            </div>
          </div>

          {/* Practical info: busy times & parking */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Busy times (useful to know)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Sunny late afternoons and weekends can crowd the park/towpath</li>
                <li>We shift to quieter edges or adjust timing when it’s hectic</li>
                <li>School-run windows are variable — we plan around them</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Parking & access notes</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>We keep keys secure (coded tag, no address)</li>
                <li>Clear entry notes help us keep arrivals calm and quick</li>
                <li>If you prefer park meet-ups for the first walk, say so — easy</li>
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
            <Link className="underline underline-offset-2" href="/dog-walking/shipley">Dog walking — Shipley</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/how-it-works">How it works</Link>
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
