'use client';
import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Configuration
    const particleCount = 50;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 3 and 8px
      const size = Math.random() * 5 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      // Random animation duration between 15 and 30s
      const duration = Math.random() * 15 + 15;
      particle.style.animation = `floatParticle ${duration}s infinite alternate ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Random color (blue or purple tint)
      const isBlue = Math.random() > 0.5;
      particle.style.backgroundColor = isBlue 
        ? `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})` 
        : `rgba(168, 85, 247, ${Math.random() * 0.3 + 0.1})`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        
        const distX = mouseX - particleX;
        const distY = mouseY - particleY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 100) {
          const angle = Math.atan2(distY, distX);
          const force = (100 - distance) / 10;
          const moveX = Math.cos(angle) * force;
          const moveY = Math.sin(angle) * force;
          
          particle.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        } else {
          particle.style.transform = '';
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return <div ref={containerRef} className="particles-container"></div>;
};

export default ParticlesBackground;