'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Clock, CheckCircle } from 'lucide-react'
import { Container } from './container'
import { Badge } from './badge'

const serviceAreas = [
  {
    name: 'Saltaire',
    description:
      'Dog walks, cat/small-pet drop-ins, feeding and quick comfort breaks. Roberts Park, canal towpath and village greens nearby.',
    pickupTimes: 'Morning, midday and late-afternoon visits (limited)',
    landmarks: ['Roberts Park', 'Salts Mill', 'Victoria Road', 'Canal'],
  },
  {
    name: 'Shipley',
    description:
      'Walks and home visits around Glen Tramway, Northcliffe and the town centre. Feeding, litter changes and meds by request.',
    pickupTimes: 'Morning, midday and late-afternoon visits (limited)',
    landmarks: ['Glen Tramway', 'Northcliffe Woods', 'Market Square', 'Canal'],
  },
]

export function ServiceArea() {
  return (
    <section className="py-12 lg:py-20" style={{ backgroundColor: '#F7F7F6' }}>
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: '#131415' }}>
            Where we cover
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#7B828A' }}>
            We cover <strong className="font-semibold text-[#131415]">Saltaire &amp; Shipley</strong> for walks, pet sitting, drop-ins and feeding.
            Baildon is by enquiry—if it’s a good fit for both of us, we’ll make it work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Areas list */}
          <div className="space-y-6">
            {serviceAreas.map((area, index) => (
              <motion.article
                key={area.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="rounded-lg border p-5 md:p-6"
                style={{ borderColor: '#E6E3DA', backgroundColor: '#EFEEE9' }}
              >
                <header className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                      style={{ backgroundColor: '#F7F7F6', borderColor: '#E6E3DA' }}
                      aria-hidden="true"
                    >
                      <MapPin className="h-4 w-4" color="#131415" />
                    </span>
                    <h3 className="text-lg font-semibold" style={{ color: '#131415' }}>
                      {area.name}
                    </h3>
                  </div>

                  <Badge className="rounded-full px-2.5 py-1 text-xs bg-[#C89B3C]/12 text-[#131415] border border-[#C89B3C]/30">
                    Active
                  </Badge>
                </header>

                <p className="mt-2 text-sm leading-relaxed" style={{ color: '#7B828A' }}>
                  {area.description}
                </p>

                <div className="mt-5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <Clock className="h-4 w-4" color="#7B828A" />
                    <span className="text-sm font-medium" style={{ color: '#131415' }}>
                      Typical visit times
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: '#7B828A' }}>
                    {area.pickupTimes}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-sm font-medium" style={{ color: '#131415' }}>
                    Popular walk spots include:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark) => (
                      <Badge
                        key={landmark}
                        variant="outline"
                        className="rounded-full text-xs border-[#E6E3DA] text-[#131415] bg-white"
                      >
                        {landmark}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coverage map */}
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg border" style={{ borderColor: '#E6E3DA', backgroundColor: '#EFEEE9' }}>
              <Image
                src="/maps-coverage-saltaire.png"
                alt="Coverage map showing Saltaire and Shipley for walks, pet sits and home visits."
                width={2400}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs" style={{ color: '#7B828A' }}>
              Active areas: Saltaire &amp; Shipley • Baildon enquiries welcome if it’s the right fit.
            </figcaption>
          </motion.figure>
        </div>

        {/* Coverage & availability banner */}
        <div
          className="mt-12 rounded-lg p-6 lg:p-8 border"
          style={{ backgroundColor: '#EFEEE9', borderColor: '#E6E3DA' }}
        >
          <h3
            className="mb-4 text-sm font-semibold uppercase tracking-wide text-center"
            style={{ color: '#131415' }}
          >
            Coverage &amp; availability
          </h3>

          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            {[
              'Saltaire & Shipley',
              'Limited daily slots',
              'Baildon by enquiry',
            ].map((text) => (
              <div key={text} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" color="#131415" />
                <span className="text-sm" style={{ color: '#131415' }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
