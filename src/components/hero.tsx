'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Container } from './container'
import { Camera, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl leading-[1.05]" style={{ color: 'var(--text)' }}>
              Solo dog walking & <span className="gradient-text">pet sitting in Saltaire</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              One dog at a time for calm, focused walks. Live GPS & photo updates after every visit.
              Friendly and positive service. We’re local to Saltaire & Shipley.
              <span className="block mt-2 text-sm">Limited daily slots — let’s see if we’re a good fit.</span>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-semibold text-white shadow-lg"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                <Link href="/contact">Book Free Meet & Greet</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base font-semibold shadow-md"
                style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)', color: 'var(--text)' }}
              >
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>

            {/* Trust indicators micro-row */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="trust-badge">
                <span className="trust-dot"></span>
                <Shield className="w-4 h-4" style={{ color: 'var(--success)' }} />
                <span>DBS Checked</span>
              </div>
              <div className="trust-badge">
                <span className="trust-dot"></span>
                <Shield className="w-4 h-4" style={{ color: 'var(--success)' }} />
                <span>Friendly & Positive</span>
              </div>
              <div className="trust-badge">
                <span className="trust-dot"></span>
                <Camera className="w-4 h-4" style={{ color: 'var(--success)' }} />
                <span>GPS & Photos</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]" style={{ backgroundColor: 'var(--surface)' }}>
              <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
              <div className="p-6">
                <Image
                  src="/saltaire-dog-river.png"
                  alt="Solo sunrise walk along the Saltaire canal towpath with Salts Mill in the background"
                  width={600}
                  height={450}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="relative z-10 h-auto w-full rounded-2xl object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-60" style={{ background: 'linear-gradient(135deg, var(--brand-sky), var(--brand))' }}></div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full opacity-40" style={{ background: 'linear-gradient(135deg, var(--brand), var(--brand-sky))' }}></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
