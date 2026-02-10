// app/(site)/blog/salts-mill-complete-guide/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Salts Mill, Saltaire – Complete Visitor Guide: Galleries, Shops, Food, Parking & Tips',
  description:
    'Everything you need to plan a visit to Salts Mill in Saltaire: the 1853 Gallery (David Hockney), bookshop, art supplies, home & design stores, food, parking, access, rainy-day ideas, and easy add-on walks.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/salts-mill-complete-guide' },
  authors: [{ name: 'Saltaire Dogs + Pets' }],
  openGraph: {
    title: 'Salts Mill, Saltaire – Complete Visitor Guide',
    description:
      'Galleries, shops, food, parking and local tips—make the most of your time at Salts Mill (plus easy walks and what to do if it rains).',
    type: 'article',
    authors: ['Saltaire Dogs + Pets'],
    publishedTime: '2025-10-14T09:00:00Z',
    images: [
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp' },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = '2025-10-14T09:00:00Z'
  const PUBLISHED_HUMAN = '14 Oct 2025'

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
              alt="Salts Mill on the Leeds–Liverpool Canal at golden hour—classic Saltaire view"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVGRTgiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* readable overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_45%_38%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Salts Mill guide
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Salts Mill, Saltaire – Complete Visitor Guide
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Galleries (including David Hockney), a brilliant bookshop, art supplies, design stores and food—plus
              parking, access, rainy-day plans and easy walks nearby.
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
          Salts Mill is the cultural heart of Saltaire—part gallery, part shopping warren, part rainy-day lifesaver. You
          can browse for free, grab lunch, and head out to the canal or Roberts Park right after. This guide keeps it
          practical and local.
        </p>

        {/* Quick answer card */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <h2 className="text-base font-semibold">Quick answer</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <table className="w-full table-fixed border-collapse text-[14px]">
                <tbody>
                  {[
                    ['Where', 'Victoria Rd, Saltaire (BD17 7EF) – next to canal'],
                    ['Admission', 'Browsing galleries/shops typically free; check notices onsite'],
                    ['Best first stop', '1853 Gallery (Hockney) + the Bookshop'],
                    ['Food', 'Salts Diner • Café in the Opera'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-40 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="w-full table-fixed border-collapse text-[14px]">
                <tbody>
                  {[
                    ['Parking', 'Try Salts Mill visitor car park first (signed on arrival)'],
                    ['Good with kids', 'Yes—rain-proof browsing + space to roam outside'],
                    ['Access', 'Large lifts, wide aisles in most areas; some surfaces uneven'],
                    ['Add-on walk', 'Flat canal loop or Roberts Park via footbridge'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-40 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-[#7B828A]">
              Notes change occasionally—check onsite signs or the official channels on the day.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Highlights inside Salts Mill</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: '#E6E3DA' }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {['Area', 'What it is', 'Why go', 'Tips'].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: '#EFEDE7' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ['1853 Gallery', 'Major David Hockney displays & prints', 'Signature Saltaire experience', 'Quieter early; photography rules vary'],
                  ['The Bookshop', 'Beautiful, huge bookstore', 'Rain-day haven + great gifts', 'Check the art/design aisles upstairs'],
                  ['Art Supplies', 'Specialist materials & papers', 'Serious kit for creatives', 'Ask staff for local-paper recs'],
                  ['Home & Design Stores', 'Furniture, lighting, objects', 'Modern design in a mill setting', 'Measure before you fall in love'],
                  ['Salts Diner', 'Café/restaurant space', 'Reliable lunch, coffee & cake', 'Peak at lunchtime—go early/late'],
                  ['Café in the Opera', 'Upper-floor café by prints', 'Calmer coffee stop', 'Nice after the gallery wander'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                    {row.map((cell, i) => (
                      <td key={i} className="py-2 pr-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Planning: getting there & parking */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Getting there & parking</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Train</h3>
              <p className="mt-3 text-[#4A4F55]">
                <strong>Saltaire station</strong> is a short walk away with frequent services from Leeds and Bradford.
                Exit towards Victoria Road—the mill is just down the hill.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Parking</h3>
              <p className="mt-3 text-[#4A4F55]">
                Use the <strong>Salts Mill visitor car park</strong> when space allows (signed on arrival). When busy,
                see our{' '}
                <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4">
                  Saltaire Parking Guide
                </Link>{' '}
                for simple fallbacks.
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Accessibility notes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Large lifts and wide routes in most areas; expect some exposed stone floors/occasional unevenness.</li>
            <li>Accessible loos and seating areas are signposted—ask staff if unsure.</li>
            <li>Parking/entrances vary by event—follow onsite directions.</li>
          </ul>
        </section>

        {/* Easy add-on itineraries */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Easy add-ons after the mill</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold">30-min Canal & Courtyard</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>From the courtyard, join the canal towpath (beside the mill).</li>
                <li>Head west for ~10–12 mins; cross the next bridge.</li>
                <li>Return on the opposite side to finish back at the mill.</li>
              </ol>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold">45-min Roberts Park Loop</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>Walk up Victoria Road to the footbridge.</li>
                <li>Loop the riverside paths and bandstand in Roberts Park.</li>
                <li>Drop back to the canal and return to the mill.</li>
              </ol>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#7B828A]">
            Want more? Try our <Link className="underline underline-offset-4" href="/blog/best-saltaire-walks">Best Saltaire Walks</Link>.
          </p>
        </section>

        {/* Pet-care CTA */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Need local pet care while you browse?</h2>
          <p className="mt-3 text-[#4A4F55]">
            I’m based in Saltaire—<strong>DBS checked</strong>, insured, and I send photo notes after every visit. Walks,
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
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking Guide
              </Link>
            </li>
            <li>
              <Link href="/blog/best-saltaire-walks" className="underline underline-offset-4 hover:no-underline">
                Best Saltaire Walks: 30/45/60-minute loops
              </Link>
            </li>
            <li>
              <Link href="/blog/dog-friendly-saltaire" className="underline underline-offset-4 hover:no-underline">
                Dog-Friendly Saltaire
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-4">
            {[
              [
                'Is Salts Mill free to enter?',
                'Browsing galleries and shops is typically free; you only pay for food and anything you buy. Always check onsite notices.',
              ],
              [
                'Where do I park?',
                'Start with the Salts Mill visitor car park when space allows. If it’s full, try Exhibition Road or signed on-street bays—see our Parking Guide.',
              ],
              [
                'How long should I allow?',
                '1–2 hours to browse; half a day if you add lunch and a canal or park loop.',
              ],
              [
                'Is it accessible?',
                'There are lifts and wide routes in most areas. Expect some uneven stone floors; ask staff for the best step-free paths.',
              ],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border bg-white p-4" style={{ borderColor: '#E6E3DA' }}>
                <summary className="cursor-pointer text-base font-semibold">{q}</summary>
                <p className="mt-2 text-[#4A4F55]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Want a calm, reliable local while you explore?</h2>
          <p className="mt-2 text-white/85">Walks, drop-ins and feeding—clear photo updates after every visit.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              Get a quote
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
              headline: 'Salts Mill, Saltaire – Complete Visitor Guide',
              author: { '@type': 'Organization', name: 'Saltaire Dogs + Pets' },
              datePublished: '2025-10-14T09:00:00Z',
              dateModified: '2025-10-14T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/salts-mill-complete-guide',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is Salts Mill free to enter?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Browsing galleries and shops is typically free; you only pay for food and anything you buy. Always check onsite notices.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where do I park?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Start with the Salts Mill visitor car park when space allows. If it’s full, try Exhibition Road or signed on-street bays—see our Parking Guide.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long should I allow?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '1–2 hours to browse; half a day if you add lunch and a canal or park loop.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is it accessible?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'There are lifts and wide routes in most areas. Expect some uneven stone floors; ask staff for the best step-free paths.',
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
