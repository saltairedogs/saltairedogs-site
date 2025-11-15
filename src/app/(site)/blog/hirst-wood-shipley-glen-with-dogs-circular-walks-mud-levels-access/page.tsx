// app/(site)/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access/page.tsx
import Image from "next/image"
import Link from "next/link"

/**
 * Image notes:
 * - Export these variants (or adjust names to what you have):
 *   /hirst-wood-shipley-glen-dog-walks-hero-2560w.avif
 *   /hirst-wood-shipley-glen-dog-walks-hero-2560w.webp
 *   /hirst-wood-shipley-glen-dog-walks-hero-1920w.avif
 *   /hirst-wood-shipley-glen-dog-walks-hero-1920w.webp
 *   /hirst-wood-shipley-glen-dog-walks-hero-1280w.avif
 *   /hirst-wood-shipley-glen-dog-walks-hero-1280w.webp
 *   /hirst-wood-shipley-glen-dog-walks-hero.png   (master fallback 3200×1600+)
 */

export const metadata = {
  title:
    "Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access",
  description:
    "Three circular dog walks linking Hirst Wood, the River Aire, canal towpath and Shipley Glen. Mud levels by season, access/parking, hazards (livestock/cyclists), and where to find drier paths after rain.",
  alternates: {
    canonical:
      "https://saltairedogs.uk/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access",
  },
  keywords: [
    "Hirst Wood dog walk",
    "Shipley Glen with dogs",
    "Hirst Lock towpath dogs",
    "mud levels Saltaire walks",
    "quiet dog walks Saltaire",
  ],
  openGraph: {
    title:
      "Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access",
    description:
      "30/45/70-minute dog-friendly circuits from Saltaire and Hirst Wood—what’s muddy, what’s firm, and how to avoid the busy bits.",
    type: "article",
    url: "https://saltairedogs.uk/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access",
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-22T09:00:00Z"
  const PUBLISHED_HUMAN = "22 Oct 2025"
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I’m in Saltaire/Hirst Wood. Could you help with dog walks or drop-ins on [dates/times]? My street is [your street]."
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* -------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              media="(min-width: 1280px)"
              type="image/avif"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-2560w.avif"
            />
            <source
              media="(min-width: 1280px)"
              type="image/webp"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-2560w.webp"
            />
            <source
              media="(min-width: 768px)"
              type="image/avif"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-1920w.avif"
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-1920w.webp"
            />
            <source
              type="image/avif"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-1280w.avif"
            />
            <source
              type="image/webp"
              srcSet="/hirst-wood-shipley-glen-dog-walks-hero-1280w.webp"
            />
            <Image
              src="/hirst-wood-shipley-glen-dog-walks-hero.png"
              alt="Hirst Wood path toward Shipley Glen at golden hour—woodland edge and firm track"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* readable overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_45%_36%,rgba(0,0,0,0.30),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Dog walks
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access
            </h1>
            <p className="mt-3 text-lg text-white/90">
              30/45/70-minute circuits linking Hirst Wood, the Aire, the Leeds–Liverpool
              canal and Shipley Glen. What’s firm after rain, what gets muddy, and the easy
              access points with parking.
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

      {/* -------------------------------- BODY -------------------------------- */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          These routes start near <strong>Hirst Lock / Hirst Wood</strong> and loop the{" "}
          <em>river path</em>, <em>canal towpath</em>, and the edge of{" "}
          <strong>Shipley Glen</strong>. You’ll find a firm fallback even after
          heavy rain, plus quieter tracks to avoid the busiest pinch points.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#routes" className="underline underline-offset-4">3 circular routes (30 / 45 / 70 mins)</a></li>
            <li><a href="#mud" className="underline underline-offset-4">Mud levels by season & fallback surfaces</a></li>
            <li><a href="#access" className="underline underline-offset-4">Access & parking (Hirst Lock, Glen, towpath)</a></li>
            <li><a href="#rules" className="underline underline-offset-4">Lead rules, hazards & etiquette</a></li>
            <li><a href="#facilities" className="underline underline-offset-4">Cafés, loos, water & bins</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Need help with walks while you’re busy?</a></li>
          </ol>
        </nav>

        {/* Routes */}
        <section id="routes" className="mt-12">
          <h2 className="text-2xl font-bold">Three circular routes</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Name", "Time", "Surface", "Summary"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  [
                    "Hirst Lock Short",
                    "≈ 30 mins",
                    "Mostly firm towpath",
                    "Start Hirst Lock → east along towpath → turn at the footbridge → return on same side or cross and loop via Roberts Park paths.",
                  ],
                  [
                    "Wood & Water Loop",
                    "≈ 45 mins",
                    "Mixed (firm towpath + woodland)",
                    "Towpath from Hirst Lock → drop to riverside path by Hirst Wood → rejoin canal near the swing bridge → back to start.",
                  ],
                  [
                    "Shipley Glen Circuit",
                    "≈ 70 mins",
                    "Mixed, some rocky/muddy",
                    "From Hirst Wood climb to the Glen (tracks near the tramway) → woodland edge paths → descend towards Baildon/Prod Lane and loop back via towpath.",
                  ],
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
            Tip: save “Hirst Lock” and “Shipley Glen Tramway” in your maps app. If the woods look muddy,
            stick to the towpath and park paths for a clean-paws loop.
          </p>
        </section>

        {/* Mud levels */}
        <section id="mud" className="mt-12">
          <h2 className="text-2xl font-bold">Mud levels by season & fallback</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Autumn–Winter</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li><strong>Hirst Wood riverside</strong> can be claggy; expect puddles after prolonged rain.</li>
                <li><strong>Fallback:</strong> towpath (grit/stone) + park hard paths. Avoid steep Glen descents in very wet spells.</li>
                <li>Wipe-down station: bring a small towel in a zip bag for paws/tummies post-walk.</li>
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Spring–Summer</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Woodland dries well after 24–48 h of fair weather; roots/rocks remain uneven.</li>
                <li><strong>Busy times:</strong> sunny evenings + weekends on the towpath; take the Glen edge for space.</li>
                <li>Shade & water available along woodland and river; carry extra in heat.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Access & Parking */}
        <section id="access" className="mt-12">
          <h2 className="text-2xl font-bold">Access & parking</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Spot", "Postcode", "Notes"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Hirst Lock / Hirst Wood", "BD18 4ND", "Towpath access, woodland entrances; limited on-street parking—be considerate."],
                  ["Shipley Glen (lower access)", "BD17 5BN", "Paths to the Glen; some roadside spaces; check signs."],
                  ["Roberts Park (overflow option)", "BD17 5RH", "Hard-path network; nice add-on to shorten muddy sections."],
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
            Public transport: trains to <strong>Saltaire</strong> station (then 10–15 mins walk to Hirst Lock) or
            buses up to Baildon/Prod Lane for Shipley Glen access.
          </p>
        </section>

        {/* Rules & hazards */}
        <section id="rules" className="mt-12">
          <h2 className="text-2xl font-bold">Lead rules, hazards & etiquette</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Lead & right-of-way</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Towpath is shared with cyclists—<strong>lead on</strong> when busy; keep right and cue sit-to-side for trains of bikes.</li>
                <li>Near livestock (occasional in Glen edges): keep dogs on lead and give wide berth.</li>
                <li>Recall practice? Use quiet woodland spurs; avoid blind bends and steep drops.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Seasonal notes</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li><strong>High water</strong> after storms—stay off river margins that undercut; use towpath/park network.</li>
                <li><strong>Nesting birds</strong> Spring: keep curious noses out of bramble edges.</li>
                <li>Evening midges near water—pack a quick wipe for face/ears if your dog is sensitive.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section id="facilities" className="mt-12">
          <h2 className="text-2xl font-bold">Cafés, water & bins</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Water taps at some moorings (seasonal); carry a collapsible bowl.</li>
            <li>Bins around Roberts Park and near Hirst Lock; pack out if none on the woodland side.</li>
            <li>Saltaire cafés (downstream) welcome dogs outdoors; weekends get busy—go early.</li>
          </ul>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-12 rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <h2 className="text-2xl font-bold">Need reliable help with dog walks?</h2>
          <p className="mt-3 text-[#4A4F55]">
            I’m local to Saltaire/Hirst Wood—DBS checked, insured, and I send a short photo note after every walk.
            From quick canal loops to longer Glen circuits, we’ll match the route to your dog and the day’s conditions.
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
              className="inline-flex items-center justify-center rounded-xl border border-[#E6E3DA] bg-white px-5 py-3 text-base font-semibold text-[#131415] hover:bg-[#FAFAF9]"
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
              <Link href="/blog/roberts-park-dog-walks-safe-routes-off-lead-areas-and-parking-tips" className="underline underline-offset-4 hover:no-underline">
                Roberts Park Dog Walks: safe routes, off-lead areas & parking tips
              </Link>
            </li>
            <li>
              <Link href="/blog/leeds-liverpool-canal-walks-in-saltaire-dog-safety-etiquette-busy-times" className="underline underline-offset-4 hover:no-underline">
                Canal Walks in Saltaire: safety, etiquette & busy times
              </Link>
            </li>
            <li>
              <Link href="/blog/rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear" className="underline underline-offset-4 hover:no-underline">
                Rainy-Day Dog Walks: low-mud paths, towpath alternatives & gear
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Local, calm dog walks in Saltaire</h2>
          <p className="mt-2 text-white/85">
            Owner-led, insured and DBS checked. We keep routes sensible for the weather and your dog’s energy.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#131415" }}
            >
              Get a WhatsApp quote
            </a>
            <Link
              href="/dog-walking/saltaire"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
            >
              Dog walking in Saltaire
            </Link>
          </div>
        </section>
      </article>

      {/* ----------------------- STRUCTURED DATA (Article) -------------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Hirst Wood & Shipley Glen with Dogs: Circular Walks, Mud Levels & Access",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage:
                "https://saltairedogs.uk/blog/hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access",
              image: [
                "https://saltairedogs.uk/hirst-wood-shipley-glen-dog-walks-hero-2560w.avif",
                "https://saltairedogs.uk/hirst-wood-shipley-glen-dog-walks-hero-2560w.webp",
                "https://saltairedogs.uk/hirst-wood-shipley-glen-dog-walks-hero.png",
              ],
              keywords:
                "Hirst Wood dog walk, Shipley Glen with dogs, towpath Saltaire dogs, mud levels Saltaire walks, quiet dog walks Saltaire",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is the Hirst Wood riverside path muddy in winter?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Often, yes—expect puddles after rain. Use the canal towpath and park hard paths as a cleaner fallback, then rejoin woodland where firm.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where should dogs be on lead?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Keep dogs on lead along the towpath when busy with cyclists, and near any livestock on the Glen edges. Choose quieter woodland spurs for recall practice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Best parking for these loops?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Hirst Lock (BD18 4ND) for towpath/woodland starts, Shipley Glen lower access (BD17 5BN) for Glen circuits, and Roberts Park (BD17 5RH) as a hard-path alternative.",
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
