// app/(site)/blog/lizard-care-saltaire/page.tsx
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title:
    "Lizard Care in Saltaire (Leopard Gecko & Crested Gecko): Temps, Humidity & Feeding",
  description:
    "A calm, practical care guide for leopard geckos and crested geckos in Saltaire: correct temperatures, humidity, diet schedules, shedding support, and simple setups that work. Includes a friendly CTA for reptile-savvy home visits in Saltaire.",
  keywords: [
    "lizard care Saltaire",
    "leopard gecko temps",
    "crested gecko humidity",
    "lizard sitter Saltaire",
    "reptile visits Saltaire",
    "gecko feeding schedule",
  ],
  alternates: {
    canonical: "https://saltairedogs.uk/blog/lizard-care-saltaire",
  },
  authors: [{ name: "Giuseppe (Saltaire Dogs + Pets)" }],
  openGraph: {
    title:
      "Lizard Care in Saltaire (Leopard Gecko & Crested Gecko): Temps, Humidity & Feeding",
    description:
      "Local, no-nonsense guidance for leopard geckos and crested geckos—temps, humidity, feeding and shedding support designed for real homes.",
    type: "article",
    authors: ["Giuseppe (Saltaire Dogs + Pets)"],
    publishedTime: "2025-10-16T09:00:00Z",
    images: [
  { url: "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.avif" },
  { url: "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.webp" },
  { url: "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero.webp" },
    ],
  },
}

export default function Page() {
  const PUBLISHED_ISO = "2025-10-16T09:00:00Z"
  const PUBLISHED_HUMAN = "16 Oct 2025"
  const WA = `https://wa.me/447424208127?text=${encodeURIComponent(
    "Hi! I’m in Saltaire. I have a [leopard/crested] gecko and would like help with [visits/feeding/humidity checks/shed support] on [dates]."
  )}`

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="relative isolate overflow-hidden">
        {/* Responsive hero image (AVIF → WebP → PNG fallback) */}
        <div className="absolute inset-0 -z-10">
          <picture>
            <source
              type="image/avif"
              srcSet="/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.avif 2560w, /saltaire-leopard-gecko-crested-gecko-vivarium-hero-1920w.avif 1920w, /saltaire-leopard-gecko-crested-gecko-vivarium-hero-1280w.avif 1280w"
            />
            <source
              type="image/webp"
              srcSet="/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.webp 2560w, /saltaire-leopard-gecko-crested-gecko-vivarium-hero-1920w.webp 1920w, /saltaire-leopard-gecko-crested-gecko-vivarium-hero-1280w.webp 1280w"
            />
            <Image
              src="/saltaire-leopard-gecko-crested-gecko-vivarium-hero.webp"
              alt="Leopard gecko on a warm slate basking ledge, with a crested gecko perched on bark behind—naturalistic vivarium hero image."
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              // tiny neutral blur placeholder
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMScgaGVpZ2h0PScxJyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9IiNFREVELUQiLz48L3N2Zz4="
              className="object-cover"
            />
          </picture>
          {/* Legibility scrims */}
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_55%_40%,rgba(0,0,0,0.32),transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        </div>

        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Lizard care (leopard gecko &amp; crested gecko)
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Lizard Care in Saltaire: Leopard Gecko &amp; Crested Gecko
            </h1>
            <p className="mt-3 text-lg text-white/90">
              The no-nonsense local guide to temps, humidity, feeding and shed
              support—written so you can keep a stable, healthy routine at
              home.
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
                WhatsApp: reptile-savvy visits (Saltaire)
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
      {/* (unchanged content below) */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <p className="text-lg text-[#4A4F55]">
          Leopard geckos and crested geckos thrive when the basics are steady:
          a gentle temperature gradient, humidity that matches the species, and
          a feeding rhythm that’s easy to stick to. Below is a practical setup
          that works in Saltaire homes—plus a quick way to get{" "}
          <em>reptile-savvy visits</em> if you need help while you’re away.
        </p>

        {/* TOC */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-2xl border bg-white p-5 text-sm shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <strong className="block">Contents</strong>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-[#4A4F55]">
            <li>
              <a href="#species" className="underline underline-offset-4">
                Leopard vs. Crested: what each needs
              </a>
            </li>
            <li>
              <a href="#temps" className="underline underline-offset-4">
                Temperature gradients (day & night)
              </a>
            </li>
            <li>
              <a href="#humidity" className="underline underline-offset-4">
                Humidity targets & simple control
              </a>
            </li>
            <li>
              <a href="#feeding" className="underline underline-offset-4">
                Feeding schedules (bugs, Repashy/CGD)
              </a>
            </li>
            <li>
              <a href="#shedding" className="underline underline-offset-4">
                Shedding support & hydration
              </a>
            </li>
            <li>
              <a href="#cta" className="underline underline-offset-4">
                Reptile-savvy visits in Saltaire
              </a>
            </li>
          </ol>
        </nav>

        {/* Species split */}
        <section id="species" className="mt-12">
          <h2 className="text-2xl font-bold">
            Leopard vs. Crested: what each needs
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div
              className="rounded-2xl border bg-white p-5 text-sm shadow-sm"
              style={{ borderColor: "#E6E3DA" }}
            >
              <h3 className="text-base font-semibold">Leopard gecko (Eublepharis)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>
                  Ground-dwelling; needs a <strong>warm hide</strong>,{" "}
                  <strong>cool hide</strong> and optional humid hide.
                </li>
                <li>
                  Dry climate; humidity lower than cresties (see table below).
                </li>
                <li>
                  Diet: gut-loaded insects (roaches/crickets/locusts), dusted
                  with calcium + D3 (frequency per age).
                </li>
              </ul>
            </div>

            <div
              className="rounded-2xl border bg-white p-5 text-sm shadow-sm"
              style={{ borderColor: "#E6E3DA" }}
            >
              <h3 className="text-base font-semibold">Crested gecko (Correlophus)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>
                  Arboreal; prefers vertical space with sturdy branches and
                  leafy cover.
                </li>
                <li>
                  Sub-tropical humidity with daily rise/fall (see table).
                </li>
                <li>
                  Diet: quality CGD/Repashy/Pangea 3–4× weekly; insects 1×
                  weekly for enrichment (optional).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Temps */}
        <section id="temps" className="mt-12">
          <h2 className="text-2xl font-bold">Temperature gradients</h2>
          <p className="mt-3 text-[#4A4F55]">
            Aim for a <em>warm side → cool side</em> gradient so your gecko can
            self-regulate. Use a digital probe thermometer at the warm hide
            level; verify with an IR spot reader.
          </p>
          <div
            className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4"
            style={{ borderColor: "#E6E3DA" }}
          >
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {[
                    "Species",
                    "Warm side (day)",
                    "Cool side (day)",
                    "Night",
                    "Notes",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border-b py-2 pr-3 font-semibold"
                      style={{ borderColor: "#EFEDE7" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  [
                    "Leopard gecko",
                    "31–32°C at warm hide",
                    "23–25°C",
                    "20–22°C",
                    "Use a thermostat on the heat source; provide a warm & cool hide.",
                  ],
                  [
                    "Crested gecko",
                    "24–26°C air temp peak",
                    "20–22°C",
                    "18–20°C",
                    "Avoid sustained >28°C. Daytime gentle peak, cooler evenings.",
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
            Tip: heat <em>under</em> (heat mat) or <em>over</em> (ceramic/DP)
            must be thermostat-controlled. Test for 24–48h before relying on a
            new setup.
          </p>
        </section>

        {/* Humidity */}
        <section id="humidity" className="mt-12">
          <h2 className="text-2xl font-bold">Humidity targets</h2>
          <p className="mt-3 text-[#4A4F55]">
            Use a reliable digital hygrometer located at mid-height. For
            cresties, allow a daily rise with misting, then ventilation to
            stabilise.
          </p>
          <div
            className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4"
            style={{ borderColor: "#E6E3DA" }}
          >
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Species", "Day range", "Night peak", "Method"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  [
                    "Leopard gecko",
                    "35–45%",
                    "—",
                    "Keep ventilation; offer a humid hide (70–80%) for shed.",
                  ],
                  [
                    "Crested gecko",
                    "50–65%",
                    "80–90% after evening mist; drop back to ~60%",
                    "Hand-misting or timed fogger; ensure airflow so it doesn’t stay wet.",
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
        </section>

        {/* Feeding */}
        <section id="feeding" className="mt-12">
          <h2 className="text-2xl font-bold">Feeding schedules</h2>
          <p className="mt-3 text-[#4A4F55]">
            Gut-load insects 24–48h before feeding. Use calcium + D3 per
            schedule; multivitamin weekly unless your CGD already includes it.
          </p>
          <div
            className="mt-4 overflow-x-auto rounded-2xl border bg-white p-4"
            style={{ borderColor: "#E6E3DA" }}
          >
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="text-left">
                  {["Species", "Adult frequency", "Juvenile frequency", "What to feed"].map((h) => (
                    <th key={h} className="border-b py-2 pr-3 font-semibold" style={{ borderColor: "#EFEDE7" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-[#4A4F55]">
                {[
                  [
                    "Leopard gecko",
                    "3× / week (5–7 insects)",
                    "4–5× / week (small insects)",
                    "Roaches/crickets/locusts; dust Ca+D3 1–2× / week; plain Ca other feeds.",
                  ],
                  [
                    "Crested gecko",
                    "CGD 3× / week + insects 1× / week",
                    "CGD 4× / week + insects 1× / week",
                    "CGD/Repashy/Pangea mixed fresh; small roaches/crickets for enrichment.",
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
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              Fresh water daily; shallow dish for leos, drips/misting for
              cresties.
            </li>
            <li>
              Remove uneaten insects after 15–20 minutes (especially with
              cresties overnight).
            </li>
          </ul>
        </section>

        {/* Shedding */}
        <section id="shedding" className="mt-12">
          <h2 className="text-2xl font-bold">Shedding support</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div
              className="rounded-2xl border bg-white p-5 text-sm shadow-sm"
              style={{ borderColor: "#E6E3DA" }}
            >
              <h3 className="text-base font-semibold">What “good” looks like</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>
                  All skin off within 24–48h; toes and tail tip clear (no
                  rings).
                </li>
                <li>
                  Leopard geckos often eat their shed—normal behaviour.
                </li>
              </ul>
            </div>
            <div
              className="rounded-2xl border bg-white p-5 text-sm shadow-sm"
              style={{ borderColor: "#E6E3DA" }}
            >
              <h3 className="text-base font-semibold">If skin sticks</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[#4A4F55]">
                <li>Offer a humid hide (70–80%).</li>
                <li>
                  Brief lukewarm steam in a ventilated tub (supervised), then
                  gently tease with a damp cotton bud—never pull hard.
                </li>
                <li>
                  Persistent stuck shed on toes = vet check to avoid
                  constriction.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-12 rounded-2xl border bg-white p-6 shadow-sm"
          style={{ borderColor: "#E6E3DA" }}
        >
          <h2 className="text-2xl font-bold">
            Reptile-savvy visits in Saltaire
          </h2>
          <p className="mt-3 text-[#4A4F55]">
            Need help while you’re away or working late? I offer calm,
            <strong> reptile-savvy visits for geckos</strong>: temperature and
            humidity checks, bug feeds or CGD refresh, water change, light mist,
            and <strong>shedding monitoring</strong>. You’ll get a brief note
            with a photo after each visit.
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
            Keywords: <em>lizard sitter Saltaire</em>,{" "}
            <em>reptile visits Saltaire</em>.
          </p>
        </section>

        {/* Related */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related reads</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#4A4F55]">
            <li>
              <Link
                href="/blog/bearded-dragon-care-saltaire"
                className="underline underline-offset-4 hover:no-underline"
              >
                Bearded Dragon Care in Saltaire: Heating, UVB, Diet & Holiday
                Cover
              </Link>
            </li>
            <li>
              <Link
                href="/blog/first-time-guide-to-saltaire"
                className="underline underline-offset-4 hover:no-underline"
              >
                First-Timer’s Guide to Saltaire
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
                "Do leopard geckos need UVB?",
                "Low-level UVB is increasingly recommended (2–5% at hide level) with suitable shade and gradient. It isn’t mandatory in all setups, but it can support natural D3 synthesis when used correctly.",
              ],
              [
                "What CGD should I use for a crested gecko?",
                "A reputable complete diet such as Repashy or Pangea. Mix fresh, offer in the evening, remove and clean the dish next day.",
              ],
              [
                "Can you visit while I’m on holiday?",
                "Yes—Saltaire & Shipley. Visits include temps/humidity checks, feeds, water change and a photo note. Message me with your dates.",
              ],
            ].map(([q, a]) => (
              <details key={q} className="rounded-xl border bg-white p-4" style={{ borderColor: "#E6E3DA" }}>
                <summary className="cursor-pointer text-base font-semibold">{q}</summary>
                <p className="mt-2 text-[#4A4F55]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-14 rounded-2xl bg-[#131415] p-7 text-white">
          <h2 className="text-2xl font-extrabold">Need a calm, reliable lizard sitter?</h2>
          <p className="mt-2 text-white/85">
            I’m local, DBS checked and insured. Clear photo notes after every
            visit.
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
              headline:
                "Lizard Care in Saltaire (Leopard Gecko & Crested Gecko): Temps, Humidity & Feeding",
              author: { "@type": "Person", name: "Giuseppe (Saltaire Dogs + Pets)" },
              datePublished: PUBLISHED_ISO,
              dateModified: PUBLISHED_ISO,
              mainEntityOfPage:
                "https://saltairedogs.uk/blog/lizard-care-saltaire",
              keywords:
                "lizard sitter Saltaire, reptile visits Saltaire, leopard gecko temps, crested gecko humidity",
              image: [
                "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.avif",
                "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero-2560w.webp",
                "https://saltairedogs.uk/saltaire-leopard-gecko-crested-gecko-vivarium-hero.webp"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do leopard geckos need UVB?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Low-level UVB is increasingly recommended (2–5% at hide level) with suitable shade and gradient. It isn’t mandatory in all setups, but it can support natural D3 synthesis when used correctly."
                  }
                },
                {
                  "@type": "Question",
                  name: "What CGD should I use for a crested gecko?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "A reputable complete diet such as Repashy or Pangea. Mix fresh, offer in the evening, remove and clean the dish next day."
                  }
                },
                {
                  "@type": "Question",
                  name: "Can you visit while I’m on holiday?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes—Saltaire & Shipley. Visits include temps/humidity checks, feeds, water change and a photo note. Message me with your dates."
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
