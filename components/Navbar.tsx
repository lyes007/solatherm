'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.glass-nav')) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (item: { label: string; id: string }) => {
    setActiveItem(item.label)
    setIsMobileMenuOpen(false)
    // Scroll to section or handle navigation
    const element = document.getElementById(item.id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* SVG Filter for Glass Distortion */}
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.008"
            numOctaves={2}
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>

      <nav className="glass-nav">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <div className="glass-content">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Home Button */}
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('home')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setActiveItem('')
              }}
              className="flex-shrink-0 mr-4 cursor-pointer transition-opacity hover:opacity-80"
            >
              <Image
                src="/logo.png"
                alt="SolaTherm Logo - Home"
                width={120}
                height={60}
                priority
                className="h-auto w-auto max-h-[50px] md:max-h-[60px]"
              />
            </a>

            {/* Desktop Navigation Items - Hidden on mobile */}
            <ul className="nav-list hidden lg:flex">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-item ${activeItem === item.label ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button - Hidden on mobile */}
            <button className="cta-button hidden lg:block">
              Demander un Devis
            </button>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              className="mobile-menu-button block lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-dropdown lg:hidden">
              <div className="mobile-dropdown-glass-filter"></div>
              <div className="mobile-dropdown-glass-overlay"></div>
              <div className="mobile-dropdown-glass-specular"></div>
              <div className="mobile-dropdown-content">
                <ul className="mobile-nav-list">
                  {navItems.map((item, index) => (
                    <li key={item.id} style={{ animationDelay: `${index * 0.03}s` }}>
                      <a
                        href={`#${item.id}`}
                        className={`mobile-nav-item ${activeItem === item.label ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item)
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <button 
                  className="mobile-cta-button"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    // Handle quote action
                  }}
                >
                  Demander un Devis
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

