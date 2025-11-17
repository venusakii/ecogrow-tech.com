'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Signal transmitted successfully! We will respond within 24 hours.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-display text-foreground mb-2">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-input border-primary/20 focus:border-primary transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-display text-foreground mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-input border-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-display text-foreground mb-2">
            Subject
          </label>
          <Input
            id="subject"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className="bg-input border-primary/20 focus:border-primary transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-display text-foreground mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us more..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className="bg-input border-primary/20 focus:border-primary transition-colors resize-none"
          />
        </div>
        
        <Button type="submit" size="lg" className="w-full bio-glow">
          Transmit Message
        </Button>
      </form>
    </Card>
  )
}
