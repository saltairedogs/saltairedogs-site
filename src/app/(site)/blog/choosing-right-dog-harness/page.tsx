import { Metadata } from 'next'
import { PostLayout } from '@/components/blog/post-layout'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'

const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'choosing-right-dog-harness')!

export const metadata: Metadata = {
  title: `${post.title} | Saltaire Dog Walks Blog`,
  description: post.excerpt,
  openGraph: { title: post.title, description: post.excerpt, images: [post.coverImage.src], type: 'article' },
}

export default function Page() {
  return <PostLayout post={post} />
}
