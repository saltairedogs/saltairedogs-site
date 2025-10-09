"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/**
 * PerfectRecallClient.tsx
 * Professional, advanced recall-training guide:
 *  - Sticky table of contents + reading progress bar
 *  - Hero with subtle background image + meta strip
 *  - Sidebar: Recall Readiness Quiz, Reinforcement Calculator
 *  - Guided 3-minute drill timer (micro-sessions)
 *  - Progressive week plans (Beginner → Advanced) with toggles
 *  - Distraction heatmap + environment ranking
 *  - Troubleshooting (common failure modes) with actions
 *  - Equipment suggestions with rationale
 *  - Resource links (reputable training orgs & reading)
 *  - FAQs, CTA, Author card
 *  - SEO JSON-LD: Article + HowTo rich snippets
 *
 * Tailwind only. No external component libs.
 */

// ---------------------------------------------------------------------------
// Types & helpers
// ---------------------------------------------------------------------------

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const Icon = {
  Clock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
  Eye: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Share: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 6l-4-4-4 4M12 2v14" />
    </svg>
  ),
  Link: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 2a4 4 0 105.657 5.657l2-2M14 10l2-2a4 4 0 10-5.657-5.657l-2 2" />
    </svg>
  ),
  Print: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7" />
      <rect x="6" y="13" width="12" height="9" rx="2" />
      <path d="M6 17h12" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  Info: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Alert: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  ),
  Star: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={p.className}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.7 5.8 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  ),
  Sound: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M11 5l-4 4H4v6h3l4 4z" />
      <path d="M15.54 8.46a5 5 0 010 7.07M19.07 5a9 9 0 010 12.73" />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PerfectRecallClient({
  showHero = true,
  stickyToc = true,
}: {
  showHero?: boolean
  stickyToc?: boolean
}) {
  const toc: TocItem[] = useMemo(() => ([
    { id: "intro", label: "Overview", level: 1 },
    { id: "principles", label: "Recall Principles", level: 1 },
    { id: "readiness", label: "Readiness Quiz", level: 1 },
    { id: "howto", label: "How to Teach Recall", level: 1 },
    { id: "drills", label: "3-Min Drills", level: 1 },
    { id: "weekplans", label: "4-Week Plans", level: 1 },
    { id: "environments", label: "Distraction Heatmap", level: 1 },
    { id: "equipment", label: "Equipment & Rewards", level: 1 },
    { id: "troubleshooting", label: "Troubleshooting", level: 1 },
    { id: "resources", label: "Resources", level: 1 },
    { id: "faq", label: "FAQs", level: 1 },
  ]), []);

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Sidebar state
  const [quiz, setQuiz] = useState({
    nameResponse: 2, // 0-3 (never → always)
    leadSlack: 1,
    treatValue: 2,
    environmentalInterest: 1,
    startLine: 1,
  });
  const [reinforcer, setReinforcer] = useState({
    value: 3, // 1–5
    ratePerMinute: 6,
    sessionMinutes: 3,
  });
  const [whistleTone, setWhistleTone] = useState<440 | 520 | 560 | 590 | 620>(520);
  const [timer, setTimer] = useState({ secs: 180, running: false });
  const [copied, setCopied] = useState(false);

  // Scroll tracking
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

  // Timer
  useEffect(() => {
    if (!timer.running || timer.secs <= 0) return;
    const id = setInterval(() => setTimer((t) => ({ ...t, secs: Math.max(0, t.secs - 1) })), 1000);
    return () => clearInterval(id);
  }, [timer.running, timer.secs]);

  const readinessScore = useMemo(() => {
    const raw =
      quiz.nameResponse * 3 +
      quiz.leadSlack * 2 +
      quiz.treatValue * 3 +
      (3 - quiz.environmentalInterest) * 2 +
      quiz.startLine * 2;
    return Math.max(0, Math.min(30, raw));
  }, [quiz]);

  const readinessLabel = useMemo(() => {
    if (readinessScore >= 24) return { label: "Ready for Stage 2 (Distance)", tone: "emerald" as const };
    if (readinessScore >= 16) return { label: "Stage 1+ (Room/Garden)", tone: "sky" as const };
    return { label: "Foundation (Home first)", tone: "amber" as const };
  }, [readinessScore]);

  const readingTime = useMemo(() => "16 min read", []);
  const timerMMSS = useMemo(() => {
    const m = Math.floor(timer.secs / 60);
    const s = timer.secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }, [timer.secs]);

  const totalRewards = useMemo(
    () => reinforcer.ratePerMinute * Math.ceil(reinforcer.sessionMinutes),
    [reinforcer.ratePerMinute, reinforcer.sessionMinutes]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-white">
      <ProgressBar progress={progress} />
      {showHero && <ArticleHero readingTime={readingTime} />}

      {/* Structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(readinessLabel.label)) }}
      />

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Sidebar */}
        <aside className="order-last lg:order-first lg:col-span-3 space-y-6">
          <StickyToc toc={toc} activeId={activeId} sticky={stickyToc} />

          {/* Readiness card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Recall Readiness Quiz</div>
            <div className="mt-1 text-xs text-slate-500">Rate each item (0–3). The panel suggests where to start.</div>

            <QuizRow
              label="Looks at you when name is said"
              value={quiz.nameResponse}
              onChange={(v) => setQuiz((s) => ({ ...s, nameResponse: v }))}
            />
            <QuizRow
              label="Walks with a loose lead at home"
              value={quiz.leadSlack}
              onChange={(v) => setQuiz((s) => ({ ...s, leadSlack: v }))}
            />
            <QuizRow
              label="Treat value (highly interested)"
              value={quiz.treatValue}
              onChange={(v) => setQuiz((s) => ({ ...s, treatValue: v }))}
            />
            <QuizRow
              label="Environmental pull (lower is better)"
              value={quiz.environmentalInterest}
              onChange={(v) => setQuiz((s) => ({ ...s, environmentalInterest: v }))}
              invert
            />
            <QuizRow
              label="Starts sessions calmly (2-3 breaths)"
              value={quiz.startLine}
              onChange={(v) => setQuiz((s) => ({ ...s, startLine: v }))}
            />

            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-slate-700">Score</div>
              <div className="rounded-md bg-slate-50 px-2 py-0.5 text-sm font-semibold">{readinessScore}/30</div>
            </div>
            <div className="mt-2">
              <Badge tone={readinessLabel.tone}>{readinessLabel.label}</Badge>
            </div>
          </div>

          {/* Reinforcement calc */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Reinforcement Calculator</div>
            <div className="mt-1 text-xs text-slate-500">Plan enough rewards per micro-session.</div>

            <CalcRow
              label="Treat value"
              description="1=meh, 5=wow"
              value={reinforcer.value}
              onChange={(v) => setReinforcer((s) => ({ ...s, value: v }))}
              min={1}
              max={5}
            />
            <CalcRow
              label="Rate per minute"
              description="treats/min"
              value={reinforcer.ratePerMinute}
              onChange={(v) => setReinforcer((s) => ({ ...s, ratePerMinute: v }))}
              min={2}
              max={12}
            />
            <CalcRow
              label="Session minutes"
              value={reinforcer.sessionMinutes}
              onChange={(v) => setReinforcer((s) => ({ ...s, sessionMinutes: v }))}
              min={1}
              max={5}
            />

            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-slate-700">Bring at least</div>
              <div className="rounded-md bg-emerald-50 px-2 py-0.5 text-sm font-semibold text-emerald-900">
                {totalRewards} rewards
              </div>
            </div>
          </div>

          {/* Whistle tone */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Whistle Frequency</div>
            <div className="mt-1 text-xs text-slate-500">Choose a consistent tone to avoid cue conflict.</div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[440, 520, 560, 590, 620].map((hz) => (
                <button
                  key={hz}
                  className={classNames(
                    "rounded-md border px-2 py-1 text-sm",
                    whistleTone === hz
                      ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  )}
                  onClick={() => setWhistleTone(hz as typeof whistleTone)}
                  title={`${hz} Hz`}
                >
                  {hz} Hz
                </button>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
              <Icon.Sound className="h-4 w-4" />
              2 short peeps = “come”, 1 long = “stop & look”
            </div>
          </div>
        </aside>

        {/* Article */}
        <article ref={articleRef} className="lg:col-span-9">
          <TopMetaBar />

          {/* Overview */}
          <Section id="intro" title="Perfect Recall Training Guide — reliable, kind, and practical">
            <p>
              Recall is a safety skill first, party trick second. This guide gives you a clear, progressive plan that builds
              a “Drop Everything & Come” response using positive reinforcement, tight criteria, and clever environment
              choices. Expect calm, short sessions and a lot of tiny wins.
            </p>
            <Callout type="success" title="TL;DR">
              Train in 3-minute bursts, start at home, use <strong>amazing</strong> rewards, and raise criteria only when
              your success rate is 80%+. If it breaks, shrink difficulty, pay better, try again.
            </Callout>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="emerald">Force-free</Badge>
              <Badge tone="sky">3-min drills</Badge>
              <Badge tone="amber">Safety first</Badge>
            </div>
          </Section>

          <Divider />

          {/* Principles */}
          <Section id="principles" title="Recall Principles (what actually makes it stick)">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Predictability:</strong> your cue must always pay better than the environment (at first).</li>
              <li><strong>Clean cue:</strong> pick one cue (whistle or word) and protect it from background chatter.</li>
              <li><strong>Short & sweet:</strong> end sessions with dopamine left in the tank.</li>
              <li><strong>80% rule:</strong> raise criteria only when you can bet on success.</li>
              <li><strong>Distraction ladder:</strong> home → garden → quiet field → park edges → paths → busy areas.</li>
            </ul>
            <ProTip title="Bank runs">
              Do 10–20 easy recalls a day around the house. These are low-cost “bank deposits” that power outdoor reliability later.
            </ProTip>
          </Section>

          <Divider />

          {/* Readiness (inside article for anchors) */}
          <Section id="readiness" title="Readiness — where to start today">
            <p>
              Your sidebar quiz suggests a starting lane. Foundations happen indoors; distance and distractions come later. If
              your dog struggles, lower one variable at a time: <em>distance</em>, <em>distraction</em>, or <em>delay</em>.
            </p>
            <div className="mt-2"><Badge tone={readinessLabel.tone}>Suggested: {readinessLabel.label}</Badge></div>
          </Section>

          <Divider />

          {/* How To */}
          <Section id="howto" title="How to Teach Recall (the clean sequence)">
            <ol className="list-decimal pl-6 space-y-3 text-slate-700">
              <li><strong>Charge the marker:</strong> say “Yes!” → treat (10 reps). Build that promise.</li>
              <li><strong>Pair the cue:</strong> say your cue, then deliver 3–5 rapid treats at your knee (“jackpot”).</li>
              <li><strong>Short distance:</strong> step back 1–2m, cue once, <em>move backwards</em> happily, feed at your knee.</li>
              <li><strong>Add delay:</strong> pause 1–2s after the cue before you move, then reward at your knee.</li>
              <li><strong>Proofing:</strong> one variable at a time: distance → mild distraction → mild distance + distraction.</li>
              <li><strong>Emergency recall:</strong> teach a separate, once-a-week cue that <em>always</em> pays huge (never squander it).</li>
            </ol>

            <HowToGrid />

            <Callout type="info" title="Protect your cue">
              Avoid repeating. If your dog hesitates, you raised criteria too far or the reward isn’t big enough <em>today</em>.
            </Callout>
          </Section>

          <Divider />

          {/* 3-min drills + timer */}
          <Section id="drills" title="3-Minute Drills (set a timer, get wins)">
            <p>
              Micro-sessions prevent frustration, keep the food value high, and let you slot training between life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">Session timer</div>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 text-2xl font-semibold tracking-wider">{timerMMSS}</div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {!timer.running ? (
                    <button
                      onClick={() => setTimer((t) => ({ ...t, running: true }))}
                      className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={() => setTimer((t) => ({ ...t, running: false }))}
                      className="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-amber-600"
                    >
                      Pause
                    </button>
                  )}
                  <button
                    onClick={() => setTimer({ secs: 180, running: false })}
                    className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-slate-50"
                  >
                    Reset
                  </button>
                </div>
                <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                  <li>10–15 easy recalls in the first minute (home/garden).</li>
                  <li>1–2 mild distractions in minute two (toy on floor, person standing).</li>
                  <li>Finish with 1 emergency-cue rep (jackpot), then stop.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-emerald-50/50 p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-emerald-900">Session structure</h4>
                <ul className="mt-2 list-disc pl-5 text-emerald-900/90 space-y-1 text-sm">
                  <li>Start with 2 calm breaths together.</li>
                  <li>Use your chosen whistle tone: two short peeps for recall.</li>
                  <li>Pay at your knee, then released back to sniff/freedom as a bonus reward.</li>
                </ul>
                <ProTip title="Recall → release">
                  The environment can be a reward. “Come → treat → go sniff” teaches your dog you’re a gateway to the good stuff.
                </ProTip>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <DrillCard title="Home Hallway Sprints" level="Foundation" bullets={["5m distance", "No distractions", "Pay high & fast"]} />
              <DrillCard title="Garden Angle Game" level="Stage 1" bullets={["Call → run past you", "Turn, call again", "Make it fun"]} />
              <DrillCard title="Park Edge Ping-Pong" level="Stage 2" bullets={["Buddy 10m apart", "Alternate calls", "Release to sniff between"]} />
            </div>
          </Section>

          <Divider />

          {/* Week plans */}
          <Section id="weekplans" title="Progressive 4-Week Plans (choose your lane)">
            <p>
              Pick one plan below that matches your readiness badge. You can move up when you’re hitting 80% success for two consecutive days.
            </p>

            <WeekPlanTabs />
          </Section>

          <Divider />

          {/* Environments */}
          <Section id="environments" title="Distraction Heatmap (choose smart battlegrounds)">
            <p>
              Location choice wins or loses recall. Start light, then step into the breeze. Here’s a simple “busyness”
              heatmap by hour that you can adapt to your area.
            </p>
            <Heatmap />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <EnvCard title="Home / Hall" score={1} notes="Controlled, boring, perfect for first reps." />
              <EnvCard title="Garden / Quiet Green" score={2} notes="Mild smells, few people; add small distance." />
              <EnvCard title="Park Edge Path" score={3} notes="Occasional joggers/cyclists; use distance cleverly." />
              <EnvCard title="Main Towpath" score={4} notes="Unpredictable; keep sessions very short and pay big." />
              <EnvCard title="Busy Park Hub" score={5} notes="Advanced proofing only; emergency cue readiness." />
              <EnvCard title="Wildlife Areas" score={5} notes="Plan exits; avoid if you can’t guarantee success." />
            </div>
          </Section>

          <Divider />

          {/* Equipment */}
          <Section id="equipment" title="Equipment & Reward Strategy">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GearCard title="Long Line (10–15m)" bullets={["Safety while proofing", "Clip to back of harness", "Never to a collar"]} />
              <GearCard title="Dual-Clip Harness" bullets={["Front clip for control", "Back clip for long line", "No pressure on neck"]} />
              <GearCard title="High-Value Treats" bullets={["Tiny + soft", "Chicken/cheese/sausage", "Keep it novel & rotate"]} />
            </div>
            <Callout type="warning" title="Skip retractables for recall training">
              They teach constant tension and are risky near bikes or crowds. Long lines + technique are safer and clearer.
            </Callout>
          </Section>

          <Divider />

          {/* Troubleshooting */}
          <Section id="troubleshooting" title="Troubleshooting — common failure modes">
            <TroublesAccordion />
            <ProTip title="Three dials">
              When things wobble, lower one dial: distance, distraction, or delay. Don’t drop all three unless needed.
            </ProTip>
          </Section>

          <Divider />

          {/* Resources */}
          <Section id="resources" title="Further Reading & Reputable Resources">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link className="text-emerald-700 hover:text-emerald-800" href="https://apdt.co.uk" target="_blank">APDT (UK)</Link> — trainer directory, positive methods.
              </li>
              <li>
                <Link className="text-emerald-700 hover:text-emerald-800" href="https://www.imdt.uk.com" target="_blank">IMDT</Link> — courses, articles, local trainers.
              </li>
              <li>
                <Link className="text-emerald-700 hover:text-emerald-800" href="https://www.bluecross.org.uk/pet-advice/recall-training" target="_blank">Blue Cross — recall training</Link> — clear public guidance.
              </li>
              <li>
                <Link className="text-emerald-700 hover:text-emerald-800" href="/blog/puppy-first-walk-checklist">Puppy First Walk Checklist</Link> — set great habits early.
              </li>
            </ul>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section id="faq" title="Recall FAQs">
            <Faq />
          </Section>

          {/* Footer actions */}
          <BottomCta />
          <AuthorCard />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionButton onClick={handleCopy} icon={<Icon.Link className="h-4 w-4" />}>
              {copied ? "Link copied" : "Copy link"}
            </ActionButton>
            <ActionButton onClick={() => window.print()} icon={<Icon.Print className="h-4 w-4" />}>Print</ActionButton>
            <ActionButton
              onClick={() => navigator.share?.({ title: document.title, url: window.location.href })}
              icon={<Icon.Share className="h-4 w-4" />}
            >
              Share
            </ActionButton>
          </div>
        </article>
      </div>
    </main>
  );
}

// ---------------------------------------------------------------------------
// UI bits
// ---------------------------------------------------------------------------

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="sticky top-0 z-40 h-1 w-full bg-emerald-100">
      <div className="h-full bg-emerald-600 transition-[width] duration-150" style={{ width: `${Math.round(progress * 100)}%` }} />
    </div>
  );
}

function ArticleHero({ readingTime }: { readingTime: string }) {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div
        className="absolute inset-5 -z-10 opacity-50 bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/saltaire-dog-river.png')" }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-emerald-200">
            Training Guide
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Perfect Recall Training Guide
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Build a rock-solid “come” with 3-minute drills, smart environments and rewards your dog will sprint for.
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

function StickyToc({
  toc,
  activeId,
  sticky = true,
}: {
  toc: TocItem[]
  activeId: string
  sticky?: boolean
}) {
  return (
    <nav
      className={
        (sticky ? 'lg:sticky lg:top-20 ' : '') +
        'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'
      }
    >
      ...
    </nav>
  )
}

function TopMetaBar() {
  const date = useMemo(
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

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      <div className="prose prose-slate max-w-none prose-a:text-emerald-700 prose-strong:text-slate-900 mt-4">
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10 border-slate-200" />;
}

function Callout({ type, title, children }: { type: "success" | "warning" | "info"; title: string; children: React.ReactNode }) {
  const palette = {
    success: { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-900", icon: <Icon.Check className="h-4 w-4" /> },
    warning: { bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-900", icon: <Icon.Alert className="h-4 w-4" /> },
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

function Badge({ children, tone = "emerald" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "sky" }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-800",
    sky: "bg-sky-100 text-sky-700",
  };
  return <span className={classNames("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold", map[tone])}>{children}</span>;
}

// Sidebar rows
function QuizRow({ label, value, onChange, invert = false }: { label: string; value: number; onChange: (v: number) => void; invert?: boolean }) {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-sm">
        <div className="text-slate-800">{label}</div>
        <div className="text-xs text-slate-500">{invert ? "0=high pull, 3=low" : "0=never, 3=always"}</div>
      </div>
      <input
        type="range"
        min={0}
        max={3}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full"
      />
      <div className="mt-1 text-right text-xs text-slate-500">{value}</div>
    </div>
  );
}

function CalcRow({
  label,
  description,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  description?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-sm">
        <div className="text-slate-800">{label}</div>
        {description && <div className="text-xs text-slate-500">{description}</div>}
      </div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" />
      <div className="mt-1 text-right text-xs text-slate-500">{value}</div>
    </div>
  );
}

function DrillCard({ title, level, bullets }: { title: string; level: "Foundation" | "Stage 1" | "Stage 2"; bullets: string[] }) {
  const tone = level === "Foundation" ? "bg-sky-50 text-sky-800 ring-sky-200" : level === "Stage 1" ? "bg-emerald-50 text-emerald-800 ring-emerald-200" : "bg-amber-50 text-amber-800 ring-amber-200";
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <span className={classNames("rounded-full px-2 py-1 text-[11px] font-semibold ring-1", tone)}>{level}</span>
      </div>
      <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
        {bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

function HowToGrid() {
  const items = [
    { step: 1, title: "Pick one cue", text: "Word or whistle. Don’t mix. Protect it from casual use." },
    { step: 2, title: "Prime the value", text: "Cue → rapid treat stream at your knee. 5–10 reps." },
    { step: 3, title: "Add tiny distance", text: "Take 1–2 steps away, cue once, move backwards, pay big." },
    { step: 4, title: "Add delay", text: "Cue, wait 1–2 seconds, then move; reward when the dog commits." },
    { step: 5, title: "Distraction ladder", text: "Garden → quiet green → park edge → path. One rung at a time." },
    { step: 6, title: "Emergency cue", text: "Different sound/word. Use sparingly. Always jackpot + release." },
  ];
  return (
    <div className="not-prose mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((it) => (
        <div key={it.step} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700 ring-1 ring-emerald-200">{it.step}</div>
            <div className="font-semibold text-slate-900">{it.title}</div>
          </div>
          <p className="mt-2 text-sm text-slate-700">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

function WeekPlanTabs() {
  const [tab, setTab] = useState<"foundation" | "stage1" | "stage2">("foundation");
  return (
    <div className="not-prose mt-4">
      <div className="inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
        <TabBtn id="foundation" current={tab} onClick={setTab}>Foundation</TabBtn>
        <TabBtn id="stage1" current={tab} onClick={setTab}>Stage 1</TabBtn>
        <TabBtn id="stage2" current={tab} onClick={setTab}>Stage 2</TabBtn>
      </div>

      {tab === "foundation" && <WeekPlan
        title="Foundation (Home → Garden)"
        weeks={[
          ["Mon", "10 hallway recalls + 3 jackpot releases"],
          ["Tue", "Two 3-min sessions: living room, then garden door open"],
          ["Wed", "Add 1s delay after cue; 80% success then continue"],
          ["Thu", "Garden with mild sound (TV low)"],
          ["Fri", "Garden with person standing 5m away"],
          ["Sat", "Emergency cue once + huge jackpot + release"],
          ["Sun", "Review; note success rate; rest if <80%"],
        ]}
      />}

      {tab === "stage1" && <WeekPlan
        title="Stage 1 (Garden → Quiet Green)"
        weeks={[
          ["Mon", "Garden 3-min morning; quiet green 3-min evening (on long line)"],
          ["Tue", "Add 5m distance. If fails twice, halve it."],
          ["Wed", "Park edge 2-min exposure: 1 successful recall, go home"],
          ["Thu", "Ping-pong recalls with helper 8–10m apart"],
          ["Fri", "Introduce mild moving distraction (person walking past)"],
          ["Sat", "Emergency cue once (jackpot + sniff release)"],
          ["Sun", "Light day; 10 house recalls; log wins"],
        ]}
      />}

      {tab === "stage2" && <WeekPlan
        title="Stage 2 (Path → Busy Zones, proofing)"
        weeks={[
          ["Mon", "Path with cyclists far (20m). 3-min micro-session."],
          ["Tue", "Reduce distance to cyclists to 15m if 80%+."],
          ["Wed", "Add wildlife zone at a distance. One success, then leave."],
          ["Thu", "Alternate recalls with freedom to sniff (variable reward)"],
          ["Fri", "2 jackpots today for superb response time"],
          ["Sat", "Emergency cue in a safe moment; huge celebration"],
          ["Sun", "Rest / play day; no pressure, just fun"],
        ]}
      />}
    </div>
  );
}

function TabBtn({ id, current, onClick, children }: { id: "foundation" | "stage1" | "stage2"; current: string; onClick: (t: any) => void; children: React.ReactNode }) {
  const active = current === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={classNames(
        "rounded-lg px-3 py-1.5 text-sm font-semibold",
        active ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-800"
      )}
    >
      {children}
    </button>
  );
}

function WeekPlan({ title, weeks }: { title: string; weeks: [string, string][] }) {
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <table className="mt-3 w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2 font-medium">Day</th>
            <th className="py-2 font-medium">Plan</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map(([d, plan]) => (
            <tr key={d} className="border-t border-slate-100">
              <td className="py-2 text-slate-700">{d}</td>
              <td className="py-2 text-slate-800">{plan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

function EnvCard({ title, score, notes }: { title: string; score: 1 | 2 | 3 | 4 | 5; notes: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon.Star key={i} className={classNames("h-4 w-4", i < score ? "text-amber-400" : "text-slate-200")} />
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-700">{notes}</p>
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

function TroublesAccordion() {
  const items = [
    {
      q: "Dog ignores recall around other dogs",
      a: (
        <>
          Lower distance to dogs until you’re back to 80% success. Use <em>sniff release</em> as a bonus reward: come → treat → “go say hi” if safe.
        </>
      ),
    },
    {
      q: "Only comes with food visible",
      a: (
        <>
          Switch to <strong>after-payment</strong>: cue → come → then hand dips to pouch. Mix in toys/play + environmental rewards to diversify pay.
        </>
      ),
    },
    {
      q: "Runs past you, doesn’t stop",
      a: (
        <>
          Pay at your knee or behind your legs. Add a <em>target hand</em> near your thigh; feed at that spot so the dog fully docks.
        </>
      ),
    },
    {
      q: "Bolts to wildlife",
      a: (
        <>
          That’s an emergency-cue scenario. Train at a longer distance first; if it happens, use your emergency cue once, pay huge, end session, rethink criteria.
        </>
      ),
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

function Faq() {
  const items = [
    { q: "Can I use the dog’s name as the recall cue?", a: "You can, but separating ‘name’ (look at me) from ‘come’ (move to me) keeps cues clearer." },
    { q: "How long until recall is reliable?", a: "Expect weeks, not days. With daily micro-sessions and smart environments, you’ll see strong gains in 2–4 weeks." },
    { q: "What about e-collars?", a: "We do not recommend aversive tools. They risk fallout and degrade relationship. Positive methods produce durable, happy behaviour." },
    { q: "Should I recall from play?", a: "Yes, but pay brilliantly and release back to play often so recall doesn’t predict the end of fun." },
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
          <h3 className="text-2xl font-bold">Want personalised recall help?</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">
            We run one-to-one recall sessions and small groups in Saltaire. Smart environments, long lines, big smiles.
          </p>
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

function AuthorCard() {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="h-12 w-12 rounded-full bg-emerald-200" />
      <div>
        <div className="text-sm font-semibold text-slate-900">Saltaire Dog Walks</div>
        <div className="text-xs text-slate-600">Force-free training • First aid trained</div>
      </div>
    </div>
  );
}

function ActionButton({ onClick, icon, children }: { onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
      {icon}
      {children}
    </button>
  );
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

function getArticleJsonLd(suggested: string) {
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : "https://example.com/blog/perfect-recall-training-guide";
  const howTo = {
    "@type": "HowTo",
    name: "Teach a reliable recall",
    step: [
      { "@type": "HowToStep", name: "Pick one cue", text: "Choose whistle or word. Use consistently." },
      { "@type": "HowToStep", name: "Prime the value", text: "Cue → rapid treat stream at your knee. 5–10 reps." },
      { "@type": "HowToStep", name: "Add tiny distance", text: "Take 1–2 steps away, cue once, move backwards, pay big." },
      { "@type": "HowToStep", name: "Add delay", text: "Cue, wait 1–2s, then move; pay at your knee." },
      { "@type": "HowToStep", name: "Proofing", text: "Climb the distraction ladder one rung at a time." },
      { "@type": "HowToStep", name: "Emergency cue", text: "Teach a separate cue that always jackpots, used sparingly." },
    ],
  };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: url,
    headline: "Perfect Recall Training Guide",
    description:
      "A professional, step-by-step plan to build a rock-solid recall. 3-minute drills, distraction ladder, equipment, troubleshooting, and resources.",
    datePublished: "2024-08-22",
    dateModified: "2025-10-09",
    author: { "@type": "Organization", name: "Saltaire Dog Walks" },
    publisher: { "@type": "Organization", name: "Saltaire Dog Walks" },
    about: "dog training recall",
    keywords: "dog recall, recall training, whistle recall, long line, distraction ladder, emergency recall",
    image: ["https://example.com/images/blog/recall-hero.jpg"],
    articleSection: ["Recall", "Training", "Behaviour"],
    isAccessibleForFree: true,
    educationalUse: "practice",
    proficiencyLevel: suggested,
    potentialAction: {
      "@type": "AssessAction",
      name: "Recall readiness quiz",
      result: suggested,
    },
    hasPart: howTo,
  } as const;
}
