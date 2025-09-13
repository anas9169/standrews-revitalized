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
                We believe that <span className="relative inline-block mx-2">
                  <span className="text-primary font-semibold relative z-10 px-4 py-2">everyone</span>
                  <motion.svg
                    className="absolute inset-0 pointer-events-none"
                    width="120"
                    height="50"
                    viewBox="0 0 120 50"
                    fill="none"
                    style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    <motion.path
                      d="M10 25 Q15 12, 30 15 Q45 8, 60 20 Q75 12, 90 15 Q105 20, 110 25 Q105 35, 90 35 Q75 40, 60 30 Q45 42, 30 35 Q15 38, 10 25 Z"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.9 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        delay: 0.8,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      style={{
                        filter: 'drop-shadow(0 2px 4px hsl(var(--primary) / 0.25))'
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