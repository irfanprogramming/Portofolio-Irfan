import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CertificateSection from '@/components/CertificateSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ClientOnly fallback={
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <nav className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="text-xl font-bold text-gray-900">Portfolio</div>
              <div className="hidden md:flex space-x-8">
                <span className="text-gray-700">Loading...</span>
              </div>
            </div>
          </nav>
        </header>
      }>
        <Header />
      </ClientOnly>
      <HeroSection />
      <AboutSection />
      <ClientOnly fallback={
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certificate</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-xl"></div>
              ))}
            </div>
          </div>
        </section>
      }>
        <CertificateSection />
      </ClientOnly>
      <ClientOnly fallback={
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="animate-pulse">
              <div className="bg-gray-200 h-12 w-64 mx-auto rounded mb-8"></div>
              <div className="bg-gray-200 h-64 w-full rounded"></div>
            </div>
          </div>
        </section>
      }>
        <SkillsSection />
      </ClientOnly>
      <ClientOnly fallback={
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Project
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="text-center py-20">
              <div className="animate-pulse">
                <div className="bg-gray-200 h-12 w-48 mx-auto rounded mb-8"></div>
                <div className="bg-gray-200 h-64 w-full rounded"></div>
              </div>
            </div>
          </div>
        </section>
      }>
        <ProjectsSection />
      </ClientOnly>
      <ClientOnly fallback={
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="animate-pulse">
              <div className="bg-gray-200 h-64 w-full rounded"></div>
            </div>
          </div>
        </section>
      }>
        <ContactSection />
      </ClientOnly>
      <Footer />
    </main>
  );
}
