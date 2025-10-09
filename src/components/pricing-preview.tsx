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
    features: ['Solo only', 'Extended outing', 'GPS tracking & photos/videos  ', 'Paws wiped & dried', 'Fresh water topped up'],
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
    price: PRICING.BUNDLE5_60, // ~10% off
    duration: '5 walks',
    description: 'Save 10% vs single walks.',
    features: ['Solo only', 'Use Mon–Sat', 'GPS & photos/videos after each'],
    popular: false,
  },
  {
    name: '10× 60-min bundle',
    price: PRICING.BUNDLE10_60, // ~15% off
    duration: '10 walks',
    description: 'Save 15% vs single walks.',
    features: ['Solo only', 'Use Mon–Sat', 'GPS & photos/videos after each'],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-fluid-3xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="text-fluid-lg text-muted-foreground">
            All walks are solo. <strong>Second dog (same household)</strong> by request only (≈15% off first-dog rate).
          </p>
          <p className="mt-1 text-sm text-muted-foreground">We keep limited daily slots to give every dog proper attention.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${plan.popular ? 'border-primary bg-primary/5 shadow-lg' : 'border-border bg-card'}`}
            >
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{formatPrice(plan.price)}</span>
                  <span className="ml-2 text-sm text-muted-foreground">/ {plan.duration}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={plan.popular ? 'default' : 'outline'} className="w-full">
                <Link href="/pricing">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-muted-foreground">Prefer custom or overnight care? We tailor packages to your situation.</p>
          <Button asChild variant="outline">
            <Link href="/pricing">View All Pricing</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
