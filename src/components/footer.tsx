import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react'

const currentYear = new Date().getFullYear()

const WA_NUMBER = '447305367941'
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
      className="border-t"
      style={{ backgroundColor: '#F7F7F6', borderColor: '#E6E3DA' }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Saltaire Dogs + Pets',
            image: 'https://saltairedogs.uk/saltaire-dogs-logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Saltaire',
              postalCode: 'BD18',
              addressRegion: 'West Yorkshire',
              addressCountry: 'GB',
            },
            telephone: '+44 7305 367941',
            openingHours: ['Mo-Sa 08:00-18:00'],
            url: 'https://saltairedogs.uk',
          }),
        }}
      />

      <Container>
        {/* Compact CTA Row */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 rounded-md"
            aria-label="Saltaire Dogs + Pets home"
          >
            <Image
              src="/saltaire-dogs-logo-official.png"
              alt="Saltaire Dogs + Pets logo"
              width={200} height={200}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="text-center text-sm text-[#7B828A] sm:text-left">
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
              href="tel:+447305367941"
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
                    style={{ color: '#7B828A' }}
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
                    style={{ color: '#7B828A' }}
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
            <p className="text-center md:text-left" style={{ color: '#7B828A' }}>
              &copy; {currentYear} Saltaire Dogs + Pets. All rights reserved.
            </p>
            <a
              href="https://alveriano.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-md transition-colors hover:text-[#131415] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 text-center md:text-right"
              style={{ color: '#7B828A' }}
            >
              This site was created by and is managed by alveriano.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
