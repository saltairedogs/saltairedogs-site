// app/(site)/blog/page.tsx
import Link from "next/link"
import Image from "next/image"

// ----------------------------- Metadata (server) ------------------------------
export const metadata = {
  title: "Blog — Saltaire Dogs + Pets",
  description:
    "Guides for Saltaire visitors & locals (parking, walks, dog-friendly spots) plus calm, practical home-visit care for rabbits, reptiles, parrots, fish and backyard hens.",
  alternates: { canonical: "https://saltairedogs.uk/blog" },
  openGraph: {
    title: "Blog — Saltaire Dogs + Pets",
    description:
      "Browse our Saltaire guides and pet care articles. Parking, best walks, dog-friendly tips, and species-specific home-visit care.",
    type: "website",
    url: "https://saltairedogs.uk/blog",
  },
}

// ------------------------------- Data model ----------------------------------
type Category =
  | "Saltaire guides"
  | "Dogs"
  | "Training"
  | "Reptiles"
  | "Small pets"
  | "Birds"
  | "Fish"
  | "Backyard flock"

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  humanDate: string
  category: Category
  imageBase: string // base path without extension/width suffix
  imageAlt: string
}

// One canonical fallback hero we know exists
const CANAL_HERO_BASE = "/images/blog/hero/saltaire-leeds-liverpool-canal"

// NOTE: For posts without a bespoke hero yet, we safely fall back to CANAL_HERO_BASE
const POSTS: Post[] = [
  // --------------------- Saltaire: cornerstone guides -----------------------
  {
    slug: "first-time-guide-to-saltaire",
    title: "First-Timer’s Guide to Saltaire: Parking, Walks, Food & Must-Sees",
    excerpt:
      "Start at Salts Mill, wander the model village and relax in Roberts Park. Flat canal paths, cafés, and easy itineraries.",
    date: "2025-10-10T09:00:00Z",
    humanDate: "10 Oct 2025",
    category: "Saltaire guides",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Salts Mill and Leeds–Liverpool Canal at golden hour",
  },
  {
    slug: "saltaire-parking-guide",
    title: "Saltaire Parking Guide: Free Parking at Salts Mill, Streets & Sundays",
    excerpt:
      "Where to park in Saltaire: free Salts Mill parking, pay-and-display options, on-street rules, Sundays, busy days and Blue Badge info.",
    date: "2025-10-11T09:00:00Z",
    humanDate: "11 Oct 2025",
    category: "Saltaire guides",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Saltaire’s Salts Mill and Leeds–Liverpool Canal near main visitor parking",
  },
  {
    slug: "best-saltaire-walks",
    title: "Best Saltaire Walks: 30/45/60-Minute Loops",
    excerpt:
      "Three easy routes from the village: riverside, canal and Roberts Park loops with gentle gradients and café stops.",
    date: "2025-10-12T09:00:00Z",
    humanDate: "12 Oct 2025",
    category: "Saltaire guides",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Riverside path near Saltaire with trees and mill tower in the distance",
  },
  {
    slug: "dog-friendly-saltaire",
    title: "Dog-Friendly Saltaire: Cafés, Rules, Vets & Quiet Routes",
    excerpt:
      "Local tips for dogs in Saltaire: where they’re welcome, lead rules, quiet cut-throughs and emergency contacts.",
    date: "2025-10-13T09:00:00Z",
    humanDate: "13 Oct 2025",
    category: "Saltaire guides",
    imageBase: "/images/blog/hero/saltaire-leeds-liverpool-canal",
    imageAlt: "Dog on lead by the canal in Saltaire",
  },
  {
    slug: "saltaire-map-itineraries",
    title: "Saltaire Map & Itineraries: Half-Day and Full-Day Plans",
    excerpt:
      "Clear maps and timings for a smooth first visit—Salts Mill, model village streets, Roberts Park and canal options.",
    date: "2025-10-14T09:00:00Z",
    humanDate: "14 Oct 2025",
    category: "Saltaire guides",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Saltaire canal and mill with warm evening light",
  },
  {
    slug: "salts-mill-complete-guide",
    title: "Salts Mill (Complete Guide): Galleries, Shops & Food",
    excerpt:
      "Everything you need to plan a visit: Hockney galleries, bookshop, art supplies, Salts Diner and practical essentials.",
    date: "2025-10-15T09:00:00Z",
    humanDate: "15 Oct 2025",
    category: "Saltaire guides",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Salts Mill façade at golden hour",
  },

  // ----------------------------- Reptiles & exotics -------------------------
  {
    slug: "bearded-dragon-care-saltaire",
    title: "Bearded Dragon Care in Saltaire: Heating, UVB, Diet & Holiday Cover",
    excerpt:
      "Correct basking temps, real UVB, safe greens & insects—and a simple routine you can actually keep. Home-visit cover while you’re away.",
    date: "2025-10-16T09:00:00Z",
    humanDate: "16 Oct 2025",
    category: "Reptiles",
    imageBase: "/saltaire-bearded-dragon-care-hero",
    imageAlt: "Adult bearded dragon basking on a slate platform in a naturalistic vivarium",
  },
  {
    slug: "lizard-care-saltaire",
    title: "Lizard Care in Saltaire: Leopard Gecko & Crested Gecko",
    excerpt:
      "Temps, humidity, feeding schedules and shed support—practical setups for real homes in Saltaire.",
    date: "2025-10-16T09:00:00Z",
    humanDate: "16 Oct 2025",
    category: "Reptiles",
    imageBase: "/saltaire-leopard-gecko-crested-gecko-vivarium-hero",
    imageAlt: "Leopard gecko on slate and crested gecko perched on bark in one frame",
  },
  {
    slug: "exotic-pet-sitting-saltaire",
    title: "Exotic Pet Sitting in Saltaire: Reptiles, Parrots, Small Mammals & Fish",
    excerpt:
      "Calm, reliable home-visits so your animals keep their own territory and routine—brief photo note after every visit.",
    date: "2025-10-18T09:00:00Z",
    humanDate: "18 Oct 2025",
    category: "Saltaire guides",
    imageBase: "/saltaire-exotic-pet-sitting-hero",
    imageAlt:
      "UK living-room corner with vivarium, small parrot perch and tidy rabbit pen in the background",
  },

  // ------------------------------ Small pets --------------------------------
  {
    slug: "rabbit-sitting-saltaire",
    title: "Rabbit Sitting in Saltaire: Safe Housing, Diet, Litter & Bonding",
    excerpt:
      "Hay-first diet, litter training, enrichment, calm bond intros—and a home-visit alternative to boarding.",
    date: "2025-10-17T09:00:00Z",
    humanDate: "17 Oct 2025",
    category: "Small pets",
    imageBase: "/saltaire-indoor-rabbit-setup-home-visit-hero",
    imageAlt: "Two relaxed house rabbits beside a hay rack and litter tray",
  },

  // -------------------------------- Birds -----------------------------------
  {
    slug: "parrots-visits",
    title: "Parrot Visits (Saltaire): Feeding, Mist, Foraging & Photo Note",
    excerpt:
      "Drop-ins for cockatiels, conures and more: fresh chop, seed/pellet checks, water change, enrichment and tidy up.",
    date: "2025-10-08T09:00:00Z",
    humanDate: "08 Oct 2025",
    category: "Birds",
    imageBase: "/saltaire-exotic-pet-sitting-hero",
    imageAlt: "Small parrot perched on a natural wood T-stand in a living room",
  },

  // -------------------------------- Fish ------------------------------------
  {
    slug: "fish-feeding-saltaire",
    title: "Fish Feeding & Tank Top-Ups in Saltaire",
    excerpt:
      "Measured feeds, water top-ups and a quick photo note after every visit—so your fish keep their routine.",
    date: "2025-10-18T09:00:00Z",
    humanDate: "18 Oct 2025",
    category: "Fish",
    imageBase: "/saltaire-fish-feeding-home-visit-hero",
    imageAlt:
      "Peaceful planted home aquarium on a wooden cabinet with a neat pre-portioned feeding pillbox",
  },

  // ---------------------------- Backyard flock ------------------------------
  {
    slug: "chicken-care-saltaire",
    title: "Chicken & Backyard Flock Checks in Saltaire",
    excerpt:
      "Measured feed, fresh water, egg collection and coop security checks—photo note after every visit.",
    date: "2025-10-18T09:00:00Z",
    humanDate: "18 Oct 2025",
    category: "Backyard flock",
    imageBase: "/saltaire-backyard-chicken-flock-home-visit-hero",
    imageAlt:
      "Secure UK walk-in chicken run with calm hens, clean waterer and feeder",
  },

  // ---------------------------- Dog-specific posts --------------------------

 
  {
    slug: "rainy-day-dog-walks-in-saltaire-low-mud-paths-towpath-alternatives-gear",
    title: "Rainy-Day Dog Walks in Saltaire: Low-Mud Paths & Gear Tips",
    excerpt:
      "Low-mud towpath alternatives, short loops and simple kit that keeps you both comfortable.",
    date: "2025-10-03T09:00:00Z",
    humanDate: "03 Oct 2025",
    category: "Dogs",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Towpath with puddles and reflections near Saltaire",
  },
  

  {
    slug: "roberts-park-perfect-dog-walk",
    title: "Roberts Park: The Perfect Short Dog Walk",
    excerpt:
      "A short, scenic loop with river views and easy surfaces—great for quick exercise windows.",
    date: "2025-09-29T09:00:00Z",
    humanDate: "29 Sep 2025",
    category: "Dogs",
    imageBase: CANAL_HERO_BASE,
    imageAlt: "Footbridge over the River Aire by Roberts Park",
  },
  {
    slug: "hirst-wood-shipley-glen-with-dogs-circular-walks-mud-levels-access",
    title: "Hirst Wood & Shipley Glen with Dogs: Circulars, Mud Levels & Access",
    excerpt:
      "Terrain notes, seasonal mud expectations and the nicest circulars linking woods and glen.",
    date: "2025-09-28T09:00:00Z",
    humanDate: "28 Sep 2025",
    category: "Dogs",
    imageBase: "/hirst-wood-shipley-glen-dog-walks-hero",
    imageAlt: "Woodland track near Hirst Wood with dappled light",
  },

  
]

// ------------------------------- Helpers -------------------------------------
const CATEGORIES: Category[] = [
  "Saltaire guides",
  "Dogs",
  "Training",
  "Reptiles",
  "Small pets",
  "Birds",
  "Fish",
  "Backyard flock",
]

function humanizeCategory(cat: Category) {
  return cat
}

function byDateDesc(a: Post, b: Post) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}
function byTitleAsc(a: Post, b: Post) {
  return a.title.localeCompare(b.title)
}

/**
 * Responsive <picture> chain:
 * - AVIF → WebP sources for 1280/1920/2560 widths
 * - PNG fallback (base.png)
 * We also allow an optional fallback base; if a bespoke hero is missing in your /public,
 * just point the post.imageBase at CANAL_HERO_BASE so all sources resolve.
 */
function Picture({
  base,
  alt,
  priority = false,
}: {
  base: string
  alt: string
  priority?: boolean
}) {
  return (
    <picture>
      <source media="(min-width:1280px)" type="image/avif" srcSet={`${base}-2560w.avif`} />
      <source media="(min-width:1280px)" type="image/webp" srcSet={`${base}-2560w.webp`} />
      <source media="(min-width:768px)" type="image/avif" srcSet={`${base}-1920w.avif`} />
      <source media="(min-width:768px)" type="image/webp" srcSet={`${base}-1920w.webp`} />
      <source type="image/avif" srcSet={`${base}-1280w.avif`} />
      <source type="image/webp" srcSet={`${base}-1280w.webp`} />
      <Image
        src={`${base}.jpg`}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover"
      />
    </picture>
  )
}

// ------------------------------- Page ----------------------------------------
type Search = {
  q?: string
  cat?: string
  sort?: "new" | "title"
}

export default function Page({ searchParams }: { searchParams?: Search }) {
  const q = (searchParams?.q ?? "").toLowerCase().trim()
  const cat = searchParams?.cat as Category | undefined
  const sort = (searchParams?.sort ?? "new") as "new" | "title"

  let results = POSTS.slice()

  if (cat && CATEGORIES.includes(cat)) {
    results = results.filter((p) => p.category === cat)
  }

  if (q) {
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }

  results.sort(sort === "title" ? byTitleAsc : byDateDesc)

  return (
    <main className="bg-[#F7F7F6] text-[#131415]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Ambient hero background with gentle scrims for legibility */}
          <Image
            src={`${CANAL_HERO_BASE}.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[radial-gradient(1300px_680px_at_35%_30%,rgba(0,0,0,0.30),transparent_62%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="rounded-2xl bg-black/60 p-6 sm:p-8 text-white ring-1 ring-white/15 backdrop-blur">
            <p className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
              Saltaire • Blog hub
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Saltaire Guides & Calm Pet-Care Articles
            </h1>
            <p className="mt-3 text-lg text-white/90">
              Parking, best walks and dog-friendly tips — plus practical care for rabbits, reptiles, birds, fish and backyard hens.
            </p>

            {/* Server-side search/filter form (GET) */}
            <form
              action="/blog"
              method="get"
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr,auto,auto] sm:items-center"
            >
              <label className="relative block">
                <span className="sr-only">Search posts</span>
                <input
                  name="q"
                  defaultValue={q}
                  placeholder="Search posts (e.g., parking, dragon, rabbit)…"
                  className="w-full rounded-xl border bg-white/95 px-4 py-3 text-[15px] text-[#131415] shadow-sm outline-none ring-[#C89B3C]/40 placeholder:text-[#4A4F55]/70 focus:ring-2"
                  style={{ borderColor: "#E6E3DA" }}
                />
              </label>

              <label className="block">
                <span className="sr-only">Category</span>
                <select
                  name="cat"
                  defaultValue={cat ?? ""}
                  className="w-full rounded-xl border bg-white/95 px-4 py-3 text-[15px] text-[#131415] shadow-sm outline-none ring-[#C89B3C]/40 focus:ring-2"
                  style={{ borderColor: "#E6E3DA" }}
                >
                  <option value="">All categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {humanizeCategory(c)}
                    </option>
                  ))}
                </select>
              </label>

              <div className="flex gap-2">
                <select
                  name="sort"
                  defaultValue={sort}
                  className="rounded-xl border bg-white/95 px-4 py-3 text-[15px] text-[#131415] shadow-sm outline-none ring-[#C89B3C]/40 focus:ring-2"
                  style={{ borderColor: "#E6E3DA" }}
                  aria-label="Sort posts"
                >
                  <option value="new">Newest</option>
                  <option value="title">Title A–Z</option>
                </select>
                <button
                  type="submit"
                  className="rounded-xl px-5 py-3 text-[15px] font-semibold text-[#131415]"
                  style={{ backgroundColor: "#C89B3C" }}
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:pb-20">
        {/* Category chips (quick filters) */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link
            href="/blog"
            className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold ${
              !cat ? "bg-[#131415] text-white border-[#131415]" : "bg-white/90 text-[#131415]"
            }`}
            style={{ borderColor: "#E6E3DA" }}
          >
            All
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/blog?cat=${encodeURIComponent(c)}${sort ? `&sort=${sort}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`}
              className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold ${
                cat === c ? "bg-[#131415] text-white border-[#131415]" : "bg-white/90 text-[#131415]"
              }`}
              style={{ borderColor: "#E6E3DA" }}
            >
              {c}
            </Link>
          ))}
        </div>

        {results.length === 0 ? (
          <div
            className="mt-8 rounded-2xl border bg-white p-6 text-[#4A4F55]"
            style={{ borderColor: "#E6E3DA" }}
          >
            <p className="text-base">
              No results. Try a different search, or{" "}
              <Link href="/blog" className="underline underline-offset-4">
                reset filters
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((post, i) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
                style={{ borderColor: "#E6E3DA" }}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Picture base={post.imageBase || CANAL_HERO_BASE} alt={post.imageAlt} priority={i < 6} />
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs">
                    <span
                      className="inline-flex items-center rounded-full border px-2 py-0.5 font-semibold"
                      style={{ borderColor: "#EFEDE7", color: "#4A4F55" }}
                    >
                      {post.category}
                    </span>
                    <time dateTime={post.date} className="text-[#7B828A]">
                      {post.humanDate}
                    </time>
                  </div>

                  <h2 className="text-lg font-extrabold leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="underline-offset-4 group-hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-[15px] text-[#4A4F55]">{post.excerpt}</p>

                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center rounded-xl border px-3.5 py-2 text-sm font-semibold"
                      style={{ borderColor: "#E6E3DA", color: "#131415" }}
                      aria-label={`Read ${post.title}`}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SCHEMA (ItemList for articles) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: results.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://saltairedogs.uk/blog/${p.slug}`,
              name: p.title,
            })),
          }),
        }}
      />
    </main>
  )
}
