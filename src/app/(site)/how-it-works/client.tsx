'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Heart, MapPin, Smile, Camera, MessageCircle, Phone } from 'lucide-react'

export default function HowItWorksClient() {
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Pet Care — How It Works',
        serviceType: 'Dog Walking / Cat Sitting / Small Pets & Exotics',
        areaServed: ['Saltaire', 'Shipley', 'Baildon', 'BD18'],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Saltaire Dogs + Pets',
          url: 'https://www.saltairedogs.uk',
          telephone: '+44 7424 208127',
        },
        priceRange: '£10-£15',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do we start?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Message on WhatsApp or give us a call. We'll chat about what you need, arrange a friendly meet & greet, and set up your routine.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you send updates?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes! After every visit you get a quick photo and note so you know everyone's happy.",
            },
          },
          {
            '@type': 'Question',
            name: 'How much does it cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fair local rates from £10 per visit. We keep prices low because we love what we do and have no big overheads.',
            },
          },
        ],
      },
    ],
  }

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/poodle-walking-shipley-glenn.webp"
            alt="Happy poodle enjoying a relaxed walk near Shipley Glen"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_45%_35%,rgba(0,0,0,0.32),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur-md">
            <p className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              How it works
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Friendly, local pet care that just works
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-white/90">
              I'm <strong>Giuseppe</strong>, your local pet carer in Saltaire. Been here <strong>15+ years</strong>,
              love what I do, and keep things simple: message me, we meet, you relax.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/447424208127?text=${encodeURIComponent(
                  "Hi Giuseppe! I'm in Saltaire and need help with [dog/cat/small pet]. Can you help?"
                )}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold"
                style={{ backgroundColor: '#C89B3C', color: '#131415' }}
              >
                <MessageCircle className="h-5 w-5" />
                Message on WhatsApp
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
                <Heart className="h-4 w-4" />
                Fair prices from £10
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Photo updates every visit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why locals choose Saltaire Dogs + Pets
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              I keep prices fair, know every towpath and quiet route, and care for{' '}
              <strong>everything from dogs to bearded dragons</strong>. No big company overheads — just me doing what I love.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                <Heart className="h-5 w-5 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold">I actually enjoy this</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Not a side hustle. This is what I love doing. You'll feel the difference.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                <MapPin className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold">15+ years local knowledge</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                I know the towpaths, Roberts Park, Shipley Glen — calmer routes, safer crossings.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div
                className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1"
                style={{ backgroundColor: '#C89B3C20', color: '#C89B3C', borderColor: '#C89B3C40' }}
              >
                <Smile className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Cheapest around</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                From £10 per visit. No fancy office, no shareholders — just fair local rates.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-100">
                <Camera className="h-5 w-5 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold">Photo updates</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                After every single visit. Quick note + photo so you know they're happy.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                <Check className="h-5 w-5 text-orange-700" />
              </div>
              <h3 className="text-lg font-semibold">All animals welcome</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Dogs, cats, rabbits, reptiles, birds, fish, chickens — I've got you covered.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{ borderColor: '#E6E3DA' }}
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-rose-100">
                <Heart className="h-5 w-5 text-rose-700" />
              </div>
              <h3 className="text-lg font-semibold">Fully insured</h3>
              <p className="mt-2 text-sm text-[#7B828A]">
                Public liability coverage for your peace of mind.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SIMPLE STEPS */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#EFEEE9' }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-2xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Three simple steps</h2>
            <p className="mt-3 text-lg text-[#7B828A]">
              No forms, no fuss. Just a friendly chat, a quick meet, and we're sorted.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-3">
            <div data-reveal className="rounded-2xl border bg-white p-6" style={{ borderColor: '#E6E3DA' }}>
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: '#C89B3C' }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold">Say hello</h3>
              <p className="mt-2 text-[#7B828A]">
                WhatsApp or call. Tell me what you need: "Giuseppe, I've got a nervous spaniel, need weekday morning
                walks." Done.
              </p>
              <p className="mt-3 text-sm text-[#7B828A]">
                I'll reply same day with a yes/no and rough pricing. No waffle.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border bg-white p-6" style={{ borderColor: '#E6E3DA' }}>
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: '#C89B3C' }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold">Meet & greet</h3>
              <p className="mt-2 text-[#7B828A]">
                I pop round. Meet your pet, see your setup, note any quirks. Takes 15 minutes.
              </p>
              <p className="mt-3 text-sm text-[#7B828A]">
                If it feels right for both of us, we agree a start date. No pressure.
              </p>
            </div>

            <div data-reveal className="rounded-2xl border bg-white p-6" style={{ borderColor: '#E6E3DA' }}>
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: '#C89B3C' }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold">You relax</h3>
              <p className="mt-2 text-[#7B828A]">
                I follow your routine exactly. After every visit: photo + quick note. Simple.
              </p>
              <p className="mt-3 text-sm text-[#7B828A]">
                Need to tweak something? Just message. I keep things flexible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I do (pretty much everything)
            </h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              Most pet services just do dogs and cats. I cover the lot — and I actually know what I'm doing.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div
              className="grid gap-4 rounded-2xl border bg-white p-6 sm:grid-cols-2 sm:p-8"
              style={{ borderColor: '#E6E3DA' }}
              data-reveal
            >
              <div>
                <h3 className="text-lg font-semibold" style={{ color: '#C89B3C' }}>
                  Dogs
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#7B828A]">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Walks (short 20-min or longer 45-min+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Home visits (feed, water, garden time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Nervous/reactive dogs welcome</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold" style={{ color: '#C89B3C' }}>
                  Cats
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#7B828A]">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Feed, water, litter scoop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Medication if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Perfect for shy cats</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold" style={{ color: '#C89B3C' }}>
                  Small pets & birds
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#7B828A]">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Rabbits (hay, pellets, litter, cuddles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Parrots, cockatiels (feed, water, chat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Chickens (feed, water, egg collection)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold" style={{ color: '#C89B3C' }}>
                  Reptiles & fish
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[#7B828A]">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Bearded dragons, geckos (feeding checks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Snakes (to your exact routine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Fish tanks (feeding, quick checks)</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-[#7B828A]" data-reveal>
              Got something else? Guinea pigs? Ferrets? Hamsters? <strong>Just ask.</strong> If it's safe and makes
              sense, I'll help.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#EFEEE9' }}>
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center" data-reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fair local rates</h2>
            <p className="mt-4 text-lg text-[#7B828A]">
              I keep prices low because I have no big overheads and I love what I do. You get quality care without the
              fancy price tag.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E6E3DA' }}>
              <div className="text-xs font-semibold text-[#7B828A]">From</div>
              <div className="mt-1 text-3xl font-extrabold" style={{ color: '#C89B3C' }}>
                £10
              </div>
              <div className="mt-2 text-base font-semibold">Short dog walk</div>
              <p className="mt-2 text-sm text-[#7B828A]">20-30 min local loop. Perfect for routine maintenance.</p>
            </div>

            <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E6E3DA' }}>
              <div className="text-xs font-semibold text-[#7B828A]">From</div>
              <div className="mt-1 text-3xl font-extrabold" style={{ color: '#C89B3C' }}>
                £15
              </div>
              <div className="mt-2 text-base font-semibold">Longer dog walk</div>
              <p className="mt-2 text-sm text-[#7B828A]">45+ min. More sniffing, training, distance.</p>
            </div>

            <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E6E3DA' }}>
              <div className="text-xs font-semibold text-[#7B828A]">From</div>
              <div className="mt-1 text-3xl font-extrabold" style={{ color: '#C89B3C' }}>
                £10
              </div>
              <div className="mt-2 text-base font-semibold">Cat / home visit</div>
              <p className="mt-2 text-sm text-[#7B828A]">Feed, water, litter, calm check-in.</p>
            </div>

            <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E6E3DA' }}>
              <div className="text-xs font-semibold text-[#7B828A]">From</div>
              <div className="mt-1 text-3xl font-extrabold" style={{ color: '#C89B3C' }}>
                £10
              </div>
              <div className="mt-2 text-base font-semibold">Small pets / exotics</div>
              <p className="mt-2 text-sm text-[#7B828A]">Rabbits, birds, reptiles, fish.</p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl text-center" data-reveal>
            <p className="text-sm text-[#7B828A]">
              <strong>Multiple pets?</strong> Typically +£3 each. <strong>Medication?</strong> +£2 if needed.{' '}
              <strong>Weekends/holidays?</strong> Small supplement applies.
            </p>
            <Link
              href="/pricing"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              style={{ color: '#C89B3C' }}
            >
              See full pricing guide →
            </Link>
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
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to get started?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Message me now with what you need. I'll reply today with a yes/no and clear pricing. No forms, no
                waiting around.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/447424208127?text=${encodeURIComponent(
                    "Hi Giuseppe! I'm in Saltaire and need help with [dog/cat/small pet]. Can you help?"
                  )}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-base font-semibold"
                  style={{ backgroundColor: '#C89B3C', color: '#131415' }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp me now
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
                15+ years in Saltaire • Fair prices from £10 • Photo updates every visit
              </p>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  )
}
