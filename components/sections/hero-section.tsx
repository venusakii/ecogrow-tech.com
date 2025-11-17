'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />
      
      <div className="relative z-20 text-center max-w-5xl mx-auto space-y-8">
        <div className="inline-block">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary bio-glow mb-4 text-balance">
            EcoGrow ⚡ Tech
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent neural-pulse" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-display text-secondary neural-pulse text-balance">
          Grow Intelligently
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Smart tech meets natural growth. Experience the future of indoor cultivation with neural-powered ecosystems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/reviews">
            <Button size="lg" className="bio-glow text-lg group">
              Explore Eco Devices
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="text-lg border-primary/30 hover:border-primary">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-display text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Smart Devices</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display text-secondary">10k+</div>
            <div className="text-sm text-muted-foreground">Happy Growers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-display text-primary">99%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
