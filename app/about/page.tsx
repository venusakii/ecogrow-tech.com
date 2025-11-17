import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Zap, Leaf, Brain } from 'lucide-react'

export const metadata = {
  title: 'About Us - EcoGrow Tech',
  description: 'Learn about our mission to merge technology and nature for sustainable indoor growing.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      
      <div className="relative z-10 pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-display text-primary bio-glow text-balance">
              About EcoGrow-Tech
            </h1>
            <p className="text-xl text-muted-foreground">
              Where digital intelligence meets natural growth
            </p>
          </div>

          <div className="space-y-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EcoGrow-Tech was founded on a simple yet revolutionary idea: what if we could create 
                  technology that thinks like nature? Our team of biotechnologists, AI researchers, and 
                  passionate growers came together to build intelligent ecosystems that adapt, learn, 
                  and optimize themselves just like living organisms.
                </p>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 bio-glow">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Neural Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered systems that learn and adapt to your plants' unique needs
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 bio-glow">
                  <Leaf className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Eco-Conscious</h3>
                <p className="text-sm text-muted-foreground">
                  Sustainable design that minimizes energy use and environmental impact
                </p>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 bio-glow">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">Cutting Edge</h3>
                <p className="text-sm text-muted-foreground">
                  Latest technology integrated seamlessly with natural growing principles
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h2 className="text-3xl font-display text-secondary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We believe that the future of cultivation lies in the harmony between biological 
                systems and artificial intelligence. Every sensor, light, and control system we 
                design is a node in a living network—learning, adapting, and evolving to create 
                the perfect environment for growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vision is a world where anyone can grow sustainably, efficiently, and beautifully, 
                powered by technology that respects and enhances nature rather than replacing it.
              </p>
            </Card>

            <div className="text-center pt-8">
              <Link href="/reviews">
                <Button size="lg" className="bio-glow">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
