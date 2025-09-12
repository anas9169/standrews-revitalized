import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award, Clock, Shield, Stethoscope } from 'lucide-react';
import receptionTeam from '@/assets/reception-team.jpg';

const AboutSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -150]);
  const y2 = useTransform(scrollY, [0, 800], [0, -75]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Patients",
      description: "Trusted by our community"
    },
    {
      icon: Award,
      number: "5★",
      label: "Google Reviews",
      description: "Outstanding patient care"
    },
    {
      icon: Clock,
      number: "20+",
      label: "Years Experience",
      description: "Professional expertise"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Dentistry with Heart",
      description: "We understand that everyone is different and provide personalized care tailored to your individual needs."
    },
    {
      icon: Shield,
      title: "Quality Care",
      description: "Delivering the highest standard of dental care with modern techniques and technology."
    },
    {
      icon: Stethoscope,
      title: "Comprehensive Service",
      description: "From routine check-ups to complex treatments, we're here for all your dental needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-gray">
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
                  About Our Practice
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
                At St Andrews Dental Practice, we combine modern dentistry with a personal touch. 
                Our experienced team is dedicated to providing exceptional care in a comfortable, 
                welcoming environment.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                We believe that <span className="relative inline-block">
                  <span className="text-primary font-semibold">everyone</span>
                  <motion.svg
                    className="absolute -inset-1 w-full h-full"
                    viewBox="0 0 100 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.ellipse
                      cx="50"
                      cy="10"
                      rx="45"
                      ry="8"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                      initial={{ strokeDashoffset: 200 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.svg>
                </span> deserves access to high-quality dental care in a comfortable, modern environment.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients</div>
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
                rotateY: 2,
                rotateX: 2
              }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={receptionTeam}
                alt="St Andrews Dental Practice Reception"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating decoration */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;