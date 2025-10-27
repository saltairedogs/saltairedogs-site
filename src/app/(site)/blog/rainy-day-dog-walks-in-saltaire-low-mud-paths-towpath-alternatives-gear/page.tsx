// src/app/(site)/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, Clock } from 'lucide-react'
import { getRelatedPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear | Saltaire Dog Walks Blog',
  description:
    'Our wet-weather playbook for Saltaire & Shipley: paths that drain, alternatives to the towpath, and kit that keeps walks cheerful (and your floors cleaner).',
  alternates: { canonical: '/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear' },
  openGraph: {
    title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
    description:
      'Practical rainy-day walking in Saltaire: low-mud routes, safer towpath alternatives, and gear that actually helps.',
    url: '/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear',
    type: 'article',
    images: [{ url: '/saltaire-victoria-road-schnauzer-on-lead.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
    description:
      'Our wet-weather playbook: paths that drain, alternatives to the towpath, and kit that keeps walks cheerful.',
    images: ['/saltaire-victoria-road-schnauzer-on-lead.jpg'],
  },
}

const post = {
  slug: 'rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear',
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
  excerpt: 'Make rainy days easy with local knowledge and sensible kit suggestions.',
  coverImage: { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Dog on a damp Saltaire street walk, lead on, with reflective harness' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 8,
  category: 'Walking',
  tags: ['rainy day', 'mud levels', 'gear', 'safety', 'towpath alternatives'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

// Small inline helpers (server-safe)
function Divider() {
  return <hr className="my-10 border-t border-[color:var(--hairline,#E6E3DA)]" />
}

function Kbd({ children }: { children: any }) {
  return (
    <kbd className="rounded-md border border-[color:var(--hairline,#E6E3DA)] bg-[color:var(--surface,#FFFFFF)] px-1.5 py-0.5 text-[12px] font-semibold">
      {children}
    </kbd>
  )
}

function Note({ title, children }: { title: string; children: any }) {
  return (
    <aside className="my-6 rounded-xl border border-[color:var(--hairline,#E6E3DA)] bg-[color:var(--bg-tint,#F7F7F6)] p-4">
      <p className="mb-2 text-sm font-semibold">{title}</p>
      <div className="prose prose-sm prose-slate max-w-none">{children}</div>
    </aside>
  )
}

function Dot() {
  return <span aria-hidden="true" className="mx-2 text-[color:var(--hairline,#E6E3DA)]">•</span>
}

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const related = getRelatedPosts(post as any, 3)

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
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
      publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
      description: post.excerpt,
    }
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  }

  function RatioImage({ src, alt, ratio = '16/9', caption }: { src: string; alt: string; ratio?: string; caption?: string }) {
    return (
      <figure className="my-6 overflow-hidden rounded-2xl border border-border bg-white">
        <div className="relative w-full" style={{ aspectRatio: ratio }}>
          <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
        </div>
        {caption ? <figcaption className="px-3 py-2 text-xs text-muted-foreground">{caption}</figcaption> : null}
      </figure>
    )
  }

  function Callout({ title, children }: { title: string; children: any }) {
    return (
      <aside className="my-6 rounded-2xl ring-1 p-4 bg-emerald-50 ring-emerald-100">
        <p className="mb-1 text-sm font-semibold"><span className="inline-block border-b-2 border-[#C89B3C] pb-0.5">{title}</span></p>
        <div className="text-sm leading-relaxed opacity-90">{children}</div>
      </aside>
    )
  }

  function KeyList({ items }: { items: string[] }) {
    return (
      <ul className="my-4 grid list-disc gap-2 pl-5 text-[15px] leading-relaxed text-text">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    )
  }

  function SoftCta() {
    return (
      <div className="mt-10 rounded-3xl border border-border bg-gradient-to-b from-[#C89B3C]/10 to-transparent px-6 py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Local & reliable</p>
            <h3 className="text-xl font-bold tracking-tight">Want walks tailored to your streets?</h3>
            <p className="max-w-prose text-muted-foreground">Book a free meet &amp; greet—we’ll design routes around your dog, your routine, and Saltaire’s weather quirks.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-xl bg-[#C89B3C] px-4 py-2 text-sm font-semibold text-[#131415]">Book walks</Link>
            <Link href="/pricing" className="inline-flex items-center rounded-xl border border-muted bg-white/5 px-4 py-2 text-sm font-semibold">See pricing</Link>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">DBS • GPS & photos • Calm, capped groups</p>
      </div>
    )
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
        <ArticleJsonLd />

        {/* Content */}
        <div className="mt-8 prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
          {/* Lead / standfirst */}
          <p className="text-lg leading-relaxed text-muted-foreground">Make rainy days easier for your dog and your floors with a few local tricks: route choices that drain, quick micro-loops, and a compact kit that really helps.</p>

          {/* Key takeaways */}
          <h2>Key takeaways</h2>
          <KeyList
            items={[
              'Pick streets and park edges that drain quickly — avoid lawn cores after prolonged rain.',
              'Use short 7–9 minute micro-loops with a wipe between bursts on heavy days.',
              'Simple kit: reflective harness, microfibre towel, lightweight coat for seniors.',
            ]}
          />

          {/* Section 1 */}
          <h2 id="low-mud-routes">Local low-mud routes and why they work</h2>
          <p>
            In Saltaire the difference between a calm walk and a muddy slog is often a single street choice. We favour
            routes with good camber and regular drainage points — Victoria Road’s flagged sections, the perimeter of Roberts Park,
            and longer pavements on the Shipley side that keep water moving away from the walking line.
          </p>
          <Callout title="Local tip">
            <p>Start by checking wind direction near the canal; if spray is being pushed across the towpath, pick the park perimeter instead.</p>
          </Callout>

          <RatioImage src={post.coverImage.src} alt={post.coverImage.alt} ratio="16/9" caption="Victoria Road — a practical low-mud loop for rainy days." />

          {/* Section 2 */}
          <h2 id="towpath-alternatives">Towpath alternatives and quick swaps</h2>
          <p>
            The canal is lovely when calm but can become narrow and wet when the wind picks up. Swap to nearby streets or park edges
            for more predictable surfaces and fewer cyclists to dodge. Two Victoria Road laps often replace a challenging towpath section with similar time and less stress.
          </p>
          <KeyList items={[
            'Riverside → Park perimeter for calmer footing',
            'Locks busy? Do a street grid lap instead',
            'Reserve Hirst Wood for drier days — approach roads work better after rain'
          ]} />

          {/* Section 3 */}
          <h2 id="gear">Gear that keeps walks cheerful</h2>
          <p>
            Keep kit compact: a reflective harness, a quick-dry microfibre towel by the door, and a lightweight coat for thin-coated or senior dogs.
            Avoid heavy booties unless your dog is used to them — they can change gait and be lost in puddles.
          </p>

          <h3 className="mt-6">Essentials</h3>
          <ul>
            <li><strong>Reflective harness</strong> — balance and visibility at dusk.</li>
            <li><strong>Microfibre towel</strong> — fast wring, compact storage.</li>
            <li><strong>Silicone treat pouch</strong> — easy to wipe and quick to reward good choices.</li>
          </ul>

          <Callout title="Sizing note">
            <p>Check harness fit across the shoulders before the chest — adjust if your dog bunny-hops or steps wide.</p>
          </Callout>

          {/* Micro-FAQ */}
          <h2>Quick answers</h2>
          <h3>Is the towpath OK in light rain?</h3>
          <p>Often yes — when wind is calm and traffic light. Keep to drier edges and give way at narrow points.</p>
          <h3>My dog dislikes coats — should I force it?</h3>
          <p>If they show stress, start with short, calm trials and high-value rewards; otherwise focus on towels and shorter loops.</p>

          {/* Related links */}
          <h2>Related guides</h2>
          <ul className="list-disc pl-5">
            <li><Link href="/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times" className="underline decoration-[#C89B3C]/50 underline-offset-2 hover:decoration-[#C89B3C]">Calm canal walks in Saltaire</Link></li>
            <li><Link href="/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access" className="underline decoration-[#C89B3C]/50 underline-offset-2 hover:decoration-[#C89B3C]">Hirst Wood & Shipley Glen</Link></li>
          </ul>

          {/* Soft CTA */}
          <SoftCta />
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
