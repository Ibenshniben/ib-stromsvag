'use client';
import { useState, useEffect } from 'react';

const TypingText = ({ texts, typingSpeed = 100, pauseTime = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (currentIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + currentText.charAt(currentIndex));
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex(0);
          setDisplayText('');
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isTyping, texts, typingSpeed, pauseTime]);

  return <div className="typing-text">{displayText}</div>;
};

export default TypingText;