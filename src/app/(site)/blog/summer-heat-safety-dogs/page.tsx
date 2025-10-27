import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SAMPLE_BLOG_POSTS, getRelatedPosts } from '@/lib/blog-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin, ArrowLeft, Clock } from 'lucide-react'

// Pull post shell from data so hubs/cards stay in sync
const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === 'summer-heat-safety-dogs')!

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

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const related = getRelatedPosts(post as any, 3)

  // JSON-LD: Article + FAQ
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

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What time should I walk my dog in summer heat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Go early (before 9:30) or late (after 19:00, light dependent). Avoid the midday window. Pick shade-first routes like Hirst Wood edges and Shipley Glen perimeter.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I check if the pavement is too hot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Use the 7-second back-of-hand test on sunlit tarmac. If you cannot hold your hand comfortably, it is too hot for paws. Prefer grass, woodland and shaded paths.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are early signs of heat stress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Heavy panting, glazed eyes, slowing, tongue widening, drooling, wobble. Stop, move to shade, small sips of cool (not cold) water, wetted cloth to armpits/groin. Seek a vet if symptoms persist.',
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
          {post.location && (
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/75 px-2.5 py-1 text-xs font-medium text-[#131415] ring-1 ring-black/5">
              <MapPin className="h-3.5 w-3.5" /> {post.location}
            </span>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Title card */}
        <header
          className="mx-auto -mt-10 rounded-2xl border bg-white/95 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur md:p-7"
          style={{ borderColor: 'var(--hairline,#E6E3DA)' }}
        >
          <div className="mb-2 flex flex-wrap gap-2 md:hidden">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEEE9] px-2.5 py-1 text-xs font-semibold text-[#131415]">
              {post.category}
            </span>
            {post.location && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EFEEE9] px-2.5 py-1 text-xs font-medium text-[#131415]">
                <MapPin className="h-3.5 w-3.5" /> {post.location}
              </span>
            )}
          </div>

          <h1 className="text-balance text-2xl font-extrabold leading-tight text-[#131415] sm:text-3xl">{post.title}</h1>
          {post.excerpt && (
            <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#7B828A]">{post.excerpt}</p>
          )}

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B828A]">
              <span className="inline-flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.author?.avatar || '/logo.svg'} />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
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

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Content */}
      <div className="mt-8 prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        Summers in Saltaire can be gorgeous—and warm. Here's a simple plan to keep walks safe: choose cooler slots,
        pick shade-first routes, protect paws, carry water, and watch for early heat signs. This page gathers practical,
        local tips we use with client dogs every week.
      </p>

      {/* Quick plan for hot days */}
      <section aria-labelledby="plan" className="mt-10">
        <h2 id="plan">Quick plan for hot days</h2>
        <ul className="mt-3 grid gap-3 lg:grid-cols-2">
          {[
            ['Timing', 'Go early (before 09:30) or late (after 19:00, light-dependent). Skip midday.'],
            ['Route', 'Pick shade-first woodland edges (Hirst Wood, Shipley Glen perimeter). Avoid long, exposed tarmac.'],
            ['Pace', 'Shorter, calmer loops beat long slogs. Add sniffing breaks in shade.'],
            ['Water', 'Carry fresh water + collapsible bowl. Offer small sips often.'],
            ['Paws', 'Use grass/woodland. Do the 7-second hand test on tarmac before stepping off.'],
            ['Plan B', "If it's truly hot, swap to enrichment at home and a late toilet loop."],
          ].map(([title, txt]) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-4">
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{txt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Figure */}
      <figure className="mt-10 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src="/poodle-brown.png"
            alt="Calm lead walking in dappled shade near Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Choose shade-first loops on warm days: Hirst Wood edges and Shipley Glen perimeter are good options.
        </figcaption>
      </figure>

      {/* Early signs & what to do */}
      <section aria-labelledby="signs" className="mt-12">
        <h2 id="signs">Early heat signs and what to do</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Watch for</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Heavy panting, tongue getting wide, glazed or worried look</li>
              <li>Slowing, lying down sooner than usual, wobble or disorientation</li>
              <li>Drooling, bright-red gums, unwilling to move</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Respond with</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Stop; rest in shade. Offer small sips of cool (not cold) water.</li>
              <li>Wetten a cloth and apply to armpits/groin. No ice baths.</li>
              <li>Call your vet if symptoms persist or worsen.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Paw safety & surfaces */}
      <section aria-labelledby="paws" className="mt-12">
        <h2 id="paws">Paw safety: surfaces and the 7-second test</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Touch the pavement with the back of your hand for 7 seconds. If it's uncomfortable, it's too hot for paws.
          Prefer grass, woodland and shaded, lighter paths. Keep nails trimmed to help grip on warm surfaces.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {[
            ['Grass & woodland', 'Cooler and kinder on paws—best default on warm days.'],
            ['Pale stone', 'Reflects more heat than tarmac; still test in direct sun.'],
            ['Dark tarmac', 'Heats fast in sun; avoid long stretches at midday.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-white p-4">
              <p className="text-sm font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breed & age cautions */}
      <section aria-labelledby="cautions" className="mt-12">
        <h2 id="cautions">Breed & age cautions</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li><strong>Brachycephalics (short-nosed):</strong> Frenchies, pugs, bulldogs struggle to cool; go very short/early.</li>
          <li><strong>Senior dogs:</strong> Shorter, shaded loops with frequent rests; monitor closely.</li>
          <li><strong>Puppies:</strong> Heat + growth plates = keep it brief. Do more enrichment at home.</li>
          <li><strong>Dark/long coats:</strong> Absorb heat faster; pick deep shade and carry extra water.</li>
        </ul>
      </section>

      {/* Water safety */}
      <section aria-labelledby="water" className="mt-12">
  <h2 id="water">Water: drink, don’t dunk</h2>
        <div className="mt-2 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Hydration</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Carry fresh water and offer small sips regularly. Avoid long fetch games or frantic play in heat—gentle
              sniffy walking is better.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Hazards</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Stagnant or slow water can bloom algae in heat; avoid drinking from canals/ponds. Keep tows of locks and
              weirs strictly on-lead.
            </p>
          </article>
        </div>
      </section>

      {/* Quick FAQ matching JSON-LD */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            {
              q: 'Best time to walk?',
              a: 'Early morning or late evening; shade-first routes on warm days.',
            },
            {
              q: 'Pavement too hot?',
              a: "Do the 7-second hand test; prefer grass and woodland if it's hot to touch.",
            },
            {
              q: 'Carry water?',
              a: 'Yes—small, frequent sips. Collapsible bowl lives in your bag all summer.',
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
              Want a cool, safe summer routine tailored to your street?
            </h2>
            <p className="mt-2 text-white/85">
              We plan early/late slots, pick shade-first loops, and carry water—with photo & GPS updates each walk.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=summer-walks"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book a meet &amp; greet
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
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">{tag}</Badge>
            ))}
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
                  <h3 className="mb-2 line-clamp-2 font-semibold text-text">
                    <Link href={`/blog/${rp.slug}`} className="link-underline">{rp.title}</Link>
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{rp.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{typeof rp.readingTime === 'number' ? `${rp.readingTime} min read` : null}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <Card className="mt-12 border-[#C89B3C]/20 bg-gradient-to-br from-[#C89B3C]/5 to-[#C89B3C]/10 p-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-2 text-xl font-bold text-text">Tiny emails, useful tips</h3>
          <p className="mb-6 text-muted-foreground">Occasional notes on local routes, safety, and calm handling. Unsubscribe anytime.</p>
          <form action="/api/newsletter" method="post" className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <input type="email" name="email" required placeholder="Your email address" className="flex-1 rounded-lg border border-border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C89B3C]/40" />
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#C89B3C] px-4 py-2 text-sm font-semibold text-[#131415] hover:opacity-90">Subscribe</Link>
          </form>
        </div>
      </Card>
      </div>
    </article>
  )
}
