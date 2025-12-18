// app/(site)/blog/roberts-park-perfect-dog-walk/page.tsx
import Image from "next/image"
import Link from "next/link"

/* -----------------------------------------------------------------------------
  SEO
----------------------------------------------------------------------------- */
export const metadata = {
  title: "Roberts Park: The Perfect Dog Walk (20/35/50-Minute Loops, Cafés & Tips)",
  description:
    "A calm, step-by-step dog walk in Roberts Park, Saltaire: 20/35/50-minute loops, where to park, toilets & cafés, lead rules, water stops, quiet times, accessibility and safety tips.",
  keywords: [
    "Roberts Park dog walk",
    "Saltaire dog walk",
    "best dog walks Saltaire",
    "lead rules Saltaire",
    "Roberts Park parking",
    "family friendly walk Saltaire",
  ],
  alternates: { canonical: "https://saltairedogs.uk/blog/roberts-park-perfect-dog-walk" },
  openGraph: {
    title: "Roberts Park: The Perfect Dog Walk (20/35/50-Minute Loops, Cafés & Tips)",
    description:
      "Three easy loops from Roberts Park with toilets & cafés, quiet-time pointers, lead rules and dog-friendly tips.",
    type: "article",
    publishedTime: "2025-10-22T09:00:00Z",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    images: [
      { url: "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif" },
      { url: "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp" },
      { url: "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.png" },
    ],
  },
}

/* -----------------------------------------------------------------------------
  Page
----------------------------------------------------------------------------- */
export default function Page() {
  const PUBLISHED_ISO = "2025-10-22T09:00:00Z"
  const PUBLISHED_HUMAN = "22 Oct 2025"

  const WA = `https://wa.me/447424208127?text=${encodeURIComponent(
    "Hi! I'm in/visiting Saltaire and would like a local dog walk or drop-in on [dates/times]."
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              media="(min-width:1280px)"
              type="image/avif"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif"
            />
            <source
              media="(min-width:1280px)"
              type="image/webp"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp"
            />
            <source
              media="(min-width:768px)"
              type="image/avif"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1920w.avif"
            />
            <source
              media="(min-width:768px)"
              type="image/webp"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1920w.webp"
            />
            <source
              type="image/avif"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1280w.avif"
            />
            <source
              type="image/webp"
              srcSet="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-1280w.webp"
            />
            <Image
              src="/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.png"
              alt="Roberts Park & the Leeds–Liverpool canal by Salts Mill at golden hour"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </picture>
          {/* Legibility scrims */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_42%_36%,rgba(0,0,0,0.30),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Dog walks
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Roberts Park: the perfect dog walk (loops, cafés & tips)
            </h1>
            <p className="mt-3 text-lg text-white/90">
              20/35/50-minute circuits from the bandstand over the footbridges and along the canal—where to park, quiet
              times, toilets & lead rules.
            </p>
            <p className="mt-2 text-sm text-white/80">
              By <strong>Giuseppe</strong>, owner – <em>Saltaire Dogs + Pets</em> •{" "}
              <time dateTime={PUBLISHED_ISO}>Published {PUBLISHED_HUMAN}</time>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
                style={{ backgroundColor: "#C89B3C", color: "#131415" }}
              >
                WhatsApp: local dog walks
              </a>
              <Link
                href="/blog/best-saltaire-walks"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Best Saltaire walks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          If you’ve only got time for one walk in Saltaire, make it <strong>Roberts Park</strong>. It’s flat, scenic and
          easy to customise—perfect for puppies, visiting family and senior dogs. Below are three simple circuits,
          places for coffee and loos, where to park, and the local dog rules.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#loops" className="underline underline-offset-4">20/35/50-minute loops (step-by-step)</a></li>
            <li><a href="#cafes" className="underline underline-offset-4">Cafés, toilets & water points</a></li>
            <li><a href="#parking" className="underline underline-offset-4">Parking & access</a></li>
            <li><a href="#rules" className="underline underline-offset-4">Lead rules & busy times</a></li>
            <li><a href="#access" className="underline underline-offset-4">Accessibility notes</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Need a hand with walks?</a></li>
          </ol>
        </nav>

        {/* Loops */}
        <section id="loops" className="mt-12">
          <h2 className="text-2xl font-bold">20/35/50-minute loops</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">20-minute: Park classic</h3>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>Start at the <strong>bandstand</strong>.</li>
                <li>Walk the riverside promenade to the <strong>footbridge</strong> (toward the mill).</li>
                <li>Cross, then loop the central lawns and return via the playground edge.</li>
              </ol>
              <p className="mt-2 text-[#7B828A]">Flat, paved; great for buggies and older dogs.</p>
            </div>

            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">35-minute: Canal & park</h3>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>From the bandstand, cross the <strong>footbridge</strong> to Salts Mill.</li>
                <li>Turn left to the <strong>canal</strong>; walk 10–12 minutes toward Bingley.</li>
                <li>Cross back over the river at the next bridge; re-enter the park.</li>
              </ol>
              <p className="mt-2 text-[#7B828A]">Mixed towpath + park; mostly firm even after rain.</p>
            </div>

            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">50-minute: Glen taster</h3>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-[#4A4F55]">
                <li>Footbridge to the mill, left to canal then right up to <strong>Shipley Glen tramway</strong>.</li>
                <li>Climb the short slope to the <strong>Glen edge</strong> and loop the woodland paths.</li>
                <li>Return gently to the park via the promenade.</li>
              </ol>
              <p className="mt-2 text-[#7B828A]">Some gradients & roots; avoid after heavy rain with wheels.</p>
            </div>
          </div>
        </section>

        {/* Cafés / Toilets */}
        <section id="cafes" className="mt-12">
          <h2 className="text-2xl font-bold">Cafés, toilets & water points</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <strong>Half Moon Café (in-park)</strong> – dog-friendly outside; simple hot drinks, cakes & snacks.
            </li>
            <li>
              <strong>Salts Mill</strong> – for indoor cafés, cross the footbridge; check individual dog policies.
            </li>
            <li>
              <strong>Toilets</strong> – park block near the Half Moon (usually open daytime); additional facilities at the mill.
            </li>
            <li>
              <strong>Water</strong> – bring a collapsible bowl; seasonal taps by the café, else ask staff.
            </li>
          </ul>
        </section>

        {/* Parking */}
        <section id="parking" className="mt-12">
          <h2 className="text-2xl font-bold">Parking & easy starts</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Location", "Postcode", "Notes"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Salts Mill visitor car park", "BD17 7EF", "Closest to the footbridge; busiest weekends/events."],
                  ["Exhibition Road (pay & display)", "BD18 3JN", "Reliable fallback; 6–8 minutes to the park."],
                  ["On-street bays around Victoria Road", "—", "Always check local signs; time limits may apply."],
                ].map((row) => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: "#EFEDE7" }}>
                    {row.map((cell, i) => (
                      <td key={i} className="py-2 pr-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-[#7B828A]">
            Visiting at peak? Arrive before 10:30 or after 15:30 for the best chance at the mill car park.
          </p>
        </section>

        {/* Rules */}
        <section id="rules" className="mt-12">
          <h2 className="text-2xl font-bold">Lead rules & busy times</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <strong>Lead in the park</strong>: keep dogs under close control; near play areas and events use a short lead.
            </li>
            <li>
              <strong>Towpath etiquette</strong>: keep right, short lead at blind bends; give way to cyclists & anglers.
            </li>
            <li>
              <strong>Busy</strong>: sunny Saturdays 11:00–15:00, school holidays, and event days (festivals, markets).
            </li>
            <li>
              <strong>Quieter</strong>: early mornings, weekday afternoons outside school pick-up, and cooler days.
            </li>
          </ul>
        </section>

        {/* Accessibility */}
        <section id="access" className="mt-12">
          <h2 className="text-2xl font-bold">Accessibility notes</h2>
          <p className="mt-3 text-[#4A4F55]">
            The 20-minute loop is <em>fully paved and step-free</em> with gentle gradients. The canal has a compacted
            grit surface—fine for most pushchairs. The Glen paths include <em>roots and short slopes</em>; choose dry
            days or stick to the park if using wheels.
          </p>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-12 rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <h2 className="text-2xl font-bold">Need a hand with walks?</h2>
          <p className="mt-3 text-[#4A4F55]">
            We’re local to Saltaire—<strong>DBS checked & insured</strong>. If you’re busy or visiting, we can do
            <strong> calm, on-lead walks</strong> around Roberts Park or the canal, with a short photo note after each
            visit.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#131415" }}
            >
              WhatsApp a quick request
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-base font-semibold"
              style={{ borderColor: "#E6E3DA", color: "#131415" }}
            >
              Contact
            </Link>
          </div>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/best-saltaire-walks" className="underline underline-offset-4 hover:no-underline">
                Best Saltaire Walks: 30/45/60-minute loops
              </Link>
            </li>
            <li>
              <Link
                href="/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access"
                className="underline underline-offset-4 hover:no-underline"
              >
                Hirst Wood & Shipley Glen with dogs: circulars, mud levels & access
              </Link>
            </li>
            <li>
              <Link href="/blog/saltaire-parking-guide" className="underline underline-offset-4 hover:no-underline">
                Saltaire Parking Guide: free at Salts Mill + streets & Sundays
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Calm, local dog care in Saltaire</h2>
          <p className="mt-2 text-white/85">
            Walks, drop-ins and feeding for dogs, cats and small pets—photo notes after every visit.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#131415" }}
            >
              60-second WhatsApp quote
            </a>
            <Link
              href="/dog-walking"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
            >
              Dog-walking service
            </Link>
          </div>
        </section>
      </article>

      {/* SCHEMA: Article + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Roberts Park: The Perfect Dog Walk (20/35/50-Minute Loops, Cafés & Tips)",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: "https://saltairedogs.uk/blog/roberts-park-perfect-dog-walk",
              image: [
                "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-leeds-liverpool-canal-salts-mill-golden-hour-hero.png",
              ],
              keywords:
                "Roberts Park dog walk, Saltaire dog friendly, Saltaire canal walk, Shipley Glen walk, family walk Saltaire, toilets café parking",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long is a typical Roberts Park dog walk?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "You can do 20, 35 or 50-minute circuits. The shortest loop stays inside the park; the longer routes add the canal or a short Shipley Glen taster.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the route pram or wheelchair friendly?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "The park loop is fully paved and step-free. The canal towpath is compacted grit and generally firm. The Shipley Glen section includes roots and short slopes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where can I park for Roberts Park?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Try the Salts Mill visitor car park (BD17 7EF). If full, Exhibition Road (BD18 3JN) is a reliable pay-and-display fallback.",
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
