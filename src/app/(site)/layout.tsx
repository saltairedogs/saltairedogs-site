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

      {/* Global header/navigation */}
      <SiteHeader />

      {/* Page content */}
      <main id="main">{children}</main>

      {/* Global footer */}
      <SiteFooter />
    </>
  );
}
