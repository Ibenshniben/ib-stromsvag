'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import BirthdayCountdown from '@/components/BirthdayCountdown'
import Footer from '@/components/Footer'
import ScrollAnimation from '@/components/ScrollAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ArrowRight, 
  Home as HomeIcon,
  Briefcase, 
  FileText, 
  Mail, 
  Phone, 
  Copy, 
  Instagram, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  FileCode, 
  Database, 
  Globe, 
  PenTool,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  User,
  Star,
  GraduationCap,
  BookOpen,
  Users
} from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  // Section icons mapping
  const sectionIcons = {
    home: HomeIcon, // Make sure this is using HomeIcon, not Home
    projects: Briefcase,
    cv: FileText,
    contact: Mail
  }

  // Handle section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Initial page load animation
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Animate navigation
      gsap.from('nav', { 
        y: -50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        delay: 0.2
      })
    }, pageRef)
    
    return () => {
      ctx.revert()
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-[#0a192f] text-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b] pointer-events-none"></div>
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a192f]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white flex items-center gap-2">
            <Image 
              src="/images/ib-logo-hvit.png" 
              alt="IB Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            {/* Removed the IB text */}
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['hjem', 'prosjekter', 'cv', 'kontakt'].map((section) => {
              const sectionKey = section === 'hjem' ? 'home' : 
                                section === 'prosjekter' ? 'projects' : 
                                section === 'cv' ? 'cv' : 'contact';
              const IconComponent = sectionIcons[sectionKey as keyof typeof sectionIcons];
              return (
                <li key={section}>
                  <button 
                    onClick={() => handleSectionChange(sectionKey)}
                    className={`
                      px-2 py-1 transition-colors flex items-center gap-2 relative
                      ${activeSection === sectionKey 
                        ? 'text-blue-400' 
                        : 'hover:text-blue-300'
                      }
                      after:content-[''] after:absolute after:left-0 after:bottom-0
                      after:h-[2px] after:bg-blue-400 after:transition-all
                      ${activeSection === sectionKey ? 'after:w-full' : 'after:w-0'}
                      hover:after:w-full
                    `}
                  >
                    <IconComponent size={16} />
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            })}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-20 p-2 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/90 z-10 flex flex-col items-center justify-center">
              <ul className="flex flex-col space-y-4 items-center w-full px-6 max-h-[80vh] overflow-y-auto">
                {['hjem', 'prosjekter', 'cv', 'kontakt'].map((section) => {
                  const sectionKey = section === 'hjem' ? 'home' : 
                                    section === 'prosjekter' ? 'projects' : 
                                    section === 'cv' ? 'cv' : 'contact';
                  const IconComponent = sectionIcons[sectionKey as keyof typeof sectionIcons];
                  return (
                    <li key={section} className="w-full text-center">
                      <button 
                        onClick={() => handleSectionChange(sectionKey)}
                        className={`
                          px-6 py-3 transition-colors flex items-center justify-center gap-3
                          ${activeSection === sectionKey 
                            ? 'text-blue-400 bg-blue-900/20' 
                            : 'text-white hover:bg-gray-800/50'
                          }
                          w-full rounded-lg touch-manipulation text-lg
                        `}
                      >
                        <IconComponent size={20} />
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Content Sections - All sections in one container */}
      <div className="pt-24 px-4 min-h-[calc(100vh-80px)]">
        <PageTransition activeSection={activeSection}>
          {/* Home Section */}
          {activeSection === 'home' && (
            <section className="max-w-6xl mx-auto py-8 md:py-20">
              <ScrollAnimation delay={0.2} className="w-full">
                <div>
                  <h1 className="text-3xl md:text-6xl font-bold mb-4">
                    Hei, jeg er <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Ib Strømsvåg</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-6">
                    Jeg er en ung utvikler med lidenskap for webutvikling og design.
                  </p>
                  
                  {/* Removing the animated paragraph box */}
                  
                  {/* Birthday Countdown moved here */}
                  <div className="mb-6">
                    <BirthdayCountdown />
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => handleSectionChange('projects')}
                      className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 touch-manipulation"
                    >
                      Se mine prosjekter <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={() => handleSectionChange('contact')}
                      className="bg-gray-800/60 hover:bg-gray-700 border border-gray-600 px-5 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 touch-manipulation"
                    >
                      Kontakt meg
                    </button>
                  </div>
                </div>
              </ScrollAnimation>
              {/* Profile picture section removed */}
              
              {/* Skills Bento Grid */}
              <div className="mt-12 md:mt-16">
                <ScrollAnimation delay={0.3}>
                  <h2 className="text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                    Mine ferdigheter
                  </h2>
                </ScrollAnimation>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Web Development Card */}
                  <ScrollAnimation delay={0.4} className="h-full">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                      
                      <div className="bg-blue-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                        <Code className="h-8 w-8 text-blue-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Webutvikling</h3>
                      <p className="text-gray-300 text-sm md:text-base">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Backend Development Card */}
                  <ScrollAnimation delay={0.5} className="h-full">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-900/10 relative overflow-hidden group h-full">
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                      
                      <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                        <Database className="h-8 w-8 text-purple-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Backend</h3>
                      <p className="text-gray-300 text-sm md:text-base">Node.js, Express, API-utvikling, Grunnleggende databasekunnskap</p>
                    </div>
                  </ScrollAnimation>
                  
                  {/* Design Card */}
                  <ScrollAnimation delay={0.6} className="h-full">
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-green-500/30 transition-all shadow-xl hover:shadow-green-900/10 relative overflow-hidden group h-full">
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
                      
                      <div className="bg-green-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                        <PenTool className="h-8 w-8 text-green-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-green-400 mb-2">Design</h3>
                      <p className="text-gray-300 text-sm md:text-base">UI/UX Design, Figma, Responsive Design, Brukervennlighet</p>
                    </div>
                  </ScrollAnimation>
                </div>
                
                {/* Additional Skills Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                  {/* Soft Skills Card */}
                  <ScrollAnimation delay={0.7}>
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-yellow-500/30 transition-all shadow-xl hover:shadow-yellow-900/10 relative overflow-hidden group">
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
                      
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">Personlige egenskaper</h3>
                      <ul className="text-gray-300 list-disc list-inside space-y-1 text-sm md:text-base">
                        <li>Problemløsning</li>
                        <li>Kreativ tenkning</li>
                        <li>Samarbeidsvillig</li>
                        <li>Lærevillig og tilpasningsdyktig</li>
                      </ul>
                    </div>
                  </ScrollAnimation>
                  
                  {/* About Me Card */}
                  <ScrollAnimation delay={0.8}>
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                      <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                      
                      <h3 className="text-xl font-bold text-blue-400 mb-2">Om meg</h3>
                      <p className="text-gray-300 text-sm md:text-base">
                        Jeg er en ung utvikler med stor interesse for teknologi og webutvikling. 
                        Jeg liker å lære nye ting og holder meg oppdatert på de nyeste trendene innen webutvikling.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              
              {/* Line-by-line animated text reveal */}
              <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
                <ScrollAnimation delay={0.2}>
                  <h2 className="text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                    Min reise som utvikler
                  </h2>
                </ScrollAnimation>
                
                <div className="space-y-3">
                  {[
                    "Jeg er en passionert Full Stack Web Developer med ekspertise i moderne web teknologier.",
                    "Min reise innen webutvikling startet med en nysgjerrighet for å skape interaktive opplevelser.",
                    "Jeg har gradvis utviklet mine ferdigheter gjennom praktiske prosjekter og kontinuerlig læring.",
                    "Jeg trives med å lære nye teknologier og implementere kreative løsninger på komplekse problemer.",
                    "Min tilnærming til utvikling kombinerer teknisk presisjon med et øye for design og brukervennlighet."
                  ].map((line, index) => (
                    <ScrollAnimation 
                      key={index} 
                      delay={0.3 + index * 0.1} 
                      className="block"
                      customAnimation={{
                        hidden: { y: 20, x: -5, opacity: 0, rotateZ: -1, filter: "blur(3px)" },
                        visible: { 
                          y: 0, 
                          x: 0, 
                          opacity: 1, 
                          rotateZ: 0, 
                          filter: "blur(0px)",
                          transition: { 
                            duration: 0.5, 
                            ease: "easeOut",
                            delay: 0.3 + index * 0.1
                          }
                        }
                      }}
                    >
                      <p className="text-gray-300 leading-relaxed">{line}</p>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="max-w-6xl mx-auto py-8 md:py-20">
              <ScrollAnimation delay={0.2}>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                  Mine Prosjekter
                </h2>
              </ScrollAnimation>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {projects.map((project, index) => (
                  <ScrollAnimation key={index} delay={0.3 + index * 0.1}>
                    <ProjectCard {...project} />
                  </ScrollAnimation>
                ))}
              </div>
            </section>
          )}

          {/* CV Section */}
          {activeSection === 'cv' && (
            <section className="max-w-6xl mx-auto py-8 md:py-16">
              <ScrollAnimation delay={0.2}>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                  Ib Trollnes Strømsvåg
                </h2>
                <p className="text-gray-300 mb-6">Full-Stack Developer</p>
              </ScrollAnimation>
              
              <div className="bg-[#0d1b30] rounded-xl p-6 md:p-8 border border-gray-800 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5" /> Om meg
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Jeg er en nysgjerrig person som liker å utforske nye konsepter, teknologier og andre ting.
                        Jeg er interessert i alt av teknologi og vitenskap og vil alltid lære noe nytt.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5" /> Språk
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-white text-sm">Norsk: muntlig og skriftlig</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-white text-sm">Engelsk: Muntlig og skriftlig</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5" /> Personlige kvalifikasjoner
                      </h3>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Lærevillig</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Selvstendig</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Ambisiøs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Nysgjerrig</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Mail className="h-5 w-5" /> Kontakt & SoMe
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">+47 483 81 121</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">ibjulian9@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">Eigstien 78B, 4637, Kristiansand</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">/in/ib-stromsvåg</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">ibstromsvag</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <p className="text-gray-300">ibstromsvag.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Middle Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Code className="h-5 w-5" /> Programmeringskunnskap
                      </h3>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Next.js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">React.js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Tailwind CSS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Node.js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Prisma</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">HTML</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">CSS/SCSS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Figma</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Git</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span className="text-gray-300 text-sm">Illustrator</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5" /> Yrkeserfaring
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-blue-400">2024 - Vigo - vaktmester assistent (juni - August)</p>
                          <p className="text-gray-300 mt-1 text-sm">Assisterte med vedlikehold og praktiske oppgaver</p>
                        </div>
                        <div>
                          <p className="text-sm text-blue-400">2025 - Arendal Grimstad Rideklubb fore-assistent (nåværende)</p>
                          <p className="text-gray-300 mt-1 text-sm">Assisterer med foring og stell av hester</p>
                        </div>
                        <div>
                          <p className="text-sm text-blue-400">2022 - Volvo - Utplassering mekaniker (2 uker i November)</p>
                          <p className="text-gray-300 mt-1 text-sm">Praktisk erfaring med bilmekanikk og service</p>
                        </div>
                        <div>
                          <p className="text-sm text-blue-400">2025 - IKT-Agder - Utplassering driftstøtte (uke 6 - 7)</p>
                          <p className="text-gray-300 mt-1 text-sm">Erfaring med IT-support og systemdrift</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" /> Utdanning
                      </h3>
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
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" /> Programfag
                      </h3>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Teknologiforståelse</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Produksjon og historiefortelling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Konseptutvikling og programmering</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Brukeratferd</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Driftstøtte</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Utvikling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-blue-400">•</span>
                          <span>Yrkesrettet fordypning</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5" /> Referanser
                      </h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-white text-sm">Oppgis ved forespørsel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                    onClick={() => window.open('/cv.pdf', '_blank')}
                  >
                    Last ned CV <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section className="max-w-6xl mx-auto py-8 md:py-20">
              <ScrollAnimation delay={0.2}>
                <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                  Kontakt Meg
                </h2>
              </ScrollAnimation>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <ScrollAnimation delay={0.3}>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-400">La oss snakke sammen</h3>
                    <p className="text-gray-300 mb-6">
                      Har du et prosjekt i tankene eller bare vil si hei? Send meg en melding, og jeg vil svare så snart som mulig.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-900/30 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">ibjulian9@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-900/30 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Telefon</p>
                          <p className="text-white">+47 483 81 121</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-900/30 p-3 rounded-full">
                          <Globe className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Nettside</p>
                          <p className="text-white">ibstromsvag.com</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-bold mb-3 text-blue-400">Følg meg</h4>
                      <div className="flex gap-4">
                        <a href="https://github.com/ibstromsvag" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com/ibstromsvag" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                
                {/* Contact Form */}
                <ScrollAnimation delay={0.4}>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold mb-4">Send meg en melding</h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Navn</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Ditt navn"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="din.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Emne</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Hva handler dette om?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Melding</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Skriv din melding her..."
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2 touch-manipulation"
                      >
                        Send melding <ArrowRight size={16} />
                      </button>
                    </form>
                  </div>
                </ScrollAnimation>
              </div>
            </section>
          )}
        </PageTransition>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}