// /home/giuseppe/saltaire-dogs/src/app/(site)/blog/choosing-a-saltaire-dog-walker-prices-insurance-references-red-flags/page.tsx
import { Metadata } from 'next'
import ChoosingDogWalkerClient from './ChoosingDogWalkerClient' // <-- import your client component

export const metadata: Metadata = {
  title:
    'Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags | Saltaire Dog Walks Blog',
  description:
    'Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.',
  openGraph: {
    title:
      'Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags',
    description:
      'Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.',
    type: 'article',
    images: [{ url: '/saltaire-dog-river.png', alt: 'Dog by the river in Saltaire' }],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Choosing a Saltaire Dog Walker: Prices, Insurance, References & Red Flags',
    description:
      'Make an informed choice—what to ask, what to check, and how to compare local dog walkers fairly.',
    images: ['/saltaire-dog-river.png'],
  },
}

export default function Page() {
  // Render the client directly so the grid can span max-w-7xl
  return <ChoosingDogWalkerClient />
}
