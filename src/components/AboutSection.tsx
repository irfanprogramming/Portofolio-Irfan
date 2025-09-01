import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/Foto chimory irfan.jpg"
                    alt="Muhamad Irfan"
                    width={320}
                    height={320}
                    className="w-full h-full rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-4 left-4 w-80 h-80 rounded-2xl bg-blue-200 dark:bg-blue-900 opacity-50 -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Saya adalah seorang data analyst yang berfokus mengubah data
              kompleks menjadi insight yang dapat ditindaklanjuti
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Dengan latar belakang pendidikan di bidang teknologi informasi,
              saya memiliki keahlian analisis data dan manajemen proyek, saya
              terbiasa mengambil keputusan berbasis data dan menghadirkan solusi
              yang efektif untuk kebutuhan bisnis.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Saya memiliki passion untuk memanfaatkan teknologi dan analitik
              dalam memecahkan masalah nyata serta mendorong pertumbuhan
              perusahaan.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="/Cv Muhamad Irfan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
