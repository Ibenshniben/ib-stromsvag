import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#f5f5f7] py-6 mt-auto border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Ib Strømsvåg. Alle rettigheter reservert.
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/ibstromsvag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#6366f1] transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/ib-strømsvåg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#6366f1] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://instagram.com/ibstromsvag" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#6366f1] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="mailto:ibjulian9@gmail.com" 
              className="text-gray-600 hover:text-[#6366f1] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;