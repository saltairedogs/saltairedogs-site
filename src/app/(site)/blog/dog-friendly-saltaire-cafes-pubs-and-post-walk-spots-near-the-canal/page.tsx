import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal | Saltaire Dog Walks Blog',
  description: 'Our favourite dog-friendly cafés and pubs close to the canal and Roberts Park—perfect after a good walk.',
}

const post = {
  slug: 'dog-friendly-saltaire-cafes-pubs-and-post-walk-spots-near-the-canal',
  title: 'Dog-Friendly Saltaire: Cafés, Pubs, and Post-Walk Spots Near the Canal',
  excerpt: 'Where to get water bowls, treats, and welcoming staff after your walk.',
  coverImage: { src: '/poodle-brown.png', alt: 'Dog friendly icon' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 4,
  category: 'Local Spots',
  tags: ['cafes', 'pubs', 'dog friendly'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: dog-friendly cafés and pubs near the canal with outdoor seating and water bowls.</p>
    </PostLayout>
  )
}
