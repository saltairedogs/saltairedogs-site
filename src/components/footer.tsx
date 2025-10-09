import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'

const currentYear = new Date().getFullYear()

export function Footer() {
  const legalLinks = [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
  ]

  return (
    <footer 
      className="border-t" 
      style={{ 
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--hairline)'
      }}
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
              <Image
                src="/logo.svg"
                alt="Saltaire Dog Walks"
                width={200}
                height={60}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Trusted dog walking &amp; pet sitting in Saltaire, Shipley &amp;
              Baildon. Solo walks, live GPS updates, and a friendly, positive service.
            </p>
            <div className="flex space-x-4">
              {/* Social icons can be added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Dog Walking
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Puppy Visits
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Pet Sitting
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text)' }}>Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                We provide a friendly and positive service with thoughtful, calm handling. Get in touch if you’d like to know more about how we work.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Saltaire Dog Walks<br />
                  Victoria Road, Saltaire<br />
                  West Yorkshire BD18
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a
                  href="tel:+447305367941"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  07305 367941
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a
                  href="mailto:saltairedogs@proton.me"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  saltairedogs@proton.me
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Office hours: Mon–Sat 8am–6pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p className="text-center md:text-left">
              &copy; {currentYear} Saltaire Dog Walks. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-xs md:text-right">
              Site lovingly crafted by{' '}
              <a
                href="https://saltaireweb.co.uk"
                rel="noopener noreferrer nofollow"
                className="transition-colors hover:text-foreground"
              >
                Saltaire Web &amp; SEO
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}