'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const texts = ['Data Analyst', 'Business Analyst', 'Project Management'];

    const typeEffect = () => {
      const currentFullText = texts[currentIndex];

      if (currentText.length < currentFullText.length) {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeEffect, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <Image
              src="/Foto Irfan 2.jpg"
              alt="Muhamad Irfan"
              width={128}
              height={128}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">
              Muhamad Irfan
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-600 mb-8">
            <span> </span>
            <span className="text-black font-bold min-h-[1.2em] inline-block">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Mengubah data menjadi insight strategis yang mendorong keputusan
            bisnis lebih cerdas, berkelanjutan, dan mengelola proyek
            end-to-end
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
          >
            Contact
          </button>
        </div>

        {/* Tanda Panah ke Bawah */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 bg-gray dark:bg-black-800 rounded-full shadow-lg animate-bounce"
            aria-label="Scroll to about section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
