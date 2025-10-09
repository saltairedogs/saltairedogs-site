// src/app/(site)/services/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import { Separator } from "../../../components/ui/separator";
import { formatPrice } from "../../../lib/utils";
import { PRICING } from "../../../lib/pricing";

import {
  PawPrint,
  Dog,
  Baby,
  Home,
  MapPin,
  Camera,
  Clock,
  ShieldCheck,
  KeyRound,
  Umbrella,
  Thermometer,
  CheckCircle2,
} from "lucide-react";

/* ----------------------------- SEO METADATA ----------------------------- */
export const metadata: Metadata = {
  title: "Dog Walking Services in Saltaire & Shipley — Solo Walks, Puppy Visits, Overnight Care",
  description:
    "Solo dog walks (one dog at a time), puppy drop-ins and tailored overnight care in Saltaire & Shipley. DBS checked, friendly and positive service, GPS + photo updates. Limited slots — book a free meet & greet.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dog Walking Services in Saltaire & Shipley",
    description:
      "Solo dog walks, puppy drop-ins and tailored overnight care with GPS & photo updates. DBS checked and friendly, positive service.",
    type: "website",
    images: [{ url: "/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltaire Dog Walks — Services",
    description:
      "Calm solo dog walking and puppy care in Saltaire & Shipley. GPS & photos after every walk. Limited availability.",
    images: ["/og-default.jpg"],
  },
};

/* -------------------------------- HELPERS -------------------------------- */
// Calendly removed; keep CTAs within site or email

const PHONE_DISPLAY = "07305 367941";
const PHONE_TEL = "07305367941";
const EMAIL = "saltairedogs@proton.me";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

/* -------------------------- PRICING / DISCOUNTS -------------------------- */
const PRICE_60 = PRICING.WALK_60; // £24.95
const PRICE_30 = PRICING.WALK_30; // £14.95
const PRICE_PUPPY = PRICING.PUPPY_VISIT; // £9
// Second dog (same household) approx 15% off first-dog rate
const ADDON_SECOND_60 = Math.round(PRICING.WALK_60 * (1 - PRICING.SECOND_DOG_DISCOUNT_APPROX / 100));
const ADDON_SECOND_30 = Math.round(PRICING.WALK_30 * (1 - PRICING.SECOND_DOG_DISCOUNT_APPROX / 100));
const BUNDLE5_60 = PRICING.BUNDLE5_60;   // homepage value
const BUNDLE10_60 = PRICING.BUNDLE10_60; // homepage value

/* FAQS moved to bottom of file to avoid redeclaration */

/* ---------------------------------- PAGE --------------------------------- */
export default function ServicesPage() {
  return (
    <main className="relative">
      <JsonLd />

      {/* Header: centred, no huge photo */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-sky-600">SALTAIRE • SHIPLEY</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Calm, solo dog walking — with real updates you’ll actually read
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            One dog at a time for focused, stress-free outings. You’ll get GPS walk logs, photos, and a quick note after
            every visit. Enhanced DBS and proudly local to Saltaire & Shipley — with a friendly, positive service. Limited slots — we don’t
            overbook or sprint down the towpath like a cartoon.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-sky-600 text-white hover:bg-sky-700 shadow-sm">
              <a href={`mailto:${EMAIL}`}>Email us</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
              <Link href="/pricing">See Pricing</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-slate-700 hover:bg-slate-100">
              <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> DBS checked</li>
            <li className="flex items-center gap-2"><Camera className="h-4 w-4 text-sky-600" /> GPS + photos after every walk</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-600" /> Local to Saltaire & Shipley</li>
          </ul>
        </div>
      </section>

      <Separator className="mx-auto mb-16 w-full max-w-6xl" />

      {/* Services: centred grid, square images */}
      <section className="py-4" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Pick what suits your dog (and your diary)
            </h2>
            <p className="mt-3 text-slate-600">
              Every walk is solo. Same-household second dog can join if they’re good together (≈15% off first-dog rate).
            </p>
          </div>

          <div className="mx-auto mt-10 flex justify-center">
            <div className="grid max-w-6xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <ServiceCard
                icon={<Dog className="h-6 w-6" />}
                title="60-minute solo walk"
                price={formatPrice(PRICE_60)}
                description="Unhurried exercise and enrichment with our full attention on your dog."
                bullets={[
                  "Solo walk only (1 dog per outing)",
                  `Same-household add-on +£${ADDON_SECOND_60}`,
                  "GPS tracking & photo updates",
                  "Paws wiped & water topped up",
                ]}
                image={{ src: "/saltaire-canal-retriever-on-lead-cobbles.jpg", alt: "Golden retriever on the Saltaire canal towpath by Salts Mill." }}
                ctaLabel="Book a 60-min walk"
                planQuery="60-minute-walk"
                tag="Most popular"
              />

              <ServiceCard
                icon={<Clock className="h-6 w-6" />}
                title="30-minute solo walk"
                price={formatPrice(PRICE_30)}
                description="Great for toilet breaks and leg-stretchers on quieter days."
                bullets={[
                  "Solo walk (1 dog per outing)",
                  `Same-household add-on +£${ADDON_SECOND_30}`,
                  "Gentle local loop",
                  "GPS tracking & photos",
                ]}
                image={{ src: "/saltaire-victoria-road-schnauzer-on-lead.jpg", alt: "Miniature schnauzer on Victoria Road in Saltaire." }}
                ctaLabel="Book a 30-min walk"
                planQuery="30-minute-walk"
                tag="Weekday favourite"
              />

              <ServiceCard
                icon={<Baby className="h-6 w-6" />}
                title="Puppy drop-ins (15–20 mins)"
                price={formatPrice(PRICE_PUPPY)}
                description="Short, friendly visits while you build routine and confidence."
                bullets={[
                  "Toilet break & play",
                  "Feed & fresh water as instructed",
                  "Basic cues reinforced",
                  "Photo updates included",
                ]}
                image={{ src: "/saltaire-canal-retriever-on-lead-cobbles.jpg", alt: "Puppy at home after a short drop-in visit." }}
                ctaLabel="Book a puppy visit"
                planQuery="puppy-drop-in"
                tag="Great for pups"
              />

              <ServiceCard
                icon={<Home className="h-6 w-6" />}
                title="Tailored overnight care"
                price="Custom"
                description="Same routine, better sleep. We can stay at yours — and in some cases your dog can stay with us (case-by-case)."
                bullets={[
                  "In-home stays with evening & morning walks",
                  "Regular photo updates",
                  "Respect for your home & routine",
                  "Flexible for odd shifts or trips",
                ]}
                image={{ src: "/walking-sat-dog.jpg", alt: "Relaxed dog resting after an evening walk in Saltaire." }}
                ctaLabel="Enquire about overnight care"
                planQuery="overnight-sitting"
                tag="Most flexible"
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-600">
            <strong>Bundles:</strong> 5× 60-min solo walks <span className="line-through">{formatPrice(5 * PRICE_60)}</span> <strong>{formatPrice(BUNDLE5_60)}</strong> (≈10% off) ·
            10× 60-min solo walks <span className="line-through">{formatPrice(10 * PRICE_60)}</span> <strong>{formatPrice(BUNDLE10_60)}</strong> (≈15% off).
            <br />
            <em>We’re a small, solo service with limited availability — let’s chat and make sure we’re a good fit.</em>
          </p>
        </div>
      </section>

      {/* How it works — centred, 3 + 2 layout */}
      <section className="py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="process-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              How it works (no faff)
            </h2>
            <p className="mt-3 text-slate-600">
              A simple, safe process built around busy humans and delighted dogs.
            </p>
          </div>

          {/* Row 1: steps 1–3 */}
          <div className="mx-auto mt-10 flex justify-center">
            <ol className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {PROCESS_STEPS.slice(0, 3).map((step, i) => (
                <li key={step.title} className="relative">
                  <StepCard step={step} index={i} />
                </li>
              ))}
            </ol>
          </div>

          {/* Row 2: steps 4–5 (we have 5 steps total) */}
          <div className="mx-auto mt-8 flex justify-center">
            <ol className="grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
              {PROCESS_STEPS.slice(3, 6).map((step, idx) => (
                <li key={step.title} className="relative">
                  <StepCard step={step} index={3 + idx} />
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-sky-600 text-white hover:bg-sky-700 shadow-sm">
              <a href={`mailto:${EMAIL}`}>Book Free Meet & Greet</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sky-600 text-black hover:bg-sky-50">
              <Link href="/areas">See Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Safety & policies — centred two-column */}
      <section className="py-16" aria-labelledby="safety-heading">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-2">
            <div>
              <h2 id="safety-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Safety first, always
              </h2>
              <p className="mt-3 text-slate-600">
                Solo walks keep things calm and predictable. You’ll get GPS and photo updates after every walk, plus a quick
                message if anything looks off at home.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                {SAFETY_POINTS.map((p) => (
                  <li key={p.label} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-emerald-50 p-1.5 text-emerald-700 ring-1 ring-emerald-200">
                      {p.icon}
                    </span>
                    <div>
                      <p className="font-medium">{p.label}</p>
                      <p className="text-slate-600">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full rounded-2xl border">
                <AccordionItem value="traffic">
                  <AccordionTrigger className="px-4">Traffic & road crossings</AccordionTrigger>
                  <AccordionContent className="px-4 text-slate-600">
                    We stop at every kerb, choose visible crossings, and keep leads short near roads. High-viz kit in low light.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="solo">
                  <AccordionTrigger className="px-4">Solo policy</AccordionTrigger>
                  <AccordionContent className="px-4 text-slate-600">
                    We walk one dog at a time. A second dog from the same household may join by request if both walk well together.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="weather">
                  <AccordionTrigger className="px-4">Weather & heat policy</AccordionTrigger>
                  <AccordionContent className="px-4 text-slate-600">
                    We walk in most weather. In heat we adjust timing/routes, seek shade, and carry water. Severe conditions → enrichment or reschedule.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="keys">
                  <AccordionTrigger className="px-4">Home security & keys</AccordionTrigger>
                  <AccordionContent className="px-4 text-slate-600">
                    Keys are labelled by code (no addresses) and stored securely. We double-check locks and alarms on exit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="updates">
                  <AccordionTrigger className="px-4">Updates & photos</AccordionTrigger>
                  <AccordionContent className="px-4 text-slate-600">
                    Expect a GPS log and a couple of photos after each walk, plus a quick note if anything looks off at home.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery: centred cards, square, no cropping from bottom */}
      <section className="py-24" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="gallery-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              See what your dog gets up to
            </h2>
            <p className="mt-3 text-slate-600">
              Fresh photos after every walk — sniffs, favourite routes, and happy faces.
            </p>
          </div>

          <div className="mx-auto mt-8 flex justify-center">
            <div className="grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.map((img) => (
                <figure key={img.src} className="w-full max-w-sm overflow-hidden rounded-2xl border bg-white shadow-sm">
                  <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-xs text-slate-600">{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ micro */}
      <section className="py-16" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border bg-white p-6 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Quick questions (ask away)
              </h2>
              <p className="mt-2 text-slate-600">
                We’re friendly humans. If your question isn’t here, send it — we don’t bite.
              </p>
            </div>

            <div className="mx-auto mt-6 grid max-w-4xl gap-6 md:grid-cols-2">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-1 text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-sky-600 text-white hover:bg-sky-700 shadow-sm">
                <a href={`mailto:${EMAIL}`}>Book Free Meet & Greet</a>
              </Button>
              <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                <Link href="/pricing">See Pricing</Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <a href={`mailto:${EMAIL}`}>Email {EMAIL}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-sky-600 px-6 py-10 text-white shadow-lg md:px-12 md:py-14">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Ready to give your dog the best care?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-white/90">
              Book a free meet & greet — solo walks, clear updates, calm routines. If we’re a good fit, brilliant. If not, no pressure.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-white/90">
                <a href={`mailto:${EMAIL}`}>Book Free Meet & Greet</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>Call {PHONE_DISPLAY}</a>
              </Button>
            </div>
            <p className="mt-4 text-center text-sm text-white/80">
              Our guarantee: paws wiped, traffic safety prioritised, and we’ll text if anything looks off at home.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------- JSON-LD ------------------------------- */
function JsonLd() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saltaire Dog Walks",
    url: siteUrl,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
  priceRange: "£9–£45",
    areaServed: ["Saltaire", "Shipley"],
    image: [
      `${siteUrl}/saltaire-canal-retriever-on-lead-cobbles.jpg`,
      `${siteUrl}/saltaire-victoria-road-schnauzer-on-lead.jpg`,
      `${siteUrl}/puppy-visit.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      addressCountry: "GB",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    makesOffer: [
      { "@type": "Offer", name: "60-minute solo dog walk", price: `${PRICE_60}`, priceCurrency: "GBP" },
      { "@type": "Offer", name: "30-minute solo dog walk", price: `${PRICE_30}`, priceCurrency: "GBP" },
      { "@type": "Offer", name: "Puppy drop-in (15–20 mins)", price: `${PRICE_PUPPY}`, priceCurrency: "GBP" },
      { "@type": "Offer", name: "5× 60-min solo bundle (10% off)", price: `${BUNDLE5_60}`, priceCurrency: "GBP" },
      { "@type": "Offer", name: "10× 60-min solo bundle (15% off)", price: `${BUNDLE10_60}`, priceCurrency: "GBP" },
    ],
  };

  return (
    <Fragment>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
    </Fragment>
  );
}

/* -------------------------- SUBCOMPONENTS / DATA -------------------------- */
type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string };
  ctaLabel: string;
  planQuery: string;
  tag?: string;
};

function ServiceCard({ icon, title, price, description, bullets, image, ctaLabel, planQuery, tag }: ServiceCardProps) {
  const href = `/contact?plan=${encodeURIComponent(planQuery)}`;
  const props = {};
  return (
    <Card className="group relative flex h-full flex-col overflow-visible border-sky-100/70 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60 before:pointer-events-none before:absolute before:-inset-1 before:-z-10 before:rounded-3xl before:bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.22),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-sky-600">
          {icon}
          <span className="text-xs uppercase tracking-wide text-slate-500">Service</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-1">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <div className="overflow-hidden rounded-xl border">
          <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105" />
            {tag ? (
              <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 backdrop-blur">
                {tag}
              </span>
            ) : null}
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 h-px w-full bg-slate-100" />

        <div className="mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-slate-900">{price}</span>
            <span className="text-xs text-slate-500">GPS & photos included</span>
          </div>
          <Button asChild className="mt-4 w-full bg-sky-600 text-white shadow-sm hover:bg-sky-700">
            <Link href={href} {...props}>{ctaLabel}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function StepCard({ step, index }: { step: (typeof PROCESS_STEPS)[number]; index: number }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full">{index + 1}</Badge>
          <span className="text-slate-500">{step.label}</span>
        </div>
        <CardTitle className="mt-1 flex items-center gap-2 text-base md:text-lg">
          <span className="text-sky-600">{step.icon}</span>
          {step.title}
        </CardTitle>
        <CardDescription>{step.summary}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        <ul className="space-y-2">
          {step.points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const PROCESS_STEPS = [
  {
    label: "Start",
    title: "Enquiry",
    icon: <PawPrint className="h-4 w-4" />,
    summary: "Tell us about your dog, routine, and preferred times.",
    points: ["We reply Mon–Sat 08:00–18:00", "Share behaviours or medical notes", "Pick tentative slots"],
  },
  {
    label: "Meet",
    title: "Free meet & greet",
    icon: <Dog className="h-4 w-4" />,
    summary: "We visit at home to say hello and collect keys if needed.",
  points: ["DBS shown on request", "Confirm routes & entry details", "Sign simple T&Cs"],
  },
  {
    label: "Try",
    title: "Trial solo walk",
    icon: <Clock className="h-4 w-4" />,
    summary: "A first solo outing to check pace and recall.",
    points: ["We send a report with photos", "Adjust plan if needed", "Same-household second dog considered by request"],
  },
  {
    label: "Plan",
    title: "Regular schedule",
    icon: <MapPin className="h-4 w-4" />,
    summary: "Lock in weekly slots; all walks are solo for focused attention.",
    points: ["Flexible reschedules", "Routes based on temperament", "Bundles available (10–15% off)"],
  },
  {
    label: "Update",
    title: "Ongoing updates",
    icon: <Camera className="h-4 w-4" />,
    summary: "GPS and photos after each walk; quick notes when useful.",
    points: ["Heat/rain plan as needed", "Water topped up", "We text if anything looks off at home"],
  },
];

const SAFETY_POINTS = [
  { icon: <ShieldCheck className="h-4 w-4" />, label: "DBS checked", text: "Enhanced DBS; documents available on request." },
  { icon: <PawPrint className="h-4 w-4" />, label: "Solo walks only", text: "One dog per walk keeps things calm and predictable; same-household second dog by request." },
  { icon: <Umbrella className="h-4 w-4" />, label: "Weather aware", text: "Rain-ready kit; severe weather → enrichment or reschedule." },
  { icon: <Thermometer className="h-4 w-4" />, label: "Heat policy", text: "Adjust times/routes, seek shade, carry water in warm spells." },
  { icon: <KeyRound className="h-4 w-4" />, label: "Secure keys", text: "Keys coded (no addresses) and stored securely; checks on exit." },
  { icon: <Camera className="h-4 w-4" />, label: "Updates after walks", text: "GPS log + photos so you always know how your dog did." },
];

const GALLERY = [
  { src: "/saltaire-victoria-road-schnauzer-on-lead.jpg", alt: "Miniature schnauzer on Victoria Road, Saltaire." },
  { src: "/saltaire-canal-retriever-on-lead-cobbles.jpg", alt: "Retriever on the Saltaire canal towpath by Salts Mill." },
  { src: "/poodle-walking-shipley-glenn.jpg", alt: "Poodle walking near Shipley Glen on a quiet path." },
  { src: "/north-cliffe-dog-rainbow.jpg", alt: "Dog on Northcliffe with a faint rainbow in the distance." },
];

const FAQS = [
  {
    q: "Do you really only walk one dog at a time?",
    a: "Yes — every walk is solo, so your dog gets our full attention. A second dog from the same household may join by request if both walk well together.",
  },
  {
    q: "What areas do you cover?",
    a: "We’re based in Saltaire and cover Shipley and nearby spots. Baildon by enquiry if it’s the right fit for everyone.",
  },
  {
    q: "Do you have a DBS check?",
    a: "Yes — we hold an enhanced DBS. Documents available on request.",
  },
  {
    q: "How do I get updates after a walk?",
    a: "You’ll get a GPS walk log, photos, and a brief message after every walk or visit.",
  },
];
