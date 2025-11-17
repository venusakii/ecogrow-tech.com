'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    slug: 'smart-wifi-moisture-temperature-sensor',
    name: 'Smart WiFi Moisture & Temperature Sensor',
    price: '$29',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61cD+P0Y+LL._SX522_.jpg',
    category: 'Monitoring',
  },
  {
    id: 2,
    slug: 'bestqool-red-light-therapy-device',
    name: 'Bestqool Red Light Therapy Device',
    price: '$159',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/71fjapylUsL._SX679_.jpg',
    category: 'Lighting',
  },
  {
    id: 3,
    slug: 'red-light-therapy-panel-wavements',
    name: 'Red Light Therapy Panel with Wavements',
    price: '$249',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/714yjl-XNHL._AC_SX679_.jpg',
    category: 'Lighting',
  },
  {
    id: 4,
    slug: 'vivosun-ph-meter',
    name: 'VIVOSUN Digital pH Meter 0.05ph High Accuracy',
    price: '$12',
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/61saEhctTWL._SX522_.jpg',
    category: 'Monitoring',
  },
  {
    id: 5,
    slug: 'hydrologic-evolution-ro1000',
    name: 'HydroLogic Evolution RO1000 High Flow Reverse Osmosis',
    price: '$399',
    rating: 4.8,
    image: 'https://m.media-amazon.com/images/I/51i+7fLsBfL._SX522_.jpg',
    category: 'Hydro',
  },
  {
    id: 6,
    slug: 'vivosun-5-gallon-dwc-hydroponics-grow-system',
    name: 'VIVOSUN 5-Gallon DWC Hydroponics Grow System',
    price: '$89',
    rating: 4.7,
    image: 'https://m.media-amazon.com/images/I/81Gg0RCO9IL._AC_SX679_.jpg',
    category: 'Hydro',
  },
  {
    id: 7,
    slug: 'lifegard-aquatics-quiet-one-powerhead',
    name: 'Lifegard Aquatics Quiet One Powerhead',
    price: '$45',
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/31t9-lztKWL._AC_.jpg',
    category: 'Hydro',
  },
]

export function ProductsSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-secondary text-balance">
            Top EcoGrow Devices
          </h2>
          <p className="text-lg text-muted-foreground">
            Curated collection of intelligent growing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/50 transition-all duration-300 group cursor-pointer h-full">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="text-xs font-display text-secondary">{product.category}</div>
                  <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/reviews">
            <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
