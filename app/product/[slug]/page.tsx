import { notFound } from 'next/navigation'
import { ProductClient } from '@/components/product-client'
import { getProductBySlug } from '@/lib/products'
import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found - EcoGrow Tech',
    }
  }

  return {
    title: `${product.name} - EcoGrow Tech`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <ProductClient product={product} />
      <Footer />
      <CookieBanner />
    </main>
  )
}
