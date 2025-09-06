import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Star, 
  Crown,
  ArrowRight,
  Heart
} from 'lucide-react';

const TreatmentsSection = () => {
  const treatments = [
    {
      icon: ShieldCheck,
      title: 'General Dentistry',
      description: 'Enjoy a lifetime of healthy smiles',
      details: 'Comprehensive dental care including checkups, cleanings, and preventive treatments for optimal oral health.',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400'
    },
    {
      icon: Crown,
      title: 'Restorative Dentistry',
      description: 'Smile naturally, eat comfortably & live well',
      details: 'Expert fillings, crowns, bridges, and other treatments to restore your teeth to their natural function.',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400'
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Enjoy a brighter, whiter smile!',
      details: 'Professional whitening treatments for a confident, radiant smile that lights up every room.',
      color: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/20 dark:text-yellow-400'
    },
    {
      icon: Zap,
      title: 'Teeth Straightening',
      description: 'Transform your smile with braces',
      details: 'Modern orthodontic solutions including clear aligners and traditional braces for perfect alignment.',
      color: 'bg-green-50 text-green-600 dark:bg-green-950/20 dark:text-green-400'
    },
    {
      icon: Star,
      title: 'Cosmetic Dentistry',
      description: 'Helping you smile with confidence',
      details: 'Beautiful veneers, bonding, and complete smile makeovers for your perfect, confident smile.',
      color: 'bg-pink-50 text-pink-600 dark:bg-pink-950/20 dark:text-pink-400'
    },
    {
      icon: Smile,
      title: 'Dental Implants',
      description: 'The gold standard for replacing missing teeth',
      details: 'Permanent, natural-looking tooth replacement that feels and functions just like your real teeth.',
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/20 dark:text-teal-400'
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to your individual needs and goals
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="group border-0 shadow-dental hover:shadow-xl transition-all duration-500 cursor-pointer h-full bg-background">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex p-4 rounded-2xl ${treatment.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {treatment.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {treatment.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {treatment.details}
                      </p>
                    </div>

                    {/* CTA */}
                    <motion.div 
                      className="flex items-center text-primary font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-background rounded-3xl p-12 shadow-dental"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your consultation today and discover how we can help you achieve 
              the healthy, beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="dental-hero-gradient">
                  Book Your Consultation
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline">
                  Call Us: 01767 313 182
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentsSection;