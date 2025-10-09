import { Section } from './section'
import { User, Camera, Clock } from 'lucide-react'

const features = [
  {
    icon: User,
    title: 'Solo, one-dog walks',
    description: 'Calm, focused outings tailored to your dog’s pace, route and routine. Second dog (same household) by request only.'
  },
  {
    icon: Camera,
    title: 'Live updates',
    description: 'GPS tracking and photo updates after every walk so you always know how your dog did.'
  },
  {
    icon: Clock,
    title: 'Limited slots, flexible plan',
    description: 'We keep our schedule intentionally small. Tell us your routine—if it fits, we’ll make it work.'
  }
]

export function Features() {
  return (
    <Section
      eyebrow="Why choose us"
      title="Trusted care for your furry family"
      description="We treat every dog like our own, providing personalised care and attention."
      className="section-tint"
    >
      {/* Decorative soft spotlights */}
      <div className="pointer-events-none relative">
        <div className="absolute -top-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-2xl" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={feature.title} className="group relative">
              {/* Gradient frame */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-emerald-400/25 via-emerald-300/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card body */}
              <div
                className="relative rounded-3xl border shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-[color:var(--hairline)] bg-[color:var(--surface)] p-7 sm:p-8 transition-transform duration-300 group-hover:-translate-y-1.5"
              >
                {/* Icon with glow */}
                <div className="mb-5 flex items-center justify-center">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_60%)] blur-md" />
                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50/80 ring-1 ring-emerald-200/60 shadow-[inset_0_-2px_8px_rgba(16,185,129,0.08)]">
                      <feature.icon className="h-6 w-6" style={{ color: 'var(--brand)' }} />
                    </div>
                  </div>
                </div>

                <h3 className="mb-2 text-center text-lg font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
                  {feature.title}
                </h3>
                <p className="text-center text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {feature.description}
                </p>

                {/* Subtle top divider on hover */}
                <div className="pointer-events-none absolute left-6 right-6 top-0 h-px translate-y-[-1px] bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
