'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
  activeSection: string
}

export default function PageTransition({ children, activeSection }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prevSectionRef = useRef<string>(activeSection)
  
  useEffect(() => {
    if (prevSectionRef.current !== activeSection) {
      // Only animate if section has changed
      const container = containerRef.current
      
      if (container) {
        // Fade out and slide up
        gsap.to(container, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            // Fade in and slide down
            gsap.fromTo(container, 
              { opacity: 0, y: 20 },
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: 'power2.out',
                delay: 0.1
              }
            )
          }
        })
      }
      
      prevSectionRef.current = activeSection
    }
  }, [activeSection])
  
  return (
    <div ref={containerRef} className="w-full transition-all">
      {children}
    </div>
  )
}