'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Container } from './container'
import { Camera, ShieldCheck, MessageCircle, Phone } from 'lucide-react'

/* WhatsApp deep link (pre-filled 60-second quote) */
const WA_NUMBER = '447305367941'
const WA_TEXT = encodeURIComponent(
  "Hi! I'm in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I'm looking for [walks/visits]."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F6] py-16 text-[#131415] lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="leading-tight text-4xl font-semibold tracking-tight lg:text-6xl">
              Calm, local walks & <span className="text-inherit">pet visits in Saltaire</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#7B828A] lg:text-xl">
              Owner-led, DBS checked and insured. Short, steady routes with clear photo updates after every visit.
              <span className="mt-2 block text-sm">Message your street for a fast, friendly quote.</span>
            </p>

            {/* CTAs: WhatsApp + Call (no pricing / no meet & greet) */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#C89B3C] px-6 text-base font-semibold text-[#131415] shadow-none focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
                aria-label="Get a 60-second quote on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                60-second WhatsApp quote
              </a>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-lg border border-[#E6E3DA] bg-[#EFEEE9] px-6 text-base font-semibold text-[#131415] hover:bg-[#EFEEE9]/60"
              >
                <Link href="tel:+447305367941">
                  <Phone className="mr-2 h-5 w-5" />
                  Call us
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#7B828A] lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                DBS checked & insured
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Photo updates every visit
              </span>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Local & reliable
              </span>
            </div>

            {/* Featured on SaltaireGuide.uk badge */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <a
                href="https://www.saltaireguide.uk/local-services/dog-walkers"
                target="_blank"
                rel="noopener"
                aria-label="Featured on SaltaireGuide.uk"
                className="inline-flex items-center"
              >
                <Image
                  src="https://www.saltaireguide.uk/badges/saltaireguide-badge.svg"
                  alt="Featured on SaltaireGuide.uk"
                  height={36}
                  width={144}
                  loading="lazy"
                  className="h-9 w-auto opacity-90 transition-opacity hover:opacity-100"
                  style={{ filter: 'saturate(0.9)' }}
                />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            className="relative"
          >
            <figure className="relative overflow-hidden rounded-lg bg-[#EFEEE9] ring-1 ring-[#E6E3DA]">
              <Image
                src="/saltaire-dog-river.png"
                alt="Relaxed walk along the Saltaire canal towpath near Salts Mill"
                width={1200}
                height={900}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </figure>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
