import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f5f5f7]/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-bold text-black px-3 py-1 bg-black text-white rounded-md">
            IBSTROMSVAG
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="bg-[#e5e5e7] rounded-full px-2 py-1 flex items-center">
              {[
                { key: 'home', label: 'Home' },
                { key: 'projects', label: 'Projects' },
                { key: 'cv', label: 'CV' },
                { key: 'socials', label: 'Socials' },
                { key: 'about', label: 'About' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSectionClick(item.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeSection === item.key 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => handleSectionClick('settings')}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Settings
            </button>
            <button 
              onClick={() => handleSectionClick('contact')}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {[
              { key: 'home', label: 'Home' },
              { key: 'projects', label: 'Projects' },
              { key: 'cv', label: 'CV' },
              { key: 'socials', label: 'Socials' },
              { key: 'about', label: 'About' },
              { key: 'settings', label: 'Settings' },
              { key: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => handleSectionClick(item.key)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  activeSection === item.key 
                    ? 'bg-gray-100 text-black' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;