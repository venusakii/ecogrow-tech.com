'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { products as allProducts } from '@/lib/products'

const categories = [
  { id: 'all', label: 'All Products', color: '#9DFF65' },
  { id: 'lighting', label: 'Lighting', color: '#9DFF65' },
  { id: 'monitoring', label: 'Monitoring', color: '#6AF4F0' },
  { id: 'hydro', label: 'HydroTech', color: '#BFFFE2' },
]

export function ReviewsClient() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('rating')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category && categories.some(c => c.id === category)) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
    })

  return (
    <div className="relative z-10 pt-20 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display text-primary bio-glow text-balance">
            Product Reviews
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover intelligent growing solutions backed by real user experiences
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-primary/20 focus:border-primary"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-card/50 border border-primary/20 rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={selectedCategory === category.id ? 'bio-glow' : 'border-primary/30 hover:border-primary'}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/50 transition-all duration-300 group flex flex-col"
            >
              <Link href={`/product/${product.slug}`} className="block relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </Link>

              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <div className="text-xs font-display text-secondary uppercase tracking-wide">
                  {categories.find(c => c.id === product.category)?.label || product.category}
                </div>
                
                <Link href={`/product/${product.slug}`}>
                  <h3 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-muted-foreground flex-1">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-foreground font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-primary/20">
                  <Link href={`/product/${product.slug}`}>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                      Read More
                    </Button>
                  </Link>
                  
                  
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
