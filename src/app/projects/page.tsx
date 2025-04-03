'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ExternalLink, 
  Github, 
  Code,
  Search,
  Filter
} from 'lucide-react'
import TiltCard from '@/components/TiltCard'
import Footer from '@/components/Footer'

// Project type definition
type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  featured?: boolean
}

export default function Projects() {
  const pageRef = useRef(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Sample project data
  const projects: Project[] = [
    {
      title: "Vikings Nettside",
      description: "Min første nettside, laget med HTML og CSS om Netflix-serien Vikings.",
      image: "/images/vikings-nettside.png",
      tags: ["HTML", "CSS"],
      link: "https://vikings-nettside.vercel.app",
      featured: true
    },
    {
      title: "Squash Klubb",
      description: "En fullstendig nettside for en squashklubb med booking-system og medlemshåndtering.",
      image: "/images/squash-nettside.png",
      tags: ["Next.js", "Prisma", "SQL", "Railway"],
      link: "https://squash-nettside.vercel.app/",
      github: "https://github.com/ibstromsvag/squash-club"
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
      link: "https://ai-prosjekt999.vercel.app",
      featured: true
    },
    {
      title: "Portfolio Nettside",
      description: "Min personlige portfolio nettside bygget med Next.js og Tailwind CSS.",
      image: "/images/portfolio-nettside.png",
      tags: ["Next.js", "Tailwind CSS", "GSAP"],
      link: "https://ibstromsvag.com",
      github: "https://github.com/ibstromsvag/portfolio"
    },
    {
      title: "Weather App",
      description: "En værapplikasjon som viser værdata fra forskjellige steder ved hjelp av en offentlig API.",
      image: "/images/weather-app.png",
      tags: ["React", "API", "CSS"],
      link: "https://weather-app-demo.vercel.app",
      github: "https://github.com/ibstromsvag/weather-app"
    }
  ]
  
  // Animation setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.projects-header', { 
        y: -30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
      })
      
      // Staggered animation for project cards
      gsap.from('.project-card', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top bottom-=100',
        }
      })
    }, pageRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Filter projects based on search term and active filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    if (activeFilter === 'all') return matchesSearch
    if (activeFilter === 'featured') return matchesSearch && project.featured
    return matchesSearch && project.tags.includes(activeFilter)
  })

  // Get unique tags for filter
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)))

  return (
    <main ref={pageRef} className="min-h-screen bg-[#0a192f] text-white relative pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Projects Header */}
        <div className="projects-header mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Mine Prosjekter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            En samling av prosjekter jeg har jobbet med
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Søk etter prosjekter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <div className="flex items-center gap-1 text-gray-400 mr-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm">Filter:</span>
            </div>
            
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                activeFilter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Alle
            </button>
            
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                activeFilter === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Fremhevede
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  activeFilter === tag 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project-card">
                <TiltCard>
                  <div className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-70"></div>
                      
                      {/* Project Links */}
                      <div className="absolute top-2 right-2 flex gap-2">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                        
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                            title="GitHub Repository"
                          >
                            <Github className="h-4 w-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
                      
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Ingen prosjekter funnet</h3>
            <p className="text-gray-300">
              Prøv å justere søket eller filteret ditt for å finne prosjekter.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  )
}