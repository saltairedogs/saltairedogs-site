import { Section } from './section'
import { HeartHandshake, Camera, MapPin, Clock } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'Short, steady walks',
    description:
      'Calm, unrushed outings matched to your pet’s pace. Gentle routes, plenty of sniffing, home safe and settled.',
  },
  {
    icon: Camera,
    title: 'Clear photo notes',
    description:
      'A quick photo and a couple of lines after each visit, so you always know how it went.',
  },
  {
    icon: MapPin,
    title: 'Local routes we know',
    description:
      'Saltaire paths, towpaths and quiet loops we’ve used for years. We avoid pinch points and busy spots.',
  },
  {
    icon: Clock,
    title: 'Simple, reliable routine',
    description:
      'Light scheduling that fits your day. Tell us your window and we’ll keep it consistent.',
  },
]

export function Features() {
  return (
    <Section
      eyebrow="A calm, local service"
      title="What it feels like to work with us"
      description="Nothing fancy. Just steady care, clear updates and the same friendly face at your door."
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
