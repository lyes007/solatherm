'use client'

import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      title: 'Étude de Site',
      description: 'Analyse complète de votre emplacement pour déterminer le placement optimal des panneaux solaires et la taille du système.',
      image: '/RS 30,000 SUBSIDY ON DOMESTIC SOLAR PLATES.jpg',
    },
    {
      title: 'Conception',
      description: 'Conception de système personnalisée adaptée à vos besoins énergétiques, à la structure de votre toit et à votre budget.',
      image: '/Why Go Solar-Solar Solutions_ Illuminating a Greener Tomorrow_.jpg',
    },
    {
      title: 'Installation',
      description: 'Installation professionnelle par des techniciens certifiés garantissant une efficacité maximale et des normes de sécurité.',
      image: '/RS 30,000 SUBSIDY ON DOMESTIC SOLAR PLATES.jpg',
    },
    {
      title: 'Maintenance',
      description: 'Services de maintenance et d\'inspection réguliers pour maintenir votre système solaire à des performances optimales.',
      image: '/Why Go Solar-Solar Solutions_ Illuminating a Greener Tomorrow_.jpg',
    },
    {
      title: 'Surveillance',
      description: 'Solutions de surveillance en temps réel pour suivre la production d\'énergie et optimiser votre investissement solaire.',
      image: '/RS 30,000 SUBSIDY ON DOMESTIC SOLAR PLATES.jpg',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative -mt-64 pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nos Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Solutions complètes d'énergie solaire de la consultation initiale à la maintenance continue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              <div className="service-card-glass-filter"></div>
              <div className="service-card-glass-overlay"></div>
              <div className="service-card-glass-specular"></div>
              <div className="service-card-content">
                {service.image ? (
                  <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg service-image-wrapper">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-light transition-colors group-hover:opacity-50" style={{ color: 'rgba(131, 182, 25, 0.3)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-0.5 transition-colors mt-4 group-hover:opacity-50" style={{ backgroundColor: 'rgba(131, 182, 25, 0.3)' }}></div>
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors group-hover:text-[#83b619]">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-medium transition-all group-hover:gap-3"
                  style={{ color: '#83b619' }}
                >
                  <span>En savoir plus</span>
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

