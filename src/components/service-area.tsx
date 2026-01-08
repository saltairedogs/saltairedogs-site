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
    <section className="py-12 lg:py-20 bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/50">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="mb-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Where we cover
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            We cover <strong className="font-semibold text-emerald-700">Saltaire &amp; Shipley</strong> for walks, pet sitting, drop-ins and feeding.
            Baildon is by enquiry—if it's a good fit for both of us, we'll make it work.
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
                className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <header className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${index === 0 ? 'bg-emerald-50' : 'bg-blue-50'} shadow-sm`}
                      aria-hidden="true"
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${index === 0 ? 'from-emerald-400 to-green-500' : 'from-blue-400 to-cyan-500'}`}>
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {area.name}
                    </h3>
                  </div>

                  <Badge className="rounded-full px-2.5 py-1 text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    Active
                  </Badge>
                </header>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {area.description}
                </p>

                <div className="mt-5">
                  <div className="mb-1.5 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-900">
                      Typical visit times
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {area.pickupTimes}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-gray-900">
                    Popular walk spots include:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark) => (
                      <Badge
                        key={landmark}
                        variant="outline"
                        className="rounded-full text-xs border-gray-300 text-gray-700 bg-gray-50 font-medium"
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
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/images/homepage/maps-coverage-saltaire-shipley.webp"
                alt="Coverage map showing Saltaire and Shipley for walks, pet sits and home visits."
                width={2400}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-600">
              Active areas: Saltaire &amp; Shipley • Baildon enquiries welcome if it's the right fit.
            </figcaption>
          </motion.figure>
        </div>

        {/* Coverage & availability banner */}
        <div
          className="mt-12 rounded-2xl p-6 lg:p-8 border border-emerald-200 bg-gradient-to-br from-emerald-50 to-blue-50 shadow-lg"
        >
          <h3
            className="mb-4 text-sm font-bold uppercase tracking-wide text-center text-gray-900"
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
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-semibold text-gray-900">
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
