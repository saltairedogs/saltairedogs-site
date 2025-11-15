// app/(site)/blog/fish-feeding-saltaire/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Fish Feeding & Tank Top-Ups in Saltaire: Holiday Cover, Water Care & Peace of Mind",
  description:
    "Reliable fish feeding and tank top-ups in Saltaire. We follow your schedule, check heaters/filters, test basics, and send a photo note after every visit. Includes practical advice for tropical, goldfish and betta tanks.",
  keywords: [
    "fish sitter Saltaire",
    "fish feeding Saltaire",
    "aquarium top up Saltaire",
    "holiday fish care Saltaire",
    "tropical fish sitter",
    "goldfish tank care",
    "betta fish care Saltaire",
  ],
  alternates: { canonical: "https://saltairedogs.uk/blog/fish-feeding-saltaire" },
  authors: [{ name: "Giuseppe (Saltaire Dogs + Pets)" }],
  openGraph: {
    title: "Fish Feeding & Tank Top-Ups in Saltaire",
    description:
      "Home visits for fish: scheduled feeds, water top-ups, equipment checks and quick photo notes—so your tank stays stable while you’re away.",
    type: "article",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    publishedTime: "2025-10-18T09:00:00Z",
    images: [
      { url: "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero-2560w.avif", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero-2560w.webp", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero.webp", width: 3200, height: 1600 },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-18T09:00:00Z"
  const PUBLISHED_HUMAN = "18 Oct 2025"
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I’m in Saltaire. I need fish-feeding/tank top-ups on [dates]. Tank is [tropical/goldfish/betta/mixed]. Feeding schedule is [once/twice] daily. Thanks!"
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* AVIF → WebP → PNG fallback chain (replace with your exported assets when ready) */}
          <picture>
            {/* Large */}
            <source media="(min-width:1280px)" type="image/avif" srcSet="/saltaire-fish-feeding-home-visit-hero-2560w.avif" />
            <source media="(min-width:1280px)" type="image/webp" srcSet="/saltaire-fish-feeding-home-visit-hero-2560w.webp" />
            {/* Medium */}
            <source media="(min-width:768px)" type="image/avif" srcSet="/saltaire-fish-feeding-home-visit-hero-1920w.avif" />
            <source media="(min-width:768px)" type="image/webp" srcSet="/saltaire-fish-feeding-home-visit-hero-1920w.webp" />
            {/* Small */}
            <source type="image/avif" srcSet="/saltaire-fish-feeding-home-visit-hero-1280w.avif" />
            <source type="image/webp" srcSet="/saltaire-fish-feeding-home-visit-hero-1280w.webp" />
            <Image
              src="/saltaire-fish-feeding-home-visit-hero.webp"
              alt="Peaceful home aquarium in Saltaire—tropical fish with soft lighting and healthy plants"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* gentle scrims for legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_42%_36%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Fish feeding &amp; top-ups
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Fish Feeding &amp; Tank Top-Ups in Saltaire
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Calm, reliable <em>home-visits</em> so your fish keep their routine—measured feeds, water top-ups, and a
              quick photo note after every visit.
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
                WhatsApp: fish sitter (Saltaire)
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
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Fish absolutely have feelings—we treat them with the same calm, steady care we give every animal. Stability is
          everything: consistent feeds, clean top-ups, working heaters and filters, and minimal stress. Here’s how we
          keep your tank happy while you’re away.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#what-we-do" className="underline underline-offset-4">What we do on each visit</a></li>
            <li><a href="#feeding" className="underline underline-offset-4">Feeding schedules (flakes, pellets, frozen)</a></li>
            <li><a href="#topups" className="underline underline-offset-4">Safe water top-ups & quick checks</a></li>
            <li><a href="#species" className="underline underline-offset-4">Notes by tank: tropical, goldfish, betta</a></li>
            <li><a href="#holiday" className="underline underline-offset-4">Holiday checklist (before you go)</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Book a fish-feeding visit</a></li>
          </ol>
        </nav>

        {/* What we do */}
        <section id="what-we-do" className="mt-12">
          <h2 className="text-2xl font-bold">What we do on each visit</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Care actions</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Measure food exactly as agreed (labelled pillbox or sachets are perfect).</li>
                <li>Observe fish: appetite, swimming, clamped fins, gasping, odd behaviour.</li>
                <li>Top-up evaporated water (see method below); wipe salt creep/spills.</li>
                <li>Check temperature display; confirm filter flow and air stone.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Updates & extras</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Quick photo/video note after each visit.</li>
                <li>Emergency contact protocol if we spot anything concerning.</li>
                <li>Simple timer/light checks; curtain adjust if requested.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Feeding */}
        <section id="feeding" className="mt-12">
          <h2 className="text-2xl font-bold">Feeding schedules (flakes, pellets, frozen)</h2>
          <p className="mt-3 text-[#4A4F55]">
            Less is safer than more while you’re away. We follow your routine exactly and won’t improvise brands or
            amounts. If you’re unsure, set up a weekly pillbox with labelled portions.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Food type", "Frequency", "Notes"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Flake / micro-pellet", "1× daily (light), or 2× tiny", "Only what’s eaten in ~30–60 seconds."],
                  ["Sinking pellets (goldfish/cory)", "1× daily (light)", "Pre-count pieces to avoid overfeeding."],
                  ["Frozen (daphnia, brine, bloodworm)", "2–3× weekly max", "Pre-portion; thaw in tank water first."],
                  ["Vegetable clip (goldfish/pleco)", "2–3× weekly", "Blanched peas/courgette; remove after a few hrs."],
                ].map((row) => (
                  <tr key={row[0]} className="border-b last:border-0" style={{ borderColor: "#EFEDE7" }}>
                    {row.map((cell, i) => <td key={i} className="py-2 pr-3">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Top-ups */}
        <section id="topups" className="mt-12">
          <h2 className="text-2xl font-bold">Safe water top-ups & quick checks</h2>
          <p className="mt-3 text-[#4A4F55]">
            Evaporation concentrates minerals; we replace only what’s evaporated—<em>not</em> a full water change during
            short trips, unless you’ve pre-mixed and instructed us.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Top-up method</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li><strong>Freshwater tanks:</strong> dechlorinated tap water (pre-dosed jug you provide), slow pour to avoid shocking fish.</li>
                <li><strong>Cold spells:</strong> match room temp; avoid chilling.</li>
                <li><strong>Saltwater (if applicable):</strong> top-up with RO/DI only (no salt)—as instructed.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
              <h3 className="text-base font-semibold">Quick stability checks</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Heater light cycling normally; temp within target range.</li>
                <li>Filter output steady (no grinding sounds, not stalled).</li>
                <li>Surface movement present (oxygenation).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Species notes */}
        <section id="species" className="mt-12">
          <h2 className="text-2xl font-bold">Notes by tank: tropical, goldfish, betta</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {[
              [
                "Tropical community",
                "24–26°C; tiny feeds. Watch for gasping, clamped fins or flashing. Lights on timers help keep stress low.",
              ],
              [
                "Goldfish",
                "Cooler water; messy eaters—err on the light side. Veg clip 2–3× weekly; keep oxygenation robust.",
              ],
              [
                "Betta",
                "26–28°C, gentle flow, no overeating. Remove mirrors; ensure lid coverage for labyrinth organ breathing.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-[#4A4F55]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Holiday checklist */}
        <section id="holiday" className="mt-12">
          <h2 className="text-2xl font-bold">Holiday checklist (before you go)</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>Label a <strong>feeding pillbox</strong> with days/times and portion sizes.</li>
            <li>Leave a <strong>pre-dosed dechlorinator jug</strong> for top-ups; note target waterline.</li>
            <li>Plug lights to a <strong>timer</strong>; note heater set-point and typical reading.</li>
            <li>Write the <strong>filter power switch</strong> location and any priming steps (we won’t clean media unless agreed).</li>
            <li>Leave <strong>vet/contact</strong> details and an emergency plan (power cut, equipment failure).</li>
          </ul>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-12 rounded-2xl border bg-white p-6 shadow-sm" style={{ borderColor: "#E6E3DA" }}>
          <h2 className="text-2xl font-bold">Book a fish-feeding visit</h2>
          <p className="mt-3 text-[#4A4F55]">
            We offer calm, reliable <strong>fish feeding & tank top-ups in Saltaire</strong>—following your routine, with
            photo notes after each visit. Message with your dates, tank type and feeding plan.
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
          <p className="mt-2 text-sm text-[#7B828A]">Keywords: <em>fish sitter Saltaire</em>, aquarium top-ups.</p>
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
          <h2 className="text-2xl font-extrabold">Need a trusted fish sitter in Saltaire?</h2>
          <p className="mt-2 text-white/85">DBS checked, insured, and we send a short photo note after each visit.</p>
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
              headline: "Fish Feeding & Tank Top-Ups in Saltaire",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: "https://saltairedogs.uk/blog/fish-feeding-saltaire",
              keywords: "fish sitter Saltaire, fish feeding Saltaire, aquarium top up Saltaire, holiday fish care",
              image: [
                "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-fish-feeding-home-visit-hero.webp"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How often will you feed while I’m away?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Exactly as you set—typically once daily (light) or twice very small. We use labelled portions to avoid overfeeding and reduce algae spikes."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you do water changes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "During short trips we do safe top-ups only, using your pre-dosed dechlorinated water. Full changes are avoided unless you’ve prepared instructions and water."
                  }
                },
                {
                  "@type": "Question",
                  name: "What updates will I get?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A quick photo/video note after each visit confirming feed given, temp/flow checks and anything else you’ve asked us to monitor."
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
