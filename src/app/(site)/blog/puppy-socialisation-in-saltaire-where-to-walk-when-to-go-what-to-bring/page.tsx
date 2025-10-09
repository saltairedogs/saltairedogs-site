import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Puppy Socialisation in Saltaire: Where to Walk, When to Go, What to Bring | Saltaire Dog Walks Blog',
  description: 'A local-first guide to puppy socialisation done right—routes, timing, and kit for confident first walks.',
}

const post = {
  slug: 'puppy-socialisation-in-saltaire-where-to-walk-when-to-go-what-to-bring',
  title: 'Puppy Socialisation in Saltaire: Where to Walk, When to Go, What to Bring',
  excerpt: 'Set your puppy up for success with calm, positive experiences around Saltaire.',
  coverImage: { src: '/puppy-first-walk-checklist/cover.jpg', alt: 'Puppy walking kit' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Puppy',
  tags: ['socialisation', 'first walks'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: the best quiet-time routes and what to pack for positive early adventures.</p>
    </PostLayout>
  )
}
