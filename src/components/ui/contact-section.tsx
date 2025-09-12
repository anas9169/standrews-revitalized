import React from 'react';
import { motion } from 'framer-motion';
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

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2,
                rotateY: -2 
              }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src="/assets/dentist-2.jpg"
                alt="Contact Us"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
            
            {/* Quick Contact Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6"
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