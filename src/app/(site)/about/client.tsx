'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Heart,
  MapPin,
  Smile,
  Camera,
  Star,
  Mail,
  Check,
  Sparkles,
  Send,
} from 'lucide-react'

const BRAND = {
  gold: '#C89B3C',
  ink: '#131415',
  stone: '#EFEEE9',
  hair: '#E6E3DA',
}

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
  const [reviewForm, setReviewForm] = useState({
    name: '',
    location: '',
    rating: 5,
    review: '',
    email: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewForm),
      })

      if (!response.ok) throw new Error('Failed to submit review')

      setSubmitted(true)
      setReviewForm({ name: '', location: '', rating: 5, review: '', email: '' })
    } catch (err) {
      setError('Failed to submit review. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

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
      '@type': 'Organization',
      name: 'Saltaire Dogs + Pets',
      url: 'https://saltairedogs.uk',
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
              We've been caring for Saltaire pets for <strong>15+ years</strong>. We love what
              we do, keep prices fair, and care for <strong>everything from dogs to bearded dragons</strong>.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold"
                style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
              >
                <Mail className="h-5 w-5" />
                Get in touch
              </Link>

              <a
                href="mailto:saltairedogs@proton.me"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-base font-semibold text-white hover:bg-white/15"
              >
                <Mail className="h-5 w-5" />
                Email us
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
              Why locals choose us over other pet services
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              We're not a big company with franchises and shareholders. We're your neighbours who genuinely love animals and
              keep things simple and affordable.
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
                From £10 per visit. No franchise fees or big overheads — just a dedicated local team.
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
                Most places just do dogs and cats. We care for reptiles, birds, fish, chickens — the lot.
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
                We know every towpath, quiet route, and safe crossing. Been here longer than most services.
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
              <h3 className="text-lg font-semibold">We actually love this work</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Not a side hustle. This is what we do and what we enjoy. You'll feel the difference.
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
                <Check className="h-5 w-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-semibold">Fully insured</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Public liability coverage for your peace of mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: BRAND.stone }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-2">
            <div data-reveal className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our story</h2>
              <div className="mt-6 space-y-4 text-[#7B828A]">
                <p className="text-base leading-relaxed">
                  We've been in Saltaire for <strong className="text-[#131415]">over 15 years</strong>. Our team genuinely
                  loves animals and we wouldn't want to do anything else.
                </p>
                <p className="text-base leading-relaxed">
                  We keep prices low because there's no fancy office and no shareholders. Just a dedicated team doing
                  what we love, and passing the savings to you.
                </p>
                <p className="text-base leading-relaxed">
                  Most pet services stop at dogs and cats. We learned about reptiles, birds, and exotic pets because{' '}
                  <strong className="text-[#131415]">locals needed help</strong> and no one else was offering it. Now
                  we're probably the only service in Saltaire that'll happily check on your bearded dragon.
                </p>
                <p className="text-base leading-relaxed">
                  We know the towpaths, Roberts Park, Shipley Glen — all the quiet routes where nervous dogs feel
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
                  <span>Genuinely love animals</span>
                </div>
              </div>
            </div>

            <div data-reveal className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-[#E6E3DA]">
                <Image
                  src="/poodle-brown.webp"
                  alt="A happy dog in Saltaire"
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

      {/* WHAT WE CARE FOR */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We care for everything (seriously, everything)
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              While other services limit themselves to dogs and cats, we've built expertise across all common pets —
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
            Got something else? <strong>Just ask.</strong> If it's safe and we can do it properly, we'll help.
          </p>
        </div>
      </section>

      {/* REVIEW SUBMISSION */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: BRAND.stone }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Share your experience</h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              Used our services? We'd love to hear your feedback. Your review helps other Saltaire locals make the right choice.
            </p>
          </div>

          {submitted ? (
            <div
              className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-white p-8 text-center"
              style={{ borderColor: BRAND.hair }}
              data-reveal
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                <Check className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Thank you!</h3>
              <p className="mt-2 text-[#7B828A]">
                Your review has been submitted and will appear on the site once approved. We really appreciate you taking
                the time.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold underline underline-offset-4"
                style={{ color: BRAND.gold }}
              >
                Submit another review
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleReviewSubmit}
              className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-white p-8"
              style={{ borderColor: BRAND.hair }}
              data-reveal
            >
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                      style={{ borderColor: BRAND.hair }}
                      placeholder="e.g. Sarah M."
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={reviewForm.location}
                      onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                      style={{ borderColor: BRAND.hair }}
                      placeholder="e.g. Saltaire, Shipley"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold">
                    Email (optional, won't be published)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={reviewForm.email}
                    onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: BRAND.hair }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">Your rating *</label>
                  <div className="mt-2 flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating })}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            rating <= reviewForm.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="review" className="block text-sm font-semibold">
                    Your review *
                  </label>
                  <textarea
                    id="review"
                    required
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                    rows={4}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: BRAND.hair }}
                    placeholder="Tell others about your experience..."
                  />
                </div>

                {error && (
                  <div className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
                >
                  <Send className="h-5 w-5" />
                  {submitting ? 'Submitting...' : 'Submit review'}
                </button>

                <p className="text-center text-xs text-[#7B828A]">
                  Reviews are moderated and will appear on the site once approved.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CREDENTIALS (SIMPLIFIED) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The boring but important stuff</h2>
            <p className="mt-4 text-lg text-[#7B828A]">Safety and professionalism you can count on.</p>
          </div>

          <div
            className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-2xl border bg-white p-8 sm:grid-cols-2"
            style={{ borderColor: BRAND.hair }}
            data-reveal
          >
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Fully insured</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Public liability coverage for your peace of mind</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Secure key storage</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Tagged by code only, no addresses stored</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Photo updates</h3>
                <p className="mt-1 text-sm text-[#7B828A]">Clear communication after every visit</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="font-semibold">Local expertise</h3>
                <p className="mt-1 text-sm text-[#7B828A]">15+ years knowing Saltaire inside and out</p>
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
                Get in touch with what you need. We'll reply today with honest advice and clear pricing.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-base font-semibold"
                  style={{ backgroundColor: BRAND.gold, color: BRAND.ink }}
                >
                  <Mail className="h-5 w-5" />
                  Contact us
                </Link>

                <a
                  href="mailto:saltairedogs@proton.me"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 text-base font-semibold text-white hover:bg-white/15"
                >
                  <Mail className="h-5 w-5" />
                  Email us
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
