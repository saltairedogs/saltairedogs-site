import type { MetadataRoute } from 'next'

const siteUrl = (process.env.SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '')
const isProduction = process.env.NODE_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      isProduction
        ? {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/*'],
          }
        : {
            userAgent: '*',
            allow: ['/'],
            disallow: [],
          },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
