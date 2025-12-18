// src/app/(site)/legal/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { breadcrumbSchema } from "../../../../lib/schema";

const LAST_UPDATED = "7 October 2025";
const CONTACT_EMAIL = "saltairedogs@proton.me";
const PAGE_TITLE = "Privacy Notice";
const PAGE_DESCRIPTION =
  "How Saltaire Dog Walks collects, uses and protects your personal data for dog walking, pet sitting and related services in Saltaire, Shipley and Baildon.";

const breadcrumbJsonLd = JSON.stringify(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Legal", url: "/legal" },
    { name: PAGE_TITLE, url: "/legal/privacy" },
  ]),
  null,
  2
);

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/legal/privacy" },
  openGraph: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
    url: "/legal/privacy",
  },
  twitter: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
  },
};

/* -------------------------------------------------------------------------- */
/*                                Page content                                */
/* -------------------------------------------------------------------------- */

const summaryAtAGlance = [
  {
    label: "Who we are",
    text:
      "A local dog walking & pet sitting service for Saltaire, Shipley & Baildon (West Yorkshire). We are the data controller for your personal data.",
  },
  {
    label: "The short version",
    text:
      "We collect the minimum data needed to reply, book walks, care for your pet, and keep records we must keep. No data sales, ever.",
  },
  {
    label: "Your rights",
    text:
      "UK GDPR rights apply (access, rectification, erasure, restriction, objection, portability). Email us to use them—we respond within one month.",
  },
  {
    label: "Security",
    text:
      "We use reputable providers, device passcodes/biometrics, least-privilege access, and secure key handling. We review vendors annually.",
  },
];

const definitions = [
  {
    term: "“Personal data”",
    def: "Any information relating to an identified or identifiable person (e.g., name, email, phone, address, messages).",
  },
  {
    term: "“Processing”",
    def: "Any operation on personal data (collecting, storing, using, sharing, deleting).",
  },
  {
    term: "“Controller”",
    def: "The person or organisation deciding why and how personal data is processed (that’s us).",
  },
  {
    term: "“Processor”",
    def: "A third party that processes personal data on our behalf under a contract (e.g., email provider).",
  },
];

const dataCategories = [
  {
    heading: "Contact & identification",
    items: [
      "Name, email address, phone number.",
      "Home area/postcode to plan routes and confirm coverage.",
    ],
  },
  {
    heading: "Service information",
    items: [
      "Service preferences (walk length, solo/group), preferred times/days.",
      "Meet & greet notes, care instructions, door/entry details you choose to share.",
    ],
  },
  {
    heading: "Pet information (non-human)",
    items: [
      "Pet name, breed, age, temperament, on-lead/off-lead preferences, triggers.",
      "Feeding instructions, medication timings (for care planning—not medical diagnosis).",
    ],
  },
  {
    heading: "Emergency contacts",
    items: [
      "Emergency person’s name and phone number (you must have their permission).",
      "Veterinary practice details for urgent care decisions.",
    ],
  },
  {
    heading: "Operational records",
    items: [
      "Booking history, invoices/receipts, schedule changes, cancellation records.",
      "After-walk updates (photos, GPS summary) and general feedback you request.",
    ],
  },
  {
    heading: "Communications",
    items: [
      "Emails, phone calls, SMS/WhatsApp messages and their metadata (time, sender).",
      "Inbound website form submissions and our replies.",
    ],
  },
  {
    heading: "Web/analytics (optional)",
    items: [
      "Basic analytics if you consent to cookies (pages viewed, device type, approximate location).",
      "See our Cookies page for details and how to change your choice.",
    ],
  },
];

const lawfulBases = [
  {
    base: "Contract",
    uses: [
      "Taking steps at your request before a contract (replies, quotes, scheduling a meet & greet).",
      "Providing agreed services and keeping you updated (e.g., walk times, after-walk notes).",
    ],
  },
  {
    base: "Legitimate interests",
    uses: [
      "Day-to-day customer service, planning safe routes and groups, key handling records.",
      "Quality and training (improving our service based on aggregated feedback).",
      "Protecting our business and clients (insurance, fraud prevention, dispute handling).",
    ],
  },
  {
    base: "Consent",
    uses: [
      "Optional marketing updates (you can withdraw any time).",
      "Non-essential cookies/analytics on our website.",
      "Using your testimonial, name and (optionally) street/area on our website or GBP.",
    ],
  },
  {
    base: "Legal obligation",
    uses: [
      "Keeping financial records for HMRC (usually 6 years).",
      "Responding to lawful requests by authorities when required.",
    ],
  },
];

const retentionSchedule = [
  {
    label: "Enquiry data (not becoming a client)",
    period: "Up to 12 months from last contact",
    reason: "To answer follow-ups if you return; then safely delete.",
  },
  {
    label: "Client records & care plans",
    period: "While active + up to 6 years after last service",
    reason: "Insurance and dispute limitation periods.",
  },
  {
    label: "Invoices & payments",
    period: "At least 6 years",
    reason: "UK tax/accounting rules.",
  },
  {
    label: "Marketing preferences",
    period: "Until you opt out",
    reason: "Respect your consent/withdrawal history.",
  },
  {
    label: "Website analytics (if consented)",
    period: "See Cookies page",
    reason: "Provider-specific (e.g., GA, Plausible).",
  },
];

const processors = [
  {
    name: "Hosting & CDN",
    examples: ["Vercel (site hosting/CDN)"],
    notes: "Serve the website, logs for uptime/security.",
  },
  {
    name: "Email & productivity",
    examples: ["Google Workspace (mail, docs)"],
    notes: "Customer emails, scheduling, basic docs.",
  },
  {
    name: "Contact form email",
    examples: ["Resend (transactional email) – optional"],
    notes: "Sends enquiry notifications to our inbox when configured.",
  },
  {
    name: "Analytics (consent-based)",
    examples: ["Plausible or Google Analytics"],
    notes: "Aggregated, non-identifying website usage if you opt in.",
  },
  {
    name: "Payments (optional packs)",
    examples: ["Stripe Payment Links"],
    notes: "Processes card details; we never see your full card number.",
  },
];

const policySections = [
  {
    heading: "1. Who we are",
    body: [
      "Saltaire Dog Walks is a locally owned dog walking and pet sitting service covering Saltaire, Shipley and Baildon (West Yorkshire, UK).",
      "We act as the “data controller” for the personal data described in this notice. If you have questions or requests, please contact us using the details below.",
    ],
  },
  {
    heading: "2. What data we collect",
    body: [
      "Details submitted through our contact form (your name, email, phone, service preferences and message).",
      "Emails, WhatsApp messages or direct messages that you send to us when enquiring about services.",
      "Booking records, appointment history, feedback and testimonials that you voluntarily provide.",
      "Emergency contact details, veterinary contact information and care instructions you choose to share for your pet.",
    ],
  },
  {
    heading: "3. Why we use your data",
    body: [
      "To respond to your enquiries, arrange meet and greets and deliver the agreed services (legitimate interests/contract).",
      "To send service updates, schedules, invoices and after-walk reports (performance of a contract).",
      "To send optional marketing updates only when you have explicitly opted in (consent, which you may withdraw at any time).",
      "To improve our services through aggregated feedback and reviews (legitimate interests).",
    ],
  },
  {
    heading: "4. Lawful bases",
    body: [
      "Legitimate interests for routine customer communications and service delivery.",
      "Contract for providing services and pre-contract steps at your request.",
      "Consent for optional marketing emails, testimonials and non-essential cookies.",
      "Legal obligation where we must keep records for insurance or taxation purposes.",
    ],
  },
  {
    heading: "5. Retention",
    body: [
      "Enquiry information: kept for up to 12 months after our last contact if you do not become a client, in case you return.",
      "Client records and care plans: retained for the duration of the service agreement and archived for up to six years for insurance purposes.",
      "Invoices and financial records: stored for at least six years in line with UK accounting rules.",
    ],
  },
  {
    heading: "6. Sharing your data",
    body: [
      "Email and calendar providers that help us manage bookings (currently Google Workspace).",
      "Our website hosting and analytics partners who process data on our behalf under strict contractual terms.",
      "Professional services such as insurers or legal advisers where required to protect our business and clients.",
      "We never sell your data. We only share it when necessary to deliver the services you have requested or to meet legal obligations.",
    ],
  },
  {
    heading: "7. International transfers",
    body: [
      "Where our third-party processors store data outside the UK or EEA, we ensure appropriate safeguards are in place such as UK-approved Standard Contractual Clauses.",
    ],
  },
  {
    heading: "8. Your rights",
    body: [
      "Access – request a copy of the personal data we hold about you.",
      "Rectification – ask us to correct inaccurate or incomplete data.",
      "Erasure – request deletion of your data when it is no longer needed.",
      "Restriction – ask us to limit processing in certain circumstances.",
      "Objection – object to direct marketing or processing based on legitimate interests.",
      "Portability – request data you provided in a machine readable format where processing is based on consent or contract.",
    ],
  },
  {
    heading: "9. Contact for data requests",
    body: [
      `Email: ${CONTACT_EMAIL}`,
  "Phone: 07424 208127 (Mon–Sat 08:00–18:00).",
      "By post: Request details via email so we can ensure a secure exchange.",
      "We aim to respond to all data subject requests within one calendar month.",
    ],
  },
  {
    heading: "10. Complaints",
    body: [
      "If you have concerns, please contact us first so we can put things right quickly.",
      "You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO) in the UK.",
    ],
  },
  {
    heading: "11. Changes to this notice",
    body: [
      "We review this notice at least annually and whenever we introduce new services or processing partners.",
      "We will post any updates on this page and highlight significant changes to clients directly.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      role="main"
      aria-labelledby="privacy-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      {/* Header */}
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Legal</p>
        <h1 id="privacy-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Notice
        </h1>
        <p className="text-base text-slate-600">Last updated: {LAST_UPDATED}</p>
        <p className="text-lg text-slate-700">{PAGE_DESCRIPTION}</p>
      </header>

      <Separator className="my-8" />

      {/* Summary at a glance */}
      <section aria-labelledby="summary-heading" className="space-y-6">
        <h2 id="summary-heading" className="text-2xl font-semibold text-slate-900">
          Summary at a glance
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {summaryAtAGlance.map((s) => (
            <Card key={s.label} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{s.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-700">{s.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Table of contents */}
      <section aria-labelledby="toc-heading" className="mt-10 space-y-4">
        <h2 id="toc-heading" className="text-2xl font-semibold text-slate-900">
          Contents
        </h2>
        <nav aria-label="Privacy notice sections">
          <ol className="grid list-decimal gap-2 pl-6 text-slate-700 sm:grid-cols-2">
            {[
              { id: "who-we-are", label: "1. Who we are" },
              { id: "definitions", label: "2. Key definitions" },
              { id: "data-we-collect", label: "3. Data we collect (by category)" },
              { id: "why-we-use", label: "4. Why we use your data (purposes)" },
              { id: "lawful-bases-detail", label: "5. Lawful bases explained" },
              { id: "sharing", label: "6. Sharing & processors" },
              { id: "international", label: "7. International transfers" },
              { id: "security", label: "8. Security measures" },
              { id: "cookies", label: "9. Cookies & analytics" },
              { id: "retention", label: "10. How long we keep data" },
              { id: "rights", label: "11. Your rights & how to use them" },
              { id: "children", label: "12. Children’s data" },
              { id: "marketing", label: "13. Marketing preferences" },
              { id: "dsar-howto", label: "14. How to make a data request" },
              { id: "complaints", label: "15. Complaints & ICO" },
              { id: "changes", label: "16. Changes to this notice" },
              { id: "accessibility", label: "17. Accessibility & alternative formats" },
              { id: "versioning", label: "18. Version history" },
            ].map((item) => (
              <li key={item.id}>
                <a className="text-sky-700 underline-offset-4 hover:underline" href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      <Separator className="my-10" />

      {/* 1. Who we are */}
      <section id="who-we-are" className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">1. Who we are</h2>
        <p className="text-base leading-7 text-slate-700">
          Saltaire Dog Walks is a locally owned dog walking and pet sitting service covering Saltaire, Shipley and Baildon
          (West Yorkshire, UK). We act as the data controller for the processing described here. For all privacy queries,
          contact <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      {/* 2. Definitions */}
      <section id="definitions" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">2. Key definitions</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {definitions.map((d) => (
            <div key={d.term} className="rounded-2xl border p-4">
              <dt className="font-medium text-slate-900">{d.term}</dt>
              <dd className="mt-1 text-slate-700">{d.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3. Data we collect (by category) */}
      <section id="data-we-collect" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">3. Data we collect (by category)</h2>
        <p className="text-slate-700">
          We collect different types of data depending on how you interact with us. You can choose what you share—some
          details (like a phone number or emergency contact) help us provide safe, reliable care.
        </p>
        <div className="space-y-6">
          {dataCategories.map((cat) => (
            <div key={cat.heading} className="rounded-2xl border p-5">
              <h3 className="text-lg font-semibold text-slate-900">{cat.heading}</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why we use (purposes) */}
      <section id="why-we-use" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">4. Why we use your data (purposes)</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Replying to enquiries, arranging meet & greets, planning routes, and delivering safe services.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Sending schedules, confirmations, invoices, and after-walk updates you expect from us.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Keeping records needed for insurance, safety, and HMRC compliance.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Improving our service based on aggregated feedback and anonymised patterns.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>With your consent, sharing testimonials or sending occasional updates.</span>
          </li>
        </ul>
      </section>

      {/* 5. Lawful bases in detail */}
      <section id="lawful-bases-detail" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">5. Lawful bases explained</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lawfulBases.map((lb) => (
            <Card key={lb.base} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{lb.base}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-6 text-slate-700">
                <ul className="space-y-2">
                  {lb.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Sharing & processors */}
      <section id="sharing" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">6. Sharing your data & our processors</h2>
        <p className="text-slate-700">
          We do not sell your personal data. We share only what’s necessary with trusted processors under written
          contracts that bind them to confidentiality, security, and instructions from us.
        </p>
        <div className="space-y-4">
          {processors.map((p) => (
            <div key={p.name} className="rounded-2xl border p-5">
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.notes}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.examples.map((ex) => (
                  <li key={ex} className="rounded-full border bg-white px-3 py-1.5 text-xs text-slate-700">
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7. International transfers */}
      <section id="international" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">7. International transfers</h2>
        <p className="text-slate-700">
          Some providers may store data outside the UK/EEA. When this happens, we use appropriate safeguards such as
          UK-approved Standard Contractual Clauses or adequacy decisions. We review vendor documentation annually and on
          material changes.
        </p>
      </section>

      {/* 8. Security measures */}
      <section id="security" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">8. Security measures</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Technical</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-700">
              <ul className="space-y-2">
                {[
                  "Encrypted transport (HTTPS) for website and email providers.",
                  "Device passcodes/biometrics; automatic lock and remote-wipe enabled.",
                  "Least-privilege access to accounts; strong, unique passwords and 2FA.",
                  "Regular software updates for browsers and operating systems.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Organisational</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-700">
              <ul className="space-y-2">
                {[
                  "Need-to-know access to client records and keys.",
                  "Key tags use codes, not addresses; separate list kept securely.",
                  "Basic incident response plan (identify, contain, notify if required).",
                  "Annual vendor review and policy refresh.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-slate-600">
          No system is perfectly secure, but we take appropriate steps to protect your data. If we reasonably believe a
          personal data breach has created a risk to you, we will assess promptly and notify where required by law.
        </p>
      </section>

      {/* 9. Cookies & analytics */}
      <section id="cookies" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">9. Cookies & analytics</h2>
        <p className="text-slate-700">
          Our site may use cookies or similar technologies to understand which pages are most useful and to keep the
          site reliable. Analytics is <strong>off by default</strong> unless you opt in via the Cookie banner. You can
          change your choice at any time.
        </p>
        <p className="text-slate-700">
          See our{" "}
          <Link className="text-sky-700 underline-offset-4 hover:underline" href="/legal/cookies">
            Cookies page
          </Link>{" "}
          for details of providers, cookie lifetimes and how to withdraw consent.
        </p>
      </section>

      {/* 10. Retention schedule */}
      <section id="retention" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">10. How long we keep data</h2>
        <div role="table" aria-label="Retention schedule" className="overflow-hidden rounded-2xl border">
          <div role="rowgroup" className="grid grid-cols-1 divide-y sm:grid-cols-12 sm:divide-y-0">
            <div role="row" className="hidden bg-slate-50 sm:grid sm:grid-cols-12">
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-5">
                Data type
              </div>
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-3">
                How long
              </div>
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-4">
                Why
              </div>
            </div>
            {retentionSchedule.map((r) => (
              <div key={r.label} role="row" className="grid grid-cols-1 border-t sm:grid-cols-12 sm:border-t-0">
                <div role="cell" className="p-3 sm:col-span-5">
                  <p className="font-medium text-slate-900">{r.label}</p>
                </div>
                <div role="cell" className="p-3 text-slate-700 sm:col-span-3">{r.period}</div>
                <div role="cell" className="p-3 text-slate-700 sm:col-span-4">{r.reason}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-slate-600">
          We may keep minimal records longer if needed to resolve disputes, defend legal claims, or comply with laws.
        </p>
      </section>

      {/* 11. Your rights */}
      <section id="rights" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">11. Your rights & how to use them</h2>
        <p className="text-slate-700">
          You can exercise your UK GDPR rights at any time. We will respond within one calendar month of verifying your
          identity.
        </p>
        <ul className="mt-3 space-y-2 text-slate-700">
          {[
            "Access – get a copy of your personal data and supplementary information.",
            "Rectification – fix inaccurate or incomplete data.",
            "Erasure – ask us to delete data we no longer need (subject to legal retention).",
            "Restriction – pause certain processing while we resolve a concern.",
            "Objection – object to processing based on legitimate interests or to direct marketing.",
            "Portability – receive data you provided in a machine-readable format when processing is based on consent/contract.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 12. Children’s data */}
      <section id="children" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">12. Children’s data</h2>
        <p className="text-slate-700">
          Our services are aimed at adults arranging pet care. If a child contacts us, we will limit data to what is
          strictly necessary to respond and encourage an adult to continue the conversation.
        </p>
      </section>

      {/* 13. Marketing */}
      <section id="marketing" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">13. Marketing preferences</h2>
        <p className="text-slate-700">
          We only send optional updates if you have explicitly opted in. You can withdraw consent at any time by
          replying “stop”, using an unsubscribe link (if present), or emailing{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>.
        </p>
        <p className="text-sm text-slate-600">
          We may still contact you about bookings, safety, invoices or changes to our terms (these are service
          messages, not marketing).
        </p>
      </section>

      {/* 14. DSAR how-to */}
      <section id="dsar-howto" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">14. How to make a data request</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base font-semibold">What to include</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-700">
              <ul className="space-y-2">
                {[
                  "What right you want to use (e.g., access, correction, deletion).",
                  "Enough detail to help us locate your data (e.g., email/phone used, date range).",
                  "Proof of identity (to protect you) — we’ll tell you what we need, usually a quick check.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-base font-semibold">How we respond</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-slate-700">
              <ul className="space-y-2">
                {[
                  "We acknowledge receipt and confirm identity if needed.",
                  "We respond within one month (can extend by two months for complex requests, we’ll explain why).",
                  "We provide data securely. If requests are manifestly unfounded/excessive, we may charge a reasonable fee or refuse with reasons.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-slate-600">
          To start, email <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or use our{" "}
          <Link className="text-sky-700 underline-offset-4 hover:underline" href="/contact">contact form</Link>.
        </p>
      </section>

      {/* 15. Complaints */}
      <section id="complaints" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">15. Complaints & the ICO</h2>
        <p className="text-slate-700">
          If you’re unhappy with how we handle your data, please contact us first so we can put things right quickly.
          You can also complain to the UK Information Commissioner’s Office (ICO) at{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href="https://ico.org.uk" target="_blank" rel="noopener">
            ico.org.uk
          </a>.
        </p>
      </section>

      {/* 16. Changes */}
      <section id="changes" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">16. Changes to this notice</h2>
        <p className="text-slate-700">
          We review this notice at least annually and when we add new services or providers. We post updates on this
          page and highlight significant changes directly to clients.
        </p>
      </section>

      {/* 17. Accessibility */}
      <section id="accessibility" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">17. Accessibility & alternative formats</h2>
        <p className="text-slate-700">
          We want everyone to be able to understand this notice. If you need it in a different format (large print, high
          contrast, plain text email), message us at{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      {/* 18. Version history */}
      <section id="versioning" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">18. Version history</h2>
        <div className="rounded-2xl border p-5">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium">v1.1 — {LAST_UPDATED}:</span> Design refresh, added clearer lawful bases,
              retention schedule, cookies explainer, security detail, and DSAR how-to.
            </li>
            <li>
              <span className="font-medium">v1.0 — 1 October 2025:</span> Initial publication.
            </li>
          </ul>
        </div>
      </section>

      {/* Original “policySections” content preserved for continuity */}
      <Separator className="my-12" />
      <section aria-labelledby="original-overview" className="space-y-4">
        <h2 id="original-overview" className="text-2xl font-semibold text-slate-900">
          Original overview (summary)
        </h2>
        <div className="space-y-10">
          {policySections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">{section.heading}</h3>
              <ul className="space-y-3 text-base leading-7 text-slate-700">
                {section.body.map((paragraph) => (
                  <li key={paragraph} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      {/* Contacting us */}
      <Separator className="my-12" />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Contacting us</h2>
        <p className="text-base leading-7 text-slate-700">
          Please email{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          or use our{" "}
          <Link href="/contact" className="text-sky-700 underline-offset-4 hover:underline">
            contact form
          </Link>{" "}
          to exercise your rights or ask questions about this notice.
        </p>
      </section>

      {/* Disclaimer */}
      <div className="mt-12">
        <Card role="note" aria-label="Important disclaimer">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-slate-600">
            This page provides general information about how we handle personal data. It does not constitute legal
            advice. Please speak to a qualified solicitor if you require personalised guidance.
          </CardContent>
        </Card>
      </div>

      {/* Back to top */}
      <div className="mt-10">
        <a className="text-sky-700 underline-offset-4 hover:underline" href="#main-content" aria-label="Back to top">
          ↑ Back to top
        </a>
      </div>
    </main>
  );
}
