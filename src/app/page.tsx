import HeroSection from '@/shared/components/hero-section';
import Header from '@/shared/components/header';
import FeaturesSection from '@/shared/components/features-section';
import Footer from '@/shared/components/footer';

export default function Home() {
   return (
      <section className="flex min-h-screen flex-col items-center">
         <Header />
         <main className="flex-1 flex flex-col items-center">
            <HeroSection />
            <FeaturesSection />
         </main>
         <Footer />
      </section>
   );
}
