// src/app/(site)/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { Separator } from "../../../components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import ContactForm from "./contact-form";

import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Camera,
  Users,
  Baby,
  CheckCircle2,
  KeyRound,
  Thermometer,
  Umbrella,
  PawPrint,
  Calendar,
} from "lucide-react";

// ----------------------------------------------------------------------------
// Metadata
// ----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Contact — Saltaire Dog Walks",
  description:
    "Contact Saltaire Dog Walks to book a free meet & greet. Local, DBS checked and friendly, positive service. We cover Saltaire, Shipley & Baildon with GPS & photo updates.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Saltaire Dog Walks",
    description:
      "Get in touch to book dog walking, puppy drop-ins or overnight sitting. Local, DBS checked and friendly, positive service. GPS & photo updates after every walk.",
    type: "website",
    images: [{ url: "/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Saltaire Dog Walks",
    description:
      "Book a free meet & greet with Saltaire Dog Walks. Local, DBS checked and friendly, positive service. We send GPS & photo updates after every walk.",
    images: ["/og-default.jpg"],
  },
};

// ----------------------------------------------------------------------------
// Constants & helpers
// ----------------------------------------------------------------------------

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";
// Booking now via email (Calendly removed)
const EMAIL_LINK = `mailto:${"saltairedogs@proton.me"}`;

const PHONE_DISPLAY = "07305 367941";
const PHONE_TEL = "07305367941"; // tel: format (no spaces)
const WHATSAPP = "https://wa.me/447305367941"; // replace with your number
const EMAIL = "saltairedogs@proton.me";

const AREAS = ["Saltaire", "Shipley", "Baildon"];
const SERVICES = [
  "60-minute dog walk",
  "30-minute dog walk",
  "Puppy drop-in",
  "Overnight sitting",
  "Pet taxi",
  "Something else",
];

const GALLERY = [
  { src: "/gallery-1.jpg", alt: "Golden retriever playing in Roberts Park.", w: 1750, h: 1400 },
  { src: "/gallery-2.jpg", alt: "Border collie by Leeds and Liverpool Canal.", w: 1750, h: 1400 },
  { src: "/gallery-3.jpg", alt: "Small terrier on Victoria Road in Saltaire.", w: 1400, h: 1750 },
  { src: "/gallery-4.jpg", alt: "Group walk near Salts Mill.", w: 1750, h: 1400 },
  { src: "/gallery-6.jpg", alt: "Evening walk with hi-viz lead.", w: 1750, h: 1400 },
  { src: "/gallery-8.jpg", alt: "Fresh water topped up after walk.", w: 1750, h: 1400 },
];

// ----------------------------------------------------------------------------
// Page
// ----------------------------------------------------------------------------

export default function ContactPage() {
  return (
    <main className="relative">
      {/* JSON-LD for Breadcrumb + LocalBusiness */}
      <StructuredData />

      {/* Skip link for a11y */}
      <a href="#contact-form" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900 focus:shadow">
        Skip to contact form
      </a>

      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium tracking-wide text-sky-600">Get in touch</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Book a free meet & greet
              </h1>
              <p className="mt-4 max-w-prose text-slate-600">
                Tell us about your dog, routine, and preferred times. We’ll reply quickly (Mon–Sat 08:00–18:00) with next steps.
                We’re DBS checked and provide a friendly, positive service — and we’ll send GPS & photo updates after every walk.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  DBS checked & friendly, positive service
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-sky-600" />
                  GPS & photo updates after every walk
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-rose-600" />
                  Small, calm groups (max 3) — solo option for shy/senior dogs
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="text-black">
                  <a href={EMAIL_LINK}>
                    Email us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href={WHATSAPP} target="_blank" rel="noopener">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-sky-50 to-emerald-50" />
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg overflow-hidden">
                <div className="relative mx-auto w-full max-w-sm md:max-w-md" style={{ aspectRatio: "1 / 1" }}>
                  <Image
                    src="/poodle-walking-shipley-glenn.jpg"
                    alt="Dog walking near Roberts Park in Saltaire."
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto mb-16 max-w-6xl" />

      {/* Contact details + Form */}
      <section className="pb-24" aria-labelledby="contact-details-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[1fr,1.5fr]">
            {/* Left column: details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle id="contact-details-heading">Ways to contact us</CardTitle>
                  <CardDescription>Prefer to chat first? Call or message us—whatever’s easiest.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 text-sm text-slate-700">
                  <ContactRow
                    icon={<Phone className="h-4 w-4 text-sky-600" />}
                    label="Phone"
                    value={PHONE_DISPLAY}
                    href={`tel:${PHONE_TEL}`}
                  />
                  <ContactRow
                    icon={<MessageCircle className="h-4 w-4 text-green-600" />}
                    label="WhatsApp"
                    value="Chat on WhatsApp"
                    href={WHATSAPP}
                    external
                  />
                  <ContactRow
                    icon={<Mail className="h-4 w-4 text-rose-600" />}
                    label="Email"
                    value={EMAIL}
                    href={`mailto:${EMAIL}`}
                  />
                  <ContactRow
                    icon={<Clock className="h-4 w-4 text-amber-600" />}
                    label="Hours"
                    value="Mon–Sat 08:00–18:00 (early/late by request)"
                  />
                  <ContactRow
                    icon={<MapPin className="h-4 w-4 text-violet-600" />}
                    label="Areas"
                    value={`${AREAS.join(", ")} — 0.5–2 mile radius`}
                    href="/areas"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to expect</CardTitle>
                  <CardDescription>Our simple five-step process</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5">1</Badge>
                      <div>
                        <p className="font-medium">Enquiry</p>
                        <p>Tell us about your dog, routine, and preferred times.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5">2</Badge>
                      <div>
                        <p className="font-medium">Free meet & greet</p>
                        <p>We visit at home, show DBS (on request), and confirm entry details.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5">3</Badge>
                      <div>
                        <p className="font-medium">Trial walk</p>
                        <p>Check pace/compatibility. Solo option for shy/senior dogs.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5">4</Badge>
                      <div>
                        <p className="font-medium">Regular schedule</p>
                        <p>Lock in slots. We group carefully (max 3) and adjust routes as needed.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="mt-0.5">5</Badge>
                      <div>
                        <p className="font-medium">Updates after walks</p>
                        <p>GPS & photo updates every time; quick note if anything looks off at home.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety & policies</CardTitle>
                  <CardDescription>Clear, practical rules for stress-free care</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="traffic">
                      <AccordionTrigger>Traffic & road crossings</AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        We stop at every kerb, choose visible crossings, and keep leads short near roads. Hi-viz in low light.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="group">
                      <AccordionTrigger>Group size & compatibility</AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        Max 3 dogs per walk. We match by temperament and pace. Solo option (+£3) for shy/reactive/senior dogs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="heat">
                      <AccordionTrigger>Weather & heat policy</AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        We walk in most weather. In heat we adjust timings/routes, seek shade and carry water. Severe conditions → enrichment or reschedule.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="keys">
                      <AccordionTrigger>Home security & keys</AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        Keys are labelled by code (no address) and stored securely. We double-check locks and alarms on exit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="updates">
                      <AccordionTrigger>Updates & photos</AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        Expect GPS & two or three photos after each walk. We’ll message if anything looks off at home.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Right column: form */}
            <div>
              <Card id="contact-form">
                <CardHeader>
                  <CardTitle>Tell us about your dog</CardTitle>
                  <CardDescription>We’ll reply quickly with availability and next steps.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Calendly removed; email is the preferred contact method */}
            </div>
          </div>
        </div>
      </section>

      {/* Map + Service Area */}
      <section className="pb-24" aria-labelledby="map-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 id="map-heading" className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Where we walk</h2>
              <p className="mt-3 max-w-prose text-slate-600">
                We cover **Saltaire, Shipley & Baildon** with a 0.5–2 mile radius. If you’re nearby, just ask and we’ll find a slot.
                Typical routes include Roberts Park, the canal towpath, Victoria Road and Salts Mill.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
                <AreaPill icon={<MapPin className="h-3.5 w-3.5" />} label="Roberts Park loop" />
                <AreaPill icon={<MapPin className="h-3.5 w-3.5" />} label="Canal towpath" />
                <AreaPill icon={<MapPin className="h-3.5 w-3.5" />} label="Victoria Road" />
                <AreaPill icon={<MapPin className="h-3.5 w-3.5" />} label="Salts Mill" />
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="text-black"><Link href="/areas">See Service Areas</Link></Button>
                <Button asChild variant="outline"><Link href="/pricing">See Pricing</Link></Button>
              </div>

              <ul className="mt-8 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><PawPrint className="h-4 w-4 text-sky-600" /> Small, calm groups (max 3)</li>
                <li className="flex items-center gap-2"><Baby className="h-4 w-4 text-emerald-600" /> Puppy-friendly visits</li>
                <li className="flex items-center gap-2"><KeyRound className="h-4 w-4 text-amber-600" /> Secure key handling</li>
                <li className="flex items-center gap-2"><Umbrella className="h-4 w-4 text-violet-600" /> Rain-ready kit</li>
                <li className="flex items-center gap-2"><Thermometer className="h-4 w-4 text-rose-600" /> Heat-aware timings</li>
              </ul>
            </div>

            <div className="rounded-3xl border bg-white p-3 shadow-lg">
              {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ? (
                <Image
                  src="/maps-coverage-saltaire.png"
                  alt="Service area map for Saltaire, Shipley & Baildon."
                  width={1600}
                  height={1000}
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              ) : (
                <div aria-label="Interactive map" className="flex h-[420px] items-center justify-center rounded-2xl bg-slate-50">
                  <MapPin className="mr-2 h-5 w-5 text-sky-600" />
                  <span className="text-sm text-slate-600">Interactive map coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl bg-sky-600 px-6 py-10 text-white shadow-lg md:px-12 md:py-14">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Ready to meet?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-white/90">
              Book a free meet & greet in Saltaire. We’ll check routes, entry details and your dog’s routine—then get your walks started.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-sky-700 hover:bg-white/90">
                <a href={`mailto:${EMAIL}`}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Meet & Greet
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email {EMAIL}
                </a>
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

// ----------------------------------------------------------------------------
// Structured Data (JSON-LD)
// ----------------------------------------------------------------------------

function StructuredData() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saltaire Dog Walks",
    url: siteUrl,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    areaServed: AREAS,
  priceRange: "£9–£45",
    image: [`${siteUrl}/cover.jpg`, `${siteUrl}/gallery-1.jpg`, `${siteUrl}/gallery-4.jpg`],
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
    makesOffer: SERVICES.map((s) => ({ "@type": "Offer", name: s })),
  };

  return (
    <Fragment>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
    </Fragment>
  );
}

// ----------------------------------------------------------------------------
// Subcomponents
// ----------------------------------------------------------------------------

type ContactRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

function ContactRow({ icon, label, value, href, external }: ContactRowProps) {
  const Component: any = href ? (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "a" : Link) : "div";
  const props = href
    ? {
        href,
        ...(external ? { target: "_blank", rel: "noopener" } : {}),
        className:
          "group flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-slate-50",
      }
    : {
        className: "flex items-center justify-between rounded-xl border p-3",
      };
  return (
    <Component {...props}>
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</span>
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="font-medium text-slate-900">{value}</p>
        </div>
      </div>
      {href ? (
        <span className="text-sm text-slate-400 group-hover:text-slate-500" aria-hidden="true">
          ↗
        </span>
      ) : null}
    </Component>
  );
}

function AreaPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-slate-700">
      <span className="text-slate-500">{icon}</span>
      {label}
    </li>
  );
}

// Calendly embed removed; email is the preferred contact method.
