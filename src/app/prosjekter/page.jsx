'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParticlesBackground from '@/components/ParticlesBackground';
import TiltCard from '@/components/TiltCard';
import Header from '@/components/Header';

export default function Prosjekter() {
  // Project data based on your image
  const projects = [
    {
      id: 1,
      title: 'Vikings Nettsida',
      description: 'Nettside om fotball, laget med HTML, CSS og JavaScript, designet for Vikings.',
      image: '/images/vikings-project.jpg',
      tags: ['HTML', 'CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'T-Skjorter Nettbutikk',
      description: 'En nettbutikk for t-skjorter, bygget med React, Node.js og MongoDB.',
      image: '/images/tshirt-project.jpg',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Prosjekt - GenAI Labs',
      description: 'Et AI-prosjekt i samarbeid med GenAI Labs, fokusert på maskinlæring og chatbots.',
      image: '/images/ai-project.jpg',
      tags: ['React', 'Python', 'AI'],
      link: '#'
    }
  ];

  return (
    <>
      <ParticlesBackground />
      <Header />
      
      <main className="min-h-screen relative z-10 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Mine Prosjekter</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {projects.map((project) => (
                <TiltCard key={project.id} className="glass-card overflow-hidden">
                  <div className="relative h-48 w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-purple-900 flex items-center justify-center">
                      {project.image ? (
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <div className="text-3xl font-bold">{project.title.charAt(0)}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} 
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md transition duration-300 hover:from-blue-600 hover:to-purple-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Se prosjektet
                    </a>
                  </div>
                </TiltCard>
              ))}
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Har du et prosjekt i tankene?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Jeg er alltid på utkikk etter nye og spennende prosjekter. Hvis du har en idé eller et prosjekt du ønsker å diskutere, ta gjerne kontakt!
              </p>
              <Link 
                href="/kontakt" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md transition duration-300 hover:from-blue-600 hover:to-purple-700 inline-flex items-center"
              >
                <span>Kontakt meg</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}