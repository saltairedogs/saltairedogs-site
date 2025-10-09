import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access | Saltaire Dog Walks Blog',
  description: 'Circular routes, seasonal mud levels, and access notes for Hirst Wood and Shipley Glen.',
}

const post = {
  slug: 'hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access',
  title: 'Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access',
  excerpt: 'Plan your woodland walks with practical, local detail—especially helpful after rain.',
  coverImage: { src: '/poodle-walking-shipley-glenn.jpg', alt: 'Dog walking in woodland' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Local Spots',
  tags: ['Hirst Wood', 'Shipley Glen', 'mud levels'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: circular route suggestions with honest mud ratings and access notes.</p>
    </PostLayout>
  )
}
