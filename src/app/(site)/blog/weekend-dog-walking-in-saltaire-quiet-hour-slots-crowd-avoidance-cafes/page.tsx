import type { Metadata } from "next";
import { PostLayout } from '@/components/blog/post-layout'
import WeekendDogWalkingClient from "./WeekendDogWalkingClient";
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: "Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés | Saltaire Dog Walks Blog",
  description:
    "Navigate busy weekends with ease—learn the quiet slots, crowd-avoidance routes, and best post-walk cafés.",
  openGraph: {
    title: "Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés",
    description: "Navigate busy weekends with ease—quiet slots, crowd-avoidance routes, and best post-walk cafés.",
    type: "article",
  },
};

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes') || {
    slug: 'weekend-dog-walking-in-saltaire-quiet-hour-slots-crowd-avoidance-cafes',
    title: 'Weekend Dog Walking in Saltaire: Quiet Hour Slots, Crowd-Avoidance & Cafés',
    excerpt: 'Navigate busy weekends with ease—quiet slots, crowd-avoidance routes, and best post-walk cafés.',
    coverImage: { src: '/saltaire-victoria-road-schnauzer-on-lead.jpg', alt: 'Dog on Victoria Road' },
    author: { name: 'Saltaire Dog Walks' },
    datePublished: new Date().toISOString(),
    readingTime: 5,
    category: 'Walking',
    tags: ['weekend', 'routes', 'cafes'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
  } as any

  return (
    <PostLayout post={post} fullWidthChildren>
      <WeekendDogWalkingClient showHero={false} />
    </PostLayout>
  );
}
