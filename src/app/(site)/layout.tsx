// src/app/(site)/layout.tsx
import type { ReactNode } from "react";
import type { Metadata } from "next";

// ⬇️ Header/Footer imports use the @/* alias configured in tsconfig
import { Header as SiteHeader } from "@/components/header";
import { Footer as SiteFooter } from "@/components/footer";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saltaire Dog Walks",
    template: "%s — Saltaire Dog Walks",
  },
  alternates: { canonical: "/" },
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Accessible skip link */}
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Header */}
      <SiteHeader />

      {/* Decorative background glows specific to site pages */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        {/* Left brass kiss */}
        <div className="absolute -top-24 -left-24 h-[65vmin] w-[65vmin] rounded-full opacity-[0.12] blur-3xl"
             style={{ background: "radial-gradient(50% 50% at 50% 50%, #C89B3C 0%, transparent 70%)" }} />
        {/* Right soft ink shadow */}
        <div className="absolute -bottom-28 -right-24 h-[55vmin] w-[55vmin] rounded-full opacity-[0.06] blur-[72px]"
             style={{ background: "radial-gradient(50% 50% at 50% 50%, #131415 0%, transparent 70%)" }} />
      </div>

      {/* Page content */}
      <main id="main" className="relative">{children}</main>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
