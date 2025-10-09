import Link from 'next/link'
import { Section } from './section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './badge'
import { formatPrice } from '../lib/utils'
import { PRICING } from '../lib/pricing'

const pricingPlans = [
  {
    name: '30-min walk',
  price: PRICING.WALK_30,
    description: 'Perfect for senior dogs or quick toilet breaks',
    features: [
      'GPS tracking',
      'Photo updates',
      'Paw wipe on return',
      'Water topped up'
    ],
    popular: false
  },
  {
    name: '60-min walk',
  price: PRICING.WALK_60,
    description: 'Our most popular service for active dogs',
    features: [
      'Full hour adventure',
      'GPS tracking',
      'Multiple photo updates',
      'Paw wipe on return',
      'Water topped up',
      'Play time included'
    ],
    popular: true
  },
  {
    name: 'Puppy drop-in',
  price: PRICING.PUPPY_VISIT,
    description: '15-20 minute visits for young dogs',
    features: [
      'Toilet break',
      'Basic training',
      'Play & socialisation',
      'Food if needed'
    ],
    popular: false
  },
  {
    name: 'Overnight sitting',
  price: 45,
    description: 'Your dog stays comfortable at home',
    features: [
      'Overnight care',
      'Morning walk',
      'Regular updates',
      'House security',
      'Plant watering'
    ],
    popular: false
  }
]

export function Pricing() {
  return (
    <Section
      eyebrow="Transparent pricing"
      title="Simple, fair prices"
      description="No hidden fees or complicated packages. Just honest pricing for quality care."
      className="bg-muted/30"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{formatPrice(plan.price)}</span>
                <span className="text-muted-foreground">/visit</span>
              </div>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">Book Free Meet & Greet</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
  <p>All walks are solo • Second dog (same household) ≈15% off first-dog rate • 5× 60-min {formatPrice(PRICING.BUNDLE5_60)} (≈10% off)</p>
      </div>
    </Section>
  )
}