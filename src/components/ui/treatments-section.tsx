import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Smile, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Star, 
  Crown,
  ArrowRight 
} from 'lucide-react';

const TreatmentsSection = () => {
  const treatments = [
    {
      icon: ShieldCheck,
      title: 'General Dentistry',
      description: 'Enjoy a lifetime of healthy smiles',
      details: 'Comprehensive dental care including checkups, cleanings, and preventive treatments.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Crown,
      title: 'Restorative Dentistry',
      description: 'Smile naturally, eat comfortably & live well',
      details: 'Fillings, crowns, bridges, and other treatments to restore your teeth.',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Enjoy a brighter, whiter smile!',
      details: 'Professional whitening treatments for a confident, radiant smile.',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Zap,
      title: 'Teeth Straightening',
      description: 'Transform your smile with braces',
      details: 'Modern orthodontic solutions including clear aligners and traditional braces.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Star,
      title: 'Cosmetic Dentistry',
      description: 'Helping you smile with confidence',
      details: 'Veneers, bonding, and smile makeovers for your perfect smile.',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Smile,
      title: 'Dental Implants',
      description: 'The gold standard for replacing missing teeth',
      details: 'Permanent tooth replacement that looks and feels natural.',
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Treatments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to your individual needs and goals
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;
            return (
              <Card
                key={treatment.title}
                className="group border-0 shadow-dental hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl ${treatment.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>

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
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-warm-gray rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your consultation today and discover how we can help you achieve 
            the healthy, beautiful smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="dental-hero-gradient">
              Book Your Consultation
            </Button>
            <Button size="lg" variant="outline">
              Call Us: 01767 313 182
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;