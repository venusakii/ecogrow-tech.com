import { ReviewsClient } from '@/components/reviews-client'
import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Product Reviews - EcoGrow Tech',
  description: 'Browse our curated collection of intelligent growing devices with real user reviews and ratings.',
}

export default function ReviewsPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <ReviewsClient />
      <Footer />
      <CookieBanner />
    </main>
  )
}
