import type { Metadata } from "next";
import Link from 'next/link'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import RobertsParkPerfectDogWalkClient from "./RobertsParkPerfectDogWalkClient";

export const metadata: Metadata = {
  title: "Roberts Park Dog Walks: Perfect Route, Timing & Training | Saltaire Dog Walks Blog",
  description:
    "A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.",
  openGraph: {
    title: "Roberts Park — The Perfect Dog Walk",
    description: "A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.",
    type: "article",
    images: ["/images/blog/roberts-park-loop-hero.jpg"],
  },
};

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'roberts-park-perfect-dog-walk') || {
    slug: 'roberts-park-perfect-dog-walk',
    title: 'Roberts Park — The Perfect Dog Walk',
    excerpt: 'A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.',
    coverImage: { src: '/walking-sat-dog.jpg', alt: 'Dogs playing in Roberts Park' },
    author: { name: 'Saltaire Dog Walks' },
    datePublished: new Date().toISOString(),
    readingTime: 6,
    category: 'Local Spots',
    tags: ['Roberts Park', 'route'],
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

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />

      {/* Lead (server-safe) */}
      <p className="text-lg text-muted-foreground">
        A simple, beautiful 30–40 minute loop with wide paths and easy sight-lines. Use short leads near the pavilion and
        bandstand; add a quiet canal taster when it's calm.
      </p>

      {/* Client route UI */}
      <RobertsParkPerfectDogWalkClient showHero={false} />

      {/* Mini FAQ */}
      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            { q: 'Best time for a calm loop?', a: 'Weekdays before ~09:30 or later afternoons. Avoid sunny weekend middays.' },
            { q: 'Off-lead?', a: 'Treat central lawns as on-lead. Perimeter can work when quiet and recall is solid. Follow signage.' },
            { q: 'Extend the walk?', a: 'Add a short towpath segment towards Hirst Lock—keep leads short at bridges.' },
          ].map((f) => (
            <div key={f.q} className="px-5 py-4">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="mt-12">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10"
          style={{
            background:
              'radial-gradient(1000px 600px at 10% 10%, rgba(200,155,60,0.18), transparent 60%), linear-gradient(135deg, #131415 0%, #1C1E20 100%)',
          }}
        >
          <div className="relative mx-auto max-w-3xl">
            <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Want a park plan tailored to your dog?</h2>
            <p className="mt-2 text-white/85">We map calm loops, pick quiet windows, and send photo + GPS updates.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=roberts-park" className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90">Book a meet &amp; greet</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">See services</Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • GPS &amp; photos • Calm handling</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </article>
  );
}
