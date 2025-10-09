import { Header as SiteHeader } from '@/components/header'
import { Footer as SiteFooter } from '@/components/footer'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Features } from '@/components/features'
import { PricingPreview } from '@/components/pricing-preview'
import { Testimonials } from '@/components/testimonials'
import { Gallery } from '@/components/gallery'
import { FAQ } from '@/components/faq'
import { ServiceArea } from '@/components/service-area'
import { CTABanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      {/* Accessible skip link */}
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Global header/navigation */}
      <SiteHeader />

      {/* Page content */}
      <main id="main">
        <Hero />
        <TrustBar />
        <Features />
        <PricingPreview />
        <Testimonials />
        <Gallery />
        <FAQ />
        <ServiceArea />
        <CTABanner />
      </main>

      {/* Global footer */}
      <SiteFooter />
    </>
  )
}