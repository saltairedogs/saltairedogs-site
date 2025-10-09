'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  useEffect(() => {
    const handleConsentChange = () => {
      if (typeof window !== 'undefined') {
        const analyticsEnabled = localStorage.getItem('analytics-enabled') === 'true'
        
        // Handle GA4
        if (gaId && analyticsEnabled) {
          ;(window as any).gtag?.('consent', 'update', {
            analytics_storage: 'granted'
          })
        }

        // Handle Plausible (automatically respects localStorage)
      }
    }

    // Listen for consent changes
    window.addEventListener('cookie-consent-changed', handleConsentChange)
    
    // Check initial consent
    handleConsentChange()

    return () => {
      window.removeEventListener('cookie-consent-changed', handleConsentChange)
    }
  }, [gaId])

  const shouldLoadAnalytics = () => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('analytics-enabled') === 'true'
  }

  return (
    <>
      {/* Google Analytics 4 */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
            onLoad={() => {
              if (shouldLoadAnalytics()) {
                ;(window as any).gtag = function() {
                  ;(window as any).dataLayer.push(arguments)
                }
                ;(window as any).dataLayer = (window as any).dataLayer || []
                ;(window as any).gtag('js', new Date())
                ;(window as any).gtag('config', gaId, {
                  send_page_view: false
                })
                
                // Send initial page view if consent given
                if (localStorage.getItem('analytics-enabled') === 'true') {
                  ;(window as any).gtag('event', 'page_view')
                }
              }
            }}
          />
        </>
      )}

      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  )
}