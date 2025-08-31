'use client';

import { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    id: 1,
    title: 'Dicoding Certification',
    issuer: 'Dicoding',
    date: '2025',
    image: '/Sertifikat Dicoding.jpg',
  },
  {
    id: 2,
    title: 'Myskill Certification',
    issuer: 'Myskill',
    date: '2025',
    image: '/Sertif power pivot 3_page-0001.jpg',
  },
  {
    id: 3,
    title: 'Next.js Developer Certification',
    issuer: 'Vercel',
    date: '2023',
    image: '/certificates/nextjs-cert.jpg',
  },
  {
    id: 4,
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    image: '/certificates/typescript-cert.jpg',
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/certificates/aws-cert.jpg',
  },
  {
    id: 6,
    title: 'Web Design Certification',
    issuer: 'Google',
    date: '2022',
    image: '/certificates/webdesign-cert.jpg',
  },
];

export default function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certificates)[0] | null
  >(null);

  const openModal = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sertifikat & Penghargaan
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulan sertifikat dan penghargaan yang telah saya raih dalam
            perjalanan belajar dan karir
          </p>
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
                  <span className="text-gray-500 text-sm">
                    {certificate.date}
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
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
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

              {/* Modal Content */}
              <div className="p-6">
                {/* Certificate Image */}
                <div className="w-full h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
