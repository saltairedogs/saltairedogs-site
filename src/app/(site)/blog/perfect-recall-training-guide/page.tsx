// app/(site)/blog/perfect-recall-training-guide/page.tsx
import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import PerfectRecallClient from './PerfectRecallClient'

const post = SAMPLE_BLOG_POSTS.find(
  (p) => p.slug === 'perfect-recall-training-guide'
)!

export const metadata: Metadata = {
  title: `${post.title} | Saltaire Dog Walks Blog`,
  description: post.excerpt,
  keywords: [
    'dog recall training',
    'teach dog come when called',
    'recall games',
    'whistle recall',
    'puppy recall',
    'Saltaire dog training',
  ],
  openGraph: {
    type: 'article',
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage.src],
    url: `/blog/${post.slug}`,
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
  return (
    <PostLayout post={post} fullWidthChildren>
      {/* IMPORTANT:
         - Keep PostLayout's hero/cover.
         - Render the client *without* its own hero and with a non-sticky TOC. */}
      <PerfectRecallClient showHero={false} stickyToc={false} />
    </PostLayout>
  )
}
