import { Section } from './section'
import { Button } from './ui/button'

export function CTABanner() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to give your dog the best care?</h2>
        <p className="mt-4 text-lg text-primary-foreground/90">
          Solo walks, live GPS & photos, tailored routines. We keep limited daily slots so every dog gets proper attention.
        </p>
        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Book Free Meet & Greet</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:07305367941">Call 07305 367941</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/80">
          Our guarantee: Paws wiped, traffic safety prioritised, and we’ll text if anything looks off at home.
        </p>
      </div>
    </Section>
  )
}
