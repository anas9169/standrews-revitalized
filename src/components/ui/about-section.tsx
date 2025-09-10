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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          style={{ y: y2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank you for choosing 
            <br />
            <span className="text-primary">St Andrews Dental Practice</span>
          </h2>
          <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto">
            We understand that everyone is different
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y: y1 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We pride ourselves on providing dental care that focuses on your health and 
                delivers results that you will appreciate and value.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We take our time to listen to your dental concerns and needs. It is our aim 
                to offer dentistry with heart to you and your family by delivering the 
                highest quality patient care.
              </p>
            </div>

            <Button size="lg" className="dental-hero-gradient group">
              Find Out More About Us
              <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ opacity }}
            className="relative"
          >
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={receptionTeam}
                alt="St Andrews Dental Practice Reception Team"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <Card className="p-8 border-0 shadow-dental hover:shadow-xl transition-all duration-300 bg-warm-gray">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary">{stat.number}</div>
                    <div className="font-semibold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 h-full border-0 shadow-dental hover:shadow-xl transition-all duration-300 bg-background">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;