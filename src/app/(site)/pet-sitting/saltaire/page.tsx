// app/(site)/pet-sitting/saltaire/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Pet Sitting in Saltaire — Home Visits, Feeding, Routine Checks & Updates',
  description:
    'Local pet sitting in Saltaire (BD18): calm home visits for feeding, fresh water, routine checks and simple photo updates. Ideal for cats, small pets and holiday cover.',
  alternates: { canonical: 'https://www.saltairedogs.uk/pet-sitting/saltaire' },
  openGraph: {
    title: 'Pet Sitting in Saltaire — Calm Home Visits & Simple Updates',
    description:
      'Routine-led pet sitting in Saltaire: feeding, fresh water, comfort checks and optional photo updates. Clear communication, no fuss.',
    url: 'https://www.saltairedogs.uk/pet-sitting/saltaire',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'

// ✅ Use this number everywhere on this page
const NUMBER_DISPLAY = '07424 208127'
const NUMBER_E164 = '+447424208127'
const NUMBER_TEL = 'tel:+447424208127'

const EMAIL = 'mailto:saltairedogs@proton.me'

function waMeLink(e164: string, text?: string) {
  const n = e164.replace(/[^\d+]/g, '').replace('+', '')
  const base = `https://wa.me/${n}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export default function PetSittingSaltairePage() {
  const waPrefill = waMeLink(
    NUMBER_E164,
    `Hi Saltaire Dogs + Pets — enquiry via saltairedogs.uk.
Area: Saltaire (BD18)
Service: Pet sitting / home visits
Pets: (type + name + age)
Dates needed:
Visit frequency: (1x/day / 2x/day / other)
Any meds / special instructions:
Access notes (key safe / key handover):`
  )

  const faqs = [
    {
      q: 'What does “pet sitting” mean for you?',
      a: 'We do calm, routine-led home visits: feeding and fresh water, basic checks, comfort time (as the pet allows), and a quick update so you know everything’s fine.',
    },
    {
      q: 'What pets do you cover in Saltaire?',
      a: 'Most requests are cats and small pets. If you have birds/parrots, rabbits, reptiles or fish, message with the routine and we’ll confirm availability.',
    },
    {
      q: 'Do you send updates?',
      a: 'Yes — a short message after each visit, with an optional photo. Clear and simple, not spammy.',
    },
    {
      q: 'How do keys and entry work?',
      a: 'Keys can be stored with a coded tag (no address on the ring). Clear entry notes help keep arrivals calm and consistent.',
    },
    {
      q: 'How do I book fastest?',
      a: 'WhatsApp is quickest. Send dates, visit frequency, pet type, and any important notes (meds, indoor-only, shy behaviour, alarm/entry instructions).',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Pet Sitting in Saltaire — Home Visits, Feeding, Routine Checks & Updates',
        url: `${SITE_URL}/pet-sitting/saltaire`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Pet Sitting', item: `${SITE_URL}/pet-sitting` },
          { '@type': 'ListItem', position: 3, name: 'Saltaire', item: `${SITE_URL}/pet-sitting/saltaire` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        telephone: NUMBER_E164,
        areaServed: ['Saltaire', 'BD18', 'Shipley', 'Bradford'],
      },
      {
        '@type': 'Service',
        name: 'Pet Sitting — Saltaire',
        serviceType: 'Pet Sitting',
        areaServed: ['Saltaire', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_NAME,
          url: SITE_URL,
          telephone: NUMBER_E164,
        },
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: `${SITE_URL}/whatsapp`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/areas">
              Areas
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-800">
            Pet sitting — Saltaire
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-10 pb-6 sm:pt-14 sm:pb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pet sitting in Saltaire</h1>
        <p className="mt-3 text-slate-700">
          Calm, routine-led <b>home visits</b> in Saltaire (BD18) — feeding, fresh water, comfort check-ins and a simple
          update so you’re not worrying while you’re away.
        </p>

        {/* Fast contact row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href={waPrefill}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-center font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            WhatsApp (fastest)
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-center font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
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

        {/* Value blocks */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">What a visit includes</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Feeding to your instructions + fresh water</li>
              <li>Routine checks (quiet, calm, no rushing)</li>
              <li>Comfort time (as your pet allows)</li>
              <li>Quick message update (optional photo)</li>
              <li>Basic home-sense checks (doors/windows as you request)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Saltaire coverage (practical)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Saltaire village + BD18</li>
              <li>Roberts Park / canal-side areas</li>
              <li>Predictable timings where possible (routine matters)</li>
              <li>If you’re just outside Saltaire, message and we’ll confirm</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Shy pets &amp; “no pressure” visits</h2>
            <p className="mt-2 text-slate-700">
              Some pets don’t want interaction from new people — totally normal. We keep the visit predictable and low
              stress: routine first, calm presence, no forcing contact.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Tip: leave notes on hiding spots, favourite cues, treat rules (or no treats), and what “normal behaviour”
              looks like.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Keys &amp; entry (simple + safe)</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Keys stored with a coded tag — no address on the ring</li>
              <li>Clear entry notes help keep arrivals calm and consistent</li>
              <li>First visit can be a handover + walkthrough if you prefer</li>
            </ul>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-6 text-sm text-slate-700">
          Related:{' '}
          <Link className="underline underline-offset-2" href="/how-it-works">
            How it works
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/areas">
            Areas we cover
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/animal-feeding">
            Animal feeding
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/medication-visits">
            Medication visits
          </Link>{' '}
          ·{' '}
          <Link className="underline underline-offset-2" href="/dog-walking/saltaire">
            Dog walking in Saltaire
          </Link>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Quick answers</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none font-medium text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA row */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={waPrefill}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            WhatsApp (fastest)
          </a>
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
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
