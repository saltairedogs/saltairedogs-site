import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Clock, Calendar, User, MapPin, Eye, Heart, ThumbsUp, ArrowLeft, Share2 } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import { Badge } from '../../../../components/ui/badge'
import { Card, CardContent } from '../../../../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../../../../components/ui/avatar'
import { SAMPLE_BLOG_POSTS, getRelatedPosts } from '../../../../lib/blog-data'
import ReadingProgress from '../../../../components/blog/reading-progress'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = SAMPLE_BLOG_POSTS.find((p: any) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Saltaire Dog Walks',
    }
  }

  return {
    title: `${post.title} | Saltaire Dog Walks Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.seo?.ogImage ? [post.seo.ogImage] : [post.coverImage.src],
      type: 'article',
      publishedTime: post.datePublished,
  authors: ['Saltaire Dog Walks'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.seo?.ogImage ? [post.seo.ogImage] : [post.coverImage.src],
    },
    keywords: post.tags.join(', '),
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return SAMPLE_BLOG_POSTS.map((post: any) => ({
    slug: post.slug,
  }))
}

// Article header component
function ArticleHeader({ post }: { post: typeof SAMPLE_BLOG_POSTS[0] }) {
  return (
    <header className="relative">
      {/* Cover image */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-6 left-6">
          <Button asChild variant="secondary" className="bg-white/90 backdrop-blur-sm">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article meta overlay */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-brand text-white">
              {post.category}
            </Badge>
            {post.location && (
              <Badge variant="secondary" className="bg-white/20 text-white">
                <MapPin className="h-3 w-3 mr-1" />
                {post.location}
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </div>
    </header>
  )
}

// Article meta component
function ArticleMeta({ post }: { post: typeof SAMPLE_BLOG_POSTS[0] }) {
  const publishedDate = new Date(post.datePublished).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="border-b border-stone-200 pb-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Author and date */}
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.author.avatar || '/logo.svg'} />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-text">Saltaire Dog Walks</div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
        </div>

        {/* Stats and actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {post.stats.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {post.stats.likes}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              {post.stats.helpfulVotes}
            </span>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-3 w-3" />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}

// Article content component
function ArticleContent({ post }: { post: typeof SAMPLE_BLOG_POSTS[0] }) {
  return (
    <article className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-muted-foreground prose-a:text-brand prose-strong:text-text prose-blockquote:border-l-brand prose-blockquote:text-muted-foreground">
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
    </article>
  )
}

// Related posts component
function RelatedPosts({ currentPost }: { currentPost: typeof SAMPLE_BLOG_POSTS[0] }) {
  const relatedPosts = getRelatedPosts(currentPost, 3)
  
  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t border-stone-200">
      <h2 className="text-2xl font-bold text-text mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post: any) => (
          <Card key={post.slug} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="relative h-40 overflow-hidden">
              <Image
                src={post.coverImage.src}
                alt={post.coverImage.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <Badge variant="outline" className="mb-2 text-xs">
                {post.category}
              </Badge>
              <h3 className="font-semibold text-text group-hover:text-brand transition-colors line-clamp-2 mb-2">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.readingTime} min read</span>
                <span>{post.stats.views} views</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

// Newsletter CTA component
function NewsletterCTA() {
  return (
    <Card className="mt-12 p-8 bg-gradient-to-r from-brand/5 to-brand/10 border-brand/20">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-text mb-2">
          Get More Dog Care Tips
        </h3>
        <p className="text-muted-foreground mb-6">
          Join our newsletter for weekly dog walking advice, local route updates, and exclusive tips from our experienced team.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border border-border rounded-lg text-sm"
          />
          <Button className="sm:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = SAMPLE_BLOG_POSTS.find((p: any) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <>
      <ReadingProgress />
      <article className="min-h-screen bg-bg">
        <ArticleHeader post={post} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ArticleMeta post={post} />
          <ArticleContent post={post} />
          
          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <h4 className="font-semibold text-text mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <RelatedPosts currentPost={post} />
          <NewsletterCTA />
        </div>
      </article>
    </>
  )
}