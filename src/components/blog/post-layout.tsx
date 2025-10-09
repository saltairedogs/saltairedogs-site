import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Clock, Calendar, MapPin, Eye, Heart, ThumbsUp, ArrowLeft, Share2 } from 'lucide-react'
import { SAMPLE_BLOG_POSTS, getRelatedPosts } from '@/lib/blog-data'

type BlogPostLike = {
  slug: string
  title: string
  excerpt: string
  content?: string
  coverImage: { src: string; alt: string; width?: number; height?: number }
  author: { name: string; avatar?: string }
  datePublished: string
  readingTime?: number
  category?: string
  tags?: string[]
  location?: string
  stats?: { views: number; likes: number; helpfulVotes: number }
}

export function PostLayout({ post, children, fullWidthChildren = false }: { post: BlogPostLike; children?: React.ReactNode; fullWidthChildren?: boolean }) {
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  const datasetPost = SAMPLE_BLOG_POSTS.find(p => p.slug === post.slug)
  const related = datasetPost ? getRelatedPosts(datasetPost, 3) : []

  return (
    <article className="min-h-screen bg-bg">
      {/* Header */}
      <header className="relative">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image src={post.coverImage.src} alt={post.coverImage.alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute top-6 left-6">
            <Button asChild variant="secondary" className="bg-white/90 backdrop-blur-sm">
              <Link href="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link>
            </Button>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.category && (<Badge className="bg-brand text-white">{post.category}</Badge>)}
              {post.location && (
                <Badge variant="secondary" className="bg-white/20 text-white"><MapPin className="mr-1 h-3 w-3" />{post.location}</Badge>
              )}
            </div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>
            {post.excerpt && <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">{post.excerpt}</p>}
          </div>
        </div>
      </header>

      {/* Meta (centered) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 border-b border-stone-200 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                {post.author.avatar ? <AvatarImage src={post.author.avatar} /> : <AvatarImage src="/logo.svg" />}
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-text">Saltaire Dog Walks</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{publishedDate}</span>
                  {post.readingTime && (
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readingTime} min read</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {post.stats && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" />{post.stats.views}</span>
                  <span className="flex items-center gap-1"><Heart className="h-3 w-3" />{post.stats.likes}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" />{post.stats.helpfulVotes}</span>
                </div>
              )}
              <Button variant="outline" size="sm" className="gap-2"><Share2 className="h-3 w-3" />Share</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      {children ? (
        fullWidthChildren ? (
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-brand">
              {children}
            </div>
          </div>
        )
      ) : post.content ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-brand">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </article>
        </div>
      ) : null}

      {/* Related (centered) */}
      {related.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mt-16 pt-8 border-t border-stone-200">
            <h2 className="mb-6 text-2xl font-bold text-text">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((rp: any) => (
                <Card key={rp.slug} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={rp.coverImage.src} alt={rp.coverImage.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">{rp.category}</Badge>
                    <h3 className="mb-2 font-semibold text-text transition-colors group-hover:text-brand">
                      <Link href={`/blog/${rp.slug}`}>{rp.title}</Link>
                    </h3>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{rp.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{rp.readingTime} min read</span>
                      <span>{rp.stats.views} views</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}
    </article>
  )
}
