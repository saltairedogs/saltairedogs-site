import type { Metadata } from 'next'
import HowItWorksClient from './client'

export const metadata: Metadata = {
  title: 'How It Works — Simple, Friendly Pet Care in Saltaire',
  description:
    'We have been caring for Saltaire pets for 15+ years. Fair prices from £10, photo updates every visit. Dogs, cats, rabbits, reptiles, birds — all welcome.',
  alternates: { canonical: 'https://www.saltairedogs.uk/how-it-works' },
  openGraph: {
    title: 'How It Works — Saltaire Dogs + Pets',
    description:
      'Friendly local pet care in Saltaire. From £10 per visit, 15+ years experience, photo updates every time. Get in touch today.',
    url: 'https://www.saltairedogs.uk/how-it-works',
    siteName: 'Saltaire Dogs + Pets',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}
