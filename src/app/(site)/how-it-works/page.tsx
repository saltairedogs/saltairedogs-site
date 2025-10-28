// app/(site)/how-it-works/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — Simple, Flexible & Local | Saltaire & Shipley',
  description:
    'A relaxed, human way to arrange pet care. Message on WhatsApp, quick meet & greet, set your routine, and we keep it steady. Saltaire & Shipley.',
  alternates: { canonical: 'https://www.saltairedogs.uk/how-it-works' },
  openGraph: {
    title: 'How It Works — Saltaire Dogs + Pets',
    description:
      'Message → meet & greet → trial visit → your routine set. Easy to contact, easy to pay. We keep things simple and local.',
    url: 'https://www.saltairedogs.uk/how-it-works',
    siteName: 'Saltaire Dogs + Pets',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const NUMBER_DISPLAY = '07305 367941'
const NUMBER_TEL = 'tel:+447305367941'
const EMAIL = 'mailto:saltairedogs@proton.me'

export default function HowItWorksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Pet Care — How It Works',
        serviceType: 'Dog Walking / Cat Sitting / Small Pets & Exotics',
        areaServed: ['Saltaire', 'Shipley'],
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
          telephone: '+44 7305 367941',
          email: 'saltairedogs@proton.me',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do we start?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Message on WhatsApp, we agree a quick meet & greet, and set a simple routine that works for you.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you customise visits?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Everything is to your written routine — feeding, walk style/length, tidy/clean steps, and any do/don’t notes.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do we pay?',
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
      <section>
        <div className="mx-auto max-w-4xl px-4 pt-14 pb-6 sm:pt-20 sm:pb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works — simple & flexible</h1>
          <p className="mt-3 text-slate-700">
            No faff. We keep things relaxed and human: quick messages, quick decisions, and your routine written down so
            visits are steady and predictable.
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

          {/* Steps */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">1) Say hello</h2>
              <p className="mt-2 text-slate-700">
                A quick WhatsApp is easiest. Tell us what you need and roughly when. If you’re not sure, just say so —
                we’ll help you figure out a sensible plan.
              </p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Areas: Saltaire & Shipley (nearby? message)</li>
                <li>Windows: morning / midday / late afternoon</li>
                <li>Fast replies, plain answers</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">2) Meet & greet</h2>
              <p className="mt-2 text-slate-700">
                A short visit to say hi, note routines, see the setup, and check keys/access. If it feels right, we
                agree a trial visit or walk.
              </p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>We keep it calm and unhurried</li>
                <li>Keys tagged by code only (no address)</li>
                <li>We confirm anything unclear before we start</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">3) Trial visit or walk</h2>
              <p className="mt-2 text-slate-700">
                We do a single visit/walk to your written steps and send a short photo note. If the plan works, we set
                your regular slots or holiday schedule.
              </p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Steady pacing and simple updates</li>
                <li>Owner-led adjustments after the trial</li>
                <li>No pressure — we only continue if it’s a fit</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">4) Your routine, written down</h2>
              <p className="mt-2 text-slate-700">
                You tell us exactly how you do things — we follow it. We keep a simple note of timing, amounts, cleaning
                steps, and any “do/don’t” rules so nothing is missed.
              </p>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                <li>Photo note after each visit</li>
                <li>Clear tweaks any time via WhatsApp</li>
                <li>We leave things as we found them, clean and set</li>
              </ul>
            </div>
          </div>

          {/* Custom services examples */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">We customise to what you need</h2>
            <p className="mt-2 text-slate-700">
              Tell us the job; we’ll follow your routine. A few real-world examples we’re happy to do:
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>Dog walk with towpath etiquette and steady pacing</li>
                <li>Cat drop-in: feed, water, litter scoop, quick brush</li>
                <li>Parrot/cockatiel: water/seed refresh, liner swap</li>
                <li>Rabbits: hay top-up, pellets/greens, tidy hutch</li>
              </ul>
              <ul className="list-disc pl-5 text-slate-700 space-y-1">
                <li>Reptiles/snakes: feed/checks to your notes (no changes to husbandry)</li>
                <li>Fish: feed to schedule, light checks as instructed</li>
                <li>Medication visit (pills/drops) as provided by owner</li>
                <li>Holiday cover with once/twice daily visits</li>
              </ul>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              If it’s not listed, just ask — if it’s sensible and safe, we’ll try to help.
            </p>
          </div>

          {/* Easy to contact & pay */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Easy to contact</h2>
              <p className="mt-2 text-slate-700">
                WhatsApp is quickest. Prefer email or a form? That’s fine too. We reply ASAP and keep messages short.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/whatsapp" className="rounded-lg bg-green-600 px-3 py-1.5 text-white text-sm font-medium hover:bg-green-700">
                  WhatsApp
                </Link>
                <Link href="/contact" className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
                  Contact form
                </Link>
                <a href={NUMBER_TEL} className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
                  Call {NUMBER_DISPLAY}
                </a>
                <a href={EMAIL} className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-slate-50">
                  Email
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <h2 className="text-lg font-semibold">Easy to pay</h2>
              <p className="mt-2 text-slate-700">Cash, bank transfer, or pay-in-4 options like Clearpay and Klarna.</p>
              <p className="mt-1 text-slate-500 text-sm">
                No prices here — just message to see if we’re the right fit for what you need.
              </p>
            </div>
          </div>

          {/* Light policies (helpful, not heavy) */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Keys, safety & simple policies</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Keys tagged by code only (no address); stored securely</li>
              <li>Off-lead only with written owner consent and a suitable spot</li>
              <li>Weather plan: we adjust length/route for heat or ice</li>
              <li>If plans change, just message — we keep it flexible</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              Full details: coming soon on <Link className="underline underline-offset-2" href="/keys-security">Keys & security</Link>{' '}
              and <Link className="underline underline-offset-2" href="/safety-insurance-dbs">Safety, insurance & DBS</Link>.
            </p>
          </div>

          {/* Final reassurance */}
          <div className="mt-8 rounded-xl border border-slate-200 p-5">
            <h2 className="text-lg font-semibold">Friendly, local, not pushy</h2>
            <p className="mt-2 text-slate-700">
              We’re nearby and happy to help. If it’s a fit, great. If not, no problem — we’ll still point you in a
              useful direction. Message to see if we’re right for what you need.
            </p>
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
