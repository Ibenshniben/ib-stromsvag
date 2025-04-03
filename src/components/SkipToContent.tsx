'use client';

import { useState } from 'react';

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md
        transform transition-transform duration-200
        ${isFocused ? 'translate-y-0' : '-translate-y-20'}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to content
    </a>
  );
}