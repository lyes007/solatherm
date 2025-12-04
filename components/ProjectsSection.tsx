'use client'

import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Installation Résidentielle - La Marsa',
      location: 'La Marsa, Tunis',
      systemSize: '3.24 kWc',
      description: 'Installation solaire complète pour une villa résidentielle avec système de stockage par batterie.',
      image: '/IMAGE BG.jpg', // Using placeholder, should be replaced with actual project images
    },
    {
      title: 'Projet Commercial - Sfax',
      location: 'Sfax, Tunisie',
      systemSize: '15.5 kWc',
      description: 'Installation commerciale à grande échelle pour une usine de fabrication.',
      image: '/IMAGE BG.jpg',
    },
    {
      title: 'Système Résidentiel - Centre de Tunis',
      location: 'Centre de Tunis',
      systemSize: '5.0 kWc',
      description: 'Système photovoltaïque moderne avec surveillance intelligente pour une maison familiale.',
      image: '/IMAGE BG.jpg',
    },
  ]

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Pannelli solari.jpg"
          alt="Solar panels background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Black fade-in gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      
      {/* Black fade-out gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Projets Récents
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Découvrez nos installations réalisées à travers Tunis et la Tunisie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#83b619' }}>
                    {project.systemSize}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-3">
                  {project.location}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center font-semibold transition-colors"
                  style={{ color: '#83b619' }}
                >
                  Voir les Détails →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

