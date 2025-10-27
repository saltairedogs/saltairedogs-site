// src/app/(site)/blog/off-lead-rules-around-saltaire-bradford-whats-allowed-and-where/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where | Saltaire Dog Walks Blog',
  description:
    'Understand local PSPOs, seasonal restrictions, and where off-lead time is appropriate around Saltaire—plus readiness checks, recall tips and risk zones.',
  openGraph: {
    title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where',
    description:
      'Understand local PSPOs, seasonal restrictions, and where off-lead time is appropriate around Saltaire—plus readiness checks, recall tips and risk zones.',
    type: 'article',
    images: ['/saltaire-dog-river.png'],
    url: '/blog/off-lead-rules-around-saltaire-bradford-whats-allowed-and-where',
  },
  alternates: { canonical: '/blog/off-lead-rules-around-saltaire-bradford-whats-allowed-and-where' },
}

const post = {
  slug: 'off-lead-rules-around-saltaire-bradford-whats-allowed-and-where',
  title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where',
  excerpt: 'A practical guide to local rules and sensible off-lead choices.',
  coverImage: {
    src: '/saltaire-dog-river.png',
    alt: 'Golden retriever near the riverside at blue hour with a loose lead',
  },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 9,
  category: 'Safety',
  tags: ['off lead', 'rules', 'PSPO', 'recall', 'etiquette'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'

  // Structured data (kept neutral; we don’t hard-code changing regulations)
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: metadata.description,
    image: [`${siteUrl}${post.coverImage.src}`],
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: [{ '@type': 'Organization', name: post.author.name }],
    publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are dogs allowed off-lead around Saltaire & Bradford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It depends on local Public Space Protection Orders (PSPOs), posted signage, and site-specific rules. “Under control” usually applies at all times. Play areas, school grounds, sports pitches, cemeteries and some nature reserves are often on-lead or no-dog zones. Always follow on-site signage first.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a PSPO and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'A PSPO is a local regulation that can require leads in certain areas, cap dog numbers, or restrict access to specific spaces. Councils review and update PSPOs periodically. Check the council website and on-site signs for the latest rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know my dog is ready for off-lead?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'A good test: your dog orients to their name instantly, recalls off “medium” distractions (people, bikes at distance), and can pass food on the ground when asked. If recall drops below 80–90% in a location, use a long line or stay on lead.',
        },
      },
    ],
  }

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        Off-lead time can be brilliant—done in the right place, at the right time, with a dog who’s genuinely ready. This
        guide walks through <strong>what rules typically apply</strong>, how to assess <strong>readiness</strong>, and our
        favourite <strong>low-risk alternatives</strong> around Saltaire when you’re still building recall.
      </p>

      {/* Important note */}
      <div
        role="note"
        aria-label="Important local note"
        className="my-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
      >
        <strong className="font-semibold">On-site signage beats everything.</strong> Councils update rules and PSPOs from
        time to time. Treat this article as practical guidance—not legal advice—and follow posted signs first.
      </div>

      {/* Section: What the rules generally mean */}
      <section aria-labelledby="rules" className="mt-10">
        <h2 id="rules">What “the rules” generally mean (plain-English)</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">PSPO basics</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>“Under control” applies at all times—lead or no lead.</li>
              <li>Leads are often required near roads, play areas, sports pitches, and some memorial spaces.</li>
              <li>Some nature reserves or wildlife zones ask for on-lead to protect habitat and birds.</li>
              <li>Pick up after your dog everywhere—bins or take it home.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Practical translation</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>If you cannot recall promptly, use a <strong>10–15 m long line</strong> (no dragging across cyclists).</li>
              <li>Keep leads short near <strong>bridges, gates and blind bends</strong> on the towpath.</li>
              <li>Give wildlife and anglers wide space; leash-up as you pass.</li>
              <li>Busy weekends? Choose a <strong>quiet street loop</strong> or woodland edge instead.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Readiness checklist */}
      <section aria-labelledby="readiness" className="mt-12">
        <h2 id="readiness">Off-lead readiness: a quick, honest checklist</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Skill</th>
                <th className="px-4 py-3">Pass if…</th>
                <th className="px-4 py-3">If not, do this</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium">Name response</td>
                <td className="px-4 py-3">Turns to you instantly, even when sniffing</td>
                <td className="px-4 py-3">Practice 3×/day at home + garden with tiny treats</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Recall</td>
                <td className="px-4 py-3">80–90% success with mild distractions</td>
                <td className="px-4 py-3">Use a long line; add distance from triggers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Leave-it</td>
                <td className="px-4 py-3">Walks past dropped food on cue</td>
                <td className="px-4 py-3">Reward ignoring; train at 2–3 m first</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Check-ins</td>
                <td className="px-4 py-3">Offers eye contact every ~15–30 seconds</td>
                <td className="px-4 py-3">Mark & reward voluntary check-ins on lead</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          If any line is a “not yet,” that’s normal. Keep sessions short, adjust distance, and use management (long line, quiet times).
        </p>
      </section>

      {/* Section: Where off-lead is sensible vs. where it’s not (practical, non-legal) */}
      <section aria-labelledby="where" className="mt-12">
        <h2 id="where">Sensible places vs. risky places (practical view)</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Often sensible (when quiet & your dog is ready)</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Wide park <em>perimeter</em> paths with good sight-lines</li>
              <li>Woodland edges with room to step off the track</li>
              <li>Large, fenced fields (no livestock; gates closed)</li>
              <li>Designated dog fields (bookable, private hire)</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Higher-risk / usually on-lead</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Narrow canal towpath (bikes, blind bridges, water)</li>
              <li>Children’s play areas, sports pitches, school grounds</li>
              <li>Roadside verges and busy village pinch points</li>
              <li>Wildlife reserves & nesting zones (follow signage)</li>
            </ul>
          </article>
        </div>
        <div className="mt-4 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
          <strong className="font-semibold">Local tip:</strong> on the canal, keep leads short near bridges and locks, and
          step aside for bikes and prams. It’s safer and friendlier—everyone relaxes.
        </div>
      </section>

      {/* Section: Long-line blueprint */}
      <section aria-labelledby="longline" className="mt-12">
        <h2 id="longline">Long-line blueprint (your bridge to off-lead)</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-muted-foreground">
          <li>Start in a <strong>quiet field</strong> with a 10–15 m line attached to a Y-front harness.</li>
          <li>Reward every spontaneous check-in; say the name once, then mark and reward.</li>
          <li>Practice 3–5 “away → recall → party” reps, then break. Keep arousal low.</li>
          <li>Layer distractions gradually: people at 20 m, a slow bike at 30 m, another dog at generous distance.</li>
          <li>When recall is effortless for a week, try a <strong>drag line</strong> (end held only if needed), then test off-lead for 1–2 minutes in the same spot.</li>
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">
          Avoid extendable leads for recall training—constant tension encourages pulling and reduces clean cues.
        </p>
      </section>

      {/* Section: Emergency recall & “leash up now” signs */}
      <section aria-labelledby="emergency" className="mt-12">
        <h2 id="emergency">Emergency recall &amp; when to leash up immediately</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Emergency recall steps</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-muted-foreground">
              <li>Unique cue (whistle or special word); do <em>not</em> use it casually.</li>
              <li>Explode into praise + high-value food at your feet; then calmly clip on.</li>
              <li>Finish the session—no more “just one more” off-lead attempt today.</li>
            </ol>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Leash up now if you see…</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Wildlife, livestock, anglers, or a dog on lead (assume they need space)</li>
              <li>Narrow path, blind corner, or bridge ahead</li>
              <li>Your dog stops taking treats or hard-stares at distractions</li>
              <li>Any “Lead required” or “No dogs” sign</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Figure */}
      <figure className="mt-12 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-64 w-full">
          <Image
            src="/saltaire-canal-retriever-on-lead-cobbles.jpg"
            alt="Calm on-lead walking on the cobbles near the canal; handler keeping lead short by a bridge"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Towpath etiquette: short lead at bridges and locks, step aside for bikes, cheerful thank-yous all round.
        </figcaption>
      </figure>

      {/* Mini FAQ (mirrors JSON-LD, keeps readers on page) */}
      <section aria-labelledby="faqs" className="mt-12">
        <h2 id="faqs">Quick questions</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            {
              q: 'Are dogs allowed off-lead around Saltaire & Bradford?',
              a:
                'Sometimes—check PSPOs and on-site signs. “Under control” applies everywhere. If in doubt, long line or on-lead.',
            },
            {
              q: 'What gear do you recommend?',
              a:
                'Y-front harness, 1.5–2 m standard lead, 10–15 m long line for training, whistle for emergency recall, flat ID tag.',
            },
            {
              q: 'My dog’s recall slipped—now what?',
              a:
                'Go back to the long line, raise food value, increase distance from distractions, and practice 3–5 easy wins per outing.',
            },
          ].map((f) => (
            <div key={f.q} className="px-5 py-4">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section aria-labelledby="cta" className="mt-14">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10"
          style={{
            background:
              'radial-gradient(1000px 600px at 10% 10%, rgba(200,155,60,0.18), transparent 60%), linear-gradient(135deg, #131415 0%, #1C1E20 100%)',
          }}
        >
          <div className="relative mx-auto max-w-3xl">
            <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Want a safe off-lead plan for your street?
            </h2>
            <p className="mt-2 text-white/85">
              We build location-specific recall plans and can run long-line sessions for you. Calm, positive, and local to
              Saltaire.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=recall"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book recall help
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                See services
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • Positive methods • GPS &amp; photo updates</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </article>
  )
}
