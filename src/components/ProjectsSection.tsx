'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Supermarket Sales Performance',
    description:
      'Project ini saya buat untuk menganalisis data penjualan supermarket secara lebih mudah dan interaktif, dengan visualisasi data yang menarik seperti : penjualan & profit, tren penjualan per bulan, segmentasi pelanggan, dan metode pembayaran favorit. jadi insight yang dihasilkan membantu memahami perilaku pelanggan dan memperkirakan pendapatan untuk strategi penjualan yang lebih tepat ',
    screenshots: [
      '/Supermarket 1.JPG',
      '/Supermarket 2.JPG',
      '/Supermarket 3.JPG',
      '/Supermarket 4.JPG',
    ],
    Tools: ['Excel'],
    category: 'Data Analyst',
  },
  {
    id: 2,
    title: 'Analyst Perfomance Cv.Bona Mandiri',
    description:
      'Analyst penjualan dan pembelian pada Cv.Bona Mandiri, seperti : memantau tren, omset, pembelian, laba, dan margin, serta menganalisis peringkat hotel/restoran, vendor, dan produk berdasarkan transaksi, kuantitas, dan nilai  ',
    screenshots: [
      '/Bona-1.png',
      '/Bona-2.png',
      '/Bona-3.png',
      '/Bona-4.png',
      '/Bona-5.png',
      '/Bona-6.png',
    ],
    Tools: ['Excel'],
    category: 'Data Analyst',
  },

  {
    id: 3,
    title: 'Mysql Analyst Spotify',
    description:
      'Project ini berfokus untuk menganalisa database spotify menggunakan MySql untuk mengeksplorasi informasi seputar musik, artis, genre, query sql yang saya buat dapat menganalisa seperti : total musik, musik dengan popularitas tertinggi, menampilkan musik dari artis yang memiliki lebih dari 3 musik, dll. menghasilkan insight yang dapat dimanfaatkan untuk memahami tren musik secara lebih mendalam .',
    screenshots: [
      '/mysql 0.JPG',
      '/mysql 1.JPG',
      '/mysql 2.JPG',
      '/mysql 3.JPG',
      '/mysql 4.JPG',
      '/mysql 5.JPG',
      '/mysql 6.JPG',
      '/mysql 7.JPG',
      '/mysql 8.JPG',
      '/mysql 9.JPG',
      '/mysql 10.JPG',
    ],
    Tools: ['Mysql'],
    category: 'Data Analyst',
  },

  {
    id: 4,
    title: 'Mysql Analyst Penjualan Supermarket',
    description:
      'Project ini saya buat bertujuan untuk menganalisis database penjualan supermarket menggunakan MySql, Untuk melihat total penjualan, produk terlaris setiap cabang, tren penjualan bulanan tertinggi di seluruh cabang, Hasil analisis ini memberikan insight yang berguna dalam mendukung keputusan bisnis ',
    screenshots: [
      '/Penjualan Supermarket 1.JPG',
      '/Penjualan Supermarket 2.JPG',
      '/Penjualan Supermarket 3.JPG',
      '/Penjualan Supermarket 4.JPG',
      '/Penjualan Supermarket 5.JPG',
      '/Penjualan Supermarket 6.JPG',
      '/Penjualan Supermarket 7.JPG',
      '/Penjualan Supermarket 8.JPG',
      '/Penjualan Supermarket 9.JPG',
      '/Penjualan Supermarket 10.JPG',
    ],
    Tools: ['Mysql'],
    category: 'Data Analyst',
  },

  {
    id: 5,
    title: 'Power Bi Analyst Spotify',
    description:
      'Project ini membuat dashboard dan menganalisis database spotify yang saya koneksikan dari Mysql menggunakan Power Bi, Untuk memberikan insight terkait musik, artis, dan genre, Dashboard interaktif ini menampilkan seperti average popularity, explicit content, total musik, top artis & lagu populer, kategori & genre insight, dan duplicate musik, Project ini membantu memahami tren musik secara lebih mudah dan cepat',
    screenshots: ['/Spotify 1.JPG', '/Spotify 2.JPG', '/Spotify 3.JPG'],
    Tools: ['Power Bi'],
    category: 'Data Analyst',
  },
  {
    id: 6,
    title: 'Power Bi Analyst Supermarket Sales',
    description:
      'Project ini saya buat bertujuan untuk menganalisis database penjualan supermarket yang saya koneksikan dari Mysql menggunakan Power Bi, Untuk memberikan insight terkait penjualan, produk, dan kategori, Dashboard interaktif ini menampilkan seperti total penjualan, produk terlaris, tren penjualan bulanan, dan analisis perbandingan antar cabang, Project ini membantu memahami kinerja penjualan supermarket secara lebih mudah dan cepat.',
    screenshots: [
      '/Supermarket Power Bi 1.JPG',
      '/Supermarket Power Bi 2.JPG',
      '/Supermarket Power Bi 3.JPG',
    ],
    Tools: ['Power Bi'],
    category: 'Data Analyst',
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) =>
      prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  };

  const selectProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentScreenshot(0);
  };

  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset error when slide or project changes
  useEffect(() => {
    setImageError(false);
  }, [selectedProject, currentScreenshot]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Zoom functions
  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };
  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  };
  const resetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Pan functions
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
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
  const nextModal = useCallback(() => {
    setModalIndex((prev) =>
      prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);
  const prevModal = useCallback(() => {
    setModalIndex((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Close modal and navigate with keyboard
  useEffect(() => {
    if (!isModalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === 'ArrowLeft') prevModal();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-') zoomOut();
      if (e.key === '0') resetZoom();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isModalOpen, nextModal, prevModal]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Project Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => selectProject(project)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedProject.id === project.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Main Project Display */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot Slider */}
            <div className="relative group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div
                  className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 cursor-zoom-in"
                  onClick={() => openModal(currentScreenshot)}
                  title="Klik untuk perbesar"
                >
                  {!imageError &&
                    selectedProject.screenshots[currentScreenshot] && (
                      <Image
                        src={selectedProject.screenshots[currentScreenshot]!}
                        alt={`${selectedProject.title} screenshot ${
                          currentScreenshot + 1
                        }`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        onError={() => setImageError(true)}
                        priority
                      />
                    )}
                  {(imageError ||
                    !selectedProject.screenshots[currentScreenshot]) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-gray-600 px-4">
                        <div className="text-6xl mb-4">📊</div>
                        <p className="text-sm font-medium mb-1">
                          Image not found
                        </p>
                        <p className="text-xs break-all">
                          {selectedProject.screenshots[currentScreenshot]}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Fallback overlay text */}
                  {!imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-center text-white drop-shadow">
                        <p className="text-sm font-semibold">
                          Screenshot {currentScreenshot + 1}
                        </p>
                        <p className="text-xs">{selectedProject.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevScreenshot}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextScreenshot}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Screenshot Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {selectedProject.screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentScreenshot(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentScreenshot === index
                        ? 'bg-blue-600'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.Tools.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => selectProject(project)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedProject.id === project.id
                    ? 'ring-2 ring-blue-500'
                    : ''
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                  {project.screenshots[0] ? (
                    <Image
                      src={project.screenshots[0]}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.parentElement?.querySelector('.fallback-content') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback jika gambar tidak ada atau error */}
                  <div 
                    className="fallback-content absolute inset-0 flex items-center justify-center"
                    style={{ display: project.screenshots[0] ? 'none' : 'flex' }}
                  >
                    <div className="text-center text-gray-600">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-sm font-medium">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.Tools.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.Tools.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.Tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-light"
            aria-label="Tutup"
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl">
            <div
              className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-grab"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{
                cursor:
                  zoomLevel > 1
                    ? isDragging
                      ? 'grabbing'
                      : 'grab'
                    : 'default',
              }}
            >
              <div
                style={{
                  transform: `scale(${zoomLevel}) translate(${
                    panOffset.x / zoomLevel
                  }px, ${panOffset.y / zoomLevel}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                  transformOrigin: 'center center',
                }}
                className="w-full h-full"
              >
                <Image
                  src={selectedProject.screenshots[modalIndex]!}
                  alt={`${selectedProject.title} full screenshot ${
                    modalIndex + 1
                  }`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              <button
                onClick={zoomIn}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Zoom In"
                disabled={zoomLevel >= 3}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              <button
                onClick={zoomOut}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Zoom Out"
                disabled={zoomLevel <= 0.5}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <button
                onClick={resetZoom}
                className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center justify-center transition-colors text-xs"
                aria-label="Reset Zoom"
              >
                1:1
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute top-4 right-16 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>
            {/* Caption & controls */}
            <div className="flex items-center justify-between mt-4 text-white text-sm">
              <div>
                <div className="font-medium">
                  {selectedProject.title} — Screenshot {modalIndex + 1} /{' '}
                  {selectedProject.screenshots.length}
                </div>
                <div className="text-xs text-white/70 mt-1">
                  Scroll untuk zoom • Drag untuk geser • ESC untuk tutup • +/-
                  untuk zoom • 0 untuk reset
                </div>
              </div>
              <div className="space-x-2">
                <button
                  onClick={prevModal}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  aria-label="Sebelumnya"
                >
                  Prev
                </button>
                <button
                  onClick={nextModal}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition"
                  aria-label="Berikutnya"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
