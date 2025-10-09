// src/app/(site)/legal/cookies/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButtons, OpenCookieSettingsButton } from "@/components/cookie-controls";

import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { breadcrumbSchema } from "../../../../lib/schema";

const LAST_UPDATED = "7 October 2025";
const CONTACT_EMAIL = "saltairedogs@proton.me";
const PAGE_TITLE = "Cookie Policy";
const PAGE_DESCRIPTION =
  "How Saltaire Dog Walks uses essential cookies, optional analytics and consent controls to support a privacy-first experience.";

const breadcrumbJsonLd = JSON.stringify(
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Legal", url: "/legal" },
    { name: PAGE_TITLE, url: "/legal/cookies" },
  ]),
  null,
  2
);

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/legal/cookies" },
  openGraph: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
    url: "/legal/cookies",
  },
  twitter: {
    title: `${PAGE_TITLE} — Saltaire Dog Walks`,
    description: PAGE_DESCRIPTION,
  },
};

/* -------------------------------------------------------------------------- */
/*                              Content helper data                            */
/* -------------------------------------------------------------------------- */

const summaryAtAGlance = [
  {
    label: "Privacy-first default",
    text: "Analytics is off by default. We only load optional analytics after you choose Allow analytics in the banner.",
  },
  {
    label: "Your control",
    text: "Change your mind any time via the “Cookie settings” link in the footer or the button on this page.",
  },
  {
    label: "Essential only",
    text: "We store a minimal preference record (sdw_cookie_consent) so the site remembers your choice.",
  },
  {
    label: "No sale of data",
    text: "We never sell personal information. See our Privacy Notice for full details of how we handle data.",
  },
];

const cookieTable = [
  {
    category: "Strictly necessary",
    example: "sdw_cookie_consent (localStorage)",
    purpose:
      "Remembers your cookie preference and prevents analytics loading unless you opt in. Helps keep the site reliable.",
    duration: "Until you clear your browser data or update your preference.",
  },
  {
    category: "Analytics (optional)",
    example: "Provider-specific (only after consent)",
    purpose:
      "Helps us understand which pages are most useful so we can improve the site. We load Plausible Analytics or Google Analytics 4 only after consent.",
    duration: "Varies by provider (Plausible: 24h aggregate; Google Analytics: up to 13 months).",
  },
];

const providers = [
  {
    name: "Plausible Analytics",
    status: "Optional (consent required)",
    data: [
      "Cookieless by default; may still process basic aggregate usage data.",
      "We configure it to respect your preference and only load after consent.",
    ],
    retention: "Aggregate reports; no personal profiles.",
    url: "https://plausible.io/data-policy",
  },
  {
    name: "Google Analytics 4",
    status: "Optional (consent required)",
    data: [
      "Event-based analytics with IP handling controls.",
      "We enable consent mode and only load after you opt in.",
    ],
    retention: "Up to 14 months (configurable); see Google’s documentation.",
    url: "https://policies.google.com/technologies/partner-sites",
  },
];

const manageSteps = [
  "Use the “Cookie settings” link in the site footer or the button below to reopen the banner.",
  "Choose Allow analytics (opt-in) or Decline (keep essentials only).",
  "You can also clear your browser cookies/localStorage to reset your choice.",
  "Most browsers let you block analytics entirely or set per-site rules in privacy settings.",
];

const rightsNotes = [
  "You can withdraw consent at any time; it won’t affect the lawfulness of processing before withdrawal.",
  "For access, deletion or more details about data we handle with analytics, see our Privacy Notice.",
];

const troubleshooting = [
  "If the banner doesn’t appear, your browser may already have a stored preference. Use the button below to reopen it.",
  "If analytics still appears after declining, your browser may be loading from cache—refresh with cache clear (Shift-Reload).",
  "Some content blockers change script behaviour; your Decline choice should still be respected.",
];

const signals = [
  "We aim to respect Global Privacy Control (GPC) and Do Not Track (DNT) where technically feasible by treating them as a decline signal.",
  "If both a stored consent and a GPC/DNT signal exist, we prioritise the more privacy-protective option (decline).",
];

const changesVersion = [
  {
    version: "v1.1",
    date: LAST_UPDATED,
    notes: "Added GPC/DNT note, provider details, accessibility guidance and troubleshooting. Clarified consent storage.",
  },
  { version: "v1.0", date: "1 October 2025", notes: "Initial publication." },
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function CookiesPage() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      role="main"
      aria-labelledby="cookies-heading"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />

      {/* Header */}
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Legal</p>
        <h1 id="cookies-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="text-base text-slate-600">Last updated: {LAST_UPDATED}</p>
        <p className="text-lg text-slate-700">{PAGE_DESCRIPTION}</p>
      </header>

      <Separator className="my-8" />

      {/* Summary at a glance */}
      <section aria-labelledby="summary-heading" className="space-y-6">
        <h2 id="summary-heading" className="text-2xl font-semibold text-slate-900">Summary at a glance</h2>
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
        <h2 id="toc-heading" className="text-2xl font-semibold text-slate-900">Contents</h2>
        <nav aria-label="Cookie policy sections">
          <ol className="grid list-decimal gap-2 pl-6 text-slate-700 sm:grid-cols-2">
            {[
              { id: "how-banner-works", label: "1. How our Cookie Banner works" },
              { id: "categories", label: "2. Cookies we use" },
              { id: "providers", label: "3. Analytics providers (optional)" },
              { id: "manage", label: "4. Managing your cookies" },
              { id: "signals", label: "5. GPC & Do Not Track" },
              { id: "accessibility", label: "6. Accessibility & alternative routes" },
              { id: "troubleshooting", label: "7. Troubleshooting" },
              { id: "rights", label: "8. Your rights & consent" },
              { id: "changes", label: "9. Changes to this policy" },
              { id: "contact", label: "10. Need help?" },
              { id: "version", label: "11. Version history" },
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

      {/* 1. How our Cookie Banner works */}
      <section id="how-banner-works" className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">1. How our Cookie Banner works</h2>
        <p className="text-base leading-7 text-slate-700">
          When you first visit our site, we display a Cookie Banner. Your choice is stored in a small local record named{" "}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-sm">sdw_cookie_consent</code>. If you decline, optional analytics does not load. If you allow, we load analytics on subsequent pages.
        </p>
        <p className="text-base leading-7 text-slate-700">
          Analytics is <strong>off by default</strong>. You can change your choice at any time using the controls below or the link in the footer.
        </p>

        <CookieSettingsButtons />
      </section>

      {/* 2. Cookies we use */}
      <section id="categories" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">2. Cookies we use</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th scope="col" className="px-4 py-3">Category</th>
                <th scope="col" className="px-4 py-3">Example</th>
                <th scope="col" className="px-4 py-3">Purpose</th>
                <th scope="col" className="px-4 py-3">Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {cookieTable.map((row) => (
                <tr key={row.category}>
                  <td className="px-4 py-4 font-medium text-slate-900">{row.category}</td>
                  <td className="px-4 py-4 align-top">{row.example}</td>
                  <td className="px-4 py-4 align-top leading-6">{row.purpose}</td>
                  <td className="px-4 py-4 align-top leading-6">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">
          Note: We may update this table if we change providers or settings. Non-essential technologies only load after consent.
        </p>
      </section>

      {/* 3. Analytics providers */}
      <section id="providers" className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">3. Analytics providers (optional)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {providers.map((p) => (
            <Card key={p.name} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm leading-6 text-slate-700">
                <p>
                  <span className="font-medium">Status:</span> {p.status}
                </p>
                <ul className="space-y-2">
                  {p.data.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600">
                  <span className="font-medium">Retention:</span> {p.retention}
                </p>
                <p className="text-slate-600">
                  <a className="text-sky-700 underline-offset-4 hover:underline" href={p.url} target="_blank" rel="noopener">
                    Provider policy
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-600">
          Your consent choice applies per device and browser. If you use multiple devices, set your preference on each.
        </p>
      </section>

      {/* 4. Managing your cookies */}
      <section id="manage" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">4. Managing your cookies</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          {manageSteps.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">
          Tip: If you block third-party scripts globally in your browser, you may not see the banner. Your browser setting will usually take priority.
        </p>
      </section>

      {/* 5. GPC & Do Not Track */}
      <section id="signals" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">5. Global Privacy Control & Do Not Track</h2>
        <p className="text-base leading-7 text-slate-700">
          We aim to honour Global Privacy Control (GPC) and Do Not Track (DNT) where technically feasible by treating them as a decline signal. If both a stored consent and a GPC/DNT signal exist, we apply the more privacy-protective option.
        </p>
      </section>

      {/* 6. Accessibility */}
      <section id="accessibility" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">6. Accessibility & alternative routes</h2>
        <p className="text-base leading-7 text-slate-700">
          The Cookie Banner is keyboard accessible and readable by screen readers. If it’s difficult to use, email{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
          and we will record your preference manually and provide a plain-text explanation.
        </p>
      </section>

      {/* 7. Troubleshooting */}
      <section id="troubleshooting" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">7. Troubleshooting</h2>
        <ul className="space-y-3 text-base leading-7 text-slate-700">
          {troubleshooting.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Your rights & consent */}
      <section id="rights" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">8. Your rights & consent</h2>
        <p className="text-base leading-7 text-slate-700">
          You control optional analytics. {rightsNotes[0]} {rightsNotes[1]} See our{" "}
          <Link href="/legal/privacy" className="text-sky-700 underline-offset-4 hover:underline">
            Privacy Notice
          </Link>{" "}
          for UK GDPR rights (access, rectification, erasure, restriction, objection, portability) and how to exercise them.
        </p>
      </section>

      {/* 9. Changes */}
      <section id="changes" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">9. Changes to this policy</h2>
        <p className="text-base leading-7 text-slate-700">
          We review this policy at least annually or when we change providers. We’ll update this page and highlight significant changes to active clients.
        </p>
      </section>

      {/* 10. Need help? */}
      <section id="contact" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">10. Need help?</h2>
        <p className="text-base leading-7 text-slate-700">
          Email{" "}
          <a className="text-sky-700 underline-offset-4 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>{" "}
          or{" "}
          <Link href="/contact" className="text-sky-700 underline-offset-4 hover:underline">
            contact us online
          </Link>{" "}
          if you have questions about cookies or wish to withdraw consent.
        </p>
        <div className="mt-3">
          <OpenCookieSettingsButton />
        </div>
      </section>

      {/* 11. Version history */}
      <section id="version" className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">11. Version history</h2>
        <div className="rounded-2xl border p-5">
          <ul className="space-y-2 text-sm text-slate-700">
            {changesVersion.map((c) => (
              <li key={c.version}>
                <span className="font-medium">
                  {c.version} — {c.date}:
                </span>{" "}
                {c.notes}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <Separator className="my-12" />
      <div className="mt-2">
        <Card role="note" aria-label="Important disclaimer">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-slate-600">
            This overview is for transparency and does not constitute legal advice. For tailored guidance, consult a qualified professional.
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
