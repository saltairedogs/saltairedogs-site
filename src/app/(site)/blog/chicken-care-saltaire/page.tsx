// app/(site)/blog/chicken-care-saltaire/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Chicken & Backyard Flock Checks in Saltaire: Feed, Water, Coop Security & Egg Care",
  description:
    "Local, reliable home-visits for garden hens in Saltaire & Shipley. Daily feed/water, egg collection, coop/runs locked at dusk, health & predator checks. Practical guide to housing, diet, biosecurity and weather safety.",
  keywords: [
    "chicken sitter Saltaire",
    "backyard flock checks Saltaire",
    "hen sitting Shipley",
    "chicken coop security",
    "chicken holiday care",
    "egg collection service Saltaire",
    "chicken feeding schedule layers pellets",
  ],
  alternates: { canonical: "https://saltairedogs.uk/blog/chicken-care-saltaire" },
  authors: [{ name: "Giuseppe (Saltaire Dogs + Pets)" }],
  openGraph: {
    title: "Chicken & Backyard Flock Checks in Saltaire",
    description:
      "Feed & water top-ups, egg collection, coop/runs secured at dusk, predator & health checks—plus a simple holiday plan for garden hens in Saltaire.",
    type: "article",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    publishedTime: "2025-10-18T09:00:00Z",
    images: [
      { url: "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero-2560w.avif", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero-2560w.webp", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero.webp", width: 3200, height: 1600 },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-18T09:00:00Z"
  const PUBLISHED_HUMAN = "18 Oct 2025"
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I’m in Saltaire/Shipley. I have backyard chickens and need home-visits for [dates]. Please include feed/water, egg collection, and locking/unlocking the coop. Thanks!"
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        {/* AVIF → WebP → PNG fallback chain (put these in /public/) */}
        <div className="absolute inset-0 -z-10">
          <picture>
            {/* XL */}
            <source
              media="(min-width: 1280px)"
              type="image/avif"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-2560w.avif"
            />
            <source
              media="(min-width: 1280px)"
              type="image/webp"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-2560w.webp"
            />
            {/* LG */}
            <source
              media="(min-width: 768px)"
              type="image/avif"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-1920w.avif"
            />
            <source
              media="(min-width: 768px)"
              type="image/webp"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-1920w.webp"
            />
            {/* SM */}
            <source
              type="image/avif"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-1280w.avif"
            />
            <source
              type="image/webp"
              srcSet="/saltaire-backyard-chicken-flock-home-visit-hero-1280w.webp"
            />
            <Image
              src="/saltaire-backyard-chicken-flock-home-visit-hero.webp"
              alt="Calm backyard chicken setup in Saltaire—secure walk-in run, clean waterer, layers pellets and happy hens"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* Legibility scrims */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_40%_34%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Backyard flock care
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Chicken & Backyard Flock Checks in Saltaire
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Calm, reliable <em>home-visits</em> so your hens keep their routine—measured feed, fresh water, egg
              collection and coop security checks with a quick photo note after every visit.
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
                WhatsApp: chicken sitter (Saltaire)
              </a>
              <Link
                href="/blog/exotic-pet-sitting-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Exotic pet sitting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- BODY -------------------------------- */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        <p className="text-lg text-[#4A4F55]">
          Garden hens do best with <strong>clean water, steady feed, safe housing and a simple lock-up routine</strong>.
          Below is a friendly checklist for Saltaire & Shipley keepers—plus how our{" "}
          <em>backyard flock checks</em> work when you’re away.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#housing" className="underline underline-offset-4">Housing & run security</a></li>
            <li><a href="#feeding" className="underline underline-offset-4">Feeding & water (simple schedule)</a></li>
            <li><a href="#eggs" className="underline underline-offset-4">Egg collection & storage</a></li>
            <li><a href="#health" className="underline underline-offset-4">Daily health checks (red flags)</a></li>
            <li><a href="#weather" className="underline underline-offset-4">Weather: heat, cold, and wet</a></li>
            <li><a href="#biosecurity" className="underline underline-offset-4">Cleanliness & biosecurity</a></li>
            <li><a href="#visits" className="underline underline-offset-4">Our visit routine (holiday plan)</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Book chicken sitter in Saltaire</a></li>
          </ol>
        </nav>

        {/* Housing */}
        <section id="housing" className="mt-12">
          <h2 className="text-2xl font-bold">Housing & run security</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li><strong>Walk-in run</strong> with roof and 360° mesh; skirting/apron to deter digging.</li>
            <li><strong>Auto-door or manual lock-up</strong> at dusk; check pop-holes and vents are sound.</li>
            <li>Dry, draught-free <strong>coop with deep, dry bedding</strong> (hemp/shavings, not dusty).</li>
            <li>Rodent-proof feed storage; remove food overnight from runs if vermin are active.</li>
          </ul>
        </section>

        {/* Feeding */}
        <section id="feeding" className="mt-12">
          <h2 className="text-2xl font-bold">Feeding & water (simple schedule)</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Item", "Amount", "Notes"].map(h => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Layers pellets", "Ad-lib via treadle/gravity feeder", "Balanced daily diet; keeps eggs consistent."],
                  ["Fresh water", "Top-up & rinse daily", "Keep out of sun; scrub every 2–3 days to avoid biofilm."],
                  ["Greens/scraps", "Small handful", "Leafy veg/herbs only; avoid salty/sugary/fatty foods."],
                  ["Grit & oyster shell", "Available in a side dish", "Grit for digestion; oyster shell for strong shells."],
                ].map(row => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: "#EFEDE7" }}>
                    {row.map((cell, i) => <td key={i} className="py-2 pr-3">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Eggs */}
        <section id="eggs" className="mt-12">
          <h2 className="text-2xl font-bold">Egg collection & storage</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Collect daily; remove any broken/soiled bedding from nest boxes.</li>
            <li>Unwashed eggs can be kept at cool room temp in the UK; refrigerate if washed.</li>
            <li>Label egg dates during holidays so you know what was laid when.</li>
          </ul>
        </section>

        {/* Health */}
        <section id="health" className="mt-12">
          <h2 className="text-2xl font-bold">Daily health checks (red flags)</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">What we look for</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Bright eyes, clean nostrils, normal posture and interest in food.</li>
                <li>Feet/legs sound; no limp; perches used normally at dusk.</li>
                <li>Vent clean; droppings normal; no signs of mites on perches.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Red flags (contact your vet)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Lethargy, fluffed posture, not eating/drinking, isolated from flock.</li>
                <li>Blue/pale comb, open-mouth breathing, sudden drop in eggs.</li>
                <li>Wounds/pecking injuries; heavy mite load or crawling insects on birds.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Weather */}
        <section id="weather" className="mt-12">
          <h2 className="text-2xl font-bold">Weather: heat, cold, and wet</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li><strong>Hot spells:</strong> shade over runs, extra waterers, frozen bottles in trays, good airflow.</li>
            <li><strong>Cold snaps:</strong> deep, dry bedding; draft-free coop; no damp; avoid over-sealing vents.</li>
            <li><strong>Rain/wind:</strong> dry area for feed; check guttering/covers; remove standing water.</li>
          </ul>
        </section>

        {/* Biosecurity */}
        <section id="biosecurity" className="mt-12">
          <h2 className="text-2xl font-bold">Cleanliness & biosecurity</h2>
          <p className="mt-3 text-[#4A4F55]">
            We use clean footwear and wash hands between jobs. During any regional disease controls, we’ll follow the
            latest guidance on housing and hygiene that you provide (foot dips, dedicated tools, etc.).
          </p>
        </section>

        {/* Visit routine */}
        <section id="visits" className="mt-12">
          <h2 className="text-2xl font-bold">Our visit routine (holiday plan)</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li>Unlock/lock coop at agreed times (or verify auto-door status).</li>
            <li>Top-up feed and <strong>refresh water</strong>; scrub if needed.</li>
            <li>Collect and date eggs; leave where you prefer.</li>
            <li>Quick flock head-count and <strong>health / predator check</strong> (mesh, latches, holes).</li>
            <li>Photo note sent after each visit. Extra cleans on request.</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">
            Keywords we cover: <em>chicken sitter Saltaire</em>, <em>backyard flock checks</em>, <em>egg collection Saltaire</em>.
          </p>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#E6E3DA" }}>
          <h2 className="text-2xl font-bold">Book a chicken sitter in Saltaire</h2>
          <p className="mt-3 text-[#4A4F55]">
            We keep things calm and consistent: feed, water, eggs, doors and a quick welfare check—exactly how you do it.
          </p>
          <div className="mt-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#131415" }}
            >
              WhatsApp a quick request
            </a>
          </div>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/exotic-pet-sitting-saltaire" className="underline underline-offset-4 hover:no-underline">
                Exotic Pet Sitting in Saltaire
              </Link>
            </li>
            <li>
              <Link href="/blog/rabbit-sitting-saltaire" className="underline underline-offset-4 hover:no-underline">
                Rabbit Sitting in Saltaire
              </Link>
            </li>
            <li>
              <Link href="/blog/fish-feeding-saltaire" className="underline underline-offset-4 hover:no-underline">
                Fish Feeding & Tank Top-Ups in Saltaire
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Need flock checks while you’re away?</h2>
          <p className="mt-2 text-white/85">Local, insured and DBS checked. Photo note after every visit.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#131415" }}
            >
              Get a WhatsApp quote
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

      {/* --------------------------- Structured data ------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Chicken & Backyard Flock Checks in Saltaire",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: "https://saltairedogs.uk/blog/chicken-care-saltaire",
              keywords:
                "chicken sitter Saltaire, backyard flock checks Saltaire, chicken holiday care, egg collection service Saltaire, coop security",
              image: [
                "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-backyard-chicken-flock-home-visit-hero.webp",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What’s included in a chicken sitting visit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Feed and water top-ups, egg collection, coop/run security check (including locks and mesh), quick welfare check and a photo note after each visit. We can lock/unlock at agreed times or verify auto-door status.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you visit Saltaire and Shipley?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—Saltaire, Shipley and nearby areas. Message with your street and dates for availability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you handle hot or cold weather needs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We’ll follow your plan for heatwaves and cold snaps—extra waterers/shade, dry bedding, and ventilation checks—then send a quick update each visit.",
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
