// src/app/(site)/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Config                                                                      */
/* -------------------------------------------------------------------------- */

const SITE_URL = process.env.SITE_URL ?? 'https://saltairedogs.uk'
const SLUG = 'rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear'
const CANONICAL = `${SITE_URL}/blog/${SLUG}`
// Use an existing, optimized AVIF hero from public/ with multiple resolutions available
const COVER_SRC = '/hirst-wood-shipley-glen-dog-walks-hero.avif'
const COVER_ABS = `${SITE_URL}${COVER_SRC}`

const POST = {
  slug: SLUG,
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
  excerpt:
    'Keep walks calm on wet days: streets that drain, easy swaps for the towpath, and a short kit list that actually helps.',
  coverImage: {
    src: COVER_SRC,
    alt: 'Hirst Wood and Shipley Glen paths after rain — a low-mud towpath alternative in Saltaire',
  },
  author: { name: 'Saltaire Dogs + Pets' },
  datePublished: '2025-10-02T09:00:00.000Z', // fixed date
  dateModified: '2025-10-02T09:00:00.000Z',
  readingTime: 7,
  category: 'Walking',
  tags: ['rainy day', 'mud', 'gear', 'safety', 'towpath'],
}

/* -------------------------------------------------------------------------- */
/* Metadata (SEO)                                                              */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear | Saltaire Dogs + Pets',
  description:
    'Wet-weather walking in Saltaire made easy: low-mud routes, quick towpath swaps, and compact gear to keep dogs comfy and floors cleaner.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: 'article',
    url: CANONICAL,
    title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
    description:
      'Local, practical tips for rainy days in Saltaire: streets that drain, towpath alternatives, and gear that earns its keep.',
    images: [{ url: COVER_ABS }],
    siteName: 'Saltaire Dogs + Pets',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
    description: 'Low-mud streets, easy route swaps, and simple gear for happier rainy walks.',
    images: [COVER_ABS],
  },
  keywords: [
    'Saltaire dog walks',
    'rainy day dog walk',
    'low mud routes',
    'towpath alternatives',
    'dog walking gear',
  ],
  authors: [{ name: POST.author.name }],
  category: POST.category,
  other: {
    'article:published_time': POST.datePublished,
    'article:modified_time': POST.dateModified,
  },
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function Page() {
  const publishedDate = new Date(POST.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const waShare = `https://wa.me/?text=${encodeURIComponent(POST.title + ' ' + CANONICAL)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(POST.title)}&body=${encodeURIComponent(CANONICAL)}`
  const waQuote =
    'https://wa.me/447305367941?text=Hi!%20I%E2%80%99m%20in%20Saltaire.%20My%20street%20is%20[your%20street],%20pet%20is%20[dog/cat/small%20pet],%20and%20I%E2%80%99m%20looking%20for%20[walks/visits].'

  return (
    <article className="min-h-screen bg-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: POST.title,
            datePublished: POST.datePublished,
            dateModified: POST.dateModified,
            author: [{ '@type': 'Organization', name: POST.author.name }],
            image: [COVER_ABS],
            articleSection: POST.category,
            keywords: POST.tags.join(', '),
            mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
            publisher: {
              '@type': 'Organization',
              name: 'Saltaire Dogs + Pets',
              logo: { '@type': 'ImageObject', url: `${SITE_URL}/saltaire-dogs-logo-official.webp` },
            },
            description: POST.excerpt,
          }),
        }}
      />

      {/* Hero: taller on mobile, card sits lower so Back stays visible */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: 'var(--hairline,#E6E3DA)' }}>
        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
          <Image
            src={POST.coverImage.src}
            alt={POST.coverImage.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover object-center"
          />
          {/* readability overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_40%,rgba(0,0,0,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(19,20,21,0.38))]" />

          {/* Back + category (kept high) */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-2 sm:left-6 sm:top-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-[#131415] ring-1 ring-black/5 backdrop-blur hover:bg-white"
              aria-label="Back to blog"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-xs font-semibold text-[#131415] ring-1 ring-black/5">
              {POST.category}
            </span>
          </div>

          {/* Title/excerpt/meta card (lower so it never collides with Back) */}
          <div className="absolute inset-x-4 bottom-5 z-10 mx-auto max-w-4xl sm:inset-x-6 sm:bottom-6">
            <div className="rounded-2xl bg-white/95 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur md:p-7">
              <h1 className="text-balance text-2xl font-extrabold leading-tight text-[#131415] sm:text-3xl">
                {POST.title}
              </h1>
              <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#4b5259]">{POST.excerpt}</p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#7B828A]">
                  <span className="font-medium text-[#131415]">{POST.author.name}</span>
                  <span aria-hidden>•</span>
                  <time dateTime={POST.datePublished}>{publishedDate}</time>
                  <span aria-hidden>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {POST.readingTime} min read
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={mailShare}
                    aria-label={`Email this article: ${POST.title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]"
                    style={{ borderColor: 'var(--hairline,#E6E3DA)' }}
                  >
                    Email
                  </a>
                  <a
                    href={waShare}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Share on WhatsApp: ${POST.title}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-[#131415] hover:bg-[#EFEEE9]"
                    style={{ borderColor: 'var(--hairline,#E6E3DA)' }}
                  >
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-[#C89B3C]">
          {/* Lead */}
          <p>
            Rain doesn’t have to equal chaos. Pick streets that drain, swap the towpath when the wind pipes up, and keep a tiny
            kit by the door. Result: cleaner dog, calmer house, warmer tea.
          </p>

          {/* Section 1 */}
          <h2 id="low-mud-routes">Low-mud streets (and why they work)</h2>
          <p>
            In Saltaire, one street choice can save your shoes. Look for decent camber and regular drains. Victoria Road’s flagged
            sections, the park edges, and longer pavements towards Shipley shed water faster than lawns and ginnels.
          </p>
          <ul>
            <li><strong>Victoria Road loops:</strong> quick 7–9 minute laps when the rain keeps coming.</li>
            <li><strong>Roberts Park perimeter:</strong> stick to the outer paths; the middle grass is a slip-n-slide after a downpour.</li>
            <li><strong>Shipley side pavements:</strong> longer, straighter, fewer puddle traps.</li>
          </ul>

          {/* Section 2 */}
          <h2 id="towpath-alternatives">Towpath swaps when it’s wild</h2>
          <p>
            The canal is lovely… until wind and spray turn it into dodge-the-cyclist. If it’s breezy or busy, jump to the park edge
            or a street grid. Two Victoria Road laps often match the time you had in mind with far less muck.
          </p>
          <ul>
            <li><strong>Riverside → park edge:</strong> calmer footing, fewer sudden puddles.</li>
            <li><strong>Locks busy?</strong> do a quick street loop and check back later.</li>
            <li><strong>Hirst Wood:</strong> save for drier days; use the approach roads after rain.</li>
          </ul>

          {/* Section 3 */}
          <h2 id="gear">Small kit that pulls its weight</h2>
          <p>
            Keep it light. Most days you only need three things: a reflective harness, a microfibre towel, and a simple coat for
            thin-coated or older dogs. Skip heavy booties unless your dog is trained for them—they change gait and disappear into
            puddles quicker than you can say “where did that go?”.
          </p>
          <ul>
            <li><strong>Reflective harness</strong> — steady balance + visibility at dusk.</li>
            <li><strong>Microfibre towel</strong> — fast wring; lives by the door.</li>
            <li><strong>Silicone treat pouch</strong> — wipe, reward, repeat.</li>
          </ul>

          {/* Quick answers */}
          <h2>Quick answers</h2>
          <h3>Is the towpath fine in light rain?</h3>
          <p>
            Often yes—when wind is calm and traffic’s light. Keep to the drier edge and slow at narrow bits. If the wind picks up,
            pivot to a street loop and keep the mood easy.
          </p>
          <h3>Dog hates coats—force it?</h3>
          <p>
            No. Short trials + top-tier treats. If they still hate it, skip the coat and use towel + shorter loops. Comfort beats
            wrestling matches.
          </p>

          {/* CTA — WhatsApp + Contact only */}
          <div className="mt-10 rounded-3xl border border-[color:var(--hairline,#E6E3DA)] bg-gradient-to-b from-[#C89B3C]/10 to-transparent px-6 py-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Local & reliable</p>
                <h3 className="text-xl font-bold tracking-tight">Want easy, weather-savvy walks?</h3>
                <p className="max-w-prose text-muted-foreground">
                  Message us for a quick WhatsApp quote—routes tailored to your dog, your routine, and the forecast.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={waQuote}
                  aria-label="Get a WhatsApp quote"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold"
                  style={{ backgroundColor: '#C89B3C', color: '#131415' }}
                >
                  WhatsApp quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold"
                  style={{ borderColor: 'var(--hairline,#E6E3DA)', color: '#131415' }}
                >
                  Contact
                </Link>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">DBS • Insured • Photo updates • Calm, capped groups</p>
          </div>
        </div>

        {/* Tags */}
        {POST.tags?.length ? (
          <div className="mt-10 border-t border-stone-200 pt-6">
            <h4 className="mb-3 font-semibold text-text">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {POST.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="rounded-full border border-[color:var(--hairline,#E6E3DA)] px-3 py-1 text-sm text-[#131415]/80 hover:bg-[#EFEEE9]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {/* Related */}
        <section className="mt-16 border-t border-stone-200 pt-8">
          <h2 className="mb-4 text-2xl font-bold text-text">More to read</h2>
          <ul className="list-disc pl-5">
            <li>
              <Link
                href="/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times"
                className="underline decoration-[#C89B3C]/50 underline-offset-2 hover:decoration-[#C89B3C]"
              >
                Calm canal walks in Saltaire
              </Link>
            </li>
            <li>
              <Link
                href="/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access"
                className="underline decoration-[#C89B3C]/50 underline-offset-2 hover:decoration-[#C89B3C]"
              >
                Hirst Wood & Shipley Glen: routes and mud levels
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}
