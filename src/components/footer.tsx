// app/components/footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { Phone, Mail, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react'

const currentYear = new Date().getFullYear()

const SITE_URL = 'https://www.saltairedogs.uk'
const BUSINESS = 'Saltaire Dogs + Pets'

const PHONE_DISPLAY = '07424 208127'
const PHONE_TEL = 'tel:+447424208127'
const EMAIL = 'mailto:saltairedogs@proton.me'

const WA_NUMBER = '447424208127'
const WA_TEXT = encodeURIComponent(
  'Hi! I’m in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I’m looking for [walks/visits].'
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

const INSTAGRAM_URL = 'https://www.instagram.com/saltairedogs/'

// Swap this to your new premium panorama once generated
const FOOTER_IMAGE = '/saltaire-aerial-victoria-road-footer-panorama.avif'

export function Footer() {
  const companyLinks = [
    { name: 'Services', href: '/services' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Areas', href: '/areas' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ] as const

  const serviceLinks = [
    { name: 'Dog walking', href: '/dog-walking' },
    { name: 'Cat sitting', href: '/cat-sitting' },
    { name: 'Medication visits', href: '/medication-visits' },
    { name: 'Animal feeding', href: '/animal-feeding' },
    { name: 'Small pets & exotics', href: '/small-pets-exotics' },
    { name: 'Long-shift support', href: '/long-shift-support' },
  ] as const

  const areaLinks = [
    { name: 'Dog walking in Saltaire', href: '/dog-walking/saltaire' },
    { name: 'Dog walking in Shipley', href: '/dog-walking/shipley' },
    { name: 'Cat sitting in Saltaire', href: '/cat-sitting/saltaire' },
    { name: 'Cat sitting in Shipley', href: '/cat-sitting/shipley' },
    { name: 'Service areas', href: '/areas' },
  ] as const

  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
  ] as const

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ borderColor: '#E6E3DA' }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={FOOTER_IMAGE}
          alt="Saltaire village rooftops and streets at warm golden hour."
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'saturate(1.08) contrast(1.06) brightness(0.90)' }}
        />
        {/* Premium “cinema” overlay: darker at bottom for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(247,247,246,0.45) 0%, rgba(247,247,246,0.72) 35%, rgba(247,247,246,0.90) 70%, rgba(247,247,246,0.96) 100%)',
          }}
        />
        {/* Subtle grain / vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1200px 420px at 50% 10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(900px 380px at 50% 95%, rgba(0,0,0,0.09), transparent 55%)',
          }}
        />
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS,
            url: SITE_URL,
            telephone: '+44 7424 208127',
            image: `${SITE_URL}/saltaire-dogs-logo-official.webp`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Saltaire',
              postalCode: 'BD18',
              addressRegion: 'West Yorkshire',
              addressCountry: 'GB',
            },
            openingHours: ['Mo-Sa 08:00-18:00'],
          }),
        }}
      />

      <div className="relative z-10">
        <Container>
          {/* Premium CTA panel */}
          <div className="pt-10">
            <div
              className="rounded-2xl border bg-white/70 backdrop-blur-md shadow-sm"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <Link
                    href="/"
                    className="shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
                    aria-label={`${BUSINESS} home`}
                  >
                    <Image
                      src="/saltaire-dogs-logo-official.webp"
                      alt="Saltaire Dogs + Pets logo"
                      width={220}
                      height={220}
                      className="h-10 w-auto md:h-11"
                      priority={false}
                    />
                  </Link>

                  <div>
                    <p className="text-sm font-semibold text-[#131415]">
                      Calm pet care in Saltaire &amp; Shipley
                    </p>
                    <p className="mt-1 text-sm text-[#5D636A]">
                      DBS checked • Insured • Short photo updates after each visit
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#5D636A]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> Mon–Sat 8am–6pm
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> BD18 (Saltaire/Shipley)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#131415]"
                    style={{ backgroundColor: '#C89B3C' }}
                    aria-label="Get a quote on WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp quote
                  </a>
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-2 rounded-xl border bg-white/60 px-4 py-2 text-sm font-semibold text-[#131415] hover:bg-white/80"
                    style={{ borderColor: '#E6E3DA' }}
                    aria-label="Call Saltaire Dogs + Pets"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={EMAIL}
                    className="inline-flex items-center gap-2 rounded-xl border bg-white/60 px-4 py-2 text-sm font-semibold text-[#131415] hover:bg-white/80"
                    style={{ borderColor: '#E6E3DA' }}
                    aria-label="Email Saltaire Dogs + Pets"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border bg-white/60 px-4 py-2 text-sm font-semibold text-[#131415] hover:bg-white/80"
                    style={{ borderColor: '#E6E3DA' }}
                    aria-label="Open Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                    <span className="hidden sm:inline">@saltairedogs</span>
                    <span className="sm:hidden">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Link hub */}
          <div className="grid gap-8 py-10 md:grid-cols-4">
            <FooterCol title="Popular services" links={serviceLinks} />
            <FooterCol title="By area" links={areaLinks} />
            <FooterCol title="Info" links={companyLinks} />
            <div>
              <h3 className="text-sm font-semibold text-[#131415]">Legal</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[#5D636A] hover:text-[#131415] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 rounded"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border bg-white/60 p-4" style={{ borderColor: '#E6E3DA' }}>
                <p className="text-xs font-semibold text-[#131415]">Quick booking tip</p>
                <p className="mt-1 text-xs text-[#5D636A]">
                  Message your area + dates + service + any routine notes. We’ll confirm availability fast.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t py-6" style={{ borderColor: '#E6E3DA' }}>
            <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
              <p className="text-[#5D636A]">
                © {currentYear} {BUSINESS}. All rights reserved.
              </p>

              <a
                href="https://alveriano.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="rounded-lg border bg-white/60 px-3 py-1.5 text-xs font-medium text-[#131415] hover:bg-white/80"
                style={{ borderColor: '#E6E3DA' }}
              >
                Site by <span className="underline underline-offset-2">alveriano.com</span>
              </a>
            </div>
          </div>

          <div className="h-10 sm:h-14" />
        </Container>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: readonly { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#131415]">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[#5D636A] hover:text-[#131415] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40 rounded"
            >
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
