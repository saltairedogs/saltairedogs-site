'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Heart,
  MapPin,
  Smile,
  Camera,
  Star,
  MessageCircle,
  Phone,
  Check,
  Sparkles,
} from 'lucide-react'

const BRAND = {
  gold: '#C89B3C',
  ink: '#131415',
  stone: '#EFEEE9',
  hair: '#E6E3DA',
}

// Testimonials data
const testimonials = [
  {
    quote: "Giuseppe's brilliant with our nervous spaniel. He knows all the quiet routes and sends photos every time. Fair prices too.",
    author: "Sarah M.",
    location: "Victoria Road, Saltaire",
  },
  {
    quote: "Only person we trust with our bearded dragon! Giuseppe actually knows what he's doing with reptiles. Can't recommend enough.",
    author: "Tom & Lisa",
    location: "Shipley",
  },
  {
    quote: "Been using Giuseppe for 3 years. Always reliable, genuinely cares about the animals, and cheapest rates in the area.",
    author: "Rachel P.",
    location: "Saltaire",
  },
]

const animalTypes = [
  { icon: '🐕', label: 'Dogs', detail: 'All sizes, nervous/reactive welcome' },
  { icon: '🐈', label: 'Cats', detail: 'Perfect for shy cats' },
  { icon: '🐰', label: 'Rabbits', detail: 'Indoor & outdoor setups' },
  { icon: '🦎', label: 'Reptiles', detail: 'Bearded dragons, geckos, snakes' },
  { icon: '🦜', label: 'Birds', detail: 'Parrots, cockatiels' },
  { icon: '🐟', label: 'Fish', detail: 'Tanks & ponds' },
  { icon: '🐓', label: 'Chickens', detail: 'Backyard flocks' },
  { icon: '🐹', label: 'Small pets', detail: 'Guinea pigs, hamsters, ferrets' },
]

export default function AboutClient() {
  // Soft reveal on scroll
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
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
      el.style.transform = 'translateY(12px)'
      io.observe(el)
    })

    return () => io.disconnect()
  }, [])

  // Soft parallax
  const heroImgRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = heroImgRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.12, 48)
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About — Saltaire Dogs + Pets',
    url: 'https://saltairedogs.uk/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Saltaire Dogs + Pets',
      url: 'https://saltairedogs.uk',
      areaServed: ['Saltaire', 'Shipley', 'Baildon'],
      image: 'https://saltairedogs.uk/saltaire-dogs-logo-official.webp',
      priceRange: '£10-£15',
    },
    about: {
      '@type': 'Person',
      name: 'Giuseppe',
      jobTitle: 'Owner',
      worksFor: { '@type': 'Organization', name: 'Saltaire Dogs + Pets' },
    },
  }

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          ref={heroImgRef}
          className="absolute inset-0 -z-10 will-change-transform motion-reduce:transform-none"
        >
          <Image
            src="/saltaire-salts-mill-river-aire-dawn-dog-walker-about-hero.avif"
            alt="Warm dawn at Salts Mill on the River Aire in Saltaire"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_55%_35%,rgba(0,0,0,0.32),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur-md">
            <p className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              About
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Your local pet expert in Saltaire
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/90">
              I'm <strong>Giuseppe</strong>. Been caring for Saltaire pets for <strong>15+ years</strong>. I love what
              I do, keep prices fair, and care for <strong>everything from dogs to bearded dragons</strong>.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/447424208127?text=${encodeURIComponent(
                  "Hi Giuseppe! I'm in Saltaire and need help with my pet. Can we chat?"
                )}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold"
                style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
              >
                <MessageCircle className="h-5 w-5" />
                Message Giuseppe
              </a>

              <a
                href="tel:+447424208127"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                Call 07424 208127
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                15+ years in Saltaire
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-2">
                <Smile className="h-4 w-4" />
                From £10 per visit
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                All animals welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why locals choose me over other pet services
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              I'm not a big company with franchises and shareholders. I'm your neighbor who genuinely loves animals and
              keeps things simple and affordable.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div
                className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1"
                style={{ backgroundColor: '#C89B3C20', color: '#C89B3C', borderColor: '#C89B3C40' }}
              >
                <Smile className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Cheapest in Saltaire</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                From £10 per visit. No franchise fees or big overheads — just me doing what I love.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-100">
                <Sparkles className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Only service covering exotic pets</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Most places just do dogs and cats. I care for reptiles, birds, fish, chickens — the lot.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                <MapPin className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold">15+ years local knowledge</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                I know every towpath, quiet route, and safe crossing. Been here longer than most services.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                <Heart className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold">I actually love this work</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Not a side hustle. This is what I do and what I enjoy. You'll feel the difference.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100">
                <Camera className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold">Photo updates every visit</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Quick note + photo after every single visit. No wondering if everything's okay.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: BRAND.hair }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-rose-100">
                <ShieldCheck className="h-5 w-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-semibold">DBS checked & insured</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Enhanced DBS, public liability, canine first-aid. All the important boring stuff covered.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* GIUSEPPE'S STORY */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: BRAND.stone }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-2">
            <div data-reveal className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Giuseppe</h2>
              <div className="mt-6 space-y-4 text-[#7B828A]">
                <p className="text-base leading-relaxed">
                  I've lived in Saltaire for <strong className="text-[#131415]">over 15 years</strong>. I started this
                  because I genuinely love animals and wanted to do something I actually enjoy every day.
                </p>
                <p className="text-base leading-relaxed">
                  I keep prices low because I have no fancy office, no employees to pay, no shareholders. Just me, doing
                  what I love, and passing the savings to you.
                </p>
                <p className="text-base leading-relaxed">
                  Most pet services stop at dogs and cats. I learned about reptiles, birds, and exotic pets because{' '}
                  <strong className="text-[#131415]">locals needed help</strong> and no one else was offering it. Now
                  I'm probably the only person in Saltaire who'll happily check on your bearded dragon.
                </p>
                <p className="text-base leading-relaxed">
                  I know the towpaths, Roberts Park, Shipley Glen — all the quiet routes where nervous dogs feel
                  comfortable. That knowledge comes from <strong className="text-[#131415]">being here</strong>, not
                  from a training manual.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-[#E6E3DA]">
                  <Star className="h-4 w-4" style={{ color: BRAND.gold }} />
                  <span>15+ years in Saltaire</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-[#E6E3DA]">
                  <Heart className="h-4 w-4 text-rose-600" />
                  <span>Genuinely loves animals</span>
                </div>
              </div>
            </div>

            <div data-reveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[#E6E3DA]">
                <Image
                  src="/poodle-brown.webp"
                  alt="Giuseppe with a happy dog in Saltaire"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I CARE FOR */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              I care for everything (seriously, everything)
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              While other services limit themselves to dogs and cats, I've built expertise across all common pets —
              plus the unusual ones.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {animalTypes.map((animal) => (
              <div
                key={animal.label}
                className="rounded-2xl border bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: BRAND.hair }}
              >
                <div className="text-4xl">{animal.icon}</div>
                <h3 className="mt-3 text-base font-semibold">{animal.label}</h3>
                <p className="mt-1 text-xs text-[#7B828A]">{animal.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#7B828A]" data-reveal>
            Got something else? <strong>Just ask.</strong> If it's safe and I can do it properly, I'll help.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: BRAND.stone }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What locals say</h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              Don't just take my word for it. Here's what Saltaire neighbors think.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                data-reveal
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: BRAND.hair }}
              >
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#7B828A]">"{testimonial.quote}"</p>
                <div className="mt-4 border-t pt-4" style={{ borderColor: BRAND.hair }}>
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-[#7B828A]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS (SIMPLIFIED) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The boring but important stuff</h2>
            <p className="mt-4 text-lg text-[#7B828A]">All the credentials and safety bits you'd expect.</p>
          </div>

          <div
            className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-2xl border bg-white p-8 sm:grid-cols-2"
            style={{ borderColor: BRAND.hair }}
            data-reveal
          >
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Enhanced DBS checked</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Certificate on file, dates available on request</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Fully insured</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Public liability coverage for peace of mind</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Canine first-aid trained</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Know what to do in emergencies</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Secure key storage</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Tagged by code only, no addresses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white lg:px-16"
            style={{
              background:
                'radial-gradient(1100px 550px at 15% 15%, rgba(200,155,60,0.45), transparent 60%), linear-gradient(135deg,#131415 0%,#1C1E20 100%)',
            }}
          >
            <div className="relative mx-auto max-w-3xl" data-reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to chat?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Message me with what you need. I'll reply today with honest advice and clear pricing.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/447424208127?text=${encodeURIComponent(
                    "Hi Giuseppe! I'm in Saltaire and need help with my pet. Can we chat?"
                  )}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-base font-semibold"
                  style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Giuseppe
                </a>

                <a
                  href="tel:+447424208127"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 text-base font-semibold text-white hover:bg-white/15"
                >
                  <Phone className="h-5 w-5" />
                  Call 07424 208127
                </a>
              </div>

              <p className="mt-6 text-xs text-white/70">
                15+ years in Saltaire • From £10 per visit • All animals welcome
              </p>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  )
}
