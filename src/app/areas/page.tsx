import type { Metadata } from "next";
import Link from "next/link";
import AreasClient from "./areas-client";
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";

export const metadata: Metadata = {
  title: "Areas We Cover | Saltaire Dogs",
  description:
    "Reliable dog walking around Saltaire, Shipley, Baildon, Bingley, and surrounding areas. See coverage, ETAs, pricing highlights, and FAQs.",
  openGraph: {
    title: "Areas We Cover | Saltaire Dogs",
    description:
      "Reliable dog walking around Saltaire, Shipley, Baildon, Bingley, and surrounding areas.",
    type: "website",
    url: "/areas",
  },
  alternates: { canonical: "/areas" },
};

type Area = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  summary: string;
  landmarks: string[];
  distanceKmFromSaltaire: number;
  walkEtaMins: number;
  services: ("Group Walks" | "Solo Walks" | "Puppy Visits" | "Pop-ins" | "Weekend" | "Evenings")[];
  dogSizes: ("Small" | "Medium" | "Large")[];
  image?: string;
  notes?: string;
};

const AREAS: Area[] = [
  { id: "saltaire", name: "Saltaire", slug: "saltaire", tagline: "Our home base — flexible slots daily", summary: "Heritage village with riverside routes and canal paths. Perfect for varied, enriching walks with safe pick-up points.", landmarks: ["Victoria Road", "Salts Mill", "Roberts Park", "Leeds–Liverpool Canal"], distanceKmFromSaltaire: 0, walkEtaMins: 5, services: ["Group Walks", "Solo Walks", "Puppy Visits", "Pop-ins", "Weekend", "Evenings"], dogSizes: ["Small", "Medium", "Large"] },
  { id: "shipley", name: "Shipley", slug: "shipley", tagline: "Quick canal access & quiet streets", summary: "Shipley offers easy access to the canal towpath and residential loops ideal for structured group walks.", landmarks: ["Shipley Station", "Gallagher’s Field", "Canal Towpath"], distanceKmFromSaltaire: 1.6, walkEtaMins: 10, services: ["Group Walks", "Solo Walks", "Puppy Visits", "Pop-ins", "Evenings"], dogSizes: ["Small", "Medium", "Large"] },
  { id: "baildon", name: "Baildon", slug: "baildon", tagline: "Moorland edges & village greens", summary: "From village greens to Baildon Moor edges, we balance stimulation and safety based on your dog’s needs.", landmarks: ["Baildon Bank", "Village Centre", "Baildon Moor"], distanceKmFromSaltaire: 2.9, walkEtaMins: 15, services: ["Group Walks", "Solo Walks", "Puppy Visits", "Pop-ins", "Weekend"], dogSizes: ["Small", "Medium", "Large"] },
  { id: "bingley", name: "Bingley", slug: "bingley", tagline: "Riverside circuits & parks", summary: "Canal-side circuits, Myrtle Park laps, and gentle woodland options — great for recall practice and calm social time.", landmarks: ["Myrtle Park", "Five Rise Locks", "Canal"], distanceKmFromSaltaire: 4.8, walkEtaMins: 20, services: ["Group Walks", "Solo Walks", "Puppy Visits", "Pop-ins"], dogSizes: ["Small", "Medium", "Large"] },
  { id: "hirst-wood", name: "Hirst Wood", slug: "hirst-wood", tagline: "River, woods, and wildlife", summary: "Shaded routes and river access for cooling dips in summer (where safe). Great recall zones away from traffic.", landmarks: ["Hirst Lock", "Hirst Wood Nature Reserve"], distanceKmFromSaltaire: 1.7, walkEtaMins: 10, services: ["Group Walks", "Solo Walks", "Puppy Visits", "Pop-ins", "Weekend", "Evenings"], dogSizes: ["Small", "Medium", "Large"] },
  { id: "frizinghall", name: "Frizinghall", slug: "frizinghall", tagline: "Train-adjacent pick-ups", summary: "Convenient pick-ups near the station and residential streets for consistent routines.", landmarks: ["Frizinghall Station"], distanceKmFromSaltaire: 3.6, walkEtaMins: 16, services: ["Group Walks", "Solo Walks", "Pop-ins", "Evenings"], dogSizes: ["Small", "Medium", "Large"] },
];

export default function AreasPage() {
  return (
    <>
      {/* Global header/navigation */}
      <SiteHeader />

      {/* Page content */}
      <main className="min-h-screen bg-white">
        <HeaderHero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
          <Breadcrumbs />
          <AreasClient areas={AREAS} />
        </div>
      </main>

      {/* Global footer */}
      <SiteFooter />
    </>
  );
}

function HeaderHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-sm font-medium ring-1 ring-inset ring-emerald-200">
              Areas we cover
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Dog walking in Saltaire and beyond
            </h1>
            <p className="max-w-2xl text-slate-600 text-lg">
              We’re based in Saltaire and cover nearby villages and neighbourhoods for reliable, enrichment-first
              dog walks. Search below to see if we’re in your area, or message us if you’re close-by.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm text-slate-800 ring-1 ring-inset ring-white">DBS checked</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm text-slate-800 ring-1 ring-inset ring-white">First aid trained</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm text-slate-800 ring-1 ring-inset ring-white">Small, friendly groups</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm text-slate-800 ring-1 ring-inset ring-white">Pick-up & drop-off included</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-8 w-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]" />
    </section>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-slate-700 transition">Home</Link>
        </li>
        <li className="text-slate-300">/</li>
        <li className="text-slate-700 font-medium">Areas</li>
      </ol>
    </nav>
  );
}
