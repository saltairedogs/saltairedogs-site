import type { Metadata } from 'next'
import Link from 'next/link'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import PuppyFirstWalkClient from './PuppyFirstWalkClient'
// JSON-LD is injected with plain <script> tags in-body; no Script component needed

const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === 'puppy-first-walk-checklist')!

export const metadata: Metadata = {
  title: `${post.title} | Saltaire Dog Walks Blog`,
  description: post.excerpt,
  openGraph: {
    type: 'article',
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage.src],
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage.src],
  },
  alternates: {
    canonical: `/blog/${post.slug}`,
  },
}

export default function Page() {
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
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'When can my puppy start public walks?', acceptedAnswer: { '@type': 'Answer', text: 'Usually after your vet confirms vaccination cover (often post second jab). Before then: in-arms exposures only.' } },
      { '@type': 'Question', name: 'How long should first walks be?', acceptedAnswer: { '@type': 'Answer', text: 'Think minutes, not miles—6–10 minute loops plus a short sniff stop. Finish while your puppy still has energy.' } },
      { '@type': 'Question', name: 'Harness or collar?', acceptedAnswer: { '@type': 'Answer', text: 'A well-fitted Y-front harness with a 1.5–2 m lead is ideal. Use a flat collar for ID.' } },
    ],
  }

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        A field-tested checklist for a brilliant first walk around Saltaire—minimal kit, quiet timing, and calm, short
        loops. Keep it easy; finish early; celebrate small wins.
      </p>

      {/* Server-safe quick tips (complements client) */}
      <section aria-labelledby="tips" className="mt-8">
        <h2 id="tips">Quick tips before you open the checklist</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li><strong>Timing:</strong> weekdays 08:30–10:30 or 14:30–16:30 are usually calm.</li>
          <li><strong>Route:</strong> wide pavements first; park perimeter later.</li>
          <li><strong>Duration:</strong> 6–10 minutes total + sniff stop.</li>
          <li><strong>End early:</strong> stop while they’re still keen—that’s how confidence sticks.</li>
        </ul>
      </section>

      {/* Client interactive content */}
      <PuppyFirstWalkClient />

      {/* Mini FAQ */}
      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-3 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            { q: 'Public walks?', a: 'Only after your vet gives the okay; until then, carry for safe exposures.' },
            { q: 'How long?', a: '6–10 minutes + a 3–4 minute sniff patch. End before tiredness shows.' },
            { q: 'What lead?', a: '1.5–2 m standard lead; skip extendables at first.' },
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
            <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Want help with first walks?</h2>
            <p className="mt-2 text-white/85">We do calm puppy drop-ins and short confidence walks locally with photo & GPS updates.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=puppy" className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90">Book puppy consult</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15">See services</Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • Positive methods • GPS &amp; photo updates</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </article>
  )
}
