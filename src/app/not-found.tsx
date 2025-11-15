'use client'

// src/app/not-found.tsx
import { useEffect, useState, FormEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header as SiteHeader } from '@/components/header'
import { Footer as SiteFooter } from '@/components/footer'
import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Home, Mail, Search, ArrowLeft, PawPrint, MapPin, Camera, ShieldCheck, Clock, Phone, HeartHandshake,
} from 'lucide-react'

const BRAND = {
  gold: '#C89B3C',
  ink: '#131415',
  mute: '#7B828A',
  stone: '#EFEEE9',
  hair: '#E6E3DA',
}

// Removed “Pricing”
const quickLinks = [
  { label: 'Areas', href: '/areas' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

// Broadened to all animals
const trustRow = [
  { icon: <ShieldCheck className="h-4 w-4" />, text: 'Enhanced DBS' },
  { icon: <Camera className="h-4 w-4" />, text: 'Photo updates' },
  { icon: <PawPrint className="h-4 w-4" />, text: 'All animals' },
  { icon: <Clock className="h-4 w-4" />, text: 'Reliable windows' },
]

export default function NotFound() {
  useReveal()

  const [canGoBack, setCanGoBack] = useState(false)
  useEffect(() => {
    setCanGoBack(!!document.referrer || window.history.length > 1)
  }, [])

  const onBack = () => {
    if (document.referrer) window.history.back()
    else window.location.href = '/'
  }

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const q = String(fd.get('q') ?? '').trim()
    if (!q) return
    window.location.href = '/search?q=' + encodeURIComponent(q)
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />

      <main
        id="main"
        className="bg-[#F7F7F6] text-[color:var(--ink,#131415)]"
        style={{ ['--ink' as any]: BRAND.ink }}
      >
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/saltaire-dog-walk-salts-mill-canal-golden-hour-hero.webp"
              alt="Saltaire riverside at blue hour"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1100px_600px_at_15%_45%,rgba(0,0,0,.28),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-black/25 to-transparent" />

          <Container>
            <div className="relative py-14 sm:py-16 lg:py-20">
              <div
                className="mx-auto max-w-3xl rounded-3xl border bg-white/85 p-6 shadow-xl backdrop-blur ring-1"
                style={{ borderColor: BRAND.hair }}
              >
                <Badge className="bg-[color:var(--gold,#C89B3C)] text-[color:var(--ink,#131415)]">
                  404 • Page not found
                </Badge>

                <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We can’t find that page — but we can help keep your pets looked after
                </h1>

                <p className="mt-2 max-w-prose text-[color:var(--mute,#7B828A)]">
                  Links move around. No stress. Try a quick search or jump to a popular page below.
                </p>

                {/* Search */}
                <form
                  onSubmit={onSearch}
                  role="search"
                  aria-label="Site search"
                  className="mt-4 flex items-center gap-2 rounded-2xl border bg-white p-2 ring-1"
                  style={{ borderColor: BRAND.hair }}
                >
                  <Search className="ml-1 h-5 w-5 text-[color:var(--mute,#7B828A)]" />
                  <input
                    name="q"
                    type="search"
                    placeholder='Try “cat sitting”, “animal feeding”, or “parrot visits”…'
                    className="w-full bg-transparent px-2 py-2 text-sm outline-none"
                    aria-label="Search the site"
                  />
                  <Button type="submit" className="rounded-xl bg-[color:var(--gold,#C89B3C)] text-[color:var(--ink,#131415)] hover:opacity-90">
                    Search
                  </Button>
                </form>

                {/* Action row */}
                <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                  <Button
                    onClick={onBack}
                    className="rounded-xl bg-[color:var(--gold,#C89B3C)] text-[color:var(--ink,#131415)] hover:opacity-90"
                    aria-label="Go back to previous page"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {canGoBack ? 'Go back' : 'Go home'}
                  </Button>

                  <Button asChild variant="outline" className="rounded-xl border-[color:var(--hair,#E6E3DA)] bg-white">
                    <Link href="/contact" aria-label="Message us">
                      <Mail className="mr-2 h-4 w-4" />
                      Message us
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-xl text-[color:var(--mute,#7B828A)] hover:bg-white/60"
                  >
                    <Link
                      href="https://www.google.com/search?q=site:saltairedogs.uk"
                      target="_blank"
                      aria-label="Open Google site search"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Google site search
                    </Link>
                  </Button>
                </div>

                {/* Trust strip */}
                <div
                  className="mt-4 inline-flex flex-wrap items-center gap-3 rounded-xl bg-[color:var(--stone,#EFEEE9)] px-3 py-2"
                  aria-hidden="true"
                >
                  {trustRow.map((t, i) => (
                    <span key={i} className="inline-flex items-center gap-2 text-xs text-[color:var(--mute,#7B828A)]">
                      {t.icon} {t.text}
                      {i < trustRow.length - 1 && <span className="mx-2 opacity-40">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Popular links */}
        <section className="py-12 sm:py-14">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular places to go</h2>
              <p className="mt-2 text-[color:var(--mute,#7B828A)]">Shortcuts so you don’t bounce.</p>
            </div>

            <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group rounded-xl border bg-white px-4 py-3 text-center text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.2)]"
                  style={{ borderColor: BRAND.hair, color: BRAND.ink }}
                  data-reveal
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Explore cards (updated copy to all animals) */}
        <section className="pb-18 pt-2">
          <Container>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
              <ExploreCard
                href="/how-it-works"
                title="What we offer"
                copy="Dog walks, cat sitting, and small pets & exotics — with simple photo updates."
                badge="Services"
                icon={<PawPrint className="h-4 w-4" />}
                image="/saltaire-victoria-road-schnauzer-on-lead.webp"
              />

              <ExploreCard
                href="/areas"
                title="Areas we cover"
                copy="Saltaire, Shipley — if you’re nearby, message and we’ll try to fit you in."
                badge="Service area"
                icon={<MapPin className="h-4 w-4" />}
                image="/maps-coverage-saltaire.webp"
              />
            </div>

            {/* Reassurance strip */}
            <div
              className="mx-auto mt-8 max-w-6xl rounded-2xl border bg-[color:var(--stone,#EFEEE9)] p-5"
              style={{ borderColor: BRAND.hair }}
              data-reveal
            >
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="h-5 w-5 text-emerald-700" />
                  <p className="text-sm font-semibold">We’re nearby and responsive</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-white text-[color:var(--ink,#131415)] ring-1" style={{ borderColor: BRAND.hair }}>
                    Saltaire & Shipley
                  </Badge>
                  <Badge className="bg-white text-[color:var(--ink,#131415)] ring-1" style={{ borderColor: BRAND.hair }}>
                    DBS & insured
                  </Badge>
                  <Badge className="bg-white text-[color:var(--ink,#131415)] ring-1" style={{ borderColor: BRAND.hair }}>
                    Photo updates
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contact row */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 rounded-xl bg-[color:var(--gold,#C89B3C)] px-6 text-[color:var(--ink,#131415)] hover:opacity-90"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Message us
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-[color:var(--hair,#E6E3DA)] bg-white px-6 text-[color:var(--ink,#131415)] hover:bg-[color:var(--stone,#EFEEE9)]"
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go to homepage
                </Link>
              </Button>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[color:var(--mute,#7B828A)]">
              Found a broken link?{' '}
              <a
                className="underline decoration-[color:var(--gold,#C89B3C)] underline-offset-2 hover:opacity-90"
                href={`mailto:saltairedogs@proton.me?subject=Broken%20link%20report&body=URL%20that%20failed:%20${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}`}
              >
                Tell us and we’ll fix it.
              </a>
            </p>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

function ExploreCard({
  href, title, copy, badge, icon, image,
}: {
  href: string; title: string; copy: string; badge: string; icon: React.ReactNode; image: string
}) {
  return (
    <Link
      href={href}
      className="group relative isolate overflow-hidden rounded-3xl border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)]"
      style={{ borderColor: BRAND.hair }}
      data-reveal
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          sizes="50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
      </div>
      <div className="p-6 sm:p-8">
        <span
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[color:var(--ink,#131415)] ring-1"
          style={{ borderColor: BRAND.hair }}
        >
          {icon} {badge}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.35)]">
          {title}
        </h3>
        <p className="mt-2 max-w-prose text-sm text-white/90">{copy}</p>
        <div
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-[color:var(--ink,#131415)] ring-1"
          style={{ borderColor: BRAND.hair }}
        >
          Explore <span aria-hidden>→</span>
        </div>
      </div>
    </Link>
  )
}

function useReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('reveal-in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selector])

  if (typeof window !== 'undefined' && !document.getElementById('nf-reveal-style')) {
    const style = document.createElement('style')
    style.id = 'nf-reveal-style'
    style.innerHTML = `
      [data-reveal]{opacity:0;transform:translateY(10px)}
      .reveal-in{opacity:1!important;transform:translateY(0)!important;transition:opacity .45s ease,transform .45s ease}
    `
    document.head.appendChild(style)
  }
}
