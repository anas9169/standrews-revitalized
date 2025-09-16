import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ExternalLink,
  Car,
  Bus,
  Train
} from 'lucide-react';
import goldenLeafPattern from '@/assets/golden-leaf-pattern.png';

const ContactSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1400], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1400], [0, 150]);

  const openingHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: 'By Car',
      description: 'Free parking available on High Street and nearby car parks'
    },
    {
      icon: Train,
      title: 'By Train',
      description: 'Biggleswade Station is a 5-minute walk from our practice'
    },
    {
      icon: Bus,
      title: 'By Bus',
      description: 'Regular bus services stop directly outside our practice'
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden w-full min-h-screen">
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${goldenLeafPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            transform: 'none'
          }}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Visit Us Today
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We're conveniently located in the heart of Biggleswade, with excellent 
                transport links and parking facilities.
              </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Address */}
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      17a High Street, Biggleswade<br />
                      Bedfordshire, SG18 0JE
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-foreground font-medium">01767 313 182</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">info@standrewsdental.co.uk</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Mon-Thu: 9-6, Fri: 9-5</span>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>

          {/* Map and Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Google Maps */}
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2,
                rotateY: -2 
              }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6003580977895!2d-0.26791222349327404!3d52.087004571950935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877cc1572371dcb%3A0x8115427b12b713b!2sSt%20Andrews%20Dental%20Practice!5e0!3m2!1sen!2sin!4v1757747610698!5m2!1sen!2sin" 
                width="100%" 
                height="350" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </motion.div>
            
            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Contact</h3>
                <Button className="w-full dental-hero-gradient">
                  Book Appointment
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;