// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter } from "./fonts";
// Vercel Analytics & Speed Insights
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://saltairedogs.uk"),
  title: { default: "Saltaire Dog Walks", template: "%s — Saltaire Dog Walks" },
  description:
    "Local, DBS-checked dog walking and pet care with a friendly, positive service across Saltaire & Shipley. GPS & photo updates after every visit.",
  openGraph: {
    title: "Saltaire Dog Walks",
    description:
      "DBS-checked solo walks and discreet pet sitting in Saltaire & Shipley. Photo updates after every visit.",
    url: "https://saltairedogs.uk",
    siteName: "Saltaire Dog Walks",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Saltaire Dog Walks" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saltaire Dog Walks",
    description:
      "DBS-checked solo walks and discreet pet sitting in Saltaire & Shipley. Photo updates after every visit.",
    images: ["/og-default.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F6",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen text-foreground antialiased site-bg`}
      >
        {/* Palette tokens (warm, premium) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{
                /* Warm neutral canvas */
                --background:#F7F7F6;      /* Pebble */
                --foreground:#131415;      /* Ink */

                --card:#FFFFFF;
                --card-foreground:#131415;
                --popover:#FFFFFF;
                --popover-foreground:#131415;

                --muted:#EFEEE9;           /* Stone */
                --muted-foreground:#7B828A;/* Slate */
                --accent:#EFEEE9;
                --accent-foreground:#131415;

                --border:#E6E3DA;          /* Hairline */
                --input:#E6E3DA;
                --ring:#E6E3DA;

                --primary:#C89B3C;         /* Brass */
                --primary-foreground:#131415;

                --destructive:#8B3A3A;
                --destructive-foreground:#FFFFFF;

                --success:#2F6F4F;

                --radius:10px;
              }
              ::selection{ background:var(--primary); color:var(--primary-foreground); }
            `,
          }}
        />
        {children}

        {/* First‑party, cookie‑less telemetry (safe-by-default). Only render in production. */}
        {process.env.NODE_ENV === "production" && (
          <>
            <VercelAnalytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
