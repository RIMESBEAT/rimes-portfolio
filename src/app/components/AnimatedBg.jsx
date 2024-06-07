// src/AnimatedBackground.js
import React from 'react';

const shapes = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  size: Math.random() * 10 + 5,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 5,
}));

const AnimatedBackground = ({ children }) => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {shapes.map((shape) => (
        <svg
          key={shape.id}
          className='absolute opacity-50 animate-ping'
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
          }}
          viewBox='0 0 24 24'
          fill='none'
          stroke='#EAF205'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <polygon points='12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9' />
        </svg>
      ))}
      <div className='relative z-10 flex items-center justify-center h-full'>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
