'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  FileBadge2,
  MapPin,
  Users,
  Camera,
  Clock,
  HeartHandshake,
  Phone,
  MessageCircle,
} from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Separator } from '../../../components/ui/separator'
import { Container } from '../../../components/container'

/* -------------------------------------------------------------------------- */
/* Brand                                                                      */
/* -------------------------------------------------------------------------- */

const BRAND = {
  gold: '#C89B3C',
  ink: '#131415',
  stone: '#EFEEE9',
  hair: '#E6E3DA',
}

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const trustBadges = [
  { icon: ShieldCheck, label: 'DBS checked', blurb: 'Enhanced DBS on file; dates available' },
  { icon: FileBadge2, label: 'Insured & first-aid', blurb: 'Public liability + canine first-aid' },
  { icon: Camera, label: 'GPS & photos', blurb: 'Route & photo notes after every visit' },
  { icon: Users, label: 'Small groups', blurb: 'Calm, capped groups — solo available' },
  { icon: MapPin, label: 'Saltaire local', blurb: 'Routes tuned for towpaths & parks' },
  { icon: Clock, label: 'Reliable timing', blurb: 'Predictable windows you can plan around' },
]

/* -------------------------------------------------------------------------- */
/* Utilities                                                                  */
/* -------------------------------------------------------------------------- */

/** Reveal-on-scroll with reduced-motion respect */
function useReveal(selector = '[data-reveal]') {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Show everything without animation
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            el.style.transition = 'opacity .6s ease, transform .6s ease'
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(8px)'
      io.observe(el)
    })

    return () => io.disconnect()
  }, [selector])
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  useReveal()

  // Soft parallax (disabled if prefers-reduced-motion)
  const heroImgRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = heroImgRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.12, 48) // clamp so it never drifts too far
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
      {/* JSON-LD (About + Organization + Person) */}
      <script
        type="application/ld+json"
        // lean, entity-linked schema
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About — Saltaire Dogs + Pets',
            url: 'https://saltairedogs.uk/about',
            mainEntity: {
              '@type': 'Organization',
              name: 'Saltaire Dogs + Pets',
              url: 'https://saltairedogs.uk',
              areaServed: ['Saltaire', 'Shipley'],
              image: 'https://saltairedogs.uk/saltaire-dogs-logo-official.webp',
            },
            about: {
              '@type': 'Person',
              name: 'Giuseppe',
              jobTitle: 'Owner',
              worksFor: { '@type': 'Organization', name: 'Saltaire Dogs + Pets' },
            },
          }),
        }}
      />

      {/* HERO (full-bleed, centred card, safe contrast) */}
      <section className="relative isolate overflow-hidden">
        {/* Background image (with blur placeholder) */}
        <div ref={heroImgRef} className="absolute inset-0 -z-10 will-change-transform motion-reduce:transform-none">
          <Image
            src="/saltaire-salts-mill-river-aire-dawn-dog-walker-about-hero.avif"
            alt="Warm dawn at Salts Mill on the River Aire in Saltaire — gentle mist, soft sunlight and a calm morning walk."
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyBmaWxsPSIjZWZlZWU5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4="
            className="object-cover"
          />
          {/* scrims for readability (meet contrast) */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_55%_35%,rgba(0,0,0,0.28),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-black/10" />
        </div>

        <Container>
          <div className="relative py-24 sm:py-28 lg:py-36">
            {/* Card */}
            <div
              className="mx-auto max-w-3xl rounded-2xl bg-black/60 p-6 sm:p-8 text-center text-white ring-1 ring-white/15 backdrop-blur-md shadow-[0_30px_120px_-25px_rgba(0,0,0,0.45)]"
              role="region"
              aria-label="About Saltaire Dogs + Pets"
            >
              <p className="mx-auto inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
                About
              </p>

              <h1
                className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Calm, trusted pet care in the heart of Saltaire
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
                Owner-led, DBS checked and insured. <strong>Walks</strong>, <strong>drop-ins</strong> and{' '}
                <strong>feeding</strong> for dogs, cats and small pets — with clear photo notes after every visit.
              </p>

              {/* Primary CTAs (consistent with site funnel) */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/447424208127?text=${encodeURIComponent(
                    "Hi! I'm in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I'm looking for [walks/drop-ins/feeding]."
                  )}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold"
                  style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
                >
                  <MessageCircle className="h-5 w-5" />
                  60-second WhatsApp quote
                </a>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/40 bg-white/95 px-6 text-base font-semibold text-[#131415] hover:bg-white"
                >
                  <Link href="tel:+447424208127" aria-label="Call Saltaire Dogs + Pets">
                    <Phone className="mr-2 h-5 w-5" />
                    Call us
                  </Link>
                </Button>
              </div>

              {/* Trust chips (within flow; not floating/blocked) */}
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                <li className="inline-flex items-center gap-2 text-white/90">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  <span>DBS checked & insured</span>
                </li>
                <li className="text-white/40">•</li>
                <li className="inline-flex items-center gap-2 text-white/90">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                  <span>Photo updates every visit</span>
                </li>
                <li className="text-white/40">•</li>
                <li className="inline-flex items-center gap-2 text-white/90">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  <span>Dogs, cats & small pets</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY / VALUE */}
      <section id="why" className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Friendly, local & easy to work with</h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              I’ve lived in Saltaire for <strong>15+ years</strong>. I know the towpaths, bridges and quiet loops by
              heart. That means calmer routes, safer crossings, and visits matched to your pet’s pace and temperament.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((b) => (
              <article
                key={b.label}
                data-reveal
                className="rounded-2xl border bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_18px_50px_-15px_rgba(0,0,0,0.15)]"
                style={{ borderColor: BRAND.hair, opacity: 1, transform: 'none' }}
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <b.icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{b.label}</h3>
                <p className="mt-1 text-sm text-[#7B828A]">{b.blurb}</p>
              </article>
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
            <p className="mt-3 text-[#7B828A]">Simple steps, clear confirmations, and steady scheduling.</p>
          </div>

          <ol className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Quick chat', copy: 'Tell me your routine, meds/notes, and any quirks.' },
              { title: 'Meet & greet', copy: 'We meet at home, confirm keys and preferences.' },
              { title: 'Two trial visits', copy: 'Short, calm trials with photo notes.' },
              { title: 'Regular slots', copy: 'We set your window and keep it consistent.' },
            ].map((s, idx) => (
              <li
                key={s.title}
                data-reveal
                className="rounded-2xl border bg-white p-6 text-left transition-all duration-700"
                style={{ borderColor: BRAND.hair, opacity: 1, transform: 'none' }}
              >
                <div
                  className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: BRAND.stone, color: BRAND.ink }}
                  aria-hidden="true"
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

      {/* OWNER STORY + MOSAIC */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div data-reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the owner — Giuseppe</h2>
              <div className="prose prose-slate mt-4 max-w-none text-[#7B828A]">
                <p>
                  Hi, I’m <strong>Giuseppe</strong>. I’ve lived in Saltaire for <strong>15+ years</strong> and know the
                  area like the back of my hand. Your animal’s safe with me — calm, steady and patient.
                </p>
                <p>
                  I run Saltaire Dogs + Pets as a calm, local service. I’m <strong>DBS checked</strong>, fully insured,
                  and I keep things simple: consistent routes, clear communication, and photo updates after every visit.
                </p>
                <p>
                  If I’m not the perfect fit for your pet, I’ll be honest and point you to someone who might be. The
                  goal is a routine that keeps your pet happy and you worry-free.
                </p>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-100">
                <HeartHandshake className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                <span className="text-sm text-emerald-800">References available on request</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MosaicImage
                src="/poodle-brown.webp"
                alt="Brown poodle on a calm Saltaire walk"
                ratio="3/4"
              />
              <MosaicImage
                src="/north-cliffe-dog-rainbow.webp"
                alt="Northcliffe walk after rain — rainbow over the trees"
                ratio="3/4"
              />
              <MosaicImage
                src="/poodle-walking-shipley-glenn.webp"
                alt="Poodle exploring a quiet Shipley Glen loop"
                ratio="16/9"
                span2
              />
            </div>
          </div>
        </Container>
      </section>

      <Separator className="bg-[#E6E3DA]" />

      {/* FINAL CTA (consistent language) */}
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
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Want a quick, friendly quote?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/85">
                Message your street and what you need — walks, drop-ins or feeding — and I’ll reply with times that fit.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/447424208127?text=${encodeURIComponent(
                    "Hi! I'm in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I'm looking for [walks/drop-ins/feeding]."
                  )}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-base font-semibold"
                  style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp quote
                </a>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/30 bg-white/10 px-7 text-base font-semibold text-white hover:bg-white/15"
                >
                  <Link href="tel:+447424208127" aria-label="Call Saltaire Dogs + Pets">
                    <Phone className="mr-2 h-4 w-4" />
                    07305&nbsp;367941
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-xs text-white/70">Paws wiped • Safety first • Honest updates</p>
            </div>

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

function MosaicImage({
  src,
  alt,
  ratio = '4/3',
  span2 = false,
}: {
  src: string
  alt: string
  ratio?: `${number}/${number}`
  span2?: boolean
}) {
  return (
    <figure
      data-reveal
      className={`relative overflow-hidden rounded-2xl ring-1 transition-all duration-700 ${span2 ? 'col-span-2' : ''}`}
      style={{ borderColor: BRAND.hair, aspectRatio: ratio }}
    >
      <Image src={src} alt={alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
    </figure>
  )
}
