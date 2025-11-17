'use client'

import { Lightbulb, Activity, Droplets } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Adaptive LED systems that mimic natural sun cycles',
  },
  {
    icon: Activity,
    title: 'Neural Sensors',
    description: 'Real-time monitoring of soil, humidity, and nutrients',
  },
  {
    icon: Droplets,
    title: 'Hydro Systems',
    description: 'Automated water delivery with precision control',
  },
]

export function FutureSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-primary text-balance">
            The Future of Indoor Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Intelligent ecosystems powered by neural networks and natural processes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform bio-glow">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
