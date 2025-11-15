// app/(site)/blog/saltaire-parking-guide/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Saltaire Parking Guide: Free Parking at Salts Mill, Streets, Sundays & Tips',
  description:
    'Where to park in Saltaire: free Salts Mill parking, pay-and-display options, on-street rules, Sundays, busy days, Blue Badge info, and quick itineraries.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/saltaire-parking-guide' },
  authors: [{ name: 'Giuseppe (Saltaire Dogs + Pets)' }],
  openGraph: {
    title: 'Saltaire Parking Guide',
    description:
      'Free Salts Mill parking, pay-and-display options, on-street rules, Sundays, busy days, and Blue Badge info.',
    type: 'article',
    authors: ['Giuseppe (Saltaire Dogs + Pets)'],
    publishedTime: '2025-10-11T09:00:00Z',
    images: [
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp' },
    ],
  },
}

export default function Page() {
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I'm visiting Saltaire and may need [dog walks/drop-ins/feeding] while I'm here. Can you help on [dates/times]?"
  )}`
  const PUBLISHED_ISO = '2025-10-11T09:00:00Z'
  const PUBLISHED_HUMAN = '11 Oct 2025'

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* AVIF → WebP → PNG fallback with responsive width-based srcset */}
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
              alt="Saltaire—Leeds & Liverpool Canal beside Salts Mill at golden hour"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              // tiny neutral blur
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVGRTgiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>

          {/* readable overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_40%_36%,rgba(0,0,0,0.30),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Parking guide
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Saltaire Parking Guide (Free at Salts Mill + Streets & Sundays)
            </h1>
            <p className="mt-3 text-lg text-white/90">
              The quick answer to “Where do I park in Saltaire?”—what’s free, what gets busy, and the easy fallback
              options when the mill is full.
            </p>
            <p className="mt-2 text-sm text-white/80">
              By <strong>Giuseppe</strong>, owner – <em>Saltaire Dogs + Pets</em> •{' '}
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
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Quick answer card */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-xl font-bold">The quick answer</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4A4F55]">
            <strong>Start with the Salts Mill car park</strong> (free for visitors; use postcode <em>BD17 7EF</em>).
            If it’s full on sunny weekends or during events, try <strong>Exhibition Road</strong> (pay-and-display) or{' '}
            <strong>on-street bays around the village</strong> where signed. Sundays are often easier, but always check
            local signs.
          </p>
        </div>

        {/* Table: main options */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Main parking options</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: '#E6E3DA' }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {['Location', 'Type', 'Postcode', 'Typical Rules', 'Notes'].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: '#EFEDE7' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  [
                    'Salts Mill (Visitor Car Park)',
                    'Free (visitors)',
                    'BD17 7EF',
                    'Free while visiting the mill; check onsite signs',
                    'Closest to everything; fills at peak times.',
                  ],
                  [
                    'Exhibition Road Car Park',
                    'Pay & display',
                    'BD18 3JN',
                    'Check machines/signs (hours vary)',
                    'Good fallback; short walk to the village and park.',
                  ],
                  [
                    'Saltaire Station / Surrounds',
                    'Mixed',
                    'BD18 3LQ',
                    'Combination of pay-and-display & on-street restrictions',
                    'Useful for rail users and weekend visits.',
                  ],
                  [
                    'On-street bays (various)',
                    'Mixed',
                    '—',
                    'Always read local plates; residents zones and time limits apply in places',
                    'Expect tighter availability near Victoria Rd & the model village.',
                  ],
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

        {/* Sundays, Blue Badge, busy days */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Sundays, Blue Badge & busy days</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <strong>Sundays:</strong> usually easier, but some restrictions still apply—always check the street plates.
            </li>
            <li>
              <strong>Blue Badge:</strong> designated bays near key sites; standard UK Blue Badge rules—verify on signs.
            </li>
            <li>
              <strong>Busy days:</strong> warm weekends, school holidays and festival dates; arrive before 10:30 or after
              15:30 for best shot at the mill car park.
            </li>
          </ul>
        </section>

        {/* Simple maps note */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Simple plan that works</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Navigate to <strong>Salts Mill (BD17 7EF)</strong> and try the visitor car park.</li>
            <li>If full, loop to <strong>Exhibition Road</strong> (pay-and-display).</li>
            <li>As a third option, look for <strong>signed on-street bays</strong> a block back from Victoria Road.</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">
            Tip: save a pin for “Salts Mill Car Park” and “Exhibition Road Car Park” in your maps app before you set off.
          </p>
        </section>

        {/* Pet-care CTA box */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Visiting with a dog—or need care while you explore?</h2>
          <p className="mt-3 text-[#4A4F55]">
            I’m based in Saltaire and can help with <strong>walks, drop-ins or feeding</strong>—for dogs, cats and small
            pets—so you can make the most of your day. DBS checked, insured, and I send photo notes after every visit.
          </p>
          <div className="mt-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              WhatsApp a quick request
            </a>
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
              <Link href="/blog/dog-friendly-saltaire" className="underline underline-offset-4 hover:no-underline">
                Dog-Friendly Saltaire: cafés, rules, vets & quiet routes
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-4">
            {[
              ['Is parking free at Salts Mill?', 'Yes, for visitors. Always check the onsite signs for current terms.'],
              [
                'Where should I go if the mill car park is full?',
                'Head to Exhibition Road (pay-and-display) or look for signed on-street bays a block back from Victoria Road.',
              ],
              [
                'Is Sunday parking easier?',
                'Often, yes—but some restrictions still apply. Always read local plates before leaving the car.',
              ],
              [
                'Is Saltaire good for Blue Badge holders?',
                'There are designated bays near key sites. Standard UK Blue Badge rules apply—check signs on the day.',
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
          <h2 className="text-2xl font-extrabold">Need local pet care while you visit?</h2>
          <p className="mt-2 text-white/85">I’m close by—DBS checked, insured, with photo updates after every visit.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              Get a quick WhatsApp quote
            </a>
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
              headline: 'Saltaire Parking Guide',
              author: { '@type': 'Person', name: 'Giuseppe (Saltaire Dogs + Pets)' },
              datePublished: '2025-10-11T09:00:00Z',
              dateModified: '2025-10-11T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/saltaire-parking-guide',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is parking free at Salts Mill?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, for visitors. Always check the onsite signs for current terms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where should I go if the mill car park is full?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Head to Exhibition Road (pay-and-display) or look for signed on-street bays a block back from Victoria Road.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Sunday parking easier?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Often, yes—but some restrictions still apply. Always read local plates before leaving the car.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Saltaire good for Blue Badge holders?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'There are designated bays near key sites. Standard UK Blue Badge rules apply—check signs on the day.',
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
