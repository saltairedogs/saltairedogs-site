// src/app/(site)/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access/page.tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, Clock } from 'lucide-react'
import { getRelatedPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title:
    'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access | Saltaire Dog Walks Blog',
  description:
    'Circular routes, seasonal mud levels, and access notes for Hirst Wood and Shipley Glen. Quiet-time tips, safety checks, and realistic timings.',
  openGraph: {
    title:
      'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access',
    description:
      'Plan woodland loops with realistic mud ratings, access notes, and quiet-time tips—written by daily local walkers.',
    type: 'article',
    url: '/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
    images: ['/poodle-walking-shipley-glenn.jpg'],
  },
  alternates: {
    canonical:
      '/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
  },
}

const post = {
  slug: 'hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
  title: 'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access',
  excerpt:
    'Plan your woodland walks with practical, local detail—especially helpful after rain. Three circular loops, mud meter, access & safety notes.',
  coverImage: { src: '/poodle-walking-shipley-glenn.jpg', alt: 'Dog walking on a woodland path near Shipley Glen' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 9,
  category: 'Local Spots',
  tags: ['Hirst Wood', 'Shipley Glen', 'mud levels', 'circular walks', 'access'],
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
        name: 'How muddy are Hirst Wood & Shipley Glen after rain?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Expect moderate to heavy mud on clay sections and in dips after prolonged rain. Boardwalks help in places, but choose routes with firmer edges if you need cleaner paws.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there steep sections or steps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes—Shipley Glen includes stepped paths and short, steeper scrambles. Choose the perimeter and bridleway lines for gentler gradients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is off-lead okay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Only if your recall is reliable around wildlife and other dogs. Use a standard lead or long line where visibility is limited, and follow local signage and seasonal notices.',
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
        Hirst Wood and Shipley Glen are our go-to woodland loops—shade in summer, shelter in drizzle, and enough variety
        to keep dogs engaged without chaos. Below you’ll find three circulars with{' '}
        <strong>realistic timings</strong>, a <strong>mud meter</strong>, clear <strong>access notes</strong>, and
        safety tips for slopes, steps and winter light.
      </p>

      {/* Safety callout */}
      <div
        role="note"
        aria-label="Woodland safety note"
        className="my-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900"
      >
        <strong className="font-semibold">Woodland etiquette:</strong> yield early on narrow sections, keep dogs close at
        blind corners, and avoid greetings with on-lead dogs unless invited. Respect seasonal notices for wildlife.
      </div>

      {/* Figure */}
      <figure className="mt-8 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src="/poodle-walking-shipley-glenn.jpg"
            alt="Calm lead walking on a firm woodland path in Shipley Glen"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Firm perimeter path in the Glen—good option after wet weather. Keep leads short near steps and pinch points.
        </figcaption>
      </figure>

      {/* Mud meter */}
      <section aria-labelledby="mud" className="mt-12">
        <h2 id="mud">Mud meter (0–5)</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A quick, honest scale so you can pick the right loop for the day. Values assume the last 48 hours’ weather.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {[
            ['0–1 • Dry/Firm', 'Gravel, well-drained edges; shoes stay clean.'],
            ['2–3 • Patchy/Mixed', 'Soft patches in dips; boardwalk sections useful.'],
            ['4–5 • Muddy/Claggy', 'Clay holds water; expect slippy steps and puddles.'],
          ].map(([label, desc]) => (
            <div key={label} className="rounded-2xl border border-border bg-white p-4">
              <p className="text-sm font-semibold">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three circulars */}
      <section aria-labelledby="loops" className="mt-12">
        <h2 id="loops">Three circular loops (with surfaces & timings)</h2>

        {/* Loop 1 */}
        <article className="mt-4 rounded-2xl border border-border bg-white p-5">
          <h3 className="text-base font-semibold">1) Hirst Lock ↔ Nature Reserve Perimeter (≈25–35 mins)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A calm, mostly level loop: towpath start, then into the reserve perimeter and back via firm track.
            Great for <em>steady on-lead practice</em> and puppies building confidence.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li><strong>Surface:</strong> towpath stone, compact soil, short boardwalks</li>
            <li><strong>Mud:</strong> 2–3 after rain; 1–2 in dry spells</li>
            <li><strong>Pinch points:</strong> reserve gates; give way if busy</li>
            <li><strong>Notes:</strong> keep leads short near water and anglers</li>
          </ul>
        </article>

        {/* Loop 2 */}
        <article className="mt-4 rounded-2xl border border-border bg-white p-5">
          <h3 className="text-base font-semibold">2) Shipley Glen Perimeter & Upper Edge (≈40–55 mins)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            More variety with gentle elevation; good sight-lines along the upper edge. Ideal for{' '}
            <em>long-line focus work</em> on quieter days.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li><strong>Surface:</strong> woodland track, stone steps (avoidable via bridleway lines)</li>
            <li><strong>Mud:</strong> 2 in dry, 3–4 after rain on clay sections</li>
            <li><strong>Pinch points:</strong> stepped paths and narrow boulders</li>
            <li><strong>Notes:</strong> choose bridleways for prams/less steps</li>
          </ul>
        </article>

        {/* Loop 3 */}
        <article className="mt-4 rounded-2xl border border-border bg-white p-5">
          <h3 className="text-base font-semibold">3) Glen Cross-Valley Figure-8 (≈60–75 mins)</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            The “big loop” with a satisfying mix of forest, edges and short climbs. Best for{' '}
            <em>dogs with sure-footed confidence</em>.
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li><strong>Surface:</strong> mixed woodland path, stone, occasional roots</li>
            <li><strong>Mud:</strong> 3 in fair weather; 4–5 after continuous rain</li>
            <li><strong>Pinch points:</strong> narrow ridges—keep dogs close</li>
            <li><strong>Notes:</strong> carry water; shade can be cool even in summer</li>
          </ul>
        </article>
      </section>

      {/* Access & parking */}
      <section aria-labelledby="access" className="mt-12">
        <h2 id="access">Access, parking & gentle-gradient options</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Start point</th>
                <th className="px-4 py-3">Parking / access</th>
                <th className="px-4 py-3">Gradient</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium">Hirst Lock</td>
                <td className="px-4 py-3">Street parking (respect residents). Flat towpath entry.</td>
                <td className="px-4 py-3">Mostly level</td>
                <td className="px-4 py-3">Gates into reserve; short boardwalks.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Glen Road bottom</td>
                <td className="px-4 py-3">On-street. Steps on some lines.</td>
                <td className="px-4 py-3">Gentle–moderate</td>
                <td className="px-4 py-3">Use bridleway for fewer steps.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Glen Tramway top</td>
                <td className="px-4 py-3">Limited spaces. Quicker access to upper edge.</td>
                <td className="px-4 py-3">Moderate</td>
                <td className="px-4 py-3">Good sight-lines; can be breezy.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Always check live signage/closures. Respect residents, verges and emergency access.
        </p>
      </section>

      {/* Seasonal & weather notes */}
      <section aria-labelledby="seasons" className="mt-12">
        <h2 id="seasons">Seasonal & weather notes</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-sm font-semibold">After rain</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose perimeter/bridleway lines and avoid clay dips. Boardwalks reduce mess but can be slick—steady pace,
              short lead. Pack a small towel for paws.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-sm font-semibold">Wind & winter light</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Upper edges catch wind; woodland floor gets dim early. Add a light for your dog and avoid steep descents at dusk.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-sm font-semibold">Nesting & wildlife</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Keep to paths in spring; avoid scrambling off-trail. Long lines only where visibility is clear and footfall is low.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-sm font-semibold">Heat plan</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Woodland is cooler but still warm on climbs. Walk earlier, bring water, and pause in shade. Skip long fetch games.
            </p>
          </div>
        </div>
      </section>

      {/* Gear checklist */}
      <section aria-labelledby="kit" className="mt-12">
        <h2 id="kit">Quick kit (keeps walks easy)</h2>
        <ul className="mt-2 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Y-front harness + 1.5–2 m lead (long line for quiet fields)</li>
          <li>Collapsible bowl & water (especially on the figure-8)</li>
          <li>Microfibre towel for paws & car mats</li>
          <li>High-viz or light in low light</li>
          <li>Treat pouch for check-ins at pinch points</li>
          <li>Spare bags; sealable pouch for rubbish</li>
        </ul>
      </section>

      {/* Mini FAQ mirroring JSON-LD */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            {
              q: 'How muddy is it this week?',
              a: 'If we’ve had steady rain for two days, expect Mud 3–4 in dips and on clay paths. Use perimeter lines for cleaner paws.',
            },
            {
              q: 'Any steep bits to avoid with prams?',
              a: 'Yes—use the bridleway lines around the Glen and stick to the reserve perimeter near Hirst Wood.',
            },
            {
              q: 'Off-lead?',
              a: 'Only with solid recall around wildlife/people. Otherwise use a long line in open, visible areas or keep to a standard lead.',
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
              Want a woodland plan tailored to your dog?
            </h2>
            <p className="mt-2 text-white/85">
              We pick gradients, surfaces and timings to suit your route—and send photo + GPS updates so you know how it
              went.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=hirst-wood-shipley-glen"
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
