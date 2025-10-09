import type { Metadata } from "next";
import { PostLayout } from '@/components/blog/post-layout'
import { SAMPLE_BLOG_POSTS } from '@/lib/blog-data'
import RobertsParkPerfectDogWalkClient from "./RobertsParkPerfectDogWalkClient";

export const metadata: Metadata = {
  title: "Roberts Park Dog Walks: Perfect Route, Timing & Training | Saltaire Dog Walks Blog",
  description:
    "A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.",
  openGraph: {
    title: "Roberts Park — The Perfect Dog Walk",
    description: "A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.",
    type: "article",
    images: ["/images/blog/roberts-park-loop-hero.jpg"],
  },
};

export default function Page() {
  const post = SAMPLE_BLOG_POSTS.find(p => p.slug === 'roberts-park-perfect-dog-walk') || {
    slug: 'roberts-park-perfect-dog-walk',
    title: 'Roberts Park — The Perfect Dog Walk',
    excerpt: 'A concise, practical guide to the best 30–40 minute loop in Roberts Park: timing, training and safety.',
    coverImage: { src: '/walking-sat-dog.jpg', alt: 'Dogs playing in Roberts Park' },
    author: { name: 'Saltaire Dog Walks' },
    datePublished: new Date().toISOString(),
    readingTime: 6,
    category: 'Local Spots',
    tags: ['Roberts Park', 'route'],
    stats: { views: 0, likes: 0, helpfulVotes: 0 },
  } as any

  return (
    <PostLayout post={post} fullWidthChildren>
      <RobertsParkPerfectDogWalkClient showHero={false} />
    </PostLayout>
  );
}
