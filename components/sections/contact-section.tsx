'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Signal transmitted! We will respond soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-secondary text-balance">
            Send a Signal
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with our neural network
          </p>
        </div>
        
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-input border-primary/20 focus:border-primary transition-colors"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-input border-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full bio-glow">
              Transmit
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
