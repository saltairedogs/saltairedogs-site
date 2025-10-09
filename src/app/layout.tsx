// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: { default: "Saltaire Dog Walks", template: "%s — Saltaire Dog Walks" },
  description:
    "Local, DBS-checked dog walking and pet care with a friendly, positive service across Saltaire & Shipley. GPS & photo updates after every visit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
