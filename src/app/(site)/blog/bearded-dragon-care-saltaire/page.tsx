// app/(site)/blog/bearded-dragon-care-saltaire/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Bearded Dragon Care in Saltaire: Heating, UVB, Diet, Routine & Holiday Cover',
  description:
    'Local, practical care guide for bearded dragons: vivarium size, temperature gradients, UVB lighting, safe foods, weekly routines, and a simple holiday checklist — plus Saltaire-based feeding & welfare visits.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/bearded-dragon-care-saltaire' },
  authors: [{ name: 'Giuseppe (Saltaire Dogs + Pets)' }],
  openGraph: {
    title: 'Bearded Dragon Care in Saltaire',
    description:
      'Heating & UVB made simple, safe diet lists, weekly routines, and a calm holiday checklist — with local reptile-savvy visits in Saltaire.',
    type: 'article',
    authors: ['Giuseppe (Saltaire Dogs + Pets)'],
    publishedTime: '2025-10-16T09:00:00Z',
    images: [
  { url: 'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero-2560w.avif' },
  { url: 'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero-2560w.webp' },
  { url: 'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero.webp' },
    ],
  },
}

export default function Page() {
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I'm in Saltaire. I have a bearded dragon and I’d like a quick quote for feeding/UVB/temperature checks on [dates/times]."
  )}`
  const PUBLISHED_ISO = '2025-10-16T09:00:00Z'
  const PUBLISHED_HUMAN = '16 Oct 2025'

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              type="image/avif"
              srcSet={[
                '/saltaire-bearded-dragon-care-hero-1280w.avif 1280w',
                '/saltaire-bearded-dragon-care-hero-1920w.avif 1920w',
                '/saltaire-bearded-dragon-care-hero-2560w.avif 2560w',
                '/saltaire-bearded-dragon-care-hero.avif 3840w',
              ].join(', ')}
            />
            <source
              type="image/webp"
              srcSet={[
                '/saltaire-bearded-dragon-care-hero-1280w.webp 1280w',
                '/saltaire-bearded-dragon-care-hero-1920w.webp 1920w',
                '/saltaire-bearded-dragon-care-hero-2560w.webp 2560w',
                '/saltaire-bearded-dragon-care-hero.webp 3840w',
              ].join(', ')}
            />
            <Image
              src="/saltaire-bearded-dragon-care-hero.webp"
              alt="Bearded dragon in a naturalistic vivarium—accurate lighting and basking platform"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVGRTgiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* readable overlay for hero text */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_45%_38%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Bearded dragon care
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Bearded Dragon Care in Saltaire: Heating, UVB, Diet & Holiday Cover
            </h1>
            <p className="mt-3 text-lg text-white/90">
              A calm, no-nonsense setup for healthy dragons: correct basking temps, real UVB, safe greens & insects, and
              a simple routine you can actually keep.
            </p>
            <p className="mt-2 text-sm text-white/80">
              By <strong>Giuseppe</strong>, owner – <em>Saltaire Dogs + Pets</em> •{' '}
              <time dateTime={PUBLISHED_ISO}>Published {PUBLISHED_HUMAN}</time>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
                style={{ backgroundColor: '#C89B3C', color: '#131415' }}
              >
                WhatsApp: bearded dragon visit
              </a>
              <Link
                href="/blog/exotic-pet-holiday-checklist-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Holiday checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Bearded dragons thrive when three basics are right: <strong>space</strong>, a <strong>heat gradient</strong>{' '}
          (with a real basking spot), and <strong>UVB</strong> they can actually use. Add a steady feeding routine and
          you’re 90% there.
        </p>

        {/* Quick Answer Card */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
            <h2 className="text-base font-semibold">Quick answer</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <table className="w-full table-fixed border-collapse text-[14px]">
                <tbody>
                  {[
                    ['Vivarium (adult)', 'Min ~120×60×60 cm (4×2×2 ft) with top ventilation'],
                    ['Basking surface', '38–42°C (100–108°F) at the spot; bright visible light'],
                    ['Cool end', '24–27°C (75–80°F); night ~18–21°C (64–70°F) if room allows'],
                    ['UVB', 'Linear T5 10–12% across 2/3 of length; correct distance & reflector'],
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
                    ['Diet (adult)', 'Primarily greens/veg; insects as treats (2–3×/week)'],
                    ['Supplements', 'Calcium (no D3 if strong UVB) + multivit (weekly)'],
                    ['Substrate', 'Solid or packed loose (bioactive ok); avoid dusty/clumpy'],
                    ['Hydration', 'Fresh greens; shallow dish; occasional bath if needed'],
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
              Health concerns or sudden behaviour changes? Contact a qualified reptile vet for advice.
            </p>
          </div>
        </section>

        {/* Setup */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Setup that works (and stays consistent)</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-[#4A4F55]">
            <p>
              <strong>Space:</strong> Adults do best in <em>at least</em> a 4×2×2 ft enclosure with clutter-free
              basking-to-cool zones. Add a raised basking platform to hit temps without overheating the whole tank.
            </p>
            <p>
              <strong>Heat:</strong> Use a bright basking bulb over a stone/wood perch. Aim for{' '}
              <em>38–42°C on the surface</em>, measured with an IR thermometer. Keep a recognisable cool end so the
              dragon can self-regulate.
            </p>
            <p>
              <strong>UVB:</strong> Linear T5 (10–12%) with a reflector across ~⅔ of the length. Position to achieve a
              usable UV gradient (basking under UVB, shade available elsewhere). Replace tubes as per manufacturer life.
            </p>
            <p>
              <strong>Lighting cycle:</strong> 12–14 hours on, 10–12 off. Avoid bright night lights—cool, dark nights
              are normal within safe temps.
            </p>
          </div>
        </section>

        {/* Feeding */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Feeding: simple, steady and varied</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: '#E6E3DA' }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {['Food', 'How often (adult)', 'Notes'].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: '#EFEDE7' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ['Leafy greens (staple)', 'Daily', 'Collards, rocket, mustard, dandelion; rotate; wash well'],
                  ['Other veg', 'Often', 'Squash, peppers; small portions; avoid iceberg'],
                  ['Insects', '2–3×/week', 'Dubia roaches, locusts, crickets; appropriately sized; gut-loaded'],
                  ['Fruit', 'Occasional', 'Small treats only (sugars)'],
                  ['Supplements', 'As labelled', 'Calcium (no D3 if strong UVB) + weekly multivit'],
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
          <p className="mt-3 text-sm text-[#7B828A]">
            Juveniles eat more insects/more frequently. If unsure about age/weight, ask a reptile vet for a feeding plan.
          </p>
        </section>

        {/* Weekly routine */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Weekly routine (5 quick habits)</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Spot-clean daily; deeper clean weekly. Replace soiled substrate sections.</li>
            <li>Check <strong>basking surface temp</strong> and cool-end temp with an IR thermometer.</li>
            <li>Confirm <strong>UVB distance</strong> and tube age; log replacement date.</li>
            <li>Prep varied greens; rotate safe veg; keep insects gut-loaded.</li>
            <li>Weigh monthly; note appetite, stools, shed quality and activity.</li>
          </ol>
        </section>

        {/* Common issues */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Common issues to watch</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <strong>Low temps/UVB:</strong> Lethargy, poor appetite. Re-check bulb strength, distance and basking temp.
            </li>
            <li>
              <strong>Impaction risk:</strong> Loose, dusty substrates or oversized insects. Prioritise safe sizes and
              packed/solid substrates.
            </li>
            <li>
              <strong>Shedding problems:</strong> Offer rough surfaces/branches; ensure hydration via greens and correct
              humidity range for your setup.
            </li>
          </ul>
          <p className="mt-3 text-sm text-[#7B828A]">
            This page is general guidance only—not a medical assessment. If you notice rapid weight loss, severe
            lethargy, sunken eyes, or persistent refusal to eat, seek a reptile vet.
          </p>
        </section>

        {/* Holiday checklist */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Holiday checklist (Saltaire-friendly)</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Before you go</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Write a one-page care sheet (feeding days, bulb types, UVB distance, thermostat setting).</li>
                <li>Pre-portion greens/insects; label days; leave supplements visible.</li>
                <li>Note the IR thermometer location and your target readings.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">What we can do</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Feed per schedule (greens/insects), water dish refresh, light mist if requested.</li>
                <li>Check basking surface temp, cool end, and UVB on/off + distance.</li>
                <li>Photo notes after every visit; message if anything looks off.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local CTA (species-specific) */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Bearded dragon visits in Saltaire</h2>
          <p className="mt-3 text-[#4A4F55]">
            Need a calm, reptile-savvy check-in while you’re away or working late? We can handle{' '}
            <strong>feeding, temperature checks, UVB on/off & distance checks</strong>, and light misting if requested —
            with clear photo updates after every visit.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: '#C89B3C', color: '#131415' }}
            >
              WhatsApp a quick request
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#E6E3DA] bg-white px-5 py-3 text-base font-semibold text-[#131415] hover:bg-[#FAFAF9]"
            >
              Contact
            </Link>
          </div>
        </section>

        {/* Related reads */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/reptile-uvb-heat-setup-saltaire" className="underline underline-offset-4 hover:no-underline">
                Reptile Lighting 101: UVB & Heat Gradients (Simple Diagrams)
              </Link>
            </li>
            <li>
              <Link
                href="/blog/exotic-pet-holiday-checklist-saltaire"
                className="underline underline-offset-4 hover:no-underline"
              >
                Holiday Checklist for Exotic Pets (Saltaire Edition)
              </Link>
            </li>
            <li>
              <Link href="/blog/lizard-care-saltaire" className="underline underline-offset-4 hover:no-underline">
                Lizard Care in Saltaire (Leopard & Crested Gecko Basics)
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
                'What should the basking temperature be?',
                'Aim for 38–42°C on the surface at the basking perch, measured with an IR thermometer; provide a cooler end around 24–27°C.',
              ],
              [
                'Do I need UVB if my room is bright?',
                'Yes—room light isn’t UVB. Use a linear T5 UVB tube with reflector, positioned for a safe, usable UV gradient.',
              ],
              [
                'How often should adult dragons eat insects?',
                'Generally 2–3 times per week alongside daily greens/veg. Juveniles eat insects more often.',
              ],
              [
                'Can you visit twice per day when I’m away?',
                'Yes—morning/evening slots are possible subject to schedule. Message us on WhatsApp for availability.',
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
          <h2 className="text-2xl font-extrabold">Need reliable dragon care in Saltaire?</h2>
          <p className="mt-2 text-white/85">Feeding, temps & UVB checks, photo notes every visit — calm and consistent.</p>
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
              headline: 'Bearded Dragon Care in Saltaire: Heating, UVB, Diet & Holiday Cover',
              author: { '@type': 'Person', name: 'Giuseppe (Saltaire Dogs + Pets)' },
              datePublished: '2025-10-16T09:00:00Z',
              dateModified: '2025-10-16T09:00:00Z',
              image: [
                'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero-2560w.avif',
                'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero-2560w.webp',
                'https://saltairedogs.uk/saltaire-bearded-dragon-care-hero.webp',
              ],
              mainEntityOfPage: 'https://saltairedogs.uk/blog/bearded-dragon-care-saltaire',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What should the basking temperature be?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Aim for 38–42°C on the surface at the basking perch, measured with an IR thermometer; provide a cooler end around 24–27°C.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do I need UVB if my room is bright?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes—room light isn’t UVB. Use a linear T5 UVB tube with reflector, positioned for a safe, usable UV gradient.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How often should adult dragons eat insects?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Generally 2–3 times per week alongside daily greens/veg. Juveniles eat insects more often; ask a reptile vet for specific guidance.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can you visit twice per day when I’m away?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes—morning/evening slots are possible subject to schedule. Message us on WhatsApp for availability.',
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
