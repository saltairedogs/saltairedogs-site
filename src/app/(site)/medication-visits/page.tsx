// app/(site)/medication-visits/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medication Visits — Pills, Drops & Timed Checks | Saltaire & Shipley',
  description:
    'Calm, on-time medication visits for pets in Saltaire & Shipley. Pills, drops and simple insulin given to your written routine. We follow your vet plan and keep it steady.',
  alternates: { canonical: 'https://www.saltairedogs.uk/medication-visits' },
  openGraph: {
    title: 'Medication Visits — Saltaire & Shipley',
    description:
      'We follow your vet plan: pills, eye/ear drops, and simple insulin as provided by the owner. Timed windows, calm handling, brief photo note after each visit.',
    url: 'https://www.saltairedogs.uk/medication-visits',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07424 208127'
const NUMBER_TEL = 'tel:+447424208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function MedicationVisitsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Medication Visits',
        serviceType: 'Pet Medication Visits (Home)',
        areaServed: ['Saltaire', 'Shipley'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          telephone: '+44 7424 208127',
        },
        availableChannel: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: 'https://www.saltairedogs.uk/whatsapp',
          telephone: '+44 7424 208127',
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What medications can you help with?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Owner-provided pills, capsules, liquids, eye/ear drops, and simple insulin injections as directed by your vet. We follow your written routine.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you set doses or change instructions?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We don’t diagnose or change plans. We strictly follow your vet’s instructions and your written routine.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you do specific timing windows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We offer morning, midday, and late-afternoon windows and will aim for the most appropriate slot for your pet’s timing.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if it’s not a good fit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'That’s okay. We’ll be honest if we think we’re not the right fit and can discuss alternatives or signpost you to other options.',
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
            Medication visits — calm, on-time help at home
          </h1>
          <p className="mt-3 text-slate-700">
            We follow your vet’s plan and your written routine — pills, eye/ear drops, or simple insulin provided by the
            owner — with steady handling and a brief photo note after each visit. If we’re not the right fit, that’s
            fine; we’ll say so and help you figure out next steps.
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

          {/* What we can help with */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">What we do</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Pills/capsules/liquids as per your vet’s instructions</li>
                <li>Eye/ear drops with calm handling</li>
                <li>Simple insulin injections with owner-provided supplies</li>
                <li>Timed windows: morning / midday / late afternoon</li>
                <li>Brief photo note after each visit</li>
              </ul>
            </div>

            {/* Fit, limits, and safety */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Fit & safety (plain English)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>We’re happy to discuss your pet’s needs to see if this is a good fit</li>
                <li>We don’t diagnose, set doses, or change plans — we just follow them</li>
                <li>Owner provides medication, syringes/needles, and a sharps box if needed</li>
                <li>If there’s any risk we can’t manage calmly, we’ll be honest and suggest options</li>
              </ul>
            </div>
          </div>

          {/* Your routine, followed */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Your routine, followed exactly</h2>
            <p className="mt-2 text-slate-700">
              You give clear written steps: med type/dose, timing window, food rules, storage, handling notes, and any
              “do/don’t” points. We confirm anything unclear before the first visit and keep communication simple.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>We aim for the agreed window every time</li>
              <li>Photo note after each visit (or text confirmation if you prefer)</li>
              <li>Keys handled securely (coded tag, no address)</li>
            </ul>
          </div>

          {/* Helpful local notes */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Helpful notes (local & practical)</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>For insulin, we’ll use your vet’s timing guidance and your fridge/storage setup</li>
              <li>If appetite affects dosing, include your vet’s written rule (e.g., “skip if no food”)</li>
              <li>Leave supplies in one place with labels; we’ll keep it tidy and consistent</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              If your plan changes, just message us with the new written instructions from your vet.
            </p>
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
              <p className="mt-1 text-slate-500 text-sm">No prices here — message to see if we’re the right fit.</p>
            </div>
          </div>

          {/* Internal links (helpful, not salesy) */}
          <div className="mt-6 text-sm text-slate-700">
            Related: <Link className="underline underline-offset-2" href="/how-it-works">How it works</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/cat-sitting">Cat sitting</Link> ·{' '}
            <Link className="underline underline-offset-2" href="/long-shift-support">Long-shift support</Link>
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
