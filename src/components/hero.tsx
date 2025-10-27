'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../components/ui/button'
import { MessageCircle, Phone, ShieldCheck, Camera, PawPrint } from 'lucide-react'
import { Container } from './container'

const WA_NUMBER = '447305367941'
const WA_TEXT = encodeURIComponent(
  "Hi! I'm in Saltaire. My street is [your street], pet is [dog/cat/small pet], and I'm looking for [walks/drop-ins/feeding]."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

export function Hero() {
  return (
    <section className="relative isolate">
      {/* Full-bleed image */}
      <div className="relative h-[640px] sm:h-[620px] lg:h-[720px] w-full">
        <Image
          src="/saltaire-dog-river.png"
          alt="Saltaire at first light—calm pet care by the canal near Salts Mill"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_35%,rgba(0,0,0,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),transparent_35%,rgba(0,0,0,0.24))]" />
      </div>

      {/* Overlay: centered on mobile, raised on desktop; equal L/R padding */}
      <div className="absolute inset-0 flex items-center justify-center sm:items-start sm:pt-28 lg:pt-32">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mx-auto w-full max-w-xl sm:max-w-2xl md:max-w-3xl rounded-xl sm:rounded-2xl p-4 sm:p-7 text-center
                         backdrop-blur bg-black/60 text-white shadow-[0_24px_60px_-22px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Calm, local <span className="text-inherit">pet care</span> in Saltaire
              </h1>

              <p className="mt-2 sm:mt-3 text-[15px] sm:text-lg leading-relaxed text-white/90">
                Owner-led, DBS checked and insured. Walks, drop-ins and feeding for dogs, cats and small pets —
                with clear photo notes after every visit.
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {['Walks', 'Drop-ins', 'Feeding'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[13px]
                               border-white/30 bg-white/10 text-white"
                  >
                    <PawPrint className="h-4 w-4" />
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold"
                  style={{ backgroundColor: '#C89B3C', color: '#131415' }}
                  aria-label="Get a 60-second quote on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                  60-second WhatsApp quote
                </a>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 w-full sm:w-auto rounded-lg border px-5 text-base font-semibold
                             border-white/40 bg-white/95 text-[#131415] hover:bg-white"
                >
                  <Link href="tel:+447305367941">
                    <Phone className="mr-2 h-5 w-5" />
                    Call us
                  </Link>
                </Button>
              </div>

              {/* Trust row (desktop only) */}
              <div className="mt-5 hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85 sm:flex">
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
                  <PawPrint className="h-4 w-4" />
                  Dogs, cats & small pets
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
