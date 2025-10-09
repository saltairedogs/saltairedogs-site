'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { X, Cookie } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnalytics] = useState(
    typeof window !== 'undefined' && 
    (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN)
  )

  // Only show banner if analytics are configured and user hasn't made a choice
  useState(() => {
    if (hasAnalytics && typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        setIsVisible(true)
      }
    }
  })

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'accepted')
      localStorage.setItem('analytics-enabled', 'true')
    }
    setIsVisible(false)
    // Trigger analytics loading
    window.dispatchEvent(new Event('cookie-consent-changed'))
  }

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'declined')
      localStorage.setItem('analytics-enabled', 'false')
    }
    setIsVisible(false)
  }

  if (!isVisible || !hasAnalytics) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md">
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">Cookie Preferences</h3>
              <p className="text-xs text-muted-foreground mb-3">
                We use analytics cookies to improve our website. These help us understand how visitors use our site.
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleAccept}>
                  Accept
                </Button>
                <Button size="sm" variant="outline" onClick={handleDecline}>
                  Decline
                </Button>
              </div>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 flex-shrink-0"
              onClick={handleDecline}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}