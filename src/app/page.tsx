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
              <ul className="flex flex-col space-y-6 items-center w-full px-6">
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
                          px-8 py-4 transition-colors flex items-center justify-center gap-3
                          ${activeSection === sectionKey 
                            ? 'text-blue-400 bg-blue-900/20' 
                            : 'text-white'
                          }
                          w-full rounded-lg touch-manipulation
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
          <section className="max-w-6xl mx-auto py-8 md:py-20 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="animate-slideInLeft">
                <h1 className="text-3xl md:text-6xl font-bold mb-4">
                  Hei, jeg er <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Ib Strømsvåg</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  Jeg er en ung utvikler med lidenskap for webutvikling og design.
                </p>
                
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
              {/* Profile picture section removed */}
            </div>
            
            {/* Skills Bento Grid */}
            <div className="mt-12 md:mt-16 animate-slideInUp">
              <h2 className="text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                Mine ferdigheter
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Web Development Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-blue-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Webutvikling</h3>
                  <p className="text-gray-300 text-sm md:text-base">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
                </div>
                
                {/* Backend Development Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all shadow-xl hover:shadow-purple-900/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-purple-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <Database className="h-8 w-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Backend</h3>
                  <p className="text-gray-300 text-sm md:text-base">Node.js, Express, API-utvikling, Grunnleggende databasekunnskap</p>
                </div>
                
                {/* Design Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-green-500/30 transition-all shadow-xl hover:shadow-green-900/10 relative overflow-hidden group">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
                  
                  <div className="bg-green-500/20 p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <PenTool className="h-8 w-8 text-green-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-400 mb-2">Design</h3>
                  <p className="text-gray-300 text-sm md:text-base">UI/UX Design, Figma, Responsive Design, Brukervennlighet</p>
                </div>
              </div>
              
              {/* Additional Skills Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
                {/* Soft Skills Card */}
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
                
                {/* About Me Card */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-5 md:p-6 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all shadow-xl hover:shadow-blue-900/10 relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Om meg</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Jeg er en ung utvikler med stor interesse for teknologi og webutvikling. 
                    Jeg liker å lære nye ting og holder meg oppdatert på de nyeste trendene innen webutvikling.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="max-w-6xl mx-auto py-8 md:py-20">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Mine Prosjekter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        )}

        {/* CV Section */}
        {activeSection === 'cv' && (
          <section className="max-w-6xl mx-auto py-8 md:py-20 animate-fadeIn">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Min CV
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Profile and Key Competencies */}
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#1a3a6c] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                      IB
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Ib Julian Trollnes Strømsvåg</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-400" />
                      <p className="text-gray-300">ibjulian9@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-400" />
                      <p className="text-gray-300">+47 483 81 121</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-400" />
                      <p className="text-gray-300">ibstromsvag.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-blue-400" />
                      <p className="text-gray-300">linkedin.com/in/ib-strømsvåg</p>
                    </div>
                  </div>
                </div>
                
                {/* Key Competencies */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5" /> Nøkkelkompetanse
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Kreativ problemløsning og innovasjon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Programmering: HTML, CSS, Python, JavaScript, SQL, PHP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Sterk teknisk forståelse og ferdigheter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Erfaring med designverktøy og multimedieproduksjon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Gode kommunikasjons- og samarbeidsevner</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Middle Column - Education and Work Experience */}
              <div className="space-y-6">
                {/* Education */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5" /> Utdanning
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white">Informasjonsteknologi og medieproduksjon (VG1)</h4>
                      <p className="text-sm text-blue-400 mb-1">2023 – 2024</p>
                      <p className="text-gray-300 text-sm">Grunnleggende IT-ferdigheter, programmering og medieproduksjon.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white">Informasjonsteknologi (VG2)</h4>
                      <p className="text-sm text-blue-400 mb-1">2024 – 2025</p>
                      <p className="text-gray-300 text-sm">Avansert programmering, systemadministrasjon og databasedesign.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white">Grunnskole</h4>
                      <p className="text-sm text-blue-400 mb-1">Avsluttet 2023</p>
                    </div>
                  </div>
                </div>
                
                {/* Work Experience */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" /> Arbeidserfaring
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-white">Vaktmesterassistent - Avigo</h4>
                      <p className="text-sm text-blue-400 mb-1">juni 2024 – 9. august 2024</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-white">Frivillig stallarbeid - Arendal og Grimstad Rideklubb</h4>
                      <p className="text-sm text-blue-400 mb-1">Nåværende, 2025</p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Hjelper med å fôre og stelle 200 hester hver torsdag og en helg i måneden.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Bidrar til dyrevelferd og daglig drift av stallen.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Arbeider selvstendig og i team.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Skills and References */}
              <div className="space-y-6">
                {/* IT and Programming Skills */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <FileCode className="h-5 w-5" /> IT- og Programvarekunnskaper
                  </h3>
                  
                  <div>
                    <h4 className="font-bold text-white mb-3">Programmering</h4>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="flex flex-col items-center">
                        <Globe className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">HTML</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <FileCode className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">CSS</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Code className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">Python</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <FileCode className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">JavaScript</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Database className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">SQL</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <FileCode className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">PHP</p>
                        <div className="w-full bg-gray-700 h-1 mt-1">
                          <div className="bg-blue-400 h-1" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-white mb-3">Verktøy og programvare</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <Code className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">VS Code</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <PenTool className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">Adobe Illustrator</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <PenTool className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">Figma</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <Database className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">MySQL Workbench</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <FileText className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">Microsoft Office</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <PenTool className="h-6 w-6 text-blue-400 mb-1" />
                        <p className="text-sm text-gray-300">Adobe Premiere Pro</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Language Skills */}
                <div className="bg-[#0d1b30] rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5" /> Språkkunnskaper
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-white mb-1">Norsk</p>
                      <div className="w-full bg-gray-700 h-2 rounded-full">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">Engelsk</p>
                      <div className="w-full bg-gray-700 h-2 rounded-full">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Download CV Button */}
            <div className="mt-8 flex justify-center">
              <a 
                href="/cv-ib-stromsvag.pdf" 
                download
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 touch-manipulation"
              >
                Last ned CV <FileText size={16} />
              </a>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="max-w-6xl mx-auto py-8 md:py-20 animate-fadeIn">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Kontakt Meg
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
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
                      <p className="text-white">+47 123 45 678</p>
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
              
              {/* Contact Form */}
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
            </div>
          </section>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}