import { NeuralBackground } from '@/components/neural-background'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'

export const metadata = {
  title: 'Privacy Policy - EcoGrow Tech',
  description: 'Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      
      <div className="relative z-10 pt-20 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-display text-secondary bio-glow text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 17, 2025
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name and contact information when you submit forms</li>
                  <li>Email address for newsletter subscriptions</li>
                  <li>Usage data and analytics through cookies and similar technologies</li>
                  <li>Device and browser information for optimization purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">3. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your 
                  browsing activities. Cookies help us improve your experience by remembering your 
                  preferences and understanding how you use our site. You can control cookies through 
                  your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">4. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use third-party services that may collect information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Amazon Associates Program for affiliate marketing</li>
                  <li>Analytics services to understand site usage</li>
                  <li>Payment processors for transactions (if applicable)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These services have their own privacy policies governing their collection and use 
                  of information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where we rely on it</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">7. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you believe we have collected 
                  information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page with an updated "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-secondary mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your information, 
                  please contact us at privacy@ecogrow-tech.com
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
