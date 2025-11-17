import { HeroSection } from '@/components/sections/hero-section'
import { FutureSection } from '@/components/sections/future-section'
import { ProductsSection } from '@/components/sections/products-section'
import { NeuroFlowSection } from '@/components/sections/neuroflow-section'
import { VideoSection } from '@/components/sections/video-section'
import { DataStreamSection } from '@/components/sections/data-stream-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { NeuralBackground } from '@/components/neural-background'
import { CookieBanner } from '@/components/cookie-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <HeroSection />
      <FutureSection />
      <ProductsSection />
      <NeuroFlowSection />
      <VideoSection />
      <DataStreamSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
