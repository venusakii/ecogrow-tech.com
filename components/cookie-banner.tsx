'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-primary/20 backdrop-blur-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground max-w-2xl">
          This website uses cookies to enhance your experience. We use cookies to analyze site traffic and optimize your browsing experience.
        </p>
        <Button onClick={acceptCookies} className="bio-glow shrink-0">
          Accept
        </Button>
      </div>
    </div>
  )
}
