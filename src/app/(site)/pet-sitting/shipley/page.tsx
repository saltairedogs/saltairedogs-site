// app/(site)/pet-sitting/shipley/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pet Sitting in Shipley — Home Visits, Feeding, Cats & Small Pets (BD18)',
  description:
    'Pet sitting in Shipley (BD18): calm home visits for cats, dogs, rabbits, birds/parrots and fish feeding. Clear updates, routine-first care, and simple WhatsApp booking.',
  alternates: { canonical: 'https://www.saltairedogs.uk/pet-sitting/shipley' },
  openGraph: {
    title: 'Pet Sitting in Shipley — Home Visits & Feeding (BD18)',
    description:
      'Local pet sitting in Shipley with routine-first home visits: feeding, water, comfort checks, litter trays and optional photo updates.',
    url: 'https://www.saltairedogs.uk/pet-sitting/shipley',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07424 208127'
const NUMBER_TEL = 'tel:+447424208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function PetSittingShipleyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Pet Sitting in Shipley — Home Visits, Feeding, Cats & Small Pets (BD18)',
        url: 'https://www.saltairedogs.uk/pet-sitting/shipley',
        description: metadata.description,
        inLanguage: 'en-GB',
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
          { '@type': 'ListItem', position: 2, name: 'Pet Sitting', item: 'https://www.saltairedogs.uk/animal-feeding' },
          { '@type': 'ListItem', position: 3, name: 'Shipley', item: 'https://www.saltairedogs.uk/pet-sitting/shipley' },
        ],
      },
      {
        '@type': 'Service',
        name: 'Pet Sitting / Home Visits — Shipley (BD18)',
        serviceType: ['Pet sitting', 'Home visits', 'Animal feeding', 'Cat visits'],
        areaServed: ['Shipley', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          telephone: '+44 7424 208127',
        },
        availableChannel: [
          {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://www.saltairedogs.uk/whatsapp',
            availableLanguage: ['en'],
          },
          {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://www.saltairedogs.uk/contact',
            availableLanguage: ['en'],
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What does a Shipley pet sitting home visit include?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A typical home visit covers feeding and fresh water, comfort check, basic tidy-up of the area (e.g., litter tray routine if agreed), and a quick update afterwards. We follow your written notes so the routine stays consistent.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which parts of Shipley do you cover?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Shipley town centre and BD18 areas, including common nearby spots like the station-side/Dockfield side and routes towards Northcliffe and the canal connectors — availability depends on the day and schedule.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you look after cats and small pets too?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Home visits can cover cats, rabbits, small pets, birds/parrots and fish feeding. We’ll confirm routine, handling preferences and any medication needs in advance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you send updates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes — a short message after each visit. Optional photo updates are available (we keep it simple, not spammy).',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I book quickly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'WhatsApp is the fastest. Send your area, dates, visit frequency, and your pet details (species/breed, temperament, meds). We’ll confirm availability and next steps.',
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pet sitting in Shipley (home visits)</h1>
          <p className="mt-3 text-slate-700">
            Calm, routine-first home visits in Shipley (BD18) for cats, dogs, rabbits, small pets, birds/parrots and fish feeding.
            Clear updates, steady approach, and simple booking.
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

          {/* What a visit includes */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What a home visit includes</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Feeding + fresh water (exact routine followed)</li>
                <li>Comfort check + calm interaction (if your pet wants it)</li>
                <li>Litter routine / basic tidy-up if agreed (especially cats)</li>
                <li>Optional photo update (kept short and useful)</li>
                <li>Clear notes if anything seems “off”</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Shipley coverage (practical)</h2>
              <p className="mt-3 text-slate-700">
                We cover Shipley (BD18) and nearby connectors. Common situations include visits near the station side,
                Dockfield direction, and areas that link into Northcliffe / canal routes.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                If you’re just outside Shipley, message your postcode and we’ll confirm availability.
              </p>
            </div>
          </div>

          {/* Common Shipley use-cases */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">When Shipley home visits help most</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Holidays (cats + small pets often do best at home)</li>
                <li>Long shifts / late finishes (feeding + comfort check)</li>
                <li>New routine changes (keep things steady)</li>
                <li>Multiple pets on different feeding schedules</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Pets we can cover</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>
                  <span className="font-medium">Cats:</span> feeding, water, litter routine, quiet check-ins
                </li>
                <li>
                  <span className="font-medium">Small pets:</span> rabbits, guinea pigs, hamsters (routine-based)
                </li>
                <li>
                  <span className="font-medium">Birds/parrots:</span> diet + water + routine checks (handling as agreed)
                </li>
                <li>
                  <span className="font-medium">Fish feeding:</span> best with pre-portioned food to avoid overfeeding
                </li>
              </ul>
            </div>
          </div>

          {/* Trust + access */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Keys, access & calm entries</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Keys stored with a coded tag (no address on the ring)</li>
                <li>Clear entry notes help keep arrivals calm and quick</li>
                <li>Meet &amp; greet available before the first booking</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Updates (useful, not spammy)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Short message after each visit</li>
                <li>Optional photo update if you want it</li>
                <li>Clear note if anything changes (appetite, behaviour, etc.)</li>
              </ul>
            </div>
          </div>

          {/* Pricing note */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Pricing (simple guide)</h2>
            <p className="mt-3 text-slate-700">
              Home visits typically start <span className="font-medium">from £10</span>, depending on visit length, number of pets,
              frequency, and any special requirements (e.g., medication support).
            </p>
            <p className="mt-2 text-sm text-slate-600">
              For a quick quote, WhatsApp your area + dates + how many visits you need per day.
            </p>
          </div>

          {/* Internal links */}
          <div className="mt-6 text-sm text-slate-700">
            Related:{' '}
            <Link className="underline underline-offset-2" href="/animal-feeding">
              Animal feeding
            </Link>{' '}
            ·{' '}
            <Link className="underline underline-offset-2" href="/cat-sitting">
              Cat sitting
            </Link>{' '}
            ·{' '}
            <Link className="underline underline-offset-2" href="/medication-visits">
              Medication visits
            </Link>{' '}
            ·{' '}
            <Link className="underline underline-offset-2" href="/areas">
              Areas covered
            </Link>{' '}
            ·{' '}
            <Link className="underline underline-offset-2" href="/how-it-works">
              How it works
            </Link>
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
