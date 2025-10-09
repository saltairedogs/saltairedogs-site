import { Suspense } from 'react'
import { Metadata } from 'next'
import { BookOpen, TrendingUp, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SAMPLE_BLOG_POSTS, getFeaturedPost, getPopularPosts } from '@/lib/blog-data'
import { BLOG_CATEGORIES, type BlogCategory } from '@/lib/blog'
import BlogFilter from '@/components/blog/blog-filter'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dog Care & Walking Tips | Saltaire Dog Walks Blog',
  description: 'Expert advice on dog training, local walking routes, safety tips, and care guides. Written by professional dog walkers serving Saltaire, Shipley & Baildon.',
  openGraph: {
    title: 'Dog Care & Walking Tips | Saltaire Dog Walks Blog',
    description: 'Expert advice on dog training, local walking routes, safety tips, and care guides from professional dog walkers.',
    images: ['/poodle-brown.png'],
  },
}

// Blog hero component
function BlogHero() {
  const featuredPost = getFeaturedPost()
  
  return (
    <section className="relative bg-gradient-to-br from-surface to-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Expert Dog Care Insights</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text leading-tight">
                Happy Dogs,<br />
                Calm Walks
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dog walking advice, local route guides, and training tips 
                from our experienced team serving Saltaire, Shipley & Baildon.
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">20+</div>
                <div className="text-sm text-muted-foreground">Friendly Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">500+</div>
                <div className="text-sm text-muted-foreground">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand">5+ Years</div>
                <div className="text-sm text-muted-foreground">Local Experience</div>
              </div>
            </div>
          </div>

          {/* Right content - Featured post */}
          {featuredPost && (
            <div className="space-y-4">
              <div className="text-sm font-medium text-brand">Featured Article</div>
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={featuredPost.coverImage.src}
                    alt={featuredPost.coverImage.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-brand text-white">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={featuredPost.author.avatar || '/logo.svg'} />
                        <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        Saltaire Dog Walks
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readingTime} min read</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Category filter component
function CategoryFilter() {
  const categoryEntries = Object.entries(BLOG_CATEGORIES) as [BlogCategory, any][]
  
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-text">Categories</h3>
      <div className="space-y-2">
        <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
          <span>All Categories</span>
          <span className="ml-auto text-xs text-muted-foreground">
            {SAMPLE_BLOG_POSTS.length}
          </span>
        </Button>
        {categoryEntries.map(([categoryName, categoryData]) => {
          const count = SAMPLE_BLOG_POSTS.filter((post: any) => post.category === categoryName).length
          return (
            <Button 
              key={categoryName} 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start gap-2"
            >
              <span>{categoryData.icon}</span>
              <span>{categoryName}</span>
              <span className="ml-auto text-xs text-muted-foreground">{count}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

// Popular posts sidebar
function PopularPosts() {
  const popularPosts = getPopularPosts(5)
  
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-text flex items-center gap-2">
        <TrendingUp className="h-4 w-4" />
        Most Popular
      </h3>
      <div className="space-y-3">
        {popularPosts.map((post: any, index: number) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-2 h-6 bg-gradient-to-b from-brand to-brand/50 rounded-full" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium group-hover:text-brand transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                  <span>{post.stats.views} views</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-bg">
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="py-10 text-center text-muted-foreground">Loading filters…</div>}>
              <BlogFilter initialPosts={SAMPLE_BLOG_POSTS} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CategoryFilter />
            <PopularPosts />
            
            {/* Newsletter signup */}
            <Card className="p-6 bg-gradient-to-br from-brand/5 to-brand/10 border-brand/20">
              <h3 className="font-semibold text-text mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest dog care tips and local walking guides delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-border rounded-lg text-sm"
                />
                <Button size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}