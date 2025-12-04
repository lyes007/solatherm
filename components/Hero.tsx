'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const imageTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoLoaded(true)
      setIsImageVisible(false)
      setShowVideo(true)
      video.play().catch((error) => {
        console.error('Error playing video:', error)
        setIsImageVisible(true)
        setShowVideo(false)
      })
    }

    const handleEnded = () => {
      setShowVideo(false)
      setIsImageVisible(true)
      
      if (imageTimeoutRef.current) {
        clearTimeout(imageTimeoutRef.current)
      }
      
      imageTimeoutRef.current = setTimeout(() => {
        setIsImageVisible(false)
        setShowVideo(true)
        if (video) {
          video.currentTime = 0
          video.play().catch((error) => {
            console.error('Error playing video:', error)
            setIsImageVisible(true)
            setShowVideo(false)
          })
        }
      }, 5000)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('ended', handleEnded)
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('ended', handleEnded)
      if (imageTimeoutRef.current) {
        clearTimeout(imageTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Image Background */}
      <div
        className={`absolute inset-0 ${
          isImageVisible ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <Image
          src="/IMAGE BG.jpg"
          alt="Solar panels background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Video Background */}
      <div
        className={`absolute inset-0 ${
          showVideo && videoLoaded ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/VIDEO BG.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-20" />
      
      {/* Fade-in black gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-black/50 to-black z-[25]" />

      {/* Modern Hero Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="hero-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white mb-8 leading-tight">
            Alimentez Votre Avenir
            <br />
            <span className="font-normal">Avec l'Énergie Solaire</span>
          </h1>
          
          {/* Subheading */}
          <p className="hero-subheading text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-12 font-light tracking-wide">
            Transformez votre maison ou entreprise avec des solutions solaires professionnelles à Tunis
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button className="hero-button-glass hero-button-primary relative">
              <div className="hero-button-glass-filter"></div>
              <div className="hero-button-glass-overlay"></div>
              <div className="hero-button-glass-specular"></div>
              <span className="relative z-10">Demander un Devis</span>
            </button>
            <button className="hero-button-glass hero-button-secondary relative">
              <div className="hero-button-glass-filter"></div>
              <div className="hero-button-glass-overlay"></div>
              <div className="hero-button-glass-specular"></div>
              <span className="relative z-10">En Savoir Plus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
