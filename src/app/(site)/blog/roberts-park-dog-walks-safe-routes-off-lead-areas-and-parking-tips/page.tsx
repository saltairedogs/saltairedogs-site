import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roberts Park Dog Walks: Safe Routes, Off-Lead Areas, and Parking Tips | Saltaire Dog Walks Blog',
  description: 'Plan the perfect Roberts Park dog walk: off-lead guidance, safe routes, and where to park—local insight from daily walkers.',
}

const post = {
  slug: 'roberts-park-dog-walks-safe-routes-off-lead-areas-and-parking-tips',
  title: 'Roberts Park Dog Walks: Safe Routes, Off-Lead Areas, and Parking Tips',
  excerpt: 'Local knowledge for easy, enjoyable Roberts Park walks—what to know before you go.',
  coverImage: { src: '/north-cliffe-dog-rainbow.jpg', alt: 'Park scene with dog' },
  author: { name: 'Saltaire Dog Walks' },
  datePublished: new Date().toISOString(),
  readingTime: 6,
  category: 'Local Spots',
  tags: ['Roberts Park', 'parking', 'off-lead'],
  stats: { views: 0, likes: 0, helpfulVotes: 0 },
}

export default function Page() {
  const siteUrl = process.env.SITE_URL ?? 'https://saltairedogs.uk'

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: metadata.description,
    image: [`${siteUrl}${post.coverImage.src}`],
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: [{ '@type': 'Organization', name: post.author.name }],
    publisher: { '@type': 'Organization', name: 'Saltaire Dog Walks' },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where should I park for Roberts Park with a dog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Street parking around Victoria Road and the village side streets is common (be considerate). Hirst Lock area has some options for canal-first loops. Always check signage and avoid blocking driveways or access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Roberts Park off-lead friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Treat Roberts Park as an on-lead default near busy hubs, play areas and events. Perimeter loops and quieter corners can work for off-lead only if recall is solid and signage permits. Follow on-site rules first.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the park quietest for nervous dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Weekday mornings (before ~09:30) and later afternoons are calmer. Weekends get busy late mornings to mid-afternoon—stick to perimeters or choose woodland edges at Hirst Wood.',
        },
      },
    ],
  }

  return (
    <article className="min-h-screen bg-bg text-text">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Lead */}
      <p className="text-lg text-muted-foreground">
        Roberts Park is Saltaire’s centrepiece: wide paths, water views and easy links to the canal. Below you’ll find
        <strong> calm route ideas</strong>, practical <strong>on/off-lead guidance</strong>, realistic <strong>busy-time tips</strong>, and
        a simple <strong>parking & access</strong> rundown—so your walk feels relaxed from the first step.
      </p>

      {/* Figure */}
      <figure className="mt-8 overflow-hidden rounded-3xl border border-border">
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src="/north-cliffe-dog-rainbow.jpg"
            alt="Perimeter path by Roberts Park with rainbow light—great calm loop for dogs"
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
        <figcaption className="px-4 py-3 text-sm text-muted-foreground">
          Perimeter paths make calm loops—keep leads short near the bandstand and play areas.
        </figcaption>
      </figure>

      {/* Routes */}
      <section aria-labelledby="routes" className="mt-12">
        <h2 id="routes">Three simple loops (with surfaces & pinch points)</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-base font-semibold">1) Perimeter Calm Loop (~20 mins)</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Wide, mostly level paths. Great for loose-lead practice and puppies.
            </p>
            <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
              <li><strong>Surface:</strong> smooth park path</li>
              <li><strong>Pinch:</strong> play areas & pavilion—keep leads short</li>
              <li><strong>Notes:</strong> easiest at weekday 09:00 or later afternoons</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-base font-semibold">2) Trees & Upper Edge (~25–30 mins)</h3>
            <p className="mt-1 text-sm text-muted-foreground">A little more variety and shade; gentle gradients.</p>
            <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
              <li><strong>Surface:</strong> mixed smooth + gentle slopes</li>
              <li><strong>Pinch:</strong> steps near some paths—lead up early</li>
              <li><strong>Notes:</strong> good after light rain, avoids muddy dips</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-5">
            <h3 className="text-base font-semibold">3) Bridge & Canal Taster (~30–35 mins)</h3>
            <p className="mt-1 text-sm text-muted-foreground">Add a short towpath segment for variety (calm times).</p>
            <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
              <li><strong>Surface:</strong> park path + canal stone</li>
              <li><strong>Pinch:</strong> canal bridges & locks—short lead, step aside</li>
              <li><strong>Notes:</strong> avoid sunny weekend middays</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Off-lead guidance */}
      <section aria-labelledby="offlead" className="mt-12">
        <h2 id="offlead">Off-lead guidance (practical, not legal advice)</h2>
        <div className="mt-3 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Often sensible (when quiet & rules allow)</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Perimeter lines with good sight-lines and space</li>
              <li>Quieter corners away from the pavilion and bandstand</li>
              <li>Only with solid recall and after a readiness check</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-white p-4">
            <h3 className="text-base font-semibold">Usually on-lead / avoid off-lead</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground marker:text-brand">
              <li>Children’s play areas, event hubs, busy lawns</li>
              <li>Bridges, narrow pinch points, entrances</li>
              <li>Any area with signage requiring leads</li>
            </ul>
          </article>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Follow on-site signage first. If recall dips, switch to a standard lead or a long line in open, quiet areas.
        </p>
      </section>

      {/* Parking & access */}
      <section aria-labelledby="access" className="mt-12">
        <h2 id="access">Parking & access (be considerate)</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Start point</th>
                <th className="px-4 py-3">Parking</th>
                <th className="px-4 py-3">Gradient</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium">Victoria Road side</td>
                <td className="px-4 py-3">Village side streets (respect residents)</td>
                <td className="px-4 py-3">Mostly level</td>
                <td className="px-4 py-3">Close to pavilion; busiest at weekends</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Hirst Lock</td>
                <td className="px-4 py-3">Limited on-street near lock</td>
                <td className="px-4 py-3">Level (towpath)</td>
                <td className="px-4 py-3">Great for canal-first loops; short lead near locks</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Saltaire Road approach</td>
                <td className="px-4 py-3">Mixed; check signage</td>
                <td className="px-4 py-3">Gentle</td>
                <td className="px-4 py-3">Quicker access to upper edge paths</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Never block access; check time limits and event notices.</p>
      </section>

      {/* Busy times */}
      <section aria-labelledby="busy" className="mt-12">
        <h2 id="busy">Busy times vs. calmer windows</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left">
              <tr>
                <th className="px-4 py-3">Day</th>
                <th className="px-4 py-3">Busier windows</th>
                <th className="px-4 py-3">Calmer windows</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-medium">Weekdays</td>
                <td className="px-4 py-3">08:00–09:00; after-school 15:30–17:30 (seasonal)</td>
                <td className="px-4 py-3">09:30–12:00; 16:30–18:30 (light dependent)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Weekends</td>
                <td className="px-4 py-3">10:30–16:00 (good weather spikes)</td>
                <td className="px-4 py-3">Early (07:30–09:30) • Late evening</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Events</td>
                <td className="px-4 py-3">Park events & matches—central lawns</td>
                <td className="px-4 py-3">Perimeter only; consider a quiet village loop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Nearby extensions */}
      <section aria-labelledby="extensions" className="mt-12">
        <h2 id="extensions">Nice extensions (when energy allows)</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>
            <strong>Canal towards Hirst Lock:</strong> short, calm towpath taster. Keep leads short at bridges and locks.
          </li>
          <li>
            <strong>Hirst Wood edges:</strong> woodland margins with shade and space—great for long-line practice on quiet days.
          </li>
        </ul>
      </section>

      {/* Mini FAQ (mirrors JSON-LD) */}
      <section aria-labelledby="faq" className="mt-12">
        <h2 id="faq">Quick questions</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-white">
          {[
            {
              q: 'Where should I park?',
              a: 'Village side streets near Victoria Road (be considerate) or near Hirst Lock for canal-first loops. Always check signs.',
            },
            {
              q: 'Off-lead okay?',
              a: 'Treat the park as on-lead near busy hubs. Perimeter areas can work off-lead only when quiet, rules allow, and recall is solid.',
            },
            {
              q: 'When is it quiet?',
              a: 'Weekday mornings pre-09:30 and later afternoons. Weekends are busiest late morning to mid-afternoon.',
            },
          ].map((f) => (
            <div key={f.q} className="px-5 py-4">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta" className="mt-14">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 text-white sm:px-10"
          style={{
            background:
              'radial-gradient(1000px 600px at 10% 10%, rgba(200,155,60,0.18), transparent 60%), linear-gradient(135deg, #131415 0%, #1C1E20 100%)',
          }}
        >
          <div className="relative mx-auto max-w-3xl">
            <h2 id="cta" className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Want a park plan tailored to your dog?
            </h2>
            <p className="mt-2 text-white/85">
              We map calm loops, pick quiet windows, and send photo + GPS updates. Local, kind, and practical.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact?topic=roberts-park"
                className="inline-flex items-center justify-center rounded-xl bg-[#C89B3C] px-5 py-3 text-sm font-semibold text-[#131415] shadow-sm hover:opacity-90"
              >
                Book a meet &amp; greet
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                See services
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/70">DBS • First-aid • GPS &amp; photos • Calm handling</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </section>
    </article>
  )
}
