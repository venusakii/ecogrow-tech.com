import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'EcoGrow ⚡ Tech - Smart Tech Meets Natural Growth',
  description: 'Discover intelligent indoor growing solutions with neural-powered technology. Smart lights, sensors, and hydroponic systems for the future of cultivation.',
  generator: 'v0.app',
  keywords: ['smart growing', 'indoor gardening', 'hydroponics', 'LED grow lights', 'plant monitoring', 'eco technology'],
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#9DFF65',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
