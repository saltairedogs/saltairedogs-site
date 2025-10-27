"use client";

/**
 * Saltaire Dog Walking Guide 2025 — Premium, bold/modern blog client
 * (Fixed: adds SeasonGrid() so there are no undefined references)
 */

import React, {
  useId,
  useMemo,
  useEffect,
  useRef,
  useState,
  Fragment,
} from "react";
import Link from "next/link";

// Palette
const COLORS = {
  ink: "#111315",
  body: "#2B2F34",
  mute: "#6E7781",
  line: "#E5E7EB",
  paper: "#FFFFFF",
  brand: "#0EA5E9",
  brandDeep: "#0369A1",
  brandSoft: "#E0F2FE",
  success: "#10B981",
  successSoft: "#ECFDF5",
  warn: "#F59E0B",
  warnSoft: "#FFFBEB",
  info: "#0284C7",
  infoSoft: "#E0F2FE",
};

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}
function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}
function toHHMM(h: number) {
  return `${String(h).padStart(2, "0")}:00`;
}
function todayString() {
  return new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Icons
const Icon = {
  Star: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
      <path d="M12 17.27l6.18 3.73-1.64-7.03L21.5 9.24l-7.19-.61L12 2 9.69 8.63 2.5 9.24l4.96 4.73L5.82 21z" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Info: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Alert: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Link: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 2a4 4 0 105.657 5.657l2-2M14 10l2-2a4 4 0 10-5.657-5.657l-2 2" />
    </svg>
  ),
  Share: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Print: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Clock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
  Eye: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  MapPin: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 22s-7-5-7-11a7 7 0 1114 0c0 6-7 11-7 11z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  Paw: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="5.5" cy="8.5" r="2" />
      <circle cx="9.5" cy="5.5" r="2" />
      <circle cx="14.5" cy="5.5" r="2" />
      <circle cx="18.5" cy="8.5" r="2" />
      <path d="M8 15c1-2 3-3 4-3s3 1 4 3c.7 1 .5 2-.5 3S13 19 12 19s-2-.2-3-.9-1.2-2-.5-3.1z" />
    </svg>
  ),
  Sun: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9L6.3 6.3M17.7 17.7l1.4 1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4" />
    </svg>
  ),
  CloudRain: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M16 16a4 4 0 100-8 5 5 0 10-9.9 1" />
      <path d="M8 19v2M12 19v2M16 19v2" />
    </svg>
  ),
  Snowflake: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1L19.1 4.9" />
    </svg>
  ),
  Phone: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M22 16.92v3A2 2 0 0119.82 22a19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.89.33 1.76.63 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.15a2 2 0 012.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0122 16.92z" />
    </svg>
  ),
  Mail: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 4h16v16H4z" />
      <path d="M22 6L12 13 2 6" />
    </svg>
  ),
  Download: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  ),
};

export default function SaltaireGuideClient() {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (!articleRef.current) return;
      const total = articleRef.current.scrollHeight - window.innerHeight;
      setProgress(clamp(window.scrollY / Math.max(1, total), 0, 1));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  const handleShare = async () => {
    try {
      if ("share" in navigator && typeof (navigator as any).share === 'function') {
        await (navigator as any).share({ title: document.title, url: window.location.href });
      } else {
        await handleCopy();
      }
    } catch {}
  };

  const readingTime = useMemo(() => "12 min read", []);
  const dateText = useMemo(() => todayString(), []);

  const ldArticle = useMemo(() => getArticleJsonLd(), []);
  const ldFAQ = useMemo(() => getFaqJsonLd(), []);
  const ldCrumbs = useMemo(() => getBreadcrumbJsonLd(), []);
  const ldSpeakable = useMemo(() => getSpeakableJsonLd(), []);

  return (
    <main className="min-h-screen bg-white text-[15.5px] leading-[1.75]">
      {/* No in-article progress bar or navigation */}

      <Hero readingTime={readingTime} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldCrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSpeakable) }} />

      <article ref={articleRef} className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-24" aria-labelledby="article-title">
        <div className="mx-auto max-w-4xl">
          <TopMetaBar dateText={dateText} />
        </div>

        <Section id="overview" title="Overview">
          <p>
            Welcome to your <strong>Saltaire Dog Walking Guide 2025</strong> — a bold, no-fluff manual for calm, enriching walks along the
            Leeds–Liverpool Canal, Roberts Park and Hirst Wood. You’ll find *when* to go for quieter paths, *where* to get quick training
            wins, and *how* to share the space politely.
          </p>

          <Callout type="success" title="Quick formula for a smooth morning">
            Weekdays <strong>07:00–09:00</strong>. Choose the <em>Riverside Loop</em> for 30–40 minutes. Keep a short lead on bridges, reward calm near wildlife,
            and finish with a one-minute “settle” before coffee.
          </Callout>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Badge tone="brand">
              <Icon.Paw className="h-3.5 w-3.5" />
              Puppy-friendly
            </Badge>
            <Badge tone="ink">
              <Icon.Sun className="h-3.5 w-3.5" />
              Best at sunrise
            </Badge>
            <Badge tone="info">
              <Icon.CloudRain className="h-3.5 w-3.5" />
              Drizzle = quiet paths
            </Badge>
          </div>

          <div className="not-prose mt-6 flex flex-wrap items-center gap-2">
            <GhostButton onClick={handleCopy} ariaLabel="Copy link">
              <Icon.Link className="h-4 w-4" />
              {copied ? "Copied" : "Copy link"}
            </GhostButton>
            <GhostButton onClick={() => window.print()} ariaLabel="Print page">
              <Icon.Print className="h-4 w-4" />
              Print
            </GhostButton>
            <GhostButton onClick={handleShare} ariaLabel="Share page">
              <Icon.Share className="h-4 w-4" />
              Share
            </GhostButton>
            <PrimaryButton asChild>
              <Link href="/contact">Book a Walk</Link>
            </PrimaryButton>
          </div>
        </Section>

        <Divider />

        <Section id="routes" title="Top Routes (and a quick matcher)">
          <p>
            These three loops are predictable, photogenic and great for loose-lead practice. The matcher helps you pick one based on your
            dog’s energy and your preferred surface.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <RouteCard
              name="Riverside Loop"
              distanceKm={2.1}
              durationMin={35}
              difficulty="Easy"
              highlights={["Open lawns", "Water access points", "Shade pockets"]}
              mapHint="Salts Mill → footbridge → riverside path → inner lawns → return."
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

          <RouteMatcher />
        </Section>

        <Divider />

        <Section id="windows" title="Quiet Windows (use them to your advantage)">
          <p>
            Saltaire’s rhythm follows <em>school runs</em> and <em>weekend visitors</em>. Pick windows where distractions are predictable.
          </p>

          <Heatmap />
          <QuietPlanner />
        </Section>

        <Divider />

        <Section id="etiquette" title="Local Rules & Shared Path Etiquette">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Lead control:</strong> keep leads short on towpaths, bridges and lock edges.</li>
            <li><strong>Share the path:</strong> step aside for cyclists/prams; a brief sit helps everyone pass.</li>
            <li><strong>Wildlife:</strong> recall early; add space rather than tension near ducks and swans.</li>
            <li><strong>Waste:</strong> bins near park gates and Salts Mill; always carry spares.</li>
            <li><strong>Small groups:</strong> keep numbers modest at busy times; avoid peak café hours.</li>
          </ul>

          <ProTip title="Two cues that solve 80% of situations">
            A confident <em>watch-me</em> and a calm <em>let’s go</em> cover bridges, passing bikes and surprise geese. Reinforce generously.
          </ProTip>
        </Section>

        <Divider />

        {/* FIX: SeasonGrid was missing. Now defined below. */}
        <Section id="seasons" title="Seasonal Tips (what actually changes)">
          <SeasonGrid />
        </Section>

        <Divider />

        <Section id="gear" title="Gear & Prep (Saltaire-tested)">
          <p>Comfort and control beat gadgets. Pick items that handle mixed surfaces and quick training reps.</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <GearCard
              title="Dual-clip harness"
              bullets={["Front clip for training", "Back clip for cruising", "Soft chest padding"]}
            />
            <GearCard
              title="Short lead (1.2–1.8 m)"
              bullets={["Bridge safety", "Quick hand swaps", "Less snagging on rails"]}
            />
            <GearCard
              title="Hi-vis tag/light"
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

        <Section id="training" title="Training Micro-Drills (5–7 minutes)">
          <p>Drop one mini-program into your walk; short and clean beats long and messy.</p>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ProgramCard
              title="Loose-lead reset"
              bullets={[
                "Stand still 10 s when the lead tightens",
                "Reward the first slack step",
                "Walk 20 m, repeat ×3",
              ]}
            />
            <ProgramCard
              title="Recall burst"
              bullets={[
                "5× short-distance recalls on a long line",
                "Add mild distraction (walk 3 steps away)",
                "Big praise, then release to sniff",
              ]}
            />
            <ProgramCard
              title="Calm around wildlife"
              bullets={[
                "Spot ducks early → create space",
                "Watch-me → treat → step away",
                "End with 30 s sniff break",
              ]}
            />
          </div>

          <Callout type="info" title="Progress is non-linear">
            Two calm reps today beat ten messy ones tomorrow. Always end on success.
          </Callout>
        </Section>

        <Divider />

        <Section id="access" title="Accessibility Notes">
          <AccessibilityNotes />
        </Section>

        <Divider />

        <Section id="cafes" title="Dog-Friendly Spots (bring a mat)">
          <p className="text-slate-700">
            Many Saltaire cafés welcome dogs outdoors; some indoors at staff discretion. Ask politely and carry a small mat — it helps.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              { name: "Salts Mill cafés", blurb: "Multiple options; outdoor areas are easiest with dogs. Water bowls in summer." },
              { name: "Caroline Street terraces", blurb: "Handy for a quick flat white post-walk. Check individual signs for inside seating." },
              { name: "Hirst Wood local stop", blurb: "Quiet vibe after the woodland loop. Great for a brief ‘settle’ on the mat." },
              { name: "Canal-side kiosks (seasonal)", blurb: "Good for takeaway water + breather before returning along the towpath." },
            ].map((v) => (
              <VenueCard key={v.name} name={v.name} blurb={v.blurb} />
            ))}
          </div>
        </Section>

        <Divider />

        <Section id="parking" title="Parking & Transport">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Salts Mill</strong> car parks for short stays — arrive early on sunny weekends.</li>
            <li>Limited on-street options near Roberts Park. Mind signage and residents.</li>
            <li>Train: <em>Saltaire</em> station (Leeds–Skipton line) — quick canal access via Salts Mill side.</li>
            <li>Buses from Bradford/Shipley stop within a short walk of the park and canal.</li>
          </ul>
        </Section>

        <Divider />

        <Section id="emergency" title="Emergencies & Safety">
          <ul className="list-disc pl-5 space-y-2">
            <li>Know the nearest landmark: Salts Mill, Hirst Lock, Roberts Park gates.</li>
            <li>Carry a small first-aid kit; check paws after gravel or ice.</li>
            <li>In heat: avoid midday towpaths and test asphalt with your hand.</li>
            <li>In ice: shorten sessions and pick sun-lit sections first.</li>
          </ul>

          <Callout type="warning" title="Water edges & cold shock">
            Avoid sudden water entries in winter. If your dog falls in, call calmly to a shallow exit point and keep them moving to warm up.
          </Callout>
        </Section>

        <Divider />

        <Section id="faq" title="FAQs">
          <Faq />
        </Section>

        <Divider />

        <Section id="downloads" title="Downloads (print-friendly)">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <DownloadCard
              title="One-page quick guide"
              href="/downloads/saltaire-dog-walking-quick-guide.pdf"
              desc="Morning windows, top routes, bridge etiquette and must-have gear."
            />
            <DownloadCard
              title="Training micro-drills"
              href="/downloads/saltaire-micro-drills.pdf"
              desc="The three 5-minute routines with tick boxes for quick tracking."
            />
            <DownloadCard
              title="Emergency checklist"
              href="/downloads/saltaire-emergency-checklist.pdf"
              desc="First aid basics, useful pins and cold/heat adjustments."
            />
          </div>
        </Section>

        <BottomCta />
      </article>
    </main>
  );
}

/* =========================== UI + Helpers =========================== */

function Hero({ readingTime }: { readingTime: string }) {
  const HERO = "/saltaire-canal-retriever-on-lead-cobbles.jpg";
  return (
    <header className="relative isolate">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO}
        alt="Golden retriever on a lead walking on Saltaire cobbles along the canal"
        className="h-[52vw] min-h-[380px] max-h-[620px] w-full object-cover"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.52),rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.55))]" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-white/30 backdrop-blur">
              <Icon.Paw className="h-3.5 w-3.5" />
              Local Guide • 2025
            </span>
            <h1 id="article-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.05]" style={{ color: "white" }}>
              Saltaire Dog Walking Guide 2025
              <span className="block text-white/90">Best Routes, Quiet Times & Local Rules</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
              Practical, premium local guide: route cards, quiet-window planner, shared-path etiquette, seasonal advice and safety.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2"><Icon.Clock className="h-4 w-4" /> {readingTime}</span>
              <span className="inline-flex items-center gap-2"><Icon.Eye className="h-4 w-4" /> Updated {todayString()}</span>
              <div className="ms-auto" />
              <PrimaryButton asChild highContrast>
                <Link href="/contact">Book a Walk</Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function InlineNav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="In-page navigation" className="border-b" style={{ borderColor: COLORS.line, backgroundColor: COLORS.paper }}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto py-3">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="snap-start rounded-full border px-3 py-1.5 text-sm font-medium hover:bg-black/5 focus:outline-none focus-visible:ring-2"
              style={{ borderColor: COLORS.line, color: COLORS.body }}
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function TopMetaBar({ dateText }: { dateText: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm" style={{ color: COLORS.mute }}>
      <span>By <strong style={{ color: COLORS.body }}>Saltaire Dog Walks</strong></span>
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
    <section id={id} className="mx-auto max-w-4xl scroll-mt-24">
      <h2 id={headingId} className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: COLORS.ink }}>
        {title}
      </h2>
      <div className="prose prose-slate mt-4 max-w-none prose-a:text-sky-700 prose-strong:text-slate-900">
        {children}
      </div>
    </section>
  );
}
function Divider() {
  return <hr className="my-12" style={{ borderColor: COLORS.line }} />;
}

function PrimaryButton({ children, onClick, asChild, highContrast }: { children: React.ReactNode; onClick?: () => void; asChild?: boolean; highContrast?: boolean; }) {
  const Cmp: any = asChild ? "span" : "button";
  return (
    <Cmp
      onClick={onClick}
      className={cx("inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm focus:outline-none focus-visible:ring-2", "transition-colors")}
      style={{ backgroundColor: highContrast ? "white" : COLORS.brand, color: highContrast ? COLORS.ink : "white" }}
    >
      {children}
    </Cmp>
  );
}
function GhostButton({ children, onClick, ariaLabel }: { children: React.ReactNode; onClick: () => void; ariaLabel?: string; }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium hover:bg-black/5 focus:outline-none focus-visible:ring-2"
      style={{ borderColor: COLORS.line, color: COLORS.body }}
    >
      {children}
    </button>
  );
}

function Badge({ children, tone = "brand" }: { children: React.ReactNode; tone?: "brand" | "ink" | "info" | "success" }) {
  const map: Record<string, { bg: string; fg: string; ring: string }> = {
    brand: { bg: COLORS.brandSoft, fg: COLORS.brandDeep, ring: COLORS.brand },
    ink: { bg: "#F3F4F6", fg: COLORS.ink, ring: COLORS.line },
    info: { bg: COLORS.infoSoft, fg: COLORS.info, ring: COLORS.info },
    success: { bg: COLORS.successSoft, fg: COLORS.success, ring: COLORS.success },
  };
  const s = map[tone];
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1" style={{ backgroundColor: s.bg, color: s.fg, boxShadow: `inset 0 0 0 1px ${s.ring}22` }}>
      {children}
    </span>
  );
}

function Callout({ type, title, children }: { type: "success" | "warning" | "info"; title: string; children: React.ReactNode; }) {
  const map = {
    success: { bg: COLORS.successSoft, ring: `${COLORS.success}33`, tint: COLORS.success, icon: <Icon.Check className="h-4 w-4" /> },
    warning: { bg: COLORS.warnSoft, ring: `${COLORS.warn}33`, tint: COLORS.warn, icon: <Icon.Alert className="h-4 w-4" /> },
    info: { bg: COLORS.infoSoft, ring: `${COLORS.info}33`, tint: COLORS.info, icon: <Icon.Info className="h-4 w-4" /> },
  }[type];
  return (
    <div className="not-prose mt-6 rounded-xl p-4 ring-1" style={{ backgroundColor: map.bg, boxShadow: `inset 0 0 0 1px ${map.ring}` }}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5" style={{ color: map.tint }}>{map.icon}</div>
        <div>
          <div className="text-sm font-semibold" style={{ color: COLORS.ink }}>{title}</div>
          <div className="mt-1 text-sm" style={{ color: COLORS.body }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose mt-6 rounded-xl border p-4 shadow-sm" style={{ borderColor: `${COLORS.success}55`, backgroundColor: `${COLORS.successSoft}` }}>
      <div className="flex items-start gap-3">
        <div className="text-emerald-600"><Icon.Check className="h-5 w-5" /></div>
        <div>
          <div className="text-sm font-semibold" style={{ color: COLORS.ink }}>{title}</div>
          <div className="mt-1 text-sm" style={{ color: COLORS.body }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function RouteCard({ name, distanceKm, durationMin, difficulty, highlights, mapHint }: { name: string; distanceKm: number; durationMin: number; difficulty: "Easy" | "Moderate" | "Challenging"; highlights: string[]; mapHint: string; }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md" style={{ borderColor: COLORS.line, backgroundColor: COLORS.paper }}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold" style={{ color: COLORS.ink }}>{name}</h3>
        <span className="rounded-full px-2 py-1 text-[11px] font-semibold" style={{ backgroundColor: COLORS.brandSoft, color: COLORS.brandDeep, boxShadow: `inset 0 0 0 1px ${COLORS.brand}22` }}>
          {difficulty}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm" style={{ color: COLORS.mute }}>
        <span>{distanceKm} km</span><span aria-hidden="true" className="text-slate-300">•</span><span>{durationMin} mins</span>
      </div>
      <p className="mt-3 text-sm" style={{ color: COLORS.body }}>{mapHint}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {highlights.map((h) => (
          <li key={h} className="rounded-full px-2.5 py-1 text-xs" style={{ backgroundColor: "#F8FAFC", color: COLORS.body, boxShadow: `inset 0 0 0 1px ${COLORS.line}` }}>
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-3">
  <a href="/areas" className="text-sm font-semibold hover:opacity-80" style={{ color: COLORS.brandDeep }}>Check coverage</a>
  <span className="text-slate-300" aria-hidden="true">•</span>
  <a href="/services" className="text-sm hover:opacity-80" style={{ color: COLORS.body }}>See services</a>
      </div>
    </div>
  );
}

function RouteMatcher() {
  const [energy, setEnergy] = useState<"chill" | "balanced" | "high">("balanced");
  const [surface, setSurface] = useState<"flat" | "mixed" | "woodland">("mixed");
  const suggestion = useMemo(() => {
    if (energy === "chill" && surface === "flat") return "Riverside Loop — short, open, benches nearby.";
    if (energy === "high" && surface !== "flat") return "Hirst Wood & Lock — sniffs + longer stretch.";
    if (surface === "flat") return "Bingley Heritage Stretch — long, predictable towpath.";
    return "Riverside Loop — safe default with quick exits.";
  }, [energy, surface]);

  return (
    <div className="not-prose mt-8 rounded-2xl border p-5" style={{ borderColor: COLORS.line }}>
      <div className="text-sm font-semibold" style={{ color: COLORS.ink }}>Quick route matcher</div>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <Field label="Dog's energy">
          <Segmented value={energy} onChange={setEnergy} options={[
            { value: "chill", label: "Chill" },
            { value: "balanced", label: "Balanced" },
            { value: "high", label: "High" },
          ]}/>
        </Field>
        <Field label="Preferred surface">
          <Segmented value={surface} onChange={setSurface} options={[
            { value: "flat", label: "Flat towpath" },
            { value: "mixed", label: "Mixed (park + path)" },
            { value: "woodland", label: "Woodland" },
          ]}/>
        </Field>
      </div>
      <div className="mt-4 rounded-lg p-3 text-sm" style={{ backgroundColor: COLORS.brandSoft, color: COLORS.brandDeep }}>
        <strong>Suggestion:</strong> {suggestion}
      </div>
    </div>
  );
}

function Heatmap() {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const score = (h: number) => {
    if (h < 6) return 0.2;
    if (h < 7) return 0.4;
    if (h < 9) return 0.7;
    if (h < 11) return 1.1;
    if (h < 13) return 1.5;
    if (h < 16) return 1.1;
    if (h < 18) return 1.8;
    if (h < 21) return 1.3;
    return 0.6;
  };
  const hue = (v: number) => 200 - v * 60;
  return (
    <div className="not-prose mt-5 rounded-2xl border p-4" style={{ borderColor: COLORS.line }}>
      <div className="grid grid-cols-12 gap-1">
        {hours.map((h) => (
          <div key={h} className="space-y-2">
            <div className="h-10 rounded-md" style={{ background: `hsl(${hue(score(h))} 80% ${92 - score(h) * 18}%)` }} title={toHHMM(h)} aria-label={`${toHHMM(h)} estimated busyness`} />
            <div className="text-center text-[11px]" style={{ color: COLORS.mute }}>{String(h).padStart(2, "0")}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs" style={{ color: COLORS.mute }}>Lighter = quieter, darker = busier (estimates)</div>
    </div>
  );
}

function QuietPlanner() {
  const [day, setDay] = useState<"weekday" | "weekend">("weekday");
  const [weather, setWeather] = useState<"clear" | "drizzle" | "hot" | "cold">("clear");
  const suggestion = useMemo(() => {
    if (day === "weekday" && weather === "drizzle") return "07:30–09:00 or 12:45–13:45 — drizzle softens crowds nicely.";
    if (day === "weekday" && weather === "hot") return "07:00–08:30 or after 18:30 — avoid midday heat on towpaths.";
    if (day === "weekend" && weather === "clear") return "08:00–09:00 best; after 11:00 gets very busy near cafés.";
    if (day === "weekend" && weather === "drizzle") return "08:30–10:00 — still quiet; woodland loop stays pleasant.";
    if (weather === "cold") return "10:00–12:00 — sun hits key sections and paths thaw.";
    return "07:30–09:00 most days; 12:30–14:00 workable for confident dogs.";
  }, [day, weather]);

  return (
    <div className="not-prose mt-6 rounded-2xl border p-5" style={{ borderColor: COLORS.line }}>
      <div className="text-sm font-semibold" style={{ color: COLORS.ink }}>Quiet-window planner</div>
      <div className="mt-3 grid gap-4 md:grid-cols-2">
        <Field label="Day">
          <Segmented value={day} onChange={setDay} options={[
            { value: "weekday", label: "Weekday" },
            { value: "weekend", label: "Weekend" },
          ]}/>
        </Field>
        <Field label="Weather">
          <Segmented value={weather} onChange={setWeather} options={[
            { value: "clear", label: "Clear" },
            { value: "drizzle", label: "Drizzle" },
            { value: "hot", label: "Hot" },
            { value: "cold", label: "Cold" },
          ]}/>
        </Field>
      </div>
      <div className="mt-4 rounded-lg p-3 text-sm" style={{ backgroundColor: COLORS.infoSoft, color: COLORS.info }}>
        <strong>Try:</strong> {suggestion}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium" style={{ color: COLORS.ink }}>{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
function Segmented<T extends string>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { value: T; label: string }[]; }) {
  return (
    <div className="inline-flex rounded-full border p-0.5" style={{ borderColor: COLORS.line, backgroundColor: "#F8FAFC" }} role="group" aria-label="segmented control">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={cx("rounded-full px-3 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2", active ? "shadow-sm" : "hover:bg-black/5")}
            style={{ color: active ? "white" : COLORS.body, backgroundColor: active ? COLORS.brand : "transparent" }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function GearCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm" style={{ borderColor: COLORS.line }}>
      <div className="text-lg font-semibold" style={{ color: COLORS.ink }}>{title}</div>
      <ul className="mt-3 space-y-2 text-sm" style={{ color: COLORS.body }}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2"><Icon.Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {b}</li>
        ))}
      </ul>
    </div>
  );
}
function ProgramCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm" style={{ borderColor: COLORS.line }}>
      <div className="font-semibold" style={{ color: COLORS.ink }}>{title}</div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: COLORS.body }}>
        {bullets.map((b) => (<li key={b}>{b}</li>))}
      </ul>
    </div>
  );
}
function VenueCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm" style={{ borderColor: COLORS.line }}>
      <div className="flex items-center gap-2 font-semibold" style={{ color: COLORS.ink }}>
        <Icon.MapPin className="h-4 w-4 text-sky-600" />
        {name}
      </div>
      <p className="mt-2 text-sm" style={{ color: COLORS.body }}>{blurb}</p>
    </div>
  );
}
function DownloadCard({ title, href, desc }: { title: string; href: string; desc: string }) {
  return (
    <a href={href} className="block rounded-2xl border p-5 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2" style={{ borderColor: COLORS.line }}>
      <div className="text-lg font-semibold" style={{ color: COLORS.ink }}>{title}</div>
      <p className="mt-1 text-sm" style={{ color: COLORS.body }}>{desc}</p>
      <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: COLORS.brandDeep }}>
        <Icon.Download className="h-4 w-4" /> Download PDF
      </div>
    </a>
  );
}

// *** NEW: SeasonGrid (this was missing, causing the crash) ***
function SeasonGrid() {
  const cards = [
    {
      title: "Spring",
      icon: <Icon.Sun className="h-4 w-4" style={{ color: COLORS.success }} />,
      tips: [
        "Mud easing on woodland paths — towel for paws.",
        "Wildlife fledglings: keep distance and reward calm.",
        "Allergies: quick wipe after walks helps some dogs.",
      ],
    },
    {
      title: "Summer",
      icon: <Icon.Sun className="h-4 w-4" style={{ color: COLORS.brandDeep }} />,
      tips: [
        "Walk early or late to avoid heat.",
        "Shade pockets in Hirst Wood; bring water.",
        "Check towpath temperature; avoid mid-day.",
      ],
    },
    {
      title: "Autumn",
      icon: <Icon.CloudRain className="h-4 w-4" style={{ color: COLORS.info }} />,
      tips: [
        "Leaf cover hides edges near water — slow down.",
        "Lower crowds in drizzle = ideal training sessions.",
        "Reflective gear from mid-afternoon helps.",
      ],
    },
    {
      title: "Winter",
      icon: <Icon.Snowflake className="h-4 w-4" style={{ color: COLORS.mute }} />,
      tips: [
        "Icy bridges: short leads + careful footing.",
        "Layered coats for small/senior dogs.",
        "Head torch makes towpaths easier to share.",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {cards.map((c) => (
        <div key={c.title} className="rounded-2xl border p-5" style={{ borderColor: COLORS.line, backgroundColor: "#F8FAFC" }}>
          <div className="flex items-center gap-2">
            {c.icon}
            <h3 className="text-lg font-semibold" style={{ color: COLORS.ink }}>{c.title}</h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm" style={{ color: COLORS.body }}>
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
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border p-5 shadow-sm" style={{ borderColor: COLORS.line }}>
        <div className="text-lg font-semibold" style={{ color: COLORS.ink }}>Path surfaces</div>
        <ul className="mt-3 space-y-2 text-sm" style={{ color: COLORS.body }}>
          <li><span className="font-medium">Towpath:</span> flat compact gravel; occasional puddles after rain.</li>
          <li><span className="font-medium">Park lawns:</span> gentle slopes; can be soft after prolonged rain.</li>
          <li><span className="font-medium">Woodland:</span> roots and leaf litter; choose dry days for mobility needs.</li>
        </ul>
      </div>
      <div className="rounded-2xl border p-5 shadow-sm" style={{ borderColor: COLORS.line }}>
        <div className="text-lg font-semibold" style={{ color: COLORS.ink }}>Facilities & access</div>
        <ul className="mt-3 space-y-2 text-sm" style={{ color: COLORS.body }}>
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
    { q: "Where can my dog be off-lead?", a: "Open park lawns and quieter Hirst Wood clearings are suitable when recall is solid. Keep leads on near bridges, locks and café areas." },
    { q: "Best short walk before work?", a: "A 25–30 minute Riverside Loop at 07:30 balances quiet paths with predictable distractions for light training." },
    { q: "What lead length works best on the towpath?", a: "1.2–1.8 m gives control with comfortable slack and avoids crossing cyclists’ lines." },
    { q: "How do I handle swans and geese?", a: "Create distance early, keep a short lead, ask for a watch-me, reward calm as they pass, then move on." },
    { q: "Any dog-friendly cafés?", a: "Several terraces around Salts Mill and Caroline Street; bring a mat and ask politely for indoor seating availability." },
    { q: "Where can I park?", a: "Use Salts Mill car parks or arrive early for on-street spots near Roberts Park. Always check signage." },
    { q: "Can I take this route with a pram?", a: "Yes on the main towpaths and park loops; woodland has uneven ground — choose dry periods for a smoother experience." },
  ];
  return (
    <div className="divide-y rounded-2xl border" style={{ borderColor: COLORS.line }}>
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold" style={{ color: COLORS.ink }}>{it.q}</h4>
            <div className="mt-0.5 shrink-0 rounded-full border p-1 transition group-open:rotate-180" style={{ borderColor: COLORS.line, color: COLORS.mute }} aria-hidden="true">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 9l6 6 6-6" /></svg>
            </div>
          </summary>
          <div className="pt-3 text-sm" style={{ color: COLORS.body }}>{it.a}</div>
        </details>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <section className="mx-auto mt-14 max-w-4xl rounded-3xl border p-8 text-white"
      style={{ background: `linear-gradient(135deg, ${COLORS.brand} 0%, ${COLORS.brandDeep} 100%)`, borderColor: `${COLORS.brandDeep}55` }}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold leading-tight">Want calmer, consistent walks?</h3>
          <p className="mt-1 text-white/90">Solo walks & small groups across Saltaire. GPS & photo updates after every visit.</p>
        </div>
        <div className="flex items-center gap-3">
          <PrimaryButton asChild highContrast><Link href="/contact">Book a Walk</Link></PrimaryButton>
          <GhostButton onClick={() => (window.location.href = "/services")}>See services</GhostButton>
        </div>
      </div>
    </section>
  );
}

/* =========================== JSON-LD =========================== */

function getArticleJsonLd() {
  const url = typeof window !== "undefined"
    ? window.location.href
    : "https://saltairedogs.uk/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: "Saltaire Dog Walking Guide 2025 — Best Routes, Quiet Times & Local Rules",
    description: "Premium local guide for dog walking in Saltaire: best routes, timing windows, etiquette, seasonal advice and safety.",
    image: [url.replace(/\/blog\/.*/, "/saltaire-canal-retriever-on-lead-cobbles.jpg")],
    datePublished: "2024-08-22",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: "Saltaire Dog Walks" },
    publisher: {
      "@type": "Organization",
      name: "Saltaire Dog Walks",
      logo: { "@type": "ImageObject", url: url.replace(/\/blog\/.*/, "/logo.svg") },
    },
    keywords: "Saltaire dog walking, Saltaire canal, Roberts Park, Hirst Wood, quiet times, dog etiquette, towpath rules",
  } as const;
}
function getFaqJsonLd() {
  const faq = [
    ["Where can my dog be off-lead?", "Open park lawns and quieter Hirst Wood clearings are suitable when recall is solid. Keep leads on near bridges, locks and café areas."],
    ["Best short walk before work?", "A 25–30 minute Riverside Loop at 07:30 balances quiet paths with predictable distractions for light training."],
    ["What lead length works best on the towpath?", "1.2–1.8 m gives control with comfortable slack and avoids crossing cyclists’ lines."],
    ["How do I handle swans and geese?", "Create distance early, keep a short lead, ask for a watch-me, reward calm as they pass, then move on."],
    ["Any dog-friendly cafés?", "Several terraces around Salts Mill and Caroline Street; bring a mat and ask politely for indoor seating availability."],
    ["Where can I park?", "Use Salts Mill car parks or arrive early for on-street spots near Roberts Park. Always check signage."],
    ["Can I take this route with a pram?", "Yes on the main towpaths and park loops; woodland has uneven ground — choose dry periods for a smoother experience."],
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  } as const;
}
function getBreadcrumbJsonLd() {
  const base = typeof window !== "undefined" ? window.location.origin : "https://saltairedogs.uk";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Saltaire Dog Walking Guide 2025",
        item: `${base}/blog/saltaire-dog-walking-guide-2025-best-routes-times-local-rules`,
      },
    ],
  } as const;
}
function getSpeakableJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: ["#article-title", "section#overview p:first-of-type"],
  } as const;
}
