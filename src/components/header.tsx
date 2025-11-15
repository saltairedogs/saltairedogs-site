// app/components/header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Container } from './container'
import { MobileNav } from './mobile-nav'
import { Menu, MessageCircle, Instagram, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

const NAV = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const WA_NUMBER = '447305367941'
const WA_TEXT = encodeURIComponent(
  "Hi! I'm in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I'm looking for [walks/visits]."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

const INSTAGRAM_URL = 'https://www.instagram.com/saltairedogs/'
const EMAIL_ADDRESS = 'hello@saltairedogs.uk'
const MAILTO = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
  'Saltaire Dogs + Pets — quick question'
)}&body=${encodeURIComponent(
  'Hi Giuseppe, \n\nI’m in/near Saltaire and need help with [walks/visits/feeding] on [dates].\n\nThanks!'
)}`

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkBase =
    'text-[15px] font-semibold uppercase tracking-[0.06em] px-2.5 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40'

  return (
    <header
      className={`sticky z-50 w-full transition-all duration-200 ${scrolled ? 'backdrop-blur-md' : ''}`}
      style={{
        top: 'var(--banner-offset, 0px)',
        backgroundColor: scrolled ? 'rgba(247,247,246,0.85)' : 'transparent',
        borderBottom: `1px solid ${scrolled ? '#E6E3DA' : 'transparent'}`,
      }}
    >
      <Container>
        <div className={`flex items-center justify-between ${scrolled ? 'h-16' : 'h-20'} lg:${scrolled ? 'h-20' : 'h-24'}`}>
          {/* Logo (Home) */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
            aria-label="Saltaire Dogs + Pets — Home"
          >
            <Image
              src="/saltaire-dogs-logo-official.webp"
              alt="Saltaire Dogs + Pets logo"
              width={200}
              height={200}
              priority
              className={`w-auto transition-all ${scrolled ? 'h-9 lg:h-11' : 'h-12 lg:h-14'}`}
            />
          </Link>

          {/* ---- Mobile inline mini nav + quick icons (ONE LINE) ---- */}
          <div className="md:hidden flex-1 flex items-center justify-center gap-2 px-1">
            <nav className="flex items-center gap-1.5" aria-label="Quick">
              {NAV.map((item) => {
                const active =
                  pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={`mini-${item.name}`}
                    href={item.href}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-semibold ${
                      active
                        ? 'bg-[#131415] text-white border-[#131415]'
                        : 'bg-white/80 text-[#131415] border-[#E6E3DA]'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* tiny divider to breathe */}
            <span className="h-6 w-px bg-[#E6E3DA]" />

            {/* Quick icons */}
            <div className="flex items-center gap-1.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E3DA] bg-white/80"
              >
                <Instagram className="h-4 w-4 text-[#131415]" />
              </a>
              <a
                href={MAILTO}
                aria-label="Email us"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E3DA] bg-white/80"
              >
                <Mail className="h-4 w-4 text-[#131415]" />
              </a>
            </div>
          </div>
          {/* --------------------------------------------------------- */}

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6" aria-label="Primary">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${linkBase} ${active ? 'text-[#131415]' : 'text-[#131415]/70 hover:text-[#131415]'}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* CTAs + Mobile Menu */}
          <div className="flex items-center gap-1.5">
            {/* Instagram (desktop) */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[14px] font-semibold"
              style={{ borderColor: '#E6E3DA', color: '#131415' }}
              aria-label="Follow @saltairedogs on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden sm:inline">@saltairedogs</span>
              <span className="sm:hidden">Instagram</span>
            </a>

            {/* WhatsApp (desktop) */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-[#131415] shadow-none focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
              style={{ backgroundColor: '#C89B3C' }}
              aria-label="Get a 60-second quote on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              Quote on WhatsApp
            </a>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-[#131415]" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85vw] max-w-xs p-4 sm:p-5 rounded-xl shadow-lg bg-[#F7F7F6] ring-1 ring-[#E6E3DA]"
                // Offset below the sticky announcement banner (h-8 => 32px + 2px border breathing)
                style={{ top: '34px' }}
              >
                <MobileNav
                  navigation={NAV}
                  currentPath={pathname ?? '/'}
                  onClose={() => setMobileOpen(false)}
                />

                {/* Social / CTA block */}
                <div className="mt-4 grid grid-cols-1 gap-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border px-4 py-2.5 text-[14px] font-semibold"
                    style={{ borderColor: '#E6E3DA', color: '#131415' }}
                    aria-label="Follow @saltairedogs on Instagram"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-[#131415]"
                    style={{ backgroundColor: '#C89B3C' }}
                    aria-label="Get a 60-second quote on WhatsApp"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Quote on WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
