// src/components/announcement-banner.tsx
import Link from 'next/link'

// Thin, sticky site-wide announcement bar. Server component.
export function AnnouncementBanner() {
  return (
    <div
      className="sticky top-0 z-[60] w-full border-b"
      style={{ backgroundColor: '#C89B3C', color: '#131415', borderColor: '#E6E3DA' }}
      role="region"
      aria-label="Site announcement"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-8 items-center justify-center text-center text-[13px] sm:text-sm">
          <Link
            href="/contact"
            className="font-semibold underline-offset-4 hover:underline"
            aria-label="Looking for pet sitting or anything else? Contact us"
          >
            Looking for pet sitting or anything else? Click here!
          </Link>
        </div>
      </div>
    </div>
  )
}
