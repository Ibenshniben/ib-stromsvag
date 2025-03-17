'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import BirthdayCountdown from '@/components/BirthdayCountdown'
import Footer from '@/components/Footer'
import { 
  ArrowRight, 
  Home as HomeIcon, // Renamed from Home to HomeIcon
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
  ChevronUp
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  
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
    <main className="min-h-screen bg-[#0a192f] text-white relative">
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
            className="md:hidden z-20 p-2"
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
              <ul className="flex flex-col space-y-6 items-center">
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
                          px-8 py-3 transition-colors flex items-center justify-center gap-3
                          ${activeSection === sectionKey 
                            ? 'text-blue-400 bg-blue-900/20' 
                            : 'text-white'
                          }
                          w-full rounded-lg
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
      <div className="pt-24 px-4 min-h-[calc(100vh-80px)]"> {/* Added min-height to ensure content fills screen */}
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="max-w-6xl mx-auto py-10 md:py-20 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="animate-slideInLeft">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hei, jeg er <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Ib Strømsvåg</span>
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Jeg er en ung utvikler med lidenskap for webutvikling og design.
                </p>
                
                {/* Birthday Countdown moved here */}
                <div className="mb-6">
                  <BirthdayCountdown />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => handleSectionChange('projects')}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                  >
                    Se mine prosjekter <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={() => handleSectionChange('contact')}
                    className="bg-gray-800/60 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                  >
                    Kontakt meg
                  </button>
                </div>
              </div>
              <div className="flex justify-center animate-slideInRight">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-[#0d2242] rounded-full overflow-hidden border-4 border-[#1a3a6c] w-full h-full">
                    <Image 
                      src="/profile.jpg" 
                      alt="Ib Julian Strømsvåg - Bilde ikke tilgjengelig"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Bento Grid */}
            <div className="mt-16 animate-slideInUp">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                Mine ferdigheter
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Web Development Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-blue-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Webutvikling</h3>
                  <p className="text-gray-300 mb-4">Erfaring med moderne webutviklingsverktøy og rammeverk.</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">HTML</span>
                    <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">CSS</span>
                    <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">JavaScript</span>
                    <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs">Next.js</span>
                  </div>
                </div>
                
                {/* Design Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-900/10 relative overflow-hidden group">
                  <div className="absolute -left-20 -top-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <PenTool className="h-8 w-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Design</h3>
                  <p className="text-gray-300 mb-4">Kreativ med et øye for detaljer og brukeropplevelse.</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">UI/UX</span>
                    <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">Figma</span>
                    <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">Adobe Illustrator</span>
                    <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">Responsive Design</span>
                  </div>
                </div>
                
                {/* Backend Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-green-500/30 transition-all shadow-xl hover:shadow-green-900/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-green-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <Database className="h-8 w-8 text-green-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-400 mb-2">Backend</h3>
                  <p className="text-gray-300 mb-4">Erfaring med databasesystemer og serverside programmering.</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-xs">Python</span>
                    <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-xs">SQL</span>
                    <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-xs">PHP</span>
                    <span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-xs">MySQL</span>
                  </div>
                </div>
              </div>
              
              {/* Additional Skills Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Soft Skills Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-yellow-500/30 transition-all shadow-xl hover:shadow-yellow-900/10 relative overflow-hidden">
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <span className="bg-yellow-500/20 p-1.5 rounded-md">
                      <FileText className="h-5 w-5" />
                    </span>
                    Personlige egenskaper
                  </h3>
                  
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="bg-yellow-900/30 text-yellow-300 p-1 rounded-full">✓</span>
                      Kreativ problemløsning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-yellow-900/30 text-yellow-300 p-1 rounded-full">✓</span>
                      God kommunikasjon
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-yellow-900/30 text-yellow-300 p-1 rounded-full">✓</span>
                      Lærevillig og tilpasningsdyktig
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-yellow-900/30 text-yellow-300 p-1 rounded-full">✓</span>
                      Detaljorientert
                    </li>
                  </ul>
                </div>
                
                {/* About Me Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <span className="bg-blue-500/20 p-1.5 rounded-md">
                      <Globe className="h-5 w-5" />
                    </span>
                    Om meg
                  </h3>
                  
                  <p className="text-gray-300 mb-3">
                    Jeg er en 17-årig utvikler med stor interesse for teknologi og design. For tiden studerer jeg Informasjonsteknologi og medieproduksjon.
                  </p>
                  <p className="text-gray-300">
                    På fritiden liker jeg å utforske nye teknologier, jobbe med personlige prosjekter og utvide mine ferdigheter innen webutvikling.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Removed duplicated birthday countdown */}
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="max-w-6xl mx-auto py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Mine Prosjekter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        )}

        {/* CV Section */}
        {activeSection === 'cv' && (
          <section className="max-w-6xl mx-auto py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Curriculum Vitae
            </h2>
            
            {/* Personal Info Card - Spans full width */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                  <div className="md:w-1/4">
                    <div className="bg-blue-900/30 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto md:mx-0">
                      <span className="text-4xl font-bold text-blue-400">IB</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Ib Julian Trollnes Strømsvåg</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-300 flex items-center gap-2">
                          <Mail size={16} className="text-blue-400" /> ibjulian9@gmail.com
                        </p>
                        <p className="text-gray-300 flex items-center gap-2">
                          <Phone size={16} className="text-blue-400" /> +47 483 81 121
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-300 flex items-center gap-2">
                          <Globe size={16} className="text-blue-400" /> ibstromsvag.com
                        </p>
                        <p className="text-gray-300 flex items-center gap-2">
                          <Linkedin size={16} className="text-blue-400" /> linkedin.com/in/ib-strømsvåg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Key Competencies - Spans 1 column */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden h-full">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Code className="h-4 w-4" />
                  </span>
                  Nøkkelkompetanse
                </h3>
                
                <ul className="space-y-2 list-disc list-inside text-gray-300 relative z-10">
                  <li>Kreativ problemløsning og innovasjon</li>
                  <li>Programmering: HTML, CSS, Python, JavaScript, SQL, PHP</li>
                  <li>Sterk teknisk forståelse og ferdigheter</li>
                  <li>Erfaring med designverktøy og multimedieproduksjon</li>
                  <li>Gode kommunikasjons- og samarbeidsevner</li>
                </ul>
              </div>
              
              {/* Education - Spans 2 columns */}
              <div className="md:col-span-2 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <FileText className="h-4 w-4" />
                  </span>
                  Utdanning
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white">Informasjonsteknologi og medieproduksjon (VG1)</h4>
                    <p className="text-gray-400">2023 – 2024</p>
                    <p className="text-gray-300 text-sm mt-2">
                      Grunnleggende IT-ferdigheter, programmering og medieproduksjon.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white">Informasjonsteknologi (VG2)</h4>
                    <p className="text-gray-400">2024 – 2025</p>
                    <p className="text-gray-300 text-sm mt-2">
                      Avansert programmering, systemadministrasjon og databasedesign.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white">Grunnskole</h4>
                    <p className="text-gray-400">Avsluttet 2023</p>
                  </div>
                </div>
              </div>
              
              {/* Work Experience - Spans 2 columns */}
              <div className="md:col-span-2 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  Arbeidserfaring
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-white">Vaktmesterassistent - Avigo</h4>
                      <p className="text-gray-400">juni 2024 – 9. august 2024</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset.</li>
                      <li>Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.</li>
                      <li>Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-white">Frivillig stallarbeid - Arendal og Grimstad Rideklubb</h4>
                      <p className="text-gray-400">Nåværende, 2025</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Hjelper med å fôre og stelle 200 hester hver torsdag og en helg i måneden.</li>
                      <li>Bidrar til dyrevelferd og daglig drift av stallen.</li>
                      <li>Arbeider selvstendig og i team.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Languages - Spans 1 column */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Globe className="h-4 w-4" />
                  </span>
                  Språkkunnskaper
                </h3>
                
                <div className="space-y-3 relative z-10">
                  <div className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white">Norsk</h4>
                    <div className="mt-1 bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">Morsmål (snakker og skriver flytende)</p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white">Engelsk</h4>
                    <div className="mt-1 bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[90%]"></div>
                    </div>
                    <p className="text-gray-300 text-sm mt-1">Svært godt muntlig og skriftlig</p>
                  </div>
                </div>
              </div>
              
              {/* Skills & Tools - Spans full width */}
              <div className="md:col-span-3 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -left-20 -top-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Code className="h-4 w-4" />
                  </span>
                  IT- og Programvarekunnskaper
                </h3>
                
                <div className="relative z-10">
                  <h4 className="font-semibold text-white mb-3">Programmering</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                    {[
                      { name: 'HTML', icon: <Globe className="w-5 h-5 text-orange-400 mb-1" />, level: 90 },
                      { name: 'CSS', icon: <PenTool className="w-5 h-5 text-blue-400 mb-1" />, level: 85 },
                      { name: 'Python', icon: <Code className="w-5 h-5 text-yellow-400 mb-1" />, level: 75 },
                      { name: 'JavaScript', icon: <FileCode className="w-5 h-5 text-yellow-500 mb-1" />, level: 80 },
                      { name: 'SQL', icon: <Database className="w-5 h-5 text-blue-500 mb-1" />, level: 70 },
                      { name: 'PHP', icon: <FileCode className="w-5 h-5 text-purple-400 mb-1" />, level: 65 }
                    ].map((skill) => (
                      <div key={skill.name} className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-700/40 transition-colors flex flex-col items-center">
                        {skill.icon}
                        <h4 className="text-sm font-bold text-blue-400">{skill.name}</h4>
                        <div className="w-full bg-gray-700/50 h-1.5 rounded-full mt-2">
                          <div 
                            className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-semibold text-white mb-3">Verktøy og programvare</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                    {[
                      { name: 'VS Code', icon: <Code className="w-5 h-5 text-blue-400 mb-1" /> },
                      { name: 'Adobe Illustrator', icon: <PenTool className="w-5 h-5 text-orange-400 mb-1" /> },
                      { name: 'Figma', icon: <PenTool className="w-5 h-5 text-purple-400 mb-1" /> },
                      { name: 'MySQL Workbench', icon: <Database className="w-5 h-5 text-blue-500 mb-1" /> },
                      { name: 'Microsoft Office', icon: <FileText className="w-5 h-5 text-blue-400 mb-1" /> },
                      { name: 'Adobe Premiere Pro', icon: <FileCode className="w-5 h-5 text-purple-500 mb-1" /> }
                    ].map((tool) => (
                      <div key={tool.name} className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-700/40 transition-colors flex flex-col items-center">
                        {tool.icon}
                        <h4 className="text-sm font-bold text-blue-400 text-center">{tool.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* References - Spans full width */}
              <div className="md:col-span-3 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <FileText className="h-4 w-4" />
                  </span>
                  Referanser
                </h3>
                
                <p className="text-gray-300 relative z-10">Oppgis ved forespørsel.</p>
              </div>
              
              {/* Address - Spans full width */}
              <div className="md:col-span-3 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Mail className="h-4 w-4" />
                  </span>
                  Kontaktinformasjon
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <Mail size={16} className="text-blue-400" /> E-post
                    </h4>
                    <p className="text-gray-300 mt-1">ibjulian9@gmail.com</p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <Phone size={16} className="text-blue-400" /> Telefon
                    </h4>
                    <p className="text-gray-300 mt-1">+47 483 81 121</p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <Globe size={16} className="text-blue-400" /> Nettside
                    </h4>
                    <p className="text-gray-300 mt-1">ibstromsvag.com</p>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-colors">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <HomeIcon size={16} className="text-blue-400" /> Adresse
                    </h4>
                    <p className="text-gray-300 mt-1">Elgstien 78B, 4637 Kristiansand</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="max-w-6xl mx-auto py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Kontakt Meg
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Contact Info Card */}
              <div className="md:col-span-1 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2 relative z-10">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Mail className="h-4 w-4" />
                  </span>
                  Kontaktinformasjon
                </h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">E-post</h4>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-300">ibjulian9@gmail.com</p>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText('ibjulian9@gmail.com');
                            const el = document.getElementById('copyEmailTooltip');
                            if (el) {
                              el.classList.remove('opacity-0');
                              setTimeout(() => el.classList.add('opacity-0'), 2000);
                            }
                          }}
                          className="bg-gray-700/50 hover:bg-gray-600 p-2 rounded-full transition-colors relative"
                          title="Kopier e-post"
                        >
                          <Copy size={16} />
                          <span id="copyEmailTooltip" className="absolute -top-8 right-0 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity">
                            Kopiert!
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Telefon</h4>
                      <p className="text-gray-300">+47 483 81 121</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <HomeIcon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Adresse</h4>
                      <p className="text-gray-300">Elgstien 78B, 4637 Kristiansand</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-200 mb-4 flex items-center gap-2">
                    <span className="bg-blue-500/20 p-1 rounded-md">
                      <Globe className="h-4 w-4" />
                    </span>
                    Sosiale Medier
                  </h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/ibenshniben" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800/70 hover:bg-gray-700 p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20 group/social">
                      <Github size={24} className="text-gray-300 group-hover/social:text-white transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/ib-strømsvåg-606994324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800/70 hover:bg-gray-700 p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20 group/social">
                      <Linkedin size={24} className="text-gray-300 group-hover/social:text-white transition-colors" />
                    </a>
                    <a href="https://instagram.com/ibjulianstromsvag" target="_blank" rel="noopener noreferrer"
                       className="bg-gray-800/70 hover:bg-gray-700 p-3 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20 group/social">
                      <Instagram size={24} className="text-gray-300 group-hover/social:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="md:col-span-2 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                  <span className="bg-blue-500/20 p-1.5 rounded-md">
                    <Phone className="h-5 w-5" />
                  </span>
                  La oss snakke!
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Har du et prosjekt i tankene eller å diskutere en mulighet? Send meg en melding, så svarer jeg så snart som mulig.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Navn</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ditt navn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">E-post</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="din.epost@eksempel.no"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Emne</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Hva handler henvendelsen om?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Melding</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Skriv din melding her..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    Send melding <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}