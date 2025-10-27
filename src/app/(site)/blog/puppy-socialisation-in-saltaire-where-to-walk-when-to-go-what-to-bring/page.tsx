// src/app/(site)/blog/puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, Clock } from 'lucide-react'
import { RelatedPosts } from '@/components/blog/related-posts'

export const metadata: Metadata = {
  title: 'Puppy Socialisation in Saltaire: Where to walk, when to go, what to bring | Saltaire Dog Walks Blog',
  description:
    'Calm, structured socialisation around Saltaire—short, positive sessions in quiet places with simple kit and smart timing.',
  alternates: { canonical: '/blog/puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring' },
  openGraph: {
    title: 'Puppy Socialisation in Saltaire: Where to walk, when to go, what to bring',
    description:
      'Where to go first, when to go, and what to bring—local, practical puppy socialisation advice for Saltaire & Shipley.',
    type: 'article',
    url: '/blog/puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring',
    images: [{ url: '/saltaire-victoria-road-schnauzer-on-lead.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puppy Socialisation in Saltaire: Where to walk, when to go, what to bring',
    description:
      'Local plan for calm puppy socialisation: wide pavements, quiet park edges, timing tips and a compact kit list.',
    images: ['/saltaire-victoria-road-schnauzer-on-lead.jpg'],
  },
}

const post = {
  slug: 'puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring',
  title: 'Puppy Socialisation in Saltaire: where to walk, when to go, what to bring',
  excerpt:
    'Make the world feel friendly and predictable with short, positive outings around Saltaire. Here’s a practical local plan.',
  coverImage: {
    src: '/saltaire-victoria-road-schnauzer-on-lead.jpg',
    alt: 'Young dog calmly watching traffic at a safe distance on Victoria Road in Saltaire',
  },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: '2025-01-05T00:00:00.000Z',
  readingTime: 9,
  category: 'Puppy',
  tags: ['puppy', 'socialisation', 'first walks', 'training', 'Saltaire'],
}

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  function ArticleJsonLd() {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      datePublished: post.datePublished,
      author: [{ '@type': 'Organization', name: post.author.name }],
      image: [`${siteUrl}${post.coverImage.src}`],
      articleSection: post.category,
      keywords: post.tags.join(', '),
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
      description: post.excerpt,
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  }

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* Banner */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>
        <div className="relative h-56 md:h-72 lg:h-80">
          <Image src={post.coverImage.src} alt={post.coverImage.alt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(19,20,21,0.5))]" />
        </div>
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-sm font-medium text-[#131415] ring-1 ring-black/5 backdrop-blur hover:bg-white"
            aria-label="Back to blog"
          >
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/75 px-2.5 py-1 text-xs font-semibold text-[#131415] ring-1 ring-black/5">
            {post.category}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Title card */}
        <header className="mx-auto -mt-10 rounded-2xl border bg-white/95 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur md:p-7" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>
          <div className="mb-2 flex flex-wrap gap-2 md:hidden">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEEE9] px-2.5 py-1 text-xs font-semibold text-[#131415]">{post.category}</span>
          </div>
          <h1 className="text-balance text-2xl font-extrabold leading-tight text-[#131415] sm:text-3xl">{post.title}</h1>
          {post.excerpt && <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#7B828A]">{post.excerpt}</p>}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B828A]">
              <span className="inline-flex items-center gap-2">
                <Avatar className="h-6 w-6"><AvatarImage src={'/logo.svg'} /><AvatarFallback>SD</AvatarFallback></Avatar>
                <span className="font-medium text-[#131415]">Saltaire Dog Walks</span>
              </span>
              <span aria-hidden>•</span>
              <time dateTime={post.datePublished}>{publishedDate}</time>
              {typeof post.readingTime === 'number' && (
                <>
                  <span aria-hidden>•</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readingTime} min read</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <a href={mailShare} className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>Email</a>
              <a href={waShare} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>Share</a>
            </div>
          </div>
        </header>

        {/* JSON-LD */}
        <ArticleJsonLd />

        {/* Content */}
        <div className="mt-8 prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
          <p className="text-lg leading-relaxed text-muted-foreground">Make the world feel safe and predictable. Choose wide pavements, short sessions, and one new experience at a time.</p>

          <h2>Where to go first</h2>
          <p>Pick wide, quiet places with easy exits. Avoid bottlenecks until your puppy is more confident.</p>
          <ul>
            <li><strong>Quiet streets:</strong> Victoria Road (early), and side streets by the mill.</li>
            <li><strong>Park edges:</strong> Perimeter paths of Roberts Park; pause on benches for “look and treat.”</li>
            <li><strong>Towpath with care:</strong> Only the widest stretches. Step off early for bikes and runners.</li>
          </ul>
          <p className="text-sm text-muted-foreground">For wet weeks, see our <Link href="/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear" className="underline decoration-brand/40 underline-offset-2 hover:decoration-brand">rainy-day guide</Link>.</p>

          <h2>When to go (timing matters)</h2>
          <ul>
            <li><strong>Best windows:</strong> Early mornings (6:30–8:30) and weekday mid-mornings.</li>
            <li><strong>Avoid:</strong> School run peaks, towpath pinch points, hot afternoons.</li>
            <li><strong>Session length:</strong> 5–10 minutes on lead at first; finish while they feel fresh.</li>
          </ul>

          <h2>What to bring (small + simple)</h2>
          <ul>
            <li><strong>Lead & harness:</strong> Y-front harness; 1.8–2 m fixed lead; optional 3–5 m long line.</li>
            <li><strong>Treats:</strong> Two values—“normal” and “wow” for bigger moments; one-handed pouch.</li>
            <li><strong>Weather:</strong> Micro towel, light drying coat, water + foldable bowl.</li>
            <li><strong>For you:</strong> Waste bags, warm layer, phone on silent—eyes on the puppy.</li>
          </ul>

          <h2>The “one new thing” exposure plan</h2>
          <p>Aim for one new thing per walk, not a bingo card. Pair with food, end early, celebrate.</p>
          <ul>
            <li><strong>Sounds:</strong> Distant train (outside Saltaire station), bus brakes at 20–30 m, a bike bell heard once then treated.</li>
            <li><strong>Surfaces:</strong> Dry cobbles by the mill, wet grass for a short pass, timber footbridge with slow steps.</li>
            <li><strong>Sights:</strong> Pram at 10–15 m, jogger passing with a step-off, a calm dog across the path.</li>
          </ul>
          <p className="text-sm text-emerald-900 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 px-3 py-2"><strong>Green-light rule:</strong> your puppy takes food, sniffs, and disengages to you in 2–3 seconds. If not, add distance or change direction.</p>

          <h2>A gentle two-week scaffold</h2>
          <p>Keep volume low and quality high. Change one variable at a time.</p>
          <ul>
            <li>Mon: First easy lap — side streets → park perimeter; new thing: bike bell at distance</li>
            <li>Tue: Surface change — short pavement-only; new thing: 30–60s on cobbles</li>
            <li>Wed: People watching — park edge bench; new thing: pram at 10–15 m</li>
            <li>Thu: Sound — station fringe (carry if needed); new thing: quiet train arrival</li>
            <li>Fri: Flow — short towpath wide bit; new thing: jogger passes—step aside</li>
            <li>Sat: Rest / in-arms — quick look near park then home</li>
            <li>Sun: Repeat best day — celebrate a micro-win</li>
          </ul>

          <h2>Red flags (pause & adjust)</h2>
          <ul>
            <li><strong>Too much, too fast:</strong> refusing food, flattening, freezing, or lunging — add space and shorten.</li>
            <li><strong>Over-tired aftermath:</strong> wired zoomies then crash naps every time — halve duration and add a sniffy rest stop.</li>
          </ul>
          <p className="text-sm text-muted-foreground">If you’re unsure, ask your vet or a positive-reward trainer. You can also <Link href="/contact" className="underline decoration-brand/40 underline-offset-2 hover:decoration-brand">book a quick local consult</Link>.</p>

          <figure className="my-8 overflow-hidden rounded-3xl border border-border">
            <div className="relative h-64 w-full">
              <Image src="/saltaire-victoria-road-schnauzer-on-lead.jpg" alt="Calm street exposure: puppy watching traffic at a distance on Victoria Road" fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">Wide pavement, soft distance—perfect for early “look & treat” reps.</figcaption>
          </figure>

          <h2>Quick questions</h2>
          <div className="mt-2 divide-y divide-border rounded-2xl border border-border bg-white">
            {[
              { q: 'When can my puppy start walks?', a: 'Once your vet confirms vaccination cover. Until then, carry for safe exposures (stations, cafés, parks at a distance).' },
              { q: 'How long should first walks be?', a: 'Think minutes, not miles—6–10 minutes on lead plus a short sniff stop. Finish while your puppy still has gas in the tank.' },
              { q: 'Harness or collar?', a: 'A Y-front harness that allows free shoulder movement + a standard 1.5–2 m lead. Collars can be used for ID once lead skills are confident.' },
            ].map((f) => (
              <div key={f.q} className="px-5 py-4">
                <p className="font-medium">{f.q}</p>
                <p className="mt-1 text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

          {/* Closing CTA */}
          <section aria-labelledby="cta" className="mt-12">
            <div
              className="relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10"
              style={{
                background:
                  'radial-gradient(1000px_600px_at_10%_10%,rgba(200,155,60,0.18),transparent_60%),linear-gradient(135deg,#131415_0%,#1C1E20_100%)',
              }}
            >
              <div className="relative mx-auto max-w-3xl">
                <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Local help for a brilliant first month</h2>
                <p className="mt-2 text-white/85">We offer calm puppy drop-ins and short confidence walks around Saltaire. Let’s plan routes and timing that fit your routine.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact?topic=puppy" className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90">Book puppy consult</Link>
                  <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">See services</Link>
                </div>
                <p className="mt-4 text-xs text-white/70">DBS • First-aid • Positive methods • GPS &amp; photo updates</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>
          </section>
        </div>

        {/* Related */}
        <RelatedPosts currentSlug={post.slug} heading="More like this" />
      </div>
    </article>
  )
}

