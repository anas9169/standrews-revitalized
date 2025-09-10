import React from 'react';
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're conveniently located in the heart of Biggleswade, with excellent 
            transport links and parking facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <Card className="border-0 shadow-dental">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      St Andrews Dental Practice<br />
                      17a High Street<br />
                      Biggleswade<br />
                      Bedfordshire, SG18 0JE
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      asChild
                    >
                      <a 
                        href="https://maps.google.com/?q=17a+High+Street+Biggleswade+SG18+0JE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone & Email */}
            <Card className="border-0 shadow-dental">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">01767 313 182</p>
                      <Button size="sm" className="dental-hero-gradient" asChild>
                        <a href="tel:01767313182">Call Now</a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@standrewsdental.co.uk</p>
                      <Button size="sm" variant="outline" asChild>
                        <a href="mailto:info@standrewsdental.co.uk">Send Email</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-dental">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Opening Hours</h3>
                </div>
                
                <div className="space-y-4">
                  {openingHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency appointments</strong> available outside normal hours. 
                    Please call for urgent dental care.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Getting Here */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-dental">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Getting Here</h3>
                
                <div className="space-y-6">
                  {transportOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <div key={option.title} className="flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{option.title}</h4>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 bg-warm-gray rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Need Directions?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We're located in the heart of Biggleswade High Street, easily accessible 
                    from all surrounding areas.
                  </p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a 
                      href="https://maps.google.com/?q=17a+High+Street+Biggleswade+SG18+0JE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;