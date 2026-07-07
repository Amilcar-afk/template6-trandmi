import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import CategoryBrowse from './components/CategoryBrowse';
import ProductTeaser from './components/ProductTeaser';
import LabCredibility from './components/LabCredibility';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <CategoryBrowse />
        <ProductTeaser />
        <LabCredibility />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}