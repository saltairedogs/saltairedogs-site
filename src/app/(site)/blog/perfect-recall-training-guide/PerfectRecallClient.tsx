"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

/**
 * PerfectRecallClient.tsx — refined, calmer, more human
 * - Warm brass accents, stone surfaces, soft borders/shadows
 * - True sticky ToC with active state + smooth scroll
 * - Subtle progress bar + gentle hero
 * - Removed “See pricing” button (kept friendly Contact CTA)
 */

type TocItem = { id: string; label: string; level: 1 | 2 | 3 };

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

const BRAND = {
  brass: "#C89B3C",
  ink: "#131415",
  slate: "#7B828A",
  stone: "#EFEEE9",
  hair: "#E6E3DA",
};

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

/* --------------------------------------------------------------------------- */
/* Page                                                                        */
/* --------------------------------------------------------------------------- */

export default function PerfectRecallClient({
  showHero = true,
  stickyToc = true,
}: {
  showHero?: boolean;
  stickyToc?: boolean;
}) {
  const toc: TocItem[] = useMemo(
    () => [
      { id: "intro", label: "Overview", level: 1 },
      { id: "principles", label: "Recall Principles", level: 1 },
      { id: "readiness", label: "Readiness Quiz", level: 1 },
      { id: "howto", label: "How to Teach Recall", level: 1 },
      { id: "drills", label: "3-Minute Drills", level: 1 },
      { id: "weekplans", label: "4-Week Plans", level: 1 },
      { id: "environments", label: "Distraction Heatmap", level: 1 },
      { id: "equipment", label: "Equipment & Rewards", level: 1 },
      { id: "troubleshooting", label: "Troubleshooting", level: 1 },
      { id: "resources", label: "Resources", level: 1 },
      { id: "faq", label: "FAQs", level: 1 },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Sidebar state
  const [quiz, setQuiz] = useState({ nameResponse: 2, leadSlack: 1, treatValue: 2, environmentalInterest: 1, startLine: 1 });
  const [reinforcer, setReinforcer] = useState({ value: 3, ratePerMinute: 6, sessionMinutes: 3 });
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

  // Timer tick
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
    <main className="min-h-screen" style={{ backgroundColor: "#F7F7F6", color: BRAND.ink }}>
      <ProgressBar progress={progress} />
      {showHero && <ArticleHero readingTime={readingTime} />}

      {/* Structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArticleJsonLd(readinessLabel.label)) }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Sidebar */}
        <aside className="order-last space-y-6 lg:order-first lg:col-span-3">
          <StickyToc toc={toc} activeId={activeId} sticky={stickyToc} />

          {/* Readiness card */}
          <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: BRAND.hair }}>
            <div className="text-sm font-semibold">Recall readiness</div>
            <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>
              Rate each item (0–3). This suggests where to start.
            </div>

            <QuizRow
              label="Looks when name is said"
              value={quiz.nameResponse}
              onChange={(v) => setQuiz((s) => ({ ...s, nameResponse: v }))}
            />
            <QuizRow
              label="Loose lead at home"
              value={quiz.leadSlack}
              onChange={(v) => setQuiz((s) => ({ ...s, leadSlack: v }))}
            />
            <QuizRow
              label="Treat value (interest)"
              value={quiz.treatValue}
              onChange={(v) => setQuiz((s) => ({ ...s, treatValue: v }))}
            />
            <QuizRow
              label="Environmental pull (lower=better)"
              value={quiz.environmentalInterest}
              onChange={(v) => setQuiz((s) => ({ ...s, environmentalInterest: v }))}
              invert
            />
            <QuizRow
              label="Calm start (2–3 breaths)"
              value={quiz.startLine}
              onChange={(v) => setQuiz((s) => ({ ...s, startLine: v }))}
            />

            <div className="mt-3 flex items-center justify-between text-sm">
              <span style={{ color: BRAND.slate }}>Score</span>
              <span className="rounded-md px-2 py-0.5 font-semibold" style={{ background: BRAND.stone }}>
                {readinessScore}/30
              </span>
            </div>
            <div className="mt-2">
              <Badge tone={readinessLabel.tone}>{readinessLabel.label}</Badge>
            </div>
          </div>

          {/* Reinforcement calc */}
          <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: BRAND.hair }}>
            <div className="text-sm font-semibold">Reinforcement planner</div>
            <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>
              Plan enough rewards per micro-session.
            </div>

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

            <div className="mt-3 flex items-center justify-between text-sm">
              <span style={{ color: BRAND.slate }}>Bring at least</span>
              <span
                className="rounded-md px-2 py-0.5 font-semibold"
                style={{ background: "rgba(200,155,60,0.15)", color: BRAND.ink }}
              >
                {totalRewards} rewards
              </span>
            </div>
          </div>

          {/* Whistle tone */}
          <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: BRAND.hair }}>
            <div className="text-sm font-semibold">Whistle frequency</div>
            <div className="mt-1 text-xs" style={{ color: BRAND.slate }}>
              Pick one tone and keep it consistent.
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[440, 520, 560, 590, 620].map((hz) => (
                <button
                  key={hz}
                  className={cx(
                    "rounded-md border px-2 py-1 text-sm transition-colors",
                    whistleTone === hz
                      ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                      : "border-[#E6E3DA] bg-white text-[#131415]/80 hover:bg-[#EFEEE9]"
                  )}
                  onClick={() => setWhistleTone(hz as typeof whistleTone)}
                  title={`${hz} Hz`}
                >
                  {hz} Hz
                </button>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs" style={{ color: BRAND.slate }}>
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
            <p style={{ color: BRAND.slate }}>
              Recall is a safety skill first, party trick second. This plan builds a “drop everything & come” response using
              positive reinforcement, tidy criteria, and smart environment choices. Short, calm sessions—lots of tiny wins.
            </p>
            <Callout type="success" title="TL;DR">
              Train in 3-minute bursts, start at home, use <strong>brilliant</strong> rewards, and only raise the bar when
              you’re at 80%+ success. If it wobbles, shrink difficulty, pay better, try again.
            </Callout>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge tone="emerald">Force-free</Badge>
              <Badge tone="sky">3-min drills</Badge>
              <Badge tone="amber">Safety first</Badge>
            </div>
          </Section>

          <Divider />

          {/* Principles */}
          <Section id="principles" title="Recall principles (what actually makes it stick)">
            <ul className="list-disc space-y-2 pl-5" style={{ color: BRAND.ink }}>
              <li>
                <strong>Predictability:</strong> your cue pays better than the environment—at first.
              </li>
              <li>
                <strong>One clean cue:</strong> pick whistle or word and protect it from chatter.
              </li>
              <li>
                <strong>Short & sweet:</strong> end with dopamine in the tank.
              </li>
              <li>
                <strong>80% rule:</strong> only raise criteria when you can bet on success.
              </li>
              <li>
                <strong>Distraction ladder:</strong> home → garden → quiet green → path → busy zones.
              </li>
            </ul>
            <ProTip title="Bank runs">
              10–20 easy recalls a day around the house are low-cost “deposits” that fund outdoor reliability later.
            </ProTip>
          </Section>

          <Divider />

          {/* Readiness */}
          <Section id="readiness" title="Readiness — where to start today">
            <p style={{ color: BRAND.slate }}>
              Your sidebar score suggests a lane. Foundations indoors; distance and distractions later. If your dog struggles,
              lower one variable at a time: <em>distance</em>, <em>distraction</em>, or <em>delay</em>.
            </p>
            <div className="mt-2">
              <Badge tone={readinessLabel.tone}>Suggested: {readinessLabel.label}</Badge>
            </div>
          </Section>

          <Divider />

          {/* How To */}
          <Section id="howto" title="How to teach recall (the clean sequence)">
            <ol className="list-decimal space-y-3 pl-6" style={{ color: BRAND.ink }}>
              <li>
                <strong>Charge the marker:</strong> “Yes!” → treat (10 reps).
              </li>
              <li>
                <strong>Pair the cue:</strong> cue, then 3–5 rapid treats at your knee.
              </li>
              <li>
                <strong>Short distance:</strong> step back 1–2m, cue once, <em>move backwards</em>, feed at your knee.
              </li>
              <li>
                <strong>Add delay:</strong> pause 1–2s after the cue before you move; reward at your knee.
              </li>
              <li>
                <strong>Proofing:</strong> change one thing at a time (distance → mild distraction → combo).
              </li>
              <li>
                <strong>Emergency cue:</strong> separate cue that always jackposts; once a week tops.
              </li>
            </ol>

            <HowToGrid />

            <Callout type="info" title="Protect the cue">
              Don’t repeat. If there’s hesitation, criteria are too high, or rewards aren’t strong enough for today.
            </Callout>
          </Section>

          <Divider />

          {/* 3-min drills */}
          <Section id="drills" title="3-minute drills (set a timer, stack wins)">
            <p style={{ color: BRAND.slate }}>
              Micro-sessions keep things fun, prevent frustration and fit between life.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: BRAND.hair }}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Session timer</div>
                  <div className="rounded-lg px-3 py-2 text-2xl font-semibold tracking-wider" style={{ background: BRAND.stone }}>
                    {timerMMSS}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {!timer.running ? (
                    <button
                      onClick={() => setTimer((t) => ({ ...t, running: true }))}
                      className="rounded-md px-3 py-1.5 text-sm font-semibold text-white transition"
                      style={{ background: "#2F6F4F" }}
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      onClick={() => setTimer((t) => ({ ...t, running: false }))}
                      className="rounded-md px-3 py-1.5 text-sm font-semibold text-white transition"
                      style={{ background: "#B7791F" }}
                    >
                      Pause
                    </button>
                  )}
                  <button
                    onClick={() => setTimer({ secs: 180, running: false })}
                    className="rounded-md border px-3 py-1.5 text-sm"
                    style={{ borderColor: BRAND.hair, background: "white" }}
                  >
                    Reset
                  </button>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm" style={{ color: BRAND.slate }}>
                  <li>10–15 easy recalls in minute one (home/garden).</li>
                  <li>1–2 mild distractions in minute two (toy on floor, person standing).</li>
                  <li>Finish with one emergency-cue rep (jackpot), then stop.</li>
                </ul>
              </div>

              <div className="rounded-2xl border p-4 shadow-sm" style={{ borderColor: BRAND.hair, background: "#F5FBF8" }}>
                <h4 className="text-sm font-semibold" style={{ color: "#2F6F4F" }}>
                  Session structure
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: "#2F6F4F" }}>
                  <li>Start with two calm breaths together.</li>
                  <li>Use two short peeps for recall (your chosen tone).</li>
                  <li>Pay at your knee, then “go sniff” as a bonus reward.</li>
                </ul>
                <ProTip title="Recall → release">“Come → treat → go sniff” makes you the gateway to good stuff.</ProTip>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <DrillCard title="Home Hallway Sprints" level="Foundation" bullets={["5m distance", "No distractions", "Pay high & fast"]} />
              <DrillCard title="Garden Angle Game" level="Stage 1" bullets={["Call → run past you", "Turn, call again", "Keep it playful"]} />
              <DrillCard title="Park Edge Ping-Pong" level="Stage 2" bullets={["Buddy 10m apart", "Alternate calls", "Release to sniff between"]} />
            </div>
          </Section>

          <Divider />

          {/* Week plans */}
          <Section id="weekplans" title="Progressive 4-week plans (pick your lane)">
            <p style={{ color: BRAND.slate }}>
              Choose the plan that matches your readiness badge. Move up when you’re at 80% success for two days running.
            </p>
            <WeekPlanTabs />
          </Section>

          <Divider />

          {/* Environments */}
          <Section id="environments" title="Distraction heatmap (choose smart battlegrounds)">
            <p style={{ color: BRAND.slate }}>
              Location choice wins or loses recall. Start light, then step into the breeze. Here’s a simple “busyness” heatmap by hour.
            </p>
            <Heatmap />

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <EnvCard title="Home / Hall" score={1} notes="Controlled, boring—perfect first reps." />
              <EnvCard title="Garden / Quiet Green" score={2} notes="Few people/smells; add small distance." />
              <EnvCard title="Park Edge Path" score={3} notes="Occasional joggers/cyclists; use distance." />
              <EnvCard title="Main Towpath" score={4} notes="Unpredictable; very short sessions, pay big." />
              <EnvCard title="Busy Park Hub" score={5} notes="Advanced proofing only; emergency cue ready." />
              <EnvCard title="Wildlife Areas" score={5} notes="Plan exits; avoid if success isn’t likely." />
            </div>
          </Section>

          <Divider />

          {/* Equipment */}
          <Section id="equipment" title="Equipment & reward strategy">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <GearCard title="Long line (10–15m)" bullets={["Safety while proofing", "Clip to harness back", "Never to a collar"]} />
              <GearCard title="Dual-clip harness" bullets={["Front clip for control", "Back clip for long line", "No neck pressure"]} />
              <GearCard title="High-value treats" bullets={["Tiny & soft", "Chicken/cheese/sausage", "Rotate to stay novel"]} />
            </div>
            <Callout type="warning" title="Skip retractables for recall">
              They teach tension and risk tangles. Long lines + technique are safer and clearer.
            </Callout>
          </Section>

          <Divider />

          {/* Troubleshooting */}
          <Section id="troubleshooting" title="Troubleshooting — common failure modes">
            <TroublesAccordion />
            <ProTip title="Three dials">If it wobbles, lower one dial: distance, distraction, or delay.</ProTip>
          </Section>

          <Divider />

          {/* Resources */}
          <Section id="resources" title="Further reading & reputable resources">
            <ul className="list-disc space-y-2 pl-5" style={{ color: BRAND.ink }}>
              <li>
                <Link className="hover:underline" href="https://apdt.co.uk" target="_blank">
                  APDT (UK)
                </Link>{" "}
                — trainer directory, positive methods.
              </li>
              <li>
                <Link className="hover:underline" href="https://www.imdt.uk.com" target="_blank">
                  IMDT
                </Link>{" "}
                — courses, articles, local trainers.
              </li>
              <li>
                <Link className="hover:underline" href="https://www.bluecross.org.uk/pet-advice/recall-training" target="_blank">
                  Blue Cross — recall training
                </Link>{" "}
                — clear public guidance.
              </li>
              <li>
                <Link className="hover:underline" href="/blog/puppy-first-walk-checklist">
                  Puppy First Walk Checklist
                </Link>
              </li>
            </ul>
          </Section>

          <Divider />

          {/* FAQ */}
          <Section id="faq" title="Recall FAQs">
            <Faq />
          </Section>

          {/* Friendly CTA (no pricing) */}
          <BottomCta />

          <AuthorCard />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionButton onClick={handleCopy} icon={<Icon.Link className="h-4 w-4" />}>
              {copied ? "Link copied" : "Copy link"}
            </ActionButton>
            <ActionButton onClick={() => window.print()} icon={<Icon.Print className="h-4 w-4" />}>
              Print
            </ActionButton>
            <ActionButton
              onClick={() => navigator.share?.({ title: document.title, url: window.location.href })}
              icon={<Icon.Share className="h-4 w-4" />}
            >
              Share
            </ActionButton>
          </div>
        </article>
      </div>

      {/* tiny helpers */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          .lift{will-change:transform,box-shadow;transition:transform .2s ease, box-shadow .2s ease}
          .lift:hover{transform:translateY(-2px); box-shadow:0 18px 50px -22px rgba(0,0,0,.25)}
          .link-underline{background:linear-gradient(currentColor,currentColor) bottom/0 1px no-repeat;transition:background-size .25s ease}
          .link-underline:hover{background-size:100% 1px}
        `,
        }}
      />
    </main>
  );
}

/* --------------------------------------------------------------------------- */
/* UI bits                                                                     */
/* --------------------------------------------------------------------------- */

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="sticky top-0 z-40 h-[3px] w-full" style={{ background: BRAND.hair }}>
      <div
        className="h-full transition-[width] duration-150"
        style={{ width: `${Math.round(progress * 100)}%`, background: BRAND.brass }}
      />
    </div>
  );
}

function ArticleHero({ readingTime }: { readingTime: string }) {
  return (
    <header className="relative isolate overflow-hidden">
      <div
        className="absolute inset-5 -z-10 rounded-3xl bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/saltaire-dog-river.png')" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ring-1"
            style={{ background: "rgba(255,255,255,0.85)", color: BRAND.ink, borderColor: BRAND.hair }}
          >
            Training guide
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl" style={{ color: BRAND.ink }}>
            Perfect Recall Training Guide
          </h1>
          <p className="mt-3 text-lg" style={{ color: BRAND.slate }}>
            Build a rock-solid “come” with 3-minute drills, smart environments and rewards your dog will sprint for.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm" style={{ color: BRAND.slate }}>
            <span className="inline-flex items-center gap-2">
              <Icon.Clock className="h-4 w-4" /> {readingTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon.Eye className="h-4 w-4" /> Updated Oct 2025
            </span>
          </div>
        </div>
      </div>
      <div
        className="h-10 w-full"
        style={{ background: "radial-gradient(ellipse at top, rgba(200,155,60,0.18), transparent 60%)" }}
        aria-hidden
      />
    </header>
  );
}

function StickyToc({ toc, activeId, sticky = true }: { toc: TocItem[]; activeId: string; sticky?: boolean }) {
  const onClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={cx(
        sticky ? "lg:sticky lg:top-20" : "",
        "rounded-2xl border bg-white p-4 shadow-sm"
      )}
      style={{ borderColor: BRAND.hair }}
      aria-label="On this page"
    >
      <div className="mb-2 text-xs font-semibold uppercase tracking-wide" style={{ color: BRAND.slate }}>
        On this page
      </div>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onClick(item.id)}
              className={cx(
                "group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm transition-colors",
                activeId === item.id ? "bg-[#EFEEE9]" : "hover:bg-[#F3F2ED]"
              )}
              style={{ color: BRAND.ink }}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              <span className="truncate">{item.label}</span>
              <span
                className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: activeId === item.id ? BRAND.brass : BRAND.hair }}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function TopMetaBar() {
  const date = useMemo(
    () =>
      new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    []
  );
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 text-sm" style={{ color: BRAND.slate }}>
      <span>
        By <strong style={{ color: BRAND.ink }}>Saltaire Dogs + Pets</strong>
      </span>
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
      <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: BRAND.ink }}>
        {title}
      </h2>
      <div className="prose prose-slate mt-4 max-w-none prose-a:text-[inherit] prose-strong:text-[inherit]">
        {children}
      </div>
    </section>
  );
}

function Divider() {
  return <hr className="my-10" style={{ borderColor: BRAND.hair }} />;
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
    success: { bg: "rgba(47,111,79,0.06)", ring: "rgba(47,111,79,0.25)", text: "#2F6F4F", icon: <Icon.Check className="h-4 w-4" /> },
    warning: { bg: "rgba(183,121,31,0.08)", ring: "rgba(183,121,31,0.25)", text: "#B7791F", icon: <Icon.Alert className="h-4 w-4" /> },
    info: { bg: "rgba(0,106,166,0.06)", ring: "rgba(0,106,166,0.25)", text: "#0C6AA6", icon: <Icon.Info className="h-4 w-4" /> },
  }[type];

  return (
    <div
      className="not-prose mt-6 rounded-xl p-4 ring-1"
      style={{ background: palette.bg, boxShadow: "0 1px 0 rgba(255,255,255,.6) inset", color: BRAND.ink, borderColor: "transparent", outlineColor: "transparent", ...(palette.ring ? { borderColor: palette.ring } : {}) }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5" style={{ color: palette.text }}>
          {palette.icon}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: palette.text }}>
            {title}
          </div>
          <div className="mt-1 text-sm" style={{ color: BRAND.ink }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProTip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="not-prose mt-6 rounded-xl border bg-white p-4 shadow-sm"
      style={{ borderColor: BRAND.hair }}
    >
      <div className="flex items-start gap-3">
        <div style={{ color: "#2F6F4F" }}>
          <Icon.Check className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: BRAND.ink }}>
            {title}
          </div>
          <div className="mt-1 text-sm" style={{ color: BRAND.slate }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children, tone = "emerald" }: { children: React.ReactNode; tone?: "emerald" | "amber" | "sky" }) {
  const map: Record<string, { bg: string; text: string; ring: string }> = {
    emerald: { bg: "rgba(47,111,79,0.10)", text: "#2F6F4F", ring: "rgba(47,111,79,0.25)" },
    amber: { bg: "rgba(183,121,31,0.12)", text: "#8A5A13", ring: "rgba(183,121,31,0.28)" },
    sky: { bg: "rgba(12,106,166,0.12)", text: "#0C6AA6", ring: "rgba(12,106,166,0.28)" },
  };
  const t = map[tone];
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
      style={{ background: t.bg, color: t.text, boxShadow: `inset 0 0 0 1px ${t.ring}` }}
    >
      {children}
    </span>
  );
}

// Sidebar rows
function QuizRow({
  label,
  value,
  onChange,
  invert = false,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  invert?: boolean;
}) {
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-sm">
        <div>{label}</div>
        <div className="text-xs" style={{ color: BRAND.slate }}>
          {invert ? "0=high pull, 3=low" : "0=never, 3=always"}
        </div>
      </div>
      <input type="range" min={0} max={3} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" />
      <div className="mt-1 text-right text-xs" style={{ color: BRAND.slate }}>
        {value}
      </div>
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
        <div>{label}</div>
        {description && <div className="text-xs" style={{ color: BRAND.slate }}>{description}</div>}
      </div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-1 w-full" />
      <div className="mt-1 text-right text-xs" style={{ color: BRAND.slate }}>
        {value}
      </div>
    </div>
  );
}

function DrillCard({ title, level, bullets }: { title: string; level: "Foundation" | "Stage 1" | "Stage 2"; bullets: string[] }) {
  const tone =
    level === "Foundation"
      ? { chip: "rgba(12,106,166,0.12)", text: "#0C6AA6", ring: "rgba(12,106,166,0.28)" }
      : level === "Stage 1"
      ? { chip: "rgba(47,111,79,0.10)", text: "#2F6F4F", ring: "rgba(47,111,79,0.25)" }
      : { chip: "rgba(183,121,31,0.12)", text: "#8A5A13", ring: "rgba(183,121,31,0.28)" };

  return (
    <div className="lift rounded-2xl border bg-white p-4" style={{ borderColor: BRAND.hair }}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold" style={{ color: BRAND.ink }}>
          {title}
        </div>
        <span
          className="rounded-full px-2 py-1 text-[11px] font-semibold"
          style={{ background: tone.chip, color: tone.text, boxShadow: `inset 0 0 0 1px ${tone.ring}` }}
        >
          {level}
        </span>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: BRAND.slate }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function HowToGrid() {
  const items = [
    { step: 1, title: "Pick one cue", text: "Word or whistle. Don’t mix. Keep it clean." },
    { step: 2, title: "Prime the value", text: "Cue → rapid treat stream at your knee. 5–10 reps." },
    { step: 3, title: "Add tiny distance", text: "Back up 1–2m, cue once, move, pay big." },
    { step: 4, title: "Add delay", text: "Cue, wait 1–2s, then move; reward on commit." },
    { step: 5, title: "Distraction ladder", text: "Garden → quiet green → park edge → path." },
    { step: 6, title: "Emergency cue", text: "Different sound/word. Always jackpot. Rarely used." },
  ];
  return (
    <div className="not-prose mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      {items.map((it) => (
        <div key={it.step} className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: BRAND.hair }}>
          <div className="flex items-center gap-3">
            <div
              className="inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold"
              style={{ background: BRAND.stone, color: BRAND.ink }}
            >
              {it.step}
            </div>
            <div className="font-semibold" style={{ color: BRAND.ink }}>
              {it.title}
            </div>
          </div>
          <p className="mt-2 text-sm" style={{ color: BRAND.slate }}>
            {it.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function WeekPlanTabs() {
  const [tab, setTab] = useState<"foundation" | "stage1" | "stage2">("foundation");
  return (
    <div className="not-prose mt-4">
      <div
        className="inline-flex rounded-xl border p-1"
        style={{ borderColor: BRAND.hair, background: "#F1EFE8" }}
      >
        <TabBtn id="foundation" current={tab} onClick={setTab}>
          Foundation
        </TabBtn>
        <TabBtn id="stage1" current={tab} onClick={setTab}>
          Stage 1
        </TabBtn>
        <TabBtn id="stage2" current={tab} onClick={setTab}>
          Stage 2
        </TabBtn>
      </div>

      {tab === "foundation" && (
        <WeekPlan
          title="Foundation (Home → Garden)"
          weeks={[
            ["Mon", "10 hallway recalls + 3 jackpot releases"],
            ["Tue", "Two 3-min sessions: living room, then garden (door open)"],
            ["Wed", "Add 1s delay after cue; aim for 80%+ success"],
            ["Thu", "Garden with mild sound (TV low)"],
            ["Fri", "Garden with person standing 5m away"],
            ["Sat", "Emergency cue once + huge jackpot + release"],
            ["Sun", "Review; rest if success < 80%"],
          ]}
        />
      )}

      {tab === "stage1" && (
        <WeekPlan
          title="Stage 1 (Garden → Quiet Green)"
          weeks={[
            ["Mon", "Garden 3-min AM; quiet green 3-min PM (long line)"],
            ["Tue", "Add 5m distance. If fails twice, halve it."],
            ["Wed", "Park edge 2-min exposure: 1 success, go home"],
            ["Thu", "Ping-pong recalls with helper 8–10m apart"],
            ["Fri", "Introduce mild moving distraction (person walking)"],
            ["Sat", "Emergency cue once (jackpot + sniff release)"],
            ["Sun", "Light day: 10 house recalls; log wins"],
          ]}
        />
      )}

      {tab === "stage2" && (
        <WeekPlan
          title="Stage 2 (Path → Busy Zones)"
          weeks={[
            ["Mon", "Path with cyclists far (20m). 3-min micro-session."],
            ["Tue", "Reduce cyclist distance to 15m if 80%+."],
            ["Wed", "Wildlife area at a distance. One success, leave."],
            ["Thu", "Alternate recalls with freedom to sniff"],
            ["Fri", "Two jackpots today for great response time"],
            ["Sat", "Emergency cue in a safe moment; huge party"],
            ["Sun", "Rest / play day—no pressure"],
          ]}
        />
      )}
    </div>
  );
}

function TabBtn({
  id,
  current,
  onClick,
  children,
}: {
  id: "foundation" | "stage1" | "stage2";
  current: string;
  onClick: (t: any) => void;
  children: React.ReactNode;
}) {
  const active = current === id;
  return (
    <button
      onClick={() => onClick(id)}
      className={cx(
        "rounded-lg px-3 py-1.5 text-sm font-semibold transition",
        active ? "bg-white shadow-sm" : "text-[#131415]/70 hover:text-[#131415]"
      )}
      style={{ border: active ? `1px solid ${BRAND.hair}` : "1px solid transparent" }}
    >
      {children}
    </button>
  );
}

function WeekPlan({ title, weeks }: { title: string; weeks: [string, string][] }) {
  return (
    <div className="mt-4 rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: BRAND.hair }}>
      <div className="text-sm font-semibold" style={{ color: BRAND.ink }}>
        {title}
      </div>
      <table className="mt-3 w-full text-sm">
        <thead>
          <tr style={{ color: BRAND.slate }}>
            <th className="py-2 text-left font-medium">Day</th>
            <th className="py-2 text-left font-medium">Plan</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map(([d, plan]) => (
            <tr key={d} style={{ borderTop: `1px solid ${BRAND.hair}` }}>
              <td className="py-2" style={{ color: BRAND.slate }}>
                {d}
              </td>
              <td className="py-2" style={{ color: BRAND.ink }}>
                {plan}
              </td>
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
    <div className="not-prose rounded-2xl border p-4" style={{ borderColor: BRAND.hair, background: "white" }}>
      <div className="grid grid-cols-12 gap-1">
        {hours.map((h) => (
          <div key={h} className="space-y-2">
            <div
              className="h-10 rounded-md"
              style={{ background: `hsl(${hue(score(h))} 70% ${90 - score(h) * 18}%)` }}
              title={`${String(h).padStart(2, "0")}:00`}
            />
            <div className="text-center text-[11px]" style={{ color: BRAND.slate }}>
              {String(h).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs" style={{ color: BRAND.slate }}>
        Lighter = quieter, darker = busier (estimates)
      </div>
    </div>
  );
}

function EnvCard({ title, score, notes }: { title: string; score: 1 | 2 | 3 | 4 | 5; notes: string }) {
  return (
    <div className="lift rounded-2xl border bg-white p-4" style={{ borderColor: BRAND.hair }}>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold" style={{ color: BRAND.ink }}>
          {title}
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon.Star key={i} className="h-4 w-4" style={{ color: i < score ? "#F2B84B" : BRAND.hair }} />
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm" style={{ color: BRAND.slate }}>
        {notes}
      </p>
    </div>
  );
}

function GearCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: BRAND.hair }}>
      <h3 className="text-lg font-semibold" style={{ color: BRAND.ink }}>
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-sm" style={{ color: BRAND.slate }}>
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Icon.Check className="mt-0.5 h-4 w-4" style={{ color: "#2F6F4F" }} /> {b}
          </li>
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
          Lower distance to dogs until you’re back to 80% success. Use <em>sniff release</em>: come → treat → “go say hi” if safe.
        </>
      ),
    },
    {
      q: "Only comes with food visible",
      a: (
        <>
          Switch to <strong>after-payment</strong>: cue → come → then hand dips to pouch. Mix in toys/play + environmental rewards.
        </>
      ),
    },
    {
      q: "Runs past you, doesn’t stop",
      a: (
        <>
          Pay at your knee or behind your legs. Add a <em>target hand</em> near your thigh; feed at that spot so the dog docks fully.
        </>
      ),
    },
    {
      q: "Bolts to wildlife",
      a: (
        <>
          That’s an emergency-cue moment. Train at longer distance first; if it happens, use your emergency cue once, jackpot, end session, rethink criteria.
        </>
      ),
    },
  ];
  return (
    <div className="divide-y rounded-2xl border bg-white" style={{ borderColor: BRAND.hair, color: BRAND.ink }}>
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold">{it.q}</h4>
            <div
              className="mt-0.5 shrink-0 rounded-full border p-1 text-[#7B828A] transition group-open:rotate-180"
              style={{ borderColor: BRAND.hair }}
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </summary>
          <div className="pt-3 text-sm" style={{ color: BRAND.slate }}>
            {it.a}
          </div>
        </details>
      ))}
    </div>
  );
}

function Faq() {
  const items = [
    { q: "Can I use the dog’s name as the recall cue?", a: "You can, but separating ‘name’ (look at me) from ‘come’ (move to me) keeps cues clearer." },
    { q: "How long until recall is reliable?", a: "Think weeks, not days. With daily micro-sessions and smart environments you’ll see strong gains in 2–4 weeks." },
    { q: "What about e-collars?", a: "We don’t recommend aversives. They risk fallout and harm trust. Positive methods produce durable, happy behaviour." },
    { q: "Should I recall from play?", a: "Yes—pay brilliantly and often release back to play so recall doesn’t predict ‘fun is over’." },
  ];
  return (
    <div className="divide-y rounded-2xl border bg-white" style={{ borderColor: BRAND.hair }}>
      {items.map((it, i) => (
        <details key={i} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
            <h4 className="text-sm font-semibold" style={{ color: BRAND.ink }}>
              {it.q}
            </h4>
            <div
              className="mt-0.5 shrink-0 rounded-full border p-1 text-[#7B828A] transition group-open:rotate-180"
              style={{ borderColor: BRAND.hair }}
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </summary>
          <div className="pt-3 text-sm" style={{ color: BRAND.slate }}>
            {it.a}
          </div>
        </details>
      ))}
    </div>
  );
}

function BottomCta() {
  return (
    <section
      className="mt-12 rounded-3xl p-8 text-white"
      style={{
        background:
          "radial-gradient(1000px 600px at 10% 10%, rgba(200,155,60,0.18), transparent 60%), linear-gradient(135deg,#131415 0%,#1C1E20 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold">Want personalised recall help?</h3>
          <p className="mt-1 max-w-xl text-white/85">
            One-to-one sessions in Saltaire. Smart environments, long lines, big smiles.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-inset ring-white/25 hover:bg-white/15"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

function AuthorCard() {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: BRAND.hair }}>
      <div className="h-12 w-12 rounded-full" style={{ background: "rgba(200,155,60,0.25)" }} />
      <div>
        <div className="text-sm font-semibold" style={{ color: BRAND.ink }}>
          Saltaire Dogs + Pets
        </div>
        <div className="text-xs" style={{ color: BRAND.slate }}>
          Force-free training • First-aid trained
        </div>
      </div>
    </div>
  );
}

function ActionButton({ onClick, icon, children }: { onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-[#EFEEE9]"
      style={{ borderColor: BRAND.hair, background: "white", color: BRAND.ink }}
    >
      {icon}
      {children}
    </button>
  );
}

/* --------------------------------------------------------------------------- */
/* JSON-LD                                                                     */
/* --------------------------------------------------------------------------- */

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
      "A step-by-step plan to build a rock-solid recall. 3-minute drills, distraction ladder, equipment, troubleshooting, and resources.",
    datePublished: "2024-08-22",
    dateModified: "2025-10-09",
    author: { "@type": "Organization", name: "Saltaire Dogs + Pets" },
    publisher: { "@type": "Organization", name: "Saltaire Dogs + Pets" },
    about: "dog training recall",
    keywords: "dog recall, recall training, whistle recall, long line, distraction ladder, emergency recall",
    image: ["https://example.com/images/blog/recall-hero.jpg"],
    articleSection: ["Recall", "Training", "Behaviour"],
    isAccessibleForFree: true,
    educationalUse: "practice",
    proficiencyLevel: suggested,
    potentialAction: { "@type": "AssessAction", name: "Recall readiness quiz", result: suggested },
    hasPart: howTo,
  } as const;
}
