import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award, Clock } from 'lucide-react';
import receptionTeam from '@/assets/reception-team.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Dentistry with Heart',
      description: 'We understand that everyone is different and provide personalized care.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our skilled professionals deliver the highest quality patient care.'
    },
    {
      icon: Award,
      title: '5-Star Reviews',
      description: 'Trusted by our community with outstanding patient satisfaction.'
    },
    {
      icon: Clock,
      title: 'Convenient Hours',
      description: 'Flexible scheduling to accommodate your busy lifestyle.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Thank you for choosing 
                <br />
                <span className="text-primary">St Andrews Dental Practice</span>
              </h2>
              <p className="text-xl text-muted-foreground italic">
                We understand that everyone is different
              </p>
            </div>

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

            <Button size="lg" className="dental-hero-gradient">
              Find Out More About Us
            </Button>
          </div>

          {/* Image and Features */}
          <div className="space-y-8">
            <div className="relative group">
              <img
                src={receptionTeam}
                alt="St Andrews Dental Practice Reception Team"
                className="w-full rounded-2xl shadow-dental transform-gpu transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.title} 
                    className="p-6 border-0 shadow-dental bg-background hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;