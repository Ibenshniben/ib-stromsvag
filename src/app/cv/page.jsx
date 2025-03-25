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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Om meg */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Om meg
                  </h2>
                  <p className="text-gray-300">
                    Jeg er en nysgjerrig person som liker å utforske nye teknologier, teknologier og språk. Jeg er interessert i alt av teknologi og visuelt, og vil alltid lære meg nytt.
                  </p>
                </TiltCard>
                
                {/* Språk */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    Språk
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Norsk: muntlig og skriftlig
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Engelsk: Muntlig og skriftlig
                    </li>
                  </ul>
                </TiltCard>
                
                {/* Personlige kvalifikasjoner */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Personlige kvalifikasjoner
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Lærevillig
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Selvstendig
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Ambisiøs
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Nysgjerrig
                    </li>
                  </ul>
                </TiltCard>
                
                {/* Kontakt & SoMe */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Kontakt & SoMe
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      +47 483 81 121
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      ibullman@gmail.com
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Ensjøvn 7B, 4637, Kristiansand
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      /in/ib-stromsvag
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      ibstromsvag.com
                    </li>
                  </ul>
                </TiltCard>
              </div>
              
              {/* Middle Column */}
              <div className="space-y-6 md:col-span-2">
                {/* Programmeringskunnskaper */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Programmeringskunnskaper
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Next.js
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Tailwind CSS
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      JavaScript
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Prisma
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      CSS/SCSS
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Git
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      React.js
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Node.js
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      TypeScript
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      HTML
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Figma
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Illustrator
                    </div>
                  </div>
                </TiltCard>
                
                {/* Utdanning */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    Utdanning
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2024-2025 - Tangen VGS Informasjonsteknologi VG2</h3>
                      </div>
                      <p className="text-gray-300">Fordypning i programmering og medieproduksjon</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2023-2024 - Tangen VGS Informasjonsteknologi og medieproduksjon VG1</h3>
                      </div>
                      <p className="text-gray-300">Grunnleggende IT-fag og medieproduksjon</p>
                    </div>
                  </div>
                </TiltCard>
                
                {/* Programfag */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Programfag
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Teknologiforståelse
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Produksjon og historiefortelling
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Konseptutvikling og programmering
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Brukergrensesnitt
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Driftsstøtte
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Utvikling
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Ytterligere fordypning
                    </li>
                  </ul>
                </TiltCard>
                
                {/* Yrkeserfaring */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Yrkeserfaring
                  </h2>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2024 - Vigo - vaktmester assistent (juni - August)</h3>
                      </div>
                      <p className="text-gray-300">Assisterte med vedlikehold og praktiske oppgaver</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2023 - Arendal Grimstad Rideklubb fore-assistent (rideleirer)</h3>
                      </div>
                      <p className="text-gray-300">Assisterer med foring og stell av hester</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2022 - Volvo - Utplassering mekaniker (2 dager i November)</h3>
                      </div>
                      <p className="text-gray-300">Praktisk erfaring med bilmekanikk og service</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">2023 - IKT-Agder - Utplassering driftshjelp (uke 5 - 7)</h3>
                      </div>
                      <p className="text-gray-300">Erfaring med IT-support og systemdrift</p>
                    </div>
                  </div>
                </TiltCard>
                
                {/* Referanser */}
                <TiltCard className="glass-card p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Referanser
                  </h2>
                  <p className="text-gray-300">Oppgis ved forespørsel</p>
                </TiltCard>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/cv.pdf" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md transition duration-300 hover:from-blue-600 hover:to-purple-700 inline-flex items-center"
                download
              >
                <span>Last ned CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>