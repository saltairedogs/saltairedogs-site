"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Marquee: Continuously scrolls its children horizontally.
 * - Duplicates content to create a seamless loop
 * - Duration is configurable (default 40s)
 * - Respects reduced-motion (stops animation)
 * - Optional pause on hover
 */
export type MarqueeProps = {
  children: React.ReactNode
  className?: string
  /** total time for one full cycle */
  durationMs?: number
  /** optional mobile-only duration override */
  mobileDurationMs?: number
  /** direction of travel */
  direction?: "left" | "right"
  /** pause animation when hovered */
  pauseOnHover?: boolean
  /** apply gradient mask on edges */
  masked?: boolean
}

export function Marquee({
  children,
  className,
  durationMs = 40000,
  mobileDurationMs,
  direction = "left",
  pauseOnHover = true,
  masked = true,
}: MarqueeProps) {
  const anim = direction === "left" ? "animate-marquee-left-40" : "animate-marquee-right-40"
  const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches
  const effectiveDuration = isMobile && mobileDurationMs ? mobileDurationMs : durationMs
  const style = React.useMemo<React.CSSProperties>(() => ({
    // allow custom duration via inline style; tailwind class uses 40s default
    animationDuration: `${effectiveDuration}ms`,
  }), [effectiveDuration])

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        masked &&
          "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          // Track uses intrinsic width of two identical sequences side-by-side
          "flex select-none items-stretch motion-reduce:animate-none will-change-transform gap-6",
          pauseOnHover && "hover:[animation-play-state:paused]",
          anim,
        )}
        style={style}
        aria-hidden
      >
        {/* Sequence A */}
        <div className="flex shrink-0 items-stretch">{children}</div>
        {/* Sequence B (duplicate) */}
        <div className="flex shrink-0 items-stretch" aria-hidden>{children}</div>
      </div>
    </div>
  )
}
