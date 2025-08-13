'use client';

import { useState } from 'react';

const certificates = [
  {
    id: 1,
    title: 'Dicoding Certification',
    issuer: 'Meta',
    date: '2024',
    image: '/certificates/react-cert.jpg', // Nanti ganti dengan path foto sertifikat asli
    description: 'Advanced React concepts and best practices',
    credentialUrl: 'https://coursera.org/verify/certificate123',
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    image: '/certificates/js-cert.jpg',
    description: 'Comprehensive JavaScript programming and algorithm mastery',
    credentialUrl: 'https://freecodecamp.org/certification/certificate456',
  },
  {
    id: 3,
    title: 'Next.js Developer Certification',
    issuer: 'Vercel',
    date: '2023',
    image: '/certificates/nextjs-cert.jpg',
    description: 'Full-stack development with Next.js framework',
    credentialUrl: 'https://vercel.com/certificate789',
  },
  {
    id: 4,
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    image: '/certificates/typescript-cert.jpg',
    description: 'Type-safe JavaScript development with TypeScript',
    credentialUrl: 'https://docs.microsoft.com/certificate012',
  },
  {
    id: 5,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: '/certificates/aws-cert.jpg',
    description: 'Cloud computing fundamentals and AWS services',
    credentialUrl: 'https://aws.amazon.com/verification/345',
  },
  {
    id: 6,
    title: 'Web Design Certification',
    issuer: 'Google',
    date: '2022',
    image: '/certificates/webdesign-cert.jpg',
    description: 'User experience and interface design principles',
    credentialUrl: 'https://skillshop.exceedlms.com/certificate678',
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
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                {/* Placeholder untuk foto sertifikat */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-lg font-semibold">Certificate</p>
                    <p className="text-sm opacity-80">Click to view</p>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {certificate.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-600 font-medium">
                    {certificate.issuer}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {certificate.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {certificate.description}
                </p>
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
                {/* Certificate Image Placeholder */}
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">🏆</div>
                    <p className="text-2xl font-semibold mb-2">
                      {selectedCertificate.title}
                    </p>
                    <p className="text-lg opacity-80">
                      {selectedCertificate.issuer}
                    </p>
                    <p className="text-sm opacity-60 mt-2">
                      Ganti dengan foto sertifikat asli di:{' '}
                      {selectedCertificate.image}
                    </p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Detail Sertifikat
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-600">
                          Penerbit:
                        </span>
                        <span className="ml-2 font-medium text-gray-900">
                          {selectedCertificate.issuer}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">
                          Tahun:
                        </span>
                        <span className="ml-2 font-medium text-gray-900">
                          {selectedCertificate.date}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">
                          Deskripsi:
                        </span>
                        <p className="mt-1 text-gray-900">
                          {selectedCertificate.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Verifikasi
                    </h4>
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Verifikasi Kredensial
                    </a>
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
