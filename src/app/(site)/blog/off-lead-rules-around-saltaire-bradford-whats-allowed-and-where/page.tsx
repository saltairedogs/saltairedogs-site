import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where | Saltaire Dog Walks Blog',
  description: 'Understand local PSPOs, seasonal restrictions, and where off-lead time is appropriate around Saltaire.',
}

const post = {
  slug: 'off-lead-rules-around-saltaire-bradford-whats-allowed-and-where',
  title: 'Off-Lead Rules Around Saltaire & Bradford: What’s Allowed and Where',
  excerpt: 'A practical guide to local rules and sensible off-lead choices.',
  coverImage: { src: '/saltaire-dog-river.png', alt: 'Dog off lead' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Safety',
  tags: ['off lead', 'rules', 'PSPO'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: a clear, friendly overview of local rules and where off-lead can work safely.</p>
    </PostLayout>
  )
}
