// app/(site)/blog/first-time-guide-to-saltaire/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'First-Timer’s Guide to Saltaire: Parking, Walks, Food, Map & Must-Sees',
  description:
    'Planning your first trip to Saltaire? Local, no-nonsense guide to Salts Mill, Roberts Park, the Leeds & Liverpool Canal, parking, cafés, Shipley Glen Tramway and easy itineraries.',
  alternates: { canonical: 'https://saltairedogs.uk/blog/first-time-guide-to-saltaire' },
  authors: [{ name: 'Saltaire Dogs + Pets' }],
  openGraph: {
    title: 'First-Timer’s Guide to Saltaire',
    description:
      'Local, no-nonsense guide to Salts Mill, Roberts Park, the canal, parking, cafés and easy itineraries.',
    type: 'article',
    authors: ['Saltaire Dogs + Pets'],
    publishedTime: '2025-10-10T09:00:00Z',
  },
}

export default function Page() {

  const PUBLISHED_ISO = '2025-10-10T09:00:00Z' // 10 Oct 2025
  const PUBLISHED_HUMAN = '10 Oct 2025'

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* --- HERO ----------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/saltaire-salts-mill-facade-golden-hour-hero-2560w.avif"
            alt="Salts Mill façade at golden hour, Saltaire — warm sandstone with clear sky"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
            className="object-cover"
          />
          {/* readable overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_620px_at_38%_36%,rgba(0,0,0,0.30),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • First-timer’s guide
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              The Complete First-Timer’s Guide to Saltaire
            </h1>
            <p className="mt-3 text-lg text-white/90">
              What to see, where to park, where to eat—and the best short walks. Local, practical, and easy to follow.
            </p>

            {/* Byline */}
            <p className="mt-2 text-sm text-white/80">
              By <em>Saltaire Dogs + Pets</em>{' '}
              <span aria-hidden="true">•</span>{' '}
              <time dateTime={PUBLISHED_ISO}>Published {PUBLISHED_HUMAN}</time>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
                style={{ backgroundColor: '#C89B3C', color: '#131415' }}
              >
                Get in touch
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Browse more Saltaire posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- ARTICLE BODY --------------------------------------------------- */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          There are places that feel “kept perfectly,” and Saltaire is one of them. A Victorian model village turned
          UNESCO World Heritage Site—still lived in, still creative, and very walkable. If it’s your first time, this
          page gets you around without fuss.
        </p>

        {/* Quick facts card */}
        <div className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-base font-semibold">Quick facts</h2>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <table className="w-full table-fixed border-collapse text-[14px]">
              <tbody>
                {[
                  ['Where', '4 miles north of Bradford, on the River Aire'],
                  ['Best first stop', 'Salts Mill (free to enter)'],
                  ['Flat walks', 'Leeds & Liverpool Canal towpath'],
                  ['Green space', 'Roberts Park (Victorian riverside park)'],
                  ['Parking', 'Free at Salts Mill for visitors (try here first)'],
                  ['Train', 'Direct from Leeds & Bradford — station is in the village'],
                  ['Toilets', 'Inside Salts Mill and in Roberts Park (seasonal)'],
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
                  ['Good with dogs?', 'Yes—keep on lead in busy areas and in the park when signed'],
                  ['Half-day plan', 'Mill → Village streets → Park → Canal loop'],
                  ['Full day', 'Add Shipley Glen Tramway & longer canal section'],
                  ['Accessibility', 'Plenty of flat routes; some cobbles; step-free canal'],
                  ['Free highlights', 'Mill galleries, park, canal, village architecture'],
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

        {/* Must-see */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Must-see Saltaire (first visit)</h2>
          <div className="mt-4 space-y-6 leading-relaxed text-[#4A4F55]">
            <p>
              <strong>Salts Mill.</strong> A vast, beautifully restored mill that now houses shops, restaurants and the
              1853 Gallery featuring David Hockney. It’s free to enter—ideal if the weather turns.
            </p>
            <p>
              <strong>Roberts Park.</strong> Cross the River Aire to a classic Victorian park—bandstand, cricket on fine
              days, and riverside paths for a breather.
            </p>
            <p>
              <strong>Leeds & Liverpool Canal.</strong> Flat, scenic and easy: head west for quiet stretches or set out
              towards the famous Bingley Five Rise Locks if you want a longer walk.
            </p>
            <p>
              <strong>Village architecture.</strong> Take a slow loop of the model village. Houses change in size and
              detail with the old job grades—spot the differences.
            </p>
          </div>
        </section>

        {/* Getting there & parking */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Planning your visit</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">How to get here</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>
                  <strong>Train:</strong> Easiest option. Saltaire station is a short walk from the mill; frequent
                  services from Leeds & Bradford.
                </li>
                <li>
                  <strong>Car:</strong> Use postcode <em>BD17 7EF</em> for Salts Mill. Traffic can build on sunny
                  weekends—arrive earlier if you can.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold underline underline-offset-4">Parking tips</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>
                  <strong>Free at Salts Mill</strong> for visitors—try here first.
                </li>
                <li>
                  Exhibition Road and other pay-and-display options exist if the mill is full.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Easy itineraries */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Two easy itineraries</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold">Half Day (3–4 hrs)</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>Explore Salts Mill (1853 Gallery, bookshop, Salts Diner).</li>
                <li>Village streets loop—note the changing house types.</li>
                <li>Cross to Roberts Park for a stroll &amp; coffee at Half Moon Café.</li>
                <li>Short canal section for photos; back via the river.</li>
              </ol>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: '#E6E3DA' }}>
              <h3 className="text-base font-semibold">Full Day</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>All of the half-day plan.</li>
                <li>Extend the canal walk towards Bingley or Baildon.</li>
                <li>Ride the historic Shipley Glen Tramway above the park.</li>
                <li>Finish with a pint at SALT Beer Factory or riverside views at The Boathouse.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Food & drink */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Food & drink (solid picks)</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[#4A4F55]">
            <li>
              <strong>Inside Salts Mill:</strong> <em>Salts Diner</em> and the <em>Café in the Opera</em>.
            </li>
            <li>
              <strong>Riverside:</strong> <em>The Boathouse</em> for views; <em>SALT Beer Factory</em> for craft beer &amp;
              pizza; <em>Don’t Tell Titus</em> for a grown-up evening.
            </li>
            <li>
              <strong>In Roberts Park:</strong> <em>Half Moon Café</em>.
            </li>
          </ul>
        </section>

        {/* Pet-friendly hook */}
        <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E6E3DA' }}>
          <h2 className="text-2xl font-bold">Bringing a dog—or need care while you visit?</h2>
          <p className="mt-3 text-[#4A4F55]">
            Saltaire is very walkable for dogs (lead recommended in busy areas). If you’re staying nearby and need{' '}
            <strong>walks, drop-ins or feeding</strong>—for dogs, cats or small pets—get in touch and we'll
            reply with times that fit.
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

        {/* History snapshot */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Why Saltaire matters (super quick)</h2>
          <p className="mt-3 leading-relaxed text-[#4A4F55]">
            Saltaire was built from 1851 by Sir Titus Salt to give mill workers safer homes and a healthier life away
            from Bradford’s slums. Not just housing—hospitals, schools, baths, a library and park. It’s one of the best
            preserved model villages anywhere, which is why UNESCO listed it.
          </p>
        </section>

        {/* Related reads */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Next reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking: where to park, times & locals’ tips
              </Link>
            </li>
            <li>
              <Link href="/blog/best-saltaire-walks" className="underline underline-offset-4 hover:no-underline">
                Best Saltaire Walks: 30/45/60-minute loops with maps
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
              [
                'Is Salts Mill free to enter?',
                'Yes. The galleries and shops are free. You’ll just pay for food or anything you buy.',
              ],
              [
                'Where can I park?',
                'Start with the Salts Mill car park (free for visitors). If full, try Exhibition Road and nearby pay-and-display options.',
              ],
              [
                'How long do I need?',
                'Allow half a day for the mill, streets and park. A full day if you want the tramway and a longer canal walk.',
              ],
              [
                'Are dogs allowed?',
                'Around the village and canal, yes—keep on a lead in busy spots and follow signs in Roberts Park and around the mill.',
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
          <h2 className="text-2xl font-extrabold">Need local pet care while you explore?</h2>
          <p className="mt-2 text-white/85">
            I’m based in Saltaire—DBS checked, insured, and I send photo notes after every visit.
          </p>
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

      {/* FAQPage + Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is Salts Mill free to enter?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. The galleries and shops are free. You’ll just pay for food or anything you buy.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where can I park?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Start with the Salts Mill car park (free for visitors). If full, try Exhibition Road and nearby pay-and-display options.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long do I need?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Allow half a day for the mill, streets and park. A full day if you want the tramway and a longer canal walk.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are dogs allowed?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Around the village and canal, yes—keep on a lead in busy spots and follow signs in Roberts Park and around the mill.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'The Complete First-Timer’s Guide to Saltaire',
              author: { '@type': 'Organization', name: 'Saltaire Dogs + Pets' },
              datePublished: '2025-10-10T09:00:00Z',
              dateModified: '2025-10-10T09:00:00Z',
              image: 'https://saltairedogs.uk/saltaire-salts-mill-facade-golden-hour-hero-2560.avif',
              mainEntityOfPage: 'https://saltairedogs.uk/blog/first-time-guide-to-saltaire',
            },
          ]),
        }}
      />
    </main>
  )
}
