import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  UserPlus, 
  FileText, 
  Calendar, 
  Smile,
  CheckCircle,
  Clock,
  CreditCard,
  Shield
} from 'lucide-react';

const NewPatientsSection = () => {
  const process = [
    {
      icon: FileText,
      title: 'Registration',
      description: 'Complete our simple online registration form or arrive 15 minutes early on your first visit.'
    },
    {
      icon: Calendar,
      title: 'Initial Consultation',
      description: 'Comprehensive examination with our experienced dentist to assess your oral health.'
    },
    {
      icon: Smile,
      title: 'Treatment Plan',
      description: 'Receive a personalized treatment plan tailored to your needs and budget.'
    }
  ];

  const whatToExpect = [
    'Comprehensive oral health examination',
    'Digital X-rays if required',
    'Oral cancer screening',
    'Gum health assessment',
    'Discussion of any concerns',
    'Personalized treatment recommendations',
    'Cost estimates for any required treatment',
    'Oral hygiene advice and tips'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'NHS & Private Options',
      description: 'We offer both NHS and private treatment options to suit your budget.'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Plans',
      description: 'Interest-free payment plans available for private treatments.'
    },
    {
      icon: Clock,
      title: 'Convenient Appointments',
      description: 'Evening and Saturday appointments available by arrangement.'
    }
  ];

  return (
    <section id="new-patients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Special Offer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            New Patient Special
          </h2>
          <p className="text-3xl font-bold text-primary mb-4">
            Complete Examination for £65
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our practice family and experience exceptional dental care. 
            Your journey to optimal oral health starts here.
          </p>
        </div>

        {/* Special Offer Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <UserPlus className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Welcome to St Andrews Dental Practice
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take advantage of our new patient special offer and experience the difference 
                that personalized, compassionate dental care can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="dental-hero-gradient text-lg px-8 py-6">
                  Book Your £65 Examination
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Call: 01767 313 182
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Your First Visit Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title}
                  className="text-center border-0 shadow-dental hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* What to Expect */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              What Your £65 Examination Includes
            </h3>
            <div className="space-y-4">
              {whatToExpect.map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Why Choose Us?
            </h3>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={benefit.title}
                  className="border-0 shadow-dental"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-warm-gray rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Practice?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Register today and take the first step towards optimal oral health. 
            Our friendly team is here to make your dental experience comfortable and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="dental-hero-gradient">
              Register Online Now
            </Button>
            <Button size="lg" variant="outline">
              Download Registration Form
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            * New patient examination offer valid for patients who haven't visited our practice 
            in the last 2 years. Cannot be used in conjunction with NHS treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewPatientsSection;