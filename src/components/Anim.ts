import { Variants } from 'framer-motion';

// Basic fade animation
export const opacity: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

// Slide animations
export const slideUp: Variants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: '0%', opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

// Preloader animations
export const PreloaderSlideUp: Variants = {
  initial: { y: 0 },
  exit: {
    y: '-100vh',
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const PreloaderFade: Variants = {
  initial: { opacity: 1 },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.5, ease: 'easeInOut' } 
  },
};

// Text animation for preloader
export const textVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.05
    } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.4,
      ease: 'easeIn'
    } 
  }
};

// Letter animation
export const letterVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.2 }
  }
};
