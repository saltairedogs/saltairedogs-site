// app/(site)/blog/rabbit-sitting-saltaire/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title:
    "Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter & Bonding Basics",
  description:
    "A calm, practical guide for Saltaire rabbit owners: indoor/outdoor housing that’s actually safe, hay-first diet, litter training, enrichment ideas, bonding intros and the health signs that need a vet. Includes a friendly CTA for home-visits in Saltaire.",
  keywords: [
    "rabbit sitter Saltaire",
    "rabbit boarding alternative Saltaire",
    "house rabbit litter training",
    "rabbit diet hay first",
    "bonding rabbits safely",
  ],
  alternates: { canonical: "https://saltairedogs.uk/blog/rabbit-sitting-saltaire" },
  authors: [{ name: "Giuseppe (Saltaire Dogs + Pets)" }],
  openGraph: {
    title:
      "Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter & Bonding Basics",
    description:
      "Indoor/outdoor housing, hay-first diet, litter training, enrichment, bonding intros and when to call the vet. With a simple home-visit service in Saltaire.",
    type: "article",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    publishedTime: "2025-10-17T09:00:00Z",
    images: [
      { url: "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.avif", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.webp", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero.webp", width: 3200, height: 1600 },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-17T09:00:00Z"
  const PUBLISHED_HUMAN = "17 Oct 2025"
  const WA = `https://wa.me/447424208127?text=${encodeURIComponent(
    "Hi! I’m in Saltaire. I have rabbit(s) and would like home-visits for [dates/times] — hay/water refresh, pellets by schedule, greens checks and pen clean."
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <picture>
            <source media="(min-width: 1280px)" type="image/avif" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.avif" />
            <source media="(min-width: 1280px)" type="image/webp" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.webp" />
            <source media="(min-width: 768px)" type="image/avif" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-1920w.avif" />
            <source media="(min-width: 768px)" type="image/webp" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-1920w.webp" />
            <source type="image/avif" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-1280w.avif" />
            <source type="image/webp" srcSet="/saltaire-indoor-rabbit-setup-home-visit-hero-1280w.webp" />
            <Image
              src="/saltaire-indoor-rabbit-setup-home-visit-hero.webp"
              alt="Cosy indoor rabbit setup in Saltaire—x-pen with hay rack, litter tray and two relaxed house rabbits"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_40%_34%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Rabbit care &amp; sitting
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter &amp; Bonding Basics
            </h1>
            <p className="mt-3 text-lg text-white/90">
              The no-nonsense local guide to keeping rabbits happy at home—
              with a simple, reliable <em>home-visit alternative to boarding</em>.
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
                WhatsApp: rabbit home-visit (Saltaire)
              </a>
              <Link
                href="/blog/first-time-guide-to-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Explore Saltaire while we visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- BODY -------------------------------- */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Rabbits do best with <strong>space, routine and fibre</strong>. Below is a friendly checklist—
          what “good” looks like for housing, diet, litter and enrichment, plus a quick guide to
          <em> introducing bonds</em> and the <em>health signs</em> that need a vet. If you’d like help
          while you’re away, we can visit at home so your rabbits keep their normal territory and routine.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#housing" className="underline underline-offset-4">Indoor & outdoor housing (safe setups)</a></li>
            <li><a href="#diet" className="underline underline-offset-4">Hay-first diet & safe greens</a></li>
            <li><a href="#litter" className="underline underline-offset-4">Litter training that sticks</a></li>
            <li><a href="#enrichment" className="underline underline-offset-4">Enrichment & calm routines</a></li>
            <li><a href="#bonding" className="underline underline-offset-4">Bond introductions (overview)</a></li>
            <li><a href="#health" className="underline underline-offset-4">Vet signs: when to act</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Rabbit home-visits in Saltaire</a></li>
          </ol>
        </nav>

        {/* Housing */}
        <section id="housing" className="mt-12">
          <h2 className="text-2xl font-bold">Indoor & outdoor housing (safe setups)</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Indoors (house rabbits)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li><strong>Room-sized space or large pen</strong> with 24/7 access—tiny hutches don’t work for joints, gut or behaviour.</li>
                <li>Non-slip flooring; <strong>two-exit hides</strong>; litter tray in each “zone”.</li>
                <li>Chew-proof cables; block tight gaps; stable temperature (no fumes/aerosols near hay or trays).</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Outdoors (gardens)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li><strong>Walk-in aviary/run</strong> attached to an insulated sleeping shed; secure roof and anti-dig skirt.</li>
                <li>Shade, ventilation and dry hay area; raise bowls off damp ground.</li>
                <li>Predator-proof latches; camera/lighting if used should be weather-rated and safe.</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
            <h3 className="text-base font-semibold">Daily tidy checklist</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
              <li>Top up <strong>fresh hay</strong> (main food) and water; quick litter scoop.</li>
              <li>5–10 min visual check: eyes, nose, bottom, movement, appetite, droppings size/shape.</li>
              <li>Rotate enrichment items so the pen feels “new”.</li>
            </ul>
          </div>
        </section>

        {/* Diet */}
        <section id="diet" className="mt-12">
          <h2 className="text-2xl font-bold">Hay-first diet & safe greens</h2>
          <p className="mt-3 text-[#4A4F55]">
            Aim for <strong>~85–90% hay/grass</strong> by volume. Pellets are a <em>measured</em> supplement,
            not a main meal. Introduce any change gradually over 7–10 days to protect the gut.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Component", "Adult amount", "Notes"].map(h => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Hay (timothy/meadow)", "Unlimited", "Always available; place racks by litter trays to encourage use."],
                  ["Pellets (high-fibre)", "1–2 tbsp / kg bodyweight / day", "Measure; avoid mixes with seeds/corn/molasses."],
                  ["Greens", "A mugful / kg bodyweight / day", "Rotate: romaine, spring greens, coriander, dill, basil, chicory, dandelion (clean)."],
                  ["Treats", "Occasional", "Tiny fruit pieces or forage only. No yoghurt drops/seedy bars."],
                ].map((row) => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: "#EFEDE7" }}>
                    {row.map((cell, i) => (<td key={i} className="py-2 pr-3">{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Great greens (rotate)</h3>
              <p className="mt-2 text-[#4A4F55]">
                Spring greens, romaine, coriander, parsley, dill, basil, chicory, fennel fronds, plantain, sow thistle.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Avoid / toxic</h3>
              <p className="mt-2 text-[#4A4F55]">
                Iceberg, onion/garlic/chive, potato/tomato leaves, rhubarb, houseplants (lilies, philodendron),
                anything mouldy. Introduce new greens slowly.
              </p>
            </div>
          </div>
        </section>

        {/* Litter */}
        <section id="litter" className="mt-12">
          <h2 className="text-2xl font-bold">Litter training that sticks</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Setup</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Large tray with <strong>paper-based pellets</strong> or kiln-dried wood-based litter. No clumping cat litter.</li>
                <li>Place a hay rack so they <em>eat & toilet</em> in one spot—rabbits love this.</li>
                <li>Start smaller area; expand once habits are consistent.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">If accidents happen</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Add an extra tray where they choose to go; clean outside spots fully (enzyme cleaner).</li>
                <li>Check for <em>territory issues</em> if newly bonded or unneutered—neutering helps a lot.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrichment */}
        <section id="enrichment" className="mt-12">
          <h2 className="text-2xl font-bold">Enrichment & calm routines</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Forage boxes (hay + dried forage), willow balls, cardboard tunnels, dig trays (soil/sand/shredded paper).</li>
            <li>Low hidey platforms and “lookouts”; scatter-feed pellets in hay to extend eating time.</li>
            <li>Quiet evenings for grooming/binky time; predictable lights-out helps nerves.</li>
          </ul>
          <p className="mt-3 text-sm text-[#7B828A]">Tip: rotate 2–3 toys daily so the pen feels new without buying more.</p>
        </section>

        {/* Bonding */}
        <section id="bonding" className="mt-12">
          <h2 className="text-2xl font-bold">Bond introductions (overview)</h2>
          <p className="mt-3 text-[#4A4F55]">
            Go <strong>neutral territory → short, calm sessions → gradual space</strong>. Start with <em>side-by-side pens</em>,
            swapping litter trays to share scent. Look for relaxed eating and mirrored grooming before opening space.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Green flags</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Eating side-by-side, loafing near a barrier, mutual grooming through bars.</li>
                <li>Curious sniffs that end quickly; relaxed body language.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Red flags (pause & reset)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Chasing in circles, fur clumps pulled, tight pinning without release.</li>
                <li>Guarding resources (hay/water) aggressively—add multiples and reduce space.</li>
                <li>Escalation after 10–15 minutes—end on a neutral note, try again shorter.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Health */}
        <section id="health" className="mt-12">
          <h2 className="text-2xl font-bold">Vet signs: when to act</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Urgent (same day)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>No poo or not eating for 6–8 hours (stasis risk).</li>
                <li>Bloated, grinding teeth, very quiet/hunched, sudden diarrhea.</li>
                <li>Wounds from fighting, maggots (flystrike) or heavy fly eggs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Soon (book a check)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Weepy eyes, nasal discharge, sneezing clusters.</li>
                <li>Weight loss, messy bottom, long nails/teeth concerns.</li>
                <li>Behaviour change after a bond—rule out pain or stress.</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm text-[#7B828A]">Always keep a rabbit-savvy vet contact saved before you need it.</p>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#E6E3DA" }}>
          <h2 className="text-2xl font-bold">Rabbit home-visits in Saltaire</h2>
          <p className="mt-3 text-[#4A4F55]">
            We do calm, reliable <strong>home-visits for rabbits</strong>—hay & water refresh, pellets by schedule,
            safe greens checks, litter/pen clean, and gentle social time. You’ll get a short note with a photo after each visit.
          </p>
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold" style={{ backgroundColor: "#C89B3C", color: "#131415" }}>
              WhatsApp a quick request
            </a>
          </div>
          <p className="mt-2 text-sm text-[#7B828A]">
            Keywords: <em>rabbit sitter Saltaire</em>, <em>rabbit boarding alternative Saltaire</em>.
          </p>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/first-time-guide-to-saltaire" className="underline underline-offset-4 hover:no-underline">
                First-Timer’s Guide to Saltaire
              </Link>
            </li>
            <li>
              <Link href="/blog/lizard-care-saltaire" className="underline underline-offset-4 hover:no-underline">
                Lizard Care in Saltaire (Leopard &amp; Crested Gecko)
              </Link>
            </li>
            <li>
              <Link href="/blog/bearded-dragon-care-saltaire" className="underline underline-offset-4 hover:no-underline">
                Bearded Dragon Care in Saltaire
              </Link>
            </li>
          </ul>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Need a gentle, reliable rabbit sitter?</h2>
          <p className="mt-2 text-white/85">Local to Saltaire. DBS checked, insured, and we send photo notes after every visit.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href={WA} className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold" style={{ backgroundColor: "#C89B3C", color: "#131415" }}>
              Get a WhatsApp quote
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15">
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
              headline: "Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter & Bonding Basics",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: "https://saltairedogs.uk/blog/rabbit-sitting-saltaire",
              keywords: "rabbit sitter Saltaire, rabbit boarding alternative Saltaire, hay first diet, rabbit litter training",
              image: [
                "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-indoor-rabbit-setup-home-visit-hero.webp"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much hay should my rabbit eat?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hay should make up around 85–90% of the diet. Keep fresh, dry timothy or meadow hay available at all times in racks and near litter trays."
                  }
                },
                {
                  "@type": "Question",
                  name: "What litter is safe for rabbits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use paper-based pellets or kiln-dried wood-based litters. Avoid clumping cat litters or dusty materials."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you offer rabbit boarding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer home-visits in Saltaire as a calm alternative to boarding—hay/water refresh, pellets by schedule, greens checks, pen clean and gentle social time."
                  }
                }
              ]
            }
          ]),
        }}
      />
    </main>
  )
}
