'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// Remove unused Link import
import ProjectCard from '@/components/ProjectCard'
import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import Footer from '@/components/Footer'
// Remove unused ScrollAnimation import
import TiltCard from '@/components/TiltCard'
import RollingGallery from '@/components/RollingGallery'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ArrowDown, 
  ArrowRight, 
  ArrowUp,  // Added ArrowUp import
  Code, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Database,
  PenTool,
  // Remove unused icons
} from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  // Either use showScrollButton or remove it
  const [showScrollButton, setShowScrollButton] = useState(false)
  const pageRef = useRef(null)
  
  // Sample project data
  const projects = [
    {
      title: "Vikings Nettside",
      description: "Min første nettside, laget med HTML og CSS om Netflix-serien Vikings.",
      image: "/images/vikings-nettside.png",
      tags: ["HTML", "CSS"],
      link: "https://vikings-nettside.vercel.app"
    },
    {
      title: "Squash Klubb",
      description: "En fullstendig nettside for en squashklubb med booking-system og medlemshåndtering.",
      image: "/images/squash-nettside.png",
      tags: ["Next.js", "Prisma", "SQL", "Railway"],
      link: "https://squash-nettside.vercel.app/"
    },
    {
      title: "Fakultet Kalkulator",
      description: "En kalkulator som beregner fakultet av tall. Utviklet med HTML, CSS og JavaScript.",
      image: "/images/fakultet-kalkulator-nettside.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://web-kalkulator-skole.vercel.app"
    },
    {
      title: "AI Prosjekt - Gervi Labs",
      description: "Et AI-prosjekt i samarbeid med Gervi Labs, fokusert på kunstig intelligens og maskinlæring.",
      image: "/images/gervi-nettside.png",
      tags: ["React", "Next.js", "AI"],
      link: "https://ai-prosjekt999.vercel.app"
    }
  ]

  // Handle section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Initial page load animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from('.hero-title', { 
        y: -30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
      })
      
      gsap.from('.hero-subtitle', { 
        y: -20, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
        delay: 0.3
      })
      
      gsap.from('.scroll-indicator', { 
        y: -10, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
        delay: 0.6
      })
      
      // Staggered animation for bento grid items
      gsap.from('.bento-item', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1,
        delay: 1,
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top bottom-=100',
        }
      })
      
      // Gallery animation
      gsap.from('.gallery-section', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top bottom-=100',
        }
      })
    }, pageRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [activeSection])

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add a scroll to top button that uses showScrollButton
  return (
    <main ref={pageRef} className="min-h-screen bg-[#0a192f] text-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b] pointer-events-none"></div>
      
      {/* Add scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}
      
      {/* Remove the Navbar component from here since it's now in the layout */}
      
      <div className="pt-24 px-4 pb-16 max-w-7xl mx-auto">
        <PageTransition activeSection={activeSection}>
          {/* Home Content */}
          {activeSection === 'home' && (
            <section>
              {/* Hero Section - Full height with centered content */}
              <div className="min-h-[80vh] flex flex-col justify-end items-center mb-16 relative">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/images/ib-bilde1.jpeg" 
                    alt="Ib Strømsvåg" 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="opacity-70"
                    priority
                  />
                </div>
                
                {/* Text content - centered at bottom */}
                <div className="w-full p-6 relative z-10 text-center mb-12">
                  <h1 className="hero-title text-5xl md:text-7xl font-bold mix-blend-difference">
                    Ib Strømsvåg
                  </h1>
                </div>
              </div>
              
              {/* Bento Grid */}
              <div className="bento-grid mb-16">
                <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-6">
                  {/* About Me */}
                  <BentoItem colSpan={2} rowSpan={1} className="bento-item">
                    <TiltCard className="h-full">
                      <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                        <h2 className="text-2xl font-bold text-white mb-4">Om meg</h2>
                        <p className="text-gray-300">
                          Jeg er en ung utvikler med stor interesse for teknologi og webutvikling. 
                          Jeg liker å lære nye ting og holder meg oppdatert på de nyeste trendene innen webutvikling.
                        </p>
                        <p className="text-gray-300 mt-2">
                          IT student ved Tangen VGS i Kristiansand.
                        </p>
                        
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg">
                              <Code className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Clean Code</div>
                              <div className="text-sm text-gray-400">Maintainable solutions</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 p-2 rounded-lg">
                              <ArrowDown className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Fast Delivery</div>
                              <div className="text-sm text-gray-400">Quick turnaround time</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-4 flex gap-3">
                          <a href="https://github.com/ibstromsvag" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                            <Github className="h-5 w-5" />
                          </a>
                          <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a href="mailto:ibjulian9@gmail.com" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                            <Mail className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  </BentoItem>
                  
                  {/* Experience */}
                  <BentoItem colSpan={1} rowSpan={1} className="bento-item">
                    <TiltCard className="h-full">
                      <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                        <h2 className="text-xl font-bold text-white mb-4">Erfaring</h2>
                        
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-center mb-6">
                            <div className="text-5xl font-bold text-white">1</div>
                            <div className="text-gray-400 mt-1">År Erfaring</div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-5xl font-bold text-white">36</div>
                            <div className="text-gray-400 mt-1">Prosjekter Fullført</div>
                            <div className="text-xs text-gray-500 mt-1">og teller...</div>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </BentoItem>
                    
                    {/* Current Focus */}
                    <BentoItem colSpan={2} rowSpan={1} className="bento-item">
                      <TiltCard className="h-full">
                        <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                          <h2 className="text-xl font-bold text-white mb-4">Nåværende Fokus</h2>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                              <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                                <Code className="h-5 w-5 text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">Performance Optimization</div>
                                <div className="text-sm text-gray-400">Creating blazing fast web applications</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                                <Database className="h-5 w-5 text-purple-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">Edge Computing</div>
                                <div className="text-sm text-gray-400">Leveraging modern infrastructure</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-green-500/20 p-2 rounded-lg mt-1">
                                <PenTool className="h-5 w-5 text-green-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">Up To Date Designs</div>
                                <div className="text-sm text-gray-400">Following the latest trends in design</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <div className="bg-yellow-500/20 p-2 rounded-lg mt-1">
                                <ExternalLink className="h-5 w-5 text-yellow-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">3D Integration</div>
                                <div className="text-sm text-gray-400">Bringing websites to life with 3D elements</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </BentoItem>
                    
                    {/* Let's Connect */}
                    <BentoItem colSpan={1} rowSpan={1} className="bento-item">
                      <TiltCard className="h-full">
                        <div className="bg-black/30 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                          <h2 className="text-xl font-bold text-white mb-4">La oss snakke</h2>
                          
                          <p className="text-gray-300 mb-6">
                            Har du et prosjekt i tankene? La oss diskutere hvordan vi kan jobbe sammen.
                          </p>
                          
                          <button 
                            onClick={() => handleSectionChange('contact')}
                            className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors w-full"
                          >
                            Ta kontakt
                          </button>
                        </div>
                      </TiltCard>
                    </BentoItem>
                    
                    {/* Education */}
                    <BentoItem colSpan={2} rowSpan={1} className="bento-item">
                      <TiltCard className="h-full">
                        <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                          <h2 className="text-xl font-bold text-white mb-4">Utdanning</h2>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-blue-400">2024-2025 - Tangen VGS Informasjonsteknologi VG2</p>
                              <p className="text-gray-300 mt-1 text-sm">Fordypning i programmering og systemutvikling</p>
                            </div>
                            <div>
                              <p className="text-sm text-blue-400">2023-2024 - Tangen VGS Informasjonsteknologi og medieproduksjon VG1</p>
                              <p className="text-gray-300 mt-1 text-sm">Grunnleggende IT-fag og medieproduksjon</p>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </BentoItem>
                    
                    {/* Birthday Countdown */}
                    <BentoItem colSpan={1} rowSpan={1} className="bento-item">
                      <TiltCard className="h-full">
                        <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                          <h2 className="text-lg font-bold text-white mb-4">Nedtelling til 18-årsdagen</h2>
                          <div className="grid grid-cols-4 gap-2 text-center">
                            <div className="bg-gray-800/50 p-2 rounded-lg">
                              <div className="text-xl font-bold">0</div>
                              <div className="text-xs text-gray-400">Dager</div>
                            </div>
                            <div className="bg-gray-800/50 p-2 rounded-lg">
                              <div className="text-xl font-bold">0</div>
                              <div className="text-xs text-gray-400">Timer</div>
                            </div>
                            <div className="bg-gray-800/50 p-2 rounded-lg">
                              <div className="text-xl font-bold">0</div>
                              <div className="text-xs text-gray-400">Min</div>
                            </div>
                            <div className="bg-gray-800/50 p-2 rounded-lg">
                              <div className="text-xl font-bold">0</div>
                              <div className="text-xs text-gray-400">Sek</div>
                            </div>
                          </div>
                          <p className="text-center text-xs text-gray-400 mt-3">31. Mars 2025 - Jeg blir 18 år!</p>
                        </div>
                      </TiltCard>
                    </BentoItem>
                    
                    {/* Featured Projects */}
                    <BentoItem colSpan={3} rowSpan={1} className="bento-item">
                      <TiltCard className="h-full">
                        <div className="bg-white/5 rounded-xl p-6 h-full flex flex-col backdrop-blur-sm border border-gray-700/30">
                          <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-white">Utvalgte prosjekter</h2>
                            <button 
                              onClick={() => handleSectionChange('projects')}
                              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
                            >
                              Se alle <ArrowRight size={14} />
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {projects.slice(0, 3).map((project, index) => (
                              <div key={index} className="bg-gray-800/30 rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all group">
                                <div className="h-32 relative overflow-hidden">
                                  <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <div className="p-3">
                                  <h3 className="font-medium text-white">{project.title}</h3>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {project.tags.slice(0, 2).map((tag, i) => (
                                      <span key={i} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TiltCard>
                    </BentoItem>
                  </BentoGrid>
                </div>
              
              {/* Rolling Gallery Section */}
              <div className="mt-16 mb-16 gallery-section">
                <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">Project Gallery</h2>
                <div className="rounded-xl overflow-hidden shadow-2xl bg-[#0a192f]">
                  <RollingGallery autoplay={true} pauseOnHover={true} />
                </div>
              </div>
            </section>
          )}
          
          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Mine Prosjekter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </section>
          )}
          
          {/* Other sections would go here */}
        </PageTransition>
      </div>
      
      <Footer />
    </main>
  );
}