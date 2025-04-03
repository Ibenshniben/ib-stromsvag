'use client';

import { useState } from 'react';
import { useAccessibility } from './AccessibilityProvider';
import { Accessibility, ZoomIn, ZoomOut, RotateCcw, Sun } from 'lucide-react';

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    highContrast, 
    toggleHighContrast, 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize 
  } = useAccessibility();

  return (
    <>
      <button 
        className="accessibility-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility options"
      >
        <Accessibility size={24} />
      </button>

      {isOpen && (
        <div className="accessibility-panel">
          <h3 className="text-white font-bold mb-2">Accessibility Options</h3>
          
          <div className="flex flex-col gap-2">
            <button 
              onClick={toggleHighContrast}
              className={highContrast ? 'bg-blue-600' : ''}
              aria-pressed={highContrast}
            >
              <Sun size={16} className="inline mr-2" />
              {highContrast ? 'Disable' : 'Enable'} High Contrast
            </button>
            
            <div className="flex justify-between">
              <button onClick={decreaseFontSize} aria-label="Decrease font size">
                <ZoomOut size={16} className="inline mr-1" />
                A-
              </button>
              
              <button onClick={resetFontSize} aria-label="Reset font size">
                <RotateCcw size={16} className="inline mr-1" />
                Reset
              </button>
              
              <button onClick={increaseFontSize} aria-label="Increase font size">
                <ZoomIn size={16} className="inline mr-1" />
                A+
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}