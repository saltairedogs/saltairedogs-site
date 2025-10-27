'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { Container } from './container'
import { Badge } from './badge'
import { formatPrice } from '../lib/utils'
import { PRICING } from '../lib/pricing'

const plans = [
  {
    name: '30-minute solo walk',
    price: PRICING.WALK_30,
    duration: '30 mins',
    description: 'Quick exercise & toilet break, one-to-one attention.',
    features: ['Solo only', 'GPS tracking & photos/videos', 'Paws wiped', 'Fresh water topped up'],
    popular: false,
  },
  {
    name: '60-minute solo walk',
    price: PRICING.WALK_60,
    duration: '60 mins',
    description: 'Our most popular option for proper exercise and sniffs.',
    features: ['Solo only', 'Extended outing', 'GPS tracking & photos/videos', 'Paws wiped & dried', 'Fresh water topped up'],
    popular: true,
  },
  {
    name: 'Puppy drop-in (15–20m)',
    price: PRICING.PUPPY_VISIT,
    duration: 'visit',
    description: 'Toilet break, play, feed/water as instructed.',
    features: ['Gentle visit', 'Basic cues (sit/wait)', 'Photo/video update'],
    popular: false,
  },
  {
    name: '5× 60-min bundle',
    price: PRICING.BUNDLE5_60,
    duration: '5 walks',
    description: 'Save 10% vs single walks.',
    features: ['Solo only', 'Use Mon–Sat', 'GPS & photos/videos after each'],
    popular: false,
  },
  {
    name: '10× 60-min bundle',
    price: PRICING.BUNDLE10_60,
    duration: '10 walks',
    description: 'Save 15% vs single walks.',
    features: ['Solo only', 'Use Mon–Sat', 'GPS & photos/videos after each'],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section id="pricing" className="py-12 lg:py-20 bg-[#F7F7F6]">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center text-[#131415]">
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-base md:text-lg text-[#7B828A]">
            All walks are solo. <strong>Second dog (same household)</strong> by request only (≈15% off first-dog rate).
          </p>
          <p className="mt-1 text-sm text-[#7B828A]">We keep limited daily slots to give every dog proper attention.</p>
        </div>

        {/* Menu-style list */}
        <ul className="mx-auto max-w-4xl divide-y divide-[#E6E3DA] rounded-lg ring-1 ring-[#E6E3DA] bg-[#EFEEE9]/50">
          {plans.map((plan) => (
            <li key={plan.name} className="p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Left: name + desc + features */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-[#131415]">{plan.name}</h3>
                    {plan.popular && (
                      <Badge className="bg-[#C89B3C]/15 text-[#131415] border border-[#C89B3C]/30">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-[#7B828A]">{plan.description}</p>

                  {/* Features: dot-separated, compact */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#7B828A]">
                    {plan.features.map((f, i) => (
                      <span key={f} className="inline-flex items-center">
                        {i > 0 && <span className="mx-2 opacity-40">•</span>}
                        <span>{f.trim()}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: price / duration + CTA */}
                <div className="shrink-0 text-right md:text-right">
                  <div className="flex items-baseline justify-between md:justify-end gap-3">
                    <span className="text-2xl md:text-3xl font-semibold text-[#131415]">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-sm text-[#7B828A]">/ {plan.duration}</span>
                  </div>

                  <div className="mt-3">
                    {plan.popular ? (
                      <Button
                        asChild
                        className="rounded-lg bg-[#C89B3C] text-[#131415] hover:opacity-90 shadow-none"
                      >
                        <Link href="/pricing">Book Now</Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-lg border-[#E6E3DA] text-[#131415] bg-white hover:bg-[#EFEEE9]/60 shadow-none"
                      >
                        <Link href="/pricing">Book Now</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-[#7B828A]">
            Prefer custom or overnight care? We tailor packages to your situation.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-[#E6E3DA] text-[#131415] bg-white hover:bg-[#EFEEE9]/60 shadow-none"
          >
            <Link href="/pricing">View All Pricing</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
