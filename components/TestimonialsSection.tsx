'use client'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ahmed Ben Ali',
      location: 'La Marsa, Tunis',
      project: 'Système Résidentiel 3.24 kWc',
      testimonial: 'SolaTherm a fourni un excellent service du début à la fin. Nos factures d\'électricité ont considérablement diminué, et l\'installation a été professionnelle et efficace.',
      rating: 5,
    },
    {
      name: 'Fatima Trabelsi',
      location: 'Sfax, Tunisie',
      project: 'Installation Commerciale 15.5 kWc',
      testimonial: 'L\'équipe de SolaTherm nous a aidés à réduire nos coûts opérationnels. Les options de financement ont facilité l\'investissement dans l\'énergie solaire pour notre entreprise.',
      rating: 5,
    },
    {
      name: 'Mohamed Hammami',
      location: 'Centre de Tunis',
      project: 'Système Résidentiel 5.0 kWc',
      testimonial: 'Installation professionnelle et excellent support client. Le système de surveillance nous aide à suivre notre production d\'énergie en temps réel. Fortement recommandé !',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Black fade-in gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/90 to-black z-10" />
      
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Retours réels de clients satisfaits à travers la Tunisie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group"
            >
              <div className="testimonial-card-glass-filter"></div>
              <div className="testimonial-card-glass-overlay"></div>
              <div className="testimonial-card-glass-specular"></div>
              <div className="testimonial-card-content">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-sm mt-1" style={{ color: '#83b619' }}>{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

