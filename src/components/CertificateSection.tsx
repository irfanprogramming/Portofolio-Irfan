'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const certificates = [
  {
    id: 1,
    title: 'Dicoding Certification',
    issuer: 'Dicoding',
    image: '/Sertifikat Dicoding.jpg',
  },
  {
    id: 2,
    title: 'Myskill Certification',
    issuer: 'Myskill',
    image: '/Sertif power pivot 3_page-0001.jpg',
  },
  {
    id: 3,
    title: 'Myskill Certification',
    issuer: 'Myskill',
    image: '/Sertif sql irfan_page-0001.jpg',
  },
  {
    id: 4,
    title: 'Program Analyst',
    issuer: 'BNSP',
    image: '/Sertifikat BNSP.jpg',
  },
  {
    id: 5,
    title: 'MTCNA',
    issuer: 'Mikrotik',
    image: '/Sertif Mikrotik.jpg',
  },
  {
    id: 6,
    title: 'Bootcamp Digital Bisnis',
    issuer: 'Universitas Nusa Mandiri',
    image: '/Sertif bootcamp digital bisnis.jpg',
  },
];

export default function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const openModal = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCertificate) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case '+':
        case '=':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
        case '0':
          e.preventDefault();
          resetZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate]);

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sertifikat
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(certificate)}
            >
              {/* Certificate Image */}
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {certificate.title}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-medium">
                    {certificate.issuer}
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Lihat Sertifikat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal untuk menampilkan sertifikat */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCertificate.title}
                </h3>

                {/* Zoom Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={zoomOut}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    title="Zoom Out"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>

                  <span className="text-sm font-medium min-w-[60px] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>

                  <button
                    onClick={zoomIn}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    title="Zoom In"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>

                  <button
                    onClick={resetZoom}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    title="Reset Zoom"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>

                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    title="Close"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Certificate Image Container */}
                <div
                  className="w-full h-96 relative rounded-lg overflow-hidden bg-gray-100 cursor-move"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onWheel={handleWheel}
                  style={{ userSelect: 'none' }}
                >
                  <div
                    style={{
                      transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                      transformOrigin: 'center center',
                      transition: isDragging ? 'none' : 'transform 0.2s ease-in-out',
                    }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 1000px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
