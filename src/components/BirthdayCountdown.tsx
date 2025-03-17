'use client'
import { useState, useEffect } from 'react'

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const birthday = new Date('2025-03-31') // Updated to March 31, 2025
    
    const timer = setInterval(() => {
      const now = new Date()
      const difference = birthday.getTime() - now.getTime()
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 inline-block">
      <p className="text-gray-400 mb-3">Tid til jeg blir 18 år:</p>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-2xl font-bold text-blue-400">{timeLeft.days}</span>
          <p className="text-sm text-gray-400">Dager</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-blue-400">{timeLeft.hours}</span>
          <p className="text-sm text-gray-400">Timer</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-blue-400">{timeLeft.minutes}</span>
          <p className="text-sm text-gray-400">Minutter</p>
        </div>
        <div>
          <span className="text-2xl font-bold text-blue-400">{timeLeft.seconds}</span>
          <p className="text-sm text-gray-400">Sekunder</p>
        </div>
      </div>
    </div>
  )
}