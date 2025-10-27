// src/app/(site)/blog/choosing-right-dog-harness/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin, ArrowLeft, Clock } from 'lucide-react'
import { getRelatedPosts } from '@/lib/blog-data'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import {
  Ruler,
  CheckCircle2,
  Ban,
  ArrowRight,
  Activity,
  PawPrint,
  Scissors,
  ShieldCheck,
  AlertTriangle,
  Info,
} from 'lucide-react'

/**
 * Pull the post shell from your data layer so cards/hub stay in sync.
 * (Title, excerpt, cover, category, etc. come from SAMPLE_BLOG_POSTS.)
 */
const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === 'choosing-right-dog-harness')!

export const metadata: Metadata = {
  title: `${post.title} | Saltaire Dog Walks Blog`,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage.src],
    type: 'article',
    url: `/blog/${post.slug}`,
  },
  alternates: { canonical: `/blog/${post.slug}` },
}

/* --------------------------------- Helpers -------------------------------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
      {children}
    </span>
  )
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
      <span>{children}</span>
    </li>
  )
}

function Caution({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <AlertTriangle className="mt-0.5 h-4 w-4 text-amber-600" />
      <span>{children}</span>
    </li>
  )
}

function LeadIn({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <span className="text-brand">{icon}</span>
        {title}
      </div>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  )
}

/* ---------------------------------- Page ---------------------------------- */

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const related = getRelatedPosts(post as any, 3)

  // JSON-LD: Article + FAQ + HowTo for measurement steps
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.coverImage.src}`],
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: [{ '@type': 'Organization', name: post.author.name }],
    publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Measure your dog for a harness',
    step: [
      { '@type': 'HowToStep', name: 'Neck base (A)', text: 'Measure at the base of the neck where a collar would sit, not the throat.' },
      { '@type': 'HowToStep', name: 'Chest girth (B)', text: 'Wrap the tape around the deepest part of the ribcage behind the elbows.' },
      { '@type': 'HowToStep', name: 'Length (C)', text: 'From withers to end of ribcage (avoid measuring onto the belly).' },
      { '@type': 'HowToStep', name: 'Allowance', text: 'Add 2–3cm comfort allowance for winter coat or fluff.' },
      { '@type': 'HowToStep', name: 'Try-on & adjust', text: 'Fit so you can slide two fingers flat under straps; check stride and armpit clearance.' },
    ],
    totalTime: 'PT10M',
    supply: [{ '@type': 'HowToSupply', name: 'Soft tape measure' }, { '@type': 'HowToSupply', name: 'Treats for stillness' }],
    tool: [{ '@type': 'HowToTool', name: 'Harness with adjustable straps' }],
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Front-clip vs back-clip—what’s the difference?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Back-clip is simple and comfortable for most dogs; front-clip gives extra steering for pullers. Many harnesses offer both so you can swap based on context.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are “no-pull” strap harnesses safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Avoid designs that tighten across shoulders or armpits—these can restrict movement and rub. Choose a Y-front with good chest plate and adjusters instead.',
        },
      },
      {
        '@type': 'Question',
        name: 'Escape-proof needs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Look for a 3-strap (double-belly) harness for slim or Houdini dogs. Always double-clip to collar on new routes until you trust the fit.',
        },
      },
    ],
  }

  return (
    <article className="min-h-screen bg-bg">
      {/* Banner */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>
        <div className="relative h-56 md:h-72 lg:h-80">
          <Image src={post.coverImage.src} alt={post.coverImage.alt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,rgba(0,0,0,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(19,20,21,0.45))]" />
        </div>
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-sm font-medium text-[#131415] ring-1 ring-black/5 backdrop-blur hover:bg-white" aria-label="Back to blog">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/75 px-2.5 py-1 text-xs font-semibold text-[#131415] ring-1 ring-black/5">{post.category}</span>
          {post.location && (
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/75 px-2.5 py-1 text-xs font-medium text-[#131415] ring-1 ring-black/5"><MapPin className="h-3.5 w-3.5" /> {post.location}</span>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Title card */}
        <header className="mx-auto -mt-10 rounded-2xl border bg-white/95 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur md:p-7" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>
          <div className="mb-2 flex flex-wrap gap-2 md:hidden">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEEE9] px-2.5 py-1 text-xs font-semibold text-[#131415]">{post.category}</span>
            {post.location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEEE9] px-2.5 py-1 text-xs font-medium text-[#131415]"><MapPin className="h-3.5 w-3.5" /> {post.location}</span>
            )}
          </div>
          <h1 className="text-balance text-2xl font-extrabold leading-tight text-[#131415] sm:text-3xl">{post.title}</h1>
          {post.excerpt && <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#7B828A]">{post.excerpt}</p>}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B828A]">
              <span className="inline-flex items-center gap-2">
                <Avatar className="h-6 w-6"><AvatarImage src={post.author?.avatar || '/logo.svg'} /><AvatarFallback>SD</AvatarFallback></Avatar>
                <span className="font-medium text-[#131415]">Saltaire Dog Walks</span>
              </span>
              <span aria-hidden>•</span>
              <time dateTime={post.datePublished}>{publishedDate}</time>
              {typeof post.readingTime === 'number' && (<><span aria-hidden>•</span><span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingTime} min read</span></>)}
            </div>
            <div className="flex gap-2">
              <a href={mailShare} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>Email</a>
              <a href={waShare} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>Share</a>
            </div>
          </div>
        </header>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Content */}
      <div className="mt-8 prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        The right harness should let your dog <em>move naturally</em>, keep pressure off the throat, and give you
        calm, predictable handling on Saltaire’s towpath, parks and narrow heritage streets. Below is a quick decision
        matrix, a measurement guide, and honest pros/cons of common designs.
      </p>

      {/* Quick picks (matrix) */}
      <section aria-labelledby="quick-picks" className="mt-8">
        <h2 id="quick-picks">Quick picks (what usually works best)</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <LeadIn icon={<PawPrint className="h-4 w-4" />} title="Everyday calm walkers">
            A well-fitted <strong>Y-front harness</strong> with both <em>front</em> and <em>back</em> clips. Back clip
            for normal walks; front clip when you need extra steering through busy pinch points.
          </LeadIn>
          <LeadIn icon={<ShieldCheck className="h-4 w-4" />} title="New, sensitive or escape-prone">
            Choose a <strong>3-strap (double-belly)</strong> Y-front for security and adjustability. Double-clip to the
            collar for new routes until you trust the fit.
          </LeadIn>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Pill>Y-front</Pill>
          <Pill>Front &amp; back clip</Pill>
          <Pill>Double-belly for Houdinis</Pill>
          <Pill>Soft edges &amp; armpit clearance</Pill>
        </div>
      </section>

      {/* Measurement guide */}
      <section aria-labelledby="measure" className="mt-12">
        <h2 id="measure">Measure &amp; fit (2–3 minutes)</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Ruler className="h-4 w-4 text-brand" />
              Steps
            </div>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>
                <strong>Neck base:</strong> measure where a collar sits (not high on the throat).
              </li>
              <li>
                <strong>Chest girth:</strong> around the deepest part of the ribcage, just behind the elbows.
              </li>
              <li>
                <strong>Length:</strong> withers to end of ribcage. The belly strap should sit <em>behind</em> armpits.
              </li>
              <li>
                <strong>Allowance:</strong> add 2–3cm for fluffy coats or winter layers.
              </li>
              <li>
                <strong>Fit test:</strong> two fingers flat under each strap; watch a few strides—no rubbing, no
                shoulder pinch.
              </li>
            </ol>

            <details className="mt-4 rounded-xl border border-border bg-muted/30 px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium">Why “two fingers” matters</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Too loose = shifting and chafe; too tight = restricted stride and pressure points. Aim for flat fingers,
                not tips, under each strap.
              </p>
            </details>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="relative h-60 w-full sm:h-72">
              <Image
                src="/blog/harness-measure-guide.png"
                alt="Where to measure: neck base, chest girth, and length to end of ribcage"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            <div className="px-5 py-4 text-sm text-muted-foreground">
              Tip: reward stillness every 5–10 seconds during measuring. A calm pup = accurate measurements.
            </div>
          </div>
        </div>
      </section>

      {/* Types comparison */}
      <section aria-labelledby="types" className="mt-12">
        <h2 id="types">Harness types (pros &amp; cons)</h2>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr className="text-muted-foreground">
                <th className="p-3">Type</th>
                <th className="p-3">Best for</th>
                <th className="p-3">Pros</th>
                <th className="p-3">Watch-outs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-medium">Y-front (front &amp; back clip)</td>
                <td className="p-3">Most dogs; city &amp; towpath</td>
                <td className="p-3">Balanced pressure, natural gait, flexible lead options</td>
                <td className="p-3">Needs proper armpit clearance to avoid rub</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium">3-strap Y-front (escape-resist)</td>
                <td className="p-3">Slim, nervous, or Houdini dogs</td>
                <td className="p-3">Extra belly strap for security; fine-tuned adjustment</td>
                <td className="p-3">Slightly longer fitting time</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Back-clip only</td>
                <td className="p-3">Calm walkers</td>
                <td className="p-3">Simple to clip; tidy lead line</td>
                <td className="p-3">Less steering if pulling starts</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-medium">Front-clip only</td>
                <td className="p-3">Training phases; busy pinch points</td>
                <td className="p-3">Extra steering to turn away from tension</td>
                <td className="p-3">Lead can drift across legs if handler position changes</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Tightening “no-pull” strap</td>
                <td className="p-3">We generally avoid</td>
                <td className="p-3">May reduce pulling acutely</td>
                <td className="p-3">Can restrict shoulders &amp; cause rub—prefer Y-front + training</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Fit checklist */}
      <section aria-labelledby="fit-check" className="mt-12">
        <h2 id="fit-check">Fit checklist (2-minute audit)</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <Check>Two fingers flat under each strap; no skin pinching when sitting.</Check>
          <Check>Front “Y” sits at the breastbone (not up on the throat).</Check>
          <Check>Belly strap is behind the armpit; no rubbing on the elbow fold.</Check>
          <Check>Shoulders step freely—watch 5–6 strides on a straight line.</Check>
          <Check>Clips lie flat; nothing digs in when your dog lies down.</Check>
          <Check>Lead attachment suits context (front in tight spaces, back for cruising).</Check>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section aria-labelledby="trouble" className="mt-12">
        <h2 id="trouble">Troubleshooting common issues</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Activity className="h-4 w-4 text-brand" />
              Pulling
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Check>Add a front-clip lead for steering through busy canal pinch points.</Check>
              <Check>Reward slack-lead moments; stop/restart if the lead tightens.</Check>
              <Caution>Avoid harsh anti-pull straps—fix the habit, not the gait.</Caution>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Scissors className="h-4 w-4 text-brand" />
              Chafing &amp; rub
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Check>Shift belly strap further behind the elbow; loosen one notch.</Check>
              <Check>Pick soft, rounded edging; avoid stiff webbing near armpits.</Check>
              <Caution>If redness persists, rest &amp; reassess fit—or try a different pattern.</Caution>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Ban className="h-4 w-4 text-brand" />
              Backing out / escapes
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Check>Use a 3-strap escape-resist design and snug girth fit.</Check>
              <Check>Double-clip to collar during new routes or fireworks season.</Check>
              <Caution>Rehearse calm pauses at kerbs—exits often happen when turning.</Caution>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Info className="h-4 w-4 text-brand" />
              Reactive dogs
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <Check>Front-clip for gentle turn-aways; pair with distance increases.</Check>
              <Check>Practice “find it” food scatter to break visual lock on triggers.</Check>
              <Caution>Skip narrow towpath rush hours; take parallel streets instead.</Caution>
            </ul>
          </div>
        </div>
      </section>

      {/* Micro-FAQ (collapsible details; server-safe) */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-white">
          <details className="px-5 py-4">
            <summary className="cursor-pointer list-none font-medium">Should I pair a harness with a collar?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Yes—keep ID on a flat collar. You can double-clip lead to harness and collar for safety on new routes.
            </p>
          </details>
          <details className="px-5 py-4">
            <summary className="cursor-pointer list-none font-medium">Front or back clip for the canal?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              Use <strong>front-clip</strong> at busy locks/bridges for steering; switch to <strong>back-clip</strong>{' '}
              along open, calm stretches.
            </p>
          </details>
          <details className="px-5 py-4">
            <summary className="cursor-pointer list-none font-medium">What lead pairs best?</summary>
            <p className="mt-2 text-sm text-muted-foreground">
              A <em>2-clip (double-ended)</em> lead lets you swap front/back points without re-clipping. For town, keep
              it at 1.2–1.5m to avoid tangles.
            </p>
          </details>
        </div>
      </section>

      {/* Soft CTA */}
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
              Want a harness fit check on your street?
            </h2>
            <p className="mt-2 text-white/85">
              We’ll pop by in Saltaire/Shipley, adjust straps, and suggest a lead setup for your usual routes—towpath
              or town.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=harness-fit-check"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book a free meet &amp; greet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                See services
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • GPS &amp; photos • Calm handling</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
      </div>

      {/* Tags */}
      {post.tags?.length ? (
        <div className="mt-10 border-t border-stone-200 pt-6">
          <h4 className="mb-3 font-semibold text-text">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (<Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>))}
          </div>
        </div>
      ) : null}

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-stone-200 pt-8">
          <h2 className="mb-6 text-2xl font-bold text-text">More like this</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((rp: any) => (
              <Card key={rp.slug} className="overflow-hidden transition hover:shadow-lg">
                <div className="relative h-40">
                  <Image src={rp.coverImage.src} alt={rp.coverImage.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <Badge className="absolute left-3 top-3 bg-[#C89B3C] text-[#131415]">{rp.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-text"><Link href={`/blog/${rp.slug}`} className="link-underline">{rp.title}</Link></h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{rp.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{typeof rp.readingTime === 'number' ? `${rp.readingTime} min read` : null}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Gentle disclaimer */}
      <p className="mt-8 text-xs text-muted-foreground">
        This guide is educational and not a substitute for veterinary advice. If your dog shows discomfort or gait
        changes, consult your vet or a qualified physio.
      </p>
    </div>
    </article>
  )
}
