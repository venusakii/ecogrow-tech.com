import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Terms of Service - EcoGrow Tech',
  description: 'Terms and conditions for using EcoGrow-Tech services.',
}

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      
      <div className="relative z-10 pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-display text-primary bio-glow text-balance">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 17, 2025
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using EcoGrow-Tech.com, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to these terms, please 
                  do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials (information or software) 
                  on EcoGrow-Tech's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This license shall automatically terminate if you violate any of these restrictions 
                  and may be terminated by EcoGrow-Tech at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">3. Affiliate Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EcoGrow-Tech.com is a participant in the Amazon Services LLC Associates Program, 
                  an affiliate advertising program designed to provide a means for sites to earn 
                  advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, 
                  we earn from qualifying purchases.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">4. Product Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product information and reviews. However, product 
                  specifications, features, and availability may change without notice. We recommend 
                  verifying current information directly with retailers before making purchases.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">5. User Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to use our website for any unlawful purpose or in any way that could 
                  damage, disable, overburden, or impair our servers or networks. You agree not to 
                  attempt to gain unauthorized access to any part of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EcoGrow-Tech shall not be held liable for any damages arising from the use or 
                  inability to use materials on our website, even if we or our authorized representative 
                  has been notified of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">7. Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  EcoGrow-Tech may revise these terms of service at any time without notice. By using 
                  this website, you agree to be bound by the current version of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at 
                  support@ecogrow-tech.com
                </p>
              </section>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </main>
  )
}
