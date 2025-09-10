import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Star, Users, Calendar, Award } from 'lucide-react';
import heroImage from '@/assets/dental-practice-hero.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Patients" },
    { icon: Star, number: "4.9", label: "Star Rating" },
    { icon: Calendar, number: "25+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Quality Care" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <img
          src={heroImage}
          alt="St Andrews Dental Practice Interior"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 40 }}
      />

      {/* Content */}
      <motion.div 
        className="relative container mx-auto px-4 py-20"
        style={{ opacity }}
      >
        <div className="max-w-5xl">
          {/* New Patient Promotion with enhanced animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-white/95 backdrop-blur-sm rounded-full mb-8 shadow-lg cursor-pointer"
          >
            <motion.span 
              className="text-primary font-bold text-xl mr-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <span className="text-primary font-bold text-xl">
              New Patient Exam Now £65
            </span>
          </motion.div>

          {/* Main Heading with staggered animation */}
          <motion.div className="mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight"
            >
              <motion.span 
                className="block"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Proudly providing
              </motion.span>
              <motion.span 
                className="block text-primary bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
                whileHover={{ x: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                dentistry with heart
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Contact Info with parallax effect */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ y: y2 }}
            className="flex flex-col lg:flex-row gap-6 mb-12"
          >
            <motion.div 
              className="flex items-center gap-3 text-white/90 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-3"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-lg">17a High Street, Biggleswade, Bedfordshire, SG18 0JE</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-3 text-white/90 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-3"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <Phone className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">01767 313 182</span>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)"
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="dental-hero-gradient text-xl px-10 py-8 rounded-2xl shadow-2xl">
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Book Appointment
                </motion.span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 h-6 w-6" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.25)"
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-xl px-10 py-8 rounded-2xl backdrop-blur-sm"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;