import { Section } from './section'
import { HeartHandshake, Camera, MapPin, Clock } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'At-home care (cats, small pets & dogs)',
    description:
      'Drop-ins for feeding and water, litter/cage refresh, a little play and settling time. Medication given if you provide it and leave notes.',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: MapPin,
    title: 'Local cover you can count on',
    description:
      'Saltaire & Shipley only—nearby, predictable, and quick to reach you. We know the buildings, the paths and the quiet corners.',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Camera,
    title: 'Clear photo notes, every visit',
    description:
      'A quick photo and a couple of lines after each visit or walk, so you always know how it went (food eaten, loo, mood, anything odd).',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Clock,
    title: 'Simple, reliable routine',
    description:
      'You pick a window—morning, midday or late afternoon—and we keep it consistent. Backup cover arranged for holidays/illness.',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
  },
]

export function Features() {
  return (
    <Section
      eyebrow="A calm, local service"
      title="What it feels like to work with us"
      description="Nothing fancy. Just steady care—home visits, feeding and short, steady walks—with clear updates and the same friendly face at your door."
      className="bg-gray-50 py-12 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <ul role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className="group rounded-2xl ring-1 ring-gray-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
              >
                <div className="flex items-start gap-4">
                  {/* Icon chip */}
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shrink-0 ${f.bg} shadow-sm`}
                    aria-hidden="true"
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${f.color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-gray-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
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
