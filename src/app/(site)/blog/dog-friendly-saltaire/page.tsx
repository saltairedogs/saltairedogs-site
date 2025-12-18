// app/(site)/blog/dog-friendly-saltaire/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Dog-Friendly Saltaire: Cafés, Walks, Rules, Vets & Quiet Spots',
  description:
    'Local guide to dog-friendly Saltaire: the best cafés and pubs, park/canal rules, where to walk, quiet routes, water bowls, waste bins, and nearby vets.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/dog-friendly-saltaire' },
  authors: [{ name: 'Giuseppe (Saltaire Dogs + Pets)' }],
  openGraph: {
    title: 'Dog-Friendly Saltaire',
    description:
      'Cafés, rules, quiet routes and practical tips for visiting Saltaire with a dog—plus local pet care if you need it.',
    type: 'article',
    authors: ['Giuseppe (Saltaire Dogs + Pets)'],
    publishedTime: '2025-10-13T09:00:00Z',
    images: [
  { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif' },
  { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp' },
  { url: 'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp' },
    ],
  },
}

export default function Page() {
  const WA = `https://wa.me/447424208127?text=${encodeURIComponent(
    "Hi! I'm in/visiting Saltaire and might need [walks/drop-ins/feeding] for my pet on [dates]. Can you help?"
  )}`
  const PUBLISHED_ISO = '2025-10-13T09:00:00Z'
  const PUBLISHED_HUMAN = '13 Oct 2025'

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
              alt="Dog-friendly Saltaire—Leeds & Liverpool Canal beside Salts Mill at golden hour"
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
              Saltaire • With dogs
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Dog-Friendly Saltaire: cafés, walks, rules & quiet spots
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Practical, local notes for a chilled day out with your dog—where to walk, grab a coffee, and the small
              rules that keep things smooth.
            </p>
            <p className="mt-2 text-sm text-white/80">
              By <strong>Giuseppe</strong>, owner – <em>Saltaire Dogs + Pets</em> •{' '}
              <time dateTime={PUBLISHED_ISO}>Published {PUBLISHED_HUMAN}</time>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog/best-saltaire-walks"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Best walks
              </Link>
              <Link
                href="/blog/first-time-guide-to-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                First-timer’s guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Saltaire is very walkable: flat towpaths, a riverside park and traffic-calmed streets. Keep dogs on a lead in
          busy areas and wherever signs request it (especially near the bandstand, play areas and events). Water and
          shade are decent in summer along the canal and in the park trees.
        </p>

        {/* Quick reference */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <h2 className="text-xl font-bold">Quick reference</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  {[
                    ['Best short walk', 'Canal towpath loop by Salts Mill (flat)'],
                    ['Green space', 'Roberts Park riverside paths'],
                    ['Quiet times', 'Early morning / late afternoon outside peak weekends'],
                    ['Lead advice', 'On lead in busy spots & where signed'],
                    ['Bins', 'At park entrances, near bandstand, around the village'],
                    ['Water', 'Cafés often offer bowls; canal edge for shade'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-40 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="w-full border-collapse text-[14px]">
                <tbody>
                  {[
                    ['Cafés (dog-friendly)', 'Half Moon Café (park), Salts Diner foyer area, selected Victoria Rd spots'],
                    ['Pub', 'The Boathouse (riverside), SALT Beer Factory (taproom vibe)'],
                    ['Vets nearby', 'Saltaire/Shipley practices within 5–10 mins by car'],
                    ['Surfaces', 'Towpath (grit), park paths, paved streets'],
                    ['Parking', 'Try Salts Mill car park first (visitors)'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                      <th className="w-40 py-2 pr-3 text-left font-medium">{k}</th>
                      <td className="py-2 text-[#4A4F55]">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Walk suggestions */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Easy dog-friendly routes</h2>
          <div className="mt-4 space-y-6 leading-relaxed text-[#4A4F55]">
            <p>
              <strong>Canal & Courtyard (30 mins):</strong> From Salts Mill courtyard, join the canal towpath, head west
              for 10–12 minutes, cross the next bridge and return on the opposite side. Flat, photogenic, simple.
            </p>
            <p>
              <strong>Park & River Loop (45 mins):</strong> Up Victoria Road to the footbridge, circuit Roberts Park
              (bandstand, riverside), then dip back to the canal and return to the mill.
            </p>
            <p>
              <strong>Quiet Streets Taster (25–35 mins):</strong> A loop of the model village back-streets one block off
              Victoria Road—narrower, calmer, nice stone terraces (stay mindful of residents).
            </p>
          </div>
        </section>

        {/* Cafés & pubs */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Dog-friendly cafés & pubs</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <strong>Half Moon Café</strong> (Roberts Park): relaxed outdoor seating; handy mid-walk coffee.
            </li>
            <li>
              <strong>The Boathouse</strong> (riverside): popular pub with Aire views. Busy at peak times.
            </li>
            <li>
              <strong>SALT Beer Factory</strong>: craft taproom vibe; check current dog policy and seating.
            </li>
            <li>
              <strong>Victoria Road strip</strong>: several independents—policies vary; look for bowl/signs at the door.
            </li>
          </ul>
          <p className="mt-3 text-sm text-[#7B828A]">
            Policies can change—if in doubt, ask staff before you settle.
          </p>
        </section>

        {/* Rules & etiquette */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Rules & good etiquette</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Use a <strong>lead</strong> in busy areas, near bridges and wherever signs request it.</li>
            <li>Share the towpath—<strong>step aside</strong> for cyclists and prams on narrow stretches.</li>
            <li>Carry <strong>poo bags</strong> (bins at park entries and around the village).</li>
            <li>Warm days: favour shaded canal sections; bring <strong>water</strong>.</li>
          </ul>
        </section>

        {/* Vets & emergencies */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Nearby vets (for peace of mind)</h2>
          <div className="mt-4 rounded-2xl border bg-white p-4 text-[14px] shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left">
                  {['Area', 'Distance', 'Notes'].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: '#EFEDE7' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ['Saltaire / Shipley', '5–10 mins by car', 'General daytime practices (call ahead).'],
                  ['Bingley / Bradford', '10–20 mins by car', 'Broader choice incl. out-of-hours options.'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: '#EFEDE7' }}>
                    {row.map((cell, i) => (
                      <td key={i} className="py-2 pr-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-[#7B828A]">
              Tip: save your chosen vet’s number in your phone before your walk.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Need calm, local pet care?</h2>
          <p className="mt-3 text-[#4A4F55]">
            Based in Saltaire—<strong>DBS checked</strong>, insured, and I send photo notes after every visit. Walks,
            drop-ins and feeding for dogs, cats and small pets.
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
              <Link href="/blog/best-saltaire-walks" className="underline underline-offset-4 hover:no-underline">
                Best Saltaire Walks: 30/45/60-minute loops
              </Link>
            </li>
            <li>
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking Guide: free, streets & Sundays
              </Link>
            </li>
            <li>
              <Link href="/blog/first-time-guide-to-saltaire" className="underline underline-offset-4 hover:no-underline">
                First-Timer’s Guide to Saltaire
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Want a friendly, reliable local?</h2>
          <p className="mt-2 text-white/85">I can help while you explore—clear updates, calm handling, steady timings.</p>
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
              headline: 'Dog-Friendly Saltaire: Cafés, Walks, Rules, Vets & Quiet Spots',
              author: { '@type': 'Person', name: 'Giuseppe (Saltaire Dogs + Pets)' },
              datePublished: '2025-10-13T09:00:00Z',
              dateModified: '2025-10-13T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/dog-friendly-saltaire',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Are dogs allowed in Roberts Park?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes—keep dogs on a lead where signed, especially near the bandstand and play areas.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is the canal towpath suitable for dogs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes—it’s flat and scenic. Share space with cyclists and keep dogs close near bridges.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where can I find water or shade?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cafés often put bowls out; the canal and park trees offer reliable shade in summer.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What if I need pet care during my visit?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Contact Saltaire Dogs + Pets for walks, drop-ins or feeding with photo updates after every visit.',
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
