'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Mila Duarte',
    role: 'Urban Gardener',
    image: '/woman-with-plants.jpg',
    quote: 'The neural sensors transformed my indoor garden. Every plant thrives with precision care.',
    rating: 5,
  },
  {
    name: 'Kenji Arata',
    role: 'Hydroponics Expert',
    image: '/asian-man-with-technology.jpg',
    quote: 'EcoGrow Tech bridges the gap between nature and innovation perfectly.',
    rating: 5,
  },
  {
    name: 'Oliver Woods',
    role: 'Sustainability Consultant',
    image: '/man-with-eco-technology.jpg',
    quote: 'Smart lighting systems reduced my energy costs by 40% while improving yields.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-secondary text-balance">
            Human + Nature Harmony
          </h2>
          <p className="text-lg text-muted-foreground">
            Stories from our growing community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-display text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
