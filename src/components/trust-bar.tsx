'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, Camera, Heart } from 'lucide-react'
import { Container } from './container'
import { Badge } from './badge'

const trustItems = [
  { icon: Shield, label: 'DBS Checked', description: 'Enhanced DBS for your peace of mind' },
  { icon: Heart, label: 'Friendly & Positive', description: 'Kind, reward-based handling' },
  { icon: Camera, label: 'GPS & Photos', description: 'Updates sent after every walk' },
  { icon: Heart, label: 'Solo Walks Only', description: 'One dog at a time for calm focus' },
  { icon: MapPin, label: 'Saltaire & Shipley', description: 'Baildon by enquiry' },
  { icon: MapPin, label: 'Local & Reliable', description: 'Limited daily slots' },
]

export function TrustBar() {
  return (
    <section className="border-b bg-muted/30 py-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <Badge variant="outline" className="mb-2 text-xs">{item.label}</Badge>
              <p className="hidden text-xs text-muted-foreground lg:block">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
