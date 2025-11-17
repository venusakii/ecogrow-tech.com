import { Suspense } from 'react'
import { ReviewsClient } from '@/components/reviews-client'
import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Product Reviews - EcoGrow Tech',
  description: 'Browse our curated collection of intelligent growing devices with real user reviews and ratings.',
}

function ReviewsLoading() {
  return (
    <div className="relative z-10 pt-20 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <div className="h-20 w-96 mx-auto bg-primary/10 rounded-lg animate-pulse" />
          <div className="h-6 w-64 mx-auto bg-primary/5 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-96 bg-card/50 rounded-lg border border-primary/20 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <Suspense fallback={<ReviewsLoading />}>
        <ReviewsClient />
      </Suspense>
      <Footer />
      <CookieBanner />
    </main>
  )
}
