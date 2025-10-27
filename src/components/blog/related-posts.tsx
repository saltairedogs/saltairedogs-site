import Link from 'next/link'
import Image from 'next/image'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'

type RelatedPostsProps = {
  currentSlug: string
  heading?: string
}

export function RelatedPosts({ currentSlug, heading = 'Related posts' }: RelatedPostsProps) {
  const current = SAMPLE_BLOG_POSTS.find((p) => p.slug === currentSlug)
  // Simple heuristic: prefer posts sharing a tag with current; fall back to same category; then recent placeholders
  const pool = SAMPLE_BLOG_POSTS.filter((p) => p.slug !== currentSlug)
  let related = pool
  if (current?.tags?.length) {
    const tagSet = new Set(current.tags)
    related = pool.filter((p) => p.tags?.some((t) => tagSet.has(t)))
  }
  if (related.length < 3 && current?.category) {
    // Avoid iterating a Set of objects (which can require downlevelIteration). Instead,
    // dedupe by slug using a Set<string> and push to the existing array.
    const seen = new Set(related.map((p) => p.slug))
    for (const p of pool) {
      if (p.category === current.category && !seen.has(p.slug)) {
        related.push(p)
        seen.add(p.slug)
      }
      if (related.length >= 3) break
    }
  }
  const picks = related.slice(0, 3)

  if (!picks.length) return null

  return (
    <section aria-labelledby="related" className="mt-14">
      <h2 id="related">{heading}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {picks.map((p) => (
          <article key={p.slug} className="overflow-hidden rounded-2xl border border-border bg-white">
            {p.coverImage?.src ? (
              <div className="relative h-36 w-full">
                <Image
                  src={p.coverImage.src}
                  alt={p.coverImage.alt || p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : null}
            <div className="p-4">
              <h3 className="text-sm font-semibold leading-snug">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              {p.excerpt ? (
                <p className="mt-1 line-clamp-3 text-xs text-muted-foreground">{p.excerpt}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
