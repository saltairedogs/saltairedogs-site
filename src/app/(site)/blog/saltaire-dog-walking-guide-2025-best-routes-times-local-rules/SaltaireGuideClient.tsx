"use client";

/**
 * Saltaire Dog Walking Guide 2025 — Routes, Timing & Rules
 *
 * Large, self-contained blog page with:
 * - Animated reading progress
 * - Sticky table of contents (left)
 * - Ambient hero image
 * - Route cards, seasonal tips, gear, accessibility notes
 * - Time-of-day heatmap
 * - Extended FAQ with FAQPage JSON-LD
 * - Print/share/copy actions
 * - Strong a11y + focus states
 *
 * TailwindCSS assumed. No external UI deps.
 *
 * This file is intentionally verbose to match a long-form article
 * and be easy to customize. Sections/components are kept local.
 *
 * Notes:
 * - Avoid dynamic Tailwind class names (preflight-safe).
 * - Prefer semantic HTML tags inside prose blocks.
 * - Images use <img/> to keep it universal; swap to next/image if desired.
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
// Types & helpers
// ---------------------------------------------------------------------------

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function toHHMM(h: number) {
  return `${String(h).padStart(2, "0")}:00`;
}

// ---------------------------------------------------------------------------
// Icons (lucide-ish, kept inline for portability)
// ---------------------------------------------------------------------------

const Icon = {
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Alert: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Share: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Link: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 2a4 4 0 105.657 5.657l2-2M14 10l2-2a4 4 0 10-5.657-5.657l-2 2" />
    </svg>
  ),
  Print: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Clock: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  MapPin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 22s-7-5-7-11a7 7 0 1114 0c0 6-7 11-7 11z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  Paw: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="5.5" cy="8.5" r="2" />
      <circle cx="9.5" cy="5.5" r="2" />
      <circle cx="14.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="8.5" r="2" />
      <path d="M8 15c1-2 3-3 4-3s3 1 4 3c.7 1 .5 2-.5 3S13 19 12 19s-2-.2-3-.9-1.2-2-.5-3.1z" />
    </svg>
  ),
  Sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9L6.3 6.3M17.7 17.7l1.4 1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
    </svg>
  ),
  CloudRain: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M16 16a4 4 0 100-8 5 5 0 10-9.9 1" />
      <path d="M8 19v2M12 19v2M16 19v2" />
    </svg>
  ),
  Snowflake: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1L19.1 4.9" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function SaltaireGuideClient({ showHero = true }: { showHero?: boolean }) {
  const toc: TocItem[] = [
    { id: "overview", label: "Overview", level: 1 },
    { id: "routes", label: "Top Routes", level: 1 },
    { id: "windows", label: "Quiet Windows", level: 1 },
    { id: "etiquette", label: "Local Rules", level: 1 },
    { id: "seasons", label: "Seasonal Tips", level: 1 },
    { id: "gear", label: "Gear & Prep", level: 1 },
    { id: "training", label: "Training Micro-Drills", level: 1 },
    { id: "access", label: "Accessibility Notes", level: 1 },
    { id: "cafes", label: "Dog-Friendly Spots", level: 1 },
    { id: "parking", label: "Parking & Transport", level: 1 },
    { id: "emergency", label: "Emergencies", level: 1 },
    { id: "faq", label: "FAQs", level: 1 },
    { id: "downloads", label: "Downloads", level: 1 },
  ];

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Reading progress + active section watcher
  useEffect(() => {
    function onScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const total = el.scrollHeight - window.innerHeight;
      const p = clamp(window.scrollY / Math.max(1, total), 0, 1);
      setProgress(p);

      const top = window.scrollY + 120;
      let current = toc[0].id;
      const sections = Array.from(el.querySelectorAll("section[id]")) as HTMLElement[];
      for (const s of sections) {
        if (s.offsetTop <= top) current = s.id;
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

  const readingTime = useMemo(() => "12 min read", []);
  const today = useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <ProgressBar progress={progress} />
  {showHero && <Hero readingTime={readingTime} />}

      {/* JSON-LD structured data (Article + FAQPage) */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd()),
        }}
      />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Sidebar - sticky TOC */}
        <aside className="order-last lg:order-first lg:col-span-3 space-y-6">
          <StickyToc toc={toc} activeId={activeId} />

          {/* Quick utilities card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 mb-2">Quick actions</div>
            <div className="flex flex-wrap gap-2">
              <Button subtle onClick={handleCopy} ariaLabel="Copy link">
                <Icon.Link className="h-4 w-4" />
                <span>{copied ? "Copied" : "Copy link"}</span>
              </Button>
              <Button subtle onClick={() => window.print()} ariaLabel="Print page">
                <Icon.Print className="h-4 w-4" />
                <span>Print</span>
              </Button>
              <Button subtle onClick={handleShare} ariaLabel="Share page">
                <Icon.Share className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Tip: printing uses a clean, single-column template with link URLs appended.
            </p>
          </div>

          {/* Local phone pins */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-900 mb-2">Useful pins</div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li className="flex items-center gap-2">
                <Icon.MapPin className="h-4 w-4 text-emerald-600" />
                Roberts Park Main Gates
              </li>
              <li className="flex items-center gap-2">
                <Icon.MapPin className="h-4 w-4 text-emerald-600" />
                Hirst Lock (towpath)
              </li>
              <li className="flex items-center gap-2">
                <Icon.MapPin className="h-4 w-4 text-emerald-600" />
                Salts Mill (parking + cafés)
              </li>
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar dateText={today} />

          {/* 1. Overview */}
          <Section id="overview" title="Overview">
            <p>
              Welcome to your <strong>Saltaire Dog Walking Guide 2025</strong> — a compact, practical manual for calm and
              enriching walks across the Leeds–Liverpool Canal, Roberts Park and Hirst Wood. This guide focuses on *when to go*,
              *where to train*, and *how to keep everyone comfortable* on shared paths.
            </p>

            <Callout type="success" title="Quick formula">
              Weekdays <strong>07:00–09:00</strong>. Choose the <em>Riverside Loop</em> for 30–40 minutes. Keep a short lead on
              bridges, reward calm around wildlife, and finish with a minute of quiet “settle” before coffee.
            </Callout>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="emerald">
                <Icon.Paw className="h-3.5 w-3.5" />
                Friendly for puppies
              </Badge>
              <Badge tone="sky">
                <Icon.Sun className="h-3.5 w-3.5" />
                Best at sunrise
              </Badge>
              <Badge tone="amber">
                <Icon.CloudRain className="h-3.5 w-3.5" />
                Drizzle = quiet paths
              </Badge>
            </div>
          </Section>

          <Divider />

          {/* 2. Routes */}
          <Section id="routes" title="Top Routes (with simple waypoints)">
            <p>
              These loops are tuned for predictability and quick wins — ideal for recall practice, loose-lead work and calm sniff time.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <RouteCard
                name="Riverside Loop"
                distanceKm={2.1}
                durationMin={35}
                difficulty="Easy"
                highlights={["Open lawns", "Water access points", "Shade pockets"]}
                mapHint="Salts Mill → footbridge → river path → inner lawns → return."
              />
              <RouteCard
                name="Hirst Wood & Lock"
                distanceKm={3.3}
                durationMin={50}
                difficulty="Moderate"
                highlights={["Woodland sniffs", "Quieter clearings", "Towpath interest"]}
                mapHint="Towpath west to Hirst Lock → woodland loop → canal back."
              />
              <RouteCard
                name="Bingley Heritage Stretch"
                distanceKm={5.0}
                durationMin={75}
                difficulty="Moderate"
                highlights={["Flat long path", "Benches", "Locks & views"]}
                mapHint="Saltaire → Five Rise Locks (turn point) → return."
              />
            </div>

            <ProTip title="Bridge etiquette">
              Narrow bridge? Shorten the lead early, ask for a sit, and let cyclists/prams pass first. Reward calm.
            </ProTip>

            <Figure
              src="/images/blog/saltaire-canal-hero.jpg"
              alt="Quiet golden-hour towpath in Saltaire with soft water reflections"
              caption="The canal at golden hour — calm air, predictable footfall, and easy training moments."
            />
          </Section>

          <Divider />

          {/* 3. Quiet Windows */}
          <Section id="windows" title="Quiet Windows (use them to your advantage)">
            <p>
              Saltaire’s rhythm follows <em>school runs</em> and <em>weekend visitors</em>. Pick windows where distractions are predictable.
            </p>

            <Heatmap />

            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              <li>
                <strong>Weekdays:</strong> 07:00–09:00 is relaxed (great for recall). Lunch 12:30–14:00 is workable for confident dogs.
              </li>
              <li>
                <strong>Weekends:</strong> Start by 08:30. After 11:00, expect café queues and park lawns to fill.
              </li>
              <li>
                <strong>Weather hack:</strong> Light drizzle empties paths — fantastic for loose-lead practice.
              </li>
            </ul>

            <Callout type="info" title="Boat season note">
              Locks draw crowds. Practise a stationary “watch me”, reward calm while boats pass, then move on.
            </Callout>
          </Section>

          <Divider />

          {/* 4. Local Rules */}
          <Section id="etiquette" title="Local Rules & Shared Path Etiquette">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Lead control:</strong> short leads on towpaths, bridges and near lock edges.
              </li>
              <li>
                <strong>Share the path:</strong> step to the side for cyclists and prams; a brief sit helps everyone pass.
              </li>
              <li>
                <strong>Wildlife:</strong> recall before your dog notices ducks or swans; add space rather than tension.
              </li>
              <li>
                <strong>Waste:</strong> bins near park gates and Salts Mill; carry spares.
              </li>
              <li>
                <strong>Group walks:</strong> keep numbers modest (4–6 dogs), avoid peak café hours.
              </li>
            </ul>

            <ProTip title="Two quick cues that solve 80% of situations">
              A solid <em>“watch me”</em> and a calm <em>“let’s go”</em> cover bridges, passing bikes and surprise geese. Reinforce generously.
            </ProTip>
          </Section>

          <Divider />

          {/* 5. Seasonal */}
          <Section id="seasons" title="Seasonal Tips (what changes through the year)">
            <SeasonGrid />
          </Section>

          <Divider />

          {/* 6. Gear */}
          <Section id="gear" title="Gear & Prep (Saltaire-tested)">
            <p>
              Comfort and control beat gadgets. These items suit mixed paths, changing weather and quick training breaks.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <GearCard
                title="Dual-clip harness"
                bullets={["Front clip for training", "Back clip for cruising", "Soft chest padding"]}
              />
              <GearCard
                title="Short lead (1.2–1.8m)"
                bullets={["Bridge safety", "Quick hand swaps", "Less snagging on rails"]}
              />
              <GearCard
                title="High-vis tag/light"
                bullets={["Twilight towpath visibility", "Reflective edges", "USB-rechargeable preferred"]}
              />
              <GearCard
                title="Compact treat pouch"
                bullets={["Fast reinforcement", "Hands-free sits on bridges", "Wipe-clean liner"]}
              />
            </div>

            <Callout type="warning" title="Skip flexi leads on towpaths">
              Retractable leads cross bike lines and trip other users — keep them for open fields.
            </Callout>
          </Section>

          <Divider />

          {/* 7. Micro-Drills */}
          <Section id="training" title="Training Micro-Drills (5–7 minutes)">
            <p>
              Drop one of these mini-programs into your walk. Short, focused and repeatable is the secret.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ProgramCard
                title="Loose-lead reset"
                bullets={[
                  "Stand still for 10s when the lead tightens",
                  "Reward the first slack step",
                  "Walk 20m, repeat x3",
                ]}
              />
              <ProgramCard
                title="Recall burst"
                bullets={[
                  "5 x short distance recalls on a long line",
                  "Add mild distraction (walk 3 steps away)",
                  "Big praise, then release to sniff",
                ]}
              />
              <ProgramCard
                title="Calm around wildlife"
                bullets={[
                  "Spot ducks early → create space",
                  "Watch-me → treat → step away",
                  "End with 30s sniff break",
                ]}
              />
            </div>

            <Callout type="info" title="Progress is non-linear">
              Two calm reps today beat ten messy ones tomorrow. Always end on success.
            </Callout>
          </Section>

          <Divider />

          {/* 8. Accessibility */}
          <Section id="access" title="Accessibility Notes">
            <AccessibilityNotes />
          </Section>

          <Divider />

          {/* 9. Cafés */}
          <Section id="cafes" title="Dog-Friendly Spots (bring a mat)">
            <p className="text-slate-700">
              Many Saltaire cafés welcome dogs outdoors; some indoors at staff discretion. Polite ask + a small mat makes it easy.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Salts Mill Cafés",
                  blurb:
                    "Iconic building with multiple options; outdoor areas are easiest with dogs. Water bowls in summer.",
                },
                {
                  name: "Caroline Street terraces",
                  blurb:
                    "Handy for a quick flat white post-walk. Check individual signs for inside seating rules.",
                },
                {
                  name: "Hirst Wood local stop",
                  blurb:
                    "Quiet vibe after the woodland loop. Great for a brief settle on the mat.",
                },
                {
                  name: "Canal-side kiosks (seasonal)",
                  blurb:
                    "Good for takeaway water + a breather before heading back along the towpath.",
                },
              ].map((v) => (
                <VenueCard key={v.name} name={v.name} blurb={v.blurb} />
              ))}
            </div>
          </Section>

          <Divider />

          {/* 10. Parking */}
          <Section id="parking" title="Parking & Transport">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Salts Mill</strong> car parks for short stays — arrive early on sunny weekends.
              </li>
              <li>
                Limited on-street options near Roberts Park. Mind signage and residents.
              </li>
              <li>
                Train: <em>Saltaire</em> station (Leeds–Skipton line) — quick canal access via Salts Mill side.
              </li>
              <li>
                Buses from Bradford/Shipley stop within a short walk of the park and canal.
              </li>
            </ul>
          </Section>

          <Divider />

          {/* 11. Emergencies */}
          <Section id="emergency" title="Emergencies & Safety">
            <ul className="list-disc pl-5 space-y-2">
              <li>Know the nearest road name or landmark (Salts Mill, Hirst Lock, Roberts Park gates).</li>
              <li>Carry a small first-aid kit; check paws after gravel or ice.</li>
              <li>In heat, avoid midday towpaths and check asphalt temperature with your hand.</li>
              <li>In ice, shorten sessions and choose sun-lit sections first.</li>
            </ul>

            <Callout type="warning" title="Water edges & cold shock">
              Avoid sudden water entries in winter. If your dog falls in, call calmly to a shallow exit point and keep them moving to warm up.
            </Callout>
          </Section>

          <Divider />

          {/* 12. FAQ */}
          <Section id="faq" title="FAQs">
            <Faq />
          </Section>

          <Divider />

          {/* 13. Downloads */}
          <Section id="downloads" title="Downloads (print-friendly)">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <DownloadCard
                title="One-page quick guide"
                href="/downloads/saltaire-dog-walking-quick-guide.pdf"
                desc="Morning windows, top routes, bridge etiquette and must-have gear. Perfect for the fridge."
              />
              <DownloadCard
                title="Training micro-drills"
                href="/downloads/saltaire-micro-drills.pdf"
                desc="A4 sheet with the three 5-minute routines outlined here + tracking boxes."
              />
              <DownloadCard
                title="Emergency checklist"
                href="/downloads/saltaire-emergency-checklist.pdf"
                desc="First aid basics, useful pins and cold/heat adjustments."
              />
            </div>
          </Section>

          <BottomCta />

          <AuthorCard author="Saltaire Dog Walks" role="Local dog walkers • First aid trained" />

          {/* Page actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
// Reusable UI
// ---------------------------------------------------------------------------

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="sticky top-0 z-40 h-1 w-full bg-emerald-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
      <div
        className="h-full bg-emerald-600 transition-[width] duration-200"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}

function Hero({ readingTime }: { readingTime: string }) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      {/* Ambient background image (soft, non-blocking) */}
      <div
        className="absolute inset-5 -z-10 bg-cover bg-center opacity-45"
        style={{ backgroundImage: "url('/saltaire-canal-hero.jpg')" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-emerald-200">
              Local Guide
            </span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-800 text-xs font-semibold">
              Updated
            </span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Saltaire Dog Walking Guide 2025 — Routes, Timing & Rules
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Practical, friendly advice for calm, enriching walks along the canal, Roberts Park and Hirst Wood.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2">
              <Icon.Clock className="h-4 w-4" /> {readingTime}
            </div>
            <div className="inline-flex items-center gap-2">
              <Icon.Eye className="h-4 w-4" /> Updated Oct 2025
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />
    </header>
  );
}

function StickyToc({ toc, activeId }: { toc: TocItem[]; activeId: string }) {
  return (
    <nav className="lg:sticky lg:top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" aria-label="On this page">
      <div className="text-sm font-semibold text-slate-900">On this page</div>
      <ol className="mt-3 space-y-2">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cx(
                "block rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400",
                activeId === t.id
                  ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                  : "text-slate-700 hover:text-slate-900"
              )}
              aria-current={activeId === t.id ? "location" : undefined}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
        Tip: tap headings to jump — the progress bar shows where you are.
      </div>
    </nav>
  );
}

function TopMetaBar({ dateText }: { dateText: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
      <span>
        By <strong>Saltaire Dog Walks</strong>
      </span>
      <span aria-hidden="true">•</span>
      <span>{dateText}</span>
      <span aria-hidden="true">•</span>
      <span>Saltaire</span>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = useId();
  return (
    <section id={id} className="scroll-mt-24">
      <h2
        id={headingId}
        className="text-2xl sm:text-3xl font-bold text-slate-900"
      >
        {title}
      </h2>
      <div className="prose prose-slate max-w-none prose-a:text-emerald-700 prose-strong:text-slate-900 mt-4">
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
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
  const palette = {
    success: {
      container: "bg-emerald-50 ring-emerald-200",
      title: "text-emerald-900",
      icon: <Icon.Check className="h-4 w-4 text-emerald-700" />,
    },
    warning: {
      container: "bg-amber-50 ring-amber-200",
      title: "text-amber-900",
      icon: <Icon.Alert className="h-4 w-4 text-amber-700" />,
    },
    info: {
      container: "bg-sky-50 ring-sky-200",
      title: "text-sky-900",
      icon: <Icon.Info className="h-4 w-4 text-sky-700" />,
    },
  }[type];

  return (
    <div className={cx("not-prose mt-6 rounded-xl p-4 ring-1", palette.container)}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{palette.icon}</div>
        <div>
          <div className={cx("text-sm font-semibold", palette.title)}>{title}</div>
          <div className="mt-1 text-sm text-slate-800">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ProTip({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose mt-6 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="text-emerald-600">
          <Icon.Check className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Badge({
  children,
  tone = "emerald",
}: {
  children: React.ReactNode;
  tone?: "emerald" | "amber" | "sky";
}) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-800",
    sky: "bg-sky-100 text-sky-700",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1",
        map[tone],
        tone === "emerald" ? "ring-emerald-200" : tone === "amber" ? "ring-amber-200" : "ring-sky-200"
      )}
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
      onClick={onClick}
      aria-label={ariaLabel}
      className={cx(
        "inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400",
        subtle
          ? "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
          : "border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700"
      )}
      type="button"
    >
      {children}
    </button>
  );
}

function ActionButton({
  onClick,
  icon,
  children,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
      type="button"
    >
      {icon}
      {children}
    </button>
  );
}

function RouteCard({
  name,
  distanceKm,
  durationMin,
  difficulty,
  highlights,
  mapHint,
}: {
  name: string;
  distanceKm: number;
  durationMin: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
  mapHint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
          {difficulty}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-700">
        <span>{distanceKm} km</span>
        <span className="text-slate-300" aria-hidden="true">
          •
        </span>
        <span>{durationMin} mins</span>
      </div>
      <p className="mt-3 text-sm text-slate-700">{mapHint}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {highlights.map((h) => (
          <li
            key={h}
            className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
          >
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-3">
        <Link
          href="/areas"
          className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
        >
          Check coverage
        </Link>
        <span className="text-slate-300" aria-hidden="true">
          •
        </span>
        <Link
          href="/pricing"
          className="text-sm text-slate-700 hover:text-slate-900"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}

function GearCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon.Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProgramCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="font-semibold text-slate-900">{title}</div>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function VenueCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-900 font-semibold">
        <Icon.MapPin className="h-4 w-4 text-emerald-600" />
        {name}
      </div>
      <p className="mt-2 text-sm text-slate-700">{blurb}</p>
    </div>
  );
}

function DownloadCard({
  title,
  href,
  desc,
}: {
  title: string;
  href: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-700">{desc}</p>
      <div className="mt-3 text-sm font-medium text-emerald-700">Download PDF</div>
    </a>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {/* replace with next/image if desired */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-slate-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Heatmap() {
  // Hand-crafted occupancy by hour (0=quiet, ~2 busy)
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const score = (h: number) => {
    if (h < 6) return 0;
    if (h < 7) return 0.5;
    if (h < 9) return 0.8;
    if (h < 11) return 1.2;
    if (h < 13) return 1.6;
    if (h < 16) return 1.1;
    if (h < 18) return 1.8;
    if (h < 21) return 1.3;
    return 0.6;
  };
  const hue = (v: number) => 140 - v * 40; // emerald->amber
  return (
    <div className="not-prose mt-4 rounded-2xl border border-slate-200 p-4">
      <div className="grid grid-cols-12 gap-1">
        {hours.map((h) => (
          <div key={h} className="space-y-2">
            <div
              className="h-10 rounded-md"
              style={{
                background: `hsl(${hue(score(h))} 70% ${90 - score(h) * 18}%)`,
              }}
              title={toHHMM(h)}
              aria-label={`${toHHMM(h)} busyness level`}
            />
            <div className="text-center text-[11px] text-slate-600">
              {String(h).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-slate-600">
        Lighter = quieter, darker = busier (estimates)
      </div>
    </div>
  );
}

function SeasonGrid() {
  const cards = [
    {
      title: "Spring",
      icon: <Icon.Sun className="h-4 w-4 text-emerald-700" />,
      tips: [
        "Mud easing on woodland paths — towel for paws.",
        "Wildlife fledglings: keep distance and reward calm.",
        "Allergies: quick wipe after walks helps some dogs.",
      ],
    },
    {
      title: "Summer",
      icon: <Icon.Sun className="h-4 w-4 text-emerald-700" />,
      tips: [
        "Walk early or late to avoid heat.",
        "Shade pockets in Hirst Wood; bring water.",
        "Check towpath temperature; avoid mid-day.",
      ],
    },
    {
      title: "Autumn",
      icon: <Icon.CloudRain className="h-4 w-4 text-emerald-700" />,
      tips: [
        "Leaf cover hides edges near water — slow down.",
        "Lower crowds in drizzle = ideal training sessions.",
        "Reflective gear from mid-afternoon helps.",
      ],
    },
    {
      title: "Winter",
      icon: <Icon.Snowflake className="h-4 w-4 text-emerald-700" />,
      tips: [
        "Icy bridges: short leads + careful footing.",
        "Layered coats for small/senior dogs.",
        "Head torch makes towpaths easier to share.",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((c) => (
        <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            {c.icon}
            <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            {c.tips.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Icon.Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AccessibilityNotes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Path surfaces</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li className="flex gap-2">
            <span className="font-medium">Towpath:</span> mostly flat compact gravel; occasional puddles after rain.
          </li>
          <li className="flex gap-2">
            <span className="font-medium">Park lawns:</span> gentle slopes; can be soft after prolonged rain.
          </li>
          <li className="flex gap-2">
            <span className="font-medium">Woodland:</span> roots and leaf litter; choose dry days for mobility needs.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Facilities & access</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>Benches at regular intervals along heritage sections.</li>
          <li>Bridges vary in width; some with steps — plan alternative crossings if needed.</li>
          <li>Toilets and cafés at Salts Mill (check opening hours).</li>
        </ul>
      </div>
    </div>
  );
}

function Faq() {
  const items = [
    {
      q: "Where can my dog be off-lead?",
      a: "Open park lawns and quieter Hirst Wood clearings are suitable when recall is solid. Keep leads on near bridges, locks and café areas.",
    },
    {
      q: "Best short walk before work?",
      a: "A 25–30 minute Riverside Loop at 07:30 balances quiet paths with predictable distractions for light training.",
    },
    {
      q: "What lead length works best on the towpath?",
      a: "1.2–1.8m gives control with comfortable slack and avoids crossing cyclists’ lines.",
    },
    {
      q: "How do I handle swans and geese?",
      a: "Create distance early, keep a short lead, ask for a watch-me, reward calm as they pass, then move on.",
    },
    {
      q: "Any dog-friendly cafés?",
      a: "Several terraces around Salts Mill and Caroline Street; bring a mat and ask politely for indoor seating availability.",
    },
    {
      q: "Where can I park?",
      a: "Use Salts Mill car parks or arrive early for on-street spots near Roberts Park. Always check signage.",
    },
    {
      q: "Can I take this route with a pram?",
      a: "Yes on the main towpaths and park loops; woodland has uneven ground — choose dry periods for a smoother experience.",
    },
  ];
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold text-slate-900">{it.q}</h4>
            <div className="mt-0.5 shrink-0 rounded-full border border-slate-300 p-1 text-slate-500 group-open:rotate-180 transition">
              <svg
                viewBox="0 0 24 24"
                width={16}
                height={16}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </summary>
          <div className="pt-3 text-sm text-slate-700">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Want calmer, consistent walks?</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">
            We cover Saltaire and nearby areas with small friendly groups and solo walks tailored to your dog.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset ring-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Contact us
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function AuthorCard({
  author = "Saltaire Dog Walks",
  role = "Dog walker & Saltaire local",
}: {
  author?: string;
  role?: string;
}) {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-12 w-12 rounded-full bg-emerald-200" aria-hidden="true" />
      <div>
      <div className="text-sm font-semibold text-slate-900">{author}</div>
        <div className="text-xs text-slate-600">{role}</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SEO helpers (Article + FAQPage)
// ---------------------------------------------------------------------------

function getArticleJsonLd() {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://example.com/blog/saltaire-dog-walking-guide-2025";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: "Saltaire Dog Walking Guide 2025 — Routes, Timing & Rules",
    description:
      "Comprehensive 2025 guide to dog walking in Saltaire: best routes, timing windows, local rules, seasonal advice, and gear for calm, enriching walks.",
    image: ["https://example.com/images/blog/saltaire-canal-hero.jpg"],
    datePublished: "2024-08-22",
    dateModified: "2025-10-08",
  author: { "@type": "Organization", name: "Saltaire Dog Walks" },
    publisher: {
      "@type": "Organization",
      name: "Saltaire Dogs",
      logo: { "@type": "ImageObject", url: "https://example.com/images/logo.png" },
    },
    keywords:
      "Saltaire, dog walking, canal, Roberts Park, Hirst Wood, dog safety, local guide, towpath etiquette",
  } as const;
}

function getFaqJsonLd() {
  const faq = [
    {
      q: "Where can my dog be off-lead?",
      a: "Open park lawns and quieter Hirst Wood clearings are suitable when recall is solid. Keep leads on near bridges, locks and café areas.",
    },
    {
      q: "Best short walk before work?",
      a: "A 25–30 minute Riverside Loop at 07:30 balances quiet paths with predictable distractions for light training.",
    },
    {
      q: "What lead length works best on the towpath?",
      a: "1.2–1.8m gives control with comfortable slack and avoids crossing cyclists’ lines.",
    },
    {
      q: "How do I handle swans and geese?",
      a: "Create distance early, keep a short lead, ask for a watch-me, reward calm as they pass, then move on.",
    },
    {
      q: "Any dog-friendly cafés?",
      a: "Several terraces around Salts Mill and Caroline Street; bring a mat and ask politely for indoor seating availability.",
    },
    {
      q: "Where can I park?",
      a: "Use Salts Mill car parks or arrive early for on-street spots near Roberts Park. Always check signage.",
    },
    {
      q: "Can I take this route with a pram?",
      a: "Yes on the main towpaths and park loops; woodland has uneven ground — choose dry periods for a smoother experience.",
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
