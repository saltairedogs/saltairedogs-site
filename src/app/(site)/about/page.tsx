import type { Metadata } from 'next'
import AboutClient from './client'

export const metadata: Metadata = {
  title: 'About Giuseppe — Your Local Pet Expert in Saltaire (15+ Years)',
  description:
    "Meet Giuseppe. 15+ years in Saltaire, cheapest rates (from £10), only service covering exotic pets. DBS checked, insured, genuinely loves animals. Dogs to bearded dragons.",
  alternates: { canonical: 'https://saltairedogs.uk/about' },
  openGraph: {
    title: 'About Giuseppe — Saltaire Dogs + Pets',
    description:
      '15+ years caring for Saltaire pets. Cheapest rates, exotic pets specialist, genuinely loves what he does. From £10 per visit.',
    url: 'https://saltairedogs.uk/about',
    siteName: 'Saltaire Dogs + Pets',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  return <AboutClient />
}
