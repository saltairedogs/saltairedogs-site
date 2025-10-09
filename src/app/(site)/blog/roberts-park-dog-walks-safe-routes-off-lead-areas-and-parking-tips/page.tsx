import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Roberts Park Dog Walks: Safe Routes, Off-Lead Areas, and Parking Tips | Saltaire Dog Walks Blog',
  description: 'Plan the perfect Roberts Park dog walk: off-lead guidance, safe routes, and where to park—local insight from daily walkers.',
}

const post = {
  slug: 'roberts-park-dog-walks-safe-routes-off-lead-areas-and-parking-tips',
  title: 'Roberts Park Dog Walks: Safe Routes, Off-Lead Areas, and Parking Tips',
  excerpt: 'Local knowledge for easy, enjoyable Roberts Park walks—what to know before you go.',
  coverImage: { src: '/north-cliffe-dog-rainbow.jpg', alt: 'Park scene with dog' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Local Spots',
  tags: ['Roberts Park', 'parking', 'off-lead'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: where to park, which paths to choose, and how to plan calm off-lead time in Roberts Park.</p>
    </PostLayout>
  )
}
