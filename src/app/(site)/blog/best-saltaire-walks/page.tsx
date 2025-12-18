// app/(site)/blog/best-saltaire-walks/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Best Saltaire Walks: 30, 45 & 60-Minute Loops (Maps, Tips & Surfaces)',
  description:
    'Three easy Saltaire walking routes: 30, 45 and 60-minute loops covering Salts Mill, the Leeds & Liverpool Canal, Roberts Park and Victoria Road. Surfaces, access, where to start, and dog-friendly notes.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/best-saltaire-walks' },
  authors: [{ name: 'Giuseppe (Saltaire Dogs + Pets)' }],
  openGraph: {
    title: 'Best Saltaire Walks',
    description:
      'Three easy Saltaire loops (30/45/60 minutes) with simple turn-by-turns, surfaces and access notes.',
    type: 'article',
    authors: ['Giuseppe (Saltaire Dogs + Pets)'],
    publishedTime: '2025-10-12T09:00:00Z',
    images: [
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp' },
      { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp' },
    ],
  },
}

export default function Page() {
  const WA = `https://wa.me/447424208127?text=${encodeURIComponent(
    "Hi! I'm visiting Saltaire and may need [dog walks/drop-ins/feeding]. Can you help on [dates/times]?"
  )}`
  const PUBLISHED_ISO = '2025-10-12T09:00:00Z'
  const PUBLISHED_HUMAN = '12 Oct 2025'

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
              alt="Leeds & Liverpool Canal beside Salts Mill at golden hour—classic Saltaire walking scene"
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
              Saltaire • Walking routes
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Best Saltaire Walks: 30, 45 & 60-Minute Loops
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Three easy circuits starting by Salts Mill—flat, scenic and simple to follow. Surfaces, access and dog
              notes included.
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
        <p className="text-lg text-[#4A4F55]">
          All three loops start by <strong>Salts Mill (BD17 7EF)</strong>. The routes favour flat towpaths and park paths,
          with just a couple of short road crossings. Great year-round; in winter, towpaths can be muddy—boots help.
        </p>

        {/* quick comparison table */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <h2 className="text-xl font-bold">Quick compare</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-[14px]">
                <thead>
                  <tr className="text-left">
                    {['Loop', 'Time', 'Distance', 'Surfaces', 'Pushchair', 'Dog notes'].map((h) => (
                      <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: '#EFEDE7' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="align-top text-[#4A4F55]">
                  {[
                    ['Canal & Courtyard', '30 min', '2.2 km / 1.4 mi', 'Towpath, paved', 'Yes (flat)', 'Lead near cafés & bridges'],
                    ['Park & River', '45 min', '3.5 km / 2.2 mi', 'Park paths, towpath', 'Yes (mostly)', 'Lead in Roberts Park if signed'],
                    ['Five-Rise Taster', '60 min', '4.6 km / 2.9 mi', 'Towpath (longer)', 'OK (flat)', 'Great on lead; watch cyclists'],
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
          </div>
        </section>

        {/* 30-minute */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">30-Minute: Canal & Courtyard Loop</h2>
          <p className="mt-3 text-[#4A4F55]">
            The “hello Saltaire” circuit—perfect before a coffee or after the galleries.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Start at Salts Mill courtyard. Head to the <strong>canal towpath</strong> beside the mill.</li>
            <li>Turn <strong>left (west)</strong> along the canal for ~10 minutes; enjoy mill reflections.</li>
            <li>At the next bridge, cross to the far side and return on the opposite towpath.</li>
            <li>Drop back into the mill courtyard for cafés and bookshop.</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">Flat; occasional cyclists. Best for pushchairs and short dog walks.</p>
        </section>

        {/* 45-minute */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">45-Minute: Roberts Park & River Aire</h2>
          <p className="mt-3 text-[#4A4F55]">
            Adds the Victorian park and riverside views—great at golden hour.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>From the mill, walk up <strong>Victoria Road</strong> to the footbridge.</li>
            <li>Cross into <strong>Roberts Park</strong>; loop the bandstand and riverside path.</li>
            <li>Exit near the tramway pavilion, then dip back to the <strong>canal towpath</strong>.</li>
            <li>Return to Salts Mill via the canal (either side).</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">Mostly smooth paths; short gentle slopes. Dogs on lead if signed in the park.</p>
        </section>

        {/* 60-minute */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">60-Minute: Five-Rise Taster (out-and-back)</h2>
          <p className="mt-3 text-[#4A4F55]">
            A longer, flat canal stretch towards <em>Bingley Five Rise Locks</em> (you’ll get a teaser, not the full locks).
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>From the mill, head <strong>west</strong> on the towpath for ~30 minutes.</li>
            <li>Turn around when time says—keep an eye on bridges for your bearings.</li>
            <li>Return the same way to the mill.</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">
            All flat; exposed in wind. Carry water on warm days; towpath etiquette with bikes applies.
          </p>
        </section>

        {/* Tips */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Local tips</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li><strong>Golden hour</strong> on the canal is lovely for photos.</li>
            <li><strong>Coffee stops:</strong> Salts Diner, Café in the Opera, Half Moon Café (park).</li>
            <li><strong>Rain plan:</strong> Duck into Salts Mill galleries; all free to browse.</li>
          </ul>
        </section>

        {/* Pet-care CTA */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Visiting with a dog—or need care while you explore?</h2>
          <p className="mt-3 text-[#4A4F55]">
            I’m based in Saltaire and can help with <strong>walks, drop-ins or feeding</strong> for dogs, cats and small
            pets—DBS checked, insured, and I send photo notes after every visit.
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
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking Guide
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
              ['Are the walks suitable for pushchairs?', 'Yes—most paths are flat. The 30-minute loop is the smoothest.'],
              ['Where should I start?', 'Salts Mill courtyard (BD17 7EF). It’s close to parking, cafés and the towpath.'],
              ['Can I do the loops in either direction?', 'Absolutely. Directions are simple and work both ways.'],
              ['Are dogs allowed?', 'Yes. Keep on a lead in busy areas and where signs request it, especially in Roberts Park.'],
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
          <h2 className="text-2xl font-extrabold">Need local pet care while you walk?</h2>
          <p className="mt-2 text-white/85">DBS checked, insured, with photo updates after every visit.</p>
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
              headline: 'Best Saltaire Walks: 30, 45 & 60-Minute Loops',
              author: { '@type': 'Person', name: 'Giuseppe (Saltaire Dogs + Pets)' },
              datePublished: '2025-10-12T09:00:00Z',
              dateModified: '2025-10-12T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/best-saltaire-walks',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Are the walks suitable for pushchairs?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes—most paths are flat. The 30-minute loop is the smoothest.' },
                },
                {
                  '@type': 'Question',
                  name: 'Where should I start?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Salts Mill courtyard (BD17 7EF).' },
                },
                {
                  '@type': 'Question',
                  name: 'Can I do the loops in either direction?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. Directions are simple and work both ways.' },
                },
                {
                  '@type': 'Question',
                  name: 'Are dogs allowed?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes. Keep dogs on a lead in busy areas and where signed.' },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  )
}
