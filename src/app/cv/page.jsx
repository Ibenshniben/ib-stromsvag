'use client';
import { useState } from 'react';
import Link from 'next/link';
import ParticlesBackground from '@/components/ParticlesBackground';
import TiltCard from '@/components/TiltCard';
import Header from '@/components/Header';

export default function CV() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      
      <main className="min-h-screen relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Ib Trollnes Strømsvåg</h1>
              <p className="text-xl text-blue-400">Full-Stack Developer</p>
            </div>
            
            {/* Check for any unclosed divs or sections here */}
            {/* Make sure all opening tags have corresponding closing tags */}
            
            {/* Add a proper closing tag for the component */}
          </div>
        </div>
      </main>
    </>
  );
}