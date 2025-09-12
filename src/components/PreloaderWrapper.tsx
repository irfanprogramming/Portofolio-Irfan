'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preloader akan berjalan minimal 2.5 detik
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handlePreloaderComplete = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>
      
      <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
}
