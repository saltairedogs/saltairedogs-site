'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Filter, X, SlidersHorizontal, Clock, MapPin, TrendingUp } from 'lucide-react'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
// Update the import path below if your blog module is in a different location or has a different filename
import { BLOG_CATEGORIES, QUICK_FILTERS, type BlogCategory } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'

interface FilterState {
  search: string
  category: BlogCategory | 'All'
  tags: string[]
  sortBy: 'newest' | 'popular' | 'helpful'
}

interface BlogFilterProps {
  initialPosts: typeof SAMPLE_BLOG_POSTS
}

// Blog post card component (for filtered results)
function BlogPostCard({ post }: { post: typeof SAMPLE_BLOG_POSTS[0] }) {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-text">
            {post.category}
          </Badge>
        </div>
        {post.location && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-brand/90 text-white gap-1">
              <MapPin className="h-3 w-3" />
              {post.location}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold group-hover:text-brand transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {post.excerpt}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar || '/logo.svg'} />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              Saltaire Dog Walks
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{post.stats.views} views</span>
          <span>{post.stats.helpfulVotes} helpful</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Main filtering component
export default function BlogFilter({ initialPosts }: BlogFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Initialize state from URL params
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    category: (searchParams.get('category') as BlogCategory) || 'All',
    tags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
    sortBy: (searchParams.get('sort') as FilterState['sortBy']) || 'newest'
  })
  
  const [showFilters, setShowFilters] = useState(false)

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    
    if (filters.search) params.set('search', filters.search)
    if (filters.category !== 'All') params.set('category', filters.category)
    if (filters.tags.length > 0) params.set('tags', filters.tags.join(','))
    if (filters.sortBy !== 'newest') params.set('sort', filters.sortBy)
    
    const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog'
    router.replace(newUrl, { scroll: false })
  }, [filters, router])

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...initialPosts]

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm))
      )
    }

    // Apply category filter
    if (filters.category !== 'All') {
      posts = posts.filter((post: any) => post.category === filters.category)
    }

    // Apply tag filters
    if (filters.tags.length > 0) {
      posts = posts.filter((post: any) =>
        filters.tags.some(filterTag =>
          post.tags.some((postTag: string) => postTag.toLowerCase() === filterTag.toLowerCase())
        )
      )
    }

    // Apply sorting
    posts.sort((a: any, b: any) => {
      switch (filters.sortBy) {
        case 'popular':
          return (b.stats.views + b.stats.likes * 3) - (a.stats.views + a.stats.likes * 3)
        case 'helpful':
          return (b.stats.helpfulVotes * 5 + b.stats.likes) - (a.stats.helpfulVotes * 5 + a.stats.likes)
        case 'newest':
        default:
          return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
      }
    })

    return posts
  }, [initialPosts, filters])

  // Handle quick filter clicks
  const handleQuickFilter = (filter: typeof QUICK_FILTERS[0]) => {
    setFilters(prev => ({
      ...prev,
      category: filter.category,
      tags: [...filter.tags]
    }))
  }

  // Handle tag removal
  const removeTag = (tagToRemove: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      category: 'All',
      tags: [],
      sortBy: 'newest'
    })
  }

  const hasActiveFilters = filters.search || filters.category !== 'All' || filters.tags.length > 0

  return (
    <div className="space-y-6">
      {/* Search and main controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search articles..."
            className="pl-10"
            value={filters.search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                {[filters.category !== 'All' ? 1 : 0, filters.tags.length].reduce((a, b) => a + b, 0)}
              </Badge>
            )}
          </Button>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Quick filters */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={filters.category === 'All' && filters.tags.length === 0 ? "default" : "outline"} 
          size="sm"
          onClick={() => setFilters(prev => ({ ...prev, category: 'All', tags: [] }))}
        >
          All Posts
        </Button>
        {QUICK_FILTERS.map((filter: any, index: number) => (
          <Button 
            key={index}
            variant={filters.category === filter.category && 
                    filters.tags.length === filter.tags.length &&
                    filters.tags.every((tag: string) => filter.tags.includes(tag)) ? "default" : "outline"}
            size="sm"
            onClick={() => handleQuickFilter(filter)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Advanced filters panel */}
      {showFilters && (
        <Card className="p-6 border-2 border-dashed border-border">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Category filter */}
            <div className="space-y-3">
              <h4 className="font-medium text-text">Category</h4>
              <div className="space-y-1">
                <Button
                  variant={filters.category === 'All' ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
                >
                  All Categories
                </Button>
                {Object.entries(BLOG_CATEGORIES).map(([categoryName, categoryData]: [string, any]) => (
                  <Button
                    key={categoryName}
                    variant={filters.category === categoryName ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start gap-2"
                    onClick={() => setFilters(prev => ({ ...prev, category: categoryName as BlogCategory }))}
                  >
                    <span>{categoryData.icon}</span>
                    <span>{categoryName}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Sort options */}
            <div className="space-y-3">
              <h4 className="font-medium text-text">Sort by</h4>
              <div className="space-y-1">
                {[
                  { value: 'newest', label: 'Newest First', icon: Clock },
                  { value: 'popular', label: 'Most Popular', icon: TrendingUp },
                  { value: 'helpful', label: 'Most Helpful', icon: TrendingUp }
                ].map(({ value, label, icon: Icon }) => (
                  <Button
                    key={value}
                    variant={filters.sortBy === value ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start gap-2"
                    onClick={() => setFilters(prev => ({ ...prev, sortBy: value as FilterState['sortBy'] }))}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Active filters */}
            <div className="space-y-3">
              <h4 className="font-medium text-text">Active Filters</h4>
              <div className="space-y-2">
                {filters.category !== 'All' && (
                  <Badge variant="secondary" className="gap-1">
                    Category: {filters.category}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => setFilters(prev => ({ ...prev, category: 'All' }))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
                {filters.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    {tag}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeTag(tag)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
                {!hasActiveFilters && (
                  <p className="text-sm text-muted-foreground">No active filters</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text">
            {hasActiveFilters ? 'Filtered Results' : 'Latest Articles'}
          </h2>
          <div className="text-sm text-muted-foreground">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl">🔍</div>
              <div>
                <h3 className="text-lg font-semibold text-text mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
              {hasActiveFilters && (
                <Button onClick={clearFilters}>
                  Clear all filters
                </Button>
              )}
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post: any) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}