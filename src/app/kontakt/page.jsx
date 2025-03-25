'use client';
import { useState } from 'react';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';
import TiltCard from '@/components/TiltCard';
import Header from '@/components/Header';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the form data to your backend
    // For now, let's simulate a successful submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  return (
    <>
      <ParticlesBackground />
      <Header />
      
      <main className="min-h-screen relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text">
              Kontakt Meg
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <TiltCard>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Send meg en melding</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-1">Navn</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-1">E-post</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-1">Melding</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all w-full"
                    >
                      {isSubmitting ? 'Sender...' : 'Send melding'}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-lg">
                        Takk for din melding! Jeg vil svare så snart som mulig.
                      </div>
                    )}
                  </form>
                </div>
              </TiltCard>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <TiltCard>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Kontaktinformasjon</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                          <h3 className="font-medium text-white">E-post</h3>
                          <p className="text-gray-300">ibjulian9@gmail.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                          <h3 className="font-medium text-white">Telefon</h3>
                          <p className="text-gray-300">+47 483 81 121</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                        <div>
                          <h3 className="font-medium text-white">Adresse</h3>
                          <p className="text-gray-300">Eigstien 78B, 4637 Kristiansand</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
                
                <TiltCard>
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">Sosiale medier</h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href="https://linkedin.com/in/ib-stromsvåg" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </a>
                      
                      <a 
                        href="https://github.com/Ibenshniben" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </a>
                      
                      <a 
                        href="https://ibstromsvag.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                        <span>Website</span>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}