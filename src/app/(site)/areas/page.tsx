// app/(site)/areas/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Areas We Cover — Saltaire & Shipley | Saltaire Dogs + Pets',
  description:
    'Pet care across Saltaire & Shipley: dog walking, cat sitting, animal feeding, small pets & exotics. Nearby but outside the area? Message and we’ll see if we can help.',
  alternates: { canonical: 'https://www.saltairedogs.uk/areas' },
  openGraph: {
    title: 'Areas We Cover — Saltaire & Shipley',
    description:
      'Local coverage for dog walks, cat visits and small-pet care. Typical timings, entry notes and simple contact options.',
    url: 'https://www.saltairedogs.uk/areas',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07305 367941'
const NUMBER_TEL = 'tel:+447305367941'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function AreasPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Saltaire Dogs + Pets',
        url: 'https://www.saltairedogs.uk',
        telephone: '+44 7305 367941',
        areaServed: ['Saltaire', 'Shipley'],
        serviceArea: [
          { '@type': 'AdministrativeArea', name: 'Saltaire' },
          { '@type': 'AdministrativeArea', name: 'Shipley' },
        ],
        sameAs: ['https://www.instagram.com/saltairedogs'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you cover my street?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We cover Saltaire & Shipley. If you’re nearby but outside these, send a quick message and we’ll see if we can help.',
            },
          },
          {
            '@type': 'Question',
            name: 'What times do you work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Typical windows are morning, midday and mid-afternoon. For medication or specific routines we agree exact windows in advance.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do keys and access work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Keys are stored with a coded tag (no address). We follow your entry notes and leave things as we found them.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.saltairedogs.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://www.saltairedogs.uk/areas' },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-14 pb-8 sm:pt-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Areas we cover — Saltaire & Shipley</h1>
        <p className="mt-3 text-slate-700">
          Local pet care for everyday routines and trips away. If you’re just outside Saltaire or Shipley, send a quick
          message — if it’s a fit, we’ll try to make it work.
        </p>

        {/* Fast contact */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
          <div className="flex items-center justify-center gap-4 text-sm text-slate-700">
            <a href={NUMBER_TEL} className="underline underline-offset-2">Call {NUMBER_DISPLAY}</a>
            <a href={EMAIL} className="underline underline-offset-2">Email</a>
          </div>
        </div>
      </section>

      {/* Coverage blocks */}
      <section className="mx-auto max-w-4xl px-4 pb-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Saltaire</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Roberts Park, Victoria Road area, Albert Terrace, Caroline/George Sts</li>
              <li>Leeds–Liverpool Canal (Hirst Wood direction, on-lead by default)</li>
              <li>Flats/terraces access notes welcome for quieter entries</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Shipley</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Northcliffe woods loops and back-street connectors</li>
              <li>Towpath entries around Shipley station & Dockfield (on-lead by default)</li>
              <li>Blocks/parking info helps us keep arrivals calm and quick</li>
            </ul>
          </div>
        </div>

        {/* Timings & entry */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Typical timings</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Morning, midday and mid-afternoon windows</li>
              <li>Medication or strict routines: we agree exact windows</li>
              <li>Heat/ice: we adjust timing, route and pace sensibly</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Entry & keys (simple)</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Keys stored with a coded tag — no address on the ring</li>
              <li>Clear entry notes (gate, buzzer, pets that bolt) appreciated</li>
              <li>We leave things as we found them, tidy and set</li>
            </ul>
            <p className="mt-2 text-sm text-slate-600">
              More soon on <Link className="underline underline-offset-2" href="/keys-security">Keys & security</Link>.
            </p>
          </div>
        </div>

        {/* Services snapshot */}
        <div className="mt-8 rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">What we can help with</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Dog walking (solo; paired by owner request)</li>
              <li>Cat sitting & litter refresh</li>
              <li>Animal feeding (birds, rabbits, chickens, fish)</li>
            </ul>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Parrots/cockatiels (seed/water refresh, tidy)</li>
              <li>Reptiles/snakes to your routine (no husbandry changes)</li>
              <li>Medication visits (pills/drops) per vet plan</li>
            </ul>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            If it’s not listed, ask — if it’s sensible and safe, we’ll try to help.
          </p>
        </div>

        {/* Nearby but outside? */}
        <div className="mt-8 rounded-xl border border-slate-200 p-5">
          <h2 className="text-lg font-semibold">Nearby but outside these?</h2>
          <p className="mt-2 text-slate-700">
            Message with your street and what you need. If the timing and distance make sense, we’ll try to fit you in.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/whatsapp" className="rounded-lg bg-green-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-green-700">
              WhatsApp
            </Link>
            <Link href="/contact" className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
              Contact form
            </Link>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-6 text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/dog-walking">
            Dog walking
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/cat-sitting">
            Cat sitting
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/animal-feeding">
            Animal feeding
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
