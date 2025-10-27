import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import WeekendDogWalkingClient from "./WeekendDogWalkingClient";
import { SAMPLE_BLOG_POSTS, getRelatedPosts } from '@/lib/blog-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin, ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: "Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés | Saltaire Dog Walks Blog",
  description:
    "Navigate busy weekends with ease—learn the quiet slots, crowd-avoidance routes, and best post-walk cafés.",
  openGraph: {
    title: "Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés",
    description: "Navigate busy weekends with ease—quiet slots, crowd-avoidance routes, and best post-walk cafés.",
    type: "article",
  },
};

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes') || {
    slug: 'weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes',
    title: 'Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés',
    excerpt: 'Navigate busy weekends with ease—quiet slots, crowd-avoidance routes, and best post-walk cafés.',
    coverImage: { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Dog on Victoria Road' },
    author: { name: 'Saltaire Dog Walks' },
    datePublished: new Date().toISOString(),
    readingTime: 5,
    category: 'Walking',
    tags: ['weekend', 'routes', 'cafes'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
  } as any

  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'
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
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  }

  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
  const url = `${siteUrl}/blog/${post.slug}`
  const waShare = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + url)}`
  const mailShare = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`
  const related = getRelatedPosts(post as any, 3)

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

        {/* Content */}
        <div className="mt-8">
          <WeekendDogWalkingClient showHero={false} />
        </div>

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
  );
}
