import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { ContactForm } from '@/components/contact-form'
import { Card } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - EcoGrow Tech',
  description: 'Get in touch with our team. We are here to help with your intelligent growing needs.',
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      
      <div className="relative z-10 pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-display text-secondary bio-glow text-balance">
              Send a Signal
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with our neural network
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">support@ecogrow-tech.com</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 702-858-8735</p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                2163 Sunrise Road<br />
                Las Vegas, NV 89119<br />
                United States
              </p>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
