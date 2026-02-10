import type { Metadata } from 'next'
import AboutClient from './client'

export const metadata: Metadata = {
  title: 'About Us — Your Local Pet Experts in Saltaire (15+ Years)',
  description:
    "About Saltaire Dogs + Pets. 15+ years in Saltaire, cheapest rates (from £10), only service covering exotic pets. DBS checked, insured, genuinely love animals. Dogs to bearded dragons.",
  alternates: { canonical: 'https://saltairedogs.uk/about' },
  openGraph: {
    title: 'About Us — Saltaire Dogs + Pets',
    description:
      '15+ years caring for Saltaire pets. Cheapest rates, exotic pets specialist, genuinely love what we do. From £10 per visit.',
    url: 'https://saltairedogs.uk/about',
    siteName: 'Saltaire Dogs + Pets',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  return <AboutClient />
}
