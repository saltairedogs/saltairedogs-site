// src/components/announcement-banner.tsx
import React from 'react'

// Thin, sticky site-wide announcement bar. Server component.

const WA_NUMBER = '447424208127'
const WA_TEXT = encodeURIComponent(
  "Hi Giuseppe, I'm in Saltaire/Shipley and looking for pet care."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

export function AnnouncementBanner() {
  return (
    <div
      className="sticky top-0 z-[60] w-full border-b"
      style={{ backgroundColor: '#C89B3C', color: '#131415', borderColor: '#E6E3DA' }}
      role="region"
      aria-label="WhatsApp enquiry banner"
    >
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex h-8 max-w-6xl items-center justify-center px-4 text-center text-[13px] font-semibold underline-offset-4 hover:underline sm:px-6 sm:text-sm"
        aria-label="Looking for walks or pet sitting? Message Giuseppe on WhatsApp"
      >
        Looking for walks or pet sitting? Message Giuseppe on WhatsApp.
      </a>
    </div>
  )
}
