// app/(site)/blog/saltaire-map-itineraries/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Saltaire Map & Easy Itineraries (1, 3 & 6 Hours): Walks, Sights, Parking',
  description:
    'See Saltaire in 1, 3, or 6 hours. Simple map cues, step-by-step routes, parking/train tips, and where to pause for coffee or photos. Flat, family-friendly options.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/saltaire-map-itineraries' },
  authors: [{ name: 'Saltaire Dogs + Pets' }],
  openGraph: {
    title: 'Saltaire Map & Easy Itineraries',
    description:
      'Three no-fuss routes (1, 3 & 6 hrs) covering Salts Mill, Roberts Park, the canal and photo spots—plus parking and train tips.',
    type: 'article',
    authors: ['Saltaire Dogs + Pets'],
    publishedTime: '2025-10-15T09:00:00Z',
    images: [
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp' },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = '2025-10-15T09:00:00Z'
  const PUBLISHED_HUMAN = '15 Oct 2025'

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              type="image/avif"
              srcSet={[
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1280w.avif 1280w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1920w.avif 1920w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif 2560w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.avif 3840w',
              ].join(', ')}
            />
            <source
              type="image/webp"
              srcSet={[
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1280w.webp 1280w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1920w.webp 1920w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp 2560w',
                '/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp 3840w',
              ].join(', ')}
            />
            <Image
              src="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp"
              alt="Saltaire map & itineraries—canal and Salts Mill at golden hour"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVGRTgiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_45%_38%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Maps & routes
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Saltaire Map & Easy Itineraries (1, 3 & 6 Hours)
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Three no-fuss routes that cover the essentials: Salts Mill, the model village, Roberts Park and the canal
              —with coffee stops and photo spots baked in.
            </p>
            <p className="mt-2 text-sm text-white/80">
              By <em>Saltaire Dogs + Pets</em> •{' '}
              <time dateTime={PUBLISHED_ISO}>Published {PUBLISHED_HUMAN}</time>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog/first-time-guide-to-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                First-timer’s guide
              </Link>
              <Link
                href="/blog/best-saltaire-walks"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Best walks
              </Link>
              <Link
                href="/blog/saltaire-parking-guide"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Parking guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Saltaire is compact and flat—perfect for quick plans. Use the simple map key below and pick the itinerary that
          fits your time. All three loops start near <strong>Salts Mill</strong> (handy for parking, loos and coffee).
        </p>

        {/* Map key / legend */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <h2 className="text-base font-semibold">Simple map key</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  {[
                    ['🟡 Salts Mill', 'Galleries (Hockney), bookshop, food, loos, parking'],
                    ['🟢 Roberts Park', 'Victorian riverside park, bandstand, Half Moon Café'],
                    ['🔵 Canal Towpath', 'Flat, photogenic; easy there-and-back options'],
                    ['🟤 United Reformed Church', 'Iconic round church at the village edge'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-48 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  {[
                    ['🅿️ Parking', 'Try Salts Mill visitor car park first (signed on arrival)'],
                    ['🚆 Train', 'Saltaire station (short walk to the mill)'],
                    ['☕ Coffee stops', 'Salts Diner • Café in the Opera • Half Moon Café'],
                    ['📸 Photo spots', 'Mill courtyard • Canal bridges • Park riverside'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-48 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#7B828A]">Tip: save “Salts Mill” and “Roberts Park” in your maps app.</p>
          </div>
        </section>

        {/* 1 HOUR */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">1-Hour “Essentials” Loop (flat, easy)</h2>
          <p className="mt-3 leading-relaxed text-[#4A4F55]">
            See the signatures without rushing. Works well with kids, buggies, or a coffee-in-hand browse.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Start in the <strong>Salts Mill</strong> courtyard (🟡). Quick look at the 1853 Gallery & bookshop.</li>
            <li>Head down to the <strong>canal towpath</strong> (🔵) beside the mill; turn <em>west</em> for 10–12 mins.</li>
            <li>Cross the next bridge and return on the opposite side (easy loop, flat and scenic).</li>
            <li>Walk up <strong>Victoria Road</strong> to the <strong>United Reformed Church</strong> (🟤)—5-minute peek.</li>
            <li>Back to the mill for coffee at <em>Salts Diner</em> or <em>Café in the Opera</em>.</li>
          </ol>
          <div className="mt-4 rounded-2xl border bg-white p-4 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <strong>Stats:</strong> ~2.5 km • largely step-free • 60–75 minutes with photo stops
          </div>
        </section>

        {/* 3 HOURS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">3-Hour “Village & Park” Day Out</h2>
          <p className="mt-3 leading-relaxed text-[#4A4F55]">
            Adds the model village streets and a peaceful park loop. Perfect first visit when the weather plays nice.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Mill courtyard browse (🟡) → pick up a quick snack or coffee for the walk.</li>
            <li>Stroll the <strong>model village streets</strong> one block off Victoria Road (quieter, photogenic).</li>
            <li>Up to the footbridge and into <strong>Roberts Park</strong> (🟢): riverside paths, bandstand photos.</li>
            <li>Pause at <em>Half Moon Café</em>, then back via canal towpath (🔵) for easy navigation.</li>
            <li>Finish with galleries/shops you skipped earlier.</li>
          </ol>
          <div className="mt-4 rounded-2xl border bg-white p-4 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <strong>Stats:</strong> ~5–6 km • mostly flat • 3 hours including stops
          </div>
        </section>

        {/* 6 HOURS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">6-Hour “Make a Day of It” Plan</h2>
          <p className="mt-3 leading-relaxed text-[#4A4F55]">
            A relaxed full day across the mill, park and a longer canal section—with time for lunch and browsing.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Morning in <strong>Salts Mill</strong> (🟡): 1853 Gallery, bookshop, art supplies.</li>
            <li>Lunch at <em>Salts Diner</em> or <em>Café in the Opera</em> (avoid 12:30–13:30 peak if you can).</li>
            <li>Canal towpath (🔵) towards <strong>Bingley</strong> for 45–60 mins; turn back at a bridge or lock.</li>
            <li>Loop through <strong>Roberts Park</strong> (🟢) for a late-afternoon wander and coffee.</li>
            <li>Evening browse: finish any shops/galleries you missed; golden-hour photos by the canal.</li>
          </ol>
          <div className="mt-4 rounded-2xl border bg-white p-4 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <strong>Stats:</strong> ~9–10 km total moving • flat • 6 hours with generous stops
          </div>
        </section>

        {/* Planning cards */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Planning notes</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Parking & train</h3>
              <p className="mt-3 text-[#4A4F55]">
                Try the <strong>Salts Mill visitor car park</strong> first. If it’s full, see our{' '}
                <Link className="underline underline-offset-4" href="/blog/saltaire-parking-guide">
                  Parking Guide
                </Link>
                . Trains run frequently to <strong>Saltaire</strong> station from Leeds/Bradford.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Accessibility</h3>
              <p className="mt-3 text-[#4A4F55]">
                Routes above are largely <strong>flat</strong> and step-free along the canal and in the park; expect some
                cobbles/stone in the village. Lifts and wide aisles in many areas of the mill.
              </p>
            </div>
          </div>
        </section>

        {/* Pet-care CTA */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Need calm, local pet care while you explore?</h2>
          <p className="mt-3 text-[#4A4F55]">
            Based in Saltaire—<strong>DBS checked</strong>, insured, and I send photo notes after every visit. Walks,
            drop-ins and feeding for dogs, cats and small pets.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              Get in touch
            </Link>
          </div>
        </section>

        {/* Related reads */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/first-time-guide-to-saltaire" className="underline underline-offset-4 hover:no-underline">
                First-Timer’s Guide to Saltaire
              </Link>
            </li>
            <li>
              <Link href="/blog/best-saltaire-walks" className="underline underline-offset-4 hover:no-underline">
                Best Saltaire Walks: 30/45/60-minute loops
              </Link>
            </li>
            <li>
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/salts-mill-complete-guide" className="underline underline-offset-4 hover:no-underline">
                Salts Mill – Complete Guide
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Want a friendly, reliable local while you’re here?</h2>
          <p className="mt-2 text-white/85">I can help with walks, drop-ins and feeding—clear updates every time.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              Get a quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
            >
              Contact
            </Link>
          </div>
        </section>
      </article>

      {/* Schema: Article + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Saltaire Map & Easy Itineraries (1, 3 & 6 Hours)',
              author: { '@type': 'Organization', name: 'Saltaire Dogs + Pets' },
              datePublished: '2025-10-15T09:00:00Z',
              dateModified: '2025-10-15T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/saltaire-map-itineraries',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is Saltaire flat and easy to walk?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes—most of the core sights are on flat ground. The canal towpath and park are especially step-free.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where should I start each itinerary?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Start at Salts Mill—handy for parking, loos, coffee, and the canal path right outside.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do I need to book anything?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Generally no for the mill’s galleries/shops. Events and busy food spots can be exceptions—check locally.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What if I’m bringing a dog?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Saltaire is walkable with dogs—keep them on a lead in busy areas and around signs. If you need care during your visit, contact Saltaire Dogs + Pets.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  )
}
