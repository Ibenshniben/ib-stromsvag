'use client'

import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set birthday to March 31, 2025 (month is 0-indexed, so 2 is March)
      const birthday = new Date(2025, 2, 31)
      
      const difference = birthday.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-500/20 shadow-lg">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
        <h3 className="text-base sm:text-lg font-medium text-blue-300">Nedtelling til 18-årsdagen</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
        <div className="bg-gray-800/60 rounded-lg p-1 sm:p-2">
          <div className="text-xl sm:text-2xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-[10px] sm:text-xs text-gray-400">Dager</div>
        </div>
        
        <div className="bg-gray-800/60 rounded-lg p-1 sm:p-2">
          <div className="text-xl sm:text-2xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-[10px] sm:text-xs text-gray-400">Timer</div>
        </div>
        
        <div className="bg-gray-800/60 rounded-lg p-1 sm:p-2">
          <div className="text-xl sm:text-2xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-[10px] sm:text-xs text-gray-400">Min</div>
        </div>
        
        <div className="bg-gray-800/60 rounded-lg p-1 sm:p-2">
          <div className="text-xl sm:text-2xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-[10px] sm:text-xs text-gray-400">Sek</div>
        </div>
      </div>
      
      <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-center text-gray-400 flex items-center justify-center gap-1">
        <Gift className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
        <span>31. Mars 2025 - Jeg blir 18 år!</span>
      </div>
    </div>
  )
}