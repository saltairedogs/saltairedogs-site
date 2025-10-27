"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Small shared subcomponents (top so they're visible everywhere)
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
      <span>
  By <strong>Saltaire Dog Walks</strong>
      </span>
      <span>•</span>
      <span>{date}</span>
      <span>•</span>
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
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
        {title}
      </h2>
      <div className="prose prose-slate max-w-none prose-a:text-emerald-700 prose-strong:text-slate-900 mt-4">
        {children}
      </div>
    </section>
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
  const palette = {
    success: {
      bg: "bg-emerald-50",
      ring: "ring-emerald-200",
      text: "text-emerald-900",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 text-emerald-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    warning: {
      bg: "bg-amber-50",
      ring: "ring-amber-200",
      text: "text-amber-900",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 text-amber-700"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4m0 4h.01" />
        </svg>
      ),
    },
    info: {
      bg: "bg-sky-50",
      ring: "ring-sky-200",
      text: "text-sky-900",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 text-sky-700"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
  }[type];

  return (
    <div
      className={`not-prose mt-6 rounded-xl p-4 ring-1 ${palette.bg} ${palette.ring}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{palette.icon}</div>
        <div>
          <div className={`text-sm font-semibold ${palette.text}`}>{title}</div>
          <div className="mt-1 text-sm text-slate-800">{children}</div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Utility components missing from your file
// ---------------------------------------------------------------------------

function Divider() {
  return <hr className="my-10 border-slate-200" />;
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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}


/**
 * Roberts Park — The Perfect Dog Walk (upgraded)
 * - Expanded, SEO friendly & interactive (playful micro-interactions)
 * - Matches saltaireguideclient.tsx conventions and styles
 *
 * Save as:
 * /home/giuseppe/saltaire-dogs/src/app/(site)/blog/roberts-park-perfect-dog-walk/RobertsParkPerfectDogWalkClient.tsx
 */

// ---------------------------------------------------------------------------
// Types & helpers
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
// Page component
// ---------------------------------------------------------------------------

export default function RobertsParkPerfectDogWalkClient({ showHero = true }: { showHero?: boolean }) {
  const toc: TocItem[] = useMemo(() => ([
    { id: "intro", label: "Overview", level: 1 },
    { id: "why-roberts-park", label: "Why Roberts Park?", level: 1 },
    { id: "route", label: "Perfect Route", level: 1 },
    { id: "variations", label: "Route Variations (by energy)", level: 1 },
    { id: "timing", label: "Best Timing & Pace", level: 1 },
    { id: "prewalk", label: "Pre-walk Checklist", level: 1 },
    { id: "training", label: "Training & Enrichment (mini-programs)", level: 1 },
    { id: "gear", label: "Gear by Dog Type", level: 1 },
    { id: "troubleshoot", label: "Troubleshooting (noisy, reactive dogs)", level: 1 },
    { id: "safety", label: "Safety Notes", level: 1 },
    { id: "faq", label: "FAQs", level: 1 },
  ]), []);

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Interactive state
  const [energy, setEnergy] = useState<number>(6); // 1-10 energy (for tailoring)
  const [showChecklist, setShowChecklist] = useState(true);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  const readingTime = useMemo(() => "21 min read", []);

  // Derived suggestions from energy level
  const suggested = useMemo(() => {
    if (energy <= 3) return { label: "Short & Calm", minutes: 20, route: "Canal Short Spur" };
    if (energy <= 6) return { label: "Balanced", minutes: 35, route: "Riverside Loop" };
    return { label: "Active Adventure", minutes: 55, route: "Riverside + Hirst Wood Extension" };
  }, [energy]);

  return (
    <main className="min-h-screen bg-white">
      <ProgressBar progress={progress} />

  {showHero && <ArticleHero readingTime={readingTime} />}

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleJsonLdExpanded()),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        <aside className="order-last lg:order-first lg:col-span-3 space-y-6">
  {/* Sticky table of contents */}
 <div>
  <StickyToc toc={toc} activeId={activeId} />
</div>


  {/* Dog energy meter section */}
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="text-sm font-semibold text-slate-900 mb-2">Dog energy meter</div>
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={1}
        max={10}
        value={energy}
        onChange={(e) => setEnergy(Number(e.target.value))}
        className="w-full"
      />
      <div className="w-12 text-right text-xs text-slate-500">{energy}</div>
    </div>
    <div className="mt-3 text-xs text-slate-600">
      Suggested: <span className="font-medium text-emerald-700">{suggested.label}</span>
      <div className="mt-1 text-sm">Try ~{suggested.minutes} mins — {suggested.route}</div>
    </div>

    <div className="mt-4">
      <button
        onClick={() => setShowChecklist((s) => !s)}
        className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 hover:bg-emerald-100"
      >
        {showChecklist ? "Hide" : "Show"} pre-walk checklist
      </button>
    </div>

    {showChecklist && (
      <div className="mt-3 text-xs text-slate-700">
        <ul className="list-disc pl-5 space-y-1">
          <li>Treats (high value, small pieces)</li>
          <li>Short lead (1.2m) + harness</li>
          <li>Portable bowl + water</li>
          <li>Waste bags + small towel</li>
        </ul>
      </div>
    )}
  </div>

  <div className="text-xs text-slate-500">
    Tip: slide to match your dog's current mood — the page updates recommendations.
  </div>
</aside>



        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar />

          <Section id="intro" title="Overview">
            <p>
              Roberts Park is one of Saltaire’s best short-loop walks for dogs — a compact mix of canal towpath, riverside
              scent zones and open lawns. This guide expands the classic route into a friendly, step-by-step plan you can use
              every week: practical timings, breed-aware gear, quick training micro-programmes and troubleshooting for the
              noisy/reactive dog.
            </p>

            <Callout type="success" title="Quick summary — your one-sentence cheat sheet">
              If you only remember one thing: start the Riverside Loop at <strong>07:30</strong> for calm paths, use a short
              lead near bridges, and finish with five minutes of calm reward training before you get coffee.
            </Callout>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="emerald">Short walk — 30–40 mins</Badge>
              <Badge tone="amber">Dog-friendly</Badge>
              <Badge tone="sky">Great for recall practice</Badge>
            </div>
          </Section>

          <Divider />

          <Section id="why-roberts-park" title="Why Roberts Park? The local magic">
            <p>
              Roberts Park packs a lot into a small area: towpath variety, riverside smells, large park lawns and predictable
              access points. That equals stimulation without overwhelm — ideal for dogs that get easily distracted on long
              towpath stretches.
            </p>

            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Varied surfaces:</strong> grass, gravel and stone — great for paw conditioning.</li>
              <li><strong>Controlled water access:</strong> safe spots for supervised splashes.</li>
              <li><strong>Predictable traffic:</strong> many main routes funnel through the park so you can time your quiet stretches.</li>
            </ul>

            <ProTip title="Local charm">
              Salts Mill and the canal benches give natural rest stops — perfect for five-minute recall drills and calm down-time.
            </ProTip>
          </Section>

          <Divider />

          <Section id="route" title="Perfect Route — step by step (with playful notes)">
            <p>
              Below is a detailed, annotated loop. Think of it like a recipe — follow the steps, add treats, and enjoy the
              results (tail-wagging guaranteed).
            </p>

            <OrderedSteps />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <RouteCard
                name="Roberts Park Riverside Loop"
                distanceKm={2.1}
                durationMin={35}
                difficulty="Easy"
                highlights={["Water access", "Open lawns", "Low-gradient paths"]}
                mapHint="Start at Salts Mill, head to the riverside, follow the towpath west, return via the park inner loop."
              />
              <RouteCard
                name="Canal Short Spur"
                distanceKm={1.2}
                durationMin={20}
                difficulty="Easy"
                highlights={["Towpath sniffing", "Benches", "Quick recall practice"]}
                mapHint="From the park, hop onto the canal for a short out-and-back to avoid the main footfall stretch."
              />
              <RouteCard
                name="Riverside + Hirst Wood Extension"
                distanceKm={4.0}
                durationMin={55}
                difficulty="Moderate"
                highlights={["Woodland sniffs", "Longer fetch options", "Varied terrain"]}
                mapHint="Extend west along the canal to the footpath entrance for Hirst Wood and return through the woodland loop."
              />
            </div>

            <ImageFrame
              src="/images/blog/roberts-park-loop-hero.jpg"
              alt="Roberts Park riverside loop in golden light"
              caption="The Riverside Loop: compact and rich for shorter, engaging walks."
            />
          </Section>

          <Divider />

          <Section id="variations" title="Route Variations (tailored to energy & dog type)">
            <p>
              Use the energy meter (sidebar) to pick a variation. Below are quick cheat options so you can adapt on the fly.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <VariationCard
                title="Low energy / Senior dog"
                minutes={20}
                blurb="Stick to the Canal Short Spur — short scents, easy benches, and slow pace."
                badge="gentle"
              />
              <VariationCard
                title="Balanced / typical adult dog"
                minutes={35}
                blurb="Classic Riverside Loop with two short recall reps and a 3-min sniff break."
                badge="balanced"
              />
              <VariationCard
                title="High energy / working breeds"
                minutes={55}
                blurb="Add the Hirst Wood extension and 10 mins of fetch/play on the open lawn."
                badge="active"
              />
            </div>

            <ProTip title="Quick cadence tip">
              Rhythm = calmness. Use repeated patterns (walk, sniff, reward) to channel arousal into predictable bursts.
            </ProTip>
          </Section>

          <Divider />

          <Section id="timing" title="Best Timing & Pace (SEO-friendly headings)">
            <p>
              Timing is everything. Roberts Park has crowd rhythms tied to café opening hours and canal visitors.
              Choosing the right minute window makes your walks calmer and more productive for training.
            </p>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">Weekday windows</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li><strong>Early morning (07:00–09:00)</strong> — quiet, cool and excellent for recall practice.</li>
              <li><strong>Lunchtime (12:30–14:00)</strong> — moderate footfall; good for confident dogs.</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">Weekend windows</h3>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li><strong>Early bird (07:30–09:00)</strong> — best avoidance window for families and café crowds.</li>
              <li><strong>Late afternoon (15:30–17:00)</strong> — crowds thin as people head home.</li>
            </ul>

            <Heatmap />
          </Section>

          <Divider />

          <Section id="prewalk" title="Pre-walk Checklist & mini-ritual">
            <p>
              Tiny rituals make the biggest difference. Below is a short checklist and a quick calming routine you can do
              before you head out.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-amber-50 p-4">
                <h4 className="text-sm font-semibold text-amber-800">Checklist</h4>
                <ul className="mt-2 list-disc pl-5 text-amber-900">
                  <li>Treats (pea-sized)</li>
                  <li>Short lead + harness</li>
                  <li>Water + bowl</li>
                  <li>Waste bags</li>
                  <li>Foldable mat (for café)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-sky-50 p-4">
                <h4 className="text-sm font-semibold text-sky-800">Calming ritual (90 seconds)</h4>
                <ol className="mt-2 list-decimal pl-5 text-sky-900">
                  <li>Five calm breaths together (owner slow, dog feels this).</li>
                  <li>Name + eye contact + treat (2 reps).</li>
                  <li>Clip lead, step out with a relaxed posture.</li>
                </ol>
              </div>
            </div>
          </Section>

          <Divider />

          <Section id="training" title="Training & Enrichment (mini-programs)">
            <p>
              Short, focused drills in the middle of a walk are massively effective. Here are three micro-programmes you can
              slot into the Riverside Loop — each one is 5–7 minutes and designed for quick wins.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ProgramCard
                title="Impulse control (beginners)"
                bullets={[
                  "5 x sit-stays (10s) with high-value treat",
                  "Reward calm body language",
                  "Finish with a calm walk for 2 minutes",
                ]}
              />
              <ProgramCard
                title="Recall 2.0 (intermediate)"
                bullets={[
                  "Short line recall (5 reps), increasing distance",
                  "Add a distraction (move 3 steps) then call",
                  "Praise + treat, then release back to sniffing",
                ]}
              />
              <ProgramCard
                title="Scent game (fun)"
                bullets={[
                  "Three buried-treat finds in a 10m area",
                  "Add enthusiastic praise and a 30s free sniff",
                  "End on calm sit + reward",
                ]}
              />
            </div>

            <Callout type="info" title="Trainer tip">
              Always finish a training rep on success — end early if the dog gets frustrated and try again later.
            </Callout>
          </Section>

           

          <Divider />

          <Section id="gear" title="Gear — what to bring depending on your dog">
            <p>
              One-size-does-not-fit-all. Below are gear suggestions tuned to common dog types you’ll see in Saltaire.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
              <GearCard title="Small / senior dogs" bullets={["Lightweight harness", "Soft padded lead", "Insulated mat"]} />
              <GearCard title="Medium family dogs" bullets={["Dual-clip harness", "1.2m lead", "Treat pouch + toys"]} />
              <GearCard title="Working / high-energy" bullets={["Sturdy harness", "Long line for recall", "High-value treats"]} />
            </div>
          </Section>

          <Divider />

          <Section id="troubleshoot" title="Troubleshooting — noisy, reactive or anxious dogs">
            <p>
              Not every walk is smooth. Here are evidence-based steps to de-escalate tension and keep walks safe for everyone.
            </p>

            <h4 className="mt-3 font-semibold text-slate-900">If your dog gets noisy</h4>
            <ol className="mt-2 list-decimal pl-5 text-slate-700 space-y-2">
              <li>Move away calmly — distance is your friend.</li>
              <li>Use a focus or name cue + treat to redirect attention.</li>
              <li>Shorten the walk and try again tomorrow with an earlier window.</li>
            </ol>

            <h4 className="mt-3 font-semibold text-slate-900">If your dog lunges/reacts</h4>
            <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-2">
              <li>Keep a relaxed body and avoid pulling — collapse of tension helps dogs relax.</li>
              <li>Use an angled approach to move past the trigger rather than direct eye contact.</li>
              <li>Consider a professional assessment if reactivity persists.</li>
            </ul>

            <Callout type="warning" title="Serious concerns">
              If your dog shows sustained aggression, seek professional behaviour help — safety first.
            </Callout>
          </Section>

          <Divider />

          <Section id="safety" title="Safety Notes">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lead control:</strong> keep a short lead crossing bridges and near the locks.</li>
              <li><strong>Wildlife:</strong> watch for swans and geese near the river — keep distance and reward calm.</li>
              <li><strong>Footwear & footing:</strong> towpath stones can be slippery when wet — slow down and step carefully.</li>
              <li><strong>Weather:</strong> avoid hot surfaces, check for ice and always have water in warm months.</li>
            </ul>

            <ProTip title="Emergency pins">
              Choose a meeting point (Salts Mill main entrance) and share it with walking companions.
            </ProTip>
          </Section>

          <Divider />

          <Section id="faq" title="FAQs — everything people actually ask">
            <FaqExtended />
          </Section>

          <BottomCta />
          <AuthorCard authorName="Saltaire Dog Walks" />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
            >
              <Icon.Share className="h-4 w-4" /> {copied ? "Link copied" : "Copy link"}
            </button>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
            >
              <Icon.Print className="h-4 w-4" /> Print
            </button>

            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Contact us
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// Subcomponents (kept local for now)
// ---------------------------------------------------------------------------

function Badge({ children, tone = "emerald" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "sky" }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-800",
    sky: "bg-sky-100 text-sky-700",
  };
  return <span className={classNames("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", map[tone])}>{children}</span>;
}

function OrderedSteps() {
  const steps = [
    { title: "Prep & calm", text: "90s breathing + two name-and-treat eye contact reps." },
    { title: "Start slow", text: "Begin on the inner park loop — let sniffing lead for 8–10 minutes." },
    { title: "Recall reps", text: "Move to the towpath, do 3 short recall reps (call, prize, release)." },
    { title: "Enrichment spot", text: "Pick a low-traffic lawn for a 3-minute scent hunt or toy play." },
    { title: "Wind-down", text: "Finish with 3 minutes of calm walking and a treat reward at home." },
  ];
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

function VariationCard({ title, minutes, blurb, badge }: { title: string; minutes: number; blurb: string; badge: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
        <div className="text-xs text-slate-500">{minutes} min</div>
      </div>
      <p className="mt-2 text-sm text-slate-700">{blurb}</p>
      <div className="mt-3"><Badge tone={badge === "active" ? "amber" : badge === "gentle" ? "sky" : "emerald"}>{badge}</Badge></div>
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

function RouteCard({ name, distanceKm, durationMin, difficulty, highlights, mapHint }: {
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
  <Link href="/contact" className="text-sm text-slate-700 hover:text-slate-900">Get in touch</Link>
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

function FaqExtended() {
  const items = [
    {
      q: "How long is the Riverside Loop?",
      a: "About 2.1 km — fits into a 30–40 minute relaxed walk with a few training reps.",
    },
    {
      q: "Can I let my dog off lead?",
      a: "Use open lawns away from the towpath and be mindful of other users; always recall on command.",
    },
    {
      q: "What if my dog pulls on the lead?",
      a: "Switch to a front-clip harness for short recall drills, reward slack lead walking, and keep reps short.",
    },
    {
      q: "Any cafés that welcome dogs?",
      a: "Many terraces are dog-friendly — bring a mat and ask staff politely before seating inside.",
    },
    {
      q: "Is there parking nearby?",
      a: "There are short-stay car parks near Salts Mill and limited roadside parking; aim for early windows to avoid crowds.",
    },
    {
      q: "Can I use the route for group walks?",
      a: "Yes — keep groups small (4–6 dogs) and schedule outside peak café times to reduce stress.",
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
          <h3 className="text-2xl font-bold">Try the Riverside Loop this week</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">Book a guided walk and get personalised route tips for your dog.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset ring-white/30 hover:bg-white/20">
            Contact us
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50">
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
      <div className="h-12 w-12 rounded-full bg-emerald-200" />
      <div>
        <div className="text-sm font-semibold text-slate-900">{authorName}</div>
        <div className="text-xs text-slate-600">Dog walker & Saltaire local • First aid trained</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Article hero, toc, progress and smaller helpers (kept local)
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
      {/* Background image */}
      <div
        className="absolute inset-5 -z-10 opacity-50 bg-cover bg-center"
        style={{
          backgroundImage: "url('/saltaire-dog-river.png')",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-emerald-200">
              Route Guide
            </span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-800 text-xs font-semibold animate-pulse">New</span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Roberts Park — The Perfect Dog Walk (expanded)
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            A friendly, practical and playful deep-dive into the best 30–60 minute loop for enrichment, training, and calm exercise in Saltaire.
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
    <nav className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

// ---------------------------------------------------------------------------
// SEO — richer JSON-LD for the expanded article
// ---------------------------------------------------------------------------

function getArticleJsonLdExpanded() {
  const url = typeof window !== "undefined" ? window.location.href : "https://example.com/blog/roberts-park-perfect-dog-walk";
  const published = "2024-08-22";
  const modified = "2025-10-08";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: "Roberts Park — The Perfect Dog Walk (expanded)",
    description:
      "An expanded 2025 guide to Roberts Park: step-by-step route, timing windows, breed-aware gear, micro-training programmes, troubleshooting and safety. Perfect for dog owners in Saltaire and nearby.",
    image: ["https://example.com/images/blog/roberts-park-loop-hero.jpg"],
    datePublished: published,
    dateModified: modified,
    author: {
      "@type": "Organization",
      name: "Saltaire Dog Walks",
    },
    publisher: {
      "@type": "Organization",
      name: "Saltaire Dogs",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/images/logo.png",
      },
    },
    keywords: "Saltaire, Roberts Park, dog walking, dog training, canal, quiet walks, Saltaire dogs",
  } as const;
}
