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
    text: "Our collie is nervous around other dogs—the solo walks have been perfect. He's so much calmer now."
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
    text: "Professional service and genuinely cares about the dogs. You can tell it's not just a job to them."
  }
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex items-center gap-1 text-[#131415]/70" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'opacity-80' : 'opacity-25'}`}
          color="#131415"
        />
      ))}
    </div>
  )
}

function TCard({
  t,
  className = ''
}: {
  t: (typeof testimonials)[number]
  className?: string
}) {
  return (
    <Card className={`rounded-lg ring-1 ring-[#E6E3DA] border-0 bg-white shadow-none ${className}`}>
      <CardContent className="pt-8">
        <Stars rating={t.rating} />
        <blockquote className="mb-6 text-[15px] leading-relaxed text-[#131415]/85">“{t.text}”</blockquote>
        <div>
          <cite className="not-italic font-semibold text-[#131415]">{t.name}</cite>
          <p className="mt-1 text-xs text-[#7B828A]">{t.location}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <Section
      eyebrow="What our customers say"
      title="Trusted by dog lovers across Saltaire"
      description="Don't just take our word for it—hear from happy customers in your neighbourhood."
      className="bg-[#F7F7F6] py-12 lg:py-20"
    >
      {/* Motion version */}
      <Marquee
        durationMs={45000}
        mobileDurationMs={15000}
        className="mt-6 motion-reduce:hidden"
      >
        {testimonials.map((t, index) => (
          <TCard key={`t-a-${index}`} t={t} className="w-[360px] shrink-0 mr-6" />
        ))}
      </Marquee>

      {/* Static fallback for reduced motion */}
      <div className="mt-6 hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 motion-reduce:grid">
        {testimonials.slice(0, 3).map((t, i) => (
          <TCard key={`t-s-${i}`} t={t} />
        ))}
      </div>
    </Section>
  )
}
