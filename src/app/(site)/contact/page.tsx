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

import { Phone, Mail, MessageCircle, Clock, MapPin, ShieldCheck, Camera, KeyRound } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Contact — Saltaire Dogs + Pets",
  description:
    "Message for a quick, friendly quote. Local, DBS checked and insured. Photo updates after every visit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Saltaire Dogs + Pets",
    description: "WhatsApp, call, or email — whatever’s easiest. Local, DBS checked and insured.",
    type: "website",
    images: [{ url: "/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Saltaire Dogs + Pets",
    description: "Quick, friendly contact for dog walks and pet visits around Saltaire.",
    images: ["/og-default.jpg"],
  },
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                   */
/* -------------------------------------------------------------------------- */

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

const PHONE_DISPLAY = "07305 367941";
const PHONE_TEL = "07305367941";
const WHATSAPP = "https://wa.me/447305367941";
const EMAIL = "saltairedogs@proton.me";
const AREAS = ["Saltaire", "Shipley", "Baildon"];
const SERVICES = [
  "Dog walk",
  "Puppy drop-in",
  "Cat/small pet visit",
];

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <main className="relative">
      <StructuredData />

      {/* Skip link for a11y */}
      <a
        href="#contact-form"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900 focus:shadow"
      >
        Skip to contact form
      </a>

      {/* Hero — compact, warm */}
      <section
        className="relative py-10 md:py-14"
        style={{
          background:
            "radial-gradient(700px 360px at 4% -10%, rgba(200,155,60,0.08), transparent 60%), linear-gradient(180deg,#F7F7F6 0%,#F3F2EE 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-[1.05fr,0.95fr]">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[#131415] md:text-4xl">
                Say hello — we’ll get back quickly
              </h1>
              <p className="mt-3 max-w-prose text-[#7B828A]">
                Local and owner-led. DBS checked, insured, and steady handling. Message your street and what you need —
                we’ll reply Mon–Sat, 8am–6pm.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-[#131415] transition-[transform,opacity] hover:-translate-y-0.5"
                  style={{ backgroundColor: "#C89B3C" }}
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp (fastest)
                </a>
                <Button asChild variant="outline" className="rounded-lg">
                  <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {PHONE_DISPLAY}
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-lg">
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email {EMAIL}
                  </a>
                </Button>
              </div>

              {/* Small reassurance strip */}
              <ul className="mt-6 grid gap-2 text-sm text-[#7B828A] sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  DBS checked & insured
                </li>
                <li className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  Photo notes after each visit
                </li>
                <li className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4" />
                  Secure, coded key handling
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {AREAS.join(", ")}
                </li>
              </ul>
            </div>

            {/* Friendly photo card */}
            <div className="relative">
              <figure className="overflow-hidden rounded-xl bg-[#EFEEE9] ring-1 ring-[#E6E3DA]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/poodle-walking-shipley-glenn.jpg"
                    alt="Calm walk near Saltaire."
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto my-10 max-w-6xl bg-[#E6E3DA]" />

      {/* Details + compact form */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
            {/* Left: quick ways to contact */}
            <Card>
              <CardHeader>
                <CardTitle>Quick ways to reach us</CardTitle>
                <CardDescription>Whatever’s easiest — we’ll reply within hours (Mon–Sat).</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <ContactRow label="WhatsApp" value="Chat on WhatsApp" href={WHATSAPP} icon="whatsapp" external />
                <ContactRow label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_TEL}`} icon="phone" />
                <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} icon="mail" />
                <ContactRow label="Hours" value="Mon–Sat 08:00–18:00 (flexible by request)" icon="clock" />
                <ContactRow label="Areas" value={AREAS.join(", ")} icon="map" />
              </CardContent>
            </Card>

            {/* Right: form */}
            <Card id="contact-form">
              <CardHeader>
                <CardTitle>Tell us about your pet</CardTitle>
                <CardDescription>Street, routine, and what you need. Short and simple.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Light policies (collapsed) */}
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>How we work</CardTitle>
                <CardDescription>Clear, practical and calm.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <Accordion type="single" collapsible>
                  <AccordionItem value="routes">
                    <AccordionTrigger>Routes & traffic</AccordionTrigger>
                    <AccordionContent className="text-[#7B828A]">
                      We choose quiet loops, stop at every kerb, and keep leads short near roads. Hi-viz in low light.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="updates">
                    <AccordionTrigger>Updates</AccordionTrigger>
                    <AccordionContent className="text-[#7B828A]">
                      Quick photo and a couple of lines after each visit. We’ll message if anything looks off at home.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="keys">
                    <AccordionTrigger>Home & keys</AccordionTrigger>
                    <AccordionContent className="text-[#7B828A]">
                      Keys are coded (no address) and stored securely. Locks and alarms checked on exit.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Structured Data (JSON-LD)                                                  */
/* -------------------------------------------------------------------------- */

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
    name: "Saltaire Dogs + Pets",
    url: siteUrl,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    areaServed: AREAS,
    image: [`${siteUrl}/cover.jpg`],
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

/* -------------------------------------------------------------------------- */
/* Subcomponents                                                               */
/* -------------------------------------------------------------------------- */

type RowIcon = "whatsapp" | "phone" | "mail" | "clock" | "map";

function RowIconEl({ name }: { name: RowIcon }) {
  const cls = "h-4 w-4";
  if (name === "whatsapp") return <MessageCircle className={cls} />;
  if (name === "phone") return <Phone className={cls} />;
  if (name === "mail") return <Mail className={cls} />;
  if (name === "clock") return <Clock className={cls} />;
  return <MapPin className={cls} />;
}

type ContactRowProps = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: RowIcon;
};

function ContactRow({ label, value, href, external, icon }: ContactRowProps) {
  const Comp: any = href ? (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") ? "a" : Link) : "div";
  const props = href
    ? {
        href,
        ...(external ? { target: "_blank", rel: "noopener" } : {}),
        className:
          "group flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-[#EFEEE9]",
      }
    : { className: "flex items-center justify-between rounded-xl border p-3" };

  return (
    <Comp {...props}>
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-[#EFEEE9] p-2 text-[#131415]">
          <RowIconEl name={icon} />
        </span>
        <div>
          <p className="text-sm text-[#7B828A]">{label}</p>
          <p className="font-medium text-[#131415]">{value}</p>
        </div>
      </div>
      {href ? (
        <span className="text-sm text-[#7B828A] group-hover:text-[#131415]" aria-hidden="true">
          ↗
        </span>
      ) : null}
    </Comp>
  );
}
  