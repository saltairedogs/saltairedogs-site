"use client";

/**
 * Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags
 * Premium redesign + stronger SEO/structure.
 */

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useId,
  Fragment,
} from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Brand palette
// ---------------------------------------------------------------------------

const BRAND = {
  pebble: "#F7F7F6",
  stone: "#EFEEE9",
  hairline: "#E6E3DA",
  ink: "#131415",
  slate: "#7B828A",
  brass: "#C89B3C",
  brassDark: "#A47F2D",
};

// ---------------------------------------------------------------------------
// Types & helpers
// ---------------------------------------------------------------------------

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function toPounds(n: number) {
  return `£${n.toFixed(2)}`;
}

function toDateString() {
  return new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Minimal icons
// ---------------------------------------------------------------------------

const Icon = {
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Alert: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Share: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Link: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 2a4 4 0 105.657 5.657l2-2M14 10l2-2a4 4 0 10-5.657-5.657l-2 2" />
    </svg>
  ),
  Print: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Clock: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  FileText: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  Shield: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.89.33 1.76.63 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.15a2 2 0 012.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0122 16.92z" />
    </svg>
  ),
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  Download: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function ChoosingDogWalkerClient() {
  const toc: TocItem[] = useMemo(
    () => [
      { id: "overview", label: "Overview", level: 1 },
      { id: "pricing", label: "Prices & What Affects Them", level: 1 },
      { id: "estimator", label: "Price Estimator", level: 1 },
      { id: "insurance", label: "Insurance & Compliance", level: 1 },
      { id: "references", label: "References & Checks", level: 1 },
      { id: "red-flags", label: "Red Flags (and fixes)", level: 1 },
      { id: "questions", label: "Questions to Ask", level: 1 },
      { id: "scripts", label: "Message & Call Scripts", level: 1 },
      { id: "downloads", label: "Downloadable Checklists", level: 1 },
      { id: "faq", label: "FAQs", level: 1 },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const total = el.scrollHeight - window.innerHeight;
      const p = clamp(window.scrollY / Math.max(1, total), 0, 1);
      setProgress(p);

      const top = window.scrollY + 120;
      let current = toc[0].id;
      for (const section of Array.from(el.querySelectorAll("section[id]")) as HTMLElement[]) {
        if (section.offsetTop <= top) current = section.id;
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Actions
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {}
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
      } else {
        await handleCopy();
      }
    } catch {}
  };

  const readingTime = useMemo(() => "14 min read", []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: BRAND.pebble, color: BRAND.ink }}>
      <ProgressBar progress={progress} />
      <Hero readingTime={readingTime} />

      {/* Structured data (BlogPosting + FAQPage + Breadcrumbs) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd()) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbsJsonLd()) }}
      />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Sidebar */}
        <aside className="order-last lg:order-first lg:col-span-3 space-y-6">
          <StickyToc toc={toc} activeId={activeId} />

          {/* Quick actions */}
          <div
            className="rounded-2xl p-4 shadow-sm"
            style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}
          >
            <div className="text-sm font-semibold mb-2">Quick actions</div>
            <div className="flex flex-wrap gap-2">
              <Button subtle onClick={handleCopy} ariaLabel="Copy link">
                <Icon.Link className="h-4 w-4" />
                <span>{copied ? "Copied" : "Copy link"}</span>
              </Button>
              <Button subtle onClick={() => window.print()} ariaLabel="Print">
                <Icon.Print className="h-4 w-4" />
                <span>Print</span>
              </Button>
              <Button subtle onClick={handleShare} ariaLabel="Share">
                <Icon.Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
            <p className="mt-3 text-xs" style={{ color: BRAND.slate }}>
              Tip: printing uses a tidy single-column template.
            </p>
          </div>

          {/* Contact snippet */}
          <div
            className="rounded-2xl p-4"
            style={{ backgroundColor: BRAND.stone, border: `1px solid ${BRAND.hairline}` }}
          >
            <div className="text-sm font-semibold mb-2">Chat with us</div>
            <p className="text-sm">
              Have unusual scheduling or a reactive dog? We’ll advise honestly—even if we’re not the best fit.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold"
                style={{ backgroundColor: BRAND.brass, color: BRAND.ink }}
              >
                <Icon.Phone className="h-4 w-4" /> Contact
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-semibold"
                style={{ backgroundColor: "#fff", borderColor: BRAND.hairline, color: BRAND.ink }}
              >
                Pricing
              </Link>
            </div>
          </div>
        </aside>

        {/* Article */}
        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar />

          {/* Overview */}
          <Section id="overview" title="Overview">
            <p>
              Choosing a dog walker is half logistics, half trust. This guide gives you the <em>exact</em> checks and questions
              to compare Saltaire walkers fairly—across price, insurance, references and the subtle “red flags” you can spot on a first call.
              Use it as a worksheet, share it with a partner, and keep it handy during trials.
            </p>
            <Callout type="success" title="Quick summary">
              Shortlist 2–3 walkers. Confirm insurance and references in writing. Run a 2-week trial at consistent times.
              Choose the walker who communicates clearly and documents routines—and whose dogs look relaxed on-lead.
            </Callout>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="brass">Transparent pricing</Badge>
              <Badge tone="slate">Insurance explained</Badge>
              <Badge tone="stone">Red flags to avoid</Badge>
            </div>
          </Section>

          <Divider />

          {/* Prices & Drivers */}
          <Section id="pricing" title="Prices & What Actually Affects Them">
            <p style={{ color: BRAND.slate }}>
              Prices reflect time, travel, group size, and training skill. Focus on value & consistency over the lowest sticker price.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExplainerCard
                title="What you’re paying for"
                bullets={[
                  "Time on-foot (not van time)",
                  "Pickups/drop-offs & route planning",
                  "Group management & handling skill",
                  "Insurance, training, and first-aid",
                ]}
              />
              <ExplainerCard
                title="Why quotes differ"
                bullets={[
                  "Solo vs group walks",
                  "Senior/puppy handling",
                  "Reactive cases or bespoke routes",
                  "Distance and parking constraints",
                ]}
              />
            </div>

            <PricingGrid />

            <ProTip title="Beware of ‘too cheap to be true’">
              A rate that’s far below local norms usually means time is being saved <em>somewhere</em>: shorter walks, big groups,
              or gaps in insurance/compliance. Always verify the details.
            </ProTip>
          </Section>

          <Divider />

          {/* Estimator */}
          <Section id="estimator" title="Simple Price Estimator (ballpark)">
            <p style={{ color: BRAND.slate }}>
              Use this interactive calculator to sketch a weekly ballpark. It’s intentionally conservative; always confirm a final quote in writing.
            </p>
            <Estimator />
            <Callout type="info" title="How to compare fairly">
              Compare total weekly cost for your specific pattern (days, times, solo/group, pickups). Per-walk prices can look similar while
              weekly totals differ massively.
            </Callout>
          </Section>

          <Divider />

          {/* Insurance */}
          <Section id="insurance" title="Insurance & Compliance (clear & simple)">
            <p style={{ color: BRAND.slate }}>
              Good walkers make insurance and documentation boringly obvious. Ask for a single PDF or link with dates and policy numbers.
            </p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChecklistCard
                title="Essentials to see"
                items={[
                  "Public liability insurance (dog walking explicitly covered)",
                  "Canine first-aid certificate (within 2–3 years)",
                  "DBS/Disclosure certificate (recent or active update service)",
                  "Written T&Cs: cancellations, emergencies, vet consents",
                  "Vehicle policy if transporting (restraints, temp control)",
                ]}
              />
              <GlossaryCard
                title="Quick glossary"
                pairs={[
                  ["Public liability", "Covers damage/injury to others while in care."],
                  ["Professional indemnity", "Covers advice/services causing loss."],
                  ["Key cover", "For holding keys and lock-related incidents."],
                  ["Care, Custody & Control", "Cover while pet is under your supervision."],
                ]}
              />
            </div>

            <Callout type="success" title="Green flag">
              A walker who sends a tidy PDF upfront—policy pages, expiry dates highlighted, plus a calm explanation—usually runs
              the rest of their service with the same clarity.
            </Callout>
          </Section>

          <Divider />

          {/* References & Checks */}
          <Section id="references" title="References & How to Verify Them">
            <p style={{ color: BRAND.slate }}>
              A short, polite reference check tells you more than a glossy Instagram ever will. Use the mini-tool below to plan your call.
            </p>

            <ReferencesTool />

            <ProTip title="What ‘good’ sounds like">
              References describe <em>steady routines</em>, <em>clear comms</em>, and <em>dogs that settle fast after drop-off</em>. Vague praise without examples
              is a yellow flag—probe for specifics.
            </ProTip>
          </Section>

          <Divider />

          {/* Red Flags */}
          <Section id="red-flags" title="Red Flags (and the fix if you still like them)">
            <p style={{ color: BRAND.slate }}>
              Nobody’s perfect—but some issues are more serious than others. Here’s how to spot them and what a safe fix might look like.
            </p>
            <RedFlagsGallery />
          </Section>

          <Divider />

          {/* Questions */}
          <Section id="questions" title="Questions to Ask (short, useful, not awkward)">
            <QuestionsList />
          </Section>

          <Divider />

          {/* Scripts */}
          <Section id="scripts" title="Message & Call Scripts (copy/paste)">
            <ScriptsBlock />
          </Section>

          <Divider />

          {/* Downloads */}
          <Section id="downloads" title="Downloadable Checklists (print-ready)">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <DownloadCard
                title="Buyer’s Checklist (A4)"
                href="/downloads/choosing-walker-checklist.pdf"
                desc="One page: insurance, references, red flags and price notes."
              />
              <DownloadCard
                title="Reference Call Sheet"
                href="/downloads/reference-call-sheet.pdf"
                desc="Log two references side-by-side with scoring."
              />
              <DownloadCard
                title="Trial Period Planner"
                href="/downloads/trial-period-planner.pdf"
                desc="Two-week grid for notes on energy, lead manners and post-walk mood."
              />
            </div>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section id="faq" title="FAQs">
            <Faq />
          </Section>

          <BottomCta />

          <AuthorCard author="Saltaire Dog Walks" role="Local team • First-aid trained • Clear, written comms" />

          {/* Page actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
            <ActionButton onClick={handleCopy} icon={<Icon.Link className="h-4 w-4" />}>
              {copied ? "Link copied" : "Copy link"}
            </ActionButton>
            <ActionButton onClick={() => window.print()} icon={<Icon.Print className="h-4 w-4" />}>
              Print
            </ActionButton>
            <ActionButton onClick={handleShare} icon={<Icon.Share className="h-4 w-4" />}>
              Share
            </ActionButton>
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// UI primitives
// ---------------------------------------------------------------------------

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div
      className="sticky top-0 z-40 h-1 w-full print:hidden"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      style={{ backgroundColor: BRAND.stone }}
    >
      <div
        className="h-full transition-[width] duration-200"
        style={{ width: `${Math.round(progress * 100)}%`, backgroundColor: BRAND.brass }}
      />
    </div>
  );
}

function Hero({ readingTime }: { readingTime: string }) {
  return (
    <header className="relative isolate overflow-hidden print:hidden" style={{ backgroundColor: BRAND.pebble }}>
      {/* Ambient image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/cover.jpg')" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ring-1"
            style={{ backgroundColor: BRAND.stone, color: BRAND.ink, borderColor: BRAND.hairline }}
          >
            Buyer’s Guide
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags
          </h1>
          <p className="mt-3 text-lg" style={{ color: BRAND.slate }}>
            A practical, plain-English checklist to compare walkers fairly and choose with confidence.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm" style={{ color: BRAND.slate }}>
            <div className="inline-flex items-center gap-2"><Icon.Clock className="h-4 w-4" /> {readingTime}</div>
            <div className="inline-flex items-center gap-2"><Icon.Eye className="h-4 w-4" /> Updated {toDateString()}</div>
          </div>
        </div>
      </div>
      <div
        className="h-10 w-full"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(200,155,60,0.18), transparent 70%)",
        }}
      />
    </header>
  );
}

function StickyToc({ toc, activeId }: { toc: TocItem[]; activeId: string }) {
  return (
    <nav
      className="lg:sticky lg:top-20 rounded-2xl p-5 shadow-sm"
      aria-label="On this page"
      style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}
    >
      <div className="text-sm font-semibold">On this page</div>
      <ol className="mt-3 space-y-2">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cx(
                "block rounded-md px-2 py-1 text-sm focus:outline-none",
                activeId === t.id
                  ? "ring-1"
                  : "hover:opacity-80"
              )}
              style={
                activeId === t.id
                  ? { backgroundColor: BRAND.stone, color: BRAND.ink, borderColor: BRAND.hairline }
                  : { color: BRAND.ink }
              }
              aria-current={activeId === t.id ? "location" : undefined}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ol>
      <div
        className="mt-4 rounded-lg p-3 text-xs"
        style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}`, color: BRAND.slate }}
      >
        Tip: tap headings to jump — the progress bar shows where you are.
      </div>
    </nav>
  );
}

function TopMetaBar() {
  const dateText = toDateString();
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm" style={{ color: BRAND.slate }}>
      <span>
        By <strong style={{ color: BRAND.ink }}>Saltaire Dog Walks</strong>
      </span>
      <span aria-hidden="true">•</span>
      <span>{dateText}</span>
      <span aria-hidden="true">•</span>
      <span>Saltaire</span>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const headingId = useId();
  return (
    <section id={id} className="scroll-mt-24">
      <h2 id={headingId} className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      <div className="prose prose-slate max-w-none prose-strong:text-slate-900 prose-a:underline mt-4" style={{ color: BRAND.ink }}>
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10" style={{ borderColor: BRAND.hairline }} />;
}

function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="not-prose mt-6 rounded-xl p-4 shadow-sm transition hover:shadow-md"
      style={{ backgroundColor: BRAND.stone, border: `1px solid ${BRAND.hairline}` }}
    >
      <div className="flex items-start gap-3">
        <div style={{ color: BRAND.brass }}>
          <Icon.Check className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="mt-1 text-sm" style={{ color: BRAND.ink }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Callout({
  type,
  title,
  children,
}: {
  type: "success" | "warning" | "info";
  title: string;
  children: React.ReactNode;
}) {
  const palette =
    {
      success: { bg: BRAND.stone, ring: BRAND.hairline, tint: BRAND.ink, icon: <Icon.Check className="h-4 w-4" style={{ color: BRAND.brass }} /> },
      warning: { bg: "#FFF7E6", ring: "#FCE6B3", tint: "#7A4B00", icon: <Icon.Alert className="h-4 w-4" style={{ color: "#B67200" }} /> },
      info: { bg: "#F1F4F6", ring: "#E3E8EB", tint: "#1D2B36", icon: <Icon.Info className="h-4 w-4" style={{ color: "#1D2B36" }} /> },
    }[type];
  return (
    <div className="not-prose mt-6 rounded-xl p-4 ring-1" style={{ backgroundColor: palette.bg, borderColor: palette.ring }}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{palette.icon}</div>
        <div>
          <div className="text-sm font-semibold" style={{ color: palette.tint }}>{title}</div>
          <div className="mt-1 text-sm" style={{ color: BRAND.ink }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children, tone = "brass" }: { children: React.ReactNode; tone?: "brass" | "stone" | "slate" }) {
  const map: Record<string, React.CSSProperties> = {
    brass: { backgroundColor: `${BRAND.brass}22`, color: BRAND.ink, borderColor: `${BRAND.brass}55` },
    stone: { backgroundColor: BRAND.stone, color: BRAND.ink, borderColor: BRAND.hairline },
    slate: { backgroundColor: "#E9EEF2", color: "#1D2B36", borderColor: "#D6E0E7" },
  };
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1"
      style={map[tone]}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  onClick,
  subtle,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  subtle?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cx(
        "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium shadow-sm focus:outline-none"
      )}
      style={
        subtle
          ? { backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}`, color: BRAND.ink }
          : { backgroundColor: BRAND.brass, color: BRAND.ink, border: `1px solid ${BRAND.brass}` }
      }
    >
      {children}
    </button>
  );
}

function ActionButton({ onClick, icon, children }: { onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium shadow-sm focus:outline-none"
      style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}`, color: BRAND.ink }}
    >
      {icon}
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Content components
// ---------------------------------------------------------------------------

function ExplainerCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="flex items-center gap-2 font-semibold">
        <Icon.FileText className="h-4 w-4" style={{ color: BRAND.brass }} /> {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm" style={{ color: BRAND.ink }}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon.Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.brass }} />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingGrid() {
  const tiers = [
    {
      title: "Solo walk",
      range: "£14–£20 / 30–45 min",
      bullets: ["1-to-1 attention", "Good for shy/reactive or seniors", "Flexible pacing and routes"],
    },
    {
      title: "Small group (2–4 dogs)",
      range: "£10–£15 / 45–60 min",
      bullets: ["Social, cost-effective", "Balanced energy groups", "Predictable routes & timings"],
    },
    {
      title: "Puppy drop-in / comfort break",
      range: "£8–£12 / 15–20 min",
      bullets: ["Garden/indoor visit + toilet break", "Early training foundations", "Great bridge until full walks"],
    },
  ];
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div
          key={t.title}
          className="rounded-2xl p-5 shadow-sm transition hover:shadow-md"
          style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <span
              className="rounded-full px-2 py-1 text-[11px] font-semibold ring-1"
              style={{ backgroundColor: BRAND.stone, borderColor: BRAND.hairline, color: BRAND.ink }}
            >
              Guide
            </span>
          </div>
          <div className="mt-1 text-sm" style={{ color: BRAND.slate }}>
            {t.range}
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {t.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Icon.Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.brass }} /> {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Estimator() {
  const [solo, setSolo] = useState(0);
  const [group, setGroup] = useState(3);
  const [dropins, setDropins] = useState(0);
  const [weeks, setWeeks] = useState(4);
  const [baseSolo, setBaseSolo] = useState(16);
  const [baseGroup, setBaseGroup] = useState(12);
  const [baseDrop, setBaseDrop] = useState(10);

  const weekly = useMemo(() => solo * baseSolo + group * baseGroup + dropins * baseDrop, [solo, group, dropins, baseSolo, baseGroup, baseDrop]);
  const total = useMemo(() => weekly * weeks, [weekly, weeks]);

  return (
    <div className="not-prose mt-4 rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium">Solo walks / week</label>
          <input type="range" min={0} max={7} value={solo} onChange={(e) => setSolo(Number(e.target.value))} className="mt-1 w-full" />
          <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>{solo} × {toPounds(baseSolo)}</div>

          <label className="mt-4 block text-sm font-medium">Group walks / week</label>
          <input type="range" min={0} max={7} value={group} onChange={(e) => setGroup(Number(e.target.value))} className="mt-1 w-full" />
          <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>{group} × {toPounds(baseGroup)}</div>

          <label className="mt-4 block text-sm font-medium">Puppy drop-ins / week</label>
          <input type="range" min={0} max={10} value={dropins} onChange={(e) => setDropins(Number(e.target.value))} className="mt-1 w-full" />
          <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>{dropins} × {toPounds(baseDrop)}</div>

          <label className="mt-4 block text-sm font-medium">Compare over (weeks)</label>
          <input type="range" min={1} max={12} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} className="mt-1 w-full" />
          <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>{weeks} weeks</div>
        </div>

        <div className="rounded-xl p-4" style={{ backgroundColor: BRAND.stone, border: `1px solid ${BRAND.hairline}` }}>
          <h4 className="text-sm font-semibold">Estimated totals</h4>
          <div className="mt-2 text-sm">Weekly: <strong>{toPounds(weekly)}</strong></div>
          <div className="mt-1 text-sm">Period total: <strong>{toPounds(total)}</strong></div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <PresetButton label="Budget" setBaseSolo={setBaseSolo} setBaseGroup={setBaseGroup} setBaseDrop={setBaseDrop} values={{ solo: 15, group: 11, drop: 9 }} />
            <PresetButton label="Standard" setBaseSolo={setBaseSolo} setBaseGroup={setBaseGroup} setBaseDrop={setBaseDrop} values={{ solo: 16, group: 12, drop: 10 }} />
            <PresetButton label="Premium" setBaseSolo={setBaseSolo} setBaseGroup={setBaseGroup} setBaseDrop={setBaseDrop} values={{ solo: 18, group: 14, drop: 12 }} />
          </div>

          <p className="mt-3 text-xs" style={{ color: BRAND.slate }}>
            These are guide rates for Saltaire-area walkers. Always confirm final quotes in writing.
          </p>
        </div>
      </div>
    </div>
  );
}

function PresetButton({
  label,
  setBaseSolo,
  setBaseGroup,
  setBaseDrop,
  values,
}: {
  label: string;
  setBaseSolo: (n: number) => void;
  setBaseGroup: (n: number) => void;
  setBaseDrop: (n: number) => void;
  values: { solo: number; group: number; drop: number };
}) {
  return (
    <button
      type="button"
      onClick={() => {
        setBaseSolo(values.solo);
        setBaseGroup(values.group);
        setBaseDrop(values.drop);
      }}
      className="rounded-lg px-3 py-2 text-sm font-medium focus:outline-none"
      style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}`, color: BRAND.ink }}
    >
      {label}
    </button>
  );
}

function ChecklistCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="flex items-center gap-2 font-semibold">
        <Icon.Shield className="h-4 w-4" style={{ color: BRAND.brass }} />
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <Icon.Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.brass }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function GlossaryCard({ title, pairs }: { title: string; pairs: [term: string, def: string][] }) {
  return (
    <div className="rounded-2xl p-5" style={{ backgroundColor: BRAND.stone, border: `1px solid ${BRAND.hairline}` }}>
      <div className="font-semibold">{title}</div>
      <dl className="mt-3 space-y-3 text-sm">
        {pairs.map(([term, def]) => (
          <div key={term}>
            <dt className="font-semibold">{term}</dt>
            <dd style={{ color: BRAND.slate }}>{def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ReferencesTool() {
  return (
    <div className="not-prose mt-4 rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold">Ask references (5 quick prompts)</h4>
          <ol className="mt-2 list-decimal pl-5 text-sm space-y-2">
            <li>How long has your dog walked with them, and how many days per week?</li>
            <li>What does communication look like on normal days—and on tricky days?</li>
            <li>How does your dog behave when the walker arrives, and 10 minutes after returning?</li>
            <li>Have there been any incidents? How were they handled and documented?</li>
            <li>Would you recommend them to a friend with a sensitive/reactive dog?</li>
          </ol>
        </div>
        <div className="rounded-xl p-4" style={{ backgroundColor: BRAND.stone, border: `1px solid ${BRAND.hairline}` }}>
          <h4 className="text-sm font-semibold">Notes template</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Context:</strong> dog’s age/breed/energy</li>
            <li><strong>Routines:</strong> pickup time, route type, lead style</li>
            <li><strong>Comms:</strong> tone, speed, photo updates</li>
            <li><strong>Handling:</strong> examples of calm decisions</li>
            <li><strong>Overall:</strong> 1–5 satisfaction & any caveats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RedFlagsGallery() {
  const items = [
    {
      title: "Vague insurance (“all sorted”)",
      why: "If it’s not in writing with dates/policy numbers, assume it’s missing.",
      fix: "Ask for a PDF with coverage lines highlighted. No doc → no booking.",
    },
    {
      title: "Huge, mixed-energy groups",
      why: "Harder to control and riskier near water/roads.",
      fix: "Ask for group size caps and how they match energy & recall levels.",
    },
    {
      title: "Inconsistent times",
      why: "Dogs struggle to settle with unpredictable routines.",
      fix: "Request a repeating slot or a clear window (e.g., 11:30–12:15).",
    },
    {
      title: "No written T&Cs",
      why: "Disputes over cancellations/keys/vet consent get messy.",
      fix: "Ask for T&Cs and vet consent form before starting.",
    },
    {
      title: "Tense on-lead dogs in photos",
      why: "Tight leads, wide eyes, forward weight = stress.",
      fix: "Ask how they manage arousal/over-stimulation; look for calm body language.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl p-5" style={{ backgroundColor: "#FFF7E6", border: "1px solid #FCE6B3" }}>
          <div className="flex items-center gap-2 font-semibold">
            <Icon.Alert className="h-4 w-4" style={{ color: "#B67200" }} />
            {it.title}
          </div>
          <div className="mt-2 text-sm">
            <div><strong>Why it matters:</strong> {it.why}</div>
            <div className="mt-1"><strong>Fix:</strong> {it.fix}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function QuestionsList() {
  const qs = [
    "How many dogs per group and how do you decide groups?",
    "What routes do you use for seniors vs. high-energy dogs?",
    "How do you handle bridges, locks and cyclists on the towpath?",
    "What’s your backup plan if you’re ill or delayed?",
    "How do you introduce new dogs and run trial periods?",
    "How do you store keys and handle home alarms?",
    "Do you share a walk summary or photos? How often?",
    "What’s your cancellation policy and public holidays approach?",
  ];
  return (
    <div className="rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        {qs.map((q) => (
          <li key={q} className="flex items-start gap-2">
            <Icon.Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.brass }} />
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScriptsBlock() {
  return (
    <div className="not-prose mt-4 rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold">First message (copy/paste)</h4>
          <pre className="mt-2 rounded-lg p-4 text-xs whitespace-pre-wrap" style={{ backgroundColor: BRAND.stone }}>
Hello! We’re in Saltaire near Roberts Park and looking for a dog walker 3x weekly around lunchtime.
Could you share your prices, group size, insurance details (PDF), and earliest trial availability?
We have a friendly 3-year-old who’s good on-lead. Thanks!</pre>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Reference call opener</h4>
          <pre className="mt-2 rounded-lg p-4 text-xs whitespace-pre-wrap" style={{ backgroundColor: BRAND.stone }}>
Hi, I’m checking references for [Walker]. Would you mind 3 quick questions? 
1) How long have they walked your dog and how often? 
2) What’s communication like on normal days vs tricky days? 
3) Would you recommend them to a friend with a sensitive dog?</pre>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold">After-trial acceptance (polite & clear)</h4>
          <pre className="mt-2 rounded-lg p-4 text-xs whitespace-pre-wrap" style={{ backgroundColor: BRAND.stone }}>
Hi [Name], the trial went well and we’d love to book [days/times]. 
Could you confirm weekly cost, group size cap, and share T&Cs & vet consent? 
We’ll send keys next week with a backup contact. Thanks so much!</pre>
        </div>
      </div>
    </div>
  );
}

function DownloadCard({ title, href, desc }: { title: string; href: string; desc: string }) {
  return (
    <a
      href={href}
      className="block rounded-2xl p-5 shadow-sm transition hover:shadow-md focus:outline-none"
      style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}
    >
      <div className="flex items-center gap-2 text-lg font-semibold">
        <Icon.Download className="h-4 w-4" style={{ color: BRAND.brass }} />
        {title}
      </div>
      <p className="mt-1 text-sm" style={{ color: BRAND.slate }}>{desc}</p>
      <div className="mt-3 text-sm font-medium" style={{ color: BRAND.ink }}>Download PDF</div>
    </a>
  );
}

function Faq() {
  const items = [
    { q: "What’s a fair price in Saltaire right now?", a: "Small groups: ~£10–£15 for 45–60 min; Solo: ~£14–£20 for 30–45 min. Confirm inclusions and travel." },
    { q: "How long should a trial be?", a: "Two weeks at consistent times. Ask for short daily notes and how your dog settles after drop-off." },
    { q: "What insurance document should I ask for?", a: "A PDF with policy number, provider, expiry date, and cover lines (public liability; where relevant: care, custody & control; key cover; transport)." },
    { q: "Can a cheaper rate still be safe?", a: "Yes—if group sizes are small, comms are clear and the paperwork checks out. Cheap with poor documentation is a red flag." },
    { q: "Do walkers handle reactive dogs?", a: "Some do with capped groups and specific routes/timings. Ask their criteria before accepting a reactive case." },
  ];
  return (
    <div className="divide-y rounded-2xl" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}`, borderColor: BRAND.hairline }}>
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold">{it.q}</h4>
            <div className="mt-0.5 shrink-0 rounded-full p-1 group-open:rotate-180 transition" style={{ border: `1px solid ${BRAND.hairline}`, color: BRAND.slate }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" /></svg>
            </div>
          </summary>
          <div className="pt-3 text-sm" style={{ color: BRAND.slate }}>{it.a}</div>
        </details>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <section
      className="mt-12 rounded-3xl p-8 text-white print:hidden"
      style={{
        background: `linear-gradient(135deg, ${BRAND.brass} 0%, ${BRAND.brassDark} 100%)`,
        border: `1px solid ${BRAND.brass}`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Want transparent pricing & calm routes?</h3>
          <p className="mt-1 opacity-90 max-w-xl">
            We’ll share insurance PDFs, references and trial options up front. If we’re not the best fit, we’ll suggest alternatives.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}
          >
            <Icon.Mail className="h-4 w-4" /> Contact us
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: "#fff", color: BRAND.brassDark }}
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function AuthorCard({ author = "Saltaire Dog Walks", role = "Local team" }: { author?: string; role?: string }) {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl p-5 shadow-sm" style={{ backgroundColor: "#fff", border: `1px solid ${BRAND.hairline}` }}>
      <div className="h-12 w-12 rounded-full" style={{ backgroundColor: BRAND.stone }} aria-hidden="true" />
      <div>
        <div className="text-sm font-semibold">{author}</div>
        <div className="text-xs" style={{ color: BRAND.slate }}>{role}</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SEO helpers
// ---------------------------------------------------------------------------

function absoluteUrl(path: string) {
  if (typeof window !== "undefined") {
    const u = new URL(path, window.location.origin);
    return u.toString();
  }
  return `https://saltairedogs.uk${path}`;
}

function getArticleJsonLd() {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://saltairedogs.uk/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline:
      "Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags",
    description:
      "Practical buyer’s guide for Saltaire: pricing drivers, insurance essentials, reference checks, and red flags—plus scripts and checklists.",
    image: [absoluteUrl("/og-default.jpg")],
    datePublished: "2024-08-22",
    dateModified: "2025-10-16",
    author: { "@type": "Organization", name: "Saltaire Dog Walks" },
    publisher: {
      "@type": "Organization",
      name: "Saltaire Dog Walks",
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h2", "#overview"],
    },
    wordCount: 1800,
    timeRequired: "PT14M",
    articleSection: ["Dog Walking", "Saltaire Advice"],
    keywords:
      "Saltaire dog walker, prices, insurance, references, red flags, due diligence, buyer guide",
  } as const;
}

function getBreadcrumbsJsonLd() {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://saltairedogs.uk/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://saltairedogs.uk/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://saltairedogs.uk/blog" },
      { "@type": "ListItem", position: 3, name: "Choosing a Saltaire Dog Walker", item: url },
    ],
  } as const;
}

function getFaqJsonLd() {
  const faq = [
    {
      q: "What’s a fair price in Saltaire right now?",
      a: "Small groups: ~£10–£15 for 45–60 min; Solo: ~£14–£20 for 30–45 min. Confirm inclusions and travel.",
    },
    {
      q: "How long should a trial be?",
      a: "Two weeks at consistent times. Ask for short daily notes and how your dog settles after drop-off.",
    },
    {
      q: "What insurance document should I ask for?",
      a: "A PDF with policy number, provider, expiry date, and cover lines like public liability, care/custody/control, key cover and transport if used.",
    },
    {
      q: "Do walkers handle reactive dogs?",
      a: "Some do with capped groups, specific routes and experience. Ask their criteria before accepting a reactive case.",
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;
}

/* End of file */
