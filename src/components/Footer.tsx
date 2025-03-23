import Image from 'next/image'
import Link from 'next/link'
import { Mail, Linkedin, Globe, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0a192f]/80 backdrop-blur-md border-t border-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/ib-logo-hvit.png" 
                alt="IB Logo" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="text-xl font-bold">Ib Strømsvåg</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Webutvikler og designentusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="mailto:ibjulian9@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/ibstromsvag" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://ibstromsvag.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Ib Strømsvåg. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}