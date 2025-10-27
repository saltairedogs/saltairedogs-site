// src/app/(site)/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin, ArrowLeft, Clock } from 'lucide-react'
import { getRelatedPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title:
    'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times | Saltaire Dog Walks Blog',
  description:
    'Everything you need for calm canal walks: safety checks, meeting etiquette, and when the towpath is busiest—plus quiet alternatives nearby.',
  openGraph: {
    title:
      'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times',
    description:
      'Calm, practical canal-walking advice from daily local walkers—readiness checks, etiquette, busy-time heuristics, and nearby alternatives.',
    type: 'article',
    images: ['/saltaire-canal-retriever-on-lead-cobbles.jpg'],
    url: '/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
  },
  alternates: {
    canonical:
      '/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
  },
}

const post = {
  slug: 'leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
  title:
    'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times',
  excerpt:
    'Towpath tips from daily walkers—readiness checks, meeting etiquette, busy-time patterns, and calmer alternatives when it’s packed.',
  coverImage: {
    src: '/saltaire-canal-retriever-on-lead-cobbles.jpg',
    alt: 'Golden retriever walking on cobbles by the Saltaire canal towpath near a stone mill',
  },
  author: { name: 'Saltaire Dog Walks', avatar: '/logo.svg' },
  datePublished: new Date().toISOString(),
  readingTime: 9,
  category: 'Walking',
  location: 'Saltaire, Leeds–Liverpool Canal',
  tags: ['canal towpath', 'etiquette', 'safety', 'busy times', 'local routes'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const related = getRelatedPosts(post as any, 3)

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
        name: 'When is the Saltaire towpath busiest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Typically weekday 08:00–09:30, 16:30–18:30, and fine-weather weekends late morning to mid-afternoon. School holidays and sunny evenings also spike footfall and bikes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should my dog be on lead on the towpath?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'In narrow or busy sections, at bridges, near locks and anglers, keep leads short. If recall drops below reliable, use a standard lead or long line away from traffic/cyclists. Always follow on-site signage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s good etiquette when meeting others?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Step aside early for bikes and prams, keep your dog close at bridges and pinch points, avoid greetings with dogs on lead unless invited, and pass anglers with a wide arc and a quick “Thanks!”.',
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
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Content */}
      <div className="mt-8 prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        The canal through Saltaire is beautiful—and narrow. With a little prep, you can keep things calm even on busy
        days. Below you’ll find <strong>before-you-go safety checks</strong>, <strong>towpath etiquette</strong>,
        <strong> busy-time heuristics</strong>, and <strong>nearby alternatives</strong> when you need extra space.
      </p>

      {/* Safety note */}
      <div
        role="note"
        aria-label="Towpath safety note"
        className="my-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
      >
        <strong className="font-semibold">On-site signs first.</strong> Rules and works change. Treat this as practical
        guidance; follow posted signage and use a short lead at bridges, locks and blind corners.
      </div>

      {/* Section: Before-you-go checks */}
      <section aria-labelledby="checks" className="mt-10">
        <h2 id="checks">Before-you-go checks (60-second scan)</h2>
        <ul className="mt-3 grid gap-3 lg:grid-cols-2">
          {[
            ['Lead & kit', 'Y-front harness, 1.5–2 m lead (plus a long line for quiet fields), ID tag, spare poo bags.'],
            ['Readiness', 'Name response is instant; recall solid around low-to-medium distractions. If not, stay on lead.'],
            ['Conditions', 'Rain = slick stones; recent floods = debris; summer = algae risk in still water.'],
            ['Timing', 'If it’s school run, sunny Sat, or event day, pick a quiet loop or go earlier/later.'],
          ].map(([title, txt]) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-4">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{txt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Section: Etiquette */}
      <section aria-labelledby="etiquette" className="mt-12">
        <h2 id="etiquette">Meeting etiquette that keeps everyone relaxed</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Passing bikes, prams & runners</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Step in early; face your dog to you; keep leads short and loose (no tension spikes).</li>
              <li>Bridge lips and lock edges: <em>no greetings</em>—just flow past.</li>
              <li>Thank people out loud—tone sets the mood for the next pass.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Dogs & anglers</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Skip greetings with dogs on lead unless invited—many need space.</li>
              <li>Give anglers a wide, steady arc; avoid lines, bait boxes and keep-nets.</li>
              <li>Reward check-ins after each pass to keep focus on you.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Section: Busy times heuristic */}
      <section aria-labelledby="busy" className="mt-12">
        <h2 id="busy">When the towpath is busiest (heuristic)</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Not scientific—just the pattern we see as daily walkers. Use it to pick calmer slots.
        </p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Day</th>
                <th className="px-4 py-3">Busier windows</th>
                <th className="px-4 py-3">Calmer windows</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium">Weekdays</td>
                <td className="px-4 py-3">08:00–09:30 • 16:30–18:30</td>
                <td className="px-4 py-3">10:00–15:30 • after 19:00 (light dependent)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Weekends</td>
                <td className="px-4 py-3">10:30–16:00 (good weather spikes)</td>
                <td className="px-4 py-3">Early (07:30–09:30) • Late evening</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">School holidays</td>
                <td className="px-4 py-3">Late mornings • Mid-afternoons</td>
                <td className="px-4 py-3">Early morning • Dull/drizzly days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Micro-routes & alternatives */}
      <section aria-labelledby="routes" className="mt-12">
        <h2 id="routes">Micro-routes near Saltaire when you need extra space</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Roberts Park perimeter loop</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Use the <em>outer</em> perimeter when events crowd the central paths. Clear sight-lines and easy step-offs.
              Keep leads short near the bridges.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Hirst Wood edges</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Woodland margins offer decompression without towpath traffic. Great for long-line practice on quiet days.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Quiet street loops</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              On truly packed weekends, do a calm village loop: pavements, crossings, and wide turns. Reward check-ins
              at every kerb; your dog rehearses perfect manners.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Bookable dog fields</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For recall work, a hire field buys you safety and headspace. Two 20-minute sessions beat one frenetic hour.
            </p>
          </article>
        </div>
      </section>

      {/* Section: Water hazards quick guide */}
      <section aria-labelledby="water" className="mt-12">
        <h2 id="water">Water hazards at a glance</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-3">
          {[
            ['Weirs & locks', 'Fast water and under-tow. Keep dogs on lead in these zones—no exceptions.'],
            ['Cold shock', 'Even on warm days, sudden immersion can stun. Avoid water entry from high banks.'],
            ['Algae & debris', 'Still water in heat can bloom algae; flood debris snags leads. Keep drinking water with you.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-white p-4">
              <p className="text-sm font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Figure */}
      <figure className="mt-12 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-64 w-full">
          <Image
            src="/saltaire-canal-retriever-on-lead-cobbles.jpg"
            alt="On-lead, calm passing on the cobbles by the canal near Saltaire; handler keeping the lead short at a bridge"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Bridge etiquette: shorten the lead, pass without greetings, then reward your dog’s check-in once clear.
        </figcaption>
      </figure>

      {/* Mini FAQ (mirrors JSON-LD) */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            {
              q: 'When is the towpath busiest?',
              a: 'Weekday commute windows, sunny weekend middays, and school-holiday afternoons. Go early or late for calmer passes.',
            },
            {
              q: 'Lead or off-lead?',
              a: 'Short lead near bridges, locks and pinch points. If recall dips, switch to lead (or long line off the towpath).',
            },
            {
              q: 'What’s one habit that helps most?',
              a: 'Reward voluntary check-ins every 15–30 seconds. A dog who’s looking to you is already walking better.',
            },
          ].map((f) => (
            <div key={f.q} className="px-5 py-4">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
              Want a calm towpath routine tailored to your street?
            </h2>
            <p className="mt-2 text-white/85">
              We plan quiet-time slots, practice check-ins, and handle busy passes so your dog stays relaxed—even on
              event days.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=canal-walks"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book a meet &amp; greet
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg_white/15 hover:bg-white/15"
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

      </div>
    </article>
  )
}
