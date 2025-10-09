'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Container } from './container'
import { MobileNav } from './mobile-nav'
import { Menu, X } from 'lucide-react'

const primaryNavigation = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Areas', href: '/areas' },
  { name: 'Reviews', href: '/#testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'surface shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : ''
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'var(--surface)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--hairline)' : 'none'
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md" style={{ color: 'var(--brand)' }}>
            <Image
              src="/logo.svg"
              alt="Saltaire Dog Walks"
              width={180}
              height={40}
              priority
              className="h-8 w-auto lg:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label="Primary">
            {primaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md px-2 py-1"
                style={{ color: 'var(--text)' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild 
              className="hidden sm:inline-flex h-10 px-6 font-semibold text-white shadow-md"
              style={{
                backgroundColor: 'var(--brand)',
                color: 'white'
              }}
            >
              <Link href="/contact">Book Free Meet & Greet</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-auto h-auto right-3 sm:right-6 top-4 bottom-auto rounded-xl p-4 sm:p-5 shadow-lg max-h-[85vh] overflow-auto"
              >
                <MobileNav
                  navigation={primaryNavigation}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}