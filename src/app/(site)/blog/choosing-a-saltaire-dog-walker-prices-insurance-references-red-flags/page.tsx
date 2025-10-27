// /src/app/(site)/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags/page.tsx
import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'
import { RelatedPosts } from '@/components/blog/related-posts'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, MapPin, Clock } from 'lucide-react'
import ChoosingDogWalkerClient from "./ChoosingDogWalkerClient";

export const metadata: Metadata = {
  title:
    "Choosing a Saltaire Dog Walker: Insurance, References & Red Flags | Saltaire Dog Walks Blog",
  description:
    "Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.",
  alternates: { canonical: "/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags" },
  openGraph: {
    type: "article",
    title:
      "Choosing a Saltaire Dog Walker: Insurance, References & Red Flags",
    description:
      "Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.",
    images: [{ url: "/og-default.jpg", alt: "Saltaire Dog Walks" }],
    publishedTime: "2024-08-22T09:00:00+00:00",
    modifiedTime: "2025-10-16T09:00:00+00:00",
    authors: ["Saltaire Dog Walks"],
    tags: ["Saltaire", "Dog Walking", "Insurance", "References"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Choosing a Saltaire Dog Walker: Insurance, References & Red Flags",
    description:
      "Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.",
    images: ["/og-default.jpg"],
  },
};

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags') || {
    slug: 'choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags',
    title: 'Choosing a Saltaire Dog Walker: Insurance, References & Red Flags',
    excerpt: 'What to ask, what to check, and how to compare local dog walkers fairly.',
    coverImage: { src: '/og-default.jpg', alt: 'Saltaire Dog Walks' },
    author: { name: 'Saltaire Dog Walks' },
    datePublished: '2024-08-22T09:00:00+00:00',
    readingTime: 12,
    category: 'Guides',
    tags: ['insurance', 'references', 'red flags'],
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
    dateModified: '2025-10-16T09:00:00+00:00',
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
          <ChoosingDogWalkerClient />
        </div>

        {/* Related */}
        <RelatedPosts currentSlug={post.slug} />
      </div>
    </article>
  )
}
