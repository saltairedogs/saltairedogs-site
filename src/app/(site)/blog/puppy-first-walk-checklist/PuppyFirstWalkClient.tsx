"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/**
 * Puppy First Walk Checklist — Saltaire Dogs (Client)
 * - Rich article UI: hero, sticky ToC, progress bar, callouts, checklists, timers, quiz, FAQs, CTA, author card
 * - SEO-friendly headings and JSON-LD
 * - No external deps other than React and next/link
 * - Carefully namespaced subcomponents to avoid collisions
 *
 * File path suggestion:
 * /home/giuseppe/saltaire-dogs/src/app/(site)/blog/puppy-first-walk-checklist/PuppyFirstWalkClient.tsx
 */

// ---------------------------------------------------------------------------
// Types & helpers
// ---------------------------------------------------------------------------

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const Icon = {
  Check: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Alert: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Info: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
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
  Link: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 2a4 4 0 105.657 5.657l2-2M14 10l2-2a4 4 0 10-5.657-5.657l-2 2" />
    </svg>
  ),
  Print: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Share: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={props.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Paw: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="5.5" cy="13" r="2.5" />
      <circle cx="18.5" cy="13" r="2.5" />
      <path d="M8 18c0-2.21 1.79-4 4-4s4 1.79 4 4v1H8v-1z" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Top matter / reusable UI
// ---------------------------------------------------------------------------

function TopMetaBar() {
  const date = React.useMemo(
    () =>
      new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-600">
      <span>By <strong>Saltaire Dog Walks</strong></span>
      <span>•</span>
      <span>{date}</span>
      <span>•</span>
      <span>Saltaire</span>
    </div>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
}

function Badge({ children, tone = "emerald" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "sky" | "rose" }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-800",
    sky: "bg-sky-100 text-sky-700",
    rose: "bg-rose-100 text-rose-700",
  };
  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", map[tone])}>
      {children}
    </span>
  );
}

function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose mt-6 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-sm">
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

function Callout({ type, title, children }: { type: "success" | "warning" | "info"; title: string; children: React.ReactNode }) {
  const palette = {
    success: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-900", icon: <Icon.Check className="h-4 w-4" /> },
    warning: { bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-900", icon: <Icon.Alert className="h-4 w-4" /> },
    info: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-900", icon: <Icon.Info className="h-4 w-4" /> },
  }[type];
  return (
    <div className={cx("not-prose mt-6 rounded-xl p-4 ring-1", palette.bg, palette.ring)}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-slate-700">{palette.icon}</div>
        <div>
          <div className={cx("text-sm font-semibold", palette.text)}>{title}</div>
          <div className="mt-1 text-sm text-slate-800">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      <div className="prose prose-slate max-w-none prose-a:text-emerald-700 prose-strong:text-slate-900 mt-4">
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Article hero, toc & progress
// ---------------------------------------------------------------------------

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-1 w-full bg-emerald-100">
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
      {/* Decorative background image behind headline */}
      <div
        className="absolute inset-6 -z-10 opacity-45 bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/images/blog/puppy-first-walk-hero.jpg')" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-emerald-200">
              Puppy Guide
            </span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-800 text-xs font-semibold">
              New
            </span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Puppy First Walk Checklist: Gear, Timing, Confidence & Calm Starts
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            A friendly, plain-English checklist to make those first walks safe, positive and quietly brilliant—for you and your pup.
            Packed with tiny rituals, realistic timings and trainer-informed tips that build confidence without overwhelm.
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
      <div className="h-10 w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
    </header>
  );
}

function StickyToc({ toc, activeId }: { toc: TocItem[]; activeId: string }) {
  return (
    <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">On this page</div>
      <ol className="mt-3 space-y-2">
        {toc.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={cx(
                "block rounded-md px-2 py-1 text-sm",
                activeId === t.id ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200" : "text-slate-700 hover:text-slate-900"
              )}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
        Tip: tap headings to jump — the green bar up top tracks your progress.
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// JSON-LD helper (SEO)
// ---------------------------------------------------------------------------

function getArticleJsonLd() {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://example.com/blog/puppy-first-walk-checklist";
  const published = "2024-08-22";
  const modified = "2025-10-08";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: "Puppy First Walk Checklist: Gear, Timing, Confidence & Calm Starts",
    description:
      "A practical, plain-English checklist for your puppy’s first walks: vaccinations, timing, gear, calm rituals, confidence-building, and mini training wins.",
    image: ["https://example.com/images/blog/puppy-first-walk-hero.jpg"],
    datePublished: published,
    dateModified: modified,
    author: { "@type": "Organization", name: "Saltaire Dog Walks" },
    publisher: {
      "@type": "Organization",
      name: "Saltaire Dog Walks",
      logo: { "@type": "ImageObject", url: "https://example.com/images/logo.png" },
    },
    keywords: "puppy first walk checklist, puppy vaccinations, puppy socialisation, gear for puppies, Saltaire dog walks",
  } as const;
}

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export default function PuppyFirstWalkClient() {
  // Table of contents (LS headings only for clarity)
  const toc: TocItem[] = useMemo(() => ([
    { id: "overview", label: "Overview", level: 1 },
    { id: "vaccines", label: "Vaccines & Safe Timing", level: 1 },
    { id: "gear", label: "Essential Gear", level: 1 },
    { id: "ritual", label: "Pre-Walk Ritual", level: 1 },
    { id: "route", label: "Your First Route Plan", level: 1 },
    { id: "training", label: "Tiny Training Wins", level: 1 },
    { id: "socialisation", label: "Socialisation (Done Right)", level: 1 },
    { id: "troubleshoot", label: "Troubleshooting", level: 1 },
    { id: "faq", label: "FAQs", level: 1 },
  ]), []);

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Interactive state
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);

  // Checklist state
  type Item = { id: string; label: string; note?: string; checked: boolean };
  const [gearItems, setGearItems] = useState<Item[]>([
    { id: "harness", label: "Well-fitted harness (Y-front)", checked: false, note: "Comfortable, doesn’t restrict shoulders." },
    { id: "lead", label: "Short 1.2–1.8m lead", checked: false, note: "Control on narrow towpaths/bridges." },
    { id: "treats", label: "High-value treats (pea-sized)", checked: false, note: "Soft & tiny for frequent rewards." },
    { id: "poo", label: "Waste bags", checked: false },
    { id: "water", label: "Water + foldable bowl", checked: false },
    { id: "id", label: "ID tag (name & phone)", checked: false },
    { id: "mat", label: "Small mat/blanket (settle)", checked: false, note: "Great for cafés/benches." },
    { id: "toy", label: "Tiny toy/chew for decompression", checked: false },
  ]);

  // Timer for “calm minute”
  const [timer, setTimer] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);
  useEffect(() => {
    if (!timerRunning) return;
    if (timer <= 0) {
      setTimerRunning(false);
      return;
    }
    const t = setTimeout(() => setTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timerRunning, timer]);

  // Scroll watcher
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
      for (const h of headings) if (h.offsetTop <= top) current = h.id;
      setActiveId(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  const readingTime = useMemo(() => "12 min read", []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  const handleShare = async () => {
    setShareError(null);
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
      } else {
        setShareError("Share not supported on this device. Copy the link instead.");
      }
    } catch (e: any) {
      // user cancel is fine; do nothing
      if (e?.name !== "AbortError") setShareError("Could not open the share dialog.");
    }
  };

  const toggleGear = (id: string) =>
    setGearItems((xs) => xs.map((x) => (x.id === id ? { ...x, checked: !x.checked } : x)));
  const clearGear = () => setGearItems((xs) => xs.map((x) => ({ ...x, checked: false })));

  // Derived stats
  const gearProgress = useMemo(() => {
    const total = gearItems.length;
    const done = gearItems.filter((g) => g.checked).length;
    return { total, done, pct: Math.round((done / Math.max(1, total)) * 100) };
  }, [gearItems]);

  // Helpful mini calculators
  const [pace, setPace] = useState(2); // km/h beginner
  const [duration, setDuration] = useState(20); // minutes
  const distanceKm = useMemo(() => Number(((pace * duration) / 60).toFixed(2)), [pace, duration]);

  return (
    <main className="min-h-screen bg-white">
      <ProgressBar progress={progress} />
      <ArticleHero readingTime={readingTime} />

      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd()) }}
      />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 pb-24">
        <aside className="order-last lg:order-first lg:col-span-3 space-y-6">
          <StickyToc toc={toc} activeId={activeId} />

          {/* Mini pace calculator */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 mb-2">Puppy pace estimator</div>
            <label className="block text-xs text-slate-600">Pace (km/h)</label>
            <input
              type="range"
              min={1}
              max={4}
              value={pace}
              onChange={(e) => setPace(Number(e.target.value))}
              className="w-full"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span>Slow</span>
              <span>{pace} km/h</span>
              <span>Brisk</span>
            </div>

            <label className="mt-4 block text-xs text-slate-600">Walk duration (mins)</label>
            <input
              type="range"
              min={10}
              max={45}
              step={5}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span>10</span>
              <span>{duration}</span>
              <span>45</span>
            </div>

            <div className="mt-3 rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
              <strong className="font-semibold text-slate-900">{distanceKm} km</strong> estimated distance. For young
              pups, prioritise sniffing and short calm reps over distance.
            </div>
          </div>

          {/* Calm timer */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 mb-2">Calm minute timer</div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setTimer(60);
                  setTimerRunning(true);
                }}
                className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start 60s
              </button>
              <button
                onClick={() => setTimerRunning(false)}
                className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-slate-300 hover:bg-slate-50"
              >
                Pause
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimer(60);
                }}
                className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
              >
                Reset
              </button>
            </div>
            <div className="mt-3 text-3xl font-bold tabular-nums text-slate-900">{timer}s</div>
            <div className="mt-1 text-xs text-slate-600">Stand still, loose lead, breathe slowly—reward eye contact.</div>
          </div>
        </aside>

        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar />

          <Section id="overview" title="Overview">
            <p>
              First walks are huge moments. Your puppy is absorbing the world—smells, textures, passing bikes, kids, and
              birds—at a million miles an hour. The goal isn’t “a long walk”; it’s <strong>calm curiosity</strong> and{" "}
              <strong>tiny wins</strong> that create a confident little traveller. This checklist shows exactly what to bring,
              when to go, and how to run a short, happy routine that scales into your daily life.
            </p>
            <Callout type="success" title="Quick summary — your 30-second plan">
              Keep it short (15–25 mins). Choose a quiet loop (Roberts Park inner path or a calm residential street). Reward
              <em> looking and then back to you</em>. Finish before they’re tired. One calm minute at the end = tomorrow’s
              easier walk.
            </Callout>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="emerald">Beginner-friendly</Badge>
              <Badge tone="amber">Predictable routine</Badge>
              <Badge tone="sky">Confidence first</Badge>
              <Badge tone="rose">Trainer-informed</Badge>
            </div>
          </Section>

          <Divider />

          <Section id="vaccines" title="Vaccines & Safe Timing (plain English)">
            <p>
              Ask your vet for clearance on pavement contact and mixing with unknown dogs—this can vary by vaccine brand
              and schedule. Meanwhile, your puppy still needs <strong>gentle exposure</strong> to the world. That’s where{" "}
              <em>carried socialisation</em>, <em>front-garden time</em>, and <em>quiet curb-side watching</em> come in.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
              <li>
                <strong>Carried time:</strong> hold your pup while you sit on a bench or at your front step; reward calm
                observing.
              </li>
              <li>
                <strong>Clean surfaces first:</strong> stick to clean pavements and parks; avoid visibly soiled areas until
                your vet gives the full go-ahead.
              </li>
              <li>
                <strong>Friendly, known dogs only:</strong> if you have trusted vaccinated dogs, arrange short, positive
                meets.
              </li>
            </ul>
            <ProTip title="Reframe ‘walks’ as ‘world tours’">
              Two minutes of relaxed watching is as valuable as ten minutes of busy walking. The world is the classroom.
            </ProTip>
          </Section>

          <Divider />

          <Section id="gear" title="Essential Gear (interactive checklist)">
            <p>
              Tick these off before you leave. The progress bar fills as you go. You can reset with one tap if you’re
              prepping a walk partner.
            </p>

            <div className="not-prose mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">Pack list</div>
                <div className="text-xs text-slate-600">
                  {gearProgress.done}/{gearProgress.total} ready • {gearProgress.pct}%
                </div>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full bg-emerald-500" style={{ width: `${gearProgress.pct}%` }} />
              </div>

              <ul className="mt-4 space-y-2">
                {gearItems.map((g) => (
                  <li key={g.id} className="flex items-start gap-3">
                    <input
                      id={g.id}
                      type="checkbox"
                      checked={g.checked}
                      onChange={() => toggleGear(g.id)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600"
                    />
                    <label htmlFor={g.id} className="flex-1 text-sm text-slate-800">
                      <span className={cx("font-medium", g.checked && "line-through text-slate-500")}>{g.label}</span>
                      {g.note && <span className="ml-2 text-slate-500">— {g.note}</span>}
                    </label>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={clearGear}
                  className="rounded-md bg-white px-3 py-1.5 text-sm text-slate-800 ring-1 ring-slate-300 hover:bg-slate-50"
                >
                  Reset list
                </button>
                <Link
                  href="/contact"
                  className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Book a supported ‘first walk’
                </Link>
              </div>
            </div>

            <ProTip title="Harness fit in one sentence">
              Two fingers under neck and chest straps; Y-front sits off the soft throat; no pinching behind the armpits.
            </ProTip>
          </Section>

          <Divider />

          <Section id="ritual" title="The Pre-Walk Ritual (2 minutes)">
            <p>
              A repeatable little routine makes puppies feel safe and anchors calm behaviour outside. Do this at your front
              door or in the hallway.
            </p>

            <ol className="mt-2 list-decimal pl-5 text-slate-700 space-y-2">
              <li><strong>Slow breaths (10s):</strong> one deep breath together; soften shoulders.</li>
              <li><strong>Name → eye contact → treat (x2):</strong> mark that connection is valuable.</li>
              <li><strong>Clip lead calmly:</strong> no rushing. Lead slack before the handle moves.</li>
              <li><strong>Doorway sit (optional):</strong> wait for the handle to turn; treat for stillness.</li>
            </ol>

            <div className="not-prose mt-4 rounded-2xl border border-slate-200 bg-emerald-50/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-emerald-900">Run a 60-second calm close</div>
                <button
                  onClick={() => {
                    setTimer(60);
                    setTimerRunning(true);
                  }}
                  className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Start now
                </button>
              </div>
              <div className="mt-2 text-xs text-emerald-800">
                Finish every walk with a quiet minute in your entryway—tomorrow’s focus starts here.
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="route" title="Your First Route Plan (step-by-step)">
            <p>
              Short, predictable, and near home wins the day. Below is a model 20-minute plan you can adapt anywhere in
              Saltaire.
            </p>

            <RouteSteps
              steps={[
                { title: "Start outside your gate", text: "Stand still for 20s. Reward looking at a sound, then looking back." },
                { title: "Walk 2–3 houses", text: "Let sniffing lead; keep lead slack; praise soft curiosity." },
                { title: "Pause at a safe corner", text: "Watch bikes/car 10–20m away; feed calmly for watching." },
                { title: "Loop the quiet block", text: "Alternate 60s walk / 15s stand. Treat for checking in." },
                { title: "Return home gently", text: "No high-energy play on the doorstep; end with the calm minute." },
              ]}
            />

            <ImageFrame
              src="/poodle-brown.png"
              alt="A simple first-walk loop map through a quiet residential street"
              caption="Start close to home; aim for predictable sights and surfaces."
            />
          </Section>

          <Divider />

          <Section id="training" title="Tiny Training Wins (5–6 mins total)">
            <p>
              You’ll get more value from <em>micro-sessions</em> than from one long grind. Here are three wins you can slot
              into any walk.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ProgramCard
                title="Loose lead 101"
                bullets={[
                  "Feed near your knee for 3–4 steps",
                  "Say 'let’s go' and move off",
                  "Stop if the lead goes tight; wait for slack → praise",
                ]}
              />
              <ProgramCard
                title="Name-game recall"
                bullets={[
                  "Say the name once; pup looks → treat",
                  "Take two steps back; repeat",
                  "2–3 reps max; keep it easy",
                ]}
              />
              <ProgramCard
                title="Mat settle (benches)"
                bullets={[
                  "Mat on bench/ground, treat for 4 paws on",
                  "1–2 quiet breaths = jackpot",
                  "Pick up mat; end before they fidget",
                ]}
              />
            </div>

            <Callout type="info" title="‘Release’ is part of training">
              After a little rep, cheerfully say your release word and let them sniff again. It keeps pressure low and learning high.
            </Callout>
          </Section>

          <Divider />

          <Section id="socialisation" title="Socialisation (done right)">
            <p>
              Puppies don’t need a crowd; they need <strong>measured, positive</strong> experiences. The recipe is simple:
              see/hear something → choose calm → get paid.
            </p>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Distance first:</strong> watch kids, dogs, cyclists from far enough away to stay relaxed.</li>
              <li><strong>One-and-done:</strong> one nice look at a thing is enough; no need to “test” tolerance repeatedly.</li>
              <li><strong>Surface sampler:</strong> grass, pavement, grate edges, a tiny wooden plank—variety builds body confidence.</li>
            </ul>

            <ProTip title="The two-treat rule">
              One treat for calmly noticing the thing; one treat for checking back with you. Then move on.
            </ProTip>
          </Section>

          <Divider />

          <Section id="troubleshoot" title="Troubleshooting: pulling, freezing, barking">
            <p>Not every moment goes to plan. Use these quick moves to keep it positive and safe.</p>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">Pulling ahead</h3>
            <ol className="mt-2 list-decimal pl-5 text-slate-700 space-y-2">
              <li>Stop. Breathe. Wait for slack. Mark and move.</li>
              <li>Reward steps near your knee. Repeat little bursts.</li>
              <li>Shorten the walk. Success first; distance later.</li>
            </ol>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">Freezing statues</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>Soft coaxing; turn sideways; shuffle back a step.</li>
              <li>Snack scatter on the ground to unstick feet.</li>
              <li>Abort mission kindly. Try again at a quieter time.</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">Barking at the world</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>Increase distance; reward <em>looking then back</em>.</li>
              <li>Place behind a visual shield (parked car, hedge).</li>
              <li>Call it. Home, drink, nap. Reset the day.</li>
            </ul>

            <Callout type="warning" title="When to ask for help">
              If your puppy frequently panics or can’t settle outdoors, get a trainer/behaviourist on board early. Quick help now
              saves months later.
            </Callout>
          </Section>

          <Divider />

          <Section id="faq" title="FAQs — puppy first walks">
            <Faq items={[
              { q: "How long should the first walk be?", a: "Aim for 15–25 minutes including pauses. Stop before they tire; success beats distance." },
              { q: "What time of day is best?", a: "Early morning or early afternoon on weekdays gives calmer pavements and softer light." },
              { q: "Can I use a flexi lead?", a: "Skip it for now. Use a 1.2–1.8m fixed lead for safe handling and simple training." },
              { q: "What if it rains?", a: "Light drizzle is perfect—fewer distractions. Bring a small towel for paws." },
            ]} />
          </Section>

          <BottomCta />

          <AuthorCard authorName="Saltaire Dog Walks" />

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
            {shareError && <span className="text-xs text-amber-700">{shareError}</span>}
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Content helpers & cards
// ---------------------------------------------------------------------------

function ImageFrame({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="not-prose mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>}
    </figure>
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

function RouteSteps({ steps }: { steps: Array<{ title: string; text: string }> }) {
  return (
    <ol className="mt-4 list-decimal pl-6 space-y-4 text-slate-700">
      {steps.map((s, i) => (
        <li key={s.title}>
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700">
              {i + 1}
            </div>
            <div>
              <div className="font-semibold text-slate-900">{s.title}</div>
              <div className="text-sm text-slate-700 mt-1">{s.text}</div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Faq({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold text-slate-900">{it.q}</h4>
            <div className="mt-0.5 shrink-0 rounded-full border border-slate-300 p-1 text-slate-500 group-open:rotate-180 transition">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
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
          <h3 className="text-2xl font-bold">Want support on your first walks?</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">
            Book a guided ‘first walk’ with Saltaire Dogs—calm routines, friendly coaching, and a plan you can repeat.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset ring-white/30 hover:bg-white/20"
          >
            Contact us
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}

function AuthorCard({ authorName = "Saltaire Dog Walks" }: { authorName?: string }) {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-12 w-12 rounded-full bg-emerald-200 flex items-center justify-center">
        <Icon.Paw className="h-6 w-6 text-emerald-800" />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{authorName}</div>
        <div className="text-xs text-slate-600">Local, friendly, first-aid trained • Positive methods</div>
      </div>
    </div>
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
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
    >
      {icon}
      {children}
    </button>
  );
}
