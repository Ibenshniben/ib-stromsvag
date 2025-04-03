'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-4 transition-all duration-300 ${
      scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm">
          IB STRØMSVÅG
        </Link>
        
        {/* Desktop Navigation */}
        <div className="bg-[#172a46] rounded-full px-2 py-1 hidden md:flex">
          <Link href="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === '/' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link href="/projects"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === '/projects' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'
            }`}
          >
            Projects
          </Link>
          <Link href="/cv"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === '/cv' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'
            }`}
          >
            CV
          </Link>
          <Link href="/contact"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === '/contact' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </div>
        
        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <Link 
            href="/contact"
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-gray-800 p-2 rounded-lg"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a192f] border-t border-gray-800 mt-4 py-4">
          <div className="flex flex-col space-y-2 px-4">
            <Link href="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/projects"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/projects' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link href="/cv"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/cv' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </Link>
            <Link href="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/contact' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}