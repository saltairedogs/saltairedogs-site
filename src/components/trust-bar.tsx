'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Heart, Camera, MapPin, Smile, Check, Sparkles } from 'lucide-react'
import { Container } from './container'

const ITEMS = [
  {
    icon: Smile,
    label: 'Cheapest in Saltaire',
    description: 'From £10 per visit',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
  },
  {
    icon: Check,
    label: 'Fully Insured',
    description: 'Public liability',
    color: 'bg-gray-700',
    bg: 'bg-gray-50',
    ring: 'ring-gray-200',
  },
  {
    icon: Camera,
    label: 'Photo Updates',
    description: 'Every single visit',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
  },
  {
    icon: MapPin,
    label: '15+ Years Local',
    description: 'Saltaire expert',
    color: 'bg-gray-700',
    bg: 'bg-gray-50',
    ring: 'ring-gray-200',
  },
  {
    icon: Sparkles,
    label: 'All Animals',
    description: 'Dogs to dragons',
    color: 'bg-emerald-600',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
  },
  {
    icon: Heart,
    label: 'Love What I Do',
    description: 'Not a side hustle',
    color: 'bg-gray-700',
    bg: 'bg-gray-50',
    ring: 'ring-gray-200',
  },
]

export function TrustBar() {
  const reduce = useReducedMotion()

  return (
    <section className="relative py-12 sm:py-16 bg-white" aria-label="Why locals choose Saltaire Dogs + Pets">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Why locals choose me
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            No big company overheads. No fancy office. Just me, doing what I love.
          </p>
        </motion.div>

        <motion.ul
          role="list"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.li
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 20, scale: 0.9 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: reduce ? 0 : 0.1 + i * 0.08,
                  ease: 'easeOut',
                }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} ${item.ring} ring-1 shadow-md transition-all group-hover:scale-105 group-hover:shadow-lg`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>

                <div className="text-sm font-bold text-gray-900">{item.label}</div>

                <p className="mt-1 text-xs text-gray-600">{item.description}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}
