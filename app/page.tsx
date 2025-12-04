import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactQuickcard from '@/components/ContactQuickcard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactQuickcard />
    </main>
  )
}
