import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import heroImage from '@/assets/dental-practice-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="St Andrews Dental Practice Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* New Patient Promotion */}
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 animate-fade-in-up">
            <span className="text-primary font-semibold text-lg">
              New Patient Exam Now £65
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Proudly providing
            <br />
            <span className="text-primary">dentistry with heart</span>
          </h1>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delayed">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5 text-primary" />
              <span>17a High Street, Biggleswade, Bedfordshire, SG18 0JE</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="h-5 w-5 text-primary" />
              <span>01767 313 182</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
            <Button size="lg" className="dental-hero-gradient text-lg px-8 py-6">
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;