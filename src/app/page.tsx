'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import BirthdayCountdown from '@/components/BirthdayCountdown'
import Footer from '@/components/Footer'
// Import Lucide icons
import { ArrowRight, Home, Briefcase, FileText, Mail, Phone, Copy, Instagram, Github, Linkedin, ExternalLink } from 'lucide-react'

// Define projects array at the top of the file
const projects = [
  {
    title: 'AI Prosjekt med Gervi Labs',
    description: 'Et innovativt samarbeidsprosjekt hvor vi utviklet en AI-assistent og skapte en musikkvideo ved hjelp av kunstig intelligens. Prosjektet inkluderer AI-generert musikk og video presentert på en spesialdesignet nettside med mørkeblå fargetema.',
    image: '/images/gervi-nettside.png',
    tags: ['AI', 'Webutvikling', 'Video', 'Musikk', 'Gervi Labs'],
    link: 'https://ai-prosjekt999.vercel.app'
  },
  {
    title: 'Vikings Nettside',
    description: 'Min første nettside noensinne, dedikert til Netflix-serien Vikings. Bygget med kun HTML og CSS for å vise informasjon om serien.',
    image: '/images/vikings-nettside.png',
    tags: ['HTML', 'CSS', 'Første Prosjekt'],
    link: 'https://vikings-nettside.vercel.app'
  }
]

// Map section names to their respective icons
const sectionIcons = {
  home: Home,
  projects: Briefcase,
  cv: FileText,
  contact: Mail
}

// Change the export default function name
export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation - Updated with Lucide icons */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => setActiveSection('home')}
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/ib-logo-hvit.png"
              alt="IB Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
          <ul className="flex space-x-8 items-center">
            {['home', 'projects', 'cv', 'contact'].map((section) => {
              const IconComponent = sectionIcons[section as keyof typeof sectionIcons]
              return (
                <li key={section}>
                  <button 
                    onClick={() => setActiveSection(section)}
                    className={`
                      relative px-2 py-1 transition-colors flex items-center gap-2
                      ${activeSection === section 
                        ? 'text-blue-400' 
                        : 'hover:text-blue-300'
                      }
                      after:content-[''] after:absolute after:left-0 after:bottom-0
                      after:h-[2px] after:bg-blue-400 after:transition-all
                      ${activeSection === section ? 'after:w-full' : 'after:w-0'}
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
        </div>
      </nav>

      {/* Enhanced Main Content */}
      <div className="pt-24 px-4">
        {activeSection === 'home' && (
          <section className="max-w-6xl mx-auto py-20">
            <div className="space-y-12 animate-fade-in">
              {/* Header and intro */}
              <div className="space-y-8">
                <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                  Hei, jeg er Ib Strømsvåg
                </h1>
                <div className="space-y-4">
                  <p className="text-2xl text-gray-300">
                    Frontend Utvikler | UX Designer | Problem Solver
                  </p>
                  <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                    Jeg er en 17 år gammel utvikler med lidenskap for å skape interaktive og brukervennlige nettsider. 
                    Med fokus på moderne teknologier og clean design, jobber jeg for å levere den beste brukeropplevelsen.
                  </p>
                </div>

                {/* CV button with Lucide icon */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <button 
                    onClick={() => setActiveSection('cv')}
                    className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-6 py-3 rounded-full transition-all hover:scale-105 border border-blue-500/20 flex items-center gap-2"
                  >
                    Se min CV
                    <ArrowRight size={16} />
                  </button>
                  <BirthdayCountdown />
                </div>

                {/* Combined Skills & Experience Bento Grid */}
                <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
                    Mine ferdigheter & erfaring
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* IT og Medieproduksjon VG1 - Spans 2 columns */}
                    <div className="md:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Informasjonsteknologi og Medieproduksjon VG1</h3>
                      <p className="text-gray-300">
                        Jeg har lært grunnleggende IT-ferdigheter, inkludert programmering, nettverksbygging og digital medieproduksjon. Dette har gitt meg en solid forståelse av teknologiens rolle i dagens samfunn og hvordan jeg kan bruke den effektivt.
                      </p>
                    </div>

                    {/* Vaktmesterassistent */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Vaktmesterassistent - Avigo</h3>
                      <p className="text-gray-400 mb-3">Juni 2024 - August 2024</p>
                      <p className="text-gray-300">
                        Ansvarlig for å flytte møbler og kontorinventar. Bidro til en effektiv flytteprosess med fokus på organisering og fysisk arbeid.
                      </p>
                    </div>

                    {/* Frivillig stallarbeid */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Frivillig stallarbeid</h3>
                      <p className="text-gray-400 mb-3">Nåværende, 2025</p>
                      <p className="text-gray-300">
                        Hjelper med å føre og stelle 200 hester hver torsdag og en helg i måneden. Bidrar til dyrevelferd og daglig drift av stallen.
                      </p>
                    </div>

                    {/* IT VG2 - Spans 2 columns */}
                    <div className="md:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Informasjonsteknologi VG2</h3>
                      <p className="text-gray-300">
                        Jeg har bygget videre på VG1-kunnskapene med avansert programmering, systemadministrasjon og databasedesign. Dette har gitt meg ferdigheter til å utvikle og vedlikeholde komplekse IT-systemer.
                      </p>
                    </div>

                    {/* Kreativitet og problemløsning - Spans 2 columns */}
                    <div className="md:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Kreativitet og problemløsning</h3>
                      <p className="text-gray-300">
                        Jeg har lært å bruke teknologi kreativt for å løse problemer og skape innovative løsninger. Dette inkluderer ferdigheter i design og utvikling av brukervennlige applikasjoner.
                      </p>
                    </div>

                    {/* Nøkkelkompetanse */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Nøkkelkompetanse</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>Kreativ problemløsning og innovasjon</li>
                        <li>Programmering: HTML, CSS, Python, JavaScript, SQL, PHP</li>
                        <li>Sterk teknisk forståelse og designferdigheter</li>
                      </ul>
                    </div>

                    {/* Webutvikling */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Webutvikling</h3>
                      <p className="text-gray-300">
                        Jeg har tilegnet meg solid kompetanse innen webutvikling, inkludert HTML, CSS og JavaScript. Dette gjør meg i stand til å lage responsive og brukervennlige nettsider.
                      </p>
                    </div>

                    {/* IT-verktøy */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">IT-verktøy</h3>
                      <ul className="text-gray-300 space-y-2">
                        <li>Visual Studio Code</li>
                        <li>Adobe Creative Suite</li>
                        <li>Figma</li>
                        <li>MySQL Workbench</li>
                      </ul>
                    </div>

                    {/* Grafisk design */}
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                      <h3 className="text-xl font-bold mb-4 text-blue-400">Grafisk design</h3>
                      <p className="text-gray-300">
                        Jeg har erfaring med grafisk design og kan bruke verktøy som Adobe Illustrator og Figma til å lage visuelt tiltalende design for nettsider og applikasjoner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="max-w-6xl mx-auto py-20">
            <h2 className="text-5xl font-bold mb-16 animate-fade-in bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Mine Prosjekter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'cv' && (
          <section className="max-w-6xl mx-auto py-20">
            <h2 className="text-5xl font-bold mb-16 animate-fade-in bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Curriculum Vitae
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              {/* Personal Info Card */}
              <div className="col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-4">Ib Julian Trollnes Strømsvåg</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Elgstien 78B, 4637 Kristiansand</p>
                  <p>📱 +47 483 81 121</p>
                  <p>📧 ibjulian9@gmail.com</p>
                  <div className="flex gap-4 mt-4">
                    <Link href="https://linkedin.com/in/ib-strømsvåg" target="_blank"
                      className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-full transition-colors flex items-center gap-2">
                      <Linkedin size={16} />
                      LinkedIn
                    </Link>
                    <Link href="https://ibstromsvag.com" target="_blank"
                      className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-full transition-colors flex items-center gap-2">
                      <ExternalLink size={16} />
                      Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            
              {/* Key Competencies Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Nøkkelkompetanse</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Kreativ problemløsning og innovasjon</li>
                  <li>Programmering</li>
                  <li>Sterk teknisk forståelse</li>
                  <li>Designverktøy og multimedia</li>
                  <li>Kommunikasjon og samarbeid</li>
                </ul>
              </div>
            
              {/* Programming Skills Grid */}
              <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
                {['HTML', 'CSS', 'Python', 'JavaScript', 'SQL', 'PHP'].map((skill) => (
                  <div key={skill} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-blue-400">{skill}</h4>
                  </div>
                ))}
              </div>
            
              {/* Work Experience */}
              <div className="col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Arbeidserfaring</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold">Vaktmesterassistent</h4>
                    <p className="text-gray-400">Avigo | juni 2024 – 9. august 2024</p>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                      <li>Ansvarlig for møbelflytting i fylkeshuset</li>
                      <li>Effektiv flytteprosess og organisering</li>
                      <li>Teamarbeid og koordinering</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Frivillig stallarbeid</h4>
                    <p className="text-gray-400">Arendal og Grimstad Rideklubb | Nåværende, 2025</p>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                      <li>Stell av 200 hester</li>
                      <li>Bidrag til dyrevelferd</li>
                      <li>Selvstendig og teamarbeid</li>
                    </ul>
                  </div>
                </div>
              </div>
            
              {/* Education */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Utdanning</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Informasjonsteknologi og medieproduksjon (VG1)</h4>
                    <p className="text-gray-400">2023 – 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Informasjonsteknologi (VG2)</h4>
                    <p className="text-gray-400">2024 – 2025</p>
                  </div>
                </div>
              </div>
            
              {/* Tools & Software */}
              <div className="col-span-3 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold mb-6 text-blue-400">Verktøy og Programvare</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Visual Studio Code',
                    'Adobe Illustrator',
                    'Figma',
                    'MySQL Workbench',
                    'Microsoft Office',
                    'Adobe Premiere Pro',
                    'Adobe XD'
                  ].map((tool) => (
                    <div key={tool} className="bg-gray-700/30 rounded-xl p-4 text-center hover:bg-gray-700/50 transition-colors">
                      <p className="text-gray-300">{tool}</p>
                    </div>
                  ))}
                </div>
              </div>
            
              {/* Languages */}
              <div className="col-span-3 grid grid-cols-2 gap-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Norsk</h3>
                  <p className="text-gray-300">Morsmål (snakker og skriver flytende)</p>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Engelsk</h3>
                  <p className="text-gray-300">Svært godt muntlig og skriftlig</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="max-w-6xl mx-auto py-20">
            <h2 className="text-5xl font-bold mb-12 animate-fade-in bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Kontakt Meg
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Phone Card */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-4 rounded-full group-hover:bg-blue-500/30 transition-all">
                      <Phone className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Telefon</h3>
                      <a 
                        href="tel:+4748381121" 
                        className="text-lg text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform inline-block"
                      >
                        +47 483 81 121
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Email Card */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/10 group">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-4 rounded-full group-hover:bg-purple-500/30 transition-all">
                      <Mail className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">E-post</h3>
                      <a 
                        href="mailto:ibjulian9@gmail.com" 
                        className="text-lg text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform inline-block"
                      >
                        ibjulian9@gmail.com
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Card */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/10">
                  <h3 className="text-xl font-bold text-white mb-4">Sosiale Medier</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/ibenshniben" 
                      target="_blank" 
                      className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://github.com/ibstromsvag" 
                      target="_blank" 
                      className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://instagram.com/ibstromsvag" 
                      target="_blank" 
                      className="bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 p-3 rounded-full transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Interactive Contact Animation */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 flex flex-col justify-center items-center">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    La oss snakke!
                  </h3>
                  <p className="text-gray-300">
                    Jeg er alltid åpen for nye prosjekter og muligheter.
                    <br />Ikke nøl med å ta kontakt!
                  </p>
                </div>
                
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-blue-500/5 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-purple-500/10 animate-pulse" style={{ animationDelay: '500ms' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-blue-500/20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => {navigator.clipboard.writeText('+47 483 81 121'); alert('Telefonnummer kopiert til utklippstavlen!')}}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full hover:scale-110 transition-transform z-10 shadow-lg"
                    >
                      <Copy className="w-8 h-8" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={() => {navigator.clipboard.writeText('ibjulian9@gmail.com'); alert('E-post kopiert til utklippstavlen!')}}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  >
                    Kopier E-post
                    <Copy className="w-5 h-5" />
                  </button>
                  <a 
                    href="tel:+4748381121"
                    className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                  >
                    Ring meg
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Send meg en melding
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Navn</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-post</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="din.epost@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Emne</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Hva handler dette om?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Melding</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full bg-gray-700/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Skriv din melding her..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                >
                  Send melding
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  )
}
