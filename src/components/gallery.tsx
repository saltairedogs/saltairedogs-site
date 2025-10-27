'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from './container'

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
    <section className="py-12 lg:py-20" style={{ backgroundColor: '#F7F7F6' }}>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="mb-3 text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: '#131415' }}>
            See your dog&apos;s adventures
          </h2>
          <p className="text-base md:text-lg" style={{ color: '#7B828A' }}>
            Photo updates sent after every walk so you never miss a moment.
          </p>
        </div>

        {/* Clean cards — no dialogs, no clicks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg border bg-white"
              style={{ borderColor: '#E6E3DA' }}
            >
              {/* Square crop, anchor bottom to avoid chopping paws */}
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom"
                  priority={index < 2}
                />
                {/* subtle top gradient for caption readability if needed */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <figcaption className="px-4 py-3">
                <p className="text-sm font-semibold" style={{ color: '#131415' }}>
                  {image.caption}
                </p>
                <p className="mt-1 text-xs" style={{ color: '#7B828A' }}>
                  {image.alt}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm" style={{ color: '#7B828A' }}>
            Fresh photos sent after every walk • See what your dog gets up to!
          </p>
        </div>
      </Container>
    </section>
  )
}
