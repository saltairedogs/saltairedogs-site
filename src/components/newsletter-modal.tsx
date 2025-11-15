// src/components/newsletter-modal.tsx
'use client'

import { useEffect, useState } from 'react'

type Status = 'idle' | 'submitting' | 'submitted' | 'error'

export function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    // Only show if not dismissed or submitted before
    const dismissed = localStorage.getItem('sd:newsletter:dismissed')
    const submitted = localStorage.getItem('sd:newsletter:submitted')
    if (!dismissed && !submitted) {
      const t = setTimeout(() => setOpen(true), 700) // tiny delay after load
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        localStorage.setItem('sd:newsletter:dismissed', '1')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => {
    setOpen(false)
    localStorage.setItem('sd:newsletter:dismissed', '1')
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('submitted')
      localStorage.setItem('sd:newsletter:submitted', '1')
      setTimeout(() => setOpen(false), 600)
    } catch (e) {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop (non-interactive to match request: close only via X) */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      {/* Modal card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign up for updates"
        className="relative z-[101] w-[92vw] max-w-md rounded-2xl bg-white p-5 shadow-xl ring-1"
        style={{ color: '#131415', borderColor: '#E6E3DA' }}
      >
        {/* Close (only exit affordance) */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm"
          style={{ borderColor: '#E6E3DA', color: '#131415' }}
        >
          ×
        </button>

        <h2 className="mb-1 text-xl font-bold">Sign up to hear the latest news!</h2>
        <p className="mb-4 text-sm" style={{ color: '#7B828A' }}>
          Simple updates about local walks and pet care. No email needed — just your name and phone.
        </p>

        <form onSubmit={onSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-sm font-semibold">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-[15px]"
              style={{ borderColor: '#E6E3DA' }}
              placeholder="Alex Smith"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold">Phone number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 text-[15px]"
              style={{ borderColor: '#E6E3DA' }}
              placeholder="07xxx xxxxxx"
              inputMode="tel"
              pattern="[0-9 +()-]{7,}"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-[15px] font-semibold"
            style={{ backgroundColor: '#C89B3C', color: '#131415' }}
          >
            {status === 'submitting' ? 'Sending…' : status === 'submitted' ? 'Thanks! ✅' : 'Sign up'}
          </button>
          {status === 'error' && (
            <p className="text-sm" style={{ color: '#8B3A3A' }}>
              Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
