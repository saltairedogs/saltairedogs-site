// src/app/(site)/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion";
import ContactForm from "./contact-form";

import { Phone, Mail, MessageCircle, Clock, MapPin, ShieldCheck, Camera, KeyRound } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

const siteUrl = process.env.SITE_URL ?? "https://www.saltairedogs.uk";

export const metadata: Metadata = {
  title: "Contact — Saltaire Dogs + Pets",
  description: "Message for a quick, friendly quote. Local, DBS checked and insured. Photo updates after every visit.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact — Saltaire Dogs + Pets",
    description: "Email or use our contact form — whatever's easiest. Local, DBS checked and insured.",
    type: "website",
    url: `${siteUrl}/contact`,
    images: [{ url: "/images/contact/saltaire-dogs-contact-hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Saltaire Dogs + Pets",
    description: "Quick, friendly contact for dog walks and pet visits around Saltaire & Shipley.",
    images: ["/images/contact/saltaire-dogs-contact-hero.webp"],
  },
  robots: { index: true, follow: true },
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                   */
/* -------------------------------------------------------------------------- */

const HERO_IMAGE = "/images/contact/saltaire-dogs-contact-hero.webp";

const EMAIL = "saltairedogs@proton.me";

const AREAS = ["Saltaire", "Shipley", "Baildon"];
const SERVICES = ["Dog walk", "Puppy drop-in", "Cat/small pet visit"];

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

      {/* Full-width Hero */}
      <section className="relative">
        {/* Background image */}
        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src={HERO_IMAGE}
            alt="A calm, practical pet care moment at home in Saltaire & Shipley."
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay gradients for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_10%_10%,rgba(200,155,60,0.20),transparent_60%)]" />
        </div>

        {/* Hero content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-10 md:pb-14">
            <div className="w-full">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85 backdrop-blur">
                <span className="font-medium text-white">Contact</span>
                <span className="text-white/40">•</span>
                <span>Saltaire • Shipley • Baildon</span>
              </div>

              <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Say hello — we’ll get back quickly
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                Local and professional. DBS checked, insured, and steady handling. Message your street and what you need —
                we'll reply Mon–Sat, 8am–6pm.
              </p>

              {/* Hero CTA row */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-[#131415] transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-95"
                  style={{ backgroundColor: "#C89B3C" }}
                >
                  Contact form
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </div>

              {/* Reassurance strip */}
              <ul className="mt-6 grid gap-2 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </div>
      </section>

      <Separator className="mx-auto my-10 max-w-6xl bg-[#E6E3DA]" />

      {/* Details + form */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
            {/* Left */}
            <Card>
              <CardHeader>
                <CardTitle>Quick ways to reach us</CardTitle>
                <CardDescription>Whatever’s easiest — we’ll reply within hours (Mon–Sat).</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} icon="mail" />
                <ContactRow label="Hours" value="Mon–Sat 08:00–18:00 (flexible by request)" icon="clock" />
                <ContactRow label="Areas" value={AREAS.join(", ")} icon="map" />
              </CardContent>
            </Card>

            {/* Right */}
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

          {/* How we work */}
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
                      We choose sensible routes, keep leads short near roads, and adjust timing to avoid peak chaos.
                      Hi-viz in low light.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="updates">
                    <AccordionTrigger>Updates</AccordionTrigger>
                    <AccordionContent className="text-[#7B828A]">
                      Quick photo + a couple of lines after each visit. If anything looks off at home, we message right
                      away.
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

  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — Saltaire Dogs + Pets",
    url: `${siteUrl}/contact`,
    description: "Email or contact form for dog walking and pet visits in Saltaire & Shipley.",
    isPartOf: { "@type": "WebSite", name: "Saltaire Dogs + Pets", url: siteUrl },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saltaire Dogs + Pets",
    url: siteUrl,
    email: EMAIL,
    areaServed: AREAS,
    image: [`${siteUrl}${HERO_IMAGE}`],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }} />
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
  const Comp: any = href
    ? href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")
      ? "a"
      : Link
    : "div";

  const props = href
    ? {
        href,
        ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        className: "group flex items-center justify-between rounded-xl border p-3 transition-colors hover:bg-[#EFEEE9]",
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
