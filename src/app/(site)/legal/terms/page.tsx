// src/app/(site)/legal/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { breadcrumbSchema } from "../../../../lib/schema";

const LAST_UPDATED = "7 October 2025";
const CONTACT_EMAIL = "saltairedogs@proton.me";
const PAGE_TITLE = "Terms & Conditions";
const PAGE_DESCRIPTION =
  "Terms covering Saltaire Dog Walks services including owner responsibilities, cancellations, weather policies, payment terms and governing law for England and Wales.";

const breadcrumbJsonLd = JSON.stringify(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Legal", url: "/legal" },
    { name: PAGE_TITLE, url: "/legal/terms" },
  ]),
  null,
  2
);

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/legal/terms" },
  openGraph: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
    url: "/legal/terms",
  },
  twitter: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
  },
};

/* -------------------------------------------------------------------------- */
/*                             Content helper data                             */
/* -------------------------------------------------------------------------- */

const summaryBullets = [
  "We’re DBS-checked, fully insured, and walk calm, small groups (max 3) unless a solo walk is booked.",
  "Bookings may be cancelled or rescheduled with notice; severe weather and emergencies may change plans.",
  "You authorise us to act in your pet’s best interests if urgent veterinary attention is needed.",
  "Off-lead walking requires explicit written consent and suitable recall; safety comes first.",
  "Keys are coded (no addresses) and stored securely; we leave your home as found.",
  "Invoices are due within 7 days; deposits may be required for overnights and peak slots.",
  "These terms are governed by the laws of England & Wales.",
];

const definitions = [
  { term: "“We”, “us”, “our”", def: "Saltaire Dog Walks, the service provider." },
  { term: "“You”, “owner”, “client”", def: "The person purchasing services and responsible for the pet(s)." },
  { term: "“Services”", def: "Dog walking (solo/group), puppy drop-ins, pet sitting, overnights, and related care." },
  {
    term: "“Care plan”",
    def: "Agreed written instructions you provide (routines, access, feeding, equipment, vet details, emergency contact).",
  },
  { term: "“Working hours”", def: "Mon–Sat 08:00–18:00 (earlier/later by arrangement; Sundays limited)." },
  { term: "“Saver slot”", def: "Discounted window we offer when grouping calm, compatible dogs on a route." },
];

const equipmentStandards = [
  "A well-fitted collar or harness complying with UK law (with ID tag as required).",
  "A secure, good-condition lead; retractable leads are discouraged on roads.",
  "Any required muzzle or headcollar, if used in your normal routine.",
  "Weather-appropriate gear (e.g., coats for short-haired breeds in winter).",
];

const cancellationMatrix = [
  {
    label: "Regular weekday walks",
    notice: "≥ 24 hours",
    charge: "No charge",
    notes: "Please cancel as soon as possible so we can adjust routes.",
  },
  {
    label: "Regular weekday walks",
    notice: "< 24 hours",
    charge: "Up to 100% fee",
    notes: "We’ll be fair if we can fill the slot.",
  },
  {
    label: "Ad-hoc / weekend bookings",
    notice: "< 12 hours",
    charge: "50% fee",
    notes: "Covers travel/time held exclusively for you.",
  },
  {
    label: "Overnight sits",
    notice: "Deposit (25%)",
    charge: "Refundable if cancelled ≥ 14 days",
    notes: "Inside 14 days deposit may be retained.",
  },
];

const safetyProtocol = [
  "Stop at every kerb; cross at visible points; short leads by roads; hi-viz in low light.",
  "Max three compatible dogs per group; we may change pairings to keep walks calm.",
  "Reactive/nervous dogs may be walked solo (+£3) or at quieter times.",
  "In heat: adjust times/routes, seek shade, carry water; may shorten or convert to enrichment visit.",
  "In ice/storms: shorten or reschedule for safety; we’ll message you with options.",
];

const paymentNotes = [
  "Invoices issued weekly or monthly by email, payable within 7 days unless agreed otherwise.",
  "Accepted: bank transfer, debit/credit card, and Stripe Payment Links (for pre-paid packs).",
  "Late payment: reasonable late fee and/or pause on future bookings until settled.",
  "Pre-paid packs and deposits are non-transferable unless we agree in writing.",
];

const offLeadRequirements = [
  "Written consent from you confirming you accept the additional risk of off-lead exercise.",
  "Reliable recall in varied environments; we may test recall on a long line first.",
  "No off-lead near roads, livestock, or where local rules prohibit it.",
  "We may re-attach the lead at any time for safety; our decision is final on the day.",
];

const vetAuthorisation = [
  "You authorise us to seek veterinary advice/treatment if we reasonably believe it is in your pet’s best interests.",
  "We will attempt to contact you and your emergency contact immediately.",
  "You agree to reimburse vet fees and associated costs (transport, time) unless caused by our proven negligence.",
  "We will use your nominated practice where practical; otherwise, the nearest suitable practice.",
];

const photosPolicy = [
  "We send photo updates after walks as part of the service.",
  "We only use photos for social media/website with your consent; you can opt out any time.",
  "We never publish your address or personally identifying home details.",
];

const liabilityClauses = [
  "We hold public liability insurance (details available on request).",
  "Except where unlawful, our liability is limited to the level of insurance cover.",
  "We are not liable for issues arising from withheld information, inaccurate instructions, or defective equipment you supply.",
  "We cannot guarantee recall or behaviour once the dog is back under the owner’s control.",
];

const forceMajeure = [
  "Events beyond our reasonable control (e.g., severe weather, road closures, strikes, utility outages, illness) may affect scheduling.",
  "We will communicate promptly and offer alternatives (shorter walk, enrichment visit, reschedule, refund as appropriate).",
];

const variationSeverability = [
  "We may update these terms with notice on this page; material changes will be highlighted to active clients.",
  "If any provision is found invalid or unenforceable, the remainder remains in force.",
  "No waiver of any right shall be effective unless in writing.",
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function TermsPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      role="main"
      aria-labelledby="terms-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      {/* Header */}
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Legal</p>
        <h1 id="terms-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="text-base text-slate-600">Last updated: {LAST_UPDATED}</p>
        <p className="text-lg text-slate-700">{PAGE_DESCRIPTION}</p>
      </header>

      <Separator className="my-8" />

      {/* Summary at a glance */}
      <section aria-labelledby="summary-heading" className="space-y-6">
        <h2 id="summary-heading" className="text-2xl font-semibold text-slate-900">Summary at a glance</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {summaryBullets.map((b) => (
            <Card key={b} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Key point</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-700">{b}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Table of contents */}
      <section aria-labelledby="toc-heading" className="mt-10 space-y-4">
        <h2 id="toc-heading" className="text-2xl font-semibold text-slate-900">Contents</h2>
        <nav aria-label="Terms sections">
          <ol className="grid list-decimal gap-2 pl-6 text-slate-700 sm:grid-cols-2">
            {[
              { id: "definitions", label: "1. Definitions" },
              { id: "scope", label: "2. Scope of services" },
              { id: "owner-responsibilities", label: "3. Owner responsibilities" },
              { id: "keys-security", label: "4. Keys & home security" },
              { id: "health-safety", label: "5. Health & safety" },
              { id: "offlead", label: "6. Off-lead policy (consent required)" },
              { id: "weather-emergencies", label: "7. Weather & emergencies" },
              { id: "bookings-cancellations", label: "8. Bookings, cancellations & reschedules" },
              { id: "payments", label: "9. Payments & deposits" },
              { id: "updates-photos", label: "10. Updates, photos & social media" },
              { id: "liability", label: "11. Liability & insurance" },
              { id: "vet", label: "12. Veterinary authorisation & medications" },
              { id: "force-majeure", label: "13. Force majeure" },
              { id: "privacy", label: "14. Privacy & data protection" },
              { id: "complaints", label: "15. Concerns & complaints" },
              { id: "variation", label: "16. Changes, severability & waiver" },
              { id: "law", label: "17. Governing law & jurisdiction" },
              { id: "acceptance", label: "18. Acceptance of these terms" },
              { id: "version", label: "19. Version history" },
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

      {/* 1. Definitions */}
      <section id="definitions" className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">1. Definitions</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {definitions.map((d) => (
            <div key={d.term} className="rounded-2xl border p-4">
              <dt className="font-medium text-slate-900">{d.term}</dt>
              <dd className="mt-1 text-slate-700">{d.def}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 2. Scope of services */}
      <section id="scope" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">2. Scope of services</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Dog walking (solo and small group), puppy drop-ins, daytime pet sitting and overnight stays as agreed in writing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Service area: Saltaire, Shipley, Baildon and nearby neighbourhoods unless otherwise agreed.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>We hold enhanced DBS checks and public liability insurance; documents available on request.</span>
          </li>
        </ul>
      </section>

      {/* 3. Owner responsibilities */}
      <section id="owner-responsibilities" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">3. Owner responsibilities</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          {[
            "Provide accurate information about behaviour, health, vaccination status and any bite history.",
            "Supply safe equipment in good condition (collar/harness/lead/ID tag) and microchip details where required.",
            "Provide secure access arrangements and any alarm codes or key instructions in advance.",
            "Notify us promptly of changes to routines, medication, behaviour or household security.",
            "Ensure your dog is ready for collection (collar on, access clear) at the agreed time.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <Card className="mt-2">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Equipment standards</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-slate-700">
            <ul className="space-y-2">
              {equipmentStandards.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 4. Keys & home security */}
      <section id="keys-security" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">4. Keys & home security</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>Keys are labelled by code only (no addresses) and stored securely. Keys are returned immediately on request.</span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>We lock doors, set alarms and leave the property as found. We are not liable for existing faults in locks or alarms.</span>
          </li>
        </ul>
      </section>

      {/* 5. Health & safety */}
      <section id="health-safety" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">5. Health & safety</h2>
        <ul className="space-y-2 text-slate-700">
          {safetyProtocol.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{p}</span>
            </li>
          ))}
          <li className="mt-2 text-sm text-slate-600">
            We may shorten or end a walk if safety issues arise, charging only for time delivered where reasonable.
          </li>
        </ul>
      </section>

      {/* 6. Off-lead policy */}
      <section id="offlead" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">6. Off-lead policy (consent required)</h2>
        <p className="text-slate-700">
          Off-lead exercise can be beneficial but carries additional risk. We only walk off-lead with your explicit
          written consent and when conditions are suitable.
        </p>
        <ul className="mt-3 space-y-2 text-slate-700">
          {offLeadRequirements.map((r) => (
            <li key={r} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Weather & emergencies */}
      <section id="weather-emergencies" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">7. Weather & emergencies</h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>
              Heat/ice/storms: we may adjust times, shorten walks, switch to enrichment visits or reschedule. Your pet’s
              welfare and handler safety come first.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>
              Emergencies: we will contact you and your emergency contact immediately and act in your pet’s best interests.
            </span>
          </li>
        </ul>
      </section>

      {/* 8. Bookings, cancellations & reschedules */}
      <section id="bookings-cancellations" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">8. Bookings, cancellations & reschedules</h2>
        <div role="table" aria-label="Cancellation terms" className="overflow-hidden rounded-2xl border">
          <div role="rowgroup" className="grid grid-cols-1 divide-y sm:grid-cols-12 sm:divide-y-0">
            <div role="row" className="hidden bg-slate-50 sm:grid sm:grid-cols-12">
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-4">Booking type</div>
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-3">Notice</div>
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-2">Charge</div>
              <div role="columnheader" className="p-3 text-sm font-semibold sm:col-span-3">Notes</div>
            </div>
            {cancellationMatrix.map((row) => (
              <div key={row.label} role="row" className="grid grid-cols-1 border-t sm:grid-cols-12 sm:border-t-0">
                <div role="cell" className="p-3 sm:col-span-4">
                  <p className="font-medium text-slate-900">{row.label}</p>
                </div>
                <div role="cell" className="p-3 text-slate-700 sm:col-span-3">{row.notice}</div>
                <div role="cell" className="p-3 text-slate-700 sm:col-span-2">{row.charge}</div>
                <div role="cell" className="p-3 text-slate-700 sm:col-span-3">{row.notes}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-slate-600">
          We always try to be fair. If we can fill a cancelled slot, we’ll reduce or waive any late fee.
        </p>
      </section>

      {/* 9. Payments & deposits */}
      <section id="payments" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">9. Payments & deposits</h2>
        <ul className="space-y-2 text-slate-700">
          {paymentNotes.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 10. Updates, photos & social media */}
      <section id="updates-photos" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">10. Updates, photos & social media</h2>
        <ul className="space-y-2 text-slate-700">
          {photosPolicy.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. Liability & insurance */}
      <section id="liability" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">11. Liability & insurance</h2>
        <ul className="space-y-2 text-slate-700">
          {liabilityClauses.map((c) => (
            <li key={c} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 12. Veterinary authorisation & medications */}
      <section id="vet" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">12. Veterinary authorisation & medications</h2>
        <ul className="space-y-2 text-slate-700">
          {vetAuthorisation.map((v) => (
            <li key={v} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">
          We will administer simple oral/topical medications as per your written instructions. We do not perform injections
          unless specifically agreed, trained, and safe to do so.
        </p>
      </section>

      {/* 13. Force majeure */}
      <section id="force-majeure" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">13. Force majeure</h2>
        <ul className="space-y-2 text-slate-700">
          {forceMajeure.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 14. Privacy & data protection */}
      <section id="privacy" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">14. Privacy & data protection</h2>
        <p className="text-slate-700">
          We handle your data in line with our{" "}
          <Link href="/legal/privacy" className="text-sky-700 underline-offset-4 hover:underline">
            Privacy Notice
          </Link>
          , which forms part of these terms. It explains what we collect, why, how long we keep it, and your rights.
        </p>
      </section>

      {/* 15. Concerns & complaints */}
      <section id="complaints" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">15. Concerns & complaints</h2>
        <p className="text-slate-700">
          If you’re unhappy at any point, please contact us so we can put things right quickly. We aim to resolve issues
          informally and fairly.
        </p>
      </section>

      {/* 16. Changes, severability & waiver */}
      <section id="variation" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">16. Changes, severability & waiver</h2>
        <ul className="space-y-2 text-slate-700">
          {variationSeverability.map((s) => (
            <li key={s} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 17. Governing law */}
      <section id="law" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">17. Governing law & jurisdiction</h2>
        <p className="text-slate-700">
          These terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive
          jurisdiction over any dispute, except that we may seek injunctive relief in any jurisdiction to protect safety
          or property.
        </p>
      </section>

      {/* 18. Acceptance */}
      <section id="acceptance" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">18. Acceptance of these terms</h2>
        <p className="text-slate-700">
          By making a booking, purchasing a pre-paid pack, handing over keys, or allowing us to collect your dog, you
          confirm you have read and accept these terms. If you have questions, reach us at{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Signature & confirmation (for paper forms)</CardTitle>
          </CardHeader>
        <CardContent className="text-sm leading-6 text-slate-700">
            <p>
              Client name: ____________________________ &nbsp; Signature: ____________________________ &nbsp; Date: ____ / ____ / ______
            </p>
            <p className="mt-2 text-slate-500">
              (If signing digitally, a typed name or e-signature counts as confirmation.)
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 19. Version history */}
      <section id="version" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">19. Version history</h2>
        <div className="rounded-2xl border p-5">
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-medium">v1.1 — {LAST_UPDATED}:</span> Added off-lead consent, vet authorisation,
              cancellation matrix, force majeure, and acceptance/signature section. Clarified payments and safety.
            </li>
            <li>
              <span className="font-medium">v1.0 — 1 October 2025:</span> Initial publication.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact & disclaimer */}
      <Separator className="my-12" />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
        <p className="text-base leading-7 text-slate-700">
          Questions about these terms? Email{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          or send a message through our{" "}
          <Link href="/contact" className="text-sky-700 underline-offset-4 hover:underline">
            contact form
          </Link>
          .
        </p>
      </section>

      <div className="mt-12">
        <Card role="note" aria-label="Important disclaimer">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-slate-600">
            This page provides general guidance and does not replace a bespoke contract or legal advice tailored to your
            circumstances.
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
