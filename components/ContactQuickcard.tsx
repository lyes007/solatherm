'use client'

import Image from 'next/image'

export default function ContactQuickcard() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/download (9).jpg"
          alt="Solar panel background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Black fade-in gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Contactez-Nous
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Contactez-nous pour une consultation gratuite et un devis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <div className="contact-glass-card">
            <div className="contact-glass-filter"></div>
            <div className="contact-glass-overlay"></div>
            <div className="contact-glass-specular"></div>
            <div className="contact-glass-content">
              <h3 className="text-2xl font-bold text-white mb-8">Informations de Contact</h3>
              
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/216XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-glass group"
                >
                  <div className="contact-item-glass-filter"></div>
                  <div className="contact-item-glass-overlay"></div>
                  <div className="contact-item-content">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white text-lg">WhatsApp</p>
                        <p className="text-gray-300 text-sm mt-1">Discutez avec nous instantanément</p>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform text-xl" style={{ color: '#83b619' }}>→</span>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+216XXXXXXXXX"
                  className="contact-item-glass group"
                >
                  <div className="contact-item-glass-filter"></div>
                  <div className="contact-item-glass-overlay"></div>
                  <div className="contact-item-content">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white text-lg">Téléphone</p>
                        <p className="text-gray-300 text-sm mt-1">+216 XX XXX XXX</p>
                      </div>
                      <span className="text-white/60 group-hover:translate-x-1 transition-transform text-xl">→</span>
                    </div>
                  </div>
                </a>

                {/* Address */}
                <div className="contact-item-glass">
                  <div className="contact-item-glass-filter"></div>
                  <div className="contact-item-glass-overlay"></div>
                  <div className="contact-item-content">
                    <div>
                      <p className="font-semibold text-white text-lg">Adresse</p>
                      <p className="text-gray-300 text-sm mt-1">Tunis, Tunisie</p>
                      <p className="text-gray-400 text-xs mt-2">Desservant toute la Tunisie</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:info@solatherm.tn"
                  className="contact-item-glass group"
                >
                  <div className="contact-item-glass-filter"></div>
                  <div className="contact-item-glass-overlay"></div>
                  <div className="contact-item-content">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white text-lg">Email</p>
                        <p className="text-gray-300 text-sm mt-1">info@solatherm.tn</p>
                      </div>
                      <span className="text-white/60 group-hover:translate-x-1 transition-transform text-xl">→</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <button className="contact-cta-button mt-8 w-full relative">
                <div className="contact-cta-glass-filter"></div>
                <div className="contact-cta-glass-overlay"></div>
                <div className="contact-cta-glass-specular"></div>
                <span className="relative z-10">Demander un Devis</span>
              </button>
            </div>
          </div>

          {/* Google Map */}
          <div className="contact-glass-card">
            <div className="contact-glass-filter"></div>
            <div className="contact-glass-overlay"></div>
            <div className="contact-glass-specular"></div>
            <div className="contact-glass-content p-0">
              <div className="h-full min-h-[500px] rounded-lg overflow-hidden relative z-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12790.123456789!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsNDgnMjMuNCJOIDEwLCcxMCc1NC4wIkU!5e0!3m2!1sen!2stn!4v1234567890123!5m2!1sen!2stn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="SolaTherm Location - Tunis, Tunisia"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

