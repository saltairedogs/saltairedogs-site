// app/(site)/blog/exotic-pet-sitting-saltaire/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Exotic Pet Sitting in Saltaire: Reptiles, Parrots, Small Mammals & Fish",
  description:
    "Calm, reliable home-visits for exotic pets in Saltaire & Shipley: bearded dragons, geckos, snakes, parrots, small mammals, fish and backyard hens. Temps & humidity checks, feeding, water refresh, spot-clean and a brief photo note after every visit.",
  keywords: [
    "exotic pet sitting Saltaire",
    "reptile sitter Saltaire",
    "parrot feeding Saltaire",
    "parrot sitter Shipley",
    "gecko visits Saltaire",
    "bearded dragon holiday cover Saltaire",
    "small animal sitter Saltaire",
    "fish feeding Saltaire",
    "chicken sitter Saltaire",
  ],
  alternates: { canonical: "https://saltairedogs.uk/blog/exotic-pet-sitting-saltaire" },
  authors: [{ name: "Giuseppe (Saltaire Dogs + Pets)" }],
  openGraph: {
    title: "Exotic Pet Sitting in Saltaire",
    description:
      "Home-visits for reptiles, parrots, small mammals & fish in Saltaire & Shipley. Temps/humidity checks, feeding and tidy-up—plus a quick photo note.",
    type: "article",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    publishedTime: "2025-10-18T09:00:00Z",
    images: [
      { url: "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero-2560w.avif", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero-2560w.webp", width: 2560, height: 1280 },
      { url: "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero.webp", width: 3200, height: 1600 },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-18T09:00:00Z"
  const PUBLISHED_HUMAN = "18 Oct 2025"
  const WA = `https://wa.me/447305367941?text=${encodeURIComponent(
    "Hi! I’m in/near Saltaire and need exotic-pet visits for [bearded dragon/gecko/snake/parrot/small mammal/fish] on [dates]."
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        {/* Picture chain (swap in your exported hero when ready) */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source media="(min-width:1280px)" srcSet="/saltaire-exotic-pet-sitting-hero-2560w.avif" type="image/avif" />
            <source media="(min-width:1280px)" srcSet="/saltaire-exotic-pet-sitting-hero-2560w.webp" type="image/webp" />
            <source media="(min-width:768px)" srcSet="/saltaire-exotic-pet-sitting-hero-1920w.avif" type="image/avif" />
            <source media="(min-width:768px)" srcSet="/saltaire-exotic-pet-sitting-hero-1920w.webp" type="image/webp" />
            <source srcSet="/saltaire-exotic-pet-sitting-hero-1280w.avif" type="image/avif" />
            <source srcSet="/saltaire-exotic-pet-sitting-hero-1280w.webp" type="image/webp" />
            <Image
              src="/saltaire-exotic-pet-sitting-hero.webp"
              alt="Exotic pet home-visits in Saltaire—reptiles, parrots and small pets cared for calmly at home"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVCRUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* readable overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_40%_34%,rgba(0,0,0,0.28),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/24" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Exotic pet sitting
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Exotic Pet Sitting in Saltaire: Reptiles, Parrots, Small Mammals &amp; Fish
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Calm, reliable <em>home-visits</em> so your animals keep their own territory and routine. We cover
              bearded dragons, geckos, snakes, parrots, rabbits &amp; small furries, fish and backyard hens—with a brief
              photo note after each visit.
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
                WhatsApp: exotic pet visits (Saltaire)
              </a>
              <Link
                href="/blog/bearded-dragon-care-saltaire"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white hover:bg-white/15"
              >
                Bearded dragon care
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- BODY -------------------------------- */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          We keep visits <strong>quiet, consistent and species-appropriate</strong>. That means temperature and humidity
          checks for reptiles, measured feeds, fresh water, tidy-ups and a short update after each visit—without shaking
          up their routine. Below is exactly what we cover and how it works in Saltaire & Shipley.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li><a href="#species" className="underline underline-offset-4">Species we cover</a></li>
            <li><a href="#checklist" className="underline underline-offset-4">Visit checklist (what we do)</a></li>
            <li><a href="#how" className="underline underline-offset-4">How visits work</a></li>
            <li><a href="#area" className="underline underline-offset-4">Areas we cover (Saltaire & Shipley)</a></li>
            <li><a href="#faq" className="underline underline-offset-4">FAQ</a></li>
            <li><a href="#cta" className="underline underline-offset-4">Book a calm home-visit</a></li>
          </ol>
        </nav>

        {/* Species */}
        <section id="species" className="mt-12">
          <h2 className="text-2xl font-bold">Species we cover</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {[
              ["Bearded dragons & other lizards", "Basking checks, UVB routine, greens & insect feeds."],
              ["Geckos (leopard, crested etc.)", "Temp/humidity rhythm, insect or CGD feeds, shed support."],
              ["Snakes (corn/king/royal)", "Secure checks, heat source monitoring, pre-set feeding if due."],
              ["Parrots & parakeets", "Measured seed/pellet + fresh chop, water refresh, foraging top-ups."],
              ["Rabbits & small furries", "Hay/water refresh, pellets by schedule, safe greens & spot-clean."],
              ["Fish & aquatic", "Feed per measure, top-ups if requested, light/routine checks."],
              ["Backyard hens", "Feed & water, egg collect, door routine as instructed."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border bg-white p-5 text-sm shadow-sm" style={{ borderColor: "#E6E3DA" }}>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-[#4A4F55]">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-[#7B828A]">
            Medications, injections or complex handling are by prior agreement only.
          </p>
        </section>

        {/* Checklist */}
        <section id="checklist" className="mt-12">
          <h2 className="text-2xl font-bold">Visit checklist (what we do)</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Task", "Reptiles", "Birds", "Small mammals", "Fish/Hens"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  ["Environment", "Temps/humidity check; basking & UVB on/off per routine", "Cage tidy, perches/forage refresh", "Pen/area spot-clean; hay top-ups", "Lights/air & door routine (hens)"],
                  ["Feeding", "Measured insects/greens/CGD per schedule", "Pellet/seed + fresh chop & water refresh", "Pellets by measure; safe greens check", "Feed per measure; egg collect (hens)"],
                  ["Welfare check", "Shed/skin/eyes; activity", "Appetite/feathers/poo", "Poos/urine; behaviour", "Behaviour; tank level/top-ups"],
                  ["Update", "Brief note + photo", "Brief note + photo", "Brief note + photo", "Brief note + photo"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b last:border-0" style={{ borderColor: "#EFEDE7" }}>
                    {row.map((cell, i) => (
                      <td key={i} className="py-2 pr-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-12">
          <h2 className="text-2xl font-bold">How visits work</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[#4A4F55]">
            <li><strong>Quick intro:</strong> message on WhatsApp with species, dates and postcode.</li>
            <li><strong>Notes & routine:</strong> you share feeding amounts, lights/thermostat timings and any quirks.</li>
            <li><strong>Visit plan:</strong> we confirm frequency and keys/lockbox. You’ll get a short photo note after each visit.</li>
          </ol>
          <p className="mt-3 text-sm text-[#7B828A]">
            DBS checked & insured. We don’t alter viv wiring or move hot hardware without permission.
          </p>
        </section>

        {/* Area */}
        <section id="area" className="mt-12">
          <h2 className="text-2xl font-bold">Areas we cover</h2>
          <p className="mt-3 text-[#4A4F55]">
            Saltaire (BD17) and close by: Shipley, Baildon, Nab Wood, Bingley edge. For other areas, message and we’ll
            see if we can help.
          </p>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-12 rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <h2 className="text-2xl font-bold">Book a calm home-visit</h2>
          <p className="mt-3 text-[#4A4F55]">
            <strong>Exotic-pet home-visits</strong> for reptiles, parrots, small mammals, fish and hens—temps/humidity
            checks, measured feeds, tidy-up and a brief photo update.
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
          <p className="mt-2 text-sm text-[#7B828A]">
            Keywords: <em>reptile sitter Saltaire</em>, <em>parrot feeding Saltaire</em>, <em>exotic pet sitting Saltaire</em>.
          </p>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link href="/blog/bearded-dragon-care-saltaire" className="underline underline-offset-4 hover:no-underline">
                Bearded Dragon Care in Saltaire: Heating, UVB, Diet & Holiday Cover
              </Link>
            </li>
            <li>
              <Link href="/blog/lizard-care-saltaire" className="underline underline-offset-4 hover:no-underline">
                Lizard Care in Saltaire: Leopard Gecko &amp; Crested Gecko
              </Link>
            </li>
            <li>
              <Link href="/blog/rabbit-sitting-saltaire" className="underline underline-offset-4 hover:no-underline">
                Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter & Bonding Basics
              </Link>
            </li>
          </ul>
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
              headline: "Exotic Pet Sitting in Saltaire: Reptiles, Parrots, Small Mammals & Fish",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage: "https://saltairedogs.uk/blog/exotic-pet-sitting-saltaire",
              image: [
                "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-exotic-pet-sitting-hero.webp"
              ],
              keywords:
                "exotic pet sitting Saltaire, reptile sitter Saltaire, parrot feeding Saltaire, parrot sitter Shipley, gecko visits Saltaire, bearded dragon holiday cover Saltaire, small animal sitter Saltaire, fish feeding Saltaire, chicken sitter Saltaire"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Which animals do you cover?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Bearded dragons and other lizards, leopard/crested geckos, corn/king/royal snakes, parrots and parakeets, rabbits and small mammals, fish and backyard hens."
                  }
                },
                {
                  "@type": "Question",
                  name: "What happens on a visit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We follow your routine: environment checks (temps/humidity where relevant), measured feeding and water refresh, tidy-up, plus a brief message with a photo."
                  }
                },
                {
                  "@type": "Question",
                  name: "Do you cover Shipley and Baildon?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—Saltaire (BD17) and nearby Shipley, Baildon, Nab Wood and edges of Bingley. Message with your postcode for availability."
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
