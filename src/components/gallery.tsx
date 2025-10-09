'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from './container'
import { Card, CardContent } from './ui/card'

/**
 * Your 4 real photos only. No placeholders.
 */
const galleryImages = [
  {
    src: '/saltaire-victoria-road-schnauzer-on-lead.jpg',
    alt: 'Miniature schnauzer on a lead walking along in Saltaire with limestone terraces in sunlight',
    caption: 'Stroll in Saltaire',
  },
  {
    src: '/saltaire-canal-retriever-on-lead-cobbles.jpg',
    alt: 'Golden retriever on a lead walking ahead on the canal towpath in Saltaire with Salts Mill reflected in the water',
    caption: 'Saltaire canal walk',
  },
  {
    src: '/poodle-walking-shipley-glenn.jpg',
    alt: 'Poodle walking near Shipley Glen with woodland light',
    caption: 'Shipley Glen walk',
  },
  {
    src: '/north-cliffe-dog-rainbow.jpg',
    alt: 'Dog walking at Northcliffe with a rainbow in the sky',
    caption: 'Northcliffe rainbow walk',
  },
]

export function Gallery() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="mb-4 text-fluid-3xl font-bold tracking-tight">
            See your dog's adventures
          </h2>
          <p className="text-fluid-lg text-muted-foreground">
            Photo updates sent after every walk so you never miss a moment.
          </p>
        </div>

        {/* Cards only — no dialogs, no clicks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                {/* Square crop, anchored to bottom so we never cut off the bottom (only crop from the top). */}
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-bottom"
                    priority={index < 2}
                  />
                </div>
                <CardContent className="px-4 py-3">
                  <p className="text-sm font-medium">{image.caption}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{image.alt}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Fresh photos sent after every walk • See what your dog gets up to!
          </p>
        </div>
      </Container>
    </section>
  )
}
