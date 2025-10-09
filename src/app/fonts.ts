// src/app/fonts.ts
import localFont from "next/font/local";

// Use the wght-normal Latin variable from @fontsource to avoid any external fetch.
export const inter = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});
