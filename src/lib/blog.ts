// Blog data types and interfaces

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: {
    src: string
    alt: string
    width: number
    height: number
  }
  author: {
    name: string
    avatar?: string
  }
  datePublished: string
  dateUpdated?: string
  readingTime: number
  category: BlogCategory
  tags: string[]
  location?: 'Saltaire' | 'Shipley' | 'Baildon'
  stats: {
    views: number
    likes: number
    helpfulVotes: number
  }
  seo: {
    metaTitle?: string
    metaDescription: string
    ogImage?: string
  }
  featured: boolean
}

export type BlogCategory = 
  | 'Training'
  | 'Puppy' 
  | 'Health'
  | 'Walking'
  | 'Local Spots'
  | 'Equipment'
  | 'Safety'
  | 'News'

export type SortOption = 'newest' | 'popular' | 'helpful' | 'alphabetical'

export interface BlogFilters {
  search: string
  category: BlogCategory | 'All'
  tags: string[]
  sort: SortOption
  page: number
}

export interface BlogStats {
  totalPosts: number
  totalViews: number
  categoryCounts: Record<BlogCategory, number>
  popularTags: Array<{ tag: string; count: number }>
}

// Popular tag presets for quick filtering
export const QUICK_FILTERS = [
  { label: 'Puppy Basics', category: 'Puppy' as BlogCategory, tags: ['socialisation', 'toilet training'] },
  { label: 'Heat Safety', category: 'Safety' as BlogCategory, tags: ['heat safety', 'summer'] },
  { label: 'Recall Training', category: 'Training' as BlogCategory, tags: ['recall', 'training'] },
  { label: 'Local Walks', category: 'Local Spots' as BlogCategory, tags: ['Roberts Park', 'canal towpath'] },
] as const

// Category metadata
export const BLOG_CATEGORIES: Record<BlogCategory, { icon: string; description: string; color: string }> = {
  'Training': { 
    icon: '🎯', 
    description: 'Building better behaviour and stronger bonds',
    color: 'text-blue-600'
  },
  'Puppy': { 
    icon: '🐕', 
    description: 'Essential guidance for your new best friend',
    color: 'text-pink-600'
  },
  'Health': { 
    icon: '❤️', 
    description: 'Keeping your dog happy and healthy',
    color: 'text-red-600'
  },
  'Walking': { 
    icon: '🚶', 
    description: 'Making every walk safe and enjoyable',
    color: 'text-green-600'
  },
  'Local Spots': { 
    icon: '📍', 
    description: 'Best walks and spots around Saltaire',
    color: 'text-purple-600'
  },
  'Equipment': { 
    icon: '🎒', 
    description: 'Gear recommendations and reviews',
    color: 'text-orange-600'
  },
  'Safety': { 
    icon: '🛡️', 
    description: 'Keeping your dog safe in all conditions',
    color: 'text-yellow-600'
  },
  'News': { 
    icon: '📰', 
    description: 'Updates from Saltaire Dog Walks',
    color: 'text-gray-600'
  }
}

// SEO-friendly URL utilities
export function createBlogUrl(slug: string): string {
  return `/blog/${slug}`
}

export function createCategoryUrl(category: BlogCategory): string {
  return `/blog/category/${category.toLowerCase().replace(' ', '-')}`
}

export function createTagUrl(tag: string): string {
  return `/blog/tag/${tag.toLowerCase().replace(' ', '-')}`
}

// Popularity calculation
export function calculatePopularityScore(stats: BlogPost['stats']): number {
  return stats.views + (stats.likes * 3)
}

export function calculateHelpfulnessScore(stats: BlogPost['stats']): number {
  // Weighted by helpful votes with likes as fallback
  return (stats.helpfulVotes * 5) + stats.likes
}