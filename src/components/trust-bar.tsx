'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, FileBadge2, Camera, MapPin, KeyRound, HeartHandshake } from 'lucide-react'
import { Container } from './container'

const ITEMS = [
  {
    icon: ShieldCheck,
    label: 'DBS Checked',
    description: 'Enhanced DBS on file',
  },
  {
    icon: FileBadge2,
    label: 'Insured',
    description: 'Public liability cover',
  },
  {
    icon: Camera,
    label: 'Photo Updates',
    description: 'After every visit',
  },
  {
    icon: MapPin,
    label: 'Saltaire Local',
    description: 'Shipley nearby',
  },
  {
    icon: KeyRound,
    label: 'Secure Keys',
    description: 'No address on tags',
  },
  {
    icon: HeartHandshake,
    label: 'Calm Handling',
    description: 'Kind & steady care',
  },
]

export function TrustBar() {
  const reduce = useReducedMotion()

  return (
    <section
      className="border-y py-8"
      style={{ backgroundColor: '#F7F7F6', borderColor: '#E6E3DA' }}
      aria-label="Trust and safety highlights"
    >
      <Container>
        <motion.ul
          role="list"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.li
                key={item.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.05, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border bg-[#EFEEE9] ring-0 transition-all group-hover:shadow-sm"
                  style={{ borderColor: '#E6E3DA' }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" color="#131415" />
                </div>

                <div
                  className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: '#131415' }}
                >
                  {item.label}
                </div>

                <p className="mt-1 hidden text-xs leading-snug lg:block" style={{ color: '#7B828A' }}>
                  {item.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}
