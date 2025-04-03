import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-md font-bold text-sm inline-block">
              IB STRØMSVÅG
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              © {new Date().getFullYear()} Ib Strømsvåg. Alle rettigheter reservert.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-3 mb-3">
              <a href="https://github.com/ibstromsvag" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/ib-strømsvåg" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:ibjulian9@gmail.com" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <nav className="flex gap-4 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Hjem
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Prosjekter
              </Link>
              <Link href="/cv" className="text-gray-400 hover:text-white transition-colors">
                CV
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}