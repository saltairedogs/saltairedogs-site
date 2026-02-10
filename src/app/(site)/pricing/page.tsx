// src/app/(site)/pricing/page.tsx
// Pricing — Saltaire Dogs + Pets
// Goals:
// - Answer the #1 conversion question (price) with clear “from” guide prices
// - Rank for local-intent price searches (Saltaire/Shipley/BD18)
// - Push Contact/Email above the fold
// - Structured data: WebPage + BreadcrumbList + LocalBusiness + OfferCatalog + FAQPage

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

export const dynamic = "error";

const BUSINESS_NAME = "Saltaire Dogs + Pets";
const SITE_URL = "https://www.saltairedogs.uk";
const PATH = "/pricing";
const UPDATED = "2025-12-18";

// Put your generated image in /public/images/pricing-page/pricing-entryway.webp (or change this path)
const HERO_IMAGE = "/images/pricing-page/pricing-entryway.webp";

const EMAIL = "saltairedogs@proton.me";
const EMAIL_MAILTO = `mailto:${EMAIL}`;

const AREAS = ["Saltaire", "Shipley", "BD18", "Baildon"] as const;

type PriceCard = {
  title: string;
  price: string;
  note: string;
  bullets: string[];
};

const PRICES: PriceCard[] = [
  {
    title: "Dog walking (short walk)",
    price: "From £10",
    note: "Steady, local loops — owner preferences followed.",
    bullets: ["Great for routine maintenance", "On-lead by default", "Brief photo note after"],
  },
  {
    title: "Dog walking (longer walk)",
    price: "From £15",
    note: "More time for sniffing, training calmness, and distance.",
    bullets: ["Better for higher-energy dogs", "Route choice depends on weather", "Brief photo note after"],
  },
  {
    title: "Cat sitting / home visit",
    price: "From £10",
    note: "Feeding, water, litter routine + calm check-in.",
    bullets: ["Shy-cat friendly", "Optional photo update", "Routine-led, quiet approach"],
  },
  {
    title: "Small pets / birds / fish visits",
    price: "From £10",
    note: "Routine-based care with your written instructions.",
    bullets: ["Pre-portioned food preferred", "Handling only if agreed", "Quick update after visit"],
  },
] as const;

const ADD_ONS = [
  { label: "Additional pet", value: "From +£3" },
  { label: "Weekend / Bank Holiday", value: "From +£2" },
  { label: "Medication support", value: "From +£2 (if needed)" },
  { label: "Extra time (longer visit)", value: "From +£5" },
] as const;

export const metadata: Metadata = {
  title: "Pricing — Dog Walking & Pet Sitting in Saltaire & Shipley (BD18)",
  description:
    "Guide prices for dog walking, cat sitting and home visits in Saltaire & Shipley (BD18). Transparent 'from' pricing, calm care, and easy online booking.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Pricing — Saltaire Dogs + Pets",
    description:
      "Guide prices for dog walking and pet sitting in Saltaire & Shipley (BD18). Easy online booking and calm, routine-led care.",
    url: `${SITE_URL}${PATH}`,
    siteName: BUSINESS_NAME,
    type: "website",
    images: [{ url: `${SITE_URL}${HERO_IMAGE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Saltaire Dogs + Pets",
    description: "Guide prices for dog walking & pet sitting in Saltaire & Shipley (BD18).",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  robots: { index: true, follow: true },
  keywords: [
    "dog walker prices saltaire",
    "dog walker prices shipley",
    "cat sitting prices saltaire",
    "cat sitting prices shipley",
    "pet sitting prices bd18",
    "dog walking cost bd18",
    "home visits saltaire prices",
  ],
};

export default function PricingPage() {
  const faqs = [
    {
      q: "Are these fixed prices?",
      a: "They\u2019re guide prices (\u201cfrom\u201d). Exact pricing depends on your area, visit length, number of pets, and any special requirements. Get in touch for a quick yes/no and a clear quote.",
    },
    {
      q: "Do you charge extra for reactive or nervous dogs?",
      a: "Sometimes, yes — if a 1:1 slot or quieter timing is needed. We’ll always tell you upfront, and we’ll keep the plan simple and calm.",
    },
    {
      q: "Do you do meet & greets?",
      a: "Yes — especially for regular bookings, nervous pets, or key handovers. It keeps everything calmer and avoids surprises.",
    },
    {
      q: "Do you send updates?",
      a: "Yes. We keep updates short: a brief message and (if you want) a photo after each walk/visit.",
    },
    {
      q: "What areas do you cover?",
      a: "Primarily Saltaire and Shipley (BD18), plus nearby areas like Baildon depending on schedule. If you’re just outside, message and we’ll confirm.",
    },
  ] as const;

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}${PATH}` },
    ],
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metadata.title,
    url: `${SITE_URL}${PATH}`,
    description: metadata.description,
    inLanguage: "en-GB",
    dateModified: UPDATED,
    isPartOf: { "@type": "WebSite", name: BUSINESS_NAME, url: SITE_URL },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    email: EMAIL,
    /* phone removed */
    areaServed: AREAS,
    image: [`${SITE_URL}${HERO_IMAGE}`],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      addressCountry: "GB",
    },
  };

  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Pet care pricing (guide prices)",
    itemListElement: PRICES.map((p) => ({
      "@type": "Offer",
      priceCurrency: "GBP",
      price: p.price.replace(/[^\d.]/g, "") || undefined,
      description: `${p.title} — ${p.note}`,
      itemOffered: {
        "@type": "Service",
        name: p.title,
        areaServed: ["Saltaire", "Shipley", "BD18"],
      },
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Fragment>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Fragment>

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
            Pricing
          </li>
        </ol>
      </nav>

      {/* Full-width hero */}
      <header className="mt-4">
        <div className="relative w-full overflow-hidden border-y border-black/10">
          <div className="relative h-[420px] sm:h-[520px]">
            <Image
              src={HERO_IMAGE}
              alt="A calm, real-life moment at the front door before a walk — phone, lead, and keys ready."
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          </div>

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl px-4">
              <div className="my-auto max-w-2xl pb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/90">
                  <span className="font-semibold">Updated</span>
                  <span className="text-white/70">{UPDATED}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/80">Saltaire • Shipley • BD18</span>
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Pricing — dog walking &amp; pet sitting
                </h1>

                <p className="mt-3 max-w-prose text-base text-white/85 sm:text-lg">
                  Simple guide prices for Saltaire &amp; Shipley. Calm care, routine-led visits, and easy online booking.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#131415] hover:opacity-95"
                    style={{ backgroundColor: "#C89B3C" }}
                  >
                    Get a quote
                  </Link>
                  <a
                    href={EMAIL_MAILTO}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Email
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Contact form
                  </Link>
                </div>

                <p className="mt-3 text-xs text-white/70">
                  Quick tip: message your area (Saltaire/Shipley) + dates + once/twice daily visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {/* Guide prices grid */}
        <section aria-labelledby="guide-prices">
          <h2 id="guide-prices" className="text-2xl font-bold tracking-tight">
            Guide prices (Saltaire &amp; Shipley)
          </h2>
          <p className="mt-2 max-w-prose text-slate-700">
            These are <b>starting prices</b>. Exact quotes depend on length, number of pets, and what you need day-to-day.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRICES.map((p) => (
              <article key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold text-slate-600">From</div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">{p.price}</div>
                <h3 className="mt-3 text-base font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.note}</p>
                <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section aria-labelledby="addons" className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 id="addons" className="text-xl font-bold tracking-tight">
            Common add-ons (guide)
          </h2>
          <p className="mt-2 max-w-prose text-slate-700">
            If your booking needs a bit more time or complexity, we’ll keep it transparent and simple.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((a) => (
              <div key={a.label} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">{a.label}</div>
                <div className="mt-1 text-sm text-slate-700">{a.value}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-600">
            Final pricing depends on your routine, travel time, and availability. We’ll confirm before you book.
          </p>
        </section>

        {/* What affects price */}
        <section aria-labelledby="what-affects">
          <h2 id="what-affects" className="text-2xl font-bold tracking-tight">
            What affects the price?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold">Visit length & frequency</h3>
              <p className="mt-2 text-sm text-slate-700">
                Once daily vs AM+PM, and short vs longer sessions. Cats often do best with predictable timing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold">Number of pets & routine complexity</h3>
              <p className="mt-2 text-sm text-slate-700">
                Multiple pets, medication, or extra instructions can add time — we quote clearly upfront.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold">Travel & scheduling</h3>
              <p className="mt-2 text-sm text-slate-700">
                Saltaire/Shipley (BD18) is the core zone. If you’re just outside, message and we’ll confirm.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold">Behaviour needs</h3>
              <p className="mt-2 text-sm text-slate-700">
                Nervous/reactive dogs may need quieter timings or 1:1 slots — we’ll be honest and keep it calm.
              </p>
            </div>
          </div>
        </section>

        {/* Local internal links */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold tracking-tight">Local pages (more detail)</h2>
          <p className="mt-2 text-slate-700">
            If you want the practical route/coverage details for your area:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/dog-walking/saltaire"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Dog walking — Saltaire
            </Link>
            <Link
              href="/dog-walking/shipley"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Dog walking — Shipley
            </Link>
            <Link
              href="/cat-sitting/saltaire"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Cat sitting — Saltaire
            </Link>
            <Link
              href="/cat-sitting/shipley"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Cat sitting — Shipley
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl font-bold tracking-tight">
            Pricing FAQs
          </h2>
          <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold tracking-tight">Want a quick quote?</h2>
          <p className="mt-2 text-slate-700">
            Get in touch with your area + dates + what you need, and we'll reply with a clear yes/no and price.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#131415] hover:opacity-95"
              style={{ backgroundColor: "#C89B3C" }}
            >
              Get a quote
            </Link>
            <a
              href={EMAIL_MAILTO}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Email
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              Contact form
            </Link>
          </div>
        </section>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className="rounded-2xl border border-black/10 bg-white/95 backdrop-blur shadow-lg p-3 flex gap-2">
          <Link
            href="/contact"
            className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Contact
          </Link>
          <a
            href={EMAIL_MAILTO}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900"
          >
            Email
          </a>
        </div>
      </div>
    </main>
  );
}
