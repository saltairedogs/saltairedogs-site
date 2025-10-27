// src/app/(site)/blog/page.tsx
import { Suspense } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, MapPin, Clock, ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import BlogFilter from '@/components/blog/blog-filter'
import { SAMPLE_BLOG_POSTS, getFeaturedPost, getPopularPosts } from '@/lib/blog-data'
import { BLOG_CATEGORIES, type BlogCategory } from '@/lib/blog'

/* --------------------------------- SEO --------------------------------- */

export const metadata: Metadata = {
  title: 'Notes from our walks — Saltaire Dogs + Pets',
  description:
    'Calm, practical tips and local route notes from Saltaire & Shipley. Short reads you can use today.',
  openGraph: {
    title: 'Notes from our walks — Saltaire Dogs + Pets',
    description:
      'Local route ideas, gentle training reminders, and safety notes from everyday walks around Saltaire.',
    images: ['/poodle-brown.png'],
    type: 'website',
    url: '/blog',
  },
  alternates: { canonical: '/blog' },
  twitter: {
    card: 'summary_large_image',
    title: 'Notes from our walks — Saltaire Dogs + Pets',
    description: 'Short, friendly reads from the towpath and park.',
    images: ['/poodle-brown.png'],
  },
}

/** Revalidate server output periodically for freshness without full SSR */
export const revalidate = 300

/* ----------------------------- Utilities ----------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  )
}

function clampClass() {
  return {
    h1: 'font-bold leading-tight',
    p: 'text-muted-foreground leading-relaxed',
  }
}

/* --------------------------- Page components --------------------------- */

function BlogHero() {
  const featuredPost = getFeaturedPost()

  return (
    <section
      className="relative isolate overflow-hidden border-b border-border
      bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(200,155,60,0.12),transparent_60%),linear-gradient(180deg,#F7F7F6,#F3F2EE)]"
      aria-labelledby="blog-hero-heading"
    >
      {/* soft vignette for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_60%,transparent_100%)]" />

      <HeroPattern />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: headline */}
          <div className="space-y-7 text-text">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Notes from our walks</span>
              </div>
              <h1
                id="blog-hero-heading"
                className={`${clampClass().h1}`}
                style={{ fontSize: 'clamp(2.1rem, 2vw + 1.3rem, 3.25rem)' }}
              >
                Gentle tips, local routes, calm dogs
              </h1>
              <p className={`${clampClass().p}`} style={{ fontSize: 'clamp(1rem, 0.5vw + .9rem, 1.15rem)' }}>
                Short, practical reads from everyday walks around Saltaire &amp; Shipley. Nothing flashy—just things that
                help: safer crossings, steady lead work, and route ideas when it’s windy or muddy.
              </p>
            </div>

            {/* Quick anchors */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="#latest"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#131415] shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: '#C89B3C' }}
              >
                Browse latest <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#categories"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-text transition hover:bg-muted/30"
              >
                Explore categories
              </Link>
            </div>
          </div>

          {/* Right: Featured Article (soft chrome) */}
          {featuredPost && (
            <Card className="relative overflow-hidden border-0 shadow-xl ring-1 ring-black/5 backdrop-blur lift sweep">
              <div className="relative h-56 w-full sm:h-64">
                <Image
                  src={featuredPost.coverImage?.src || '/og-default.jpg'}
                  alt={featuredPost.coverImage?.alt || featuredPost.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <Badge className="absolute left-4 top-4 bg-[#C89B3C] text-[#131415]">{featuredPost.category}</Badge>
              </div>

              <CardContent className="relative p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  <Link className="link-underline" href={`/blog/${featuredPost.slug}`} aria-label={`Read ${featuredPost.title}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={featuredPost.author?.avatar || '/logo.svg'} />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">Saltaire Dogs + Pets</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredPost.readingTime} min read</span>
                  </div>
                </div>
                <Link aria-label={`Open ${featuredPost.title}`} href={`/blog/${featuredPost.slug}`} className="absolute inset-0" />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}

/** Editorial hierarchy row: 1 large + 2 medium (friendly, non-corporate) */
function EditorialRow() {
  const featured = getFeaturedPost()
  const pool = SAMPLE_BLOG_POSTS.filter((p) => p.slug !== featured?.slug)
  const picks = pool.slice(0, 2)

  if (!featured || picks.length < 2) return null

  return (
    <section aria-labelledby="editorial-row" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="editorial-row" className="text-lg font-semibold text-text">Editor’s picks</h2>
        <Link href="/about" className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-text sm:flex">
          About the blog <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ArticleCard
          variant="lead"
          post={{
            slug: featured.slug,
            title: featured.title,
            excerpt: featured.excerpt,
            image: featured.coverImage?.src || '/og-default.jpg',
            alt: featured.coverImage?.alt || featured.title,
            category: featured.category,
            readMin: featured.readingTime,
            views: featured.stats?.views ?? undefined,
          }}
        />
        {picks.map((p) => (
          <ArticleCard
            key={p.slug}
            variant="support"
            post={{
              slug: p.slug,
              title: p.title,
              excerpt: p.excerpt,
              image: p.coverImage?.src || '/og-default.jpg',
              alt: p.coverImage?.alt || p.title,
              category: p.category,
              readMin: p.readingTime,
              views: p.stats?.views ?? undefined,
            }}
          />
        ))}
      </div>
    </section>
  )
}

function CategoryFilterPanel({ activeCat }: { activeCat?: string }) {
  const categoryEntries = Object.entries(BLOG_CATEGORIES) as [BlogCategory, any][]

  return (
    <div id="categories" className="space-y-4">
      <h3 className="flex items-center gap-2 font-semibold text-text">
        <MapPin className="h-4 w-4 text-[#C89B3C]" />
        Categories
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Link
          href="#latest"
          className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow-sm"
          data-active={(!activeCat || activeCat === 'All') ? 'true' : 'false'}
        >
          <span className="font-medium">All</span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{SAMPLE_BLOG_POSTS.length}</span>
        </Link>

        {categoryEntries.map(([categoryName, categoryData]) => {
          const count = SAMPLE_BLOG_POSTS.filter((p: any) => p.category === categoryName).length
          const isActive = activeCat === categoryName
          return (
            <Link
              key={categoryName}
              href={`#latest?cat=${encodeURIComponent(categoryName)}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:shadow-sm
                         data-[active=true]:border-[#C89B3C]/40 data-[active=true]:bg-[linear-gradient(0deg,rgba(200,155,60,.08),rgba(200,155,60,.08))]"
              title={`View ${categoryName} posts`}
              data-active={isActive ? 'true' : 'false'}
            >
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="text-[#C89B3C]">{categoryData.icon}</span>
                {categoryName}
              </span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{count}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function PopularPosts() {
  const popular = getPopularPosts(5)
  return (
    <div className="space-y-4">
      <h3 className="flex items-center gap-2 font-semibold text-text">
        <TrendingUp className="h-4 w-4" />
        Readers liked
      </h3>
      <div className="space-y-3">
        {popular.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="flex gap-3">
              <div className="relative h-14 w-20 overflow-hidden rounded-md ring-1 ring-border">
                <Image
                  src={post.coverImage?.src || '/og-default.jpg'}
                  alt={post.coverImage?.alt || post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="line-clamp-2 text-sm font-medium transition-colors group-hover:text-[#C89B3C]">
                  {post.title}
                </h4>
                <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
                  {typeof post.readingTime === 'number' && <span>{post.readingTime} min</span>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/** Gentle newsletter (server-safe) */
function NewsletterCard() {
  return (
    <Card className="border-[#C89B3C]/20 bg-gradient-to-br from-[#C89B3C]/5 to-[#C89B3C]/10 p-6">
      <h3 className="mb-2 font-semibold text-text">Stay updated</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Short, useful posts only. Unsubscribe anytime.
      </p>
      <form action="/api/newsletter" method="post" className="space-y-3" aria-label="Newsletter signup">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <label htmlFor="email" className="sr-only">Email</label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email address"
            className="w-full rounded-xl border border-border bg-white/90 px-4 py-3 text-sm
                       shadow-[inset_0_1px_0_rgba(255,255,255,.6)] backdrop-blur
                       outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />
        </div>
        <Button type="submit" size="sm" className="w-full">Subscribe</Button>
        <p className="text-xs text-muted-foreground">We send 1–2 emails a month.</p>
      </form>
    </Card>
  )
}

/* ------------------------------- Article Card ------------------------------- */

type CardVariant = 'lead' | 'support'
function ArticleCard({
  variant,
  post,
}: {
  variant: CardVariant
  post: {
    slug: string
    title: string
    excerpt: string
    image: string
    alt: string
    category: string
    readMin?: number
    views?: number
  }
}) {
  const isLead = variant === 'lead'
  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-white ring-1 ring-border transition lift sweep ${
        isLead ? 'col-span-1 row-span-2' : ''
      }`}
    >
      <div className={`relative ${isLead ? 'h-72' : 'h-52'} w-full`}>
        <Image
          src={post.image}
          alt={post.alt}
          fill
          className="object-cover"
          sizes={isLead ? '(max-width: 1024px) 100vw, 33vw' : '(max-width: 1024px) 100vw, 33vw'}
          priority={isLead ? false : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <Badge className="absolute left-4 top-4 bg-[#C89B3C] text-[#131415]">{post.category}</Badge>
      </div>

      <div className="p-6">
        <h3 className={`font-semibold ${isLead ? 'text-xl' : 'text-lg'}`}>
          <span className="link-underline">{post.title}</span>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          {typeof post.readMin === 'number' && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readMin} min
            </span>
          )}
        </div>
      </div>

      <Link href={`/blog/${post.slug}`} aria-label={`Open ${post.title}`} className="absolute inset-0" />
    </article>
  )
}

/* --------------------------------- Page --------------------------------- */

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
  const activeCat = typeof searchParams?.cat === 'string' ? searchParams?.cat : undefined

  const jsonLdBlog = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Saltaire Dogs + Pets — Blog',
    url: `${siteUrl}/blog`,
    description:
      'Calm, practical tips and local routes from everyday walks around Saltaire.',
  }

  const jsonLdList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: SAMPLE_BLOG_POSTS.slice(0, 6).map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}/blog/${p.slug}`,
      name: p.title,
    })),
  }

  const jsonLdSearch = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/blog?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <div className="min-h-screen">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSearch) }} />

      {/* Hero */}
      <BlogHero />

      {/* Editorial row */}
      <EditorialRow />

      {/* Main body */}
      <div id="latest" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <SectionLabel>Latest &amp; filtered</SectionLabel>
          <Link
            href="/about"
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground hover:text-text sm:flex"
          >
            About the blog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main content (filter + grid) */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="animate-pulse rounded-2xl border border-border bg-white p-4">
                      <div className="h-40 w-full rounded-lg bg-muted" />
                      <div className="mt-3 h-4 w-3/4 rounded bg-muted" />
                      <div className="mt-2 h-4 w-1/2 rounded bg-muted" />
                    </div>
                  ))}
                </div>
              }
            >
              <BlogFilter initialPosts={SAMPLE_BLOG_POSTS} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <CategoryFilterPanel activeCat={activeCat} />
            <PopularPosts />
            <NewsletterCard />
          </aside>
        </div>

        {/* Soft CTA (no pricing) */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border
                        bg-[radial-gradient(1000px_600px_at_10%_10%,rgba(200,155,60,0.18),transparent_60%),linear-gradient(135deg,#131415_0%,#1C1E20_100%)]
                        px-6 py-10 text-white sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Local & reliable</p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Want routes that fit your streets?
                </h2>
                <p className="mt-1 max-w-prose text-white/85">
                  Message your street and routine—we’ll suggest calm loops and safe crossings that suit your dog.
                </p>
              </div>
              <div className="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:flex-row">
                <Button asChild className="bg-[#C89B3C] text-[#131415] hover:opacity-90">
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • Photo notes • Calm, steady handling</p>
          </div>
        </div>
      </div>

      {/* Micro-interactions */}
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            .link-underline{background:linear-gradient(currentColor,currentColor) bottom / 0 1px no-repeat;transition:background-size .3s ease}
            .link-underline:hover{background-size:100% 1px}
            @media (prefers-reduced-motion:no-preference){
              .lift{will-change:transform,box-shadow;transition:transform .25s ease, box-shadow .25s ease}
              .lift:hover{transform:translateY(-2px); box-shadow:0 18px 50px -20px rgba(0,0,0,.35)}
              .sweep{position:relative;overflow:hidden}
              .sweep::after{content:"";position:absolute; inset:0; background:linear-gradient(120deg,transparent,rgba(255,255,255,.14),transparent); transform:translateX(-120%); transition: transform .6s ease}
              .sweep:hover::after{transform:translateX(120%)}
            }
          `,
        }}
      />
    </div>
  )
}

/* ------------------------------ Decorations ------------------------------ */

function HeroPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 right-[-10%] h-[480px] w-[720px] opacity-30"
      viewBox="0 0 720 480"
      fill="none"
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C89B3C" />
          <stop offset="1" stopColor="#DCC18A" />
        </linearGradient>
      </defs>
      <g opacity="0.2">
        <circle cx="120" cy="120" r="110" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="300" cy="220" r="160" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="560" cy="160" r="130" stroke="url(#g1)" strokeWidth="1" />
      </g>
    </svg>
  )
}
