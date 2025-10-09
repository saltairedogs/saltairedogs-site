import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'

export const metadata: Metadata = {
  title: 'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times | Saltaire Dog Walks Blog',
  description: 'Everything you need for calm canal walks: safety checks, meeting etiquette, and when the towpath is busiest.',
}

const post = {
  slug: 'leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times',
  title: 'Leeds–Liverpool Canal Walks in Saltaire: Dog Safety, Etiquette & Busy Times',
  excerpt: 'Towpath tips from daily walkers—stay safe and enjoy the water views.',
  coverImage: { src: '/saltaire-canal-retriever-on-lead-cobbles.jpg', alt: 'Dog on canal towpath' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 7,
  category: 'Walking',
  tags: ['canal towpath', 'etiquette', 'safety'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  return (
    <PostLayout post={post}>
      <p>Coming soon: a practical guide to calm, safe canal walks including when to avoid the busiest stretches.</p>
    </PostLayout>
  )
}
