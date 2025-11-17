'use client'

import { SunSnow as Sensor, Smartphone, Sprout } from 'lucide-react'

const steps = [
  { icon: Sensor, label: 'Sensor', description: 'Collects environmental data' },
  { icon: Smartphone, label: 'App', description: 'Processes and analyzes' },
  { icon: Sprout, label: 'Plant', description: 'Receives optimized care' },
]

export function DataStreamSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-primary text-balance">
            Eco Data Stream
          </h2>
          <p className="text-lg text-muted-foreground">
            How intelligent cultivation works
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center bio-glow">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-display text-xl text-foreground">{step.label}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block">
                  <svg width="60" height="20" className="neural-pulse">
                    <defs>
                      <linearGradient id={`gradient-${index}`}>
                        <stop offset="0%" stopColor="#9DFF65" />
                        <stop offset="100%" stopColor="#6AF4F0" />
                      </linearGradient>
                    </defs>
                    <line 
                      x1="0" 
                      y1="10" 
                      x2="60" 
                      y2="10" 
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="3"
                      markerEnd="url(#arrowhead)"
                    />
                    <polygon 
                      points="55,10 50,7 50,13" 
                      fill="#6AF4F0"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
