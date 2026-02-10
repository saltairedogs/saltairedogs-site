// src/app/(site)/services/page.tsx
// Services hub — Saltaire Dogs + Pets
// Note: add a hero image at /public/services-hero.webp (or change the src below)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'error'

const BUSINESS_NAME = 'Saltaire Dogs + Pets'
const SITE_URL = 'https://www.saltairedogs.uk'
const UPDATED = '2025-12-18'

const EMAIL = 'mailto:saltairedogs@proton.me'

const SERVICES = [
  {
    title: 'Dog walking',
    desc: 'Calm, steady walks with clear updates. Owner preferences followed.',
    href: '/dog-walking',
    children: [
      { name: 'Dog walking in Saltaire (BD18)', href: '/dog-walking/saltaire' },
      { name: 'Dog walking in Shipley', href: '/dog-walking/shipley' },
    ],
    bestFor: 'Dogs who benefit from routine, steady pacing and quiet loops.',
    includes: 'Route choice, safe handling, short update after the walk.',
    areas: 'Saltaire • Shipley (BD18)',
  },
  {
    title: 'Cat sitting',
    desc: 'Routine-led home visits: feeding, water, litter and calm check-ins.',
    href: '/cat-sitting',
    children: [
      { name: 'Cat sitting in Saltaire (BD18)', href: '/cat-sitting/saltaire' },
      { name: 'Cat sitting in Shipley', href: '/cat-sitting/shipley' },
    ],
    bestFor: 'Cats who do best staying at home (holidays, work trips, long days).',
    includes: 'Feeding, fresh water, litter routine, comfort check + update.',
    areas: 'Saltaire • Shipley (BD18)',
  },
  {
    title: 'Animal feeding',
    desc: 'Simple drop-ins for feeding, fresh water and quick comfort checks.',
    href: '/animal-feeding',
    bestFor: 'Short cover when you’re out: work, family days, late shifts.',
    includes: 'Feeding/water to your notes + quick home-sense checks if requested.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'Medication visits',
    desc: 'Calm visits for basic medication that you provide and explain.',
    href: '/medication-visits',
    bestFor: 'Pets who need meds while you’re away or working.',
    includes: 'Routine-led visit + clear message if anything seems off.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'Small pets & exotics',
    desc: 'Visits for rabbits, reptiles, small mammals and other exotics.',
    href: '/small-pets-exotics',
    bestFor: 'Owners who want careful, note-led care for specialist pets.',
    includes: 'Feeding/water, checks, enclosure basics as agreed.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'Rabbits sitting',
    desc: 'Routine-led rabbit visits: feeding, water and wellbeing checks.',
    href: '/rabbits-sitting',
    bestFor: 'Holiday cover and work-day checks for rabbits at home.',
    includes: 'Feeding, fresh water, basic checks, tidy as agreed.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'Parrots visits',
    desc: 'Calm, low-stress visits for parrots and birds (routine first).',
    href: '/parrots-visits',
    bestFor: 'Bird owners who want consistent, quiet check-ins.',
    includes: 'Food/water routine, wellbeing check, tidy as agreed.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'New baby help',
    desc: 'Support visits when life changes fast (and pets still need routine).',
    href: '/new-baby-help',
    bestFor: 'New parents who need simple, reliable pet support.',
    includes: 'Drop-ins or short walks depending on your setup.',
    areas: 'Saltaire • Shipley • nearby',
  },
  {
    title: 'Long shift support',
    desc: 'Comfort breaks and check-ins during long work days.',
    href: '/long-shift-support',
    bestFor: 'NHS/shift work, long commutes, unpredictable days.',
    includes: 'Routine-led visit + simple update after.',
    areas: 'Saltaire • Shipley • nearby',
  },
] as const

export const metadata: Metadata = {
  title: 'Services — Dog Walking, Cat Sitting & Pet Visits in Saltaire & Shipley',
  description:
    'Explore Saltaire Dogs + Pets services: dog walking, cat sitting, animal feeding, medication visits, rabbits, parrots and small pets/exotics. Serving Saltaire (BD18) and Shipley with calm care and clear updates.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Services — Saltaire Dogs + Pets',
    description:
      'Dog walking, cat sitting and calm home visits in Saltaire (BD18) and Shipley. Choose a service and get in touch to book.',
    url: `${SITE_URL}/services`,
    siteName: BUSINESS_NAME,
    type: 'website',
    images: [{ url: `${SITE_URL}/hero-image-canal-saltaire-walk.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — Saltaire Dogs + Pets',
    description: 'Dog walking, cat sitting and calm home visits in Saltaire (BD18) and Shipley.',
    images: [`${SITE_URL}/services-hero.webp`],
  },
  robots: { index: true, follow: true },
  keywords: [
    'dog walking saltaire',
    'dog walking shipley',
    'cat sitting saltaire',
    'cat sitting shipley',
    'pet sitter bd18',
    'animal feeding visits',
    'medication visits',
    'small pets sitting saltaire',
    'rabbits sitting saltaire',
  ],
}

export default function ServicesPage() {
  const faqs = [
    {
      q: 'Where do you cover?',
      a: 'Main coverage is Saltaire (BD18) and Shipley. If you’re nearby, message your street and we’ll confirm quickly.',
    },
    {
      q: 'How do I book fastest?',
      a: 'Get in touch via the contact form or email. Send your area (Saltaire/Shipley), dates, what service you need, and any key notes (routine/meds/indoor-only).',
    },
    {
      q: 'Do you send updates?',
      a: 'Yes — a short, clear update after each walk or visit (optional photo).',
    },
    {
      q: 'How do keys work?',
      a: 'Keys are stored with a coded tag (no address on the ring). Clear entry notes keep arrivals calm and consistent.',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: 'Services — Dog Walking, Cat Sitting & Pet Visits in Saltaire & Shipley',
        url: `${SITE_URL}/services`,
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
        inLanguage: 'en-GB',
        dateModified: UPDATED,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: BUSINESS_NAME,
        url: SITE_URL,
        email: 'saltairedogs@proton.me',
        areaServed: ['Saltaire', 'Shipley', 'BD18', 'Bradford'],
      },
      {
        '@type': 'ItemList',
        name: 'Pet care services',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: SERVICES.length,
        itemListElement: SERVICES.map((s, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: s.title,
          url: `${SITE_URL}${s.href}`,
        })),
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
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link className="underline underline-offset-2 hover:text-slate-900" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-800">
            Services
          </li>
        </ol>
      </nav>

      {/* Hero (full width image) */}
      <section className="mt-4">
        <div className="relative overflow-hidden bg-[#131415]">
          <div className="relative h-[360px] sm:h-[440px]">
            <Image
              src="/images/services/hero-image-canal-saltaire-walk.jpg"
              alt="Calm pet-care in Saltaire and Shipley."
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-8 sm:pb-10">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  <span className="font-medium">Updated</span>
                  <span className="text-white/70">{UPDATED}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/80">Saltaire • Shipley • BD18</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Services — calm pet care in Saltaire &amp; Shipley
                </h1>
                <p className="mt-3 max-w-prose text-white/85">
                  Dog walking, cat sitting and routine-led home visits. Simple communication, safe handling, and a short
                  update after each walk or visit.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#C89B3C] px-4 py-2 text-sm font-semibold text-[#131415] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Contact form
                  </Link>
                  <a
                    href={EMAIL}
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    Email
                  </a>
                </div>

                <p className="mt-4 text-xs text-white/70">
                  Quick booking tip: message your area (Saltaire/Shipley) + dates + service + any routine notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        {/* Why us */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#E6E3DA] bg-[#F7F7F6] p-6">
            <h2 className="text-xl font-semibold">Why people choose us</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Calm handling (no drama, no rushing)</li>
              <li>• Routine-led visits (your notes followed)</li>
              <li>• Clear updates (short message, optional photo)</li>
              <li>• Coded key handling (no address on the ring)</li>
            </ul>
            <div className="mt-4 text-sm text-slate-700">
              New here? Start with <Link className="underline underline-offset-2" href="/how-it-works">How it works</Link>.
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6E3DA] p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Pick a service</h2>
            <p className="mt-2 text-slate-700">
              These pages are written for real local searches (and real questions). Choose the closest match below.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <article key={s.href} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{s.desc}</p>

                  {'children' in s && s.children?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold text-slate-800 hover:bg-slate-100"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 flex gap-3">
                    <Link
                      href={s.href}
                      className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
                    >
                      View details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-10 rounded-2xl border border-[#E6E3DA] bg-white p-6">
          <h2 className="text-xl font-semibold">Quick comparison</h2>
          <p className="mt-2 text-slate-700">
            If you’re not sure what to pick, this makes it simple.
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Service</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Best for</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">What you get</th>
                  <th className="py-3 pr-4 font-semibold text-slate-900">Coverage</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {SERVICES.map((s) => (
                  <tr key={`row-${s.href}`} className="border-b border-slate-200">
                    <td className="py-4 pr-4">
                      <Link className="font-semibold underline underline-offset-2" href={s.href}>
                        {s.title}
                      </Link>
                      <div className="mt-1 text-slate-600">{s.desc}</div>
                    </td>
                    <td className="py-4 pr-4 text-slate-700">{s.bestFor}</td>
                    <td className="py-4 pr-4 text-slate-700">{s.includes}</td>
                    <td className="py-4 pr-4 text-slate-700">{s.areas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-slate-700">
            Want a simple guide price? See <Link className="underline underline-offset-2" href="/pricing">Pricing</Link>.
          </div>
        </div>

        {/* Areas CTA */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#E6E3DA] bg-[#F7F7F6] p-6">
            <h2 className="text-xl font-semibold">Areas we cover</h2>
            <p className="mt-2 text-slate-700">
              Saltaire (BD18) and Shipley are the core areas. Nearby streets are often fine.
            </p>
            <div className="mt-4">
              <Link
                href="/areas"
                className="inline-flex items-center justify-center rounded-lg bg-[#131415] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              >
                View areas →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6E3DA] p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold">Book in under a minute</h2>
            <p className="mt-2 text-slate-700">
              Message your <b>area</b>, <b>dates</b>, and what you need. If meds or special routines, include the basics.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#C89B3C] px-4 py-2 text-sm font-semibold text-[#131415] hover:opacity-95"
              >
                Get in touch
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
              >
                Contact form
              </Link>
              <a
                href={EMAIL}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Quick answers</h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
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
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
