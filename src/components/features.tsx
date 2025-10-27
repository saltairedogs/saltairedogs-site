import { Section } from './section'
import { HeartHandshake, Camera, MapPin, Clock } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'At-home care (cats, small pets & dogs)',
    description:
      'Drop-ins for feeding and water, litter/cage refresh, a little play and settling time. Medication given if you provide it and leave notes.',
  },
  {
    icon: MapPin,
    title: 'Local cover you can count on',
    description:
      'Saltaire & Shipley only—nearby, predictable, and quick to reach you. We know the buildings, the paths and the quiet corners.',
  },
  {
    icon: Camera,
    title: 'Clear photo notes, every visit',
    description:
      'A quick photo and a couple of lines after each visit or walk, so you always know how it went (food eaten, loo, mood, anything odd).',
  },
  {
    icon: Clock,
    title: 'Simple, reliable routine',
    description:
      'You pick a window—morning, midday or late afternoon—and we keep it consistent. Backup cover arranged for holidays/illness.',
  },
]

export function Features() {
  return (
    <Section
      eyebrow="A calm, local service"
      title="What it feels like to work with us"
      description="Nothing fancy. Just steady care—home visits, feeding and short, steady walks—with clear updates and the same friendly face at your door."
      className="bg-[#F7F7F6] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <ul role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className="group rounded-lg ring-1 ring-[#E6E3DA] bg-white p-6 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon chip */}
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 shrink-0"
                    style={{ backgroundColor: '#EFEEE9', borderColor: '#E6E3DA' }}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" color="#131415" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[17px] font-semibold text-[#131415]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#7B828A]">
                      {f.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
