import React from 'react';
import Navigation from '@/components/ui/navigation';
import Hero from '@/components/ui/hero';
import AboutSection from '@/components/ui/about-section';
import TreatmentsSection from '@/components/ui/treatments-section';
import ReviewsSection from '@/components/ui/reviews-section';
import ContactSection from '@/components/ui/contact-section';
import Footer from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <TreatmentsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
