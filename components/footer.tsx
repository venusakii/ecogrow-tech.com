import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#9DFF65" strokeWidth="1" className="neural-pulse" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#6AF4F0" strokeWidth="1" className="neural-pulse" style={{ animationDelay: '1s' }} />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#BFFFE2" strokeWidth="1" className="neural-pulse" style={{ animationDelay: '2s' }} />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-display text-xl text-primary">EcoGrow ⚡ Tech</h3>
            <p className="text-sm text-muted-foreground">
              Smart tech meets natural growth
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-display text-foreground">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews?category=lighting" className="text-muted-foreground hover:text-primary transition-colors">Lighting</Link></li>
              <li><Link href="/reviews?category=monitoring" className="text-muted-foreground hover:text-primary transition-colors">Monitoring</Link></li>
              <li><Link href="/reviews?category=hydro" className="text-muted-foreground hover:text-primary transition-colors">HydroTech</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-display text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-display text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/20 space-y-2 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 EcoGrow-Tech.com. All rights reserved.</p>
          <p>Amazon Associate Program Partner.</p>
          <p className="text-xs">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
