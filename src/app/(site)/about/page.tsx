'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ShieldCheck, 
  FileBadge2, 
  MapPin, 
  Users, 
  Camera, 
  Clock,
  Star
} from 'lucide-react'

import { Button } from '../../../components/ui/button'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { Separator } from '../../../components/ui/separator'
import { Container } from '../../../components/container'

const trustBadges = [
  {
    icon: ShieldCheck,
    label: 'DBS Checked',
    color: 'text-green-600'
  },
  {
    icon: FileBadge2,
    label: 'Friendly & Positive',
    color: 'text-blue-600'
  },
  {
    icon: MapPin,
    label: 'GPS Updates',
    color: 'text-purple-600'
  },
  {
    icon: Users,
    label: 'Small Groups',
    color: 'text-orange-600'
  },
  {
    icon: Camera,
    label: 'Photo Updates',
    color: 'text-pink-600'
  },
  {
    icon: Clock,
    label: 'Reliable Timing',
    color: 'text-emerald-600'
  }
]

const testimonials = [
  {
    name: 'Hannah',
    area: 'Saltaire',
    rating: 5,
    quote: 'Reliable and always on time. The photo updates are the best part!',
  },
  {
    name: 'Mo',
    area: 'Shipley',
    rating: 5,
    quote: 'Our collie is nervous—small groups have been perfect.',
  },
  {
    name: 'James',
    area: 'Baildon',
    rating: 5,
    quote: 'Booked an overnight sit—house was tidy, dog was happy.',
  }
]

export default function AboutPage() {
  return (
    <main className="section-stone">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl leading-tight" style={{ color: 'var(--text)' }}>
                Local, trusted dog care in the heart of Saltaire
              </h1>
              
              <p className="mt-6 text-lg lg:text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                We're a small, local dog walking and pet sitting service based in Saltaire. 
                Born and raised here, we know every safe crossing, quiet path, and dog-friendly spot.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-12 px-8 text-base font-semibold text-white"
                  style={{ backgroundColor: 'var(--brand)' }}
                >
                  <Link href="/contact">Book Free Meet & Greet</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8 text-base font-semibold"
                  style={{ 
                    borderColor: 'var(--hairline)',
                    backgroundColor: 'var(--surface)',
                    color: 'var(--text)'
                  }}
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div 
                className="rounded-3xl p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <Image
                  src="/saltaire-dog-river.png"
                  alt="Dog walker with happy dogs by Saltaire canal"
                  width={600}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Separator style={{ borderColor: 'var(--hairline-stone)' }} />

      {/* Trust Badges */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4" style={{ color: 'var(--text)' }}>
              Why dog owners trust us
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Professional credentials and local expertise you can count on
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trustBadges.map((badge, index) => (
              <div key={badge.label} className="text-center">
                <div 
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl shadow-md"
                  style={{ 
                    backgroundColor: 'var(--bg-tint)',
                    border: '1px solid var(--hairline-stone)'
                  }}
                >
                  <badge.icon className={`h-8 w-8 ${badge.color}`} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>
                  {badge.label}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Separator style={{ borderColor: 'var(--hairline-stone)' }} />

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-8" style={{ color: 'var(--text)' }}>
              Our story
            </h2>
            
            <div className="prose prose-lg mx-auto" style={{ color: 'var(--text)' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                Growing up in Saltaire, we've walked these streets and canal paths for years. 
                We know which crossings are safest, where the quietest spots are for nervous dogs, 
                and the best times to avoid crowds.
              </p>
              
              <p style={{ color: 'var(--text-muted)' }}>
                What started as helping neighbors with their dogs has grown into a trusted local service. 
                We keep groups small (max 2 dogs), send GPS and photo/video updates, and treat every dog 
                like our own family.
              </p>
              
              <p style={{ color: 'var(--text-muted)' }}>
                DBS checked and only 5 minutes away – with a friendly, positive service to give you 
                peace of mind and your dog the exercise and attention they deserve.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                asChild 
                size="lg"
                className="text-white font-semibold"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                <Link href="/contact">Get to know us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Separator style={{ borderColor: 'var(--hairline-stone)' }} />

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4" style={{ color: 'var(--text)' }}>
              What our customers say
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Hear from happy dog owners across Saltaire, Shipley & Baildon
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote 
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: 'var(--text)' }}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <cite 
                      className="font-semibold not-italic"
                      style={{ color: 'var(--text)' }}
                    >
                      {testimonial.name}
                    </cite>
                    <p 
                      className="text-xs mt-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {testimonial.area}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <Container>
          <div 
            className="rounded-3xl px-8 py-12 lg:px-16 lg:py-20 text-center text-white shadow-xl"
            style={{ backgroundColor: 'var(--brand)' }}
          >
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-6">
              Ready to meet us?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book a free meet & greet to discuss your dog's needs and see if we're the right fit.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="h-12 px-8 text-base font-semibold bg-white hover:bg-gray-50"
              style={{ color: 'var(--brand)' }}
            >
              <Link href="/contact">Book Free Meet & Greet</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  )
}