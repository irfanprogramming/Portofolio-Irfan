'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CurveProps {
  className?: string;
}

export default function Curve({ className = '' }: CurveProps): React.JSX.Element {
  // Simple curve animation
  const curveVariants: Variants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut'
      }
    },
    exit: {
      pathLength: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,0 Q50,50 100,0 L100,100 L0,100 Z"
        fill="rgba(59, 130, 246, 0.1)"
        stroke="none"
        variants={curveVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </svg>
  );
}
