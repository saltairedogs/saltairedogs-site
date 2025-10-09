"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Weekend Dog Walking in Saltaire — Client Article Component
// Matches design & conventions in saltaireguideclient.tsx
// ---------------------------------------------------------------------------

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const Icon = {
  Clock: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
  Eye: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Share: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Print: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Component: WeekendDogWalkingClient
// ---------------------------------------------------------------------------

export default function WeekendDogWalkingClient({ showHero = true }: { showHero?: boolean }) {
  const toc: TocItem[] = useMemo(() => ([
    { id: "overview", label: "Overview", level: 1 },
    { id: "quiet-slots", label: "Quiet Hour Slots", level: 1 },
    { id: "crowd-avoidance-routes", label: "Crowd-Avoidance Routes", level: 1 },
    { id: "cafes", label: "Best Post-Walk Cafés", level: 1 },
    { id: "gear-and-tips", label: "Gear & Quick Tips", level: 1 },
    { id: "faq", label: "FAQs", level: 1 },
  ]), []);

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const total = el.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, total)));
      setProgress(p);

      const headings = Array.from(el.querySelectorAll("section[id]")) as HTMLElement[];
      const top = window.scrollY + 120;
      let current = toc[0].id;
      for (const h of headings) {
        if (h.offsetTop <= top) current = h.id;
      }
      setActiveId(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  const readingTime = useMemo(() => "5 min read", []);

  return (
    <main className="min-h-screen bg-white">
      <ProgressBar progress={progress} />

  {showHero && <ArticleHero readingTime={readingTime} />}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        <aside className="order-last lg:order-first lg:col-span-3">
          <StickyToc toc={toc} activeId={activeId} />
        </aside>

        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar />

          <Section id="overview" title="Overview">
            <p>
              Weekends can be tricky for sensitive or easily distracted dogs — this short guide helps you plan calmer
              walks by picking the best time windows, quieter routes and the friendliest cafés for a low-stress stop.
            </p>

            <Callout type="info" title="Quick take">
              If you want minimal crowds, arrive either <strong>before 09:00</strong> or after <strong>15:30</strong> — try the
              Riverside Loop early and save café stops for quieter hours after 16:00.
            </Callout>
          </Section>

          <Divider />

          <Section id="quiet-slots" title="Quiet Hour Slots">
            <p>
              The crowd pattern on weekends follows café opening, family outings and dog walkers. Use these windows to
              get calm, predictable walks.
            </p>

            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li><strong>Early bird:</strong> 07:30–09:00 — best for almost-empty towpaths and cool ground for paws.</li>
              <li><strong>Mid-morning dip:</strong> 10:30–11:15 — cafés prepare and many families arrive after this window.</li>
              <li><strong>Quiet afternoon:</strong> 15:30–17:00 — footfall eases as families head home and shift to local cafés.</li>
            </ul>

            <ProTip title="Weather and events">
              Check local events (market days or regattas) — they shift crowds massively. On event days, favour early mornings.
            </ProTip>

            <Heatmap />
          </Section>

          <Divider />

          <Section id="crowd-avoidance-routes" title="Crowd-Avoidance Routes">
            <p>
              These short routes intentionally avoid café clusters and main footfall corridors while still giving variety.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <RouteCard
                name="Back-lane Canal Spur"
                distanceKm={1.8}
                durationMin={25}
                difficulty="Easy"
                highlights={["Quieter towpath", "Benches spaced out", "Canal-view sniffs"]}
                mapHint="Start near Victoria Road, head east and use the hidden access spur to bypass main café stretch."
              />
              <RouteCard
                name="Roberts Park Backloop"
                distanceKm={2.6}
                durationMin={40}
                difficulty="Easy"
                highlights={["Tree cover", "Less foot traffic", "Short loops for recall training"]}
                mapHint="Enter via the north gate and loop the inner grassy edges to avoid the main playground zone."
              />
            </div>

            <ProTip title="Group walks">
              If you lead a small group, schedule it for 16:00 — you’ll meet fewer free-roaming dogs and more relaxed owners.
            </ProTip>
          </Section>

          <Divider />

          <Section id="cafes" title="Best Post-Walk Cafés">
            <p>
              Cafés are lovely for a treat but can be busy — here’s how to pick calmer venues and times.
            </p>

            <ul className="mt-4 list-disc pl-5 text-slate-700">
              <li><strong>Counter-service cafés</strong> (open early) — great for fast coffee and outside seating before crowds arrive.</li>
              <li><strong>Large terrace cafés</strong> — choose terraces facing away from the towpath to avoid passerby noise.</li>
              <li><strong>Dog-friendly spots:</strong> always check signage and bring a mat so your dog has a calm place to rest.</li>
            </ul>

            <ImageFrame
              src="/images/blog/cafe-outside-saltaire.jpg"
              alt="Dog sitting outside a cafe in Saltaire"
              caption="Carry a small mat or towel so your dog has a defined, calm spot at the table."
            />
          </Section>

          <Divider />

          <Section id="gear-and-tips" title="Gear & Quick Tips">
            <p>Minimal kit that makes weekend outings smoother.</p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              <GearCard
                title="Short, sturdy lead (1.2m)"
                bullets={["Quick control on narrow bridges", "Less snagging near cafés"]}
              />
              <GearCard
                title="Lightweight treat pouch"
                bullets={["Fast reinforcement for passing distractions", "Keeps hands free for coffee"]}
              />
              <GearCard
                title="Portable mat"
                bullets={["Defines a calm space for the dog at busy cafés", "Easy to clean"]}
              />
              <GearCard
                title="Water bottle + bowl"
                bullets={["Hydration after faster-paced play", "No need to rely on café water"]}
              />
            </div>
            <Callout type="warning" title="Café etiquette">
              Don’t assume cafés allow dogs inside — always ask and keep dogs on a short lead near tables to avoid spillage.
            </Callout>
          </Section>

          <Divider />

          <Section id="faq" title="FAQs">
            <Faq />
          </Section>

          <BottomCta />
          <AuthorCard authorName="Saltaire Dog Walks" />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={handleCopy} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
              <Icon.Share className="h-4 w-4" /> {copied ? "Link copied" : "Copy link"}
            </button>

            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
              <Icon.Print className="h-4 w-4" /> Print
            </button>

            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Book a walk
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Shared subcomponents (kept local to this file for now to match template pattern)
// You can refactor to central components later if desired.
// ---------------------------------------------------------------------------

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="sticky top-0 z-40 h-1 w-full bg-emerald-100">
      <div
        className="h-full bg-emerald-600 transition-[width] duration-150"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}

function ArticleHero({ readingTime }: { readingTime: string }) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-emerald-200">
            Weekend Guide
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Navigate busy weekends with ease—quiet slots, routes that avoid crowds, and the best dog-friendly cafés.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2"><Icon.Clock className="h-4 w-4" /> {readingTime}</div>
            <div className="inline-flex items-center gap-2"><Icon.Eye className="h-4 w-4" /> Updated Oct 2025</div>
          </div>
        </div>
      </div>
      <div className="h-10 w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
    </header>
  );
}

function StickyToc({ toc, activeId }: { toc: TocItem[]; activeId: string }) {
  return (
    <nav className="lg:sticky lg:top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">On this page</div>
      <ol className="mt-3 space-y-2">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={classNames(
                "block rounded-md px-2 py-1 text-sm",
                activeId === t.id ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200" : "text-slate-700 hover:text-slate-900"
              )}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">Tip: tap headings to jump — progress bar tracks where you are.</div>
    </nav>
  );
}

function TopMetaBar() {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
      <span>By <strong>Saltaire Dog Walks</strong></span>
      <span>•</span>
      <span>{new Date().toLocaleDateString()}</span>
      <span>•</span>
      <span>Saltaire</span>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      <div className="prose prose-slate max-w-none prose-a:text-emerald-700 prose-strong:text-slate-900 mt-4">{children}</div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
}

function Callout({ type, title, children }: { type: "success" | "warning" | "info"; title: string; children: React.ReactNode }) {
  const palette = {
    success: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-900", icon: <Icon.Check className="h-4 w-4" /> },
    warning: { bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-900", icon: <Icon.Info className="h-4 w-4" /> },
    info: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-900", icon: <Icon.Info className="h-4 w-4" /> },
  }[type];
  return (
    <div className={classNames("not-prose mt-6 rounded-xl p-4 ring-1", palette.bg, palette.ring)}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-slate-700">{palette.icon}</div>
        <div>
          <div className={classNames("text-sm font-semibold", palette.text)}>{title}</div>
          <div className="mt-1 text-sm text-slate-800">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose mt-6 rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="text-emerald-700"><Icon.Check className="h-4 w-4" /></div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

function RouteCard({ name, distanceKm, durationMin, difficulty, highlights, mapHint }: {
  name: string;
  distanceKm: number;
  durationMin: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  highlights: string[];
  mapHint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
          {difficulty}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-700">
        <span>{distanceKm} km</span>
        <span className="text-slate-300">•</span>
        <span>{durationMin} mins</span>
      </div>
      <p className="mt-3 text-sm text-slate-700">{mapHint}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {highlights.map((h) => (
          <li key={h} className="rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-700 ring-1 ring-slate-200">{h}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-3">
        <Link href="/areas" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">Check coverage</Link>
        <span className="text-slate-300">•</span>
        <Link href="/pricing" className="text-sm text-slate-700 hover:text-slate-900">Get a quote</Link>
      </div>
    </div>
  );
}

function ImageFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="not-prose mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>}
    </figure>
  );
}

function Heatmap() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const score = (h: number) => {
    if (h < 6) return 0;
    if (h < 7) return 1;
    if (h < 9) return 0.5;
    if (h < 11) return 1.2;
    if (h < 13) return 1.6;
    if (h < 16) return 1.1;
    if (h < 18) return 1.8;
    if (h < 21) return 1.3;
    return 0.6;
  };
  const hue = (v: number) => 140 - v * 40;
  return (
    <div className="not-prose mt-4 rounded-2xl border border-slate-200 p-4">
      <div className="grid grid-cols-12 gap-1">
        {hours.map((h) => (
          <div key={h} className="space-y-2">
            <div
              className="h-10 rounded-md"
              style={{ background: `hsl(${hue(score(h))} 70% ${90 - score(h) * 18}%)` }}
              title={`${String(h).padStart(2, "0")}:00`}
            />
            <div className="text-center text-[11px] text-slate-600">{String(h).padStart(2, "0")}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-slate-600">Lighter = quieter, darker = busier (estimates)</div>
    </div>
  );
}

function GearCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2"><Icon.Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {b}</li>
        ))}
      </ul>
    </div>
  );
}

function Faq() {
  const items = [
    {
      q: "When is the quietest time on weekends?",
      a: "Arrive by 07:30 for minimal footfall; afternoons around 16:00 are often calmer than mid-morning.",
    },
    {
      q: "Which cafés allow dogs outside?",
      a: "Most local cafés allow dogs at outside tables — always check signage or ask staff politely.",
    },
    {
      q: "How do I avoid busy spots safely?",
      a: "Use the back-lane canal spur routes and keep tools (short lead, treats) ready for rapid redirection.",
    },
  ];
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold text-slate-900">{it.q}</h4>
            <div className="mt-0.5 shrink-0 rounded-full border border-slate-300 p-1 text-slate-500 group-open:rotate-180 transition">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" /></svg>
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
          <h3 className="text-2xl font-bold">Want calm weekend walks?</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">We specialise in quiet-time slots and small groups — book regular slots and save.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset ring-white/30 hover:bg-white/20">
            Contact us
          </Link>
          <Link href="/pricing" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function AuthorCard({ authorName = "Saltaire Dog Walks" }: { authorName?: string }) {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-12 w-12 rounded-full bg-emerald-200" />
      <div>
        <div className="text-sm font-semibold text-slate-900">{authorName}</div>
        <div className="text-xs text-slate-600">Local dog walker & Saltaire specialist</div>
      </div>
    </div>
  );
}
