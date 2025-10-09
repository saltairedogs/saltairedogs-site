'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Clock, CheckCircle } from 'lucide-react'
import { Container } from './container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from './badge'

const serviceAreas = [
  {
    name: 'Saltaire',
    description: 'Roberts Park loop, canal towpath, village green walks',
    pickupTimes: 'Morning, midday and late-afternoon slots (limited)',
    landmarks: ['Roberts Park', 'Salts Mill', 'Victoria Road', 'Canal'],
  },
  {
    name: 'Shipley',
    description: 'Glen Tramway, Northcliffe Woods, town centre routes',
    pickupTimes: 'Morning, midday and late-afternoon slots (limited)',
    landmarks: ['Glen Tramway', 'Northcliffe Woods', 'Market Square', 'Canal'],
  },
]

export function ServiceArea() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="mb-4 text-fluid-3xl font-bold tracking-tight">Where we walk</h2>
          <p className="text-fluid-lg text-muted-foreground">
            We cover <strong>Saltaire &amp; Shipley</strong>. Baildon is by enquiry—if it’s a good fit for both of us, we’ll make it work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Areas list */}
          <div className="space-y-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {area.name}
                      </CardTitle>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Typical pickup times</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{area.pickupTimes}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium">Popular routes include:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.landmarks.map((landmark) => (
                          <Badge key={landmark} variant="outline" className="text-xs">
                            {landmark}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Static coverage map image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border bg-white">
              <Image
                src="/maps-coverage-saltaire.png"
                alt="Coverage map showing Saltaire and Shipley walking area."
                width={2400}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Active areas: Saltaire &amp; Shipley • Baildon enquiries welcome if it’s the right fit.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 rounded-2xl bg-muted/30 p-6 text-center lg:p-8">
          <h3 className="mb-4 text-xl font-semibold">Coverage &amp; availability</h3>
          <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-3">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Saltaire &amp; Shipley</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Limited daily slots</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm">Baildon by enquiry</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
