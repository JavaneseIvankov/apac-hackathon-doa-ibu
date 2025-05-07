import HeroSection from '@/shared/components/hero-section';
import Header from '@/shared/components/header';
import FeaturesSection from '@/shared/components/features-section';
import Footer from '@/shared/components/footer-section';

export default function Home() {
   return (
      <section className="container mx-auto min-h-screen flex flex-col">
         <Header />
         <HeroSection />
         <FeaturesSection />
         <Footer />
      </section>
   );
}
