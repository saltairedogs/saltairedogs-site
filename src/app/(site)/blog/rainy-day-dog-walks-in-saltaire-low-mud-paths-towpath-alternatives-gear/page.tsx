import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear | Saltaire Dog Walks Blog',
  description: 'Our wet-weather playbook: paths that drain, alternatives to the towpath, and kit that keeps walks cheerful.',
}

const post = {
  slug: 'rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear',
  title: 'Rainy-Day Dog Walks in Saltaire: Low-Mud Paths, Towpath Alternatives & Gear',
  excerpt: 'Make rainy days easy with local knowledge and sensible kit suggestions.',
  coverImage: { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Dog on rainy walk' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Walking',
  tags: ['rainy day', 'mud levels', 'gear'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: routes that stay sane in wet weather plus tips to keep dogs comfortable.</p>
    </PostLayout>
  )
}
