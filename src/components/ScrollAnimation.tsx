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
        filter: 'blur(5px)', // Reduced blur amount
        y: 20 // Reduced y offset
      })
      
      // Create animation
      gsap.to(element, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 0.6, // Faster duration
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%', // Trigger earlier
          toggleActions: 'play none none none'
        }
      })
    }
    
    // Cleanup
    return () => {
      if (ScrollTrigger.getAll().length > 0) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}