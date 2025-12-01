'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { MessageCircle, Phone, ShieldCheck, Camera, PawPrint } from 'lucide-react'
import { Container } from './container'

const WA_NUMBER = '447424208127'
const WA_TEXT = encodeURIComponent(
  "Hi Giuseppe, I'm in Saltaire/Shipley and looking for pet care."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

export function Hero() {
  return (
    <section
      className="relative isolate"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="relative h-[640px] sm:h-[620px] lg:h-[720px] w-full overflow-hidden">
        <Image
          src="/saltaire-dog-walk-salts-mill-canal-golden-hour-hero.avif"
          alt="Dog walker beside Salts Mill on the Leeds–Liverpool Canal in Saltaire at sunrise — calm, local dog walking and pet care."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Single, simple gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-black/70 px-4 py-5 sm:px-8 sm:py-8 text-center text-white shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Calm local pet care
              </p>

              {/* Main heading */}
              <h1
                id="hero-heading"
                className="mt-2 text-3xl sm:text-[2.5rem] sm:leading-[1.1] font-extrabold tracking-tight"
              >
                Calm, local dog walking &amp; pet care in Saltaire &amp; Shipley
              </h1>

              {/* Supporting copy */}
              <p className="mt-3 text-[14px] sm:text-[15px] md:text-base leading-relaxed text-white/90">
                Owner-led, DBS checked and insured dog walking &amp; pet sitting in Saltaire &amp; Shipley.
                Walks, drop-ins and feeding for dogs, cats and small pets — with clear photo notes after
                every visit.
              </p>

              {/* Service chips */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {['Dog walks', 'Drop-ins', 'Feeding visits'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[12px] sm:text-[13px]"
                  >
                    <PawPrint className="h-3.5 w-3.5" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Service area note */}
              <p className="mt-3 text-[11px] sm:text-xs text-white/80">
                Serving Saltaire &amp; Shipley, with Baildon visits available by enquiry.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-5 text-[14px] font-semibold"
                  style={{ backgroundColor: '#C89B3C', color: '#131415' }}
                  aria-label="Message Giuseppe on WhatsApp for a quick dog walking or pet sitting quote"
                >
                  <MessageCircle className="h-5 w-5" />
                  60-second WhatsApp quote
                </a>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 w-full sm:w-auto rounded-lg border border-white/55 bg-white/95 px-5 text-[14px] font-semibold text-[#131415] hover:bg-white"
                >
                  <Link href="tel:+447424208127">
                    <Phone className="mr-2 h-5 w-5" />
                    Call us
                  </Link>
                </Button>
              </div>

              {/* Trust row */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-white/85">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    DBS checked &amp; insured
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Photo updates every visit
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <PawPrint className="h-4 w-4" />
                    Dogs, cats &amp; small pets
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
