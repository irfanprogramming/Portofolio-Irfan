'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PreloaderSlideUp } from './Anim';

interface PreloaderProps {
  onComplete?: () => void;
}

// 3 kalimat yang akan ditampilkan
const sentences: string[] = ['Fokus', 'Produktif', 'Berkualitas'];

export default function Preloader({
  onComplete,
}: PreloaderProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (currentIndex < sentences.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000); // 1 detik per kalimat
      return () => clearTimeout(timer);
    } else {
      // Setelah kalimat terakhir, tunggu sebentar lalu complete
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, 1200);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, onComplete]);

  if (isComplete) return <></>;

  // Variants untuk animasi text
  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  // Variants untuk letter animation
  const letterVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={PreloaderSlideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      {/* Main Content */}
      <div className="text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex justify-center items-center"
          >
            <div className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide">
              {sentences[currentIndex].split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Subtle indicator dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {sentences.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
