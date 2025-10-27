import { Header as SiteHeader } from '@/components/header'
import { Footer as SiteFooter } from '@/components/footer'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { FAQ } from '@/components/faq'
import { ServiceArea } from '@/components/service-area'
import { CTABanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for LocalBusiness and Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Saltaire Dogs + Pets',
            url: process.env.SITE_URL ?? 'https://saltairedogs.uk',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: (process.env.SITE_URL ?? 'https://saltairedogs.uk') + '/' },
            ],
          }),
        }}
      />
      {/* Accessible skip link */}
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Global header/navigation */}
      <SiteHeader />

      {/* Page content */}
      <main id="main">
        <Hero />
        <TrustBar />
        <Features />
        {/* Pricing removed (quote-first funnel) */}
        {/* Testimonials removed (no reviews yet) */}
        <ServiceArea />
      </main>

      {/* Global footer */}
      <SiteFooter />
    </>
  )
}
