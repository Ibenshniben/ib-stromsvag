'use client';
import { useRef, useState, useEffect } from 'react';

const TiltCard = ({ children, className = '', maxTilt = 15 }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 });
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // Add a small delay before enabling tilt animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationReady(true);
    }, 800); // Wait for scroll animations to complete
    
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isAnimationReady) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage position
    const percentX = x / rect.width;
    const percentY = y / rect.height;
    
    // Calculate tilt angle - reduced for subtlety
    const tiltX = (percentY - 0.5) * maxTilt * -0.7;
    const tiltY = (percentX - 0.5) * maxTilt * 0.7;
    
    // Update transform with a more subtle effect
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`);
    
    // Update shine position
    setShinePosition({ x: percentX * 100, y: percentY * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div 
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{ 
        transform,
        transition: 'transform 0.2s ease-out'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilt-card-content">
        {children}
      </div>
      <div 
        className="tilt-card-shine" 
        style={{ 
          background: `radial-gradient(circle at ${shinePosition.x}% ${shinePosition.y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)` 
        }}
      />
    </div>
  );
};

export default TiltCard;