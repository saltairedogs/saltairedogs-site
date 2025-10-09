"use client"
import React, { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Clock, Check, Zap, MapPin, Pin } from "lucide-react"

type Area = {
  id: string
  name: string
  slug: string
  tagline: string
  summary: string
  landmarks: string[]
  distanceKmFromSaltaire: number
  walkEtaMins: number
  services: ("Group Walks" | "Solo Walks" | "Puppy Visits" | "Pop-ins" | "Weekend" | "Evenings")[]
  dogSizes: ("Small" | "Medium" | "Large")[]
  image?: string
  notes?: string
}

const SERVICE_OPTIONS = [
  { key: "Group Walks", label: "Group Walks" },
  { key: "Solo Walks", label: "1:1 Solo Walks" },
  { key: "Puppy Visits", label: "Puppy Visits" },
  { key: "Pop-ins", label: "Pop-ins" },
  { key: "Weekend", label: "Weekends" },
  { key: "Evenings", label: "Evenings" },
] as const

const DOG_SIZE_OPTIONS = [
  { key: "Small", label: "Small" },
  { key: "Medium", label: "Medium" },
  { key: "Large", label: "Large" },
] as const

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ")
}

function kmToMiles(km: number) {
  return (km * 0.621371).toFixed(1)
}

export default function AreasClient({ areas }: { areas: Area[] }) {
  const [query, setQuery] = useState("")
  const [serviceFilters, setServiceFilters] = useState<string[]>([])
  const [sizeFilters, setSizeFilters] = useState<string[]>([])
  const [maxDistance, setMaxDistance] = useState<number>(8)
  const [showOnlyPriority, setShowOnlyPriority] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return areas
      .filter((a) => {
        const matchesQuery = q
          ? [
              a.name.toLowerCase(),
              a.slug.toLowerCase(),
              a.tagline.toLowerCase(),
              a.summary.toLowerCase(),
              a.landmarks.join(" ").toLowerCase(),
            ].some((s) => s.includes(q))
          : true

        const matchesServices =
          serviceFilters.length === 0 || serviceFilters.every((s) => a.services.includes(s as any))

        const matchesSizes =
          sizeFilters.length === 0 || sizeFilters.every((s) => a.dogSizes.includes(s as any))

        const withinDistance = a.distanceKmFromSaltaire <= maxDistance

        const priority = a.id === "saltaire" || a.id === "hirst-wood" || a.walkEtaMins <= 15
        const matchesPriority = showOnlyPriority ? priority : true

        return matchesQuery && matchesServices && matchesSizes && withinDistance && matchesPriority
      })
      .sort((a, b) => a.distanceKmFromSaltaire - b.distanceKmFromSaltaire)
  }, [areas, query, serviceFilters, sizeFilters, maxDistance, showOnlyPriority])

  useEffect(() => {
    if (query.trim().length > 0 && showOnlyPriority) setShowOnlyPriority(false)
  }, [query, showOnlyPriority])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-6 h-max">
        <FilterPanel
          query={query}
          onQuery={setQuery}
          serviceFilters={serviceFilters}
          onToggleService={(s) =>
            setServiceFilters((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
          }
          sizeFilters={sizeFilters}
          onToggleSize={(s) => setSizeFilters((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))}
          maxDistance={maxDistance}
          onMaxDistance={setMaxDistance}
          showOnlyPriority={showOnlyPriority}
          onTogglePriority={() => setShowOnlyPriority((v) => !v)}
        />
      </aside>

      <section className="lg:col-span-8 xl:col-span-9 space-y-6">
        <ResultsHeader count={results.length} total={areas.length} />
        <AreaCards areas={results} />
        <CoverageNote />
        <AreaFAQ />
        <CTA />
      </section>
    </div>
  )
}

function FilterPanel(props: {
  query: string
  onQuery: (v: string) => void
  serviceFilters: string[]
  onToggleService: (key: string) => void
  sizeFilters: string[]
  onToggleSize: (key: string) => void
  maxDistance: number
  onMaxDistance: (v: number) => void
  showOnlyPriority: boolean
  onTogglePriority: () => void
}) {
  const {
    query,
    onQuery,
    serviceFilters,
    onToggleService,
    sizeFilters,
    onToggleSize,
    maxDistance,
    onMaxDistance,
    showOnlyPriority,
    onTogglePriority,
  } = props

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">Find your area</h2>
      <p className="mt-1 text-sm text-slate-600">Search and filter coverage to see typical ETAs and services.</p>

      <div className="mt-4">
        <label htmlFor="search" className="sr-only">
          Search areas
        </label>
        <div className="relative">
          <input
            id="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Try: Saltaire, Baildon, Shipley…"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-xs text-slate-500 hover:text-slate-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <fieldset>
          <legend className="text-sm font-medium text-slate-900">Services</legend>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICE_OPTIONS.map((opt) => {
              const active = serviceFilters.includes(opt.key)
              return (
                <label
                  key={opt.key}
                  className={
                    classNames(
                      "flex items-center gap-3 rounded-lg border px-3 py-2 text-sm cursor-pointer",
                      active ? "border-emerald-400 bg-emerald-50" : "border-slate-300 hover:border-slate-400"
                    )
                  }
                >
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    checked={active}
                    onChange={() => onToggleService(opt.key)}
                  />
                  <span>{opt.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-slate-900">Dog size</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {DOG_SIZE_OPTIONS.map((opt) => {
              const active = sizeFilters.includes(opt.key)
              return (
                <label
                  key={opt.key}
                  className={
                    classNames(
                      "flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer",
                      active ? "border-emerald-400 bg-emerald-50" : "border-slate-300 hover:border-slate-400"
                    )
                  }
                >
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    checked={active}
                    onChange={() => onToggleSize(opt.key)}
                  />
                  <span>{opt.label}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-slate-900">Distance from Saltaire</legend>
          <div className="mt-4">
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={maxDistance}
              onChange={(e) => onMaxDistance(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
              <span>0 km</span>
              <span>{maxDistance} km</span>
              <span>10 km</span>
            </div>
          </div>
        </fieldset>

        <div className="flex items-center justify-between rounded-lg border border-slate-300 p-3">
          <div className="flex items-center gap-3">
            <input
              id="priority"
              type="checkbox"
              className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              checked={showOnlyPriority}
              onChange={onTogglePriority}
            />
            <label htmlFor="priority" className="text-sm text-slate-800">
              Show priority areas (fastest ETAs)
            </label>
          </div>
          <span className="text-xs text-slate-500">&lt;= 15 mins ETA</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={() => {
              onQuery("")
              SERVICE_OPTIONS.forEach((o) => {
                if (serviceFilters.includes(o.key)) onToggleService(o.key)
              })
              DOG_SIZE_OPTIONS.forEach((o) => {
                if (sizeFilters.includes(o.key)) onToggleSize(o.key)
              })
              onMaxDistance(8)
              if (showOnlyPriority) onTogglePriority()
            }}
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Reset
          </button>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-black shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Get a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ResultsHeader({ count, total }: { count: number; total: number }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">{count} area{count === 1 ? "" : "s"} found</h2>
        <p className="text-sm text-slate-600">Showing results near Saltaire (within your filter).</p>
      </div>
      <div className="text-xs text-slate-500">Total coverage listed: {total} areas</div>
    </div>
  )
}

function AreaCards({ areas }: { areas: Area[] }) {
  if (areas.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
        <p className="text-slate-700 font-medium">No matches yet.</p>
        <p className="mt-1 text-sm text-slate-600">
          Try widening your distance, clearing filters, or message us — if you’re nearby we may still be able to help.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Link href="/contact" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
            Contact us
          </Link>
          <span className="text-slate-300">•</span>
          <button
            className="text-sm text-slate-700 hover:text-slate-900"
            onClick={() => typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Adjust filters
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {areas.map((a) => (
        <AreaCard key={a.id} area={a} />
      ))}
    </div>
  )
}

function AreaCard({ area }: { area: Area }) {
  const priority = area.id === "saltaire" || area.id === "hirst-wood" || area.walkEtaMins <= 15
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[16/9] w-full bg-slate-100">
        {area.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={area.image} alt={area.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-emerald-50 to-emerald-100" />
        )}
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              <Link href={`#${area.slug}`} className="hover:underline">
                {area.name}
              </Link>
            </h3>
            <p className="text-sm text-slate-600">{area.tagline}</p>
          </div>
          {priority && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
              <Zap className="h-3.5 w-3.5" /> Priority
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-700">
          <span className="inline-flex items-center gap-1">
            <Pin className="h-4 w-4" /> {area.distanceKmFromSaltaire} km ({kmToMiles(area.distanceKmFromSaltaire)} mi)
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" /> ETA {area.walkEtaMins} mins
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">{area.summary}</p>

        <div className="flex flex-wrap items-center gap-2">
          {area.services.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
            >
              <Check className="h-3.5 w-3.5" /> {s}
            </span>
          ))}
        </div>

        {area.landmarks.length > 0 && (
          <div className="pt-2">
            <div className="text-xs font-semibold text-slate-900">Landmarks</div>
            <ul className="mt-1 flex flex-wrap gap-2 text-xs text-slate-600">
              {area.landmarks.map((l) => (
                <li key={l} className="rounded-full bg-white px-2 py-1 ring-1 ring-slate-200">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/contact?area=${encodeURIComponent(area.slug)}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-medium text-black shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Enquire for {area.name} <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={`#${area.slug}-details`} className="text-sm text-emerald-700 hover:text-emerald-800">
            Details
          </a>
        </div>
      </div>
    </article>
  )
}

function CoverageNote() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-6 ring-1 ring-inset ring-emerald-200">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="shrink-0">
          <MapPin className="h-6 w-6 text-emerald-700" />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-900">On the edge of our coverage?</h3>
          <p className="text-sm text-slate-700">
            If you’re just outside the radius shown here, send us a message. We can often arrange a pick-up,
            suggest a nearby meeting point, or add you to the waitlist as we expand routes.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <Link href="/contact" className="text-sm font-medium text-emerald-700 hover:text-emerald-800">
              Contact us
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/pricing" className="text-sm text-slate-700 hover:text-slate-900">
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function AreaFAQ() {
  return (
    <section className="pt-8">
      <h3 className="text-xl font-semibold text-slate-900">Area FAQs</h3>
      <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        <FAQItem q="Do you charge extra for longer distances?">
          We include pick-up and drop-off in our pricing for listed coverage areas. For locations on the edge or
          beyond, we’ll confirm any small travel supplement up-front, if needed.
        </FAQItem>
        <FAQItem q="Can I request specific walk locations (e.g. Roberts Park)?">
          Absolutely — we plan routes based on your dog’s temperament and the weather. We’ll confirm safe, suitable
          locations that match your dog’s needs (and your preferences).
        </FAQItem>
        <FAQItem q="What if my dog is reactive — do you serve my area?">
          Yes. Solo walks and low-traffic time slots are available in most areas. We’ll propose a plan based on
          your location and goals (lead skills, decompression, recall refreshers, etc.).
        </FAQItem>
        <FAQItem q="How soon can you start in my area?">
          For Saltaire and neighbouring areas (Hirst Wood, Shipley, Frizinghall), we often have immediate slots.
          For others, we’ll offer the next opening or waitlist you for your preferred days.
        </FAQItem>
      </div>

      <div className="mt-10 space-y-10">
        {/* This list of details mirrors the cards */}
        {/* Intentionally omitted to keep client size moderate */}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Close to Saltaire? You’re in!</h3>
          <p className="mt-1 text-emerald-50 max-w-xl">
            Message us with your postcode and preferred days. We’ll confirm your slot and set up a meet & greet.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black backdrop-blur ring-1 ring-inset ring-emerald-200 hover:bg-emerald-50"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-50"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <details className="group px-5 py-4" open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">{q}</h4>
        </div>
        <div className="mt-0.5 shrink-0 rounded-full border border-slate-300 p-1 text-slate-500 group-open:rotate-180 transition">
          <ChevronDown className="h-4 w-4" />
        </div>
      </summary>
      <div className="pt-3 text-sm text-slate-700">{children}</div>
    </details>
  )
}
