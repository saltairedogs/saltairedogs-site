/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Allow optimized handling of SVGs via next/image. We also lock down SVGs via CSP.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig