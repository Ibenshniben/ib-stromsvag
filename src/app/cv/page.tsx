'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Languages, 
  Award,
  ChevronDown
} from 'lucide-react'
import TiltCard from '@/components/TiltCard'
import Footer from '@/components/Footer'

export default function CV() {
  const pageRef = useRef(null)
  
  // Animation setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.cv-header', { 
        y: -30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
      })
      
      // Staggered animation for CV sections
      gsap.from('.cv-section', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.cv-container',
          start: 'top bottom-=100',
        }
      })
    }, pageRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main ref={pageRef} className="min-h-screen bg-[#0a192f] text-white relative pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4">
        {/* CV Header */}
        <div className="cv-header mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Min utdanning, erfaring og ferdigheter
          </p>
          <div className="mt-6 animate-bounce">
            <ChevronDown className="h-6 w-6 text-blue-400 mx-auto" />
          </div>
        </div>
        
        <div className="cv-container space-y-8">
          {/* Personal Information */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Photo */}
                  <div className="md:w-1/4 flex justify-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30">
                      <Image 
                        src="/images/ib-bilde1.jpeg" 
                        alt="Ib Strømsvåg" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Right side - Contact Info */}
                  <div className="md:w-3/4">
                    <h2 className="text-2xl font-bold text-white mb-4">Ib Julian Trollnes Strømsvåg</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Adresse</div>
                          <div className="font-medium text-white">Elgstien 78B, 4637 Kristiansand</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Phone className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Telefon</div>
                          <div className="font-medium text-white">+47 483 81 121</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">E-post</div>
                          <div className="font-medium text-white">ibjulian9@gmail.com</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Linkedin className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">LinkedIn</div>
                          <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-blue-400 transition-colors">
                            linkedin.com/in/ib-strømsvåg
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Globe className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Nettside</div>
                          <a href="https://ibstromsvag.com" target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:text-blue-400 transition-colors">
                            ibstromsvag.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
          
          {/* Key Competencies */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  Nøkkelkompetanse
                </h2>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
                  <li>Kreativ problemløsning og innovasjon</li>
                  <li>Programmering: HTML, CSS, Python, JavaScript, SQL, PHP</li>
                  <li>Sterk teknisk forståelse og ferdigheter</li>
                  <li>Erfaring med designverktøy og multimedieproduksjon</li>
                  <li>Gode kommunikasjons- og samarbeidsevner</li>
                </ul>
              </div>
            </TiltCard>
          </section>
          
          {/* Work Experience */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-400" />
                  Arbeidserfaring
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-500 pl-4 pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">Vaktmesterassistent (midlertidig arbeid)</h3>
                        <p className="text-blue-400">Avigo</p>
                      </div>
                      <p className="text-sm text-gray-400 md:text-right">13. juni 2024 – 9. august 2024</p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2 pl-2">
                      <li>Ansvarlig for å flytte møbler, som skap og kontorinventar, fra det gamle til det nye fylkeshuset.</li>
                      <li>Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.</li>
                      <li>Samarbeidet med kollegaer for å sikre en smidig overføring av eiendeler.</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">Frivillig stallarbeid</h3>
                        <p className="text-blue-400">Arendal og Grimstad Rideklubb</p>
                      </div>
                      <p className="text-sm text-gray-400 md:text-right">Nåværende, 2025</p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2 pl-2">
                      <li>Hjelper med å fôre og stelle 200 hester hver torsdag og en helg i måneden.</li>
                      <li>Bidrar til dyrevelferd og daglig drift av stallen.</li>
                      <li>Arbeider selvstendig og i team.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
          
          {/* Education */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                  Utdanning
                </h2>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4 pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">Informasjonsteknologi (VG2)</h3>
                        <p className="text-blue-400">Tangen VGS</p>
                      </div>
                      <p className="text-sm text-gray-400 md:text-right">2024 – 2025</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4 pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">Informasjonsteknologi og medieproduksjon (VG1)</h3>
                        <p className="text-blue-400">Tangen VGS</p>
                      </div>
                      <p className="text-sm text-gray-400 md:text-right">2023 – 2024</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-blue-500 pl-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">Grunnskole</h3>
                      </div>
                      <p className="text-sm text-gray-400 md:text-right">Avsluttet 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
          
          {/* Language Skills */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-blue-400" />
                  Språkkunnskaper
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="font-medium text-white mb-2">Norsk</h3>
                    <p className="text-gray-300 text-sm">Morsmål (snakker og skriver flytende)</p>
                    <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="font-medium text-white mb-2">Engelsk</h3>
                    <p className="text-gray-300 text-sm">Svært godt muntlig og skriftlig</p>
                    <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
          
          {/* IT Skills */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-400" />
                  IT- og Programvarekunnskaper
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-white mb-3">Programmering</h3>
                    <div className="flex flex-wrap gap-2">
                      {['HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'PHP'].map((skill) => (
                        <span key={skill} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-3">Verktøy og programvare</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Visual Studio Code',
                        'Adobe Illustrator',
                        'Figma',
                        'MySQL Workbench',
                        'Microsoft Word',
                        'Microsoft PowerPoint',
                        'Adobe Premiere Pro',
                        'Adobe XD'
                      ].map((tool) => (
                        <div key={tool} className="bg-gray-800/50 px-3 py-2 rounded-md text-sm text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </section>
          
          {/* References */}
          <section className="cv-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  Referanser
                </h2>
                
                <p className="text-gray-300">Oppgis ved forespørsel.</p>
              </div>
            </TiltCard>
          </section>
          
          {/* Download CV Button */}
          <div className="flex justify-center mt-8">
            <a 
              href="/files/cv-ib-stromsvag.pdf" 
              download
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
            >
              Last ned CV som PDF
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}