import { Section } from './section'
import { Card, CardContent } from './ui/card'
import { Star } from 'lucide-react'
import { Marquee } from './ui/marquee'

const testimonials = [
  {
    name: 'Hannah Mitchell',
    location: 'Victoria Road, Saltaire',
    rating: 5,
    text: 'Reliable and always on time. The photo updates are the best part! Love seeing Bella having such a great time.'
  },
  {
    name: 'Mo Rahman',
    location: 'Shipley',
    rating: 5,
    text: 'Our collie is nervous around other dogs—the solo walks have been perfect. He\'s so much calmer now.'
  },
  {
    name: 'James Thompson',
    location: 'Baildon',
    rating: 5,
    text: 'Booked an overnight sit when we went away. House was tidy, dog was happy, and we had peace of mind.'
  },
  {
    name: 'Sarah Chen',
    location: 'Roberts Park area',
    rating: 5,
    text: 'Great with our puppy. The drop-in visits have helped so much with house training and socialisation.'
  },
  {
    name: 'David Wilson',
    location: 'Saltaire',
    rating: 5,
    text: 'Professional service and genuinely cares about the dogs. You can tell it\'s not just a job to them.'
  }
]

export function Testimonials() {
  return (
    <Section
      eyebrow="What our customers say"
      title="Trusted by dog lovers across Saltaire"
      description="Don't just take our word for it—hear from happy customers in your neighbourhood."
      className="section-park"
    >
  <Marquee durationMs={40000} mobileDurationMs={5000} className="mt-6">
        {testimonials.map((t, index) => (
          <Card key={`t-a-${index}`} className="w-[360px] shrink-0 mr-6">
            <CardContent className="pt-8">
              <div className="mb-4 flex items-center space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                “{t.text}”
              </blockquote>
              <div>
                <cite className="not-italic font-semibold" style={{ color: 'var(--text)' }}>
                  {t.name}
                </cite>
                <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                  {t.location}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </Section>
  )
}