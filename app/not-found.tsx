import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NeuralBackground } from '@/components/neural-background'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <NeuralBackground />
      
      <div className="relative z-10 text-center space-y-6 px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 mb-4">
          <AlertCircle className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-display text-primary bio-glow">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-display text-secondary">
            Neural Connection Lost
          </h2>
          <p className="text-lg text-muted-foreground">
            The page you are looking for does not exist in our ecosystem
          </p>
        </div>
        
        <div className="pt-8">
          <Link href="/">
            <Button size="lg" className="bio-glow">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
