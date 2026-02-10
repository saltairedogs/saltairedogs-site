// src/app/(site)/search/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SEARCH_INDEX, type SearchDoc } from '@/lib/search-index'

export const metadata: Metadata = {
  title: 'Search | Saltaire Dogs + Pets',
  description: 'Search pages for dog walking, cat sitting, animal feeding, small pets & exotics, and more.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.saltairedogs.uk/search' },
}

function normalize(s: string) {
  return s.toLowerCase()
}

function tokenize(q: string) {
  return normalize(q).split(/[^a-z0-9+]+/i).filter(Boolean)
}

function score(doc: SearchDoc, terms: string[]) {
  // simple scorer: title > tags > blurb > url
  const t = normalize(doc.title)
  const b = normalize(doc.blurb)
  const tg = doc.tags.map(normalize)
  let s = 0
  for (const term of terms) {
    if (t.includes(term)) s += 6
    if (tg.some((g) => g.includes(term))) s += 3
    if (b.includes(term)) s += 2
    if (doc.url.includes(term)) s += 1
  }
  const phrase = terms.join(' ')
  if (phrase && t.includes(phrase)) s += 4
  return s
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function highlight(text: string, terms: string[]) {
  if (!terms.length) return text
  const pattern = new RegExp(`(${terms.map((t) => escapeRegExp(t)).join('|')})`, 'gi')
  return text.split(pattern).map((chunk, i) =>
    terms.some((t) => chunk.toLowerCase() === t.toLowerCase()) ? (
      <mark key={i} className="bg-yellow-100 rounded px-0.5">{chunk}</mark>
    ) : (
      <span key={i}>{chunk}</span>
    )
  )
}

export default function SearchPage({
  searchParams,
}: { searchParams?: { q?: string } }) {
  const q = (searchParams?.q ?? '').trim()
  const terms = tokenize(q)

  const results =
    q.length === 0
      ? []
      : SEARCH_INDEX
          .map((doc) => ({ doc, s: score(doc, terms) }))
          .filter((r) => r.s > 0)
          .sort((a, b) => b.s - a.s)
          .map((r) => r.doc)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-4 pt-14 pb-10 sm:pt-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Search</h1>

        {/* Search box */}
        <form method="GET" action="/search"
          className="mt-4 flex items-center gap-2 rounded-2xl border bg-white p-2 ring-1 border-slate-200">
          <input
            name="q"
            type="search"
            defaultValue={q}
            placeholder='Try "cat sitting", "animal feeding", "parrot visits", "dog walking"…'
            className="w-full bg-transparent px-2 py-2 text-sm outline-none"
            aria-label="Search the site"
          />
          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Search
          </button>
        </form>

        {/* States */}
        {q === '' ? (
          <p className="mt-6 text-slate-600 text-sm">Type something and hit enter.</p>
        ) : results.length === 0 ? (
          <div className="mt-8 rounded-xl border border-slate-200 p-6">
            <p className="text-slate-700">
              No results for <span className="font-semibold">“{q}”</span>.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Try: <span className="underline">cat sitting</span>, <span className="underline">animal feeding</span>,{' '}
              <span className="underline">parrot visits</span>.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Or Google:&nbsp;
              <a
                className="underline"
                href={`https://www.google.com/search?q=site%3Asaltairedogs.uk+${encodeURIComponent(q)}`}
                target="_blank"
              >
                site:saltairedogs.uk {q}
              </a>
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {results.map((r) => (
              <Link key={r.url} href={r.url} className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                <h2 className="text-lg font-semibold">{highlight(r.title, terms)}</h2>
                <p className="mt-1 text-sm text-slate-700">{highlight(r.blurb, terms)}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.tags.slice(0, 6).map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Suggested links if no query */}
        {q === '' && (
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {['/contact','/cat-sitting','/animal-feeding','/small-pets-exotics','/parrots-visits','/long-shift-support','/new-baby-help'].map((u) => {
              const doc = SEARCH_INDEX.find(d => d.url === u)!
              return (
                <Link key={u} href={u} className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-sm text-slate-700">{doc.blurb}</div>
                </Link>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
