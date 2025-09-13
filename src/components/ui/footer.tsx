import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Treatments', href: '#treatments' },
    { name: 'Meet the Team', href: '#team' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'New Patients', href: '#new-patients' }
  ];

  const treatments = [
    { name: 'General Dentistry', href: '#treatments' },
    { name: 'Cosmetic Dentistry', href: '#treatments' },
    { name: 'Dental Implants', href: '#treatments' },
    { name: 'Teeth Whitening', href: '#treatments' },
    { name: 'Orthodontics', href: '#treatments' },
    { name: 'Emergency Care', href: '#contact' }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Practice Info */}
          <div className="lg:col-span-1 space-y-6">
            <img src="/assets/st-andrews-logo-updated.png" alt="St Andrews Dental Practice" className="h-12 w-auto" />
            <p className="text-gray-300 leading-relaxed">
              Providing dentistry with heart to Biggleswade and surrounding areas. 
              Our experienced team is committed to your oral health and comfort.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Our Treatments</h3>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment.name}>
                  <a 
                    href={treatment.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {treatment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>17a High Street</p>
                  <p>Biggleswade</p>
                  <p>Bedfordshire, SG18 0JE</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:01767313182" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  01767 313 182
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@standrewsdental.co.uk" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@standrewsdental.co.uk
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon-Thu: 9:00 AM - 6:00 PM</p>
                  <p>Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: By Appointment</p>
                </div>
              </div>
            </div>

            <Button className="w-full dental-hero-gradient">
              Book Appointment Online
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© 2025 St Andrews Dental Practice. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Site by{' '}
              <a 
                href="https://strandcreative.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                STRANDcreative
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
            <span className="font-medium">Dental Emergency?</span>
            <span>Call us immediately: </span>
            <a 
              href="tel:01767313182" 
              className="font-bold underline hover:no-underline"
            >
              01767 313 182
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;