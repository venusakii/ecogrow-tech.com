export function VideoSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display text-secondary text-balance">
            From Code to Chlorophyll
          </h2>
          <p className="text-lg text-muted-foreground">
            See how technology and nature converge
          </p>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-primary/30 bio-glow">
          <img
            src="/futuristic-hydroponic-garden-with-led-grow-lights-.jpg"
            alt="EcoGrow Tech Demo"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
