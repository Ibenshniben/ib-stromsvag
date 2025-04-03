'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Mail, 
  Phone, 
  Send, 
  MapPin, 
  Linkedin, 
  Github,
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import TiltCard from '@/components/TiltCard'
import Footer from '@/components/Footer'

export default function Contact() {
  const pageRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null)
  
  // Animation setup
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.contact-header', { 
        y: -30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out',
      })
      
      // Staggered animation for contact sections
      gsap.from('.contact-section', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-container',
          start: 'top bottom-=100',
        }
      })
    }, pageRef)
    
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend or email service
    // For now, we'll just simulate a successful submission
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success')
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }, 1000)
  }

  return (
    <main ref={pageRef} className="min-h-screen bg-[#0a192f] text-white relative pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="contact-header mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Ta Kontakt
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Har du et prosjekt i tankene eller ønsker å samarbeide? Send meg en melding!
          </p>
        </div>
        
        <div className="contact-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="space-y-6">
                <section className="contact-section">
                  <TiltCard>
                    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                      <h2 className="text-xl font-bold text-white mb-4">Kontaktinformasjon</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                            <Mail className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">E-post</div>
                            <a href="mailto:ibjulian9@gmail.com" className="font-medium text-white hover:text-blue-400 transition-colors">
                              ibjulian9@gmail.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                            <Phone className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Telefon</div>
                            <a href="tel:+4748381121" className="font-medium text-white hover:text-blue-400 transition-colors">
                              +47 483 81 121
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                            <MapPin className="h-5 w-5 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">Lokasjon</div>
                            <div className="font-medium text-white">
                              Kristiansand, Norge
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </section>
                
                <section className="contact-section">
                  <TiltCard>
                    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                      <h2 className="text-xl font-bold text-white mb-4">Sosiale Medier</h2>
                      
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href="https://github.com/ibstromsvag" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Github className="h-5 w-5" />
                          <span>GitHub</span>
                        </a>
                        
                        <a 
                          href="https://linkedin.com/in/ib-strømsvåg" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span>LinkedIn</span>
                        </a>
                        
                        <a 
                          href="https://instagram.com/ibstromsvag" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <Instagram className="h-5 w-5" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </section>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2 contact-section">
              <TiltCard>
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                  <h2 className="text-xl font-bold text-white mb-6">Send meg en melding</h2>
                  
                  {formStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <p className="text-green-300">Takk for din henvendelse! Jeg vil svare deg så snart som mulig.</p>
                    </div>
                  )}
                  
                  {formStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                      <p className="text-red-300">Beklager, noe gikk galt. Vennligst prøv igjen senere.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Navn</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Ditt navn"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-post</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="din.epost@eksempel.no"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Emne</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Hva handler henvendelsen om?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Melding</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Skriv din melding her..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                      >
                        Send melding
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </TiltCard>
            </div>
          </div>
          
          {/* Map Section */}
          <section className="mt-12 contact-section">
            <TiltCard>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                <h2 className="text-xl font-bold text-white mb-4">Finn meg her</h2>
                <div className="rounded-lg overflow-hidden h-[300px] w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.5110187307396!2d7.9835184!3d58.1253333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4638047a1f344cfb%3A0x1e3a83a28e011595!2sKristiansand%2C%20Norway!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </TiltCard>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}