import type { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import SaltaireGuideClient from './SaltaireGuideClient'

export const metadata: Metadata = {
  title: 'Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules',
  description: 'The definitive 2025 guide to walking your dog in Saltaire: best routes, quiet times, safety & local etiquette — plus seasonal tips and gear.',
  openGraph: {
    title: 'Saltaire Dog Walking Guide 2025: Best Routes, Times & Local Rules',
    description: 'Best routes around Roberts Park, the canal towpath and Hirst Wood; quiet times by season; off‑lead etiquette; local rules; and safety tips.',
    type: 'article',
  },
}

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'saltaire-dog-walking-guide-2025-best-routes-times-local-rules')!
  return (
    <PostLayout post={post} fullWidthChildren>
      <SaltaireGuideClient showHero={false} />
    </PostLayout>
  )
}
