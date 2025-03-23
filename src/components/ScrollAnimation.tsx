'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function ScrollAnimation({ children, delay = 0, className = '' }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    const element = elementRef.current
    
    if (element) {
      // Set initial state - blurred and transparent
      gsap.set(element, { 
        opacity: 0,
        filter: 'blur(10px)',
        y: 30
      })
      
      // Create animation
      gsap.to(element, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%', // when the top of the element hits 85% from the top of viewport
          toggleActions: 'play none none none'
        }
      })
    }
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}