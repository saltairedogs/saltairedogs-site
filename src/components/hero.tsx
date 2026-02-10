'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Sparkles, Heart, MapPin, Camera } from 'lucide-react'
import { Container } from './container'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 to-emerald-50/30">
      {/* Background patterns for visual interest */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.06),transparent_50%)]" />

      <Container>
        <div className="relative py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Eyebrow with personality */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 ring-1 ring-emerald-200/50 shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-900">
                  Your friendly local pet expert
                </span>
              </div>

              {/* Headline - bold and personal */}
              <h1 id="hero-heading" className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                I care for{' '}
                <span className="text-emerald-600">
                  everything
                </span>{' '}
                from dogs to bearded dragons
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700">
                <strong className="text-gray-900">15+ years</strong> in Saltaire. Fair prices from{' '}
                <strong className="text-emerald-600">£10</strong>. Photo updates every visit. I genuinely love what I do.
              </p>

              {/* Key benefits - simplified palette */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200 shadow-sm">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">15+ years local</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 ring-1 ring-emerald-200 shadow-sm">
                  <Heart className="h-4 w-4 text-emerald-700" />
                  <span className="text-sm font-semibold text-emerald-900">Cheapest in Saltaire</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200 shadow-sm">
                  <Sparkles className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">All animals</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-gray-200 shadow-sm">
                  <Camera className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-900">Photo updates</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  Get in touch
                </Link>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                <strong>Same-day replies.</strong> We've been caring for Saltaire pets since 2009.
              </p>
            </motion.div>

            {/* Right: Image grid - visual, modern, colorful */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              {/* Main large image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-gray-900/10 shadow-2xl">
                <Image
                  src="/poodle-walking-shipley-glenn.webp"
                  alt="Happy poodle enjoying a walk near Shipley Glen — Saltaire local dog walking"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                {/* Floating badge on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl ring-1 ring-gray-900/10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 shadow-lg">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Dogs, cats, rabbits...</div>
                        <div className="text-xs text-gray-600">+ reptiles, birds, fish, chickens</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle decorative element */}
              <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
