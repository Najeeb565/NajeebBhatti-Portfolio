import React from 'react';
import { motion } from 'framer-motion';

export function ProgressBar({ now, children, style }) {
  return (
    <div 
      className="progress" 
      style={{
        height: '8px',
        borderRadius: '4px',
        overflow: 'hidden',
        ...style
      }}
    >
      {children}
    </div>
  );
}