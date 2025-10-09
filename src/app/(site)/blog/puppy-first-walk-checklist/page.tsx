import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import PuppyFirstWalkClient from './PuppyFirstWalkClient'

const post = SAMPLE_BLOG_POSTS.find((p) => p.slug === 'puppy-first-walk-checklist')!

export const metadata: Metadata = {
  title: `${post.title} | Saltaire Dog Walks Blog`,
  description: post.excerpt,
  openGraph: {
    type: 'article',
    title: post.title,
    description: post.excerpt,
    images: [post.coverImage.src],
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
    <PostLayout post={post}>
      <PuppyFirstWalkClient />
    </PostLayout>
  )
}
