'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductClientProps {
  product: Product
}

export function ProductClient({ product }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="relative z-10 pt-20 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link href="/reviews" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-secondary/5">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </Card>
            
            
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm font-display text-secondary uppercase tracking-wide mb-2">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-display text-primary bio-glow mb-4 text-balance">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-2xl">★</span>
                  <span className="text-2xl font-bold text-foreground">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full bio-glow text-lg">
                  View on Amazon
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/reviews" className="flex-1">
                <Button size="lg" variant="outline" className="w-full border-primary/30 hover:border-primary">
                  More Products
                </Button>
              </Link>
            </div>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/20">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">30-day return policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">1-year warranty included</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="w-full justify-start border-b border-primary/20 bg-transparent rounded-none h-auto p-0">
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3"
            >
              Features
            </TabsTrigger>
            <TabsTrigger 
              value="specifications"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger 
              value="reviews"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-3"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-display text-foreground mb-6">Key Features</h3>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1 shrink-0">⚡</span>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-display text-foreground mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-primary/10">
                    <span className="font-display text-foreground">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-display text-foreground mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {product.userReviews.map((review, index) => (
                  <div key={index} className="pb-6 border-b border-primary/10 last:border-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-display text-foreground">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
