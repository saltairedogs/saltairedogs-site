// app/(site)/dog-walking/shipley/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'error'

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

const UPDATED = '2025-12-18'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function DogWalkingShipleyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Dog Walking in Shipley — Northcliffe Loops, Shipley Glen & Clear Updates',
        description: metadata.description,
        url: 'https://www.saltairedogs.uk/dog-walking/shipley',
        inLanguage: 'en-GB',
        dateModified: UPDATED,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saltairedogs.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Dog walking', item: 'https://www.saltairedogs.uk/dog-walking' },
          { '@type': 'ListItem', position: 3, name: 'Shipley', item: 'https://www.saltairedogs.uk/dog-walking/shipley' },
        ],
      },
      {
        '@type': 'Service',
        name: 'Dog Walking — Shipley',
        serviceType: 'Dog Walking',
        areaServed: ['Shipley', 'BD18', 'Shipley Glen', 'Northcliffe', 'Canal towpath (Shipley/Saltaire connector)'],
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

  const btnPrimary =
    'inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/25'
  const btnSecondary =
    'inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15'
  const btnGhost =
    'inline-flex items-center justify-center rounded-2xl border border-black/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15'

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-4 py-3 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline underline-offset-4 hover:text-slate-900">
              Home
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li>
            <Link href="/dog-walking" className="underline underline-offset-4 hover:text-slate-900">
              Dog walking
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li aria-current="page" className="text-slate-800">
            Shipley
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="border-y border-black/5 bg-[#f7f1e7]">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <div className="flex flex-wrap gap-2 text-xs text-slate-700">
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Updated: {UPDATED}</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Shipley • BD18</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
              Northcliffe • Shipley Glen • towpath connectors
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Dog walking in Shipley</h1>
          <p className="mt-3 max-w-prose text-lg text-slate-700">
            Calm, local walks with clear updates. We follow your preferences, keep pacing steady, and choose routes that
            make sense for your dog and the day.
          </p>

          {/* CTAs (no coloured button backgrounds) */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={btnPrimary}>
              Get in touch
            </Link>
            <a href={EMAIL} className={btnGhost}>
              Email
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            Quickest booking: send us your area in Shipley + what you need + your dog's breed/age/temperament.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        {/* Local value */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Shipley loops we actually use</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <span className="font-semibold">Northcliffe woods:</span> varied terrain and quieter paths for focused walks
              </li>
              <li>
                <span className="font-semibold">Shipley Glen:</span> steady pacing options; we avoid busy pinch points at peak times
              </li>
              <li>
                <span className="font-semibold">Towpath connectors:</span> entries near the station &amp; Dockfield; on-lead as default with good cycle etiquette
              </li>
              <li>
                <span className="font-semibold">Weather options:</span> shade in heat; firmer paths and shorter loops in winter
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Owner preferences, followed</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Harness/lead setup and cues you use</li>
              <li>Routes to prefer or avoid</li>
              <li>Treat/no-treat policy; training rules</li>
              <li>Off-lead only with written consent and a suitable area</li>
            </ul>
          </div>
        </section>

        {/* Practical info */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Busy times (useful to know)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Sunny late afternoons and weekends can crowd popular paths</li>
              <li>We switch to quieter connectors or adjust timing when it’s hectic</li>
              <li>School-run windows vary — we plan around them</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Access &amp; keys</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              <li>Keys stored with a coded tag — no address on the ring</li>
              <li>Clear entry notes keep arrivals calm and quick</li>
              <li>First walk meet-up in the park is fine if you prefer</li>
            </ul>
          </div>
        </section>

        {/* Updates */}
        <section className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-6">
          <h2 className="text-lg font-semibold">Simple updates &amp; steady approach</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Brief photo note after each walk</li>
            <li>Heat/ice plan: we adjust pace, shade and route sensibly</li>
            <li>Clear communication — short messages, plain English</li>
          </ul>
        </section>

        {/* Visible FAQ (matches JSON-LD) */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-bold tracking-tight text-slate-900">
            FAQs (Shipley dog walking)
          </h2>
          <div className="mt-4 divide-y divide-black/10 rounded-3xl border border-black/10 bg-white">
            {[
              {
                q: 'Where do you walk in Shipley?',
                a: 'Common options include Northcliffe woods loops, Shipley Glen routes, and towpath entries near the station/Dockfield depending on your dog and your preferences.',
              },
              {
                q: 'Do you walk off lead?',
                a: 'Only with written owner consent and in suitable, quiet areas. Otherwise on-lead with steady pacing and good towpath etiquette.',
              },
              {
                q: 'What updates do you send?',
                a: 'A short photo note after each walk so you know how things went, without spammy messages.',
              },
            ].map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/dog-walking">
            Dog walking — overview
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/dog-walking/saltaire">
            Dog walking — Saltaire
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Book a Shipley dog walk</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Get in touch with your area in Shipley, your dog's details, and preferred days — you'll get a clear yes/no and next steps.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className={btnPrimary}>
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className="rounded-3xl border border-black/10 bg-white/95 backdrop-blur shadow-lg p-3 flex gap-2">
          <Link
            href="/contact"
            className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Contact
          </Link>
          <a href={EMAIL} className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900">
            Email
          </a>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
