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
      <Header />
      <HeroSection />
      <AboutSection />
      <CertificateSection />
      <SkillsSection />
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
      <ContactSection />
      <Footer />
    </main>
  );
}
