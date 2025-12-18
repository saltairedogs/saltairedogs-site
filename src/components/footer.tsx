import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react'

const currentYear = new Date().getFullYear()

const WA_NUMBER = '447424208127'
const WA_TEXT = encodeURIComponent(
  'Hi! I’m in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I’m looking for [walks/visits].'
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

const INSTAGRAM_URL = 'https://www.instagram.com/saltairedogs/'

export function Footer() {
  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
  ]

  const navPrimary = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{ borderColor: '#E6E3DA' }}
      aria-labelledby="footer-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/saltaire-aerial-victoria-road-footer-panorama.avif"
          alt="Aerial view of Saltaire: Victoria Road, terraces, church and allotments at golden hour."
          fill
          sizes="100vw"
          priority={false}
          className="object-cover"
          /* Less grey, a touch warmer, a hair brighter for life */
          style={{ filter: 'grayscale(18%) sepia(10%) contrast(1.04) brightness(0.97)' }}
        />
      </div>

      {/* Warm paper wash (no blue), a bit lighter than before */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: '#F6F3EC', opacity: 0.82 }}
      />

      {/* Dark gradient for legibility (keep subtle to let the photo breathe) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.14) 65%, rgba(0,0,0,0.16) 90%)',
        }}
      />

      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Saltaire Dogs + Pets',
            image: 'https://saltairedogs.uk/saltaire-dogs-logo.webp',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Saltaire',
              postalCode: 'BD18',
              addressRegion: 'West Yorkshire',
              addressCountry: 'GB',
            },
            telephone: '+44 7424 208127',
            openingHours: ['Mo-Sa 08:00-18:00'],
            url: 'https://saltairedogs.uk',
          }),
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          {/* Compact CTA Row */}
          <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 rounded-md"
              aria-label="Saltaire Dogs + Pets home"
            >
              <Image
                src="/saltaire-dogs-logo-official.webp"
                alt="Saltaire Dogs + Pets logo"
                width={260} height={260}
                className="h-12 w-auto"   /* increased from h-8 */
                priority
              />
            </Link>

            <div className="text-center text-sm sm:text-left" style={{ color: '#131415' }}>
              Friendly, local care — DBS checked • Insured • Photo updates
            </div>

            {/* Button group: center on mobile, align right on desktop */}
            <div className="mt-1 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-0 sm:w-auto sm:justify-end">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#131415]"
                style={{ backgroundColor: '#C89B3C' }}
                aria-label="Get a 60-second quote on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp quote
              </a>
              <a
                href="tel:+447424208127"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors"
                style={{ borderColor: '#E6E3DA', color: '#131415' }}
                aria-label="Call Saltaire Dogs + Pets"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href="mailto:saltairedogs@proton.me"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors"
                style={{ borderColor: '#E6E3DA', color: '#131415' }}
                aria-label="Email Saltaire Dogs + Pets"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors"
                style={{ borderColor: '#E6E3DA', color: '#131415' }}
                aria-label="Follow Saltaire Dogs + Pets on Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span className="hidden sm:inline">@saltairedogs</span>
                <span className="sm:hidden">Instagram</span>
              </a>
            </div>
          </div>

          {/* Minimal nav & legal */}
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
            <nav aria-label="Navigate" className="mx-auto md:mx-0">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-start">
                {navPrimary.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="rounded-md transition-colors hover:text-[#131415] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
                      style={{ color: '#131415' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block" />

            <nav aria-label="Legal" className="mx-auto md:mx-0">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:justify-end">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="rounded-md transition-colors hover:text-[#131415] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
                      style={{ color: '#131415' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="border-t py-6" style={{ borderColor: '#E6E3DA' }}>
            <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
              <p className="text-center md:text-left" style={{ color: '#131415' }}>
                &copy; {currentYear} Saltaire Dogs + Pets. All rights reserved.
              </p>

              {/* Upgraded Alveriano credit */}
              <div className="text-center md:text-right leading-tight">
                <a
                  href="https://alveriano.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center rounded-md px-3 py-1.5 font-medium"
                  style={{ color: '#131415', backgroundColor: 'rgba(200,155,60,0.20)', border: '1px solid #E6E3DA' }}
                >
                  This site was created by and is managed by <span className="ml-1 underline underline-offset-2">alveriano.com</span>
                </a>
                <div className="mt-1 text-[12px]" style={{ color: '#131415' }}>
                  Alveriano is the #1 fair-priced, high-end custom website creative agency — reach out and they’ll be happy to assist with your needs.
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Image-only breathing room at the very bottom (no text) */}
        <div className="h-12 sm:h-16 md:h-20" />
      </div>
    </footer>
  )
}
