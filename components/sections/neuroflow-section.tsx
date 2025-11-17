'use client'

import { useRouter } from 'next/navigation'

const categories = [
  { name: 'Lighting', x: 200, y: 150, color: '#9DFF65', link: '/reviews?category=lighting' },
  { name: 'Monitoring', x: 500, y: 200, color: '#6AF4F0', link: '/reviews?category=monitoring' },
  { name: 'HydroTech', x: 350, y: 350, color: '#BFFFE2', link: '/reviews?category=hydro' },
]

export function NeuroFlowSection() {
  const router = useRouter()

  return (
    null
  )
}
