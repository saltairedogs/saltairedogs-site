import { Section } from './section'
import { Button } from './ui/button'

export function CTABanner() {
  return (
    <Section className="bg-[#F7F7F6] py-16 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#131415]">
          Ready to give your dog the best care?
        </h2>

        <p className="mt-4 text-lg text-[#7B828A]">
          Solo walks, live GPS &amp; photos, tailored routines. We keep limited daily slots so every dog gets proper attention.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            asChild
            className="rounded-lg bg-[#C89B3C] text-[#131415] hover:opacity-90 shadow-none focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/40"
          >
            <a href="/contact">Book Free Meet &amp; Greet</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-lg border-[#E6E3DA] text-[#131415] bg-white hover:bg-[#EFEEE9]/60 shadow-none"
          >
            <a href="tel:+447424208127">Call 07424 208127</a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-[#7B828A]">
          Our guarantee: Paws wiped, traffic safety prioritised, and we’ll text if anything looks off at home.
        </p>
      </div>
    </Section>
  )
}
