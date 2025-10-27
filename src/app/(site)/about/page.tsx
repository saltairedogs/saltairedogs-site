'use client'

import { useEffect, useRef, useState, MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  FileBadge2,
  MapPin,
  Users,
  Camera,
  Clock,
  CheckCircle2,
  HeartHandshake,
  ChevronDown,
  Phone,
} from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { Separator } from '../../../components/ui/separator'
import { Container } from '../../../components/container'

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

const BRAND = {
  gold: '#C89B3C',      // premium accent
  ink: '#131415',       // dark text
  stone: '#EFEEE9',     // light surface
  hair: '#E6E3DA',      // hairline
}

const trustBadges = [
  { icon: ShieldCheck, label: 'DBS Checked', blurb: 'Enhanced DBS on file; dates available' },
  { icon: FileBadge2, label: 'Insured & First-Aid', blurb: 'Public liability + canine first-aid' },
  { icon: Camera, label: 'GPS & Photos', blurb: 'Route + photos after every visit' },
  { icon: Users, label: 'Small Groups', blurb: 'Calm, capped groups—solo available' },
  { icon: MapPin, label: 'Saltaire Local', blurb: 'Routes tuned for towpaths & parks' },
  { icon: Clock, label: 'Reliable Timing', blurb: 'Predictable windows you can plan around' },
]

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

// Reveal-on-scroll (adds .reveal-in)
function useReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return

    const revealNow = (el: HTMLElement) => el.classList.add('reveal-in')

    // Immediately reveal anything already in view
    const vh = window.innerHeight || 800
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh * 0.9) revealNow(el)
    })

    // Observe the rest
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          revealNow(e.target as HTMLElement)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    els.forEach((el) => io.observe(el))

    // Fallback: reveal anything left hidden after 1s
    const t = window.setTimeout(() => els.forEach(revealNow), 1000)

    return () => {
      window.clearTimeout(t)
      io.disconnect()
    }
  }, [selector])
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  useReveal()

  // HERO PARALLAX
  const heroImgRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = heroImgRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.15
        el.style.transform = `translate3d(0, ${y}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About — Saltaire Dogs + Pets',
            description:
              'Owner-led, DBS-checked dog walking and pet care in Saltaire & Shipley. Small groups, solo walks, GPS & photo updates.',
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://saltairedogs.uk/about' },
            publisher: { '@type': 'Organization', name: 'Saltaire Dogs + Pets', url: 'https://saltairedogs.uk' },
          }),
        }}
      />

      {/* HERO (full-bleed, parallax, centered) */}
      <section className="relative isolate overflow-hidden">
        {/* parallax wrapper */}
        <div ref={heroImgRef} className="absolute inset-0 -z-30 will-change-transform">
          <Image
            src="/saltaire-dogs-river.png" // or your chosen hero file
            alt="Golden retriever on the Saltaire canal towpath"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* LIGHTER overlays for a brighter image but readable type */}
        {/* subtle radial to calm center highlights */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(1200px_720px_at_60%_35%,rgba(0,0,0,0.22),rgba(0,0,0,0.48))]" />
        {/* left→right scrim for headline area (brighter than before) */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
        {/* gentle bottom fade so UI elements float nicely */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/35 to-transparent" />

        <Container>
          <div className="relative py-24 sm:py-28 lg:py-36">
            {/* glass card: lighter opacity to let more photo through */}
            <div className="mx-auto max-w-3xl rounded-2xl bg-black/30 p-7 sm:p-8 text-center ring-1 ring-white/20 backdrop-blur-md shadow-[0_30px_120px_-25px_rgba(0,0,0,0.45)]">
              <Badge className="mx-auto bg-white/15 text-white ring-white/25">About</Badge>

              <h1
                className="hero-title mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Calm, trusted pet care in the heart of Saltaire
              </h1>

              <p className="hero-lead mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
                Owner-led and local. Friendly handling, small groups or solo walks, and clear photo updates so you always know how it went.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MagneticButton href="/contact" ariaLabel="Book walks" primary>
                  Book Walks
                </MagneticButton>
                {/* Pricing button removed intentionally (no public pricing) */}
              </div>

              <button
                onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                className="group mx-auto mt-10 inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-white"
                aria-label="Scroll to content"
              >
                Learn more
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Floating trust strip (glass) */}
            <div
              className="pointer-events-none absolute inset-x-0 -bottom-10 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 rounded-2xl border px-4 py-3 backdrop-blur-md"
              style={{ borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.10)' }}
              aria-hidden="true"
            >
              <p className="inline-flex items-center gap-2 text-sm text-white/90"><ShieldCheck className="h-4 w-4" /> DBS</p>
              <span className="text-white/40">•</span>
              <p className="inline-flex items-center gap-2 text-sm text-white/90"><FileBadge2 className="h-4 w-4" /> Insured & First-Aid</p>
              <span className="text-white/40">•</span>
              <p className="inline-flex items-center gap-2 text-sm text-white/90"><Camera className="h-4 w-4" /> GPS & Photos</p>
              <span className="text-white/40">•</span>
              <p className="inline-flex items-center gap-2 text-sm text-white/90"><Users className="h-4 w-4" /> Small groups</p>
            </div>
          </div>
        </Container>
      </section>

      <div className="h-12" />

      {/* WHY / VALUE */}
      <section id="why" className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Friendly, local & easy to work with</h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              I’ve lived in Saltaire for <strong>15+ years</strong>. I know the towpaths, bridges and quiet loops by heart. That means calmer routes, safer crossings, and walks matched to your pet’s pace and temperament.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                data-reveal
                className="transform rounded-2xl border bg-white p-6 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(0,0,0,0.15)]"
                style={{ borderColor: BRAND.hair }}
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <b.icon className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="text-lg font-semibold">{b.label}</h3>
                <p className="mt-1 text-sm text-[#7B828A]">{b.blurb}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Separator className="bg-[#E6E3DA]" />

      {/* PROCESS */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-3 text-[#7B828A]">Clear steps, written confirmations, and simple scheduling.</p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Book a chat', copy: 'Tell me your routine, routes you like, and any quirks.' },
              { title: 'Meet & greet', copy: 'I’ll meet your pet at home, confirm key handover and notes.' },
              { title: 'Trial walks', copy: 'Two calm trials at your normal time. Clear updates.' },
              { title: 'Regular slots', copy: 'We lock your time window and keep communication simple.' },
            ].map((s, idx) => (
              <li
                key={s.title}
                data-reveal
                className="relative rounded-2xl border bg-white p-6 text-left opacity-0 transition-all duration-700"
                style={{ borderColor: BRAND.hair }}
              >
                <div
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: BRAND.stone, color: BRAND.ink }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-[#7B828A]">{s.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Separator className="bg-[#E6E3DA]" />

      {/* STORY + MOSAIC */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal className="opacity-0 transition-all duration-700">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the owner — Giuseppe</h2>
              <div className="prose prose-slate mt-4 max-w-none text-[#7B828A]">
                <p>
                  Hi, I’m <strong>Giuseppe</strong>. I’ve lived in Saltaire for <strong>15+ years</strong> and know the area like the back of my hand. Your animal’s safe with me — calm, steady and patient.
                </p>
                <p>
                  I run Saltaire Dogs + Pets as a calm, local service. I’m <strong>DBS checked</strong>, fully insured, and I keep things simple: consistent routes, clear communication, and photo updates after every visit.
                </p>
                <p>
                  If I’m not the perfect fit for your pet, I’ll be honest and recommend someone who might be. The goal is a routine that keeps your pet happy and you worry‑free.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-100">
                <HeartHandshake className="h-4 w-4 text-emerald-700" />
                <span className="text-sm text-emerald-800">References available on request</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MosaicImage
                src="/saltaire-victoria-road-schnauzer-on-lead.jpg"
                alt="Schnauzer walking past Saltaire limestone terraces"
                tall
              />
              <MosaicImage
                src="/north-cliffe-dog-rainbow.jpg"
                alt="Dog walk at Northcliffe with a rainbow"
                tall
              />
              <MosaicImage
                src="/poodle-walking-shipley-glenn.jpg"
                alt="Poodle walking near Shipley Glen woodland"
                wide
              />
            </div>
          </div>
        </Container>
      </section>

      {/* TEAM STRIP → replaced with owner section above; keeping a small reassurance strip instead */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-6 text-center" style={{ borderColor: BRAND.hair }}>
            <p className="text-sm text-[#7B828A]">
              Owner‑led, local and responsive. If you need help in a pinch, I’m five minutes away.
            </p>
          </div>
        </Container>
      </section>

      <Separator className="bg-[#E6E3DA]" />

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24">
        <Container>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white lg:px-16"
            style={{
              background:
                'radial-gradient(1200px 600px at 10% 10%, rgba(200,155,60,0.45), transparent 60%), linear-gradient(135deg,#131415 0%,#1C1E20 100%)',
            }}
          >
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to book a meet & greet?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/80">
                Let’s confirm routines, check dates and make sure it’s the right fit for your pet.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MagneticButton href="/contact" ariaLabel="Book meet and greet" primary>
                  Book Meet & Greet
                </MagneticButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/30 bg-white/10 px-7 text-base font-semibold text-white hover:bg-white/15"
                >
                  <Link href="tel:07305367941" aria-label="Call Saltaire Dogs + Pets">
                    <Phone className="mr-2 h-4 w-4" />
                    07305&nbsp;367941
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-white/70">Paws wiped • Safety first • Honest updates</p>
            </div>

            {/* soft corner glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </Container>
      </section>
    </main>
  )
}

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

function MosaicImage({ src, alt, tall, wide }: { src: string; alt: string; tall?: boolean; wide?: boolean }) {
  return (
    <div
      data-reveal
      className={`relative overflow-hidden rounded-2xl ring-1 transition-all duration-700 opacity-0 ${tall ? 'h-64 sm:h-80' : ''} ${wide ? 'col-span-2 h-64 sm:h-80' : ''}`}
      style={{ background: BRAND.stone, borderColor: BRAND.hair }}
    >
      <Image src={src} alt={alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
    </div>
  )
}

/** Magnetic CTA button: subtle attraction toward cursor (desktop only). */
function MagneticButton({
  href,
  children,
  ariaLabel,
  primary,
}: {
  href: string
  children: React.ReactNode
  ariaLabel?: string
  primary?: boolean
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate3d(${mx * 0.07}px, ${my * 0.07}px, 0)`
  }

  const reset = () => {
    const el = wrapRef.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="transition-transform duration-150 ease-out will-change-transform"
      style={{ display: 'inline-block' }}
    >
      <Button
        asChild
        size="lg"
        className={`h-12 rounded-xl px-7 text-base font-semibold ${primary ? '' : ''}`}
        style={primary ? { backgroundColor: BRAND.gold, color: BRAND.ink } : undefined}
      >
        <Link href={href} aria-label={ariaLabel}>{children}</Link>
      </Button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Reveal + hero text styles (JS-injected)                                    */
/* -------------------------------------------------------------------------- */

if (typeof window !== 'undefined') {
  if (!document.getElementById('about-reveal-style')) {
    const style = document.createElement('style')
    style.id = 'about-reveal-style'
    style.innerHTML = `
      /* Default visible; animate when .reveal-in is added */
      [data-reveal]{opacity:1;transform:translateY(8px)}
      .reveal-in{opacity:1!important;transform:translateY(0)!important;transition:opacity .6s ease,transform .6s ease}
      .hero-title{color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.6),0 18px 48px rgba(0,0,0,.38);-webkit-text-stroke:.18px rgba(255,255,255,.16)}
      .hero-lead{color:#fff;text-shadow:0 2px 4px rgba(0,0,0,.5)}
    `
    document.head.appendChild(style)
  }
}
