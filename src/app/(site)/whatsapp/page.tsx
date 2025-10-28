// app/(site)/whatsapp/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'WhatsApp Saltaire Dog Walker | Cat Sitting & Pet Visits — Saltaire & Shipley',
  description:
    'Dog & cat sitting, animal feeding (birds, rabbits, chickens, reptiles), and dog walking in Saltaire & Shipley. Message us on WhatsApp. DBS-checked, insured, fast replies.',
  alternates: { canonical: 'https://www.saltairedogs.uk/whatsapp' },
  openGraph: {
    title: 'WhatsApp Saltaire Dog Walker — Saltaire Dogs + Pets',
    description:
      'WhatsApp chat for dog walking, cat sitting and any-animal feeding/drop-ins in Saltaire & Shipley. DBS-checked, insured.',
    url: 'https://www.saltairedogs.uk/whatsapp',
    siteName: 'Saltaire Dogs + Pets',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const NUMBER = '447305367941'

// default, open-ended message for the main buttons
const DEFAULT_MSG =
  "Hi, I'm in Saltaire/Shipley. I’m looking for pet care (walks, sitting, or feeding). Could you share your next available times?"

// zero-edit templates for the chips
const TEMPLATES: { label: string; msg: string }[] = [
  {
    label: 'Dog walks',
    msg: "Hi, I'm in Saltaire/Shipley. Looking for dog walks. When are your next available times?",
  },
  {
    label: 'Cat sitting / drop-ins',
    msg: "Hi, I'm in Saltaire/Shipley. I need cat drop-ins (feeding + litter + photo update). When can you start?",
  },
  {
    label: 'Feeding visit',
    msg: "Hi, I'm in Saltaire/Shipley. Can you do a feeding visit? What slots do you have?",
  },
  {
    label: 'Medication visit',
    msg: "Hi, I'm in Saltaire/Shipley. I need a medication visit. Are you available soon?",
  },
  {
    label: 'Puppy visit',
    msg: "Hi, I'm in Saltaire/Shipley. I need a short puppy visit. What times are free?",
  },
  {
    label: 'Small pets & exotics',
    msg: "Hi, I'm in Saltaire/Shipley. I need visits for a small pet/reptile (feeding/water/clean). What times are free?",
  },
  {
    label: 'General question',
    msg: "Hi, I'm in Saltaire/Shipley with a quick question about your services.",
  },
]

function waLink(msg: string) {
  return `https://wa.me/${NUMBER}?text=${encodeURIComponent(msg)}`
}
function waWebLink(msg: string) {
  return `https://api.whatsapp.com/send?phone=${NUMBER}&text=${encodeURIComponent(msg)}`
}

export default function WhatsappPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Saltaire Dogs + Pets',
        url: 'https://www.saltairedogs.uk',
        areaServed: ['Saltaire', 'Shipley'],
        telephone: '+44 7305 367941',
        sameAs: ['https://www.instagram.com/saltairedogs'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Saltaire',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['English'],
            url: 'https://www.saltairedogs.uk/whatsapp',
          },
        ],
        makesOffer: [
          { '@type': 'Service', name: 'Dog walking' },
          { '@type': 'Service', name: 'Cat sitting & drop-ins' },
          { '@type': 'Service', name: 'Animal feeding (birds, rabbits, chickens, reptiles)' },
          { '@type': 'Service', name: 'Medication visits' },
          { '@type': 'Service', name: 'Puppy visits' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How fast do you reply on WhatsApp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We reply ASAP. If you message outside usual hours, we respond as soon as we’re back.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you cover my street?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We cover Saltaire & Shipley. If you’re further out, send a message and we’ll see if we can help.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I include in my first message?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Just say what you need (dog walks, cat sitting, feeding including birds/rabbits/chickens/reptiles, meds, puppy visit). We’ll take it from there.',
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
        <div className="mx-auto max-w-4xl px-4 pt-14 pb-6 sm:pt-20 sm:pb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Message us on WhatsApp — Saltaire & Shipley
          </h1>
          <p className="mt-3 text-slate-600">
            DBS-checked and insured. We reply <strong>ASAP</strong>. Further out than Saltaire/Shipley? Send a message and
            we’ll see if we can help.
          </p>

          {/* What we do */}
          <div className="mt-4 text-slate-700">
            <p>
              We do dog and cat sitting, any-animal feeding (birds, rabbits, chickens, reptiles), and dog walking in
              Saltaire & Shipley.
            </p>
          </div>

          {/* Primary buttons use the open, default message */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={waLink(DEFAULT_MSG)}
              className="rounded-lg bg-green-600 px-4 py-2 text-white font-medium text-center hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Chat on WhatsApp
            </a>
            <a
              href={waWebLink(DEFAULT_MSG)}
              className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-center hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Open WhatsApp Web
            </a>
          </div>

          {/* Quick templates (direct links; no JS needed) */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-slate-700">Quick message templates</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {TEMPLATES.map((t) => (
                <Link
                  key={t.label}
                  href={waLink(t.msg)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50"
                >
                  {t.label}
                </Link>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">No edits — tap and send.</p>
          </div>

          {/* Trust line */}
          <div className="mt-6 text-sm text-slate-600">DBS checked • Insured • Photo updates every visit</div>
        </div>
      </section>

      {/* Coverage & replies */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h2 className="text-xl font-semibold">Coverage & replies</h2>
        <ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
            <li>Areas: Saltaire & Shipley. Further out? Send a message.</li>
            <li>Replies: ASAP.</li>
            <li>Simple first message is fine — we’ll handle the rest.</li>
          </ul>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
