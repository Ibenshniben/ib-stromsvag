import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '', 
  colSpan = 1, 
  rowSpan = 1 
}) => {
  const colSpanClasses = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4'
  };
  
  const rowSpanClasses = {
    1: 'md:row-span-1',
    2: 'md:row-span-2'
  };
  
  return (
    <div className={`${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}`}>
      {children}
    </div>
  );
};

export default BentoGrid;