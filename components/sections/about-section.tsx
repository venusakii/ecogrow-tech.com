'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="relative inline-block">
          <svg width="200" height="100" className="mx-auto mb-8">
            <circle cx="100" cy="50" r="30" fill="#9DFF65" opacity="0.3" className="neural-pulse" />
            <circle cx="60" cy="50" r="20" fill="#6AF4F0" opacity="0.3" className="neural-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="140" cy="50" r="20" fill="#BFFFE2" opacity="0.3" className="neural-pulse" style={{ animationDelay: '1s' }} />
            <line x1="80" y1="50" x2="120" y2="50" stroke="#9DFF65" strokeWidth="2" opacity="0.6" />
            <text x="100" y="55" textAnchor="middle" fill="#9DFF65" className="text-2xl font-display">⚡</text>
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display text-primary text-balance">
          About EcoGrow-Tech
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          We are pioneers at the intersection of biotechnology and artificial intelligence. 
          Our mission is to create intelligent ecosystems that empower everyone to grow sustainably, 
          efficiently, and beautifully. Every device is designed as a neural node in a living network, 
          learning and adapting to create the perfect environment for growth.
        </p>
        
        <Link href="/about">
          <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary">
            Our Story
          </Button>
        </Link>
      </div>
    </section>
  )
}
